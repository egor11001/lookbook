import React, { useEffect, useRef, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSteps } from 'react-step-builder';
import { Icon } from '@iconify/react';

import styles from '../../../scss/components/Desctop/Ordering.module.scss';

const items = [
  {
    id: 1,
    icon: 'bi:credit-card',
    type: 'По карте при получении',
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
    type: 'Онлайн по карте',
  },
];

const Payment = () => {
  const { next, prev } = useSteps();
  const [active, setActive] = useState(null);
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
        <div className={styles.top_left}>
          <button onClick={prev} className={styles.back}>
            <ArrowBackIcon className={styles.back_icon} />
          </button>
          <h3 className={styles.title}>Метод оплаты</h3>
        </div>
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

          <div className={styles.payment_right}>
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
                    className={
                      correctPromo === 1 ? styles.promo_info_true : styles.promo_info_false
                    }>
                    {correctPromo === 1 ? 'Код применен' : correctPromo === 0 ? 'Неверный код' : ''}
                  </h5>
                  <button onClick={handleClickPromo} className={styles.promo_btn}>
                    Применить
                  </button>
                </>
              ) : null}
            </div>
            <h1 className={styles.payment_price}>
              Итого: <span>8650 ₽</span>{' '}
            </h1>
          </div>
        </div>
      </div>

      <button onClick={handleNext} className={styles.next_btn}>
        Адрес доставки
      </button>
    </div>
  );
};

export default Payment;
