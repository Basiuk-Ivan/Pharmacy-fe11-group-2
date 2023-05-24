import { useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

export const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button type="button" onClick={() => swiper.slideNext()}>
      Slide to the next slide
    </button>
  );
};
