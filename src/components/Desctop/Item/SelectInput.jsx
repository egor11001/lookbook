import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import OutsideClickHandler from 'react-outside-click-handler';

import styles from '../../../scss/components/Desctop/Select.module.scss';

const optionsItems = ['S', 'M', 'L', 'XL'];

const Dropdown = ({ options, handleChangeOption }) => {
  return (
    <div className={styles.dropdown}>
      {options.map((item, index) => (
        <div onClick={handleChangeOption(item)} key={index} className={styles.item}>
          <h3 className={styles.title}>{item}</h3>
        </div>
      ))}
    </div>
  );
};

const SelectInput = () => {
  const [value, setValue] = useState(null);
  const [options, setOptions] = useState(optionsItems);
  const [visible, setVisible] = useState(false);

  const handleClickBlock = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const handleChangeOption = (item) => () => {
    setValue(item);
  };

  const onOutstide = () => {
    if (visible) {
      setVisible(false);
    }
  };

  return (
    <OutsideClickHandler disabled={!visible} onOutsideClick={onOutstide}>
      <div onClick={handleClickBlock} className={visible ? styles.wrapper_active : styles.wrapper}>
        <div className={styles.block}>
          <h3 className={styles.title}>{value ? value : 'Выберите размер'}</h3>
          <KeyboardArrowDownIcon className={styles.down_icon} />
        </div>
        {visible ? <Dropdown options={options} handleChangeOption={handleChangeOption} /> : null}
      </div>
    </OutsideClickHandler>
  );
};

export default SelectInput;
