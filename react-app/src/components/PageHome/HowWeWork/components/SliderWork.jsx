import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { OrderForm } from './Items/OrderForm';
import { PharmacySelector } from './Items/PharmacySelector';
import { ProductSelector } from './Items/ProductSelector';
import { ReceiveProduct } from './Items/ReceiveProduct';
import 'swiper/swiper-bundle.min.css';
import './CustomSlider.scss';

export const SliderWorks = () => (
  <Swiper
    className="product-analogies-slider-work"
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    loop
    navigation
    scrollbar={false}
  >
    <SwiperSlide>
      <OrderForm />
    </SwiperSlide>
    <SwiperSlide>
      <PharmacySelector />
    </SwiperSlide>
    <SwiperSlide>
      <ProductSelector />
    </SwiperSlide>
    <SwiperSlide>
      <ReceiveProduct />
    </SwiperSlide>
    <div className="swiper-pagination custom-pagination2" />
  </Swiper>
);
