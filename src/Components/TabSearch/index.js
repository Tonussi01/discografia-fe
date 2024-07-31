import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../api';
import { ResultsContainer, ResultItem } from './styles';

const TabSearch = () => {
  const { state } = useLocation(); // Obtém o estado da navegação
  const [results, setResults] = useState({ musicas: [], disco: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const { data } = await api.get(`/busca?query=${encodeURIComponent(state.query)}`);
        // Ajusta para a nova estrutura da resposta
        setResults({
          musicas: Array.isArray(data.musicas) ? data.musicas : [],
          disco: Array.isArray(data.disco) ? data.disco : []
        });
      } catch (error) {
        console.error('Erro ao buscar:', error);
      } finally {
        setLoading(false);
      }
    };

    if (state.query) {
      fetchResults();
    }
  }, [state.query]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <ResultsContainer>
      <h3>Álbuns</h3>
      {Array.isArray(results.disco) && results.disco.length > 0 ? (
        <ul>
          {results.disco.map((album) => (
            <ResultItem key={album.id}>{album.nome}</ResultItem>
          ))}
        </ul>
      ) : (
        <p>Nenhum álbum encontrado</p>
      )}
      <h3>Músicas</h3>
      {Array.isArray(results.musicas) && results.musicas.length > 0 ? (
        <ul>
          {results.musicas.map((musica) => (
            <ResultItem key={musica.id}>{musica.nome}</ResultItem>
          ))}
        </ul>
      ) : (
        <p>Nenhuma música encontrada</p>
      )}
    </ResultsContainer>
  );
};

export default TabSearch;
