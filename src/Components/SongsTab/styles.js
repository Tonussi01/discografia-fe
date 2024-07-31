import styled from 'styled-components';

export const SongsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const SongItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  position: relative;
`;

export const SongTitle = styled.div`
  flex: 2;
`;

export const SongArtist = styled.div`
  flex: 1;
`;

export const SongDuration = styled.div`
  flex: 1;
`;

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #f56565;
  font-size: 1.2rem;
  &:hover {
    color: #e53e3e;
  }
`;

export const ConfirmationDialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid #ddd;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  z-index: 1000;
  p {
    margin-bottom: 10px;
  }
  button {
    margin-right: 10px;
    padding: 10px;
    border: none;
    cursor: pointer;
    background: #f56565;
    color: white;
    &:hover {
      background: #e53e3e;
    }
  }
`;
