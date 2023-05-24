import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlidePrevButton } from './Button/SlidePrevButton';
import { SlideNextButton } from './Button/SlideNextButton';
import mainSlider1 from '../../../assets/mainSlider/mainSlider-1.png';
import mainSlider2 from '../../../assets/mainSlider/mainSlider-2.png';
import { swiperStyles } from './style';
import 'swiper/swiper-bundle.min.css';

const MainSlider = () => (
  <Swiper
    style={swiperStyles}
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    loop
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >
    <SlidePrevButton />
    <SwiperSlide>
      <img src={mainSlider1} alt="1" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={mainSlider2} alt="2" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={mainSlider1} alt="1" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={mainSlider2} alt="2" />
    </SwiperSlide>
    <SlideNextButton />
  </Swiper>
);

export default MainSlider;
