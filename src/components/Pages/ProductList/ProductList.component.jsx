import React, { useState } from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import {
  ComponentContainer,
  ProductListSideMenu,
  ProducListContainer,
  MenuContainer,
} from './ProductListStyled';

import CategoriesDataUs from '../../../mocks/en-us/product-categories.json';

function ProductList() {
  const [sideBar, setSideBar] = useState(false);
  const sideBarHandle = () => {
    setSideBar(!sideBar);
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  function MenuList() {
    return (
      <MenuContainer>
        {CategoriesDataUs.results.map((item) => (
          <button key={item.id} type="button" onClick={() => {}}>
            <li>{item.data.name}</li>
          </button>
        ))}
        <MdOutlineArrowBackIos
          className="rightArrow"
          onClick={() => sideBarHandle()}
        />
      </MenuContainer>
    );
  }
  return (
    <ComponentContainer>
      {sideBar && <ProductListSideMenu>{MenuList()}</ProductListSideMenu>}
      <ProducListContainer>
        <h2>This is the Product List Page</h2>
        <MdOutlineArrowForwardIos
          className="leftArrow"
          onClick={() => sideBarHandle()}
        />
      </ProducListContainer>
    </ComponentContainer>
  );
}

export default ProductList;
