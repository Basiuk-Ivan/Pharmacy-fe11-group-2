import { Box, Button, Typography } from '@mui/material';
import {
  wrapForItemStyles,
  oralBTextStyles,
  descStyles,
  wrapForImgStyles,
  imgStyles,
  boxForText,
  buttonStyles
} from '../style';

export const ProductSlider = ({ product }) => {
  return (
    <Box sx={wrapForItemStyles}>
      <Box sx={boxForText}>
        <Box sx={oralBTextStyles}>{product?.name}</Box>
        <Typography sx={descStyles}>{product?.descriptionForSlider}</Typography>
        <Box>
          <Button sx={buttonStyles}>Перейти в каталог</Button>
        </Box>
      </Box>
      <Box sx={wrapForImgStyles}>
        <img style={imgStyles} src={product?.img[0]} alt="1" />
      </Box>
    </Box>
  );
};
