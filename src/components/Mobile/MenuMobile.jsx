import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { observer } from 'mobx-react-lite';

import styles from '../../scss/components/Mobile/MenuMobile.module.scss';
import { FooterIconMobile } from '../../assets';
import Div100vh from 'react-div-100vh';
import { Context } from '../..';
import mc from '../../assets/payments/mc.png';
import mir from '../../assets/payments/mir.png';
import visa from '../../assets/payments/visa.png';

const languages = ['RU', 'ENG', 'CZ', 'JPN'];

const MenuMobile = observer(({ showMenu, setShowMenu }) => {
  /* const [lang, setLang] = useState(languages[0]);
  const [showLang, setShowLang] = useState(false); */

  const { user } = useContext(Context);

  /* const handleChangeLang = () => {
    if (showLang) {
      setShowLang(false);
    } else {
      setShowLang(true);
    }
  };

  const onChangeLang = (item) => () => {
    if (item) {
      setLang(item);
      setShowLang(false);
    }
  };
 */
  return (
    <Div100vh>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <FooterIconMobile />
          <button onClick={() => setShowMenu(false)} className={styles.close_btn}>
            <Icon className={styles.close_icon} icon={'bi:arrow-right'} />
          </button>
        </div>
        <div className={styles.content}>
          <div onClick={() => setShowMenu(!showMenu)} to={'/my'} className={styles.profile}>
            <Link to={'/my'} className={styles.link_profile}>
              <Icon className={styles.icon} icon="ci:user-circle" />
            </Link>
            {user.isAuth && (
              <button onClick={() => user.logout()} className={styles.link_profile}>
                <Icon className={styles.icon} icon="ic:twotone-logout" />
              </button>
            )}
          </div>
          <hr />
          <ul className={styles.ul}>
            <Link onClick={() => setShowMenu(!showMenu)} to={'/about'} className={styles.li}>
              <h1 className={styles.link}>?? ??????</h1>
            </Link>
            <Link onClick={() => setShowMenu(!showMenu)} to={'/payment'} className={styles.li}>
              <h1 className={styles.link}>????????????</h1>
            </Link>
            <Link onClick={() => setShowMenu(!showMenu)} to={'/delivery'} className={styles.li}>
              <h1 className={styles.link}>????????????????</h1>
            </Link>
            <Link onClick={() => setShowMenu(!showMenu)} to={'/returns'} className={styles.li}>
              <h1 className={styles.link}>????????????????</h1>
            </Link>
            <Link
              onClick={() => setShowMenu(!showMenu)}
              to={'/collaboration'}
              className={styles.li}>
              <h1 className={styles.link}>??????????????????</h1>
            </Link>
            <Link onClick={() => setShowMenu(!showMenu)} to={'/contacts'} className={styles.li}>
              <h1 className={styles.link}>????????????????</h1>
            </Link>

            <Link
              onClick={() => setShowMenu(!showMenu)}
              to={'/privacy-policy'}
              className={styles.li}>
              <h1 className={styles.link}>???????????????? ????????????????????????????????????</h1>
            </Link>
            {/* <Link onClick={() => setShowMenu(!showMenu)} to={'/FAQ'} className={styles.li}>
              <h1 className={styles.link}>???????????? ?? FAQ</h1>
            </Link> */}
          </ul>
          <hr />
          <div className={styles.payments}>
            <img src={mir} alt="??????" className={styles.payment} />
            <img src={mc} alt="MC" className={styles.payment} />
            <img src={visa} alt="VISA" className={styles.payment} />
          </div>
        </div>
      </div>
    </Div100vh>
  );
});

export default MenuMobile;
