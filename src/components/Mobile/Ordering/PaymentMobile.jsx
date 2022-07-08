import React, { useState, useEffect, useRef } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useSteps } from 'react-step-builder';
import { Icon } from '@iconify/react';

import styles from '../../../scss/components/Mobile/OrderingMobile.module.scss';

const items = [
  {
    id: 1,
    icon: 'bi:credit-card',
    type: 'Картой при получении',
  },
  {
    id: 2,
    icon: 'fa6-solid:money-bill-wave',
    type: 'Наличными',
  },
  {
    id: 3,
    icon: 'icon-park-outline:pay-code-one',
    type: 'Онлайн через СБП',
  },
  {
    id: 4,
    icon: 'ic:baseline-book-online',
    type: 'Картой онлайн',
  },
];

const PaymentMobile = ({ info, setInfo }) => {
  const { next, prev } = useSteps();
  const [active, setActive] = useState(info.payment.id);
  const [visiblePromo, setVisiblePromo] = useState(false);
  const [valuePromo, setValuePromo] = useState('');
  const [correctPromo, setCorrectPromo] = useState(null);
  const inputRef = useRef();

  const handleChange = (value) => {
    if (value.length === 0) {
      setCorrectPromo(null);
    }
    setValuePromo(value);
  };

  const handleClickPromo = () => {
    if (valuePromo === 'bebra2022') {
      setCorrectPromo(1);
    } else {
      setCorrectPromo(0);
    }
  };

  const handleNext = () => {
    if (active) {
      const item = items.filter((item) => item.id === active)[0];
      setInfo({ ...info, payment: { id: item.id, type: item.type } });
      next();
    }
  };

  useEffect(() => {
    if (visiblePromo) {
      return;
    }

    const onFocus = () => {
      setVisiblePromo(true);
    };
    inputRef.current.addEventListener('focus', onFocus);

    return () => {
      inputRef.current?.removeEventListener('focus', onFocus);
    };
  }, [visiblePromo]);
  return (
    <div className={styles.inner}>
      <div className={styles.top}>
        <button onClick={prev} className={styles.back}>
          <ChevronLeftIcon className={styles.back_icon} />
        </button>

        <h3 className={styles.title}>Метод оплаты</h3>
      </div>

      <div className={styles.content}>
        <div className={styles.payment_block}>
          <div className={styles.payment_items}>
            {items.map((item, index) => (
              <div
                onClick={() => setActive(item.id)}
                key={index}
                className={active === item.id ? styles.payment_item_acitve : styles.payment_item}>
                <Icon icon={item.icon} className={styles.payment_icon} />
                <h2 className={styles.payment_type}>{item.type}</h2>
                <div className={styles.payment_status}>
                  <Icon icon={'bi:check'} className={styles.payment_status_icon} />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.promo}>
            <h1>Промокод / Сертификат</h1>
            <input
              ref={inputRef}
              value={valuePromo}
              onChange={(e) => handleChange(e.target.value)}
              type="text"
              className={
                correctPromo === 1
                  ? styles.promo_input_true
                  : correctPromo === 0
                  ? styles.promo_input_false
                  : styles.promo_input
              }
            />
            {visiblePromo ? (
              <>
                <h5
                  className={correctPromo === 1 ? styles.promo_info_true : styles.promo_info_false}>
                  {correctPromo === 1 ? 'Код применен' : correctPromo === 0 ? 'Неверный код' : ''}
                </h5>
                <button onClick={handleClickPromo} className={styles.promo_btn}>
                  Применить
                </button>
              </>
            ) : null}
          </div>

          <div className={styles.delivery_address}>
            <div className={styles.delivery_col}>
              <h1 className={styles.delivery_title}>Контактные данные:</h1>
              <h3 className={styles.delivery_text}>
                Имя: <span>{info.contacts.name}</span>
                <br />
                Фамилия: <span>{info.contacts.lastName}</span>
                <br />
                Email: <span>{info.contacts.email}</span>
                <br />
                Телефон: <span>{info.contacts.phone}</span>
                <br />
              </h3>
              <h1 className={styles.delivery_title}>Адрес доставки:</h1>
              <h3 className={styles.delivery_text}>{info.address}</h3>
              <h1 className={styles.delivery_title}>Способ доставки:</h1>
              <h3 className={styles.delivery_text}>
                <span>{info.delivery.type}</span>
                <b>{info.delivery.time}</b>
              </h3>
              <h1 className={styles.delivery_title}>Метод оплаты:</h1>
              <h3 className={styles.delivery_text}>
                {active ? <span>{items.filter((item) => item.id === active)[0].type}</span> : null}
              </h3>
            </div>
          </div>

          <h2 className={styles.counts}>
            <span>{items.length}</span> товаров
          </h2>
          <h1 className={styles.total_price}>
            <span>Итого:</span>8650 ₽
          </h1>
        </div>
      </div>

      <button onClick={handleNext} className={styles.next_btn}>
        Оформить заказ
      </button>
    </div>
  );
};

export default PaymentMobile;
