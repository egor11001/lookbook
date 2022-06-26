import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import BasketPage from '../../../pages/BasketPage';
import MainPage from '../../../pages/MainPage';
import ItemPage from '../../../pages/ItemPage';
import FAQPage from '../../../pages/FAQPage';
import Layout from '../Layout';
import AboutUsPage from '../../../pages/infos/AboutUsPage';
import ContactsPage from '../../../pages/infos/ContactsPage';
import PaymentInfoPage from '../../../pages/infos/PaymentInfoPage';
import DeliveryInfoPage from '../../../pages/infos/DeliveryInfoPage';
import CollaborationInfoPage from '../../../pages/infos/CollaborationInfoPage';
import InvestorsInfoPage from '../../../pages/infos/InvestorsInfoPage';
import PrivacyPolicyPage from '../../../pages/infos/PrivacyPolicyPage';
import Ordering from '../../../pages/Ordering';
import MainPageMobile from '../../../pages/Mobile/MainPageMobile';
import LayoutMobile from '../../Mobile/LayoutMobile';
import ItemPageMobile from '../../../pages/Mobile/ItemPageMobile';
import BasketPageMobile from '../../../pages/Mobile/BasketPageMobile';
import OrderingMobile from '../../../pages/Mobile/OrderingMobile';
import FAQPageMobile from '../../../pages/Mobile/FAQPageMobile';
import AboutUsPageMobile from '../../../pages/Mobile/infos/AboutUsPageMobile';
import ContactsPageMobile from '../../../pages/Mobile/infos/ContactsPageMobile';
import PaymentInfoPageMobile from '../../../pages/Mobile/infos/PaymentInfoPageMobile';
import DeliveryInfoPageMobile from '../../../pages/Mobile/infos/DeliveryInfoPageMobile';
import CollaborationInfoPageMobile from '../../../pages/Mobile/infos/CollaborationInfoPageMobile';
import InvestorsInfoPageMobile from '../../../pages/Mobile/infos/InvestorsInfoPageMobile';
import PrivacyPolicyPageMobile from '../../../pages/Mobile/infos/PrivacyPolicyPageMobile';

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
