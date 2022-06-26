import React from 'react';
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
  return (
    <div className={styles.wrapper}>
      <StepsProvider>
        <Steps>
          <ContactsMobile />
          <AddressMobile />
          <DeliveryMobile />
          <PaymentMobile />
          <ConfirmMobile />
        </Steps>
      </StepsProvider>
    </div>
  );
};

export default OrderingMobile;
