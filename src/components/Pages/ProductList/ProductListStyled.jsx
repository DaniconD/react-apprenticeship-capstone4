import styled from 'styled-components';

export const ComponentContainer = styled.div`
  svg {
    font-size: 3rem;
    &:hover {
      color: pink;
    }
  }
  .leftArrow,
  .rightArrow {
    position: fixed;
    left: 0;
    top: 50%;
    z-index: 5;
  }

  .rightArrow {
    left: 290px;
  }
`;

export const ProductListSideMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  color: black;
  background-color: white;
  border-right: solid black 2px;
  height: 100vh;
  left: 0;
  padding: 20px;
  position: fixed;
  width: 250px;
  z-index: 10;
  li {
    font-size: calc(10px + 2vmin);
  }
  button {
    background-color: transparent;
    border: none;
    padding: 10px;
    text-align: left;
    &:hover {
      color: pink;
      padding-left: 15px;
      border-left: solid black 1px;
    }
  }
`;

export const ProducListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  li {
    margin-bottom: 10px;
  }
`;
