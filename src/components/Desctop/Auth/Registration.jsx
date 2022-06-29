import React, { useState } from 'react';
import { Icon } from '@iconify/react';

import styles from '../../../scss/components/Desctop/AuthPage.module.scss';
import { emailRegexp, phoneRegexp } from '../../../utils/regExps';
import { useNavigate } from 'react-router';

const Registration = () => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(true);
  const [stepCode, setStepCode] = useState(false);
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleChange = (val) => {
    setValue(val);
  };

  const handleChangeCode = (val) => {
    setCode(val);
  };

  const onSubmit = () => {
    if (value.length < 7) {
      setValid(false);
    }
    if (!emailRegexp.test(value) && !phoneRegexp.test(value)) {
      setValid(false);
    } else {
      setValid(true);
      setStepCode(true);
    }
  };

  const onReg = () => {
    return navigate('/welcome');
  };

  return (
    <>
      {!stepCode ? (
        <>
          <input
            placeholder="Email или номер телефона"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            className={valid ? styles.field : styles.field_err}
          />
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
            placeholder="Введите СМС код"
            value={code}
            onChange={(e) => handleChangeCode(e.target.value)}
            className={valid ? styles.field : styles.field_err}
          />

          <button onClick={onReg} className={styles.submit}>
            Отправить
          </button>
        </>
      )}
    </>
  );
};

export default Registration;
