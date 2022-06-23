import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
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

const Routes = () => {
  return (
    <Switch>
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
    </Switch>
  );
};

export default Routes;
