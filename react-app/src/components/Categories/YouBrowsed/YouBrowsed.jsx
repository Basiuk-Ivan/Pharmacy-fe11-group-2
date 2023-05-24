import { Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { CardTest } from '../cardTest';
import { requestTest } from '../../../tools/requestTest';

const response = await requestTest('./drinks.json');

function YouBrowsed() {
  // eslint-disable-next-line no-unused-vars
  const [youBrowsedCards, setYouBrowsedCards] = useState(response.slice(5, 10));

  return (
    <Box
      id="youBrowsed"
      sx={{
        margin: '75px 0 35px 0',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        id="youBrowsedTitleWrapper"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Typography
          sx={{
            color: '#333333',
            fontSize: '36px',
            fontWeight: '700'
          }}
        >
          Ви переглядали
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
        {youBrowsedCards.map(item => (
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
            <CardTest id={item.id} name={item.name} price={item.price} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default YouBrowsed;
