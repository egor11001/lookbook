import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { LogoIcon } from '../../assets';

import styles from '../../scss/components/Desctop/Header.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={'/'} className={styles.presale}>
        presale
      </Link>
      <Link to={'/'} className={styles.logo}>
        <LogoIcon />
      </Link>
      <div className={styles.buttons_block}>
        <Link to={'/my'} className={styles.btn}>
          <Icon className={styles.icon} icon="ci:user-circle" />
        </Link>
        <Link to={'/my/basket'} className={styles.btn}>
          <Icon className={styles.icon} icon="akar-icons:shopping-bag" />
        </Link>
        <Link to={'/FAQ'} className={styles.btn}>
          <Icon className={styles.icon} icon="fluent:question-circle-12-regular" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
