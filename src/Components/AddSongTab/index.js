import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../api';
import { Container, Form, Input, Button } from './styles';

const AddSongTab = () => {
  const location = useLocation(); // Hook para acessar o estado da navegação
  const navigate = useNavigate(); // Hook para navegação
  const { id_album } = location.state || {}; // Obtém o ID do álbum do estado da navegação
  const [songData, setSongData] = useState({
    nome: '',
    duracao: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSongData({
      ...songData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Adiciona o id_album ao payload
    const dataToSend = {
      nome: songData.nome,
      duracao: songData.duracao,
      id_album: id_album, // Corrigido para id_album
    };

    try {
      // Envia a requisição POST para adicionar a música
      const response = await api.post('/musicas', dataToSend);
      console.log('Música adicionada com sucesso:', response.data);
      navigate(-1); // Navega para a página anterior após adicionar a música
    } catch (error) {
      console.error('Erro ao adicionar música:', error.response?.data || error.message);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome da Música</label>
          <Input id="nome" type="text" name="nome" value={songData.nome} onChange={handleChange} placeholder="Nome da música" required />
        </div>
        <div>
          <label htmlFor="duracao">Duração (em segundos)</label>
          <Input id="duracao" type="number" name="duracao" value={songData.duracao} onChange={handleChange} placeholder="Duração" required />
        </div>
        <Button type="submit">Adicionar Música</Button>
      </Form>
    </Container>
  );
};

export default AddSongTab;
