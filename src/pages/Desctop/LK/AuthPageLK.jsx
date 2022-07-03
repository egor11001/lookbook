import React from 'react';

import LoginLK from '../../../components/Desctop/Auth/LK/LoginLK';

import styles from '../../../scss/components/Desctop/AuthPage.module.scss';

const AuthPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.change_btns}>
          <button disabled className={styles.auth_type}>
            Вход
          </button>
        </div>

        <div className={styles.content}>
          <LoginLK />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
