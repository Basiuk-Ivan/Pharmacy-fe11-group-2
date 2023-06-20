import { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Skeleton } from '@mui/material';
import { ProductSlider } from './Item/ProductSlider';
import 'swiper/swiper-bundle.min.css';
import './style/CustomSlider.scss';

const MainSlider = ({ products }) => {
  // const productItems = shuffleArray(products);

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
          {products.map(item => (
            <SwiperSlide key={item.id}>
              {/* <NavLink to={`/${product?.categories[0]}/${product?.id}`}> */}
              <ProductSlider product={item} />
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
