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

const RoutesMobile = () => {
  const userAuth = true;
  const vendorAuth = true;
  return (
    <Switch>
      <Route path="/" element={<LayoutMobile />}>
        <Route path="" element={<MainPageMobile />} />
        <Route path="item" element={<ItemPageMobile />} />
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
      </Route>
    </Switch>
  );
};

export default RoutesMobile;
