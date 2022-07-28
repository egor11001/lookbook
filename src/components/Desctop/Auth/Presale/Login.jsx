import React, { useContext, useState } from 'react';
import { Icon } from '@iconify/react';
import { IMaskInput } from 'react-imask';
import { Navigate, useLocation } from 'react-router';
import { observer } from 'mobx-react-lite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import styles from '../../../../scss/components/Desctop/AuthPage.module.scss';
import { Context } from '../../../..';
import { login } from '../../../../services/actions';
import authRedirect from '../../../../services/authRedirect';
import useValidate from '../../../../hooks/useValidate';

/* const PhoneMask = '+{0}-000-000-00-00'; */

const Login = observer(() => {
  const location = useLocation();
  const [attempt, setAttempt] = useState(false);
  const [stepCode, setStepCode] = useState(false);
  const [code, setCode] = useState('');
  const [vissible, setVissible] = useState(false);
  const validator = useValidate();

  const [email, setEmail] = useState({
    value: '',
    error: false,
  });
  const [password, setPassword] = useState({
    value: '',
    error: false,
  });

  /* const [phone, setPhone] = useState({
    value: '',
    error: false,
  }); */

  const { user } = useContext(Context);

  /* const handleChangePhone = (value) => {
    if (attempt) {
      if (value.split('').length < 11 || !phoneRegexp.test(value)) {
        setPhone({ value: value, error: 'Неверный номер' });
      } else {
        setPhone({ value: value, error: false });
      }
    } else {
      setPhone({ value: value, error: false });
    }
  }; */

  const handleChangeEmail = (value) => {
    if (attempt) {
      const res = validator.emailValidate(value);
      if (res === '') {
        setEmail({ value: value, error: false });
      } else {
        setEmail({ value: value, error: res });
      }
    } else {
      setEmail({ value: value, error: false });
    }
  };

  const handleChangePassword = (value) => {
    if (attempt) {
      const res = validator.passwordValidate(value);
      if (res === '') {
        setPassword({ value: value, error: false });
      } else {
        setPassword({ value: value, error: res });
      }
    } else {
      setPassword({ value: value, error: false });
    }
  };

  const checkErrors = async () => {
    const res = await validator.allValidate(
      {
        email: validator.emailValidate,
        password: validator.passwordValidate,
      },
      {
        email: email.value,
        password: password.value,
      },
    );
    setEmail({ ...email, error: res.res.email });
    setPassword({ ...password, error: res.res.password });
    return res.err;
  };

  const handleChangeCode = (val) => {
    setCode(val);
  };

  const changeVisible = () => {
    setVissible(!vissible);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!attempt) {
      setAttempt(true);
      const res = await checkErrors();
      if (!res) {
        return;
      }
    }
    if (!email.error && !password.error) {
      user.login({ username: email.value, password: password.value }).then((data) => {
        if (data === 200) {
          return <Navigate to={location.state?.from?.pathname} />;
        } else {
          console.log('ERR');
        }
      });
    }
  };

  const onLogin = (e) => {
    e.preventDefault();
    user.login({ username: email.value, password: password.value }).then((data) => {
      if (data === 200) {
        return <Navigate to={location.state?.from?.pathname} />;
      } else {
        console.log('ERR');
      }
    });
  };

  const onVk = (e) => {
    e.preventDefault();
    authRedirect.forVK();
  };

  const onYandex = (e) => {
    e.preventDefault();
    authRedirect.forYandex();
  };

  return (
    <>
      {!stepCode ? (
        <>
          <input
            value={email.value}
            onChange={(e) => handleChangeEmail(e.target.value)}
            placeholder="Адрес эл.почты"
            type="email"
            className={email.error ? styles.input_err : styles.input}
          />
          <h5 className={styles.input_error}>{email.error ? email.error : null}</h5>

          <div className={styles.password}>
            <input
              value={password.value}
              onChange={(e) => handleChangePassword(e.target.value)}
              placeholder="Пароль"
              type={vissible ? 'text' : 'password'}
              className={password.error ? styles.input_err : styles.input}
            />
            {vissible ? (
              <VisibilityIcon className={styles.vissible} onClick={changeVisible} />
            ) : (
              <VisibilityOffIcon className={styles.vissible} onClick={changeVisible} />
            )}
          </div>
          <h5 className={styles.input_error}>{password.error ? password.error : null}</h5>

          <button type="submit" onClick={onSubmit} className={styles.submit}>
            Войти
          </button>

          <hr />

          <h5 className={styles.or}>Или</h5>

          {/* <button className={styles.social_mail}>
            <Icon icon={'simple-icons:maildotru'} className={styles.mail_icon} />
            Продолжить с Mail.ru
          </button> */}
          <button onClick={onVk} className={styles.social_vk}>
            <Icon icon={'akar-icons:vk-fill'} className={styles.vk_icon} />
            Продолжить с VK
          </button>
          <button onClick={onYandex} className={styles.social_yandex}>
            <Icon icon={'brandico:yandex'} className={styles.yandex_icon} />
            Продолжить с Yandex
          </button>
        </>
      ) : (
        <>
          <button onClick={() => setStepCode(false)} className={styles.back_btn}>
            <Icon icon={'bi:arrow-left'} className={styles.back_icon} />
          </button>
          <input
            autoFocus
            placeholder="Код с письма"
            value={code}
            onChange={(e) => handleChangeCode(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onLogin(e)}
            className={code.error ? styles.input_err : styles.input}
          />
          <h5 className={styles.input_error}>{code.error ? code.error : null}</h5>

          <button type="submit" onClick={onLogin} className={styles.submit}>
            Отправить
          </button>
        </>
      )}
    </>
  );
});

export default Login;
