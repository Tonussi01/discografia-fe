import React from 'react';
import { SongsList, SongItem, SongTitle, SongArtist } from './styles';

const SongsTab = () => {
  return (
    <SongsList>
      <SongItem>
        <SongTitle>Faixa Exemplo 1</SongTitle>
        <SongArtist>Artista Exemplo 1</SongArtist>
      </SongItem>
      <SongItem>
        <SongTitle>Faixa Exemplo 2</SongTitle>
        <SongArtist>Artista Exemplo 2</SongArtist>
      </SongItem>
    </SongsList>
  );
};

export default SongsTab;
