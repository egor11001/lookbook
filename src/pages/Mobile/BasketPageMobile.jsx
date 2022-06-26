import React from 'react';
import { useNavigate } from 'react-router';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Icon } from '@iconify/react';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../../scss/components/Mobile/BasketPageMobile.module.scss';

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

const BasketPageMobile = () => {
  const navigate = useNavigate();

  return (
    <div id="BasketMobile" className={styles.wrapper}>
      <div className={styles.top}>
        <button onClick={() => navigate(-1)} className={styles.back}>
          <ChevronLeftIcon className={styles.back_icon} />
        </button>

        <h3 className={styles.title}>Корзина</h3>
      </div>

      <div className={styles.content}>
        <Swiper
          onClick={() => navigate('/item')}
          pagination={{
            dynamicBullets: true,
          }}
          spaceBetween={60}
          slidesPerView={'auto'}
          centeredSlides={true}
          modules={[Pagination]}
          className={styles.swiper}>
          {items.map((item, index) => (
            <SwiperSlide className={styles.slide} key={index}>
              <Icon icon={'akar-icons:trash-can'} className={styles.remove_icon} />
              <img src={item.photo} alt="IMG" className={styles.photo} />
              <h1 className={styles.brand}>{item.brand}</h1>
              <h3 className={styles.type}>{item.type}</h3>
              <div className={styles.block}>
                <h5 className={styles.count}>{item.count} шт.</h5>
                <h2 className={styles.price}>{item.price}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <h2 className={styles.counts}>
        <span>{items.length}</span> товаров
      </h2>
      <h1 className={styles.total_price}>
        <span>Итого:</span>8650 ₽
      </h1>

      <button onClick={() => navigate('/ordering')} className={styles.submit}>
        Перейти к оформлению
      </button>
    </div>
  );
};

export default BasketPageMobile;
