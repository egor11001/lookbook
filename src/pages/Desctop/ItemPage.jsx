import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useNavigate } from 'react-router';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../../scss/components/Desctop/ItemPage.module.scss';
import SelectInput from '../../components/Desctop/Item/SelectInput';
import SizesModal from '../../components/Desctop/Modals/SizesModal';

const infos = {
  composition: 'Хлопок 100%, Мясо 100%, Резина 20%',
  care: 'Замарал - пастирал, пастирал - пасушил, пасушил - пагладил. все как с котиком',
  shipping: 'Доставка быстро очень быстро атвечау',
};

const ItemPage = () => {
  const [activeInfo, setActiveInfo] = useState('composition');
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const onChangeInfo = (value) => () => {
    setActiveInfo(value);
  };
  return (
    <div id="ItemPage" className={styles.wrapper}>
      <button onClick={() => navigate('/')} className={styles.back}>
        <ArrowBackIcon className={styles.back_icon} />
      </button>
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
      <div className={styles.content}>
        <h1 className={styles.title}>Lastseen</h1>
        <h3 className={styles.desc}>Худи</h3>

        <h1 className={styles.price}>9500 ₽</h1>

        <div className={styles.sizes}>
          <SelectInput values={['S', 'M', 'L', 'XL']} defaultValue={'Выберите размер'} />
          <button onClick={() => setVisible(true)} className={styles.modal_btn}>
            Размерная сетка
          </button>
        </div>
        <button className={styles.buy}>В корзину</button>

        <div className={styles.info_block}>
          <div className={styles.buttons}>
            <button
              onClick={onChangeInfo('composition')}
              className={activeInfo === 'composition' ? styles.info_btn_active : styles.info_btn}>
              Состав
            </button>
            <button
              onClick={onChangeInfo('care')}
              className={activeInfo === 'care' ? styles.info_btn_active : styles.info_btn}>
              Уход
            </button>
            <button
              onClick={onChangeInfo('shipping')}
              className={activeInfo === 'shipping' ? styles.info_btn_active : styles.info_btn}>
              Доставка
            </button>
          </div>
          <div className={styles.info}>{infos[activeInfo]}</div>
        </div>
      </div>
      {visible ? <SizesModal visible={visible} setVisible={setVisible} /> : null}
    </div>
  );
};

export default ItemPage;
