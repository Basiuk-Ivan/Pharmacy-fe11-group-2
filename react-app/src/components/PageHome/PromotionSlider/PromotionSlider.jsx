import { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ProductCard from '../../ProductCard';
import { wrapperForPromotion, promotionStyles } from './style';
import 'swiper/swiper-bundle.min.css';
import './style/CustomSlider.scss';

const PromotionSlider = () => {
  const [products, setProducts] = useState([]);
  const [slidesPerView, setslidesPerView] = useState(null);
  // const { id, category } = useParams();

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = 'http://localhost:3004/api/product';
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const { prods } = await response.json();

        const promotionProducts = prods.filter(item => {
          const discount = (item.discount / item.price) * 100;
          return discount >= 5;
        });

        setProducts(promotionProducts);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (isXs) {
      setslidesPerView(1);
    } else if (isSm) {
      setslidesPerView(2);
    } else {
      setslidesPerView(3);
    }
  }, [isXs, isSm]);

  if (products.length === 0) {
    return null;
  }

  const randomIndexes = Array.from({ length: 8 }, () => Math.floor(Math.random() * products.length));

  const productItems = randomIndexes.map(index => products[index]);

  return (
    <Box>
      <Box sx={wrapperForPromotion}>
        <Typography fontFamily="Roboto" component="div" sx={promotionStyles}>
          Акції місяця
        </Typography>
      </Box>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        loop
        navigation
        pagination={{ clickable: true }}
        className="product-analogies-slider-promotion"
      >
        {productItems.map((product, index) => (
          <SwiperSlide key={index}>
            {/* <NavLink to={`/product/${product.id}`}> */}
            <ProductCard productItem={product} />
            {/* </NavLink> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default PromotionSlider;
