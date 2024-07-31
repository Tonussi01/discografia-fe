import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: #f9fafb;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 100px;
`;

export const Button = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 16px;

  &:hover {
    background-color: #2563eb;
  }
`;

export const Message = styled.div`
  margin-top: 16px;
  padding: 10px;
  border-radius: 8px;
  color: ${(props) => (props.isSuccess ? '#2f855a' : '#e53e3e')};
  background-color: ${(props) => (props.isSuccess ? '#d4f1d4' : '#fddede')};
  border: 1px solid ${(props) => (props.isSuccess ? '#2f855a' : '#e53e3e')};
`;
