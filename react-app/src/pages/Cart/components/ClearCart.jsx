import { IconButton, Typography } from '@mui/material';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import { useDispatch } from 'react-redux';
import { openCartModalRemoveAll } from '../../../redux/slice/cartItems';

export const ClearCart = () => {
  const dispatch = useDispatch();

  return (
    <IconButton onClick={() => dispatch(openCartModalRemoveAll())}>
      <DeleteOutlineTwoToneIcon />
      <Typography>Очистити корзину</Typography>
    </IconButton>
  );
};
