import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router';
import { Context } from '../..';

import LoginMobile from '../../components/Mobile/Auth/Presale/LoginMobile';
import RegistrationMobile from '../../components/Mobile/Auth/Presale/RegistrationMobile';

import styles from '../../scss/components/Mobile/AuthPageMobile.module.scss';

const AuthPageMobile = () => {
  const [active, setActive] = useState(0);

  const location = useLocation();

  const { user } = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (user.getAuth) {
    return <Navigate to={location.state?.from?.pathname || '/'} />;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.change_btns}>
          <button disabled={active === 0} onClick={() => setActive(0)} className={styles.auth_type}>
            Вход
          </button>
          <button disabled={active === 1} onClick={() => setActive(1)} className={styles.auth_type}>
            Регистрация
          </button>
        </div>

        <div className={styles.content}>
          {active === 0 ? <LoginMobile /> : active === 1 ? <RegistrationMobile /> : null}
        </div>
      </div>
    </div>
  );
};

export default AuthPageMobile;
