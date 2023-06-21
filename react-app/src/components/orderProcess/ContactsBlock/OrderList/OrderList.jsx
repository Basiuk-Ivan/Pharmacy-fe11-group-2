import { Typography, Container, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { roundPrice } from '../../../../utils/ActionsWithProduct/roundPrice';

const theme1 = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 600,
      lg: 900,
      xl: 1200
    }
  }
});

const OrderList = ({ products }) => {
  return (
    <ThemeProvider theme={theme1}>
      <Container disableGutters>
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
        <Grid container sx={{ overflowY: 'auto', maxHeight: '300px', paddingRight: '10px' }}>
          {products.map(el => {
            const currentPrice = roundPrice(el);
            return (
              <Grid
                container
                key={el.id}
                alignItems="center"
                sx={{ mt: '10px', gap: '10px', border: '1px solid #2fd3ae', p: '5px' }}
              >
                <Grid item sx={{ mr: '5px' }}>
                  <img src={`${el.img[0]}`} width="70px" alt="" />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={8}
                  md={9}
                  lg={9}
                  xl={8}
                  sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
                >
                  <Typography sx={{ textAlign: 'left', fontSize: '14px', fontWeight: 500 }}>
                    {`${el.name}`}
                  </Typography>
                  <Typography sx={{ textAlign: 'left', fontSize: '14px' }}>
                    Ціна за од. : {`${currentPrice} грн.`}
                  </Typography>
                  <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                    Кількість: {`${el.quantity}`}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
export default OrderList;
