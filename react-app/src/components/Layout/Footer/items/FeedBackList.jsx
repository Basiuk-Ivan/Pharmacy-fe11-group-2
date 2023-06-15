import { Box, List, ListItemButton, ListItemText } from '@mui/material';
import { listItemStyle, listStyle } from '../style/index';

export const FeedBackList = () => (
  <Box>
    <List sx={listStyle}>
      <ListItemButton sx={listItemStyle}>
        <ListItemText primary="Зворотній зв'язок" />
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText primary="Реклама на сайті" />
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText primary="Франшиза" />
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText primary="Вакансії" />
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText primary="Політика конфіденційності" />
      </ListItemButton>
    </List>
  </Box>
);
