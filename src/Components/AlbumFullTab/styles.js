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
  max-width: 600px;
  height: auto;
`;

export const AlbumInfo = styled.div`
  text-align: center;
  margin: 16px 0;
`;

export const AlbumTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const AlbumArtist = styled.p`
  color: #718096;
`;

export const SongsList = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 16px;
`;

export const SongItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  background-color: #ffffff;

  &:nth-child(even) {
    background-color: #f9fafb;
  }
`;

export const SongName = styled.div`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 500;
`;

export const SongDuration = styled.div`
  flex: 0 0 auto;
  padding: 10px;
  color: #4a5568;
`;

export const AddSongButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 8px;
  border: 5px;
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
  padding:10px;
  font-size: 1rem;
  
  
  &:hover {
    color: #be123c;
  }
`;
