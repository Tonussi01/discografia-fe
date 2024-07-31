import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHeader = styled.thead`
  background-color: #f4f4f4;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`;

export const TableHeaderCell = styled.th`
  text-align: center;
  padding: 10px;
  border-right: 1px solid #ddd;
  &:last-child {
    border-right: none;
  }
`;

export const TableBody = styled.tbody`
  background-color: #fff;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.td`
  text-align: center;
  padding: 10px;
  border-right: 1px solid #ddd;
  &:last-child {
    border-right: none;
  }
`;

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #f56565;
  font-size: 1.2rem;
  &:hover {
    color: #e53e3e;
  }
`;

export const ConfirmationDialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid #ddd;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  z-index: 1000;
  p {
    margin-bottom: 10px;
  }
  button {
    margin-right: 10px;
    padding: 10px;
    border: none;
    cursor: pointer;
    background: #f56565;
    color: white;
    &:hover {
      background: #e53e3e;
    }
  }
`;
