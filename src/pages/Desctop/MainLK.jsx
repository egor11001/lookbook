import React from 'react';
import { Icon } from '@iconify/react';

import styles from '../../scss/components/Desctop/MainLK.module.scss';
import { useNavigate } from 'react-router';

const MainLK = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h3 className={styles.title}>Артур Пирожков</h3>
      </div>

      <div className={styles.content}>
        <div className={styles.statistic}>
          <div className={styles.left}>
            <Icon className={styles.statistic_icon} icon={'akar-icons:statistic-up'} />
            <h2 className={styles.description}>Продажи</h2>
            <h1 className={styles.money}>19000 ₽</h1>
            <div className={styles.counts}>
              <Icon className={styles.counts_icon} icon={'ic:outline-sell'} />
              11 шт.
            </div>
            <h5 className={styles.time}>1.07.22 - 31.07.22</h5>
          </div>
          <div className={styles.right}>
            <Icon className={styles.statistic_icon} icon={'akar-icons:statistic-down'} />
            <h2 className={styles.description}>Возвраты</h2>
            <h1 className={styles.money}>3250 ₽</h1>
            <div className={styles.counts}>
              <Icon className={styles.counts_icon} icon={'ic:outline-sell'} />2 шт.
            </div>
            <h5 className={styles.time}>1.07.22 - 31.07.22</h5>
          </div>
          <Icon icon={'bi:arrow-right'} className={styles.right_icon} />
        </div>

        <div className={styles.column}>
          <div onClick={() => navigate('/notifications')} className={styles.notifications}>
            <div className={styles.container_top}>
              <h1 className={styles.container_title}>Уведомления</h1>
              <Icon icon={'bi:arrow-right'} className={styles.container_right_icon} />
            </div>
            <div className={styles.inner}>
              <Icon icon={'mi:notification'} className={styles.notifications_icon} />
              <h1 className={styles.notifications_count}>13</h1>
            </div>
            <h3 className={styles.description_light}>не прочитано</h3>
          </div>

          <div className={styles.address}>
            <div className={styles.container_top}>
              <h1 className={styles.container_title}>Адрес</h1>
              <Icon icon={'bi:arrow-right'} className={styles.container_right_icon} />
            </div>
            <div className={styles.inner}>
              <Icon icon={'bx:map'} className={styles.address_icon} />
              <h1 className={styles.address_value}>Россия, Красноярск, ул.Петра Ломако 8, 45кв.</h1>
            </div>
            <h3 className={styles.description_light}>основной</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLK;
