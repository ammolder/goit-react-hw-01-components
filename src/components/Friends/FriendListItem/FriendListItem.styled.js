import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  margin-bottom: 5px;
  border: 1px solid ${p => p.theme.colors.black};
  padding: 8px;
  border-radius: 4px;
`;

export const Circle = styled.span`
  width: 20px;
  height: 20px;
  margin: auto 5px;
  border-radius: 50%;
  background-color: ${p => {
    return p.isOnline ? p.theme.colors.green : p.theme.colors.red;
  }};
`;

export const Name = styled.p`
  display: flex;
  align-items: center;
  text-align: center;
`;
