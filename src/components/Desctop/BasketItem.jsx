import React from 'react';
import { Icon } from '@iconify/react';

import styles from '../../scss/components/Desctop/BasketItem.module.scss';

const BasketItem = ({ photo, brand, type, count, price }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <img src={photo} alt="IMG" className={styles.photo} />
        <div className={styles.infos}>
          <h3 className={styles.brand}>{brand}</h3>
          <h1 className={styles.type}>{type}</h1>
          <h5 className={styles.count}>{count} шт.</h5>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.price}>{price}</h1>
        <button className={styles.remove_btn}>
          <Icon icon={'akar-icons:trash-can'} className={styles.remove_icon} />
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
