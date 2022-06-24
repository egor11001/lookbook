import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSteps } from 'react-step-builder';
import { Icon } from '@iconify/react';

import styles from '../../../scss/components/Desctop/Ordering.module.scss';

const items = [
  {
    id: 1,
    img: 'https://static.tildacdn.com/tild6265-6463-4339-a662-323931623666/loso_shar.jpg',
    type: 'СДЭК',
    time: '1-2',
    price: 'free',
  },
  {
    id: 2,
    img: 'https://mr-tools.ru/wp-content/uploads/2021/06/boxberry-logo-1568x1568.jpg',
    type: 'Boxberry',
    time: '1-4',
    price: 300,
  },
  {
    id: 3,
    img: 'https://avatars.mds.yandex.net/get-zen_doc/99845/pub_5ada1dc78c8be3ca3a0d73c3_5ada1f72dcaf8e45d4791859/scale_1200',
    type: 'Почта России',
    time: '14-30',
    price: 50,
  },
  {
    id: 4,
    img: 'https://static10.tgstat.ru/channels/_0/18/18cfd931f77b16dc9b00602bbae2990c.jpg',
    type: 'PickPoint',
    time: '2',
    price: 250,
  },
  {
    id: 5,
    img: 'https://static.tildacdn.com/tild6265-6463-4339-a662-323931623666/loso_shar.jpg',
    type: 'СДЭК',
    time: '1-2',
    price: 'free',
  },
  {
    id: 6,
    img: 'https://mr-tools.ru/wp-content/uploads/2021/06/boxberry-logo-1568x1568.jpg',
    type: 'Boxberry',
    time: '1-4',
    price: 300,
  },
  {
    id: 7,
    img: 'https://avatars.mds.yandex.net/get-zen_doc/99845/pub_5ada1dc78c8be3ca3a0d73c3_5ada1f72dcaf8e45d4791859/scale_1200',
    type: 'Почта России',
    time: '14-30',
    price: 50,
  },
  {
    id: 8,
    img: 'https://static10.tgstat.ru/channels/_0/18/18cfd931f77b16dc9b00602bbae2990c.jpg',
    type: 'PickPoint',
    time: '2',
    price: 250,
  },
];

const Delivery = () => {
  const { next, prev } = useSteps();
  const [active, setActive] = useState(null);

  const handleNext = () => {
    if (active) {
      next();
    }
  };
  return (
    <div className={styles.inner}>
      <div className={styles.top}>
        <div className={styles.top_left}>
          <button onClick={prev} className={styles.back}>
            <ArrowBackIcon className={styles.back_icon} />
          </button>
          <h3 className={styles.title}>Способ доставки</h3>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.delivery_block}>
          <div className={styles.delivery_items}>
            {items.map((item, index) => (
              <div
                onClick={() => setActive(item.id)}
                key={index}
                className={active === item.id ? styles.delivery_item_acitve : styles.delivery_item}>
                <img src={item.img} alt="LOGO" className={styles.delivery_img} />
                <h2 className={styles.delivery_type}>{item.type}</h2>
                <h3 className={styles.delivery_time}>{item.time} дня</h3>
                <h3 className={styles.delivery_price}>
                  {item.price === 'free' ? 'Бесплатно' : `${item.price} ₽`}
                </h3>
                <div className={styles.delivery_status}>
                  <Icon icon={'bi:check'} className={styles.delivery_status_icon} />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.delivery_address}>
            <h1>Адрес доставки</h1>
            <h3>Россия, Красноярск, ул.Вильского 16ж, 143кв, 655150</h3>
          </div>
        </div>
      </div>

      <button onClick={handleNext} className={styles.next_btn}>
        Адрес доставки
      </button>
    </div>
  );
};

export default Delivery;
