import { Container, Typography, Card, Grid } from '@mui/material';
import ProductCard from '../../ProductCard/ProductCard';

const AdditionalBlock = props => {
  const { products } = props;
  const productsSlice = products.slice(0, 4);

  return (
    <Container
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
          <Grid item md={3} key={item.id}>
            <Card
              sx={{
                width: '259px',
                position: 'relative',
                backgroundColor: '#c4c2cc',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 24,
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <ProductCard productItem={item} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdditionalBlock;
