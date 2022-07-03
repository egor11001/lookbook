import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Icon } from '@iconify/react';
import { IMaskInput } from 'react-imask';

import styles from '../../scss/components/Desctop/LK/ProfileLK.module.scss';
import { emailRegexp, phoneRegexp } from '../../utils/regExps';

const PhoneMask = '+{0}-000-000-00-00';

const info = {
  name: 'Стикс',
  lastName: 'Власов',
  email: 'мягкиелапки@yandex.ru',
  phone: '+7-999-888-00-22',
};

const ProfileMobile = () => {
  const [activeEdit, setActiveEdit] = useState(false);
  const [name, setName] = useState({
    value: info.name || '',
    error: false,
  });
  const [lastName, setLastName] = useState({
    value: info.lastName || '',
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

  const handleChangeName = (value) => {
    if (value.length < 1) {
      setName({ value: value, error: 'Обязательное поле' });
    } else {
      setName({ value: value, error: false });
    }
  };

  const handleChangeLastName = (value) => {
    if (value.length < 1) {
      setLastName({ value: value, error: 'Обязательное поле' });
    } else {
      setLastName({ value: value, error: false });
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
    if (!name.error && !email.error && !phone.error) {
      console.log(name, email, phone);
      setActiveEdit(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.top_left}>
          <button onClick={() => navigate(-1)} className={styles.back}>
            <Icon icon={'bi:arrow-left'} className={styles.back_icon} />
          </button>

          <h3 className={styles.title}>Профиль</h3>

          {!activeEdit ? (
            <button onClick={() => setActiveEdit(true)} className={styles.edit_btn}>
              <Icon icon={'eva:edit-2-outline'} className={styles.edit_icon} />
            </button>
          ) : null}
        </div>
      </div>

      <div className={styles.content}>
        <input
          disabled={!activeEdit}
          value={name.value}
          onChange={(e) => handleChangeName(e.target.value)}
          placeholder="Имя"
          type="text"
          className={name.error ? styles.input_err : styles.input}
        />
        <h5 className={styles.input_error}>{name.error ? name.error : null}</h5>

        <input
          disabled={!activeEdit}
          value={lastName.value}
          onChange={(e) => handleChangeLastName(e.target.value)}
          placeholder="Фамилия"
          type="text"
          className={lastName.error ? styles.input_err : styles.input}
        />
        <h5 className={styles.input_error}>{lastName.error ? lastName.error : null}</h5>

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

export default ProfileMobile;
