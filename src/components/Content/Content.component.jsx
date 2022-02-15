import React from 'react';
import { ContentContainer } from './StyledContent';
import Home from '../Home/Home.component';
import ProductList from '../Pages/ProductList';

function Content({ renderPageHandle, loadPage }) {
  return (
    <ContentContainer>
      {loadPage === 'home' ? (
        <Home renderPageHandle={renderPageHandle} />
      ) : (
        <ProductList />
      )}
    </ContentContainer>
  );
}

export default Content;
