import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Icon } from '@iconify/react';

import styles from '../../../scss/components/Desctop/ContactsPage.module.scss';

const ContactsPage = () => {
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
            <h3 className={styles.title}>Контакты</h3>
          </div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.text}>Свяжитесь с нами</h2>
          <div className={styles.row}>
            <Icon icon={'fluent:mail-16-regular'} className={styles.email_icon} />
            <h1 className={styles.email}>lookbook.rf@inbox.ru</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
