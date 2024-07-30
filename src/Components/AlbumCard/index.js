import React from 'react';
import { CardContainer, AlbumImage, AlbumInfo, AlbumTitle, AlbumArtist } from './styles';

const AlbumCard = ({ album }) => {
  return (
    <CardContainer>
      <AlbumImage src={album.image} alt={album.name} />
      <AlbumInfo>
        <AlbumTitle>{album.name}</AlbumTitle>
        <AlbumArtist>{album.artist}</AlbumArtist>
      </AlbumInfo>
    </CardContainer>
  );
};

export default AlbumCard;
