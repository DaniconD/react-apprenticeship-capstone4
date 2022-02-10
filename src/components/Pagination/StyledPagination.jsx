import styled from 'styled-components';

export const PagesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  gap: 1em;
  svg {
    &:hover {
      color: pink;
    }
  }
`;

export const PageNumber = styled.li`
  border: solid black 1px;
  border-radius: 50%;
  font-size: 1em;
  height: 1em;
  padding: 8px;
  text-align: center;
  width: 1em;
  line-height: 1em;
  &:hover {
    background-color: black;
    color: white;
  }
`;
