import { Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector } from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';

function PromoMonth() {
  const { products } = useSelector(state => state.products);
  const promoMonthCards = products.slice(0, 5);

  return (
    <Box
      id="promoMonth"
      sx={{
        margin: '75px 0 35px 0',
        display: 'flex',
        flexDirection: 'column',
      }}
    >

      <Box
        id="promoMonthTitleWrapper"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Typography sx={{
          color: '#333333',
          fontSize: '36px',
          fontWeight: '700'
        }}
        >
          Акції місяця
        </Typography>

        <Box
          id="promoMonthTitleSlider"
          sx={{
            display: 'flex',
            gap: '40px',
            alignItems: 'center',
            paddingRight: '20px'
          }}
        >
          <ArrowBackIosIcon fontSize="small" sx={{ cursor: 'pointer' }} />
          <ArrowForwardIosIcon fontSize="small" sx={{ cursor: 'pointer' }} />
        </Box>
      </Box>

      <Box
        id="cardsWrapper"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          marginBottom: '30px'
        }}
      >

        {promoMonthCards.map(item => (
          <Box
            id="cardWrapper"
            key={item.id}
            sx={{
              width: '206px',
              height: '300px',
              backgroundColor: '#c4c2cc',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 24,
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <ProductCard productItem={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default PromoMonth;
