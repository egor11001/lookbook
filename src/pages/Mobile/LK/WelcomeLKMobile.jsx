import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router';

import styles from '../../../scss/components/Mobile/LK/WelcomeMobile.module.scss';
import { ReactComponent as FooterIcon } from '../../../assets/footerLogo.svg';

const WelcomeLKMobile = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <FooterIcon className={styles.logo} width={60} height={60} />
        <h1 className={styles.title}>Добро пожаловать на платформу для брендов LOOKBOOK</h1>

        <h3 className={styles.text}>
          Вы можете отслеживать статистику продаж, управлять статусом заказа, изменять и добавлять
          адреса складов, а также получать уведомления о новых заказах!
        </h3>

        <h3 className={styles.text}>Если у Вас остались вопросы, свяжитесь с нашей поддержкой</h3>
        <h4 className={styles.email}>lookbook.rf@inbox.ru</h4>

        <button onClick={() => navigate('/guide')} className={styles.back_btn}>
          <Icon icon={'bi:arrow-right'} className={styles.back_icon} />
        </button>
      </div>
    </div>
  );
};

export default WelcomeLKMobile;
