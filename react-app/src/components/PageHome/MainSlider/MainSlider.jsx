import { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Skeleton, Stack, Box } from '@mui/material';
import { ProductSlider } from './Item/ProductSlider';
import 'swiper/swiper-bundle.min.css';
import './style/CustomSlider.scss';
import shuffleArray from '../../../tools/shuffleArray';

const MainSlider = ({ products }) => {
  const productItems = shuffleArray(products);

  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (products.length === 0) {
    return null;
  }

  return (
    <>
      <Swiper
        className="product-analogies-slider-main"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        scrollbar={false}
      >
        {productItems.map(item => (
          <SwiperSlide key={item.id}>
            <ProductSlider product={item} />
          </SwiperSlide>
        ))}

        <div className="swiper-pagination custom-pagination" />
      </Swiper>
    </>
  );
};

export default MainSlider;
