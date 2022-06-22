import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../scss/components/Desctop/MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.timer}>11:11:11:11</h1>
      <div className={styles.content}>
        <button id="prev" className={styles.prev}>
          <ArrowBackIcon className={styles.icon} />
        </button>
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          navigation={{
            nextEl: '#next',
            prevEl: '#prev',
          }}
          loop={true}
          modules={[Navigation]}
          className={styles.swiper}>
          <SwiperSlide className={styles.slide}>
            <img
              className={styles.photo}
              src="https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/573148/fleym.jpg"
              alt="1"
            />
            <h3 className={styles.desc}>lastseen</h3>
            <h2 className={styles.title}>Кеды</h2>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img
              className={styles.photo}
              src="https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg"
              alt="2"
            />
            <h3 className={styles.desc}>lastseen</h3>
            <h2 className={styles.title}>Худи</h2>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img
              className={styles.photo}
              src="https://cdn0.youla.io/files/images/720_720_out/5f/4c/5f4ccac0efee8d2ffd743c8a-1.jpg"
              alt="3"
            />
            <h3 className={styles.desc}>богема ленинград</h3>
            <h2 className={styles.title}>Кепка</h2>
          </SwiperSlide>
        </Swiper>

        <button id="next" className={styles.next}>
          <ArrowForwardIcon className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default MainPage;
