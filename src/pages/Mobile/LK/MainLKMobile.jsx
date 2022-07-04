import React from 'react';
import { Icon } from '@iconify/react';

import styles from '../../../scss/components/Mobile/LK/MainLKMobile.module.scss';
import { useNavigate } from 'react-router';

const MainLKMobile = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h3 className={styles.title}>Артур Пирожков</h3>
        <button onClick={() => navigate('/lk/notifications')} className={styles.notifications}>
          <Icon icon={'mi:notification'} className={styles.notifications_icon} />
          <div className={styles.notifications_new} />
        </button>
      </div>

      <div className={styles.content}>
        <div onClick={() => navigate('/lk/statistic')} className={styles.statistic}>
          <Icon className={styles.statistic_icon} icon={'akar-icons:statistic-up'} />
          <h2 className={styles.description}>Продажи</h2>
          <h1 className={styles.money}>19000 ₽</h1>
          <div className={styles.counts}>
            <Icon className={styles.counts_icon} icon={'ic:outline-sell'} />
            11 шт.
          </div>
          <h5 className={styles.time}>1.07.22 - 31.07.22</h5>
          <Icon icon={'bi:arrow-right'} className={styles.right_icon} />
        </div>
        <div onClick={() => navigate('/lk/statistic')} className={styles.statistic}>
          <Icon className={styles.statistic_icon} icon={'akar-icons:statistic-down'} />
          <h2 className={styles.description}>Возвраты</h2>
          <h1 className={styles.money}>3250 ₽</h1>
          <div className={styles.counts}>
            <Icon className={styles.counts_icon} icon={'ic:outline-sell'} />2 шт.
          </div>
          <h5 className={styles.time}>1.07.22 - 31.07.22</h5>
          <Icon icon={'bi:arrow-right'} className={styles.right_icon} />
        </div>
      </div>
    </div>
  );
};

export default MainLKMobile;
