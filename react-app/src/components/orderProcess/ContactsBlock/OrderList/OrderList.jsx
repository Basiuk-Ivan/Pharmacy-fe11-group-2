import { Typography, Container, Grid } from '@mui/material';

const OrderList = () => (
  <Container>
    <Typography
      sx={{
        margin: '40px 0 20px 0',
        fontFamily: 'Raleway, sans-serif',
        color: '#4F4F4F',
        fontWeight: '700',
        fontSize: '24px',
        width: '100%'
      }}
    >
      Ваше замовлення
    </Typography>
    <Grid container sx={{ overflowY: 'auto', maxHeight: '300px' }}>
      {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map(id => (
        <Grid container key={id}>
          <Grid item md={3}>
            <img src={`./orderprocessTest/${id}.png`} alt="" />
          </Grid>
          <Grid item md={6}>
            <Typography sx={{ textAlign: 'left' }}>
              Велсон таблетки 30 шт.
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography sx={{ textAlign: 'left' }}>
              108 грн.
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default OrderList;
