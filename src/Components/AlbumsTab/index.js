import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { AddAlbumButton, AlbumList, Container, AlbumItem } from './styles';
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
    navigate(`/albums/${id}`);
  };

  const handleDeleteAlbum = async (id) => {
    try {
      await api.delete(`/disco/${id}`);
      setAlbums(albums.filter(album => album.id !== id));
    } catch (error) {
      console.error('Erro ao deletar álbum:', error);
    }
  };

  return (
    <Container>
      <AddAlbumButton onClick={handleAddAlbumClick}>Adicionar Disco</AddAlbumButton>
      <AlbumList>
        {albums.map((album) => (
          <AlbumItem key={album.id} onClick={() => handleAlbumClick(album.id)}>
            <AlbumCard album={album} onDelete={handleDeleteAlbum} />
          </AlbumItem>
        ))}
      </AlbumList>
    </Container>
  );
};

export default AlbumsTab;
