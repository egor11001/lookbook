import React, { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import styles from '../../../../scss/components/Mobile/AuthPageMobile.module.scss';
import { emailRegexp, phoneRegexp } from '../../../../utils/regExps';
import { useNavigate } from 'react-router';

const LoginMobile = () => {
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

  const onLogin = () => {
    return navigate('/my');
  };

  return (
    <>
      {!stepCode ? (
        <>
          <input
            placeholder="Номер телефона"
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
            <ChevronLeftIcon className={styles.back_icon} />
          </button>
          <input
            placeholder="SMS код"
            value={code}
            onChange={(e) => handleChangeCode(e.target.value)}
            className={valid ? styles.field : styles.field_err}
          />

          <button onClick={onLogin} className={styles.submit}>
            Отправить
          </button>
        </>
      )}
    </>
  );
};

export default LoginMobile;
