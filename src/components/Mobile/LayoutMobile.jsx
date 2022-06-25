import React from 'react';
import { Outlet } from 'react-router';

import HeaderMobile from './HeaderMobile';

const LayoutMobile = () => {
  return (
    <>
      <HeaderMobile />
      <Outlet />
    </>
  );
};

export default LayoutMobile;
