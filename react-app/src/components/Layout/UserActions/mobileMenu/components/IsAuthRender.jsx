import {
  Box,
  Typography,
  IconButton,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { useDispatch } from 'react-redux';

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { openLogoutModal, removeToken, setLogin, setToken } from '../../../../../redux/slice/isToken';
import { removeUser } from '../../../../../redux/slice/userSlice';
import { deleteFromFavouriteItems } from '../../../../../redux/slice/favouriteItems';
import { removeItem } from '../../../../../redux/slice/cartItems';

const settings = [{ name: 'Профіль', path: '/cabinet' }, { name: 'Вихід' }];

export const IsAuthRender = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(setToken(token));
  }, [dispatch]);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    dispatch(removeToken());
    window.localStorage.setItem('token', '');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(setToken(null));
    navigate('/');
    dispatch(removeUser());
    dispatch(deleteFromFavouriteItems('all'));
    dispatch(removeItem('all'));
    dispatch(openLogoutModal(true));
  };

  return (
    <MenuItem>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <IconButton sx={{ p: 0 }}>
            <PermIdentityOutlinedIcon sx={{ fill: '#2FD3AE' }} />
          </IconButton>
          <Typography>Профіль</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Box>
            {settings.map(setting => (
              <MenuItem
                component="div"
                key={setting.name}
                onClick={setting.name === 'Вихід' ? handleLogout : handleCloseUserMenu}
              >
                <NavLink to={setting.path} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </NavLink>
              </MenuItem>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </MenuItem>
  );
};
