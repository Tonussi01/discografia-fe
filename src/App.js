import React from 'react';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import SearchBar from './Components/SearchBar';
import SongsTab from './Components/SongsTab';
import AlbumsTab from './Components/AlbumsTab';
import { Header, Title, Tabs, TabButton, Main } from './styles';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Header>
        <Title>Discografia de DevMusic</Title>
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
        </Routes>
      </Main>
    </div>
  );
}

export default App;
