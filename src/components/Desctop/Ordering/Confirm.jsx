import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router';

import styles from '../../../scss/components/Desctop/Ordering.module.scss';

const Confirm = ({ info, setInfo }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.inner}>
      <div className={styles.top}>
        <div className={styles.top_left}>
          <h3 className={styles.title_confirm}>Оплата</h3>
        </div>
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

export default Confirm;
