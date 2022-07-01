import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';

import styles from '../../scss/components/Desctop/StatisticLK.module.scss';

const itemsSales = [
  {
    id: 4440,
    status: 'completed',
    time: '24.07.22',
    counts: 5,
    total_price: 7850,
  },
  {
    id: 4441,
    status: 'completed',
    time: '22.07.22',
    counts: 1,
    total_price: 1240,
  },
  {
    id: 4442,
    status: 'canceled',
    time: '15.07.22',
    counts: 3,
    total_price: 5780,
  },
  {
    id: 4443,
    status: 'process',
    time: '12.07.22',
    counts: 7,
    total_price: 12500,
  },
  {
    id: 4440,
    status: 'process',
    time: '12.07.22',
    counts: 5,
    total_price: 8470,
  },
  {
    id: 4444,
    status: 'canceled',
    time: '10.07.22',
    counts: 4,
    total_price: 5990,
  },
  {
    id: 4445,
    status: 'completed',
    time: '8.07.22',
    counts: 1,
    total_price: 2200,
  },
  {
    id: 4446,
    status: 'completed',
    time: '3.07.22',
    counts: 1,
    total_price: 850,
  },
  {
    id: 4440,
    status: 'completed',
    time: '24.07.22',
    counts: 5,
    total_price: 7850,
  },
  {
    id: 4441,
    status: 'completed',
    time: '22.07.22',
    counts: 1,
    total_price: 1240,
  },
  {
    id: 4442,
    status: 'canceled',
    time: '15.07.22',
    counts: 3,
    total_price: 5780,
  },
  {
    id: 4443,
    status: 'process',
    time: '12.07.22',
    counts: 7,
    total_price: 12500,
  },
  {
    id: 4440,
    status: 'process',
    time: '12.07.22',
    counts: 5,
    total_price: 8470,
  },
  {
    id: 4444,
    status: 'canceled',
    time: '10.07.22',
    counts: 4,
    total_price: 5990,
  },
  {
    id: 4445,
    status: 'completed',
    time: '8.07.22',
    counts: 1,
    total_price: 2200,
  },
  {
    id: 4446,
    status: 'completed',
    time: '3.07.22',
    counts: 1,
    total_price: 850,
  },
];

const itemsReturns = [
  {
    id: 3212,
    status: 'canceled',
    time: '24.07.22',
    counts: 5,
    total_price: 7850,
  },
  {
    id: 4441,
    status: 'canceled',
    time: '22.07.22',
    counts: 1,
    total_price: 1240,
  },
];

const statusBlock = (status, time) => {
  if (status === 'completed') {
    return (
      <>
        <h1 className={styles.time}>Доставлено {time}</h1>

        <Icon icon={'bi:check'} className={styles.status_icon_complete} />
      </>
    );
  }

  if (status === 'canceled') {
    return (
      <>
        <h1 className={styles.time}>Отменено {time}</h1>

        <DoDisturbOnIcon className={styles.status_icon_canceled} />
      </>
    );
  }

  if (status === 'process') {
    return (
      <>
        <h1 className={styles.time}>Создано {time}</h1>

        <Icon icon={'bxs:time-five'} className={styles.status_icon_process} />
      </>
    );
  }
};

const StatisticLK = () => {
  const [activeSection, setActiveSection] = useState('sales');
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.top_left}>
          <button onClick={() => navigate(-1)} className={styles.back}>
            <Icon icon={'bi:arrow-left'} className={styles.back_icon} />
          </button>

          <h3 className={styles.title}>Статистика</h3>
        </div>
        <div className={styles.top_right}>
          <h1 className={styles.total_price}>Итого: 8650 ₽</h1>
        </div>
      </div>

      <div className={styles.content}>
        <button
          onClick={() => setActiveSection('sales')}
          disabled={activeSection === 'sales'}
          className={styles.sales_btn}>
          Продажи
        </button>
        <button
          onClick={() => setActiveSection('returns')}
          disabled={activeSection === 'returns'}
          className={styles.returns_btn}>
          Возвраты
        </button>

        {activeSection === 'sales'
          ? itemsSales.map((item, index) => (
              <div key={index} className={styles.item}>
                <h1 className={styles.title}>Заказ #{item.id}</h1>
                <div className={styles.row}>{statusBlock(item.status, item.time)}</div>
                <div className={styles.bottom}>
                  <h4 className={styles.counts}>{item.counts} товаров</h4>
                  <h1 className={styles.price}>{item.total_price} ₽</h1>
                </div>
              </div>
            ))
          : itemsReturns.map((item, index) => (
              <div key={index} className={styles.item}>
                <h1 className={styles.title}>Заказ #{item.id}</h1>
                <div className={styles.row}>{statusBlock(item.status, item.time)}</div>
                <div className={styles.bottom}>
                  <h4 className={styles.counts}>{item.counts} товаров</h4>
                  <h1 className={styles.price}>{item.total_price} ₽</h1>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default StatisticLK;
