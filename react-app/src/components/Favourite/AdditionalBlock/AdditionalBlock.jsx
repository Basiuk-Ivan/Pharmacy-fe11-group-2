import { Container, Typography, Grid } from '@mui/material';
import ProductCard from '../../ProductCard/ProductCard';

const AdditionalBlock = props => {
  const { products } = props;
  const productsSlice = products.slice(0, 5);

  return (
    <Container
      disableGutters
      sx={{
        mt: '50px',
        mb: '20px'
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 700,
          fontSize: '36px',
          color: '#333333',
          mb: '10px'
        }}
      >
        Завжди в пригоді
      </Typography>
      <Grid container spacing={2}>
        {productsSlice.map(item => (
          <Grid item md={2.4} key={item.id}>
            <ProductCard productItem={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdditionalBlock;
