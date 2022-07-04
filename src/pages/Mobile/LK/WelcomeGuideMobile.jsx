import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../../../scss/components/Mobile/LK/WelcomeGuideMobile.module.scss';

const texts = {
  profile: 'Вся информация о бренде и что-то еще idk',
  notification:
    'Оставайтесь на связи! Все необходимые уведомления о новых заказах, и еще многое другое будут в уведомлениях вот так вот!',
  statistic:
    'Статистика продаж и возвратов. Статистика прибыли и расходов на рекламу. Сюда тоже бы текст придумать было бы супер',
  delivery:
    'Укажите один или несколько адресов отправки товара. Меняйте адрес в зависимости от обстоятельств (переезд склада, открытие новой точки и т.п)',
  questions: 'Ответы на самые частозадаваемые вопросы.',
};

const WelcomeGuideMobile = () => {
  const navigate = useNavigate();

  return (
    <div id="BasketMobile" className={styles.wrapper}>
      <h1 className={styles.title}>Всё самое необходимое одном месте</h1>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={40}
        slidesPerView={'auto'}
        centeredSlides={true}
        modules={[Pagination]}
        className={styles.swiper}>
        <SwiperSlide className={styles.item}>
          <Icon className={styles.item_icon} icon={'gg:profile'} />
          <h1 className={styles.item_title}>Профиль</h1>
          <h3 className={styles.item_desc}>{texts.profile}</h3>
        </SwiperSlide>
        <SwiperSlide className={styles.item}>
          <Icon className={styles.item_icon} icon={'mi:notification'} />
          <h1 className={styles.item_title}>Уведомления</h1>
          <h3 className={styles.item_desc}>{texts.notification}</h3>
        </SwiperSlide>
        <SwiperSlide className={styles.item}>
          <Icon className={styles.item_icon} icon={'akar-icons:statistic-up'} />
          <h1 className={styles.item_title}>Статистика</h1>
          <h3 className={styles.item_desc}>{texts.statistic}</h3>
        </SwiperSlide>
        <SwiperSlide className={styles.item}>
          <Icon className={styles.item_icon} icon={'bx:map'} />
          <h1 className={styles.item_title}>Адреса отправки</h1>
          <h3 className={styles.item_desc}>{texts.delivery}</h3>
        </SwiperSlide>
        <SwiperSlide className={styles.item}>
          <Icon className={styles.item_icon} icon={'fluent:question-circle-12-regular'} />
          <h1 className={styles.item_title}>Помощь и FAQ</h1>
          <h3 className={styles.item_desc}>{texts.questions}</h3>
        </SwiperSlide>
      </Swiper>

      <button onClick={() => navigate('/lk/home')} className={styles.back_btn}>
        <ChevronRightIcon className={styles.back_icon} />
      </button>
    </div>
  );
};

export default WelcomeGuideMobile;
