import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { SkeletonPromotionSlider } from '../../../utils/Skeleton/SkeletonPromotionSlider';
import { SwiperPromotion } from './components/SwiperPromotion';
import shuffleArray from '../../../tools/shuffleArray';
import { wrapperForPromotion, promotionStyles } from './style';
import 'swiper/swiper-bundle.min.css';
import './style/CustomSlider.scss';

const PromotionSlider = ({ products }) => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const shuffledProducts = shuffleArray(products);
    const slicedProducts = shuffledProducts;

    setRandomProducts(slicedProducts);
  }, [products]);

  return (
    <Box>
      <Box sx={wrapperForPromotion}>
        <Typography fontFamily="Roboto" component="div" sx={promotionStyles}>
          Акції місяця
        </Typography>
      </Box>
      {showSkeleton ? <SkeletonPromotionSlider /> : <SwiperPromotion randomProducts={randomProducts} />}
    </Box>
  );
};

export default PromotionSlider;
