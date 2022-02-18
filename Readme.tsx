import React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';

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

const Readme = ({ handleClose, isOpen = true }: Props) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <Box sx={style}></Box>
    </Dialog>
  );
};

export default Readme;
