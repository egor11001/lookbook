import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router';
import AddIcon from '@mui/icons-material/Add';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import styles from '../../../scss/components/Mobile/LK/AddressesLKMobile.module.scss';
import ScrollButton from '../../../components/Mobile/ScrollButton';
import { Link } from 'react-router-dom';
import DeleteAddressMobile from '../../../components/Mobile/LK/DeleteAddressMobile';

const items = [
  {
    id: 0,
    name: 'Основной',
    value: 'Россия, Красноярск, ул.Петра Ломако 8, 45кв',
    active: true,
  },
  {
    id: 1,
    name: 'Дополнительный',
    value: 'Россия, Красноярск, ул.Петра Ломако 10, 54кв',
    active: false,
  },
  {
    id: 0,
    name: 'Основной',
    value: 'Россия, Красноярск, ул.Петра Ломако 8, 45кв',
    active: true,
  },
  {
    id: 1,
    name: 'Дополнительный',
    value: 'Россия, Красноярск, ул.Петра Ломако 10, 54кв',
    active: false,
  },
  {
    id: 0,
    name: 'Основной',
    value: 'Россия, Красноярск, ул.Петра Ломако 8, 45кв',
    active: true,
  },
  {
    id: 1,
    name: 'Дополнительный',
    value: 'Россия, Красноярск, ул.Петра Ломако 10, 54кв',
    active: false,
  },
  {
    id: 0,
    name: 'Основной',
    value: 'Россия, Красноярск, ул.Петра Ломако 8, 45кв',
    active: true,
  },
  {
    id: 1,
    name: 'Дополнительный',
    value: 'Россия, Красноярск, ул.Петра Ломако 10, 54кв',
    active: false,
  },
  {
    id: 0,
    name: 'Основной',
    value: 'Россия, Красноярск, ул.Петра Ломако 8, 45кв',
    active: true,
  },
  {
    id: 1,
    name: 'Дополнительный',
    value: 'Россия, Красноярск, ул.Петра Ломако 10, 54кв',
    active: false,
  },
  {
    id: 0,
    name: 'Основной',
    value: 'Россия, Красноярск, ул.Петра Ломако 8, 45кв',
    active: true,
  },
  {
    id: 1,
    name: 'Дополнительный',
    value: 'Россия, Красноярск, ул.Петра Ломако 10, 54кв',
    active: false,
  },
];

const AddressesLKMobile = () => {
  const [activeDelete, setActiveDelete] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState(null);
  const navigate = useNavigate();

  const handleDelete = (name, id) => () => {
    setDeleteInfo({ name: name, id: id });
    setActiveDelete(!activeDelete);
  };

  const onDelete = (id) => {
    console.log(`REMOVED ${id} !`);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <button onClick={() => navigate(-1)} className={styles.back}>
          <ChevronLeftIcon className={styles.back_icon} />
        </button>

        <h3 className={styles.title}>Адреса отправки товара</h3>
      </div>

      <div className={styles.content}>
        <Link to={'/lk/addresses/new'} className={styles.add_btn}>
          <AddIcon className={styles.plus_icon} />
        </Link>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.head}>
              <h1 className={styles.name}>{item.name}</h1>
              {item.active && <Icon icon={'bi:check'} className={styles.status_icon} />}
            </div>
            <h3 className={styles.address}>{item.value}</h3>
            <Icon
              onClick={handleDelete(item.name, item.id)}
              icon={'akar-icons:trash-can'}
              className={styles.remove_icon}
            />
          </div>
        ))}
      </div>
      {activeDelete ? (
        <DeleteAddressMobile
          name={deleteInfo.name}
          id={deleteInfo.id}
          visible={activeDelete}
          setVisible={setActiveDelete}
          onDelete={onDelete}
        />
      ) : null}

      <ScrollButton />
    </div>
  );
};

export default AddressesLKMobile;
