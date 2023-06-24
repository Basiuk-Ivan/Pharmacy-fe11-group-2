import { Container, Typography, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { request } from '../../../tools/request';
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

  useEffect(() => {
    const updatedProducts = products.filter(item => {
      return favoriteItems.find(favoriteItem => favoriteItem.id === item.id);
    });

    setProducts(updatedProducts);
  }, []);

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
        {products.slice(0, 5).map(item => (
          <Grid item key={item.id}>
            <ProductCard productItem={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdditionalBlock;
