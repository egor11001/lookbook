import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Icon } from '@iconify/react';
import { IMaskInput } from 'react-imask';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import styles from '../../../scss/components/Mobile/LK/ProfileLKMobile.module.scss';
import { emailRegexp, phoneRegexp } from '../../../utils/regExps';

const PhoneMask = '+{0}-000-000-00-00';

const info = {
  brand: 'Беларусский трикотаж',
  email: 'bebra2022@yandex.ru',
  phone: '+7-999-888-00-22',
};

const ProfileLKMobile = () => {
  const [activeEdit, setActiveEdit] = useState(false);
  const [brand, setBrand] = useState({
    value: info.brand || '',
    error: false,
  });
  const [email, setEmail] = useState({
    value: info.email || '',
    error: false,
  });
  const [phone, setPhone] = useState({
    value: info.phone || '',
    error: false,
  });
  const [activeEmail, setActiveEmail] = useState(false);
  const [activePhone, setActivePhone] = useState(false);
  const navigate = useNavigate();

  const handleChangeBrand = (value) => {
    if (value.length < 1) {
      setBrand({ value: value, error: 'Обязательное поле' });
    } else {
      setBrand({ value: value, error: false });
    }
  };

  const handleChangeEmail = (value) => {
    if (value.length < 1) {
      setEmail({ value: value, error: 'Обязательное поле' });
    } else if (!emailRegexp.test(value)) {
      setEmail({ value: value, error: 'Некорректный email' });
    } else {
      setEmail({ value: value, error: false });
    }
  };

  const handleChangePhone = (value) => {
    if (value.split('').length < 11 || !phoneRegexp.test(value)) {
      setPhone({ value: value, error: 'Неверный номер' });
    } else {
      setPhone({ value: value, error: false });
    }
  };

  const onSubmit = () => {
    if (!brand.error && !email.error && !phone.error) {
      console.log(brand, email, phone);
      setActiveEdit(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <button onClick={() => navigate(-1)} className={styles.back}>
          <ChevronLeftIcon className={styles.back_icon} />
        </button>

        <h3 className={styles.title}>Профиль</h3>

        {!activeEdit ? (
          <button onClick={() => setActiveEdit(true)} className={styles.edit_btn}>
            <Icon icon={'eva:edit-2-outline'} className={styles.edit_icon} />
          </button>
        ) : null}
      </div>

      <div className={styles.content}>
        <input
          disabled={!activeEdit}
          value={brand.value}
          onChange={(e) => handleChangeBrand(e.target.value)}
          placeholder="Название бренда"
          type="text"
          className={brand.error ? styles.input_err : styles.input}
        />
        <h5 className={styles.input_error}>{brand.error ? brand.error : null}</h5>

        <input
          disabled={!activeEdit}
          value={email.value}
          onChange={(e) => handleChangeEmail(e.target.value)}
          placeholder="Адрес эл.почты"
          type="email"
          className={email.error ? styles.input_err : styles.input}
        />
        <h5 className={styles.input_error}>{email.error ? email.error : null}</h5>

        <IMaskInput
          disabled={!activeEdit}
          mask={PhoneMask}
          value={phone.value}
          unmask={true}
          onAccept={(value, mask) => handleChangePhone(value)}
          placeholder="Номер телефона"
          type="text"
          className={phone.error ? styles.input_err : styles.input}
        />
        <h5 className={styles.input_error}>{phone.error ? phone.error : null}</h5>

        <button
          disabled={!activeEdit}
          onClick={() => setActiveEmail(!activeEmail)}
          className={styles.check_btn}>
          <Icon icon={'bi:check'} className={activeEmail ? styles.radio_active : styles.radio} />
          <h2 className={styles.check_title}>
            Я хочу получать уведомления о новых заказах на почту
          </h2>
        </button>
        <button
          disabled={!activeEdit}
          onClick={() => setActivePhone(!activePhone)}
          className={styles.check_btn}>
          <Icon icon={'bi:check'} className={activePhone ? styles.radio_active : styles.radio} />
          <h2 className={styles.check_title}>Я хочу получать уведомления о новых заказах по sms</h2>
        </button>

        {activeEdit ? (
          <button onClick={onSubmit} className={styles.submit}>
            Сохранить
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileLKMobile;
