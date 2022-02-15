import React from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

import { PagesContainer, PageNumber } from './StyledPagination';

function Pagination() {
  const pagesN = [8, 1, 2, 3, 4, 5, 6];
  // eslint-disable-next-line react/no-unstable-nested-components
  function Pages() {
    return (
      <PagesContainer>
        <MdOutlineArrowBackIos />
        {pagesN.map(
          (item) => item <= 5 && <PageNumber key={item}>{item}</PageNumber>
        )}
        <MdOutlineArrowForwardIos />
      </PagesContainer>
    );
  }
  return (
    <div>
      <Pages />
    </div>
  );
}

export default Pagination;
