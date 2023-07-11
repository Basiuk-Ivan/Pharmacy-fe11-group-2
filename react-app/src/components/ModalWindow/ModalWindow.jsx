import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
  buttonBlockStyles,
  confirmBtnStyles,
  mainTextStyles,
  ModalWrapperStyles,
  cancelBtnStyles } from './style';

const ModalWindow = ({
  mainText,
  isOpened,
  handleClick,
  handleClose,
  confirmTextBtn,
  cancelTextBtn,
  actions
}) => {
  return (
    <Modal open={isOpened} onClose={handleClose}>
      <Box sx={ModalWrapperStyles}>
        <Typography sx={mainTextStyles}>
          {mainText}
        </Typography>
        {actions && (
          <Box sx={buttonBlockStyles}>
            <Button variant="contained" onClick={handleClick} sx={confirmBtnStyles}>
              {confirmTextBtn}
            </Button>
            <Button variant="contained" onClick={handleClose} sx={cancelBtnStyles}>
              {cancelTextBtn}
            </Button>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default ModalWindow;
