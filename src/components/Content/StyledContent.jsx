import styled from 'styled-components';

const dark = '#282c34';
const light = '#fff';
const grey = '#f3f3f3';

export const ContentContainer = styled.div`
  color: ${dark};
  background-color: ${light};
  margin: 0;
  min-height: 100vh;
  padding: 100px 5% 0 5%;
  width: 90%;
  a {
    color: ${dark};
    background-color: ${grey};
    border: none;
    border-radius: 15px;
    font-size: 1.5rem;
    padding: 10px 20px;
    &:hover {
      color: ${light};
      background-color: ${dark};
      cursor: pointer;
    }
  }
`;
