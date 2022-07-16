import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Navigate, useLocation } from 'react-router';

import Login from '../../components/Desctop/Auth/Presale/Login';
import Registration from '../../components/Desctop/Auth/Presale/Registration';

import styles from '../../scss/components/Desctop/AuthPage.module.scss';
import { Context } from '../..';

const AuthPage = observer(() => {
  const [active, setActive] = useState(0);
  const location = useLocation();

  const { user } = useContext(Context);

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

        <form className={styles.content}>
          {active === 0 ? <Login /> : active === 1 ? <Registration /> : null}
        </form>
      </div>
    </div>
  );
});

export default AuthPage;
