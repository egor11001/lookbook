import React, { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';

import SizeImg from '../../../assets/sizes.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 920,
  height: 600,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '30px',
  boxShadow: 24,
};

const SizesModal = ({ visible, setVisible }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setVisible(false);
  };

  useEffect(() => {
    if (visible) {
      handleOpen();
    }
  }, [visible]);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <button className="modal_close" onClick={handleClose}>
          <CloseIcon className="close_icon" />
        </button>
        <img className="sizes_img" src={SizeImg} alt="sizes" />
      </Box>
    </Modal>
  );
};

export default SizesModal;
