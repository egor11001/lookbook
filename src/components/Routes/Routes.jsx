import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

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
import InvestorsInfoPage from '../../pages/Desctop/infos/InvestorsInfoPage';
import PrivacyPolicyPage from '../../pages/Desctop/infos/PrivacyPolicyPage';
import Ordering from '../../pages/Desctop/Ordering';
import MainPageMobile from '../../pages/Mobile/MainPageMobile';
import LayoutMobile from '../Mobile/LayoutMobile';
import ItemPageMobile from '../../pages/Mobile/ItemPageMobile';
import BasketPageMobile from '../../pages/Mobile/BasketPageMobile';
import OrderingMobile from '../../pages/Mobile/OrderingMobile';
import FAQPageMobile from '../../pages/Mobile/FAQPageMobile';
import AboutUsPageMobile from '../../pages/Mobile/infos/AboutUsPageMobile';
import ContactsPageMobile from '../../pages/Mobile/infos/ContactsPageMobile';
import PaymentInfoPageMobile from '../../pages/Mobile/infos/PaymentInfoPageMobile';
import DeliveryInfoPageMobile from '../../pages/Mobile/infos/DeliveryInfoPageMobile';
import CollaborationInfoPageMobile from '../../pages/Mobile/infos/CollaborationInfoPageMobile';
import InvestorsInfoPageMobile from '../../pages/Mobile/infos/InvestorsInfoPageMobile';
import PrivacyPolicyPageMobile from '../../pages/Mobile/infos/PrivacyPolicyPageMobile';
import AuthPage from '../../pages/Desctop/AuthPage';
import MainLK from '../../pages/Desctop/MainLK';
import WelcomeLK from '../../pages/Desctop/WelcomeLK';
import WelcomeGuide from '../../pages/Desctop/WelcomeGuide';
import NotificationsLK from '../../pages/Desctop/NotificationsLK';
import StatisticLK from '../../pages/Desctop/StatisticLK';

const Routes = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 1223px)',
  });
  return (
    <Switch>
      {isDesktop ? (
        <Route path="/" element={<Layout />}>
          <Route path="" element={<MainPage />} />
          <Route path="item" element={<ItemPage />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="ordering" element={<Ordering />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="payment" element={<PaymentInfoPage />} />
          <Route path="delivery" element={<DeliveryInfoPage />} />
          <Route path="collaboration" element={<CollaborationInfoPage />} />
          <Route path="investors" element={<InvestorsInfoPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="FAQ" element={<FAQPage />} />
          <Route path="authorization" element={<AuthPage />} />
          <Route path="home" element={<MainLK />} />
          <Route path="welcome" element={<WelcomeLK />} />
          <Route path="guide" element={<WelcomeGuide />} />
          <Route path="notifications" element={<NotificationsLK />} />
          <Route path="statistic" element={<StatisticLK />} />
        </Route>
      ) : isMobile ? (
        <Route path="/" element={<LayoutMobile />}>
          <Route path="" element={<MainPageMobile />} />
          <Route path="item" element={<ItemPageMobile />} />
          <Route path="basket" element={<BasketPageMobile />} />
          <Route path="ordering" element={<OrderingMobile />} />
          <Route path="FAQ" element={<FAQPageMobile />} />
          <Route path="about" element={<AboutUsPageMobile />} />
          <Route path="contacts" element={<ContactsPageMobile />} />
          <Route path="payment" element={<PaymentInfoPageMobile />} />
          <Route path="delivery" element={<DeliveryInfoPageMobile />} />
          <Route path="collaboration" element={<CollaborationInfoPageMobile />} />
          <Route path="investors" element={<InvestorsInfoPageMobile />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPageMobile />} />
        </Route>
      ) : (
        console.log(' wow new technology !')
      )}
    </Switch>
  );
};

export default Routes;
