import { Grid, Typography } from '@mui/material';

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
      <Typography sx={{
        fontSize: '18px',
        fontWeight: 500,
        color: '#2F2F2F',
        mt: '10px'
      }}
      >Ассортимент
      </Typography>
      <Typography sx={{
        fontSize: '14px',
        fontWeight: 400,
        color: '#7C7C7C',
      }}
      >Оборудование, мебель, посуда и инвентарь
      </Typography>
    </Grid>
    <Grid
      item
      md={3}
      sx={{
        textAlign: 'center'
      }}
    >
      <img src="./orderprocessTest/im2.png" alt="" />
      <Typography sx={{
        fontSize: '18px',
        fontWeight: 500,
        color: '#2F2F2F',
        mt: '10px'
      }}
      >Быстрая доставка
      </Typography>
      <Typography sx={{
        fontSize: '14px',
        fontWeight: 400,
        color: '#7C7C7C',
      }}
      >В любую точку России быстро
      </Typography>
    </Grid>
    <Grid
      item
      md={3}
      sx={{
        textAlign: 'center'
      }}
    >
      <img src="./orderprocessTest/im3.png" alt="" />
      <Typography sx={{
        fontSize: '18px',
        fontWeight: 500,
        color: '#2F2F2F',
        mt: '10px'
      }}
      >Гарантия
      </Typography>
      <Typography sx={{
        fontSize: '14px',
        fontWeight: 400,
        color: '#7C7C7C',
      }}
      >Вся продукция cертифицирована
      </Typography>
    </Grid>
    <Grid
      item
      md={3}
      sx={{
        textAlign: 'center'
      }}
    >
      <img src="./orderprocessTest/im4.png" alt="" />
      <Typography sx={{
        fontSize: '18px',
        fontWeight: 500,
        color: '#2F2F2F',
        mt: '10px'
      }}
      >Низкие цены
      </Typography>
      <Typography sx={{
        fontSize: '14px',
        fontWeight: 400,
        color: '#7C7C7C',
      }}
      >Мы стараемся держать самые низкие цены
      </Typography>
    </Grid>
  </Grid>
);

export default Advantages;
