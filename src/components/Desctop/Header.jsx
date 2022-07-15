import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { observer } from 'mobx-react-lite';

import { LogoIcon } from '../../assets';
import styles from '../../scss/components/Desctop/Header.module.scss';
import { Context } from '../..';

const Header = observer(() => {
  const { user } = useContext(Context);
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
        {user.isAuth && (
          <Link to={'/my/basket'} className={styles.btn}>
            <Icon className={styles.icon} icon="akar-icons:shopping-bag" />
          </Link>
        )}
        <Link to={'/FAQ'} className={styles.btn}>
          <Icon className={styles.icon} icon="fluent:question-circle-12-regular" />
        </Link>
      </div>
    </div>
  );
});

export default Header;
