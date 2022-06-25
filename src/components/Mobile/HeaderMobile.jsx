import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { LogoIconMobile } from '../../assets';

import styles from '../../scss/components/Mobile/HeaderMobile.module.scss';
import MenuMobile from './MenuMobile';

const HeaderMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [showMenu]);
  return (
    <div className={styles.wrapper}>
      <button onClick={() => setShowMenu(true)} className={styles.menu}>
        <Icon className={styles.menu_icon} icon={'icon-park-outline:hamburger-button'} />
      </button>
      <LogoIconMobile className={styles.logo} />
      <div className={styles.buttons_block}>
        <Link to={'/basket'} className={styles.basket_btn}>
          <Icon className={styles.icon} icon="akar-icons:shopping-bag" />
        </Link>
      </div>

      {showMenu ? <MenuMobile showMenu={showMenu} setShowMenu={setShowMenu} /> : null}
    </div>
  );
};

export default HeaderMobile;
