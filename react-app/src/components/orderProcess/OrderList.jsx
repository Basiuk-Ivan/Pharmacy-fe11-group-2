import {
  List, ListItem, ListItemIcon, ListItemText, Typography
} from '@mui/material';

const OrderList = () => (
  <>
    <Typography
      variant="h5"
      sx={{
        margin: '40px 0 40px 45px'
      }}
    >
      Ваше замовлення
    </Typography>
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 }
      }}
    >
      {[0, 1].map(sectionId => (
        <li key={`section-${sectionId}`}>
          <ul>
            {[0, 1].map(item => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemIcon>
                  <img src="./orderprocessTest/3.png" alt="" />
                </ListItemIcon>
                <ListItemText primary="Велсон таблетки 30 шт." />
                <ListItemText primary="108 грн." />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  </>
);

export default OrderList;
