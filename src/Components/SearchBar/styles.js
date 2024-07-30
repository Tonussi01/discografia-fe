import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff; 
  border: 1px solid #e2e8f0; 
  border-radius: 8px; 
  padding: 8px;
  max-width: 600px;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 8px;
  font-size: 1rem;
  outline: none;
`;

export const SearchIcon = styled(FaSearch)`
  color: #4a5568; 
`;
