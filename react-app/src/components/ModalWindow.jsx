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
        <Typography>Видалити всі товари з кошика?</Typography>
        <Typography sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button onClick={handleClick} sx={{ color: 'black' }}>
            Підтвердити
          </Button>
          <Button onClick={handleClose} sx={{ color: 'black' }}>
            Відміна
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalWindow;
