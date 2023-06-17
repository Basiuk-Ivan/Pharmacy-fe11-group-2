import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, deleteFromFavouriteItems } from '../redux/slice/favouriteItems';
import { removeFromFavouriteLocalStorage } from '../utils/LocalStore/removeFromFavouriteLocalStorage';

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
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px'
};

const ModalWindow = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector(state => state.favouriteItems.isOpened);
  const favourites = useSelector(state => state.favouriteItems.favouriteItems);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const removeFromLocalStorage = () => {
    favourites.forEach(element => {
      removeFromFavouriteLocalStorage(element);
    });
  };

  const handleClick = () => {
    dispatch(deleteFromFavouriteItems('all'));
    removeFromLocalStorage();
    dispatch(closeModal());
  };

  return (
    <Modal open={isOpened} onClose={handleClose}>
      <Box sx={style}>
        <Typography sx={{
          mb: '30px',
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 700,
          fontSize: '21px',
        }}
        >Видалити всі товари з кошика?
        </Typography>
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
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              color: '#FFFFFF'
            }}
          >
            Підтвердити
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              backgroundColor: '#2FD3AE',
              borderRadius: 50,
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              color: '#FFFFFF'
            }}
          >
            Відміна
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalWindow;
