import React, { useEffect, useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useLocation, useNavigate } from 'react-router';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../../scss/components/Mobile/ItemPageMobile.module.scss';
import { addToBasket, getProductsById } from '../../services/actions';

const infos = [
  {
    specification: 'Состав',
    value: 'Пусто',
  },
  {
    specification: 'Уход',
    value: 'Пусто',
  },
  {
    specification: 'Доставка',
    value: 'Пусто',
  },
];

const ItemPageMobile = () => {
  const location = useLocation();
  const [info, setInfo] = useState(null);
  const [text, setText] = useState(infos);
  const [sizes, setSizes] = useState(null);
  const [activeInfo, setActiveInfo] = useState('Состав');
  const [showSizes, setShowSizes] = useState(false);
  const [activeSize, setActiveSize] = useState(null);
  const navigate = useNavigate();

  const onChangeInfo = (value) => () => {
    setActiveInfo(value);
  };

  const handleAddToBasket = () => {
    addToBasket({ product: info.id, quantity: 1, size: sizes[activeSize] });
  };

  useEffect(() => {
    getProductsById(location.pathname.split('/')[2]).then((data) => {
      setInfo(data);
      setText(
        data.product_specification_value.filter(
          (item) => item.specification === 'Уход' || item.specification === 'Состав',
        ),
      );
      setSizes(
        data.product_specification_value
          .filter((item) => item.specification === 'Размеры')[0]
          .value.split(', '),
      );
    });
  }, []);
  return (
    <div id="ItemPageMobile" className={styles.wrapper}>
      <div className={styles.top}>
        <button onClick={() => navigate(-1)} className={styles.back}>
          <ChevronLeftIcon className={styles.back_icon} />
        </button>
        <div className={styles.right}>
          <h1 className={styles.brand}>{info && info.vendor}</h1>
          <h3 className={styles.type}>{info && info.title}</h3>
        </div>
      </div>
      <div className={styles.photos_block}>
        <Swiper
          initialSlide={1}
          pagination={true}
          loop={true}
          modules={[Navigation, Pagination]}
          className={styles.swiper}>
          {info &&
            info.product_image.map((item, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <img src={item.image} alt={item.alt_text} className={styles.photo} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <h1 className={styles.price}>{info && info.regular_price} ₽</h1>

      <div className={styles.sizes}>
        {(sizes && sizes.length < 6) || showSizes
          ? sizes.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveSize(index)}
                className={activeSize === index ? styles.size_btn_active : styles.size_btn}>
                {item}
              </button>
            ))
          : sizes &&
            sizes.slice(0, 5).map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveSize(index)}
                className={activeSize === index ? styles.size_btn_active : styles.size_btn}>
                {item}
              </button>
            ))}
      </div>
      {sizes && sizes.length > 5 ? (
        <button onClick={() => setShowSizes(!showSizes)} className={styles.more_sizes}>
          {showSizes ? 'Скрыть размеры' : `Показать все размеры: ${sizes.length}`}
        </button>
      ) : null}

      <button onClick={handleAddToBasket} className={styles.buy}>
        В корзину
      </button>

      <div className={styles.info_block}>
        <div className={styles.buttons}>
          <button
            disabled={activeInfo === 'Состав'}
            onClick={onChangeInfo('Состав')}
            className={styles.info_btn}>
            Состав
          </button>
          <button
            disabled={activeInfo === 'Уход'}
            onClick={onChangeInfo('Уход')}
            className={styles.info_btn}>
            Уход
          </button>
          <button
            disabled={activeInfo === 'Доставка'}
            onClick={onChangeInfo('Доставка')}
            className={styles.info_btn}>
            Доставка
          </button>
        </div>
        <div className={styles.info}>
          {activeInfo === 'Доставка'
            ? 'Пусто'
            : text.filter((item) => item.specification === activeInfo)[0].value}
        </div>
      </div>

      <div className={styles.sizes_info}>
        <h1 className={styles.sizes_title}>Гид по размерам</h1>
        <p className={styles.sizes_guide}>{info?.sizes_guide}</p>
      </div>
    </div>
  );
};

export default ItemPageMobile;
