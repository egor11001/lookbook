import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Icon } from '@iconify/react';

import styles from '../../../scss/components/Desctop/CollaborationInfoPage.module.scss';
import partnersBG from '../../../assets/partnersBG.png';

const CollaborationInfoPage = () => {
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
          </div>
        </div>

        <div className={styles.content}>
          <img src={partnersBG} alt="IMG" className={styles.photo} />
          <div className={styles.info}>
            <h3 className={styles.text}>ЗАЯВИ О СЕБЕ ВМЕСТЕ С</h3>
            <h1 className={styles.lb}>LOOKBOOK</h1>
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
    </div>
  );
};

export default CollaborationInfoPage;
