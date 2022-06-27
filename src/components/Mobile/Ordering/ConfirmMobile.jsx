import React from 'react';
import { useNavigate } from 'react-router';
import { Icon } from '@iconify/react';

import styles from '../../../scss/components/Mobile/OrderingMobile.module.scss';

const ConfirmMobile = ({ info, setInfo }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.inner}>
      <div className={styles.top}>
        <h3 className={styles.title}>Оплата</h3>
      </div>

      <div className={styles.content}>
        <div className={styles.confirm_block}>
          <div className={styles.confirm_check}>
            <Icon icon={'bi:check'} className={styles.confirm_icon} />
          </div>
          <h1 className={styles.confirm_title}>
            Спасибо за заказ!
            <br />
            Вся информация о доставке отправлена на почту
            <span> {info.contacts.email}</span>
          </h1>
        </div>
      </div>

      <button onClick={() => navigate('/')} className={styles.confirm_btn}>
        На главную
      </button>
    </div>
  );
};

export default ConfirmMobile;
