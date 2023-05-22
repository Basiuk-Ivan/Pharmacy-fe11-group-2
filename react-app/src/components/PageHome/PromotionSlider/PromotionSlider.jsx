import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Box, Typography } from '@mui/material';
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
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

const PromotionSlider = () => (
  <Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography
        fontFamily="Roboto"
        component="div"
        sx={{ fontSize: 36, fontWeight: 700, color: '#333333' }}
      >
        Акції місяця
      </Typography>
    </Box>

    <Swiper
      style={{ height: '400px', backgroundColor: '#F6FBFA', marginBottom: '30px' }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SlidePrevButton />
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SlideNextButton />
    </Swiper>
  </Box>
);

export default PromotionSlider;
