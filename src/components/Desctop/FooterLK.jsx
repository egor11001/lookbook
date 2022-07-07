import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../scss/components/Desctop/Footer.module.scss';
import { FooterIcon } from '../../assets';

const FooterLK = () => {
  return (
    <div className={styles.wrapper_lk}>
      <FooterIcon />
      <div className={styles.links_block_lk}>
        <div className={styles.col}>
          <h2 className={styles.text}>Свяжитесь с нами:</h2>
          <h1 className={styles.item}>lookbook.rf@inbox.ru</h1>
        </div>
        <div className={styles.col}>
          <Link to={'/lk/privacy-policy'} className={styles.item}>
            Политика конфиденциальности
          </Link>
          <Link to={'/lk/collaboration'} className={styles.item}>
            Партнерам
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterLK;
