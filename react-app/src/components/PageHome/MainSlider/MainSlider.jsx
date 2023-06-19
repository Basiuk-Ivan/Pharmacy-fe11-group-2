import { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Skeleton } from '@mui/material';
import { ProductSlider } from './Item/ProductSlider';
import 'swiper/swiper-bundle.min.css';
import './style/CustomSlider.scss';

const MainSlider = ({ products }) => {
  const randomIndexes = Array.from({ length: 4 }, () => Math.floor(Math.random() * products.length));
  const productItems = randomIndexes.map(index => products[index]);

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
          className="product-analogies-slider-main"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          scrollbar={false}
        >
          {productItems.map((product, index) => (
            <SwiperSlide key={index}>
              {/* <NavLink to={`/${product?.categories[0]}/${product?.id}`}> */}
              <ProductSlider product={product} />
              {/* </NavLink> */}
            </SwiperSlide>
          ))}

          <div className="swiper-pagination custom-pagination" />
        </Swiper>
      )}
    </>
  );
};

export default MainSlider;
