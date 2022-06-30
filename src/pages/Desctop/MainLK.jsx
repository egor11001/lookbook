import React from 'react';
import { Icon } from '@iconify/react';

import styles from '../../scss/components/Desctop/MainLK.module.scss';
import { useNavigate } from 'react-router';

const MainLK = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <button onClick={() => navigate(-1)} className={styles.back}>
          <Icon icon={'bi:arrow-left'} className={styles.back_icon} />
        </button>

        <h3 className={styles.title}>Артур Пирожков</h3>
      </div>

      <div className={styles.content}></div>
    </div>
  );
};

export default MainLK;
