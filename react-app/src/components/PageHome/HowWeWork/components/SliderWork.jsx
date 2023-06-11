import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { OrderForm } from './Items/OrderForm';
import { PharmacySelector } from './Items/PharmacySelector';
import { ProductSelector } from './Items/ProductSelector';
import { ReceiveProduct } from './Items/ReceiveProduct';
import 'swiper/swiper-bundle.min.css';
import './slider.scss';

export const SliderWorks = () => (
  <Swiper
    className="swiper-wrap"
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
    <SwiperSlide className="swiper-slide-custom">
      <OrderForm />
    </SwiperSlide>
    <SwiperSlide className="swiper-slide-custom">
      <PharmacySelector />
    </SwiperSlide>
    <SwiperSlide className="swiper-slide-custom">
      <ProductSelector />
    </SwiperSlide>
    <SwiperSlide className="swiper-slide-custom">
      <ReceiveProduct />
    </SwiperSlide>
    <div className="swiper-button-prev" />
    <div className="swiper-button-next" />
    <div className="swiper-pagination custom-pagination2" />
  </Swiper>
);
