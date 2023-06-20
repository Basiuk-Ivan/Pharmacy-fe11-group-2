import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#c7f5ee',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px'
};

const ModalWindow = ({
  mainText, isOpened, handleClick,
  handleClose, confirmTextBtn, cancelTextBtn, actions
}) => {
  return (
    <Modal open={isOpened} onClose={handleClose}>
      <Box sx={style}>
        <Typography sx={{
          mb: '30px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 700,
          fontSize: '21px',
          textAlign: 'center'
        }}
        >
          {mainText}
        </Typography>
        {actions && (
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 2,
            gap: '30px',
          }}
          >
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{
                backgroundColor: '#2FD3AE',
                borderRadius: 50,
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                color: '#FFFFFF'
              }}
            >
              {confirmTextBtn}
            </Button>
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{
                backgroundColor: '#2FD3AE',
                borderRadius: 50,
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                color: '#FFFFFF'
              }}
            >
              {cancelTextBtn}
            </Button>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default ModalWindow;
