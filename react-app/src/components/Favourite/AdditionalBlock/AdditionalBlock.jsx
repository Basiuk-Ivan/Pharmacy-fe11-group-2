import { Container, Typography, Card, CardMedia, Grid } from '@mui/material';

const AdditionalBlock = () => (
  <Container
    sx={{
      mt: '20px',
      mb: '20px'
    }}
  >
    <Typography
      sx={{
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 700,
        fontSize: '36px',
        color: '#333333'
      }}
    >
      Завжди в пригоді
    </Typography>
    <Grid container spacing={2}>
      <Grid item md={4}>
        <Card sx={{ width: '279px', position: 'relative' }}>
          <CardMedia component="div" sx={{ height: '407px', backgroundColor: 'tomato' }} />
        </Card>
      </Grid>
    </Grid>
  </Container>
);

export default AdditionalBlock;
