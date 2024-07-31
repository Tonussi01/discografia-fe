import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: #f9fafb;
`;

export const AlbumImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
`;

export const AlbumInfo = styled.div`
  text-align: center;
  margin: 16px 0;
`;

export const AlbumTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const AlbumArtist = styled.p`
  color: #718096;
`;

export const SongsList = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const SongItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
`;

export const AddSongButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 16px;
  
  &:hover {
    background-color: #2563eb;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #e11d48;
  cursor: pointer;
  font-size: 1.25rem;
  
  &:hover {
    color: #be123c;
  }
`;
