import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import ProductCard from '../../ProductCard';
import 'swiper/swiper-bundle.min.css';
import './CustomSwiper.scss';
import {useEffect, useState} from "react";

const ProductAnalogiesCardContainer = ({ productItem }) => {
  const isInCart = false;
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));

  const[slidesPerView, setslidesPerView] = useState(null);
  const setSlides = () => {
      if (isXs) {
          setslidesPerView(1)
      } else if (isSm) {
          setslidesPerView(2)
      }  else {
          setslidesPerView(3)
      }
  }

    useEffect(() => {
        setSlides()
    }, [isXs, isSm]);


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
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={slidesPerView}
        navigation
        loop
        className="product-analogies-slider"
      >
        <SwiperSlide>
          <ProductCard productItem={productItem} isInCart={isInCart} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard productItem={productItem} isInCart={isInCart} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard productItem={productItem} isInCart={isInCart} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard productItem={productItem} isInCart={isInCart} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard productItem={productItem} isInCart={isInCart} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard productItem={productItem} isInCart={isInCart} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard productItem={productItem} isInCart={isInCart} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard productItem={productItem} isInCart={isInCart} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default ProductAnalogiesCardContainer;
