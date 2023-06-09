import { Box, List, ListItemButton, ListItemText } from '@mui/material';
import { listItemStyle, listItemText, listStyle } from '../style/index';

export const AboutCompanyList = () => (
  <Box>
    <List sx={listStyle}>
      <ListItemButton sx={listItemStyle}>
        <ListItemText sx={listItemText} primary="Про компанію" />
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText sx={listItemText} primary="Доставка" />
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText sx={listItemText} primary="Самовивіз з аптек" />
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText sx={listItemText} primary="Оплата" />
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText sx={listItemText} primary="Юридичним особам" />
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText sx={listItemText} primary="Ліцензія" />
      </ListItemButton>
    </List>
  </Box>
);
