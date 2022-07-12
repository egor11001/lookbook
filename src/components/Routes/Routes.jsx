import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import BasketPage from '../../pages/Desctop/BasketPage';
import MainPage from '../../pages/Desctop/MainPage';
import ItemPage from '../../pages/Desctop/ItemPage';
import FAQPage from '../../pages/Desctop/FAQPage';
import Layout from '../Desctop/Layout';
import AboutUsPage from '../../pages/Desctop/infos/AboutUsPage';
import ContactsPage from '../../pages/Desctop/infos/ContactsPage';
import PaymentInfoPage from '../../pages/Desctop/infos/PaymentInfoPage';
import DeliveryInfoPage from '../../pages/Desctop/infos/DeliveryInfoPage';
import CollaborationInfoPage from '../../pages/Desctop/infos/CollaborationInfoPage';
import Returns from '../../pages/Desctop/infos/Returns';
import PrivacyPolicyPage from '../../pages/Desctop/infos/PrivacyPolicyPage';
import Ordering from '../../pages/Desctop/Ordering';
import AuthPage from '../../pages/Desctop/AuthPage';
import AuthPageLK from '../../pages/Desctop/LK/AuthPageLK';
import MainLK from '../../pages/Desctop/LK/MainLK';
import WelcomeLK from '../../pages/Desctop/LK/WelcomeLK';
import WelcomeGuide from '../../pages/Desctop/LK/WelcomeGuide';
import NotificationsLK from '../../pages/Desctop/LK/NotificationsLK';
import StatisticLK from '../../pages/Desctop/LK/StatisticLK';
import AddressesLK from '../../pages/Desctop/LK/AddressesLK';
import LK from '../../pages/Desctop/LK/LK';
import ProfileLK from '../../pages/Desctop/LK/ProfileLK';
import FAQLK from '../../pages/Desctop/LK/FAQLK';
import Home from '../../pages/Desctop/Home';
import My from '../../pages/My';
import Profile from '../../pages/Desctop/Profile';
import OrdersPage from '../../pages/Desctop/OrdersPage';
import MainBrand from '../../pages/Desctop/MainBrand';

const Routes = () => {
  const userAuth = true;
  const vendorAuth = true;

  return (
    <Switch>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<MainPage />} />
        <Route path="brand" element={<MainBrand />} />
        <Route path="brand/:id" element={<ItemPage />} />
        <Route path="authorization" element={<AuthPage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="payment" element={<PaymentInfoPage />} />
        <Route path="delivery" element={<DeliveryInfoPage />} />
        <Route path="collaboration" element={<CollaborationInfoPage />} />
        <Route path="returns" element={<Returns />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="FAQ" element={<FAQPage />} />

        {userAuth ? (
          <Route path="my/*" element={<My />}>
            <Route path="" element={<Navigate to={'/my/home'} />} />
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="basket" element={<BasketPage />} />
            <Route path="ordering" element={<Ordering />} />
          </Route>
        ) : (
          <Route path="my/*" element={<Navigate to={'/authorization'} />} />
        )}

        {vendorAuth ? (
          <Route path="lk/*" element={<LK />}>
            <Route path="" element={<Navigate to={'/lk/home'} />} />
            <Route path="authorization" element={<AuthPageLK />} />
            <Route path="home" element={<MainLK />} />
            <Route path="welcome" element={<WelcomeLK />} />
            <Route path="guide" element={<WelcomeGuide />} />
            <Route path="notifications" element={<NotificationsLK />} />
            <Route path="statistic" element={<StatisticLK />} />
            <Route path="addresses" element={<AddressesLK />} />
            <Route path="profile" element={<ProfileLK />} />
            <Route path="FAQ" element={<FAQLK />} />
            <Route path="collaboration" element={<CollaborationInfoPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          </Route>
        ) : (
          <Route path="lk/*" element={<Navigate to={'/lk/authorization'} />} />
        )}
      </Route>
    </Switch>
  );
};

export default Routes;
