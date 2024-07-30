import styled from 'styled-components';

export const AddAlbumButton = styled.button`
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

export const AlbumList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: #f9fafb; 
`;
