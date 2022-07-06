import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useForm } from 'react-hook-form';

import styles from '../../../scss/components/Desctop/AboutUsPage.module.scss';
import { emailRegexp } from '../../../utils/regExps';
import emailFormImg from '../../../assets/emailFormImg.png';

const AboutUsPage = () => {
  const {
    register,
    reset,
    formState: { errors, isSubmitted, isValid },
    handleSubmit,
  } = useForm({
    delayError: 800,
    mode: 'onChange',
  });
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setEmail(data.email);
    reset();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.top_left}>
            <button onClick={() => navigate(-1)} className={styles.back}>
              <ArrowBackIcon className={styles.back_icon} />
            </button>
            <h3 className={styles.title}>О нас</h3>
          </div>

          <div className={styles.top_right}>
            <h3 className={styles.title_small}>
              Долго искал и наконец нашел! Знакомо это чувство?
            </h3>
          </div>
        </div>

        <div className={styles.content}>
          <h3 className={styles.text}>
            Так и наша команда, приложила все усилия, чтобы тебе затратить на поиск как можно меньше
            времени, ведь мы уже отобрали специально для тебя самые уникальные бренды из России!
          </h3>
          <h3 className={styles.text}>
            Мы существуем для того, чтобы ты нашел себя, собирая свой гардероб из разных айдентик на
            платформе!
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <img src={emailFormImg} alt="IMG" className={styles.bg_img} />
            <div className={styles.form_content}>
              <h3 className={styles.form_title}>Подпишись на нашу рассылку</h3>
              <input
                placeholder="Введите свой e-mail"
                type="text"
                className={
                  errors?.email?.message
                    ? styles.form_input_error
                    : isSubmitted
                    ? styles.form_input_succ
                    : styles.form_input
                }
                {...register('email', {
                  required: 'Некорректный email',
                  pattern: {
                    value: emailRegexp,
                    message: 'Некорректный email',
                  },
                })}
              />
              <h5 className={styles.validate_info}>
                {<span className={styles.validate_error}>{errors?.email?.message}</span>}
                {isSubmitted && !errors?.email?.message ? (
                  <span className={styles.validate_succ}>Письмо отправленно на {email}!</span>
                ) : null}
              </h5>
              <button type="submit" disabled={!isValid} className={styles.submit_btn}>
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
