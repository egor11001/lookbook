import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { LogoIconMobile } from '../../assets';

import styles from '../../scss/components/Mobile/HeaderMobile.module.scss';

const HeaderMobile = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.menu}>
        <Icon className={styles.menu_icon} icon={'icon-park-outline:hamburger-button'} />
      </button>
      <LogoIconMobile className={styles.logo} />
      <div className={styles.buttons_block}>
        <Link to={'/basket'} className={styles.basket_btn}>
          <Icon className={styles.icon} icon="akar-icons:shopping-bag" />
        </Link>
      </div>
    </div>
  );
};

export default HeaderMobile;
