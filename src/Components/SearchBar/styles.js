import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center; // Alinha verticalmente os itens no centro
  padding: 20px;
  background-color: #f9fafb;
  width: 100%;
  max-width: 600px; // Define o tamanho máximo do container
`;

export const SearchInput = styled.input`
  flex: 1; // Faz com que o input ocupe o espaço disponível
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  margin-right: 10px; // Espaçamento entre o input e o botão
`;

export const SearchIcon = styled.button`
  background: #3b82f6;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  &:hover {
    background: #2563eb;
  }
`;
