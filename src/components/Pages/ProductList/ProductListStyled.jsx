import styled from 'styled-components';

export const ComponentContainer = styled.div`
  .leftArrow,
  .rightArrow {
    position: fixed;
    font-size: 3rem;
    left: 0;
    top: 50%;
    z-index: 5;
  }

  .leftArrow {
    left: 190px;
  }
`;

export const SideMenuContainer = styled.div`
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
  width: 200px;
  z-index: 10;
  svg {
    font-size: 3rem;
    &:hover {
      color: pink;
    }
  }
  li {
    font-size: calc(10px + 1vmin);
    margin-bottom: 10px;
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
  img {
    width: 150px;
  }
  p {
    font-size: 0.5em;
    text-align: left;
  }
`;

export const ItemList = styled.div`
  display: flex;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));

  justify-content: center;
  flex-wrap: wrap;

  width: 80%;
  margin: 0;
  padding: 0 10%;
  position: relative;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;

  background-color: white;
  &:hover {
    opacity: 0.8;
  }
`;

export const InfoContainer = styled.data`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  padding: 10px 0 10px 10px;
  width: 200px;
  .title {
    font-size: 0.8em;
    font-weight: bold;
  }
`;
