import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import MainPageMobile from '../../pages/Mobile/MainPageMobile';
import LayoutMobile from '../Mobile/LayoutMobile';
import ItemPageMobile from '../../pages/Mobile/ItemPageMobile';
import BasketPageMobile from '../../pages/Mobile/BasketPageMobile';
import HomeMobile from '../../pages/Mobile/HomeMobile';
import ProfileMobile from '../../pages/Mobile/ProfileMobile';
import OrdersPageMobile from '../../pages/Mobile/OrdersPageMobile';
import OrderingMobile from '../../pages/Mobile/OrderingMobile';
import FAQPageMobile from '../../pages/Mobile/FAQPageMobile';
import AboutUsPageMobile from '../../pages/Mobile/infos/AboutUsPageMobile';
import ContactsPageMobile from '../../pages/Mobile/infos/ContactsPageMobile';
import PaymentInfoPageMobile from '../../pages/Mobile/infos/PaymentInfoPageMobile';
import DeliveryInfoPageMobile from '../../pages/Mobile/infos/DeliveryInfoPageMobile';
import CollaborationInfoPageMobile from '../../pages/Mobile/infos/CollaborationInfoPageMobile';
import InvestorsInfoPageMobile from '../../pages/Mobile/infos/InvestorsInfoPageMobile';
import PrivacyPolicyPageMobile from '../../pages/Mobile/infos/PrivacyPolicyPageMobile';
import My from '../../pages/My';
import LK from '../../pages//Mobile/LK/LK';
import AuthPageLKMobile from '../../pages/Mobile/LK/AuthPageLKMobile';
import MainLKMobile from '../../pages/Mobile/LK/MainLKMobile';
import WelcomeLKMobile from '../../pages/Mobile/LK/WelcomeLKMobile';
import WelcomeGuideMobile from '../../pages/Mobile/LK/WelcomeGuideMobile';
import NotificationsLKMobile from '../../pages/Mobile/LK/NotificationsLKMobile';
import StatisticLKMobile from '../../pages/Mobile/LK/StatisticLKMobile';
import AddressesLKMobile from '../../pages/Mobile/LK/AddressesLKMobile';
import ProfileLKMobile from '../../pages/Mobile/LK/ProfileLKMobile';
import FAQLKMobile from '../../pages/Mobile/LK/FAQLKMobile';
import AuthPageMobile from '../../pages/Mobile/AuthPageMobile';
import OrderPageLKMobile from '../../pages/Mobile/LK/OrderPageLKMobile';

const RoutesMobile = () => {
  const userAuth = true;
  const vendorAuth = true;
  return (
    <Switch>
      <Route path="/" element={<LayoutMobile />}>
        <Route path="" element={<MainPageMobile />} />
        <Route path="item" element={<ItemPageMobile />} />
        <Route path="authorization" element={<AuthPageMobile />} />
        <Route path="FAQ" element={<FAQPageMobile />} />
        <Route path="about" element={<AboutUsPageMobile />} />
        <Route path="contacts" element={<ContactsPageMobile />} />
        <Route path="payment" element={<PaymentInfoPageMobile />} />
        <Route path="delivery" element={<DeliveryInfoPageMobile />} />
        <Route path="collaboration" element={<CollaborationInfoPageMobile />} />
        <Route path="investors" element={<InvestorsInfoPageMobile />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPageMobile />} />

        {userAuth ? (
          <Route path="my/*" element={<My />}>
            <Route path="" element={<Navigate to={'/my/home'} />} />
            <Route path="home" element={<HomeMobile />} />
            <Route path="profile" element={<ProfileMobile />} />
            <Route path="orders" element={<OrdersPageMobile />} />
            <Route path="basket" element={<BasketPageMobile />} />
            <Route path="ordering" element={<OrderingMobile />} />
          </Route>
        ) : (
          <Route path="my/*" element={<Navigate to={'/authorization'} />} />
        )}

        {vendorAuth ? (
          <Route path="lk/*" element={<LK />}>
            <Route path="" element={<Navigate to={'/lk/home'} />} />
            <Route path="authorization" element={<AuthPageLKMobile />} />
            <Route path="home" element={<MainLKMobile />} />
            <Route path="welcome" element={<WelcomeLKMobile />} />
            <Route path="guide" element={<WelcomeGuideMobile />} />
            <Route path="notifications" element={<NotificationsLKMobile />} />
            <Route path="statistic" element={<StatisticLKMobile />} />
            <Route path="statistic/:id" element={<OrderPageLKMobile />} />
            <Route path="addresses" element={<AddressesLKMobile />} />
            <Route path="profile" element={<ProfileLKMobile />} />
            <Route path="FAQ" element={<FAQLKMobile />} />
          </Route>
        ) : (
          <Route path="lk/*" element={<Navigate to={'/lk/authorization'} />} />
        )}
      </Route>
    </Switch>
  );
};

export default RoutesMobile;
