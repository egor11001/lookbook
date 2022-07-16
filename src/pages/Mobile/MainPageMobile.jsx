import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router';
import Countdown from 'react-countdown';

import 'swiper/css';
import styles from '../../scss/components/Mobile/MainPageMobile.module.scss';
import { getBrands } from '../../services/actions';

const Completionist = () => (
  <img
    alt="KAIF"
    src="https://sun9-60.userapi.com/impf/yN4LZMtvNHnirnMp207piMLdblj1SOlRaFVWwg/WaSzBz4H6h8.jpg?size=735x550&quality=96&sign=6e83472b9774de976600b1607f820bfc&type=album"
    className={styles.kaif}
  />
);

const MainPageMobile = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState(null);

  useEffect(() => {
    getBrands().then((data) => setItems(data));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="MainPageMobile" className={styles.wrapper}>
      <Countdown date={1662025479000} className={styles.timer}>
        <Completionist />
      </Countdown>
      <h5 className={styles.presale}>presale</h5>
      <div className={styles.content}>
        <Swiper loop={true} className={styles.swiper}>
          {items &&
            items.map((item, index) => (
              <SwiperSlide
                key={index}
                onClick={() =>
                  navigate(`/${item.vendor_id}`, {
                    state: { image: item.image, vendor: item.vendor, vendorId: item.vendor_id },
                  })
                }
                className={styles.slide}>
                <img className={styles.photo} src={item.image} alt={item.alt_text} />
                <h3 className={styles.desc}>{item.vendor}</h3>
                <h2 className={styles.title}>{item.vendor}</h2>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainPageMobile;
