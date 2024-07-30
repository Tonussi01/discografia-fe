import styled from 'styled-components';

export const Header = styled.header`
  background-color: #2d3748; 
  color: #ffffff; 
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 
`;

export const Title = styled.h1`
  font-size: 2rem; 
  margin-bottom: 16px;
`;

export const Tabs = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 16px;
`;

export const TabButton = styled.button`
  background: transparent;
  border: none;
  color: #60a5fa; 
  padding: 8px 16px;
  cursor: pointer;
  font-size: 1.125rem; 
  ${({ active }) => active && `border-bottom: 2px solid #60a5fa;`}
`;

export const Main = styled.main`
  padding: 24px;
`;
