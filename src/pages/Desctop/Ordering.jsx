import React, { useState } from 'react';
import { Steps, StepsProvider } from 'react-step-builder';

import styles from '../../scss/components/Desctop/Ordering.module.scss';
import { Address, Contacts, Delivery, Payment, Confirm } from '../../components/Desctop/Ordering/';

const Ordering = () => {
  const [info, setInfo] = useState({
    contacts: {
      name: null,
      lastName: null,
      email: null,
      phone: null,
    },
    address: null,
    delivery: {
      id: null,
      type: null,
      price: null,
      time: null,
    },
    payment: { id: null, type: null },
  });

  return (
    <div className={styles.wrapper}>
      <StepsProvider>
        <Steps>
          <Contacts info={info} setInfo={setInfo} />
          <Address info={info} setInfo={setInfo} />
          <Delivery info={info} setInfo={setInfo} />
          <Payment info={info} setInfo={setInfo} />
          <Confirm info={info} setInfo={setInfo} />
        </Steps>
      </StepsProvider>
    </div>
  );
};

export default Ordering;
