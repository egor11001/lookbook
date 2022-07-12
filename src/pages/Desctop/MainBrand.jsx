import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import styles from '../../scss/components/Desctop/MainBrand.module.scss';

const items = [
  {
    photo:
      'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg',
    name: 'Худи',
    price: 9500,
  },
  {
    photo:
      'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg',
    name: 'Худи',
    price: 9500,
  },
  {
    photo:
      'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg',
    name: 'Худи',
    price: 9500,
  },
  {
    photo:
      'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg',
    name: 'Худи',
    price: 9500,
  },
  {
    photo:
      'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg',
    name: 'Худи',
    price: 9500,
  },
  {
    photo:
      'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg',
    name: 'Худи',
    price: 9500,
  },
  {
    photo:
      'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg',
    name: 'Худи',
    price: 9500,
  },
  {
    photo:
      'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg',
    name: 'Худи',
    price: 9500,
  },
  {
    photo:
      'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg',
    name: 'Худи',
    price: 9500,
  },
  {
    photo:
      'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg',
    name: 'Худи',
    price: 9500,
  },
  {
    photo:
      'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg',
    name: 'Худи',
    price: 9500,
  },
  {
    photo:
      'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg',
    name: 'Худи',
    price: 9500,
  },
];

const MainBrand = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.top_left}>
          <Link to={'/'} className={styles.back}>
            <Icon icon={'bi:arrow-left'} className={styles.back_icon} />
          </Link>
          <h3 className={styles.title}>lastseen</h3>
          <img
            className={styles.logo}
            src="https://aws.kiiiosk.store/uploads/shop/8644/images/14330/45546579-708f-4148-a371-76ebf0ba1421.jpg"
            alt="LOGO"
          />
        </div>
      </div>

      <div className={styles.content}>
        {items.map((item, index) => (
          <Link to={'/brand/item'} key={index} className={styles.card}>
            <img src={item.photo} alt="IMG" className={styles.card_photo} />
            <h2 className={styles.card_name}>{item.name}</h2>
            <h1 className={styles.card_price}>{item.price} ₽</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainBrand;
