import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import styles from '../../scss/components/Mobile/ScrollButton.module.scss';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

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
