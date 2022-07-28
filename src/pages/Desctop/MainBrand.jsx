import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

import styles from '../../scss/components/Desctop/MainBrand.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { getProducts } from '../../services/actions';

const MainBrand = () => {
  const location = useLocation();
  const path = location.pathname;
  const [items, setItems] = useState(null);

  useEffect(() => {
    getProducts().then((data) => setItems(data));
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.top_left}>
          <Link to={'/'} className={styles.back}>
            <Icon icon={'bi:arrow-left'} className={styles.back_icon} />
          </Link>
          <h3 className={styles.title}>{location.state.vendor || '-'}</h3>
          <img className={styles.logo} src={location.state.image} alt="LOGO" />
        </div>
      </div>

      <div className={styles.content}>
        {items &&
          items.map((item) => (
            <Link to={`${path}/${item.id}`} key={item.id} className={styles.card}>
              <img
                src={item.product_image.filter((photo) => photo.is_feature)[0].image}
                alt={item.product_image.filter((photo) => photo.is_feature)[0].alt_text}
                className={styles.card_photo}
              />
              <h2 className={styles.card_name}>{item.title}</h2>
              <h1 className={styles.card_price}>{item.regular_price} ₽</h1>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MainBrand;
