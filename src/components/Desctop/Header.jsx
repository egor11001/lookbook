import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { observer } from 'mobx-react-lite';

import { LogoIcon } from '../../assets';
import styles from '../../scss/components/Desctop/Header.module.scss';
import { Context } from '../..';

const Header = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <Link to={'/'} className={styles.presale}>
        presale
      </Link>
      <Link to={'/'} className={styles.logo}>
        <LogoIcon />
      </Link>
      <div className={styles.buttons_block}>
        {user.isAuth ? (
          <>
            <button onClick={() => navigate('/my')} className={styles.btn}>
              <Icon className={styles.icon} icon="ci:user-circle" />
            </button>

            <button onClick={() => navigate('/my/basket')} className={styles.btn}>
              <Icon className={styles.icon} icon="akar-icons:shopping-bag" />
            </button>

            <button onClick={() => user.logout()} className={styles.btn}>
              <Icon className={styles.icon} icon="ic:twotone-logout" />
            </button>
          </>
        ) : (
          <>
            <Link to={'/my'} className={styles.btn}>
              <Icon className={styles.icon} icon="ci:user-circle" />
            </Link>
          </>
        )}
        {/*  <Link to={'/my'} className={styles.btn}>
          <Icon className={styles.icon} icon="ci:user-circle" />
        </Link>
        {user.isAuth && (
          <Link to={'/my/basket'} className={styles.btn}>
            <Icon className={styles.icon} icon="akar-icons:shopping-bag" />
          </Link>
        )}
        <button onClick={() => user.logout()} className={styles.btn}>
          <Icon className={styles.icon} icon="ic:twotone-logout" />
        </button> */}
      </div>
    </div>
  );
});

export default Header;
