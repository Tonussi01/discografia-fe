import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  width: 200px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const AlbumImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const AlbumInfo = styled.div`
  padding: 12px;
  text-align: center;
`;

export const AlbumTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
`;

export const AlbumArtist = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: #ef4444;
  transition: color 0.3s ease;
  &:hover {
    color: #dc2626;
  }
`;
