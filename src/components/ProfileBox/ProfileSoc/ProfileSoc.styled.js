import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  gap: 3px;
`;
export const Item = styled.li`
  display: block;
  width: calc((100% - 3 * 5px));
  background-color: #32a3d7;
  border-radius: 4px;
`;
export const ElItem = styled.span`
  display: block;
  text-align: center;
  /* width: calc((100% - 3 * 5px)); */
`;
