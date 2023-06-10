import { Box, Typography,  useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import ProductCard from '../../ProductCard';

import 'swiper/swiper-bundle.min.css';
import './CustomSwiper.scss';

const ProductAnalogiesCardContainer = ({ productItem }) => {
  const isInCart = false;
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));

  let slidesPerView = 1;
  if (isXs) {
    slidesPerView = 1;
  } else if (isSm) {
    slidesPerView = 1;
  } else if (isMd) {
    slidesPerView = 2;
  } else if (isLg) {
    slidesPerView = 3;
  }


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
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        scrollbar={false}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        navigation
        centeredSlides
        loop
        slidesOffsetBefore={45}
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
