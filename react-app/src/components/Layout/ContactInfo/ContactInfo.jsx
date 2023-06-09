import { Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import {
  mainBoxStyles,
  wrapperBoxStyles,
  mailOutlineIconStyles,
  wrapperForTextStyles,
  emailStyles,
  descriptionStyles,
  wrapperForNumberPhoneStyles,
  localPhoneIconStyle,
  bodyForNumberPhoneStyles,
  numberPhoneStyles,
  numberPhoneDescStyles
} from './style';

const ContactInfo = () => (
  <Box sx={mainBoxStyles}>
    <Box sx={wrapperBoxStyles}>
      <IconButton>
        <MailOutlineIcon sx={mailOutlineIconStyles} />
      </IconButton>
      <Box sx={wrapperForTextStyles}>
        <Typography sx={emailStyles} fontFamily="Roboto" component="span">
          info@restoll.UA
        </Typography>
        <Typography sx={descriptionStyles} fontFamily="Roboto" component="span">
          Напишіть нам
        </Typography>
      </Box>
    </Box>
    <Box sx={wrapperForNumberPhoneStyles}>
      <IconButton>
        <LocalPhoneIcon sx={localPhoneIconStyle} />
      </IconButton>
      <Box sx={bodyForNumberPhoneStyles}>
        <Typography sx={numberPhoneStyles} fontFamily="Roboto" component="span">
          8-800-777-22-33
        </Typography>
        <Typography sx={numberPhoneDescStyles} fontFamily="Roboto" component="span">
          Цілодобово
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default ContactInfo;
