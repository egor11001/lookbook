import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Icon } from '@iconify/react';

import styles from '../../../scss/components/Desctop/PaymentInfoPage.module.scss';

const PaymentInfoPage = () => {
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
              <Icon icon={'bi:arrow-left'} className={styles.back_icon} />
            </button>
            <h3 className={styles.title}>Оплата</h3>
          </div>

          <div className={styles.top_right}>
            <h3 className={styles.title_small}>Мы гарантируем безопасность платежей</h3>
          </div>
        </div>

        <div className={styles.content}>
          <h1 className={styles.text}>Вы можете оплатить свой заказ следующими способами:</h1>
          <div className={styles.block}>
            <div className={styles.left}>
              <div className={styles.item}>
                <Icon icon={'bi:credit-card'} className={styles.item_icon} />
                <h2 className={styles.item_title}>Картой (VISA, MASTERCARD, МИР)</h2>
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
            <h1 className={styles.right}>
              В случае возникновения вопросов, вы можете связаться с нами через почту.
              <br />
              Будем рады вам помочь!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoPage;
