import React from 'react';

import LoginLK from '../../../components/Mobile/Auth/LK/LoginLKMobile';

import styles from '../../../scss/components/Mobile/AuthPageMobile.module.scss';

const AuthPageMobile = () => {
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

export default AuthPageMobile;
