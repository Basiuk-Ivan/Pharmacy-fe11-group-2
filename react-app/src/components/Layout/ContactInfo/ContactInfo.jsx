import { Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Link from '@mui/material/Link';

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
      <Link href="mailto:info@restoll.ua" target="_blank">
        <IconButton>
          <MailOutlineIcon sx={mailOutlineIconStyles} />
        </IconButton>
      </Link>
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
      <Link href="tel:88007772233" target="_blank">
        <IconButton>
          <LocalPhoneIcon sx={localPhoneIconStyle} />
        </IconButton>
      </Link>
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
