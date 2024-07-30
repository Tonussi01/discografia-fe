import React from 'react';
import { SearchContainer, SearchInput, SearchIcon } from './styles';

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Digite o álbum ou faixa que deseja" />
      <SearchIcon size={20} />
    </SearchContainer>
  );
};

export default SearchBar;
