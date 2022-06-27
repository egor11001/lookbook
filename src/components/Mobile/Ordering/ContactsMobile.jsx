import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { IMaskInput } from 'react-imask';
import { useSteps } from 'react-step-builder';
import { useForm } from 'react-hook-form';

import styles from '../../../scss/components/Mobile/OrderingMobile.module.scss';
import { emailRegexp } from '../../../utils/regExps';

const PhoneMask = '+{0}-000-000-00-00';

const ContactsMobile = ({ info, setInfo }) => {
  const navigate = useNavigate();
  const { next } = useSteps();
  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
  });
  const [phone, setPhone] = useState(info.contacts.phone || '');
  const [phoneErr, setPhoneErr] = useState(false);
  const handleChangePhone = (value) => {
    if (value.split('').length < 11) {
      setPhoneErr(true);
    } else {
      setPhoneErr(false);
    }
    setPhone(value);
  };

  const handleNext = (data) => {
    if (phone.split('').length < 11) {
      setPhoneErr(true);
    } else {
      setInfo({
        ...info,
        contacts: {
          name: data.name,
          lastName: data.lastName,
          email: data.email,
          phone: phone,
        },
      });
      next();
    }
  };

  return (
    <div className={styles.inner}>
      <div className={styles.top}>
        <button onClick={() => navigate(-1)} className={styles.back}>
          <ChevronLeftIcon className={styles.back_icon} />
        </button>

        <h3 className={styles.title}>Контактные данные</h3>
      </div>

      <form onSubmit={handleSubmit(handleNext)}>
        <div className={styles.content}>
          <div className={styles.contacts_block}>
            <h1 className={styles.contacts_title}>
              Вся информация о заказе будет
              <br />
              отправлена Вам на эл.почту
            </h1>

            <input
              defaultValue={info.contacts.name}
              placeholder="Имя"
              type="text"
              className={errors?.name?.message ? styles.contacts_input_err : styles.contacts_input}
              {...register('name', {
                required: 'Обязательное поле',
              })}
            />
            {errors?.name?.message ? (
              <h5 className={styles.input_error}>{errors.name.message}</h5>
            ) : null}

            <input
              defaultValue={info.contacts.lastName}
              placeholder="Фамилия"
              type="text"
              className={
                errors?.lastName?.message ? styles.contacts_input_err : styles.contacts_input
              }
              {...register('lastName', {
                required: 'Обязательное поле',
              })}
            />
            {errors?.lastName?.message ? (
              <h5 className={styles.input_error}>{errors.lastName.message}</h5>
            ) : null}

            <input
              defaultValue={info.contacts.email}
              placeholder="Адрес эл.почты"
              type="email"
              className={errors?.email?.message ? styles.contacts_input_err : styles.contacts_input}
              {...register('email', {
                required: 'Обязательное поле',
                pattern: {
                  value: emailRegexp,
                  message: 'Некорректный email',
                },
              })}
            />
            {errors?.email?.message ? (
              <h5 className={styles.input_error}>{errors.email.message}</h5>
            ) : null}

            <IMaskInput
              mask={PhoneMask}
              value={phone}
              unmask={true}
              onAccept={(value, mask) => handleChangePhone(value)}
              placeholder="Номер телефона"
              type="text"
              className={
                phoneErr && isSubmitted ? styles.contacts_input_err : styles.contacts_input
              }
            />
            {phoneErr && isSubmitted ? (
              <h5 className={styles.input_error}>Неверный номер</h5>
            ) : null}
          </div>
        </div>

        <button
          type="submit"
          onClick={() => (!phoneErr && phone.length < 11 ? setPhoneErr(true) : null)}
          className={styles.next_btn}>
          Адрес доставки
        </button>
      </form>
    </div>
  );
};

export default ContactsMobile;
