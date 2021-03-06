import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router';

import styles from '../../../scss/components/Desctop/LK/WelcomeGuide.module.scss';

const texts = {
  profile: 'Ваша основная информация. Пожалуйста, указывайте корректную почту для обратной связи. ',
  notification: 'Оставайтесь на связи! Все необходимые уведомления о новых заказах и его статусе.',
  statistic: 'Соотношение продаж и возвратов. Краткая сводка доходной части.',
  delivery: 'Укажите один или несколько адресов отправки товара.',
  questions: 'Ответы на самые часто задаваемые вопросы. Либо свяжитесь с нами lookbook.rf@inbox.ru',
};

const WelcomeGuide = () => {
  const [value, setValue] = useState(null);

  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Всё самое необходимое в одном месте</h1>
      <div className={styles.items}>
        <button
          onMouseEnter={() => setValue(texts.profile)}
          onMouseLeave={() => setValue(null)}
          className={styles.item}>
          <Icon className={styles.item_icon} icon={'gg:profile'} />
          {value === texts.profile ? <h3 className={styles.item_desc}>Профиль</h3> : null}
        </button>
        <button
          onMouseEnter={() => setValue(texts.notification)}
          onMouseLeave={() => setValue(null)}
          className={styles.item}>
          <Icon className={styles.item_icon} icon={'mi:notification'} />
          {value === texts.notification ? <h3 className={styles.item_desc}>Уведомления</h3> : null}
        </button>
        <button
          onMouseEnter={() => setValue(texts.statistic)}
          onMouseLeave={() => setValue(null)}
          className={styles.item}>
          <Icon className={styles.item_icon} icon={'akar-icons:statistic-up'} />
          {value === texts.statistic ? <h3 className={styles.item_desc}>Статистика</h3> : null}
        </button>
        <button
          onMouseEnter={() => setValue(texts.delivery)}
          onMouseLeave={() => setValue(null)}
          className={styles.item}>
          <Icon className={styles.item_icon} icon={'bx:map'} />
          {value === texts.delivery ? <h3 className={styles.item_desc}>Адреса отправки</h3> : null}
        </button>
        <button
          onMouseEnter={() => setValue(texts.questions)}
          onMouseLeave={() => setValue(null)}
          className={styles.item}>
          <Icon className={styles.item_icon} icon={'fluent:question-circle-12-regular'} />
          {value === texts.questions ? <h3 className={styles.item_desc}>Помощь и FAQ</h3> : null}
        </button>
      </div>

      <button disabled={!Boolean(value)} className={styles.content}>
        {value}
      </button>

      <button onClick={() => navigate('/lk/home')} className={styles.back_btn}>
        <Icon icon={'bi:arrow-right'} className={styles.back_icon} />
      </button>
    </div>
  );
};

export default WelcomeGuide;
