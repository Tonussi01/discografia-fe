import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { AddAlbumButton, AlbumList, Container, AlbumItem } from './styles'; // Importar o novo styled component
import AlbumCard from '../AlbumCard';

const AlbumsTab = () => {
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await api.get('/disco');
        setAlbums(response.data);
      } catch (error) {
        console.error('Erro ao buscar álbuns:', error);
      }
    };

    fetchAlbums();
  }, []);

  const handleAddAlbumClick = () => {
    navigate('/addalbum');
  };

  const handleAlbumClick = (id) => {
    navigate(`/albums/${id}`); // Redireciona para a tela do álbum selecionado
  };

  return (
    <Container>
      <AddAlbumButton onClick={handleAddAlbumClick}>Adicionar Disco</AddAlbumButton>
      <AlbumList>
        {albums.map((album) => (
          <AlbumItem key={album.id} onClick={() => handleAlbumClick(album.id)}>
            <AlbumCard album={album} />
          </AlbumItem>
        ))}
      </AlbumList>
    </Container>
  );
};

export default AlbumsTab;
