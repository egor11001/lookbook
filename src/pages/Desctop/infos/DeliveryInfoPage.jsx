import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Icon } from '@iconify/react';

import styles from '../../../scss/components/Desctop/DeliveryInfoPage.module.scss';

const DeliveryInfoPage = () => {
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
            <h3 className={styles.title}>Доставка</h3>
          </div>
        </div>

        <div className={styles.content}></div>
      </div>
    </div>
  );
};

export default DeliveryInfoPage;
