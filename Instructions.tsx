import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Props = {
  handleClose: () => void;
  isOpen: boolean;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Instructions = ({ handleClose, isOpen = true }: Props) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={style}></Box>
    </Modal>
  );
};

export default Instructions;
