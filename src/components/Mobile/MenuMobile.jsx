import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import styles from '../../scss/components/Mobile/MenuMobile.module.scss';
import { FooterIconMobile } from '../../assets';
import Div100vh from 'react-div-100vh';

const languages = ['RU', 'ENG', 'CZ', 'JPN'];

const MenuMobile = ({ showMenu, setShowMenu }) => {
  const [lang, setLang] = useState(languages[0]);
  const [showLang, setShowLang] = useState(false);

  /* const handleChangeLang = () => {
    if (showLang) {
      setShowLang(false);
    } else {
      setShowLang(true);
    }
  };

  const onChangeLang = (item) => () => {
    if (item) {
      setLang(item);
      setShowLang(false);
    }
  };
 */
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
          <Link onClick={() => setShowMenu(!showMenu)} to={'/my'} className={styles.profile}>
            Войти
          </Link>
          <hr />
          <ul className={styles.ul}>
            <Link onClick={() => setShowMenu(!showMenu)} to={'/about'} className={styles.li}>
              <h1 className={styles.link}>О нас</h1>
            </Link>
            <Link onClick={() => setShowMenu(!showMenu)} to={'/payment'} className={styles.li}>
              <h1 className={styles.link}>Оплата</h1>
            </Link>
            <Link onClick={() => setShowMenu(!showMenu)} to={'/delivery'} className={styles.li}>
              <h1 className={styles.link}>Доставка</h1>
            </Link>
            <Link onClick={() => setShowMenu(!showMenu)} to={'/returns'} className={styles.li}>
              <h1 className={styles.link}>Возвраты</h1>
            </Link>
            <Link
              onClick={() => setShowMenu(!showMenu)}
              to={'/collaboration'}
              className={styles.li}>
              <h1 className={styles.link}>Партнерам</h1>
            </Link>
            <Link onClick={() => setShowMenu(!showMenu)} to={'/contacts'} className={styles.li}>
              <h1 className={styles.link}>Контакты</h1>
            </Link>

            <Link
              onClick={() => setShowMenu(!showMenu)}
              to={'/privacy-policy'}
              className={styles.li}>
              <h1 className={styles.link}>Политика конфиденциальности</h1>
            </Link>
            <Link onClick={() => setShowMenu(!showMenu)} to={'/FAQ'} className={styles.li}>
              <h1 className={styles.link}>Помощь и FAQ</h1>
            </Link>
          </ul>
        </div>
      </div>
    </Div100vh>
  );
};

export default MenuMobile;
