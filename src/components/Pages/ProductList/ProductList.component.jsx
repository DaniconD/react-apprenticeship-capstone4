import React, { useState } from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { BsDot } from 'react-icons/bs';
import {
  ComponentContainer,
  ProducListContainer,
  SideMenuContainer,
  ItemList,
  ItemContainer,
  InfoContainer,
} from './ProductListStyled';

import CategoriesDataUs from '../../../mocks/en-us/product-categories.json';
import ProductsDataUs from '../../../mocks/en-us/products.json';
import Pagination from '../../Pagination/Pagination.component';

function ProductList() {
  const [sideBar, setSideBar] = useState(false);
  const sideBarHandle = () => {
    setSideBar(!sideBar);
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  function SideMenuList() {
    return (
      <SideMenuContainer>
        {CategoriesDataUs.results.map((item) => (
          <button key={item.id} type="button" onClick={() => {}}>
            <li>{item.data.name}</li>
          </button>
        ))}
        <MdOutlineArrowBackIos
          className="leftArrow"
          onClick={() => sideBarHandle()}
        />
      </SideMenuContainer>
    );
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function ProductGrid() {
    return (
      <div>
        <ItemList>
          {ProductsDataUs.results.map((item) => (
            <ItemContainer key={item.id}>
              <img
                src={item.data.mainimage.url}
                alt={item.data.mainimage.alt}
              />
              <InfoContainer>
                <p className="title">{item.data.name}</p>
                <p>
                  <BsDot />
                  <b>Category: </b>
                  {item.data.category.slug}
                </p>
                <p>
                  <BsDot />
                  <b>Price: </b>${item.data.price}
                </p>
              </InfoContainer>
            </ItemContainer>
          ))}
        </ItemList>
      </div>
    );
  }
  const f = 'furniture asd';
  const filteredCategories = ProductsDataUs.results.filter((item) =>
    item.data.category.slug.toLowerCase().includes(f)
  );

  return (
    <ComponentContainer>
      {sideBar && <SideMenuList />}
      <ProducListContainer>
        <h2>This is the Product List Page</h2>
        <MdOutlineArrowForwardIos
          className="rightArrow"
          onClick={() => sideBarHandle()}
        />
        <ProductGrid />
        {console.log(filteredCategories)}
      </ProducListContainer>
      <Pagination />
    </ComponentContainer>
  );
}

export default ProductList;
