import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ContentContainer } from './StyledContent';
import Home from '../Home/Home.component';
import ProductList from '../Pages/ProductList';

function Content() {
  return (
    <ContentContainer>
      <Routes>
        <Route path="product-list" element={<ProductList />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </ContentContainer>
  );
}

export default Content;
