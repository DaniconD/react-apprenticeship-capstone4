import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

function App() {
  // const { data, isLoading } = useFeaturedBanners();
  // console.log(data, isLoading);

  return (
    <BrowserRouter>
      <Header />
      <Content />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
