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

  const handleChangeLang = () => {
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
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link to={'/contacts'} className={styles.link}>
                Контакты
              </Link>
            </li>
            <li className={styles.li}>
              <Link to={'/delivery'} className={styles.link}>
                Доставка
              </Link>
            </li>
            <li className={styles.li}>
              <Link to={'/investors'} className={styles.link}>
                Инвесторам
              </Link>
            </li>
            <li className={styles.li}>
              <Link to={'/privacy-policy'} className={styles.link}>
                Политика конфиденциальности
              </Link>
            </li>
            <li className={styles.li}>
              <Link to={'/about'} className={styles.link}>
                О нас
              </Link>
            </li>
            <li className={styles.li}>
              <Link to={'/payment'} className={styles.link}>
                Оплата
              </Link>
            </li>
            <li className={styles.li}>
              <Link to={'/collaboration'} className={styles.link}>
                Сотрудничество
              </Link>
            </li>
            <li className={styles.li}>
              <Link to={'/FAQ'} className={styles.link}>
                Помощь и FAQ
              </Link>
            </li>
          </ul>
        </div>

        <hr />

        <div className={styles.set_lng}>
          {showLang
            ? languages.map((item, index) =>
                item !== lang ? (
                  <button onClick={onChangeLang(item)} key={index} className={styles.lng_item}>
                    {item}
                  </button>
                ) : null,
              )
            : null}
          <button onClick={handleChangeLang} className={styles.lng}>
            {lang}
          </button>
        </div>
      </div>
    </Div100vh>
  );
};

export default MenuMobile;
