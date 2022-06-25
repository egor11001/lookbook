import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { LogoIconMobile } from '../../assets';
import { useNavigate } from 'react-router-dom';

import styles from '../../scss/components/Mobile/HeaderMobile.module.scss';
import MenuMobile from './MenuMobile';

const HeaderMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

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
        <button onClick={() => navigate('/')}>
          <LogoIconMobile className={styles.logo} />
        </button>
        <div className={styles.buttons_block}>
          <Link to={'/basket'} className={styles.basket_btn}>
            <Icon className={styles.icon} icon="akar-icons:shopping-bag" />
          </Link>
        </div>

        {showMenu ? <MenuMobile showMenu={showMenu} setShowMenu={setShowMenu} /> : null}
      </div>
    </div>
  );
};

export default HeaderMobile;
