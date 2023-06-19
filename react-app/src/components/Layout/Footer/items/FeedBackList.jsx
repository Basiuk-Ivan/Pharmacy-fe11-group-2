import { Box, List, ListItemButton, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { listItemStyle, listStyle } from '../style/index';

export const FeedBackList = () => (
  <Box>
    <List sx={listStyle}>
      <ListItemButton sx={listItemStyle}>
        <NavLink to="/varranty">
          <ListItemText primary="Гарантії якості" />
        </NavLink>
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <NavLink to="/marketing">
          <ListItemText primary="Реклама на сайті" />
        </NavLink>
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText primary="Зворотній зв'язок" />
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <NavLink to="/job">
          <ListItemText primary="Вакансії" />
        </NavLink>
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <NavLink to="/terms">
          <ListItemText primary="Політика конфіденційності" />
        </NavLink>
      </ListItemButton>
    </List>
  </Box>
);
