import { Typography, Button, Grid, Container } from '@mui/material';

const Orders = () => (
  <Grid
    container
    sx={{
      gap: '30px'
    }}
  >
    <Grid item md={3} />
    <Grid item md={8}>
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
        Ваші замовлення
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
      <Container sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px'
      }}
      >
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: '#2FD3AE',
            borderRadius: 50,
            mt: '20px',
            color: '#FFFFFF',
            padding: '13px 68px 10px 68px'
          }}
        >
          Зберегти зміни
        </Button>
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: '#2FD3AE',
            borderRadius: 50,
            mt: '20px',
            color: '#FFFFFF',
            padding: '13px 68px 10px 68px'
          }}
        >
          Зберегти зміни
        </Button>
      </Container>
    </Grid>
  </Grid>
);

export default Orders;
