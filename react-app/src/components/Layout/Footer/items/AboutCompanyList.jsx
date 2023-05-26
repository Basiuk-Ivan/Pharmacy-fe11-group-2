import {Box, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {listItemStyle, listItemText, listStyle} from "../style/index.js";


export const AboutCompanyList = () => (
  <Box>
    <List sx={listStyle}>
      <ListItemButton sx={listItemStyle}>
        <ListItemText sx={listItemText} primary="О компании"/>
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText sx={listItemText} primary="Доставка"/>
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText sx={listItemText} primary="Самовывоз из аптек"/>
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText sx={listItemText} primary="Оплата"/>
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText sx={listItemText} primary="Юридическим лицам"/>
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText sx={listItemText} primary="Лицензия"/>
      </ListItemButton>
    </List>
  </Box>
)

