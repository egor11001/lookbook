import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import styles from '../../../scss/components/Mobile/CollaborationInfoPageMobile.module.scss';
import partnersBG from '../../../assets/partnersBG.png';

const CollaborationInfoPageMobile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <button onClick={() => navigate(-1)} className={styles.back}>
            <ChevronLeftIcon className={styles.back_icon} />
          </button>
          <h3 className={styles.title}>Партнерам</h3>
        </div>

        <div className={styles.content}>
          <h1 className={styles.text}>ЗАЯВИ О СЕБЕ ВМЕСТЕ С LOOKBOOK</h1>
          <img src={partnersBG} alt="IMG" className={styles.photo} />
          <button
            onClick={() =>
              (window.location.href =
                'https://docs.google.com/forms/d/e/1FAIpQLSeaWTcvqjo9RTFPtNeQxrfKXanIIuVmVYtwcL7AzYTAYjc3Dw/viewform?usp=sf_link')
            }
            className={styles.submit}>
            Присоединиться
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollaborationInfoPageMobile;
