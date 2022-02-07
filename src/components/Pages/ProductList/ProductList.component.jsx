import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';
import {
  ProductListSideMenu,
  ProducListContainer,
  MenuContainer,
} from './ProductListStyled';

import CategoriesDataUs from '../../../mocks/en-us/product-categories.json';

function ProductList() {
  // eslint-disable-next-line react/no-unstable-nested-components
  function MenuList() {
    return (
      <MenuContainer>
        {CategoriesDataUs.results.map((item) => (
          <button key={item.id} type="button" onClick={() => {}}>
            <li>{item.data.name}</li>
          </button>
        ))}
      </MenuContainer>
    );
  }
  return (
    <div>
      <ProductListSideMenu>{MenuList()}</ProductListSideMenu>
      <button type="button" onClick={() => {}}>
        <IoIosArrowDropright />
      </button>
      <ProducListContainer>
        <h2>This is the Product List Page</h2>
      </ProducListContainer>
    </div>
  );
}

export default ProductList;
