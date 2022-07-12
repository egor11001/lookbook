import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router';
import Countdown from 'react-countdown';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../../scss/components/Desctop/MainPage.module.scss';

const Completionist = () => (
  <img
    alt="KAIF"
    src="https://sun9-60.userapi.com/impf/yN4LZMtvNHnirnMp207piMLdblj1SOlRaFVWwg/WaSzBz4H6h8.jpg?size=735x550&quality=96&sign=6e83472b9774de976600b1607f820bfc&type=album"
    className={styles.kaif}
  />
);

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="MainPage" className={styles.wrapper}>
      <Countdown date={1662025479000} className={styles.timer}>
        <Completionist />
      </Countdown>

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
          <SwiperSlide onClick={() => navigate('/brand')} className={styles.slide}>
            <img
              className={styles.photo}
              src="https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/573148/fleym.jpg"
              alt="1"
            />
            <h3 className={styles.desc}>lastseen</h3>
            <h2 className={styles.title}>Кеды</h2>
          </SwiperSlide>
          <SwiperSlide onClick={() => navigate('/brand')} className={styles.slide}>
            <img
              className={styles.photo}
              src="https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg"
              alt="2"
            />
            <h3 className={styles.desc}>lastseen</h3>
            <h2 className={styles.title}>Худи</h2>
          </SwiperSlide>
          <SwiperSlide onClick={() => navigate('/brand')} className={styles.slide}>
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
