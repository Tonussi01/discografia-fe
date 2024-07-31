// src/components/AlbumCard/index.js
import React from 'react';
import { CardContainer, AlbumImage, AlbumInfo, AlbumTitle, AlbumArtist, DeleteButton } from './styles';

const AlbumCard = ({ album, onDelete }) => {
  const handleDeleteClick = (event) => {
    event.stopPropagation(); // Impede a navegação ao clicar no botão
    if (window.confirm('Tem certeza de que deseja excluir este álbum?')) {
      onDelete(album.id); // Chama a função de excluir
    }
  };

  return (
    <CardContainer>
      <DeleteButton onClick={handleDeleteClick}>🗑️</DeleteButton>
      <AlbumImage src={album.imagem_url || "https://via.placeholder.com/200"} alt={album.nome} />
      <AlbumInfo>
        <AlbumTitle>{album.nome}</AlbumTitle>
        <AlbumArtist>{album.descricao || 'Descrição não disponível'}</AlbumArtist>
      </AlbumInfo>
    </CardContainer>
  );
};

export default AlbumCard;
