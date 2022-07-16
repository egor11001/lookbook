import React, { useContext, useState } from 'react';
import { Icon } from '@iconify/react';
import { IMaskInput } from 'react-imask';
import { Navigate, useLocation } from 'react-router';
import { observer } from 'mobx-react-lite';

import styles from '../../../../scss/components/Desctop/AuthPage.module.scss';
import { phoneRegexp } from '../../../../utils/regExps';
import { Context } from '../../../..';
import { login } from '../../../../services/actions';

const PhoneMask = '+{0}-000-000-00-00';

const Login = observer(() => {
  const location = useLocation();
  const [attempt, setAttempt] = useState(false);
  const [stepCode, setStepCode] = useState(false);
  const [code, setCode] = useState('');

  const [phone, setPhone] = useState({
    value: '',
    error: false,
  });

  const { user } = useContext(Context);

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
    if (phone.value.split('').length < 11 || !phoneRegexp.test(phone.value)) {
      setPhone({ value: phone.value, error: 'Неверный номер' });
    }
  };

  const handleChangeCode = (val) => {
    setCode(val);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!attempt) {
      setAttempt(true);
      checkErrors();
      if (phone.error) {
        return;
      }
    }
    if (!phone.error) {
      login({ phone_number: '+' + phone.value }).then((data) => {
        if (data === 200) {
          setStepCode(true);
        } else {
          console.log('ERR');
        }
      });
    }
  };

  const onLogin = (e) => {
    e.preventDefault();
    user.loginCode({ phone_number: '+' + phone.value, code: code }).then((data) => {
      if (data === 200) {
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
          <button onClick={onSubmit} className={styles.submit}>
            Войти
          </button>
        </>
      ) : (
        <>
          <button onClick={() => setStepCode(false)} className={styles.back_btn}>
            <Icon icon={'bi:arrow-left'} className={styles.back_icon} />
          </button>
          <input
            placeholder="Введите код с полученного письма"
            value={code}
            onChange={(e) => handleChangeCode(e.target.value)}
            className={code.error ? styles.input_err : styles.input}
          />
          <h5 className={styles.input_error}>{code.error ? code.error : null}</h5>

          <button onClick={onLogin} className={styles.submit}>
            Отправить
          </button>
        </>
      )}
    </>
  );
});

export default Login;
