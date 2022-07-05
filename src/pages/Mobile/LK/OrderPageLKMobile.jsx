import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../../../scss/components/Mobile/LK/OrderPageMobile.module.scss';

const order = {
  id: 4324,
  counts: 5,
  total_price: 19000,
  create: '24.07.22',
  payment: 'По карте при получении',
  address: 'Россия, Красноярск, ул.Петра Ломако 8, 45кв.',
  name: 'Aртур',
  lastName: 'Пирожков',
  phone: '+7-923-393-00-75',
  status: 'ready',
  items: [
    {
      photo:
        'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg',
      brand: 'lastseen',
      type: 'Худи',
      count: '2',
      price: '9500',
      article: '0025',
      size: 'L',
    },
    {
      photo:
        'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/573148/fleym.jpg',
      brand: 'lastseen',
      type: 'Кеды',
      count: '1',
      price: '7500',
      article: '0182',
      size: '44',
    },
    {
      photo:
        'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg',
      brand: 'lastseen',
      type: 'Худи',
      count: '2',
      price: '9500',
      article: '0025',
      size: 'L',
    },
    {
      photo:
        'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/573148/fleym.jpg',
      brand: 'lastseen',
      type: 'Кеды',
      count: '1',
      price: '7500',
      article: '0182',
      size: '44',
    },
  ],
};

const OrderPageLKMobile = () => {
  const { state } = useLocation();
  const [activeStatus, setActiveStatus] = useState(order.status || 'ready');
  const navigate = useNavigate();
  return (
    <div id="BasketMobile" className={styles.wrapper}>
      <div className={styles.top}>
        <button onClick={() => navigate(-1)} className={styles.back}>
          <ChevronLeftIcon className={styles.back_icon} />
        </button>
        <h3 className={styles.title}>Заказ №{order.id}</h3>
      </div>

      <div className={styles.content}>
        <h1 className={styles.time}>Создано {order.create}</h1>
        <section className={styles.status_block}>
          <h1 className={styles.section_title}>Статус</h1>
          <div className={styles.statuses}>
            <div onClick={() => setActiveStatus('ready')} className={styles.status}>
              <Icon
                icon={'bi:check'}
                className={
                  activeStatus === 'ready' ? styles.status_icon_active : styles.status_icon
                }
              />
              <h3 className={styles.status_title}>Собрано</h3>
            </div>
            <div onClick={() => setActiveStatus('process')} className={styles.status}>
              <Icon
                icon={'bi:check'}
                className={
                  activeStatus === 'process' ? styles.status_icon_active : styles.status_icon
                }
              />
              <h3 className={styles.status_title}>Отправленно</h3>
            </div>
            <div onClick={() => setActiveStatus('completed')} className={styles.status}>
              <Icon
                icon={'bi:check'}
                className={
                  activeStatus === 'completed' ? styles.status_icon_active : styles.status_icon
                }
              />
              <h3 className={styles.status_title}>Доставленно</h3>
            </div>
            <div onClick={() => setActiveStatus('canceled')} className={styles.status}>
              <Icon
                icon={'ic:baseline-cancel'}
                className={
                  activeStatus === 'canceled' ? styles.status_icon_canceled : styles.status_icon
                }
              />
              <h3 className={styles.status_title}>Отменено</h3>
            </div>
          </div>
        </section>

        <section className={styles.stuff_block}>
          <h1 className={styles.section_title}>Товары</h1>
          <div className={styles.counts}>
            <h1 className={styles.total_price}>{order.total_price} ₽</h1>
            <h3 className={styles.count}>{order.counts} товаров</h3>
          </div>

          <hr />

          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            spaceBetween={60}
            slidesPerView={'auto'}
            centeredSlides={true}
            modules={[Pagination]}
            className={styles.swiper}>
            {order.items.map((item, index) => (
              <SwiperSlide onClick={() => navigate('/item')} className={styles.slide} key={index}>
                <h3 className={styles.item_article}>арт.{item.article}</h3>
                <img src={item.photo} alt="IMG" className={styles.item_photo} />
                <h1 className={styles.item_brand}>{item.brand}</h1>
                <h3 className={styles.item_type}>{item.type}</h3>
                <div className={styles.item_block}>
                  <h5 className={styles.item_count}>{item.count} шт.</h5>
                  <h2 className={styles.item_price}>{item.price}</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <hr />
        </section>

        <section className={styles.infos_block}>
          <h1 className={styles.section_title}>Контактные данные</h1>
          <h2 className={styles.name}>
            <span>{order.name}</span>
            {order.lastName}
          </h2>
          <h2 className={styles.phone}>{order.phone}</h2>
          <div className={styles.info}>
            <h2 className={styles.info_title}>Метод оплаты</h2>
            <h3 className={styles.info_desc}>{order.payment}</h3>
          </div>
          <div className={styles.info}>
            <h2 className={styles.info_title}>Адрес</h2>
            <h3 className={styles.info_desc}>{order.address}</h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrderPageLKMobile;
