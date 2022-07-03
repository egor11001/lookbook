import React from 'react';
import { Outlet, useLocation } from 'react-router';

import Header from './Header';
import HeaderLK from './HeaderLK';
import Footer from './Footer';
import FooterLK from './FooterLK';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.slice(0, 3) === '/lk' ? <HeaderLK /> : <Header />}
      <Outlet />
      {location.pathname.slice(0, 3) === '/lk' ? <FooterLK /> : <Footer />}
    </>
  );
};

export default Layout;
