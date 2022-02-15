import React, { useState } from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { BsDot } from 'react-icons/bs';
import { TiInputChecked } from 'react-icons/ti';
import {
  ComponentContainer,
  ProducListContainer,
  SideMenuContainer,
  ItemList,
  ItemContainer,
  InfoContainer,
} from './ProductListStyled';

import ProductsDataUs from '../../../mocks/en-us/products.json';
import Pagination from '../../Pagination/Pagination.component';

function ProductList() {
  const [sideBar, setSideBar] = useState(false);
  const [bedCategory, setBedCategory] = useState(false);
  const [lightingCategory, setLightingCategory] = useState(false);
  const [kitchenCategory, setKitchenCategory] = useState(false);
  const [furnitureCategory, setFurnitureCategory] = useState(false);
  const [decorateCategory, setDecorateCategory] = useState(false);

  const sideBarHandle = () => {
    setSideBar(!sideBar);
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  function SideMenuList() {
    return (
      <SideMenuContainer>
        <button type="button" onClick={() => setBedCategory(!bedCategory)}>
          <li>
            {bedCategory ? <TiInputChecked size={14} /> : null} Bed & Bath
          </li>
        </button>
        <button
          type="button"
          onClick={() => setLightingCategory(!lightingCategory)}
        >
          <li>
            {lightingCategory ? <TiInputChecked size={14} /> : null} Lighting
          </li>
        </button>
        <button
          type="button"
          onClick={() => setKitchenCategory(!kitchenCategory)}
        >
          <li>
            {kitchenCategory ? <TiInputChecked size={14} /> : null} Kitchen
          </li>
        </button>
        <button
          type="button"
          onClick={() => setFurnitureCategory(!furnitureCategory)}
        >
          <li>
            {furnitureCategory ? <TiInputChecked size={14} /> : null} Furniture
          </li>
        </button>
        <button
          type="button"
          onClick={() => setDecorateCategory(!decorateCategory)}
        >
          <li>
            {decorateCategory ? <TiInputChecked size={14} /> : null} Decorate &
            Organize
          </li>
        </button>
        <MdOutlineArrowBackIos
          className="leftArrow"
          onClick={() => sideBarHandle()}
        />
      </SideMenuContainer>
    );
  }

  function ProductCategory(category, categorySlug) {
    return ProductsDataUs.results.map(
      (item) =>
        category &&
        item.data.category.slug === categorySlug && (
          <ItemContainer key={item.id}>
            <img src={item.data.mainimage.url} alt={item.data.mainimage.alt} />
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
        )
    );
  }
  // eslint-disable-next-line react/no-unstable-nested-components
  function ProductGrid() {
    return (
      <div>
        <ItemList>
          {ProductCategory(bedCategory, 'bed & bath')}
          {ProductCategory(lightingCategory, 'lighting')}
          {ProductCategory(kitchenCategory, 'kitchen')}
          {ProductCategory(furnitureCategory, 'furniture')}
          {ProductCategory(decorateCategory, 'decorate & organize')}
        </ItemList>
      </div>
    );
  }

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
      </ProducListContainer>
      {!bedCategory &&
      !lightingCategory &&
      !kitchenCategory &&
      !furnitureCategory &&
      !decorateCategory ? null : (
        <Pagination />
      )}
    </ComponentContainer>
  );
}

export default ProductList;
