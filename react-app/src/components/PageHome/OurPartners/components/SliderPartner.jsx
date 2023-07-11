import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import otpBank from '../../../../assets/ourPartners/otpbank.png';
import parisBank from '../../../../assets/ourPartners/paribasbank.png';
import paypal from '../../../../assets/ourPartners/paypal.png';
import raiffeisen from '../../../../assets/ourPartners/raiffeisen.png';
import yoomoney from '../../../../assets/ourPartners/yoomoney.png';
import ziraatbank from '../../../../assets/ourPartners/ziraatbank.png';
import 'swiper/swiper-bundle.min.css';
import './CustomSlider.scss';

export const SliderPartner = () => (
  <Swiper
    className="product-analogies-slider-partner"
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    loop
    navigation
    scrollbar={false}
  >
    <SwiperSlide>
      <img style={{ width: '80%' }} src={otpBank} alt={`bank-${otpBank}`} />
    </SwiperSlide>
    <SwiperSlide>
      <img style={{ width: '80%' }} src={parisBank} alt={`bank-${parisBank}`} />
    </SwiperSlide>
    <SwiperSlide>
      <img style={{ width: '80%' }} src={paypal} alt={`bank-${paypal}`} />
    </SwiperSlide>
    <SwiperSlide>
      <img style={{ width: '80%' }} src={raiffeisen} alt={`bank-${raiffeisen}`} />
    </SwiperSlide>
    <SwiperSlide>
      <img style={{ width: '80%' }} src={yoomoney} alt={`bank-${yoomoney}`} />
    </SwiperSlide>
    <SwiperSlide>
      <img style={{ width: '80%' }} src={ziraatbank} alt={`bank-${ziraatbank}`} />
    </SwiperSlide>

    <div className="swiper-pagination custom-pagination2" />
  </Swiper>
);
