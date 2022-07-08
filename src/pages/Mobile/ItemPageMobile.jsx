import React, { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useNavigate } from 'react-router';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../../scss/components/Mobile/ItemPageMobile.module.scss';
import sizesImg from '../../assets/sizes.png';

const infos = {
  composition: 'Хлопок 100%, Мясо 100%, Резина 20%',
  care: 'Замарал - пастирал, пастирал - пасушил, пасушил - пагладил. все как с котиком',
  shipping:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
};

const sizes = ['S', 'M', 'L', 'XL', 'S', 'M', 'L', 'XL', 'S', 'M', 'L', 'XL'];

const ItemPageMobile = () => {
  const [activeInfo, setActiveInfo] = useState('composition');
  const [showSizes, setShowSizes] = useState(false);
  const [activeSize, setActiveSize] = useState(null);
  const navigate = useNavigate();

  const onChangeInfo = (value) => () => {
    setActiveInfo(value);
  };
  return (
    <div id="ItemPageMobile" className={styles.wrapper}>
      <div className={styles.top}>
        <button onClick={() => navigate(-1)} className={styles.back}>
          <ChevronLeftIcon className={styles.back_icon} />
        </button>
        <div className={styles.right}>
          <h1 className={styles.brand}>Lastseen</h1>
          <h3 className={styles.type}>Худи</h3>
        </div>
      </div>
      <div className={styles.photos_block}>
        <Swiper
          pagination={true}
          loop={true}
          modules={[Navigation, Pagination]}
          className={styles.swiper}>
          <SwiperSlide className={styles.slide}>
            <img
              src="https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg"
              alt="1"
              className={styles.photo}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img
              src="https://i.ibb.co/8YLGtLk/photo-2022-06-13-21-50-59.jpg"
              alt="2"
              className={styles.photo}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img
              src="https://static.tildacdn.com/tild3432-3831-4437-a631-643065353263/1.jpg"
              alt="3"
              className={styles.photo}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <h1 className={styles.price}>9500 ₽</h1>

      <div className={styles.sizes}>
        {sizes.length < 6 || showSizes
          ? sizes.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveSize(index)}
                className={activeSize === index ? styles.size_btn_active : styles.size_btn}>
                {item}
              </button>
            ))
          : sizes.slice(0, 5).map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveSize(index)}
                className={activeSize === index ? styles.size_btn_active : styles.size_btn}>
                {item}
              </button>
            ))}
      </div>
      {sizes.length > 5 ? (
        <button onClick={() => setShowSizes(!showSizes)} className={styles.more_sizes}>
          {showSizes ? 'Скрыть размеры' : `Показать все размеры: ${sizes.length}`}
        </button>
      ) : null}

      <button className={styles.buy}>В корзину</button>

      <div className={styles.info_block}>
        <div className={styles.buttons}>
          <button
            disabled={activeInfo === 'composition'}
            onClick={onChangeInfo('composition')}
            className={styles.info_btn}>
            Состав
          </button>
          <button
            disabled={activeInfo === 'care'}
            onClick={onChangeInfo('care')}
            className={styles.info_btn}>
            Уход
          </button>
          <button
            disabled={activeInfo === 'shipping'}
            onClick={onChangeInfo('shipping')}
            className={styles.info_btn}>
            Доставка
          </button>
        </div>
        <div className={styles.info}>{infos[activeInfo]}</div>
      </div>

      <div className={styles.sizes_info}>
        <h1 className={styles.sizes_title}>Гид по размерам</h1>
        <img src={sizesImg} alt="SIZES" className={styles.sizes_img} />
      </div>
    </div>
  );
};

export default ItemPageMobile;
