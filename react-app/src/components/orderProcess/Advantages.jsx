import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

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
      md={3}
      sx={{
        textAlign: 'center'
      }}
    >
      <img src="./orderprocessTest/im1.png" alt="" />
      <TypographyTitle>Асортимент</TypographyTitle>
      <TypographyData>Широкий вибір товарів</TypographyData>
    </Grid>
    <Grid
      item
      md={3}
      sx={{
        textAlign: 'center'
      }}
    >
      <img src="./orderprocessTest/im2.png" alt="" />
      <TypographyTitle>Швидка доставка</TypographyTitle>
      <TypographyData>В будь-яке місто України</TypographyData>
    </Grid>
    <Grid
      item
      md={3}
      sx={{
        textAlign: 'center'
      }}
    >
      <img src="./orderprocessTest/im3.png" alt="" />
      <TypographyTitle>Гарантія</TypographyTitle>
      <TypographyData>Вся продукція сертифікована</TypographyData>
    </Grid>
    <Grid
      item
      md={3}
      sx={{
        textAlign: 'center'
      }}
    >
      <img src="./orderprocessTest/im4.png" alt="" />
      <TypographyTitle>Низькі ціни</TypographyTitle>
      <TypographyData>Ми намагаємось тримати найнижчі ціни серед конкурентів</TypographyData>
    </Grid>
  </Grid>
);

export default Advantages;
