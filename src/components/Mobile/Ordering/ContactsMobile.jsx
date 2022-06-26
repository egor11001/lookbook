import React from 'react';
import { useNavigate } from 'react-router';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { IMaskInput } from 'react-imask';
import { useSteps } from 'react-step-builder';

import styles from '../../../scss/components/Mobile/OrderingMobile.module.scss';

const PhoneMask = '+{0}-000-000-00-00';

const ContactsMobile = () => {
  const navigate = useNavigate();
  const { next } = useSteps();

  const handleNext = () => {
    next();
  };
  return (
    <div className={styles.inner}>
      <div className={styles.top}>
        <button onClick={() => navigate(-1)} className={styles.back}>
          <ChevronLeftIcon className={styles.back_icon} />
        </button>

        <h3 className={styles.title}>Контактные данные</h3>
      </div>

      <div className={styles.content}>
        <div className={styles.contacts_block}>
          <h1 className={styles.contacts_title}>
            Вся информация о заказе будет
            <br />
            отправлена Вам на эл.почту
          </h1>
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

export default ContactsMobile;
