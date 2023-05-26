import {Box, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {listItemStyle, listStyle} from "../style/index.js";


export const FeedBackList = () => (
  <Box>
    <List sx={listStyle}>
      <ListItemButton sx={listItemStyle}>
        <ListItemText primary="Обратная связь"/>
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText primary="Реклама на сайте"/>
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText primary="Франшиза"/>
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText primary="Вакансии"/>
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText primary="Политика конфиденциальности"/>
      </ListItemButton>
      <ListItemButton sx={listItemStyle}>
        <ListItemText primary="Пользовательское соглашение"/>
      </ListItemButton>
    </List>
  </Box>
)

