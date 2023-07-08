import { Container, Typography, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { request } from '../../../tools/Axios/request';
import ProductCard from '../../ProductCard/ProductCard';

const AdditionalBlock = props => {
  const [products, setProducts] = useState([]);
  const { favoriteItems } = props;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { result } = await request({
          url: '',
          method: 'GET',
          params: { useful: true }
        });
        const { data } = result;
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const renderProductCards = () => {
    return products.slice(0, 5).map(item => (
      <Grid item key={item.id}>
        <ProductCard productItem={item} />
      </Grid>
    ));
  };

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
      <Grid container spacing={1} justifyContent={{ xs: 'center', md: 'flex-start' }}>
        {renderProductCards()}
      </Grid>
    </Container>
  );
};

export default AdditionalBlock;
