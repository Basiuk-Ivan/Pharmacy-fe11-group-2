import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import mainSlider1 from '../../../assets/mainSlider/mainSlider-1.png';
import mainSlider2 from '../../../assets/mainSlider/mainSlider-2.png';
import 'swiper/swiper-bundle.min.css';

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button type="button" onClick={() => swiper.slideNext()}>
      Slide to the next slide
    </button>
  );
};

const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button type="button" onClick={() => swiper.slidePrev()}>
      Slide to the PREV slide
    </button>
  );
};

const MainSlider = () => (
  <Swiper
    style={{ height: '600px', marginBottom: '25px', backgroundColor: '#F6FBFA' }}
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
