import React from 'react';

import styles from '../../scss/components/Desctop/Empty.module.scss';
import { FooterIcon } from '../../assets';

const Empty = () => {
  return (
    <div className={styles.wrapper}>
      <FooterIcon width={100} height={100} color={'black'} />
      <h1 className={styles.text}>Тут пока пусто...</h1>
    </div>
  );
};

export default Empty;
