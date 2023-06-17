import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../ProductCard';
import 'swiper/swiper-bundle.min.css';
import './CustomSwiper.scss';
import { Container } from '@mui/system';

const ProductAnalogiesCardContainer = ({ productItem }) => {
  const isInCart = false;
 

  const getAnalogsProducts = item => {
    if (item.analogs) {
      const params = {
        analogs: item.analogs
      };
      axios.get('http://localhost:3004/api/product', { params })
        .then(response => {
          const analogsProducts = response.data.prods;

          setAnalogProducts(analogsProducts);
        })
        .catch(error => {
          throw error;
        });
    }
  };
  useEffect(() => {
    getAnalogsProducts(productItem);
  }, [productItem]);

  return (
    <Box>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        sx={{ mt: '68px', mb: '30px', fontSize: '36px', lineHeight: '42px', fontWeight: '700' }}
      >
        Аналоги
      </Typography>
      {analogProducts.length > 0 ? (
          {analogProducts
            .filter(element => element.id !== productItem.id)
            .map(element => (
              <Container>
                <ProductCard productItem={element} isInCart={isInCart} />
                </Container>
            ))}
      ) : (
        <Typography variant="body1">Наразі аналоги відсутні.</Typography>
      )}
    </Box>
  );
};

export default ProductAnalogiesCardContainer;
