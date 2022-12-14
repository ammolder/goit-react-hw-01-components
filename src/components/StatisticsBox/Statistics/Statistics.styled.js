import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 50%;
  max-width: 300px;
  height: 100px;
  background: linear-gradient(crimson, gold, yellowgreen, teal, crimson);
  background-position: 0 0;
  border-radius: 30px;
  border: 10px solid white;
  animation: background 2s infinite alternate;
  @keyframes background {
    100% {
      background-position: 0 200px;
    }
  }
`;
