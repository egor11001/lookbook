import React from 'react';
import { useNavigate } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import styles from '../../scss/components/Desctop/BasketPage.module.scss';
import BasketItem from '../../components/Desctop/BasketItem';
import Empty from '../../components/Desctop/Empty';

const items = [
  {
    photo:
      'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg',
    brand: 'lastseen',
    type: 'Худи',
    count: '2',
    price: '9500 ₽',
  },
  {
    photo: 'https://i.ibb.co/8YLGtLk/photo-2022-06-13-21-50-59.jpg',
    brand: 'Xylitos',
    type: 'Кот Стикс',
    count: '1',
    price: '∞',
  },
  {
    photo:
      'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/573148/fleym.jpg',
    brand: 'lastseen',
    type: 'Кеды',
    count: '1',
    price: '7500 ₽',
  },
  {
    photo: 'https://static.tildacdn.com/tild3432-3831-4437-a631-643065353263/1.jpg',
    brand: 'Fable',
    type: 'Пиджак',
    count: '1',
    price: '10500 ₽',
  },
];

const BasketPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.block}>
          <button onClick={() => navigate(-1)} className={styles.back}>
            <ArrowBackIcon className={styles.back_icon} />
          </button>

          <h3 className={styles.title}>Корзина</h3>
        </div>

        <h2 className={styles.counts}>
          <span>5</span> товаров
        </h2>
        <h3 className={styles.total_price}>
          Итого: <span>8650 ₽</span>
        </h3>
      </div>

      <div className={styles.content}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <BasketItem
              key={index}
              photo={item.photo}
              type={item.type}
              brand={item.brand}
              price={item.price}
              count={item.count}
            />
          ))
        ) : (
          <Empty />
        )}
      </div>

      <button onClick={() => navigate('/my/ordering')} className={styles.submit}>
        Перейти к оформлению
      </button>
    </div>
  );
};

export default BasketPage;
