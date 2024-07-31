import React from 'react';
import { CardContainer, AlbumImage, AlbumInfo, AlbumTitle, AlbumArtist } from './styles';

const AlbumCard = ({ album }) => {
  return (
    <CardContainer>
      <AlbumImage src={album.imageUrl || "https://via.placeholder.com/200"} alt={album.nome} />
      <AlbumInfo>
        <AlbumTitle>{album.nome}</AlbumTitle>
        <AlbumArtist>{album.descricao || 'Descrição não disponível'}</AlbumArtist>
      </AlbumInfo>
    </CardContainer>
  );
};

export default AlbumCard;
