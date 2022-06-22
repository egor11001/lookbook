import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import BasketPage from '../../../pages/BasketPage';
import MainPage from '../../../pages/MainPage';
import FAQPage from '../../../pages/FAQPage';
import Layout from '../Layout';
import AboutUsPage from '../../../pages/infos/AboutUsPage';
import ContactsPage from '../../../pages/infos/ContactsPage';
import PaymentInfoPage from '../../../pages/infos/PaymentInfoPage';
import DeliveryInfoPage from '../../../pages/infos/DeliveryInfoPage';
import CollaborationInfoPage from '../../../pages/infos/CollaborationInfoPage';
import InvestorsInfoPage from '../../../pages/infos/InvestorsInfoPage';
import PrivacyPolicyPage from '../../../pages/infos/PrivacyPolicyPage';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<MainPage />} />
        <Route path="basket" element={<BasketPage />} />
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
