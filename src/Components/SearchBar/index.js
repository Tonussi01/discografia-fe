import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContainer, SearchInput, SearchIcon } from './styles';
import { FaSearch } from 'react-icons/fa'; 

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() === '') {
      return;
    }
    navigate('/search', { state: { query } });
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Digite o álbum ou faixa que deseja"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <SearchIcon onClick={handleSearch}>
        <FaSearch size={20} />
      </SearchIcon>
    </SearchContainer>
  );
};

export default SearchBar;
