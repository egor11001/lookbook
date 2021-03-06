import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useSteps } from 'react-step-builder';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import OutsideClickHandler from 'react-outside-click-handler';
import useDebounce from '../../../hooks/useDebounce';

import styles from '../../../scss/components/Desctop/Ordering.module.scss';

const Dropdown = ({ options, handleChangeOption }) => {
  return (
    <div className={styles.dropdown}>
      {options.map((item, index) => (
        <div onClick={handleChangeOption(item.value)} key={index} className={styles.item}>
          <h3 className={styles.title}>{item.displayName}</h3>
        </div>
      ))}
    </div>
  );
};

const YMap = React.memo(({ coord }) => {
  return (
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
  );
});

const Address = ({ info, setInfo }) => {
  const { next, prev } = useSteps();
  const [address, setAddress] = useState(info.address || '');
  const [ind, setInd] = useState('');
  const [coord, setCoord] = useState(null);
  const [options, setOptions] = useState([]);
  const [outsideClicked, setOutsideClicked] = useState(false);
  const debounced = useDebounce(address);
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
        <div className={styles.top_left}>
          <button onClick={prev} className={styles.back}>
            <Icon icon={'bi:arrow-left'} className={styles.back_icon} />
          </button>
          <h3 className={styles.title}>??????????????, ???????? ?????????????????? ???????????</h3>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.address_block}>
          <YMap coord={coord} />

          <div className={styles.fields}>
            <h2>?????????????? ?????????? ????????????????</h2>
            <OutsideClickHandler disabled={options.length < 1} onOutsideClick={onOutstide}>
              <input
                placeholder="??????????"
                className={options.length > 0 ? styles.address_input_active : styles.address_input}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
              />
              {options.length > 0 ? (
                <Dropdown options={options} handleChangeOption={handleChangeOption} />
              ) : null}
            </OutsideClickHandler>
            <input
              placeholder="????????????"
              className={styles.index_input}
              value={ind}
              onChange={(e) => setInd(e.target.value)}
              type="number"
            />
            <button className={styles.accept} onClick={handleSearch}>
              ?????????????????? ???? ??????????
            </button>
          </div>
        </div>
      </div>

      <button onClick={handleNext} className={styles.next_btn}>
        ???????????? ????????????????
      </button>
    </div>
  );
};

export default Address;
