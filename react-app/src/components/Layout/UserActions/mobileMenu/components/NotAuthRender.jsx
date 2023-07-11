import { Typography, IconButton, MenuItem } from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../../redux/slice/modalSlice';

export const NotAuthRender = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <MenuItem sx={{ display: 'flex', gap: '5px' }} onClick={handleOpenModal}>
      <IconButton>
        <PermIdentityOutlinedIcon sx={{ fill: '#2FD3AE' }} />
      </IconButton>
      <Typography>Профіль</Typography>
    </MenuItem>
  );
};
