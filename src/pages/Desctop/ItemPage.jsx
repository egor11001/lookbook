import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useLocation, useNavigate } from 'react-router';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../../scss/components/Desctop/ItemPage.module.scss';
import SelectInput from '../../components/Desctop/Item/SelectInput';
import SizesModal from '../../components/Desctop/Modals/SizesModal';
import { getProductsById } from '../../services/actions';

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

const ItemPage = () => {
  const location = useLocation();
  const [info, setInfo] = useState(null);
  const [text, setText] = useState(infos);
  const [activeInfo, setActiveInfo] = useState('Состав');
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const onChangeInfo = (value) => () => {
    setActiveInfo(value);
  };

  useEffect(() => {
    getProductsById(location.pathname.split('/')[2]).then((data) => {
      setInfo(data);
      setText(
        data.product_specification_value.filter(
          (item) => item.specification === 'Уход' || item.specification === 'Состав',
        ),
      );
    });
  }, []);

  return (
    <div id="ItemPage" className={styles.wrapper}>
      <button onClick={() => navigate(-1)} className={styles.back}>
        <Icon icon={'bi:arrow-left'} className={styles.back_icon} />
      </button>
      <div className={styles.photos_block}>
        <Swiper
          initialSlide={1}
          pagination={true}
          loop={true}
          modules={[Navigation, Pagination]}
          className={styles.swiper}>
          {info &&
            info.product_image.reverse().map((item, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <img src={item.image} alt={item.alt_text} className={styles.photo} />
              </SwiperSlide>
            ))}
          {/* <SwiperSlide className={styles.slide}>
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
          </SwiperSlide> */}
        </Swiper>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{info && info.vendor}</h1>
        <h3 className={styles.desc}>{info && info.title}</h3>

        <h1 className={styles.price}>{info && info.regular_price} ₽</h1>

        <div className={styles.sizes}>
          <SelectInput
            values={
              info &&
              info.product_specification_value
                .filter((item) => item.specification === 'Размеры')[0]
                .value.split(', ')
            }
            defaultValue={'Выберите размер'}
          />
          <button onClick={() => setVisible(true)} className={styles.modal_btn}>
            Гид по размерам
          </button>
        </div>
        <button className={styles.buy}>В корзину</button>

        <div className={styles.info_block}>
          <div className={styles.buttons}>
            <button
              onClick={onChangeInfo('Состав')}
              className={activeInfo === 'Состав' ? styles.info_btn_active : styles.info_btn}>
              Состав
            </button>
            <button
              onClick={onChangeInfo('Уход')}
              className={activeInfo === 'Уход' ? styles.info_btn_active : styles.info_btn}>
              Уход
            </button>
            <button
              onClick={onChangeInfo('Доставка')}
              className={activeInfo === 'Доставка' ? styles.info_btn_active : styles.info_btn}>
              Доставка
            </button>
          </div>
          <div className={styles.info}>
            {activeInfo === 'Доставка'
              ? 'Пусто'
              : text.filter((item) => item.specification === activeInfo)[0].value}
          </div>
        </div>
      </div>
      {visible ? <SizesModal visible={visible} setVisible={setVisible} /> : null}
    </div>
  );
};

export default ItemPage;
