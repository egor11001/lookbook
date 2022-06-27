import React, { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useSteps } from 'react-step-builder';
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import styles from '../../../scss/components/Mobile/OrderingMobile.module.scss';

const items = [
  {
    id: 1,
    img: 'https://static.tildacdn.com/tild6265-6463-4339-a662-323931623666/loso_shar.jpg',
    type: 'СДЭК',
    time: '10 фев. - 29 сент.',
    price: 'free',
  },
  {
    id: 2,
    img: 'https://mr-tools.ru/wp-content/uploads/2021/06/boxberry-logo-1568x1568.jpg',
    type: 'Boxberry',
    time: '26 мая - 29 июня',
    price: 300,
  },
  {
    id: 3,
    img: 'https://avatars.mds.yandex.net/get-zen_doc/99845/pub_5ada1dc78c8be3ca3a0d73c3_5ada1f72dcaf8e45d4791859/scale_1200',
    type: 'Почта России',
    time: '3 янв. - 8 март.',
    price: 50,
  },
  {
    id: 4,
    img: 'https://static10.tgstat.ru/channels/_0/18/18cfd931f77b16dc9b00602bbae2990c.jpg',
    type: 'PickPoint',
    time: '10 фев. - 5 апр.',
    price: 250,
  },
];

const DeliveryMobile = () => {
  const { next, prev } = useSteps();
  const [active, setActive] = useState(null);

  const handleNext = () => {
    if (active) {
      next();
    }
  };
  return (
    <div id="BasketMobile" className={styles.inner}>
      <div className={styles.top}>
        <button onClick={prev} className={styles.back}>
          <ChevronLeftIcon className={styles.back_icon} />
        </button>

        <h3 className={styles.title}>Способ доставки</h3>
      </div>

      <div className={styles.content}>
        <div className={styles.delivery_block}>
          <div className={styles.delivery_items}>
            {items.map((item, index) => (
              <div
                onClick={() => setActive(item.id)}
                key={index}
                className={active === item.id ? styles.delivery_item_acitve : styles.delivery_item}>
                <div className={styles.delivery_info}>
                  <h1 className={styles.delivery_type}>{item.type}</h1>
                  <h3 className={styles.delivery_priceAndTime}>
                    {item.price === 'free' ? 'Бесплатно' : `${item.price} ₽`}
                    <span>{item.time}</span>
                  </h3>
                </div>
                <div className={styles.delivery_status}>
                  <Icon icon={'bi:check'} className={styles.delivery_status_icon} />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.delivery_address}>
            <div className={styles.delivery_col}>
              <h1>Адрес доставки</h1>
              <h3>Россия, Красноярск, ул.Вильского 16ж, 143кв, 655150</h3>
              <h4>
                Способ доставки:
                <span> {!active ? null : items.filter((item) => item.id === active)[0].type}</span>
                <b> {!active ? null : items.filter((item) => item.id === active)[0].time}</b>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleNext} className={styles.next_btn}>
        Метод оплаты
      </button>
    </div>
  );
};

export default DeliveryMobile;
