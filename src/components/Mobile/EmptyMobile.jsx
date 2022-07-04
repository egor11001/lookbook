import React from 'react';

import styles from '../../scss/components/Mobile/EmptyMobile.module.scss';
import { FooterIcon } from '../../assets';

const EmptyMobile = () => {
  return (
    <div className={styles.wrapper}>
      <FooterIcon width={100} height={100} color={'black'} />
      <h1 className={styles.text}>Тут пока пусто...</h1>
    </div>
  );
};

export default EmptyMobile;
