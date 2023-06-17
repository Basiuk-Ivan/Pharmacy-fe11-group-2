import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../ProductCard';
import 'swiper/swiper-bundle.min.css';
import './CustomSwiper.scss';

const ProductAnalogiesCardContainer = ({ productItem }) => {
  const isInCart = false;
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));

  const [slidesPerView, setSlidesPerView] = useState(null);
  const [analogProducts, setAnalogProducts] = useState([]);

  useEffect(() => {
    if (isXs) {
      setSlidesPerView(1);
    } else if (isSm) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  }, [isXs, isSm]);

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
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={slidesPerView}
          navigation
          loop
          className="product-analogies-slider"
        >
          {analogProducts
            .filter(element => element.id !== productItem.id)
            .map(element => (
              <SwiperSlide key={element.id}>
                <ProductCard productItem={element} isInCart={isInCart} />
              </SwiperSlide>
            ))}
        </Swiper>
      ) : (
        <Typography variant="body1">No analog products found.</Typography>
      )}
    </Box>
  );
};

export default ProductAnalogiesCardContainer;
