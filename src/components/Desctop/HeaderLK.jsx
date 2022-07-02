import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { LogoIcon } from '../../assets';

import styles from '../../scss/components/Desctop/Header.module.scss';

const HeaderLK = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={'/'} className={styles.presale}>
        presale
      </Link>
      <Link to={'/lk/home'} className={styles.logo}>
        <LogoIcon />
      </Link>
      <div className={styles.buttons_block}>
        <Link to={'/lk/profile'} className={styles.btn}>
          <Icon className={styles.icon} icon="ci:user-circle" />
        </Link>
        <Link to={'/FAQ'} className={styles.btn}>
          <Icon className={styles.icon} icon="fluent:question-circle-12-regular" />
        </Link>
        <Link to={'/'} className={styles.btn}>
          <Icon className={styles.icon} icon="ic:twotone-logout" />
        </Link>
      </div>
    </div>
  );
};

export default HeaderLK;
