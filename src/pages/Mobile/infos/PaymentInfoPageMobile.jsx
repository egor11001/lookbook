import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Icon } from '@iconify/react';

import styles from '../../../scss/components/Mobile/PaymentInfoPageMobile.module.scss';

const PaymentInfoPageMobile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.top_left}>
            <button onClick={() => navigate(-1)} className={styles.back}>
              <ChevronLeftIcon className={styles.back_icon} />
            </button>
            <h3 className={styles.title}>Оплата</h3>
          </div>
        </div>

        <div className={styles.content}>
          <h1 className={styles.payment_title}>Мы гарантируем безопасность платежей</h1>
          <h1 className={styles.text}>Вы можете оплатить свой заказ следующими способами:</h1>
          <div className={styles.block}>
            <div className={styles.item}>
              <Icon icon={'bi:credit-card'} className={styles.item_icon} />
              <h2 className={styles.item_title}>Картой</h2>
            </div>
            <div className={styles.item}>
              <Icon icon={'fa6-solid:money-bill-wave'} className={styles.item_icon} />
              <h2 className={styles.item_title}>Наличными курьеру</h2>
            </div>
            <div className={styles.item}>
              <Icon icon={'icon-park-outline:pay-code-one'} className={styles.item_icon} />
              <h2 className={styles.item_title}>Перевод через СБП</h2>
            </div>
            <div className={styles.item}>
              <Icon icon={'ic:baseline-book-online'} className={styles.item_icon} />
              <h2 className={styles.item_title}>Онлайн по карте</h2>
            </div>
          </div>
          <h1 className={styles.tg_bot}>
            В случае возникновения вопросов, вы можете связаться с нами через почту или нашего{' '}
            <span>телеграмм-бота</span>
            <br />
            Будем рады вам помочь!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoPageMobile;
