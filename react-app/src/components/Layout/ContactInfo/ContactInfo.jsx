import { Box, IconButton, Typography } from '@mui/material';
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
        <Typography fontFamily="Roboto" component="span" sx={emailStyles}>
          info@restoll.UA
        </Typography>
        <Typography fontFamily="Roboto" component="span" sx={descriptionStyles}>
          Напишіть нам
        </Typography>
      </Box>
    </Box>
    <Box sx={wrapperForNumberPhoneStyles}>
      <IconButton>
        <LocalPhoneIcon sx={localPhoneIconStyle} />
      </IconButton>
      <Box sx={bodyForNumberPhoneStyles}>
        <Typography fontFamily="Roboto" component="span" sx={numberPhoneStyles}>
          8-800-777-22-33
        </Typography>
        <Typography fontFamily="Roboto" component="span" sx={numberPhoneDescStyles}>
          Цілодобово
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default ContactInfo;
