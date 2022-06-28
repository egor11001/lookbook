import React from 'react';
import { useNavigate } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import styles from '../../../scss/components/Desctop/InvestorsInfoPage.module.scss';

const InvestorsInfoPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.top_left}>
            <button onClick={() => navigate(-1)} className={styles.back}>
              <ArrowBackIcon className={styles.back_icon} />
            </button>
            <h3 className={styles.title}>Инвесторам</h3>
          </div>
        </div>

        <div className={styles.content}></div>
      </div>
    </div>
  );
};

export default InvestorsInfoPage;
