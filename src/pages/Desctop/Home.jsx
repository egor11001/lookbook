import React from 'react';
import { useNavigate } from 'react-router';
import { Icon } from '@iconify/react';

import styles from '../../scss/components/Desctop/LK/Home.module.scss';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.top_left}>
          <button onClick={() => navigate(-1)} className={styles.back}>
            <Icon icon={'bi:arrow-left'} className={styles.back_icon} />
          </button>

          <h3 className={styles.title}>Личный кабинет</h3>
        </div>
      </div>

      <div className={styles.content}>
        <div onClick={() => navigate('/my/profile')} className={styles.item}>
          <div className={styles.head}>
            <Icon icon={'ci:user-circle'} className={styles.item_icon} />
            <Icon icon={'bi:arrow-right'} className={styles.item_arrow} />
          </div>
          <h1 className={styles.item_title}>Профиль</h1>
        </div>
        <div onClick={() => navigate('/my/orders')} className={styles.item}>
          <div className={styles.head}>
            <Icon icon={'akar-icons:shipping-box-v1'} className={styles.item_icon} />
            <Icon icon={'bi:arrow-right'} className={styles.item_arrow} />
          </div>
          <h1 className={styles.item_title}>Заказы</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
