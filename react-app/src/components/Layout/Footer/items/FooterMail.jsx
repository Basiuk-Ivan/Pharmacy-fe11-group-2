import { Box, IconButton, Typography } from '@mui/material';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  localPhoneIconStyle,
  mailOutlineIconStyles,
} from '../../ContactInfo/style/index';
import { descMail, footerMail, mail, mailStyle, phone, social } from '../style/index';

export const FooterMail = () => (
  <Box sx={footerMail}>
    <Box sx={mail}>
      <IconButton>
        <DraftsOutlinedIcon sx={mailOutlineIconStyles} />
      </IconButton>
      <Box>
        <Typography fontFamily="Roboto" component="p" sx={mailStyle}>
          info@restoll.UA
        </Typography>
        <Typography fontFamily="Roboto" component="p" sx={descMail}>
          Напишіть нам
        </Typography>
      </Box>
    </Box>
    <Box sx={phone}>
      <IconButton>
        <LocalPhoneOutlinedIcon sx={localPhoneIconStyle} />
      </IconButton>
      <Box>
        <Typography fontFamily="Roboto" component="p" sx={mailStyle}>
          8-800-777-22-33
        </Typography>
        <Typography fontFamily="Roboto" component="p" sx={descMail}>
          Цілодобово
        </Typography>
      </Box>
    </Box>
    <Box sx={social}>
      <IconButton>
        <FacebookIcon sx={{ fill: '#2FD3AE' }} />
      </IconButton>
      <IconButton>
        <InstagramIcon sx={{ fill: '#2FD3AE' }} />
      </IconButton>
      <IconButton>
        <YouTubeIcon sx={{ fill: '#2FD3AE' }} />
      </IconButton>
      <IconButton>
        <TwitterIcon sx={{ fill: '#2FD3AE' }} />
      </IconButton>
      <IconButton>
        <LinkedInIcon sx={{ fill: '#2FD3AE' }} />
      </IconButton>
    </Box>
  </Box>
);
