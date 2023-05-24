import { useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

export const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button type="button" onClick={() => swiper.slidePrev()}>
      Slide to the PREV slide
    </button>
  );
};
