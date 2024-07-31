import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-color: #f7fafc;
    color: #1a202c;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  p {
    margin-bottom: 1rem;
  }

  ul, ol {
    margin: 0;
    padding-left: 1.5rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.5rem;
    overflow-x: auto; 
  }

  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
  }

  @media (max-width: 768px) {
    html, body {
      font-size: 14px;
    }

    th, td {
      font-size: 0.875rem; 
    }

    table {
      font-size: 0.875rem; 
    }

    
    p, h1, h2, h3, h4, h5, h6 {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    html, body {
      font-size: 12px;
    }

    th, td {
      font-size: 0.75rem; 
    }

    table {
      font-size: 0.75rem; 
    }

    
    p, h1, h2, h3, h4, h5, h6 {
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }
  }
`;
