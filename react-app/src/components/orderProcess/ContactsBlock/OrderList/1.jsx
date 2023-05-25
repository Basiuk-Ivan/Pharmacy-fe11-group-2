import {
  List, ListItem, ListItemIcon, ListItemText, Typography, Container
} from '@mui/material';

const OrderList = () => (
  <Container>
    <Typography
      variant="h5"
      sx={{
        margin: '40px 0 20px 45px',
        fontFamily: 'Raleway, sans-serif',
        color: '#4F4F4F',
        fontWeight: '700',
        fontSize: '24px',
      }}
    >
      Ваше замовлення
    </Typography>
    <List
      sx={{
        // width: '100%',
        // maxWidth: 500,
        // bgcolor: 'background.paper',
        // position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 }
      }}
    >
      {[0, 1, 2].map(sectionId => (
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
  </Container>
);

export default OrderList;
