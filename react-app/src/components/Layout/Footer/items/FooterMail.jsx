import { Box, IconButton, Typography } from '@mui/material';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import {
  localPhoneIconStyle,
  mailOutlineIconStyles,
} from '../../ContactInfo/style/index';
import { descMail, footerMail, mail, mailStyle, phone, social } from '../style/index';

export const FooterMail = () => (
  <Box sx={footerMail}>
    <Box sx={mail}>
      <Link href="mailto:info@restoll.ua" target="_blank">
        <IconButton>
          <DraftsOutlinedIcon sx={mailOutlineIconStyles} />
        </IconButton>
      </Link>
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
      <Link href="tel:88007772233" target="_blank">
        <IconButton>
          <LocalPhoneOutlinedIcon sx={localPhoneIconStyle} />
        </IconButton>
      </Link>
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
      <Link href="https://www.facebook.com/" target="_blank">
        <IconButton>
          <FacebookIcon sx={{ fill: '#2FD3AE' }} />
        </IconButton>
      </Link>
      <Link href="https://www.instagram.com/" target="_blank">
        <IconButton>
          <InstagramIcon sx={{ fill: '#2FD3AE' }} />
        </IconButton>
      </Link>
      <Link href="https://www.youtube.com/" target="_blank">
        <IconButton>
          <YouTubeIcon sx={{ fill: '#2FD3AE' }} />
        </IconButton>
      </Link>
      <Link href="https://twitter.com/" target="_blank">
        <IconButton>
          <TwitterIcon sx={{ fill: '#2FD3AE' }} />
        </IconButton>
      </Link>
      <Link href="https://www.linkedin.com/" target="_blank">
        <IconButton>
          <LinkedInIcon sx={{ fill: '#2FD3AE' }} />
        </IconButton>
      </Link>
    </Box>
  </Box>
);
