import React from 'react';
import { Link } from 'react-router-dom';
import { BsDot } from 'react-icons/bs';
import {
  GridContainer,
  ItemList,
  ItemContainer,
  InfoContainer,
} from './StyledGrid';
// import { StyledButton } from '../StyledComponents/StyledComponentsList';

function Grid({ gridItems }) {
  // eslint-disable-next-line react/no-unstable-nested-components
  function GridList() {
    return (
      <div>
        <ItemList>
          {gridItems.map((item) => (
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
  return (
    <GridContainer>
      <h2>Featured Prodcuts</h2>
      <h2>Grid</h2>
      <GridList />
      <Link to="product-list">View all products</Link>
    </GridContainer>
  );
}

export default Grid;
