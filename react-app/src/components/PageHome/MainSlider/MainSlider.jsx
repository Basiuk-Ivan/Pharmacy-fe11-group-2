import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import mainSlider2 from '../../../assets/mainSlider/mainSlider-2.png';
import { swiperStyles } from './style';
import { OralB } from './Item/OralB';
import 'swiper/swiper-bundle.min.css';
import './style/MainPaginationSlider.scss';

const MainSlider = () => (
  <Swiper
    style={swiperStyles}
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    loop
    navigation={{
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    }}
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
    <div className="swiper-button-prev" />
    <div className="swiper-button-next" />
    <div className="swiper-pagination custom-pagination" />
  </Swiper>
);

export default MainSlider;
