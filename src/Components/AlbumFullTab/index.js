import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api';
import { Container, AlbumImage, AlbumInfo, AlbumTitle, AlbumArtist, SongsList, SongItem, AddSongButton, DeleteButton } from './styles';
import { FaTrash } from 'react-icons/fa'; // Importa o ícone de lixeira

const AlbumFullTab = () => {
  const { id } = useParams(); // Obtém o ID do álbum da URL
  const navigate = useNavigate(); // Hook para navegação
  const [album, setAlbum] = useState(null); // Estado inicial como null para lidar com o carregamento
  const [musicas, setMusicas] = useState([]); // Estado para armazenar as músicas do álbum

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await api.get(`/disco/${id}`); // Obtém os detalhes do álbum
        setAlbum(response.data);
      } catch (error) {
        console.error('Erro ao buscar álbum:', error);
      }
    };

    const fetchMusicas = async () => {
      try {
        const response = await api.get(`/musicas/album/${id}`); // Obtém as músicas do álbum
        setMusicas(response.data);
      } catch (error) {
        console.error('Erro ao buscar músicas:', error);
      }
    };

    fetchAlbum();
    fetchMusicas();
  }, [id]);

  const handleAddSongClick = () => {
    navigate('/addsong', { state: { id_album: id } }); // Passa o ID do álbum como estado
  };

  const handleDeleteSong = async (songId) => {
    const confirmDelete = window.confirm('Tem certeza de que deseja excluir esta música?');

    if (confirmDelete) {
      try {
        await api.delete(`/musicas/${songId}`); // Envia a solicitação para excluir a música
        setMusicas(musicas.filter(song => song.id !== songId)); // Atualiza a lista de músicas
      } catch (error) {
        console.error('Erro ao excluir música:', error);
      }
    }
  };

  if (!album) {
    return <p>Carregando...</p>; // Exibe uma mensagem enquanto os dados estão sendo carregados
  }

  return (
    <Container>
      <AlbumImage src={album.imagem_url || "https://via.placeholder.com/500"} alt={album.nome} />
      <AlbumInfo>
        <AlbumTitle>{album.nome}</AlbumTitle>
        <AlbumArtist>{album.descricao || 'Descrição não disponível'}</AlbumArtist>
      </AlbumInfo>
      <AddSongButton onClick={handleAddSongClick}>Adicionar Música ao Álbum</AddSongButton>
      <SongsList>
        {musicas.length > 0 ? (
          musicas.map((song) => (
            <SongItem key={song.id}>
              <div>{song.nome}</div>
              <div>{song.duracao} segundos</div>
              <DeleteButton onClick={() => handleDeleteSong(song.id)}>
                <FaTrash />
              </DeleteButton>
            </SongItem>
          ))
        ) : (
          <p>Sem músicas disponíveis</p>
        )}
      </SongsList>
    </Container>
  );
};

export default AlbumFullTab;
