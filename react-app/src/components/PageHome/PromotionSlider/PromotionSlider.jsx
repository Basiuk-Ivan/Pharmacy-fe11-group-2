import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography, useMediaQuery, useTheme, Skeleton } from '@mui/material';
import ProductCard from '../../ProductCard';
import { request } from '../../../tools/request';

import 'swiper/swiper-bundle.min.css';
import { wrapperForPromotion, promotionStyles } from './style';
import './style/CustomSlider.scss';

const PromotionSlider = () => {
  const [products, setProducts] = useState([]);
  const [slidesPerView, setslidesPerView] = useState(null);
  const [showSkeleton, setShowSkeleton] = useState(true);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { result } = await request({
          url: '',
          method: 'GET',
          params: { promotionOfTheMonth: true }
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
    if (isXs) {
      setslidesPerView(1);
    } else if (isSm) {
      setslidesPerView(2);
    } else {
      setslidesPerView(3);
    }
  }, [isXs, isSm]);

  if (products.length === 0) {
    return null;
  }

  const randomIndexes = Array.from({ length: 8 }, () => Math.floor(Math.random() * products.length));

  const productItems = randomIndexes.map(index => products[index]);

  const isSlider = true;

  return (
    <Box>
      <Box sx={wrapperForPromotion}>
        <Typography fontFamily="Roboto" component="div" sx={promotionStyles}>
          Акції місяця
        </Typography>
      </Box>

      {showSkeleton ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={slidesPerView}
          loop
          navigation
          pagination={{ clickable: true }}
          className="product-analogies-slider-promotion"
        >
          {productItems.map((product, index) => (
            <SwiperSlide key={index}>
              <NavLink to={`/${product?.categories[0]}/${product?.id}`}>
                <ProductCard productItem={product} isSlider={isSlider} />
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
};

export default PromotionSlider;
