import { Box, Grid, Rating, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { bulletStyle, charactersStyle, mainBlockStyle, raitingStyles } from '../style';
import { updateRating } from '../../../../utils/ActionsWithProduct/updateRating';
import { roundRating } from '../../../../utils/ActionsWithProduct/roundRating';

const InformBlock = ({ productItem }) => {
  const [value, setValue] = useState(null);
  const [ratingClick, setRatingClick] = useState(true);
  const [activeSubstance, setActiveSubstance] = useState('');

  useEffect(() => {
    const arr = productItem.activeSubstance;
    setActiveSubstance(arr.join(', '));
    const roundedRating = roundRating(productItem);
    setValue(roundedRating);
  }, [productItem]);

  return (
    <Grid item xs={12} sm={7} lg={4} sx={{ bgcolor: '#ffffff', border: '1px solid red' }}>
      <Grid container sx={{ justifyContent: 'space-around' }}>
        <Grid item lg={7} sx={{ padding: '0 10px' }}>
          <Box sx={mainBlockStyle}>
            <Box sx={{ '& > legend': { mt: 2 } }}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                  if (ratingClick && newValue > 0) {
                    updateRating(productItem, newValue);
                    setRatingClick(false);
                  }
                }}
                sx={raitingStyles}
                disabled={!ratingClick}
              />
            </Box>
            <Typography
              color={productItem?.quantity > 0 ? '#2FD3AE' : '#910808'}
              sx={{ fontSize: '14px', fontWeight: '500' }}
            >
              {productItem?.quantity > 0 ? 'Є в наявності' : 'Відсутній'}
            </Typography>
            <Box sx={{ display: 'flex', gap: '3px' }}>
              <Typography variant="body1" sx={{ fontSize: '14px', color: '#7B818C' }}>
                Артикул:
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '14px', color: '#333333' }}>
                {productItem?.article}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ width: '100%' }}>
            <Typography variant="h4" sx={charactersStyle}>
              Характеристики
            </Typography>
            <Box>
              <Grid container sx={{ rowGap: '5px' }}>
                {[
                  { title: 'Виробник', itemValue: `${productItem?.manufacturer}` },
                  { title: 'Діюча речовина', itemValue: `${activeSubstance}` },
                  { title: 'Термін придатності', itemValue: `${productItem?.bestBeforeDate}` }
                ].map(({ title, itemValue }) => (
                  <Grid key={title} item xs={12} sx={{ mb: '5px' }}>
                    <Grid
                      container
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      gap={0.5}
                      sx={{ ml: '10px' }}
                    >
                      <Grid item>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <Typography component="span" variant="body1" sx={bulletStyle} />
                          <Typography
                            component="span"
                            variant="body1"
                            sx={{ fontSize: '14px', color: '#7B818C' }}
                          >
                            {title}:
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item fontFamily="Roboto" sx={{ fontSize: '14px' }}>
                        {itemValue}
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InformBlock;
