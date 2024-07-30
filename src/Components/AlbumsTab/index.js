import React from 'react';
import { AddAlbumButton, AlbumList, Container } from './styles';
import AlbumCard from '../AlbumCard';

const exampleAlbums = [
  {
    name: "Álbum Exemplo 1",
    artist: "Artista Exemplo 1",
    image: "https://via.placeholder.com/200"
  },
  {
    name: "Álbum Exemplo 2",
    artist: "Artista Exemplo 2",
    image: "https://via.placeholder.com/200"
  }
];

const AlbumsTab = () => {
  return (
    <Container>
      <AddAlbumButton>Adicionar Disco</AddAlbumButton>
      <AlbumList>
        {exampleAlbums.map((album, index) => (
          <AlbumCard key={index} album={album} />
        ))}
      </AlbumList>
    </Container>
  );
};

export default AlbumsTab;
