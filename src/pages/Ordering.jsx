import React from 'react';
import { Steps, StepsProvider } from 'react-step-builder';

import styles from '../scss/components/Desctop/Ordering.module.scss';
import { Address, Contacts, Delivery, Payment, Confirm } from '../components/Desctop/Ordering/';

const Ordering = () => {
  return (
    <div className={styles.wrapper}>
      <StepsProvider>
        <Steps>
          <Contacts />
          <Address />
          <Delivery />
          <Payment />
          <Confirm />
        </Steps>
      </StepsProvider>
    </div>
  );
};

export default Ordering;
