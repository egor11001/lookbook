import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import styles from '../../scss/components/Mobile/MenuMobile.module.scss';
import { FooterIconMobile } from '../../assets';
import mc from '../../assets/payments/mc.png';
import mir from '../../assets/payments/mir.png';
import visa from '../../assets/payments/visa.png';
import Div100vh from 'react-div-100vh';

const MenuMobileLK = ({ showMenu, setShowMenu }) => {
  return (
    <Div100vh>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <FooterIconMobile />
          <button onClick={() => setShowMenu(false)} className={styles.close_btn}>
            <Icon className={styles.close_icon} icon={'bi:arrow-right'} />
          </button>
        </div>
        <div className={styles.content}>
          <ul className={styles.ul_lk}>
            <Link
              onClick={() => setShowMenu(!showMenu)}
              to={'/lk/notifications'}
              className={styles.li_lk}>
              <Icon className={styles.icon} icon={'mi:notification'} />
              <h1 className={styles.link_lk}>Уведомления</h1>
            </Link>
            <Link
              onClick={() => setShowMenu(!showMenu)}
              to={'/lk/statistic'}
              className={styles.li_lk}>
              <Icon className={styles.icon} icon={'akar-icons:statistic-up'} />
              <h1 className={styles.link_lk}>Статистика</h1>
            </Link>
            <Link
              onClick={() => setShowMenu(!showMenu)}
              to={'/lk/addresses'}
              className={styles.li_lk}>
              <Icon className={styles.icon} icon={'bx:map'} />
              <h1 className={styles.link_lk}>Адреса отправки</h1>
            </Link>
            <Link onClick={() => setShowMenu(!showMenu)} to={'/lk/FAQ'} className={styles.li_lk}>
              <Icon className={styles.icon} icon={'fluent:question-circle-12-regular'} />
              <h1 className={styles.link_lk}>Помощь и FAQ</h1>
            </Link>
            <Link
              onClick={() => setShowMenu(!showMenu)}
              to={'/lk/authorization'}
              className={styles.li_lk}>
              <Icon className={styles.icon} icon={'ic:twotone-logout'} />
              <h1 className={styles.link_lk}>Выйти</h1>
            </Link>
          </ul>

          <hr />

          <ul className={styles.ul_more}>
            <Link
              onClick={() => setShowMenu(!showMenu)}
              to={'/lk/collaboration'}
              className={styles.li_more}>
              <Icon className={styles.icon} icon={'icon-park-outline:user-business'} />
              <h1 className={styles.link_more}>Партнерам</h1>
            </Link>
            <Link
              onClick={() => setShowMenu(!showMenu)}
              to={'/lk/privacy-policy'}
              className={styles.li_more}>
              <Icon className={styles.icon} icon={'system-uicons:document-list'} />
              <h1 className={styles.link_more}>Политика конфиденциальности</h1>
            </Link>
            <Link
              onClick={() => setShowMenu(!showMenu)}
              to={'/lk/contacts'}
              className={styles.li_more}>
              <Icon className={styles.icon} icon={'fluent:mail-16-regular'} />
              <h1 className={styles.link_more}>Контакты</h1>
            </Link>
          </ul>

          <hr />
          <div className={styles.payments}>
            <img src={mir} alt="МИР" className={styles.payment} />
            <img src={mc} alt="MC" className={styles.payment} />
            <img src={visa} alt="VISA" className={styles.payment} />
          </div>
        </div>
      </div>
    </Div100vh>
  );
};

export default MenuMobileLK;
