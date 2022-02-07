import React, { useState } from 'react';
import { ContentContainer } from './StyledContent';
import Home from '../Home/Home.component';
import ProductList from '../Pages/ProductList';

function Content({ renderPageHandle, loadPage }) {
  const [p, setP] = useState('home');
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
