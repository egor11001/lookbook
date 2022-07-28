import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../scss/components/Desctop/Footer.module.scss';
import { FooterIcon } from '../../assets';
import mc from '../../assets/payments/mc.png';
import mir from '../../assets/payments/mir.png';
import visa from '../../assets/payments/visa.png';

const FooterLK = () => {
  return (
    <div className={styles.wrapper_lk}>
      <FooterIcon />
      <div className={styles.links_block_lk}>
        <div className={styles.col}>
          <Link to={'/lk/privacy-policy'} className={styles.item}>
            Политика конфиденциальности
          </Link>
          <Link to={'/lk/collaboration'} className={styles.item}>
            Партнерам
          </Link>
        </div>
        <div className={styles.col}>
          <h2 className={styles.text}>Свяжитесь с нами:</h2>
          <h1 className={styles.item}>info@lookbook.best</h1>
          <h1 className={styles.item}>
            8-800-201-75-67 <span>/</span> 8-391-204-08-88
          </h1>
        </div>
      </div>
      <div className={styles.payments}>
        <img src={mir} alt="МИР" className={styles.payment} />
        <img src={mc} alt="MC" className={styles.payment} />
        <img src={visa} alt="VISA" className={styles.payment} />
      </div>
    </div>
  );
};

export default FooterLK;
