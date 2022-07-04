import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { LogoIconMobile } from '../../assets';
import { useNavigate, useLocation } from 'react-router-dom';

import styles from '../../scss/components/Mobile/HeaderMobile.module.scss';
import MenuMobile from './MenuMobile';
import MenuMobileLK from './MenuMobileLK';

const HeaderMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [showMenu]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <button onClick={() => setShowMenu(true)} className={styles.menu}>
          <Icon className={styles.menu_icon} icon={'icon-park-outline:hamburger-button'} />
        </button>
        <button className={styles.logo} onClick={() => navigate('/')}>
          <LogoIconMobile />
        </button>
        <div className={styles.buttons_block}>
          {location.pathname.slice(0, 3) === '/lk' ? (
            <Link to={'/lk/profile'} className={styles.profile_btn}>
              <Icon className={styles.icon} icon="ci:user-circle" />
            </Link>
          ) : (
            <Link to={'/my/basket'} className={styles.basket_btn}>
              <Icon className={styles.icon} icon="akar-icons:shopping-bag" />
            </Link>
          )}
        </div>

        {showMenu ? (
          location.pathname.slice(0, 3) === '/lk' ? (
            <MenuMobileLK showMenu={showMenu} setShowMenu={setShowMenu} />
          ) : (
            <MenuMobile showMenu={showMenu} setShowMenu={setShowMenu} />
          )
        ) : null}
      </div>
    </div>
  );
};

export default HeaderMobile;
