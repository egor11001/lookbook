import React, { Suspense } from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import MainPage from '../../pages/Desctop/MainPage';
import ItemPage from '../../pages/Desctop/ItemPage';
import Layout from '../Desctop/Layout';
import AboutUsPage from '../../pages/Desctop/infos/AboutUsPage';
import ContactsPage from '../../pages/Desctop/infos/ContactsPage';
import PaymentInfoPage from '../../pages/Desctop/infos/PaymentInfoPage';
import DeliveryInfoPage from '../../pages/Desctop/infos/DeliveryInfoPage';
import CollaborationInfoPage from '../../pages/Desctop/infos/CollaborationInfoPage';
import Returns from '../../pages/Desctop/infos/Returns';
import AuthPage from '../../pages/Desctop/AuthPage';

import Home from '../../pages/Desctop/Home';
import Profile from '../../pages/Desctop/Profile';
import OrdersPage from '../../pages/Desctop/OrdersPage';
import MainBrand from '../../pages/Desctop/MainBrand';

import Loader from '../Loaders/Loader';
import UserRouter from './UserRouter';
import AuthServicesRouter from './AuthServicesRouter';

const BasketPage = React.lazy(() => import('../../pages/Desctop/BasketPage'));
const PrivacyPolicyPage = React.lazy(() => import('../../pages/Desctop/infos/PrivacyPolicyPage'));
const Ordering = React.lazy(() => import('../../pages/Desctop/Ordering'));

const LK = React.lazy(() => import('../../pages/Desctop/LK/LK'));
/* const AuthPageLK = React.lazy(() => import('../../pages/Desctop/LK/AuthPageLK'));
const MainLK = React.lazy(() => import('../../pages/Desctop/LK/MainLK'));
const WelcomeLK = React.lazy(() => import('../../pages/Desctop/LK/WelcomeLK'));
const WelcomeGuide = React.lazy(() => import('../../pages/Desctop/LK/WelcomeGuide'));
const NotificationsLK = React.lazy(() => import('../../pages/Desctop/LK/NotificationsLK'));
const StatisticLK = React.lazy(() => import('../../pages/Desctop/LK/StatisticLK'));
const AddressesLK = React.lazy(() => import('../../pages/Desctop/LK/AddressesLK'));
const ProfileLK = React.lazy(() => import('../../pages/Desctop/LK/ProfileLK'));
const FAQLK = React.lazy(() => import('../../pages/Desctop/LK/FAQLK')); */

const Routes = () => {
  const vendorAuth = true;
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<MainPage />} />
          <Route path=":brand" element={<MainBrand />} />
          <Route path=":brand/:id" element={<ItemPage />} />
          <Route path="authorization" element={<AuthPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="payment" element={<PaymentInfoPage />} />
          <Route path="delivery" element={<DeliveryInfoPage />} />
          <Route path="collaboration" element={<CollaborationInfoPage />} />
          <Route path="returns" element={<Returns />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="social-auth-service" element={<AuthServicesRouter />} />

          {/* <Route path="FAQ" element={<FAQPage />} /> */}

          <Route path="my/*" element={<UserRouter />}>
            <Route path="" element={<Navigate to={'/my/home'} />} />
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="basket" element={<BasketPage />} />
            <Route path="ordering" element={<Ordering />} />
          </Route>

          {vendorAuth ? (
            <Route path="lk/*" element={<LK />} />
          ) : (
            <Route path="lk/*" element={<Navigate to={'/lk/authorization'} />} />
          )}
          <Route path="*" element={<MainPage />} />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
