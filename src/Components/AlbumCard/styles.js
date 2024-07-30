import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #ffffff; 
  border: 1px solid #e2e8f0; 
  border-radius: 8px; 
  overflow: hidden;
  width: 200px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

export const AlbumImage = styled.img`
  width: 100%;
  height: auto;
`;

export const AlbumInfo = styled.div`
  padding: 8px;
  text-align: center;
`;

export const AlbumTitle = styled.h3`
  font-size: 1.125rem; 
  font-weight: bold;
  margin: 0;
`;

export const AlbumArtist = styled.p`
  color: #718096; 
  margin: 0;
`;
