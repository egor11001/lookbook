import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import styles from '../../scss/components/Desctop/BasketItem.module.scss';

const BasketItem = ({ photo, size, brand, type, count, price, itemId, vendorId, deleteItem }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    deleteItem({ product: itemId, size: size });
  };
  return (
    <Link to={`/${vendorId}/${itemId}`} className={styles.wrapper}>
      <div className={styles.left}>
        <img
          src={photo.filter((photo) => photo.is_feature)[0].image}
          alt={photo.filter((photo) => photo.is_feature)[0].alt_text}
          className={styles.photo}
        />
        <div className={styles.infos}>
          <h3 className={styles.brand}>{brand}</h3>
          <h1 className={styles.type}>{type}</h1>
          <h1 className={styles.count}>{size}</h1>
          <h5 className={styles.count}>{count} шт.</h5>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.price}>{price}</h1>
        <button onClick={handleDelete} className={styles.remove_btn}>
          <Icon icon={'akar-icons:trash-can'} className={styles.remove_icon} />
        </button>
      </div>
    </Link>
  );
};

export default BasketItem;
