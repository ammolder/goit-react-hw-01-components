import styled from 'styled-components';

export const Table = styled.table`
  width: 500px;
  border: none;
  margin-bottom: 20px;
`;

export const Thead = styled.thead`
  font-weight: bold;
  text-align: left;
  border: none;
  padding: 10px 15px;
  background: #00ffeb;
  font-size: 14px;
`;

export const TheadItem = styled.tr`
  :nth-child(even) {
    background: #a4c11bba;
  }
`;

export const Td = styled.td`
  :first-child {
    border-radius: 8px 0 0 8px;
  }
  :last-child {
    border-radius: 0 8px 8px 0;
  }
`;

export const Tbody = styled.thead`
  text-align: left;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
`;
