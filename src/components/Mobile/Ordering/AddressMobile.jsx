import React, { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useSteps } from 'react-step-builder';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import OutsideClickHandler from 'react-outside-click-handler';

import styles from '../../../scss/components/Mobile/OrderingMobile.module.scss';

const Dropdown = ({ options, handleChangeOption }) => {
  return (
    <div className={styles.dropdown}>
      {options.map((item, index) => (
        <div onClick={handleChangeOption(item.value)} key={index} className={styles.item}>
          <h3 className={styles.title_drop}>{item.displayName}</h3>
        </div>
      ))}
    </div>
  );
};

const AddressMobile = ({ info, setInfo }) => {
  const { next, prev } = useSteps();
  const [address, setAddress] = useState(info.address || '');
  const [ind, setInd] = useState('');
  const [coord, setCoord] = useState(null);
  const [options, setOptions] = useState([]);
  const ymaps = window.ymaps;

  const handleChange = async (value) => {
    setAddress(value);

    if (!ymaps) {
      return;
    }

    const res = await ymaps.suggest(value, { results: 6 });

    setOptions(res);
  };

  const handleChangeOption = (value) => () => {
    setAddress(value);
    setOptions([]);
  };

  const onOutstide = () => {
    setOptions([]);
  };

  const handleSearch = async () => {
    const res = await ymaps.geocode(address);
    console.log(res.geoObjects.toArray()[0].geometry._coordinates);
    setCoord(res.geoObjects.toArray()[0].geometry._coordinates);
  };

  const handleNext = () => {
    setInfo({ ...info, address: address });
    next();
  };

  return (
    <div className={styles.inner}>
      <div className={styles.top}>
        <button onClick={prev} className={styles.back}>
          <ChevronLeftIcon className={styles.back_icon} />
        </button>

        <h3 className={styles.title}>Куда доставить заказ?</h3>
      </div>

      <div className={styles.content}>
        <div className={styles.address_block}>
          <div className={styles.map}>
            <YMaps>
              <Map
                className={styles.ymap}
                state={{
                  center: coord ? coord : [55.997133054742, 92.79591978437796],
                  zoom: 16,
                  controls: ['zoomControl'],
                }}
                modules={['control.ZoomControl']}>
                <Placemark
                  geometry={coord ? coord : [55.997133054742, 92.79591978437796]}
                  options={{
                    iconColor: '#c21857',
                    preset: 'islands#redDotIcon',
                  }}
                />
              </Map>
            </YMaps>
          </div>

          <div className={styles.fields}>
            <h2>Введите адрес доставки</h2>
            <OutsideClickHandler disabled={options.length < 1} onOutsideClick={onOutstide}>
              <input
                placeholder="Адрес"
                className={options.length > 0 ? styles.address_input_active : styles.address_input}
                value={address}
                onChange={(e) => handleChange(e.target.value)}
                type="text"
              />
              {options.length > 0 ? (
                <Dropdown options={options} handleChangeOption={handleChangeOption} />
              ) : null}
            </OutsideClickHandler>
            <input
              placeholder="Индекс"
              className={styles.index_input}
              value={ind}
              onChange={(e) => setInd(e.target.value)}
              type="number"
            />
            <button className={styles.accept} onClick={handleSearch}>
              Проверить на карте
            </button>
          </div>
        </div>
      </div>

      <button onClick={handleNext} className={styles.next_btn}>
        Способ доставки
      </button>
    </div>
  );
};

export default AddressMobile;
