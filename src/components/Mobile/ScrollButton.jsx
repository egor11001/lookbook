import React, { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import styles from '../../scss/components/Mobile/ScrollButton.module.scss';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  return (
    <div
      onClick={scrollToTop}
      className={styles.wrapper}
      style={{ display: visible ? 'flex' : 'none' }}>
      <KeyboardArrowUpIcon className={styles.icon} />
    </div>
  );
};

export default ScrollButton;
