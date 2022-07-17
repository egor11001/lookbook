import { Outlet, Route, Routes, Navigate } from 'react-router-dom';
import AuthPageLKMobile from './AuthPageLKMobile';
import MainLKMobile from './MainLKMobile';
import WelcomeLKMobile from './WelcomeLKMobile';
import WelcomeGuideMobile from './WelcomeGuideMobile';
import NotificationsLKMobile from './NotificationsLKMobile';
import StatisticLKMobile from './StatisticLKMobile';
import AddressesLKMobile from './AddressesLKMobile';
import ProfileLKMobile from './ProfileLKMobile';
import FAQLKMobile from './FAQLKMobile';

import CollaborationInfoPageMobile from '../infos/CollaborationInfoPageMobile';
import PrivacyPolicyPageMobile from '../infos/PrivacyPolicyPageMobile';
import ContactsPageLKMobile from './ContactsPageLKMobile';

const LK = () => {
  return (
    <>
      <Outlet />
      <Routes>
        <Route path="" element={<Navigate to={'/lk/home'} />} />
        <Route path="authorization" element={<AuthPageLKMobile />} />
        <Route path="home" element={<MainLKMobile />} />
        <Route path="welcome" element={<WelcomeLKMobile />} />
        <Route path="guide" element={<WelcomeGuideMobile />} />
        <Route path="notifications" element={<NotificationsLKMobile />} />
        <Route path="statistic" element={<StatisticLKMobile />} />
        <Route path="addresses" element={<AddressesLKMobile />} />
        <Route path="profile" element={<ProfileLKMobile />} />
        <Route path="FAQ" element={<FAQLKMobile />} />
        <Route path="collaboration" element={<CollaborationInfoPageMobile />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPageMobile />} />
        <Route path="contacts" element={<ContactsPageLKMobile />} />
      </Routes>
    </>
  );
};

export default LK;
