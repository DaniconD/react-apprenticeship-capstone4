import styled from 'styled-components';

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
