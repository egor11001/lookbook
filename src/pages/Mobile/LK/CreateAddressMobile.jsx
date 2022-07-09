import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import OutsideClickHandler from 'react-outside-click-handler';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router';
import useDebounce from '../../../hooks/useDebounce';

import styles from '../../../scss/components/Mobile/LK/CreateAddressMobile.module.scss';

const Dropdown = ({ options, handleChangeOption }) => {
  return (
    <div className={styles.dropdown}>
      {options.map((item, index) => (
        <div onClick={handleChangeOption(item.value)} key={index} className={styles.item}>
          <h3 className={styles.title_item}>{item.displayName}</h3>
        </div>
      ))}
    </div>
  );
};

const CreateAddressMobile = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [options, setOptions] = useState([]);
  const [active, setActive] = useState(false);
  const [outsideClicked, setOutsideClicked] = useState(false);
  const debounced = useDebounce(address);
  const navigate = useNavigate();
  const ymaps = window.ymaps;

  const searchOptions = async () => {
    if (!ymaps) {
      return;
    }

    const res = await ymaps.suggest(debounced, { results: 6 });

    setOptions(res);
  };

  useEffect(() => {
    if (debounced.length > 2 && !outsideClicked) {
      searchOptions();
    }
    if (outsideClicked) {
      setOutsideClicked(false);
    }
  }, [debounced]);

  const handleChangeOption = (value) => () => {
    setAddress(value);
    onOutstide();
  };

  const onOutstide = () => {
    setOptions([]);
    setOutsideClicked(true);
  };

  const handleCreate = () => {
    console.log(name);
    console.log(address);
    return navigate('/lk/addresses');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.top_left}>
          <button onClick={() => navigate(-1)} className={styles.back}>
            <ChevronLeftIcon className={styles.back_icon} />
          </button>

          <h3 className={styles.title}>Создать адрес</h3>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.row}>
          <h3 className={styles.label}>Имя</h3>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Имя"
            className={styles.name_input}
          />
        </div>
        <div className={styles.row}>
          <h3 className={styles.label}>Адрес</h3>
          <OutsideClickHandler disabled={options.length < 1} onOutsideClick={onOutstide}>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Адрес"
              className={options.length > 0 ? styles.address_input_active : styles.address_input}
            />
            {options.length > 0 ? (
              <Dropdown options={options} handleChangeOption={handleChangeOption} />
            ) : null}
          </OutsideClickHandler>
        </div>

        <div className={styles.row}>
          <h2 className={styles.radio_label}>Сделать его основным?</h2>
          <div
            onClick={() => setActive(!active)}
            className={active ? styles.status_active : styles.status}>
            <Icon icon={'bi:check'} className={styles.status_icon} />
          </div>
        </div>
      </div>

      <button className={styles.submit} onClick={handleCreate}>
        Создать
      </button>
    </div>
  );
};

export default CreateAddressMobile;
