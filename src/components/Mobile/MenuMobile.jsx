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
              <Link to={'/about'} className={styles.link}>
                О нас
              </Link>
            </li>

            <li className={styles.li}>
              <Link onClick={() => setShowMenu(!showMenu)} to={'/delivery'} className={styles.link}>
                Доставка
              </Link>
            </li>
            <li className={styles.li}>
              <Link onClick={() => setShowMenu(!showMenu)} to={'/payment'} className={styles.link}>
                Оплата
              </Link>
            </li>
            <li className={styles.li}>
              <Link onClick={() => setShowMenu(!showMenu)} to={'/contacts'} className={styles.link}>
                Контакты
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                onClick={() => setShowMenu(!showMenu)}
                to={'/investors'}
                className={styles.link}>
                Инвесторам
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                onClick={() => setShowMenu(!showMenu)}
                to={'/collaboration'}
                className={styles.link}>
                Сотрудничество
              </Link>
            </li>
            <li className={styles.li}>
              <Link onClick={() => setShowMenu(!showMenu)} to={'/FAQ'} className={styles.link}>
                Помощь и FAQ
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                onClick={() => setShowMenu(!showMenu)}
                to={'/privacy-policy'}
                className={styles.link}>
                Политика конфиденциальности
              </Link>
            </li>
          </ul>
        </div>

        <hr />

        <div className={styles.set_lng}>
          <button onClick={handleChangeLang} className={styles.lng}>
            {lang}
          </button>
          {showLang
            ? languages.map((item, index) =>
                item !== lang ? (
                  <button onClick={onChangeLang(item)} key={index} className={styles.lng_item}>
                    {item}
                  </button>
                ) : null,
              )
            : null}
        </div>
      </div>
    </Div100vh>
  );
};

export default MenuMobile;
