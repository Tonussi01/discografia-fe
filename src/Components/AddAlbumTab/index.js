import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './../../api';
import { Container, Form, Input, TextArea, Button, Message } from './styles'; 

const AddAlbumTab = () => {
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const albumData = {
      nome: event.target.name.value,        
      descricao: event.target.description.value, 
      imagem_url: event.target.image_url.value 
    };

    try {
      const response = await api.post('/disco', albumData);
      setMessage('Álbum adicionado com sucesso!');
      setIsSuccess(true);
      setTimeout(() => navigate('/albums'), 2000); // Redirecionar após 2 segundos para mostrar a mensagem
    } catch (error) {
      setMessage('Erro ao adicionar o álbum.');
      setIsSuccess(false);
      console.error('Erro ao adicionar o álbum:', error.response?.data || error.message);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome do Álbum</label>
          <Input id="name" type="text" name="name" placeholder="Nome do álbum" required />
        </div>
        <div>
          <label htmlFor="description">Descrição</label>
          <TextArea id="description" name="description" placeholder="Descrição" required />
        </div>
        <div>
          <label htmlFor="image_url">URL da Imagem</label>
          <Input id="image_url" type="text" name="image_url" placeholder="URL da imagem" />
        </div>
        <Button type="submit">Adicionar Álbum</Button>
        {message && (
          <Message isSuccess={isSuccess}>{message}</Message>
        )}
      </Form>
    </Container>
  );
};

export default AddAlbumTab;
