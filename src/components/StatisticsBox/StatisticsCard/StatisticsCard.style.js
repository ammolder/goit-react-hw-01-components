import styled from 'styled-components';

export const CardList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: block;
  width: calc((100% - 3 * 5px));
  border-radius: 4px;
  background: #2e3fdaa8;
`;
export const Data = styled.span`
  display: block;
  font-size: 15px;
  font-weight: 700;
  background-image: linear-gradient(to left, #ffef00, yellow);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  text-align: center;
`;
