import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Icon } from '@iconify/react';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../../scss/components/Mobile/BasketPageMobile.module.scss';
import EmptyMobile from '../../components/Mobile/EmptyMobile';
import { getBasket, removeFromBasket } from '../../services/actions';

const BasketPageMobile = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const deleteItem = (data) => {
    removeFromBasket(data).then(() => {
      getBasket().then((data) => {
        setItems(data[0].basket_item);
        setTotalPrice(data[0].total);
      });
    });
  };

  useEffect(() => {
    getBasket().then((data) => {
      setItems(data[0].basket_item);
      setTotalPrice(data[0].total);
    });
  }, []);
  return (
    <div id="BasketMobile" className={styles.wrapper}>
      <div className={styles.top}>
        <button onClick={() => navigate(-1)} className={styles.back}>
          <ChevronLeftIcon className={styles.back_icon} />
        </button>

        <h3 className={styles.title}>Корзина</h3>
      </div>

      <div className={styles.content}>
        {items && items.length > 0 ? (
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            spaceBetween={60}
            slidesPerView={'auto'}
            centeredSlides={true}
            modules={[Pagination]}
            className={styles.swiper}>
            {items.map((item, index) => (
              <SwiperSlide
                onClick={() => navigate(`/${item.productvendorId}/${item.product.id}`)}
                className={styles.slide}
                key={index}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteItem({ product: item.product.id, size: item.size });
                  }}>
                  <Icon icon={'akar-icons:trash-can'} className={styles.remove_icon} />
                </button>
                <img
                  src={item.product.product_image.filter((photo) => photo.is_feature)[0].image}
                  alt={item.product.product_image.filter((photo) => photo.is_feature)[0].alt_text}
                  className={styles.photo}
                />
                <h1 className={styles.brand}>{item.product.vendor}</h1>
                <h3 className={styles.type}>{item.product.title}</h3>
                <div className={styles.block}>
                  <h5 className={styles.count}>{item.quantity} шт.</h5>
                  <h5 className={styles.count}>{item.size}</h5>
                  <h2 className={styles.price}>{item.product.regular_price} ₽</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <EmptyMobile />
        )}
      </div>

      {items && items.length > 0 ? (
        <>
          <h2 className={styles.counts}>
            <span>
              {items.map((item) => item.quantity).reduce((prev, cur) => prev + cur) || '0'}
            </span>{' '}
            товаров
          </h2>
          <h1 className={styles.total_price}>
            <span>Итого:</span>
            {totalPrice || 0} ₽
          </h1>
          <button onClick={() => navigate('/my/ordering')} className={styles.submit}>
            Перейти к оформлению
          </button>
        </>
      ) : null}
    </div>
  );
};

export default BasketPageMobile;
