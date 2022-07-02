import React from 'react';
import { Outlet, useLocation } from 'react-router';

import Header from './Header';
import HeaderLK from './HeaderLK';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  console.log(location.pathname.slice(0, 3));
  return (
    <>
      {location.pathname.slice(0, 3) === '/lk' ? <HeaderLK /> : <Header />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
