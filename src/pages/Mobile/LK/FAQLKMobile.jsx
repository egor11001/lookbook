import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import styles from '../../../scss/components/Mobile/LK/FAQLKMobile.module.scss';

const items = [
  {
    title: '- Где мой заказ?',
    description:
      'Вы можете отследить свой заказ по идентификационному номеру, указанному в письме с подтверждением заказа от выбранной вами службы доставки. Ввести его вы можете перейдя по ссылке в том же письме.',
  },
  {
    title: '- Срок доставки.',
    description: 'С данной информацией вы можете ознакомиться в разделе «Доставка».',
  },
  {
    title: '- Как я могу оплатить заказ?',
    description: 'С данной информацией вы можете ознакомиться в разделе «Оплата».',
  },
  {
    title: '- Где мой заказ?',
    description:
      'Вы можете отследить свой заказ по идентификационному номеру, указанному в письме с подтверждением заказа от выбранной вами службы доставки. Ввести его вы можете перейдя по ссылке в том же письме.',
  },
  {
    title: '- Срок доставки.',
    description: 'С данной информацией вы можете ознакомиться в разделе «Доставка».',
  },
  {
    title: '- Как я могу оплатить заказ?',
    description: 'С данной информацией вы можете ознакомиться в разделе «Оплата».',
  },
  {
    title: '- Где мой заказ?',
    description:
      'Вы можете отследить свой заказ по идентификационному номеру, указанному в письме с подтверждением заказа от выбранной вами службы доставки. Ввести его вы можете перейдя по ссылке в том же письме.',
  },
  {
    title: '- Срок доставки.',
    description: 'С данной информацией вы можете ознакомиться в разделе «Доставка».',
  },
  {
    title: '- Как я могу оплатить заказ?',
    description: 'С данной информацией вы можете ознакомиться в разделе «Оплата».',
  },
  {
    title: '- Где мой заказ?',
    description:
      'Вы можете отследить свой заказ по идентификационному номеру, указанному в письме с подтверждением заказа от выбранной вами службы доставки. Ввести его вы можете перейдя по ссылке в том же письме.',
  },
  {
    title: '- Срок доставки.',
    description: 'С данной информацией вы можете ознакомиться в разделе «Доставка».',
  },
  {
    title: '- Как я могу оплатить заказ?',
    description: 'С данной информацией вы можете ознакомиться в разделе «Оплата».',
  },
  {
    title: '- Где мой заказ?',
    description:
      'Вы можете отследить свой заказ по идентификационному номеру, указанному в письме с подтверждением заказа от выбранной вами службы доставки. Ввести его вы можете перейдя по ссылке в том же письме.',
  },
  {
    title: '- Срок доставки.',
    description: 'С данной информацией вы можете ознакомиться в разделе «Доставка».',
  },
  {
    title: '- Как я могу оплатить заказ?',
    description: 'С данной информацией вы можете ознакомиться в разделе «Оплата».',
  },
];

const FAQLKMobile = () => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const handleClick = (i) => () => {
    if (i === active) {
      setActive(null);
    } else {
      setActive(i);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.top_left}>
            <button onClick={() => navigate(-1)} className={styles.back}>
              <ChevronLeftIcon className={styles.back_icon} />
            </button>
            <h3 className={styles.title}>Помощь и FAQ</h3>
          </div>
        </div>

        <div className={styles.content}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              <div
                onClick={handleClick(index)}
                className={active === index ? styles.item_s_active : styles.item_s}>
                <h2 className={styles.item_title}>{item.title}</h2>

                {active === index ? (
                  <KeyboardArrowUpIcon className={styles.item_icon} />
                ) : (
                  <KeyboardArrowDownIcon className={styles.item_icon} />
                )}
              </div>
              {active === index ? (
                <div className={styles.item_l}>
                  <h4 className={styles.item_description}>{item.description}</h4>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQLKMobile;
