import React from 'react';
import api from './../../api';
import { Container, Form, Input, TextArea, Button } from './styles'; // Certifique-se de que o caminho esteja correto

const AddAlbumTab = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Use os nomes dos campos do formulário corretamente
    const albumData = {
      nome: event.target.name.value,       // Corrigido para 'name'
      descricao: event.target.description.value // Corrigido para 'description'
    };

    try {
      const response = await api.post('/disco', albumData);
      console.log('Álbum adicionado com sucesso:', response.data);
    } catch (error) {
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
        <Button type="submit">Adicionar Álbum</Button>
      </Form>
    </Container>
  );
};

export default AddAlbumTab;
