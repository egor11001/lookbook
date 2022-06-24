import React from 'react';
import { useNavigate } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IMaskInput } from 'react-imask';
import { useSteps } from 'react-step-builder';

import styles from '../../../scss/components/Desctop/Ordering.module.scss';

const PhoneMask = '+{0}-000-000-00-00';

const Contacts = () => {
  const navigate = useNavigate();
  const { next } = useSteps();

  const handleNext = () => {
    next();
  };
  return (
    <div className={styles.inner}>
      <div className={styles.top}>
        <div className={styles.top_left}>
          <button onClick={() => navigate('/basket')} className={styles.back}>
            <ArrowBackIcon className={styles.back_icon} />
          </button>
          <h3 className={styles.title}>Контактные данные</h3>
        </div>
        <div className={styles.top_right}>
          <h4 className={styles.title_small}>
            Вся информация о заказе будет отправлена Вам на эл.почту
          </h4>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contacts_block}>
          <input placeholder="Имя" type="text" className={styles.contacts_input} />
          <input placeholder="Фамилия" type="text" className={styles.contacts_input} />
          <input placeholder="Адрес эл.почты" type="email" className={styles.contacts_input} />
          <IMaskInput
            mask={PhoneMask}
            placeholder="Номер телефона"
            type="text"
            className={styles.contacts_input}
          />
        </div>
      </div>

      <button onClick={handleNext} className={styles.next_btn}>
        Адрес доставки
      </button>
    </div>
  );
};

export default Contacts;
