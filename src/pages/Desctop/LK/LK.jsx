import { Outlet, Route, Routes, Navigate } from 'react-router-dom';
import AuthPageLK from './AuthPageLK';
import MainLK from './MainLK';
import WelcomeLK from './WelcomeLK';
import WelcomeGuide from './WelcomeGuide';
import NotificationsLK from './NotificationsLK';
import StatisticLK from './StatisticLK';
import AddressesLK from './AddressesLK';
import ProfileLK from './ProfileLK';
import FAQLK from './FAQLK';

import CollaborationInfoPage from '../infos/CollaborationInfoPage';
import PrivacyPolicyPage from '../infos/PrivacyPolicyPage';

const LK = () => {
  return (
    <>
      <Outlet />
      <Routes>
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
      </Routes>
    </>
  );
};

export default LK;
