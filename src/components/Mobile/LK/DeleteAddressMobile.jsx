import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import styles from '../../../scss/components/Desctop/Modals/DeleteAddress.module.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 280,
  height: 280,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '30px',
  boxShadow: 24,
};

const DeleteAddressMobile = ({ visible, setVisible, name, id, onDelete }) => {
  const handleYes = () => {
    onDelete(id);
    setVisible(!visible);
  };

  const handleNo = () => {
    setVisible(!visible);
  };

  return (
    <Modal open={visible}>
      <Box sx={style}>
        <h1 className={styles.title}>
          Удалить адрес <span>{name}?</span>
        </h1>
        <div className={styles.row}>
          <button className={styles.submit} onClick={handleYes}>
            Да
          </button>
          <button className={styles.cancel} onClick={handleNo}>
            Нет
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default DeleteAddressMobile;
