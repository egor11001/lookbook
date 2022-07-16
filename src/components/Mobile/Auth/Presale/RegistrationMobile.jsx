import React, { useContext, useState } from 'react';
import { useLocation, Navigate } from 'react-router';
import { IMaskInput } from 'react-imask';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { observer } from 'mobx-react-lite';

import styles from '../../../../scss/components/Mobile/AuthPageMobile.module.scss';
import { emailRegexp, phoneRegexp } from '../../../../utils/regExps';

import { Context } from '../../../..';
import { registration } from '../../../../services/actions';

const PhoneMask = '+{0}-000-000-00-00';

const RegistrationMobile = observer(() => {
  const [attempt, setAttempt] = useState(false);
  const [name, setName] = useState({
    value: '',
    error: false,
  });
  const [lastName, setLastName] = useState({
    value: '',
    error: false,
  });
  const [email, setEmail] = useState({
    value: '',
    error: false,
  });
  const [phone, setPhone] = useState({
    value: '',
    error: false,
  });

  const { user } = useContext(Context);

  const handleChangeName = (value) => {
    if (attempt) {
      if (value.length < 1) {
        setName({ value: value, error: 'Обязательное поле' });
      } else {
        setName({ value: value, error: false });
      }
    } else {
      setName({ value: value, error: false });
    }
  };

  const handleChangeLastName = (value) => {
    if (attempt) {
      if (value.length < 1) {
        setLastName({ value: value, error: 'Обязательное поле' });
      } else {
        setLastName({ value: value, error: false });
      }
    } else {
      setLastName({ value: value, error: false });
    }
  };

  const handleChangeEmail = (value) => {
    if (attempt) {
      if (value.length < 1) {
        setEmail({ value: value, error: 'Обязательное поле' });
      } else if (!emailRegexp.test(value)) {
        setEmail({ value: value, error: 'Некорректный email' });
      } else {
        setEmail({ value: value, error: false });
      }
    } else {
      setEmail({ value: value, error: false });
    }
  };

  const handleChangePhone = (value) => {
    if (attempt) {
      if (value.split('').length < 11 || !phoneRegexp.test(value)) {
        setPhone({ value: value, error: 'Неверный номер' });
      } else {
        setPhone({ value: value, error: false });
      }
    } else {
      setPhone({ value: value, error: false });
    }
  };

  const checkErrors = () => {
    if (name.value.length < 1) {
      setName({ value: name.value, error: 'Обязательное поле' });
    }

    if (lastName.value.length < 1) {
      setLastName({ value: lastName.value, error: 'Обязательное поле' });
    }

    if (email.value.length < 1) {
      setEmail({ value: email.value, error: 'Обязательное поле' });
    } else if (!emailRegexp.test(email.value)) {
      setEmail({ value: email.value, error: 'Некорректный email' });
    }

    if (phone.value.split('').length < 11 || !phoneRegexp.test(phone.value)) {
      setPhone({ value: phone.value, error: 'Неверный номер' });
    }
  };

  const [stepCode, setStepCode] = useState(false);
  const [code, setCode] = useState('');
  const location = useLocation();

  const handleChangeCode = (val) => {
    setCode(val);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!attempt) {
      setAttempt(true);
      checkErrors();
      if (phone.error || email.error || name.error || lastName.error) {
        return;
      }
    }
    if (!name.error && !lastName.error && !email.error && !phone.error) {
      registration({
        first_name: name.value,
        last_name: lastName.value,
        email: email.value,
        phone_number: '+' + phone.value,
      }).then((data) => {
        if (data === 200) {
          setStepCode(true);
        } else {
          console.log('ERR');
        }
      });
    }
  };

  const onReg = (e) => {
    e.preventDefault();
    user.loginCode({ phone_number: '+' + phone.value, code: code }).then((data) => {
      if (data === 200) {
        console.log(location.state?.from?.pathname);
        return <Navigate to={location.state?.from?.pathname} />;
      } else {
        console.log('ERR');
      }
    });
  };

  return (
    <>
      {!stepCode ? (
        <>
          <input
            value={name.value}
            onChange={(e) => handleChangeName(e.target.value)}
            placeholder="Имя"
            type="text"
            className={name.error ? styles.input_err : styles.input}
          />
          <h5 className={styles.input_error}>{name.error ? name.error : null}</h5>

          <input
            value={lastName.value}
            onChange={(e) => handleChangeLastName(e.target.value)}
            placeholder="Фамилия"
            type="text"
            className={lastName.error ? styles.input_err : styles.input}
          />
          <h5 className={styles.input_error}>{lastName.error ? lastName.error : null}</h5>

          <input
            value={email.value}
            onChange={(e) => handleChangeEmail(e.target.value)}
            placeholder="Адрес эл.почты"
            type="email"
            className={email.error ? styles.input_err : styles.input}
          />
          <h5 className={styles.input_error}>{email.error ? email.error : null}</h5>

          <IMaskInput
            mask={PhoneMask}
            value={phone.value}
            unmask={true}
            onAccept={(value, mask) => handleChangePhone(value)}
            placeholder="Номер телефона"
            type="text"
            className={phone.error ? styles.input_err : styles.input}
          />
          <h5 className={styles.input_error}>{phone.error ? phone.error : null}</h5>
          <button type="submit" onClick={onSubmit} className={styles.submit}>
            Зарегистрироваться
          </button>
        </>
      ) : (
        <>
          <button onClick={() => setStepCode(false)} className={styles.back_btn}>
            <ChevronLeftIcon className={styles.back_icon} />
          </button>
          <input
            placeholder="Введите СМС код"
            value={code.value}
            onChange={(e) => handleChangeCode(e.target.value)}
            className={code.error ? styles.input_err : styles.input}
          />
          <h5 className={styles.input_error}>{code.error ? code.error : null}</h5>

          <button onClick={onReg} className={styles.submit}>
            Отправить
          </button>
        </>
      )}
    </>
  );
});

export default RegistrationMobile;
