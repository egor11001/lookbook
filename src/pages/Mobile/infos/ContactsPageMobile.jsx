import React from 'react';
import { useNavigate } from 'react-router';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import styles from '../../../scss/components/Mobile/ContactsPageMobile.module.scss';

const ContactsPageMobile = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.top_left}>
            <button onClick={() => navigate(-1)} className={styles.back}>
              <ChevronLeftIcon className={styles.back_icon} />
            </button>
            <h3 className={styles.title}>Контакты</h3>
          </div>
        </div>

        <div className={styles.content}></div>
      </div>
    </div>
  );
};

export default ContactsPageMobile;