import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import api from '../../api';
import { SongsList, SongItem, SongTitle, SongArtist, SongDuration, DeleteButton, ConfirmationDialog } from './styles';

const SongsTab = () => {
  const [songs, setSongs] = useState([]);
  const [deletingSongId, setDeletingSongId] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const { data } = await api.get('/musicas');
        setSongs(data);
      } catch (error) {
        console.error('Erro ao buscar músicas:', error);
      }
    };

    fetchSongs();
  }, []);

  const handleDelete = async () => {
    try {
      await api.delete(`/musicas/${deletingSongId}`);
      setSongs(prevSongs => prevSongs.filter(song => song.id !== deletingSongId));
      setDeletingSongId(null);
      setShowConfirmation(false);
    } catch (error) {
      console.error('Erro ao deletar música:', error);
    }
  };

  const confirmDelete = (songId) => {
    setDeletingSongId(songId);
    setShowConfirmation(true);
  };

  return (
    <SongsList>
      {songs.map((song) => (
        <SongItem key={song.id}>
          <SongTitle>{song.nome}</SongTitle>
          <SongArtist>{song.nome_album}</SongArtist>
          <SongDuration>{song.duracao} segundos</SongDuration>
          <DeleteButton onClick={() => confirmDelete(song.id)}>
            <FaTrashAlt />
          </DeleteButton>
        </SongItem>
      ))}
      {showConfirmation && (
        <ConfirmationDialog>
          <p>Tem certeza que deseja excluir esta música?</p>
          <button onClick={handleDelete}>Sim</button>
          <button onClick={() => setShowConfirmation(false)}>Não</button>
        </ConfirmationDialog>
      )}
    </SongsList>
  );
};

export default SongsTab;
