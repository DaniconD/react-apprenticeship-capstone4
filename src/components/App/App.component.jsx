import React, { useState } from 'react';
// import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

function App() {
  // const { data, isLoading } = useFeaturedBanners();
  // console.log(data, isLoading);

  const [page, setPage] = useState('home');

  const renderPageHandle = (message) => {
    setPage(message);
    console.log(page);
  };

  return (
    <div>
      <Header renderPageHandle={renderPageHandle} />
      <Content renderPageHandle={renderPageHandle} loadPage={page} />
      <Footer />
    </div>
  );
}

export default App;
