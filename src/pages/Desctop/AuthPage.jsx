import React, { useState } from 'react';

import Login from '../../components/Desctop/Auth/Login';
import Registration from '../../components/Desctop/Auth/Registration';

import styles from '../../scss/components/Desctop/AuthPage.module.scss';

const AuthPage = () => {
  const [active, setActive] = useState(0);
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
          {active === 0 ? <Login /> : active === 1 ? <Registration /> : null}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
