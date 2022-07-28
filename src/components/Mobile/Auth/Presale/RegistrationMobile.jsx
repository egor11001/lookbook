import React, { useContext, useState } from 'react';
import { useLocation, Navigate } from 'react-router';
import { Icon } from '@iconify/react';
import { IMaskInput } from 'react-imask';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { observer } from 'mobx-react-lite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import styles from '../../../../scss/components/Mobile/AuthPageMobile.module.scss';

import { Context } from '../../../..';
import { registration } from '../../../../services/actions';
import authRedirect from '../../../../services/authRedirect';
import useValidate from '../../../../hooks/useValidate';

const PhoneMask = '+{0}-000-000-00-00';

const RegistrationMobile = observer(() => {
  const [attempt, setAttempt] = useState(false);
  const [vissible, setVissible] = useState(false);
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
  const [password, setPassword] = useState({
    value: '',
    error: false,
  });
  const [phone, setPhone] = useState({
    value: '',
    error: false,
  });

  const { user } = useContext(Context);
  const validator = useValidate();

  const handleChangeName = (value) => {
    if (attempt) {
      const res = validator.nameValidate(value);
      if (res === '') {
        setName({ value: value, error: false });
      } else {
        setName({ value: value, error: res });
      }
    } else {
      setName({ value: value, error: false });
    }
  };

  const handleChangeLastName = (value) => {
    if (attempt) {
      const res = validator.nameValidate(value);
      if (res === '') {
        setLastName({ value: value, error: false });
      } else {
        setLastName({ value: value, error: res });
      }
    } else {
      setLastName({ value: value, error: false });
    }
  };

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

  const handleChangePhone = (value) => {
    if (attempt) {
      const res = validator.phoneValidate(value);
      if (res === '') {
        setPhone({ value: value, error: false });
      } else {
        setPhone({ value: value, error: res });
      }
    } else {
      setPhone({ value: value, error: false });
    }
  };

  const changeVisible = () => {
    setVissible(!vissible);
  };

  const checkErrors = async () => {
    const res = await validator.allValidate(
      {
        name: validator.nameValidate,
        lastName: validator.nameValidate,
        email: validator.emailValidate,
        password: validator.passwordValidate,
        phone: validator.phoneValidate,
      },
      {
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        phone: phone.value,
      },
    );
    setName({ ...name, error: res.res.name });
    setLastName({ ...lastName, error: res.res.lastName });
    setEmail({ ...email, error: res.res.email });
    setPassword({ ...password, error: res.res.password });
    setPhone({ ...phone, error: res.res.phone });
    return res.err;
  };

  const [stepCode, setStepCode] = useState(false);
  const [code, setCode] = useState('');
  const location = useLocation();

  const handleChangeCode = (val) => {
    setCode(val);
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
    if (!name.error && !lastName.error && !email.error && !password.error && !phone.error) {
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

          <IMaskInput
            mask={PhoneMask}
            value={phone.value}
            unmask={true}
            onAccept={(value, mask) => handleChangePhone(value)}
            placeholder="Номер телефона"
            type="tel"
            className={phone.error ? styles.input_err : styles.input}
          />
          <h5 className={styles.input_error}>{phone.error ? phone.error : null}</h5>
          <button type="submit" onClick={onSubmit} className={styles.submit}>
            Зарегистрироваться
          </button>

          <hr />
          <h5 className={styles.or}>Или</h5>
          <div className={styles.socials}>
            {/* <button className={styles.social_mail}>
              <Icon icon={'simple-icons:maildotru'} className={styles.mail_icon} />
            </button> */}
            <button onClick={onVk} className={styles.social_vk}>
              <Icon icon={'akar-icons:vk-fill'} className={styles.vk_icon} />
            </button>
            <button onClick={onYandex} className={styles.social_yandex}>
              <Icon icon={'brandico:yandex'} className={styles.yandex_icon} />
            </button>
          </div>
        </>
      ) : (
        <>
          <button onClick={() => setStepCode(false)} className={styles.back_btn}>
            <ChevronLeftIcon className={styles.back_icon} />
          </button>
          <input
            placeholder="Код с письма"
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
