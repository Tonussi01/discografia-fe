import styled from 'styled-components';

export const SongsList = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SongItem = styled.div`
  background-color: #ffffff;
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px; 
  width: 100%;
  max-width: 600px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SongTitle = styled.h3`
  font-size: 1.125rem; 
  font-weight: bold; 
  margin: 0;
`;

export const SongArtist = styled.p`
  color: #718096;
  margin: 0;
`;
