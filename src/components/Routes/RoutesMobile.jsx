import React, { Suspense } from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import MainPageMobile from '../../pages/Mobile/MainPageMobile';
import LayoutMobile from '../Mobile/LayoutMobile';
import ItemPageMobile from '../../pages/Mobile/ItemPageMobile';
import HomeMobile from '../../pages/Mobile/HomeMobile';
import ProfileMobile from '../../pages/Mobile/ProfileMobile';
import OrdersPageMobile from '../../pages/Mobile/OrdersPageMobile';
import AboutUsPageMobile from '../../pages/Mobile/infos/AboutUsPageMobile';
import ContactsPageMobile from '../../pages/Mobile/infos/ContactsPageMobile';
import PaymentInfoPageMobile from '../../pages/Mobile/infos/PaymentInfoPageMobile';
import DeliveryInfoPageMobile from '../../pages/Mobile/infos/DeliveryInfoPageMobile';
import CollaborationInfoPageMobile from '../../pages/Mobile/infos/CollaborationInfoPageMobile';
import ReturnsMobile from '../../pages/Mobile/infos/ReturnsMobile';
import LK from '../../pages//Mobile/LK/LK';
import AuthPageMobile from '../../pages/Mobile/AuthPageMobile';
import OrderPageMobile from '../../pages/Mobile/OrderPageMobile';
import MainBrandMobile from '../../pages/Mobile/MainBrandMobile';

import Loader from '../Loaders/Loader';
import UserRouter from './UserRouter';
import AuthServicesRouter from './AuthServicesRouter';

const BasketPageMobile = React.lazy(() => import('../../pages/Mobile/BasketPageMobile'));
const PrivacyPolicyPageMobile = React.lazy(() =>
  import('../../pages/Mobile/infos/PrivacyPolicyPageMobile'),
);
const OrderingMobile = React.lazy(() => import('../../pages/Mobile/OrderingMobile'));

const RoutesMobile = () => {
  const vendorAuth = true;
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" element={<LayoutMobile />}>
          <Route path="" element={<MainPageMobile />} />
          <Route path=":brand" element={<MainBrandMobile />} />
          <Route path=":brand/:id" element={<ItemPageMobile />} />
          <Route path="authorization" element={<AuthPageMobile />} />
          <Route path="about" element={<AboutUsPageMobile />} />
          <Route path="contacts" element={<ContactsPageMobile />} />
          <Route path="payment" element={<PaymentInfoPageMobile />} />
          <Route path="delivery" element={<DeliveryInfoPageMobile />} />
          <Route path="collaboration" element={<CollaborationInfoPageMobile />} />
          <Route path="returns" element={<ReturnsMobile />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPageMobile />} />
          <Route path="social-auth-service" element={<AuthServicesRouter />} />
          {/* <Route path="FAQ" element={<FAQPageMobile />} /> */}

          <Route path="my/*" element={<UserRouter />}>
            <Route path="" element={<Navigate to={'/my/home'} />} />
            <Route path="home" element={<HomeMobile />} />
            <Route path="profile" element={<ProfileMobile />} />
            <Route path="orders" element={<OrdersPageMobile />} />
            <Route path="orders/:id" element={<OrderPageMobile />} />
            <Route path="basket" element={<BasketPageMobile />} />
            <Route path="ordering" element={<OrderingMobile />} />
          </Route>

          <Route path="my/*" element={<Navigate to={'/authorization'} />} />

          {vendorAuth ? (
            <Route path="lk/*" element={<LK />} />
          ) : (
            <Route path="lk/*" element={<Navigate to={'/lk/authorization'} />} />
          )}

          <Route path="*" element={<MainPageMobile />} />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default RoutesMobile;
