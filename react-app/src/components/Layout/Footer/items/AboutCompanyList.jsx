import { Box, List, ListItemButton, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { listItemStyle, listItemText, listStyle } from '../style/index';

export const AboutCompanyList = () => (
  <Box>
    <List sx={listStyle}>
      <ListItemButton sx={listItemStyle}>
        <NavLink to="/company">
          <ListItemText sx={listItemText} primary="Про компанію" />
        </NavLink>
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <NavLink to="/delivery">
          <ListItemText sx={listItemText} primary="Доставка" />
        </NavLink>
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <NavLink to="/pay">
          <ListItemText sx={listItemText} primary="Оплата" />
        </NavLink>
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <NavLink to="/agreement">
          <ListItemText sx={listItemText} primary="Угода про використання" />
        </NavLink>
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <NavLink to="/editorial-policy">
          <ListItemText sx={listItemText} primary="Редакційна політика" />
        </NavLink>
      </ListItemButton>
    </List>
  </Box>
);
