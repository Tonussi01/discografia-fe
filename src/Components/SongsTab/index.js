import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import api from '../../api';
import { Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell, DeleteButton, ConfirmationDialog } from './styles';

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

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <>
      <Table>
        <TableHeader>
          <tr>
            <TableHeaderCell>Nome</TableHeaderCell>
            <TableHeaderCell>Álbum</TableHeaderCell>
            <TableHeaderCell>Duração</TableHeaderCell>
            <TableHeaderCell>Ações</TableHeaderCell>
          </tr>
        </TableHeader>
        <TableBody>
          {songs.map((song) => (
            <TableRow key={song.id}>
              <TableCell>{song.nome}</TableCell>
              <TableCell>{song.nome_album}</TableCell>
              <TableCell>{formatDuration(song.duracao)}</TableCell>
              <TableCell>
                <DeleteButton onClick={() => confirmDelete(song.id)}>
                  <FaTrashAlt />
                </DeleteButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {showConfirmation && (
        <ConfirmationDialog>
          <p>Tem certeza que deseja excluir esta música?</p>
          <button onClick={handleDelete}>Sim</button>
          <button onClick={() => setShowConfirmation(false)}>Não</button>
        </ConfirmationDialog>
      )}
    </>
  );
};

export default SongsTab;
