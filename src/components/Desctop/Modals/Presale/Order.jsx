import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import CloseIcon from '@mui/icons-material/Close';

import styles from '../../../../scss/components/Desctop/Modals/OrderLK.module.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1260,
  height: 660,
  display: 'flex',
  padding: '48px',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '20px',
  boxShadow: 24,
};

const order = {
  id: 4324,
  counts: 5,
  total_price: 19000,
  create: '24.07.22',
  payment: 'По карте при получении',
  address: 'Россия, Красноярск, ул.Петра Ломако 8, 45кв.',
  name: 'Aртур',
  lastName: 'Пирожков',
  phone: '+7-923-393-00-75',
  status: 'ready',
  items: [
    {
      photo:
        'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg',
      brand: 'lastseen',
      type: 'Худи',
      count: '2',
      price: '9500',
      article: '0025',
      size: 'L',
    },
    {
      photo:
        'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/573148/fleym.jpg',
      brand: 'lastseen',
      type: 'Кеды',
      count: '1',
      price: '7500',
      article: '0182',
      size: '44',
    },
    {
      photo:
        'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/603017/NSZ08812.jpg',
      brand: 'lastseen',
      type: 'Худи',
      count: '2',
      price: '9500',
      article: '0025',
      size: 'L',
    },
    {
      photo:
        'https://thumbor9.kiiiosk.store/unsafe/500x/https://aws.kiiiosk.store/uploads/shop/8644/uploads/product_image/image/573148/fleym.jpg',
      brand: 'lastseen',
      type: 'Кеды',
      count: '1',
      price: '7500',
      article: '0182',
      size: '44',
    },
  ],
};

const OrderItem = ({ info }) => {
  return (
    <div className={styles.item}>
      <img src={info.photo} alt="IMG" className={styles.item_photo} />
      <div className={styles.item_content}>
        <div className={styles.item_top}>
          <h1 className={styles.item_brand}>{info.brand}</h1>
          <h3 className={styles.item_article}>арт.{info.article}</h3>
        </div>
        <div className={styles.item_center}>
          <h3 className={styles.item_type}>{info.type}</h3>
          <h1 className={styles.item_price}>{info.price} ₽</h1>
        </div>
        <div className={styles.item_bottom}>
          <h2 className={styles.item_count}>{info.count} шт.</h2>
          <h4 className={styles.item_size}>{info.size}</h4>
        </div>
      </div>
    </div>
  );
};

const OrderLK = ({ visible, setVisible, id }) => {
  const [activeStatus, setActiveStatus] = useState(order.status);
  return (
    <Modal open={visible}>
      <Box sx={style}>
        <button className="modal_close" onClick={() => setVisible(!visible)}>
          <CloseIcon className="close_icon" />
        </button>
        <div className={styles.left}>
          <h1 className={styles.title}>Заказ №{order.id}</h1>
          <h5 className={styles.counts}>{order.counts} товаров</h5>
          <h1 className={styles.total_price}>{order.total_price} ₽</h1>
          <h4 className={styles.time}>Создано {order.create}</h4>

          <div className={styles.left_row_line} />

          <h4 className={styles.payment_title}>Метод оплаты</h4>
          <h5 className={styles.payment_type}>{order.payment}</h5>
          <h4 className={styles.address_title}>Метод оплаты</h4>
          <h5 className={styles.address_value}>{order.address}</h5>
        </div>

        <div className={styles.column_line} />

        <div className={styles.right}>
          <h1 className={styles.right_title}>Выберите статус</h1>
          <div className={styles.statuses}>
            <div className={styles.statuses_active}>
              <button className={styles.status_item}>
                <Icon
                  icon={'bi:check'}
                  className={
                    activeStatus === 'ready' ? styles.status_icon_active : styles.status_icon
                  }
                />
                <h3 className={styles.status_title}>Собрано</h3>
              </button>
              <button className={styles.status_item}>
                <Icon
                  icon={'bi:check'}
                  className={
                    activeStatus === 'forwarded' ? styles.status_icon_active : styles.status_icon
                  }
                />
                <h3 className={styles.status_title}>Передан в доставку</h3>
              </button>
              <button className={styles.status_item}>
                <Icon
                  icon={'ic:baseline-cancel'}
                  className={
                    activeStatus === 'canceled' ? styles.status_icon_canceled : styles.status_icon
                  }
                />
                <h3 className={styles.status_title}>Отменено</h3>
              </button>
            </div>

            <div className={styles.statuses_disabled}>
              <button className={styles.status_item}>
                <Icon
                  icon={'bi:check'}
                  className={
                    activeStatus === 'process' ? styles.status_icon_active : styles.status_icon
                  }
                />
                <h3 className={styles.status_title}>Отправленно</h3>
              </button>
              <button className={styles.status_item}>
                <Icon
                  icon={'bi:check'}
                  className={
                    activeStatus === 'completed' ? styles.status_icon_active : styles.status_icon
                  }
                />
                <h3 className={styles.status_title}>Доставленно</h3>
              </button>
            </div>
          </div>

          <div className={styles.right_row_line} />

          <div className={styles.items}>
            {order.items.map((item, index) => (
              <OrderItem key={index} info={item} />
            ))}
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default OrderLK;
