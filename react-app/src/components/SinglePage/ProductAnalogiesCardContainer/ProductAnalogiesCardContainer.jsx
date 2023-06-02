import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import ProductCard from '../../ProductCard/index';
import s from './ProductAnalogiesCardContainer.module.scss';

import 'swiper/swiper-bundle.min.css';

const ProductAnalogiesCardContainer = ({ goods }) => {
  const isInCart = true;

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
        spaceBetween={10}
        slidesPerView={3}
        navigation
        centeredSlides
        loop
        className={s.container}
        slidesOffsetBefore={45}
      >
        <SwiperSlide>
          <ProductCard productItem={goods} isInCart={isInCart} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard productItem={goods} isInCart={isInCart} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard productItem={goods} isInCart={isInCart} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard productItem={goods} isInCart={isInCart} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard productItem={goods} isInCart={isInCart} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard productItem={goods} isInCart={isInCart} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard productItem={goods} isInCart={isInCart} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard productItem={goods} isInCart={isInCart} />
        </SwiperSlide>
      </Swiper>

      {/* <Grid container sx={{}}> */}
      {/*  <Grid item lg={12}> */}
      {/*    <Grid container spacing={4} sx={{}}> */}
      {/*      <Grid item lg={3}> */}
      {/*        <ProductCard productItem={goods} /> */}
      {/*      </Grid> */}
      {/*      <Grid item lg={3}> */}
      {/*        <ProductCard productItem={goods} /> */}
      {/*      </Grid> */}
      {/*      <Grid item lg={3}> */}
      {/*        <ProductCard productItem={goods} /> */}
      {/*      </Grid> */}
      {/*      <Grid item lg={3}> */}
      {/*        <ProductCard productItem={goods} /> */}
      {/*      </Grid> */}
      {/*    </Grid> */}

      {/*  </Grid> */}
      {/* </Grid> */}
    </Box>
  );
};

export default ProductAnalogiesCardContainer;
