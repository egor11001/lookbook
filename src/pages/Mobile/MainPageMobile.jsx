import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router';
import Countdown from 'react-countdown';

import 'swiper/css';
import styles from '../../scss/components/Mobile/MainPageMobile.module.scss';

const Completionist = () => <h1 className={styles.timer}>ура бебра !!!</h1>;

const Hello = () => {
  const navigate = useNavigate();

  return (
    <div id="MainPageMobile" className={styles.wrapper}>
      <Countdown date={new Date('2022-07-11T01:24:11')} className={styles.timer}>
        <Completionist />
      </Countdown>
      <h5 className={styles.presale}>presale</h5>
      <div className={styles.content}>
        <Swiper loop={true} className={styles.swiper}>
          <SwiperSlide onClick={() => navigate('/item')} className={styles.slide}>
            <img
              className={styles.photo}
              src="https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/573148/fleym.jpg"
              alt="1"
            />
            <h3 className={styles.desc}>lastseen</h3>
            <h2 className={styles.title}>Кеды</h2>
          </SwiperSlide>
          <SwiperSlide onClick={() => navigate('/item')} className={styles.slide}>
            <img
              className={styles.photo}
              src="https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg"
              alt="2"
            />
            <h3 className={styles.desc}>lastseen</h3>
            <h2 className={styles.title}>Худи</h2>
          </SwiperSlide>
          <SwiperSlide onClick={() => navigate('/item')} className={styles.slide}>
            <img
              className={styles.photo}
              src="https://cdn0.youla.io/files/images/720_720_out/5f/4c/5f4ccac0efee8d2ffd743c8a-1.jpg"
              alt="3"
            />
            <h3 className={styles.desc}>богема ленинград</h3>
            <h2 className={styles.title}>Кепка</h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hello;
