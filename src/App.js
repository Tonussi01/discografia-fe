import React from 'react';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import SearchBar from './Components/SearchBar';
import SongsTab from './Components/SongsTab';
import AlbumsTab from './Components/AlbumsTab';
import AlbumFullTab from './Components/AlbumFullTab';
import AddAlbumTab from './Components/AddAlbumTab';
import AddSongTab from './Components/AddSongTab'; 
import { Header, Title, Tabs, TabButton, Main } from './styles';
import TabSearch from './Components/TabSearch';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Header>
        <Title>Discografia TIÃO CARREIRO E PARDINHO</Title>
        <SearchBar />
        <Tabs>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <TabButton active={location.pathname === '/'}>Músicas</TabButton>
          </Link>
          <Link to="/albums" style={{ textDecoration: 'none' }}>
            <TabButton active={location.pathname === '/albums'}>Álbuns</TabButton>
          </Link>
        </Tabs>
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<SongsTab />} />
          <Route path="/albums" element={<AlbumsTab />} />
          <Route path="/albums/:id" element={<AlbumFullTab />} /> 
          <Route path="/addalbum" element={<AddAlbumTab />} />
          <Route path="/addsong" element={<AddSongTab />} /> 
          <Route path="/search" element={<TabSearch />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
