import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { OralB } from './Item/OralB';
import 'swiper/swiper-bundle.min.css';
import './style/CustomSlider.scss';

const MainSlider = () => (
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
    <SwiperSlide>
      <OralB />
    </SwiperSlide>
    <SwiperSlide>
      <OralB />
    </SwiperSlide>
    <SwiperSlide>
      <OralB />
    </SwiperSlide>
    <SwiperSlide>
      <OralB />
    </SwiperSlide>
    <div className="swiper-pagination custom-pagination" />
  </Swiper>
);

export default MainSlider;
