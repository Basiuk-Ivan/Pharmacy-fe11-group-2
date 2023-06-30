import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../../../ProductCard';

export const SwiperPromotion = ({ randomProducts }) => {
  const [slidesPerView, setslidesPerView] = useState(null);
  const isSlider = true;

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));

  useEffect(() => {
    if (isXs) {
      setslidesPerView(1);
    } else if (isSm) {
      setslidesPerView(2);
    } else {
      setslidesPerView(3);
    }
  }, [isXs, isSm]);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      loop
      navigation
      pagination={{ clickable: true }}
      className="product-analogies-slider-promotion"
    >
      {randomProducts.map((product, index) => (
        <SwiperSlide key={index}>
          <NavLink to={`/${product?.categories[0]}/${product?.id}`}>
            <ProductCard productItem={product} isSlider={isSlider} />
          </NavLink>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
