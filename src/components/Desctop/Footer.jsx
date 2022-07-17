import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from '../../scss/components/Desctop/Footer.module.scss';
import { FooterIcon } from '../../assets';
import mc from '../../assets/payments/mc.png';
import mir from '../../assets/payments/mir.png';
import visa from '../../assets/payments/visa.png';

const languages = ['RU', 'ENG', 'CZ', 'JPN'];

const Footer = () => {
  /* const [lang, setLang] = useState(languages[0]);
  const [showLang, setShowLang] = useState(false); */

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
  }; */
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <FooterIcon />
        <div className={styles.links_block}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link to={'/about'} className={styles.link}>
                О нас
              </Link>
            </li>
            <li className={styles.li}>
              <Link to={'/delivery'} className={styles.link}>
                Доставка
              </Link>
            </li>
            <li className={styles.li}>
              <Link to={'/collaboration'} className={styles.link}>
                Партнерам
              </Link>
            </li>
            <li className={styles.li}>
              <Link to={'/privacy-policy'} className={styles.link}>
                Политика конфиденциальности
              </Link>
            </li>
            <li className={styles.li}>
              <Link to={'/payment'} className={styles.link}>
                Оплата
              </Link>
            </li>
            <li className={styles.li}>
              <Link to={'/returns'} className={styles.link}>
                Возвраты
              </Link>
            </li>
            {/* <li className={styles.li}>
              <Link to={'/FAQ'} className={styles.link}>
                Помощь и FAQ
              </Link>
            </li> */}
            <li className={styles.li}>
              <Link to={'/contacts'} className={styles.link}>
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.payments}>
        <img src={mir} alt="МИР" className={styles.payment} />
        <img src={mc} alt="MC" className={styles.payment} />
        <img src={visa} alt="VISA" className={styles.payment} />
      </div>
      {/*  <div className={styles.set_lng}>
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
      </div> */}
    </div>
  );
};

export default Footer;
