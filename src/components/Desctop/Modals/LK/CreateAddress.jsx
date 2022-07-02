import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import CloseIcon from '@mui/icons-material/Close';
import OutsideClickHandler from 'react-outside-click-handler';

import styles from '../../../../scss/components/Desctop/Modals/CreateAddress.module.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 600,
  display: 'flex',
  flexDirection: 'column',
  padding: '80px 60px 40px 60px',
  alignItems: 'center',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '30px',
  boxShadow: 24,
};

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

const CreateAddress = ({ visible, setVisible }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [options, setOptions] = useState([]);
  const [active, setActive] = useState(false);
  const ymaps = window.ymaps;

  const handleChangeAddress = async (value) => {
    setAddress(value);

    if (!ymaps) {
      return;
    }

    const res = await ymaps.suggest(value, { results: 5 });

    setOptions(res);
  };

  const handleChangeOption = (value) => () => {
    setAddress(value);
    setOptions([]);
  };

  const onOutstide = () => {
    setOptions([]);
  };

  const handleCreate = () => {
    console.log(name);
    console.log(address);
    setVisible(!visible);
  };
  return (
    <Modal open={visible}>
      <Box sx={style}>
        <button className="modal_close" onClick={() => setVisible(!visible)}>
          <CloseIcon className="close_icon" />
        </button>
        <h1 className={styles.title}>Создать адрес</h1>
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
                onChange={(e) => handleChangeAddress(e.target.value)}
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
      </Box>
    </Modal>
  );
};

export default CreateAddress;
