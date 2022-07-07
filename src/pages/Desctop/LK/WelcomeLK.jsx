import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router';

import styles from '../../../scss/components/Desctop/LK/Welcome.module.scss';
import { FooterIcon } from '../../../assets';

const WelcomeLK = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <FooterIcon color={'black'} />
        <h1 className={styles.title}>Добро пожаловать на платформу для брендов LOOKBOOK</h1>

        <h3 className={styles.text}>
          Вы можете отслеживать статистику продаж, управлять статусом заказа, изменять и добавлять
          адреса складов, а также получать уведомления о новых заказах!
        </h3>

        <h3 className={styles.text}>Если у Вас остались вопросы, свяжитесь с нашей поддержкой</h3>
        <h4 className={styles.email}>lookbook.rf@inbox.ru</h4>
      </div>
      <button onClick={() => navigate('/lk/guide')} className={styles.back_btn}>
        <Icon icon={'bi:arrow-right'} className={styles.back_icon} />
      </button>
    </div>
  );
};

export default WelcomeLK;
