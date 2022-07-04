import React from 'react';
import { useNavigate } from 'react-router';
import { Icon } from '@iconify/react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import styles from '../../scss/components/Mobile/HomeMobile.module.scss';

const HomeMobile = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <button onClick={() => navigate(-1)} className={styles.back}>
          <ChevronLeftIcon className={styles.back_icon} />
        </button>

        <h3 className={styles.title}>Личный кабинет</h3>
      </div>

      <div className={styles.content}>
        <div onClick={() => navigate('/my/profile')} className={styles.item}>
          <Icon icon={'ci:user-circle'} className={styles.item_icon} />
          <h1 className={styles.item_title}>Профиль</h1>
          <Icon icon={'bi:arrow-right'} className={styles.item_arrow} />
        </div>
        <div onClick={() => navigate('/my/orders')} className={styles.item}>
          <Icon icon={'akar-icons:shipping-box-v1'} className={styles.item_icon} />
          <h1 className={styles.item_title}>Заказы</h1>
          <Icon icon={'bi:arrow-right'} className={styles.item_arrow} />
        </div>
      </div>
    </div>
  );
};

export default HomeMobile;
