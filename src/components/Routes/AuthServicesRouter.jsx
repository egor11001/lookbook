import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Context } from '../..';
import Loader from '../Loaders/Loader';

const AuthServicesRouter = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const currentLocation = window.location.href;

  useEffect(() => {
    if (currentLocation.includes('code=')) {
      user
        .loginVK(currentLocation)
        .then(() => navigate('/my'))
        .catch(() => navigate('/'));
    } else if (currentLocation.includes('access_token=')) {
      user
        .loginYandex(currentLocation)
        .then(() => navigate('/my'))
        .catch(() => navigate('/'));
    } else {
      navigate('/');
    }
  }, []);

  return <Loader />;
};

export default AuthServicesRouter;
