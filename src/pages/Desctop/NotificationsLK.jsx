import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import styles from '../../scss/components/Desctop/NotificationsLK.module.scss';
import { useNavigate } from 'react-router';

const items = [
  {
    id: 2220,
    type: 'new_order',
  },
  {
    id: 2221,
    type: 'new_order',
  },
  {
    id: 2222,
    type: 'new_order',
  },
  {
    id: 2223,
    type: 'new_order',
  },
  {
    id: 2224,
    type: 'new_order',
  },
];

const NotificationsLK = () => {
  const [activeArchive, setActiveArchive] = useState(false);

  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.top_left}>
          <button onClick={() => navigate(-1)} className={styles.back}>
            <Icon icon={'bi:arrow-left'} className={styles.back_icon} />
          </button>

          <h3 className={styles.title}>Уведомления</h3>
        </div>
      </div>

      <div className={styles.content_notif}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <button className={styles.item_status}>
              <Icon icon={'bi:check'} className={styles.item_status_icon} />
            </button>
            <div className={styles.item_info}>
              <h1 className={styles.item_title}>
                Заказ <span>#{item.id}</span>
              </h1>
              <h3 className={styles.item_description}>Подтвердите начало сбора заказа</h3>
            </div>
            <button onClick={() => console.log('OPEN MODAL')} className={styles.item_open}>
              <Icon icon={'bi:arrow-right'} className={styles.item_open_icon} />
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => setActiveArchive(!activeArchive)} className={styles.title_archive}>
        Архив
        {activeArchive ? (
          <KeyboardArrowUpIcon className={styles.archive_icon} />
        ) : (
          <KeyboardArrowDownIcon className={styles.archive_icon} />
        )}
      </button>
      {activeArchive ? (
        <div className={styles.content_archive}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              <button className={styles.item_status}>
                <Icon icon={'bi:check'} className={styles.item_status_icon} />
              </button>
              <div className={styles.item_info}>
                <h1 className={styles.item_title}>
                  Заказ <span>#{item.id}</span>
                </h1>
                <h3 className={styles.item_description}>Подтвердите начало сбора заказа</h3>
              </div>
              <button onClick={() => console.log('OPEN MODAL')} className={styles.item_open}>
                <Icon icon={'bi:arrow-right'} className={styles.item_open_icon} />
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default NotificationsLK;
