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
      mt: 20
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
      <TypographyTitle>Ассортимент</TypographyTitle>
      <TypographyData>Оборудование, мебель, посуда и инвентарь</TypographyData>
    </Grid>
    <Grid
      item
      md={3}
      sx={{
        textAlign: 'center'
      }}
    >
      <img src="./orderprocessTest/im2.png" alt="" />
      <TypographyTitle>Быстрая доставка</TypographyTitle>
      <TypographyData>В любую точку России быстро</TypographyData>
    </Grid>
    <Grid
      item
      md={3}
      sx={{
        textAlign: 'center'
      }}
    >
      <img src="./orderprocessTest/im3.png" alt="" />
      <TypographyTitle>Гарантия</TypographyTitle>
      <TypographyData>Вся продукция cертифицирована</TypographyData>
    </Grid>
    <Grid
      item
      md={3}
      sx={{
        textAlign: 'center'
      }}
    >
      <img src="./orderprocessTest/im4.png" alt="" />
      <TypographyTitle>Низкие цены</TypographyTitle>
      <TypographyData>Мы стараемся держать самые низкие цены</TypographyData>
    </Grid>
  </Grid>
);

export default Advantages;
