import React, { useState } from 'react';
import { Steps, StepsProvider } from 'react-step-builder';

import styles from '../../scss/components/Mobile/OrderingMobile.module.scss';
import {
  AddressMobile,
  ContactsMobile,
  DeliveryMobile,
  PaymentMobile,
  ConfirmMobile,
} from '../../components/Mobile/Ordering/';

const OrderingMobile = () => {
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
          <ContactsMobile info={info} setInfo={setInfo} />
          <AddressMobile info={info} setInfo={setInfo} />
          <DeliveryMobile info={info} setInfo={setInfo} />
          <PaymentMobile info={info} setInfo={setInfo} />
          <ConfirmMobile info={info} setInfo={setInfo} />
        </Steps>
      </StepsProvider>
    </div>
  );
};

export default OrderingMobile;
