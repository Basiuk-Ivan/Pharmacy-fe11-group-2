import { Box, Button, Typography } from '@mui/material';
import mainSlider1 from '../../../../assets/mainSlider/mainSlider-1.png';
import {
  wrapForItemStyles,
  oralBTextStyles,
  toothbrushTextStyles,
  descStyles,
  wrapForImgStyles,
  imgStyles,
  boxForText,
  buttonStyles
} from '../style';

export const OralB = () => (
  <Box sx={wrapForItemStyles}>
    <Box sx={boxForText}>
      <Box sx={oralBTextStyles}>
        Oral-b vitality
        <Typography sx={toothbrushTextStyles}>Eлектрична зубна щітка</Typography>
      </Box>
      <Typography sx={descStyles}>
        Клінічно доведено, що електрична зубна щітка ефективніше очищує порожнину рота порівняно зі звичайною
        зубною щіткою.
      </Typography>
      <Box>
        <Button sx={buttonStyles}>Перейти в каталог</Button>
      </Box>
    </Box>
    <Box sx={wrapForImgStyles}>
      <img style={imgStyles} src={mainSlider1} alt="1" />
    </Box>
  </Box>
);
