import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Icon } from '@iconify/react';

import styles from '../../scss/components/Desctop/BasketPage.module.scss';
import BasketItem from '../../components/Desctop/BasketItem';
import Empty from '../../components/Desctop/Empty';
import { getBasket, removeFromBasket } from '../../services/actions';

const BasketPage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const deleteItem = (data) => {
    removeFromBasket(data).then(() => {
      getBasket().then((data) => {
        setItems(data[0].basket_item);
        setTotalPrice(data[0].total);
      });
    });
  };

  useEffect(() => {
    getBasket().then((data) => {
      setItems(data[0].basket_item);
      setTotalPrice(data[0].total);
    });
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.block}>
          <button onClick={() => navigate(-1)} className={styles.back}>
            <Icon icon={'bi:arrow-left'} className={styles.back_icon} />
          </button>

          <h3 className={styles.title}>Корзина</h3>
        </div>

        <h2 className={styles.counts}>
          <span>
            {(items &&
              items.length > 0 &&
              items.map((item) => item.quantity).reduce((prev, cur) => prev + cur)) ||
              '0'}{' '}
          </span>
          товаров
        </h2>
        <h3 className={styles.total_price}>
          Итого: <span>{totalPrice || 0} ₽</span>
        </h3>
      </div>
      <div className={styles.content}>
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <BasketItem
              key={index}
              itemId={item.product.id}
              size={item.size}
              vendorId={item.product.vendor_id}
              photo={item.product.product_image}
              type={item.product.title}
              brand={item.product?.vendor}
              price={item.product.regular_price}
              count={item.quantity}
              deleteItem={deleteItem}
            />
          ))
        ) : (
          <Empty />
        )}
      </div>
      {items && items.length > 0 ? (
        <button onClick={() => navigate('/my/ordering')} className={styles.submit}>
          Перейти к оформлению
        </button>
      ) : null}
    </div>
  );
};

export default BasketPage;
