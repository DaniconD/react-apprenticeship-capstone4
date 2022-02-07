import styled from 'styled-components';

const dark = '#282c34';
const light = '#fff';
const highlightPink = '#ea4c8966';
const greyColor = '#f3f3f3';

export const BodyContainer = styled.div`
  background-color: ${light};
`;

export const StyledButton = styled.button`
  color: ${dark};
  background-color: ${greyColor};
  border-radius: 10px;
  border: none;
  font-size: 1.5rem;
  padding: 10px 20px;
  &:hover {
    color: white;
    background-color: ${highlightPink};
  }
`;
