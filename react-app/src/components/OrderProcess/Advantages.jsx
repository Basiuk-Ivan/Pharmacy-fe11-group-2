import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import assortment from '../../assets/orderprocess/im1.png';
import delivery from '../../assets/orderprocess/im2.png';
import guarantee from '../../assets/orderprocess/im3.png';
import lowPrice from '../../assets/orderprocess/im4.png';

const TypographyTitle = styled(Typography)({
  fontSize: '18px',
  fontWeight: 500,
  color: '#2F2F2F',
  marginTop: '10px'
});

const TypographyData = styled(Typography)({
  fontSize: '14px',
  fontWeight: 400,
  color: '#7C7C7C'
});

const Advantages = () => (
  <Grid
    container
    sx={{
      mt: '110px',
      mb: '110px'
    }}
  >
    <Grid
      item
      xs={12}
      md={3}
      sx={{
        textAlign: 'center'
      }}
    >
      <img src={assortment} alt="assortment" />
      <TypographyTitle>Асортимент</TypographyTitle>
      <TypographyData>Широкий вибір товарів</TypographyData>
    </Grid>
    <Grid
      item
      xs={12}
      md={3}
      sx={{
        textAlign: 'center'
      }}
    >
      <img src={delivery} alt="delivery" />
      <TypographyTitle>Швидка доставка</TypographyTitle>
      <TypographyData>В будь-яке місто України</TypographyData>
    </Grid>
    <Grid
      item
      xs={12}
      md={3}
      sx={{
        textAlign: 'center'
      }}
    >
      <img src={guarantee} alt="guarantee" />
      <TypographyTitle>Гарантія</TypographyTitle>
      <TypographyData>Вся продукція сертифікована</TypographyData>
    </Grid>
    <Grid
      item
      xs={12}
      md={3}
      sx={{
        textAlign: 'center'
      }}
    >
      <img src={lowPrice} alt="lowPrice" />
      <TypographyTitle>Низькі ціни</TypographyTitle>
      <TypographyData>Ми намагаємось тримати найнижчі ціни серед конкурентів</TypographyData>
    </Grid>
  </Grid>
);

export default Advantages;
