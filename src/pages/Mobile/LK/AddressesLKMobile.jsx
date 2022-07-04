import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router';
import AddIcon from '@mui/icons-material/Add';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import styles from '../../../scss/components/Mobile/LK/AddressesLKMobile.module.scss';
import DeleteAddress from '../../../components/Desctop/Modals/LK/DeleteAddress';
import CreateAddress from '../../../components/Desctop/Modals/LK/CreateAddress';
import ScrollButton from '../../../components/Mobile/ScrollButton';

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
  const [activeCreate, setActiveCreate] = useState(false);
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
        <button onClick={() => setActiveCreate(!activeCreate)} className={styles.add_btn}>
          <AddIcon className={styles.plus_icon} />
        </button>
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
        <DeleteAddress
          name={deleteInfo.name}
          id={deleteInfo.id}
          visible={activeDelete}
          setVisible={setActiveDelete}
          onDelete={onDelete}
        />
      ) : null}

      {activeCreate ? <CreateAddress visible={activeCreate} setVisible={setActiveCreate} /> : null}

      <ScrollButton />
    </div>
  );
};

export default AddressesLKMobile;
