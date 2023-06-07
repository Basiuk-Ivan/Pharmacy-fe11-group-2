import { Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const ContactInfo = () => (
  <Box sx={{ display: { xs: 'none', md: 'flex', flexWrap: 'wrap', gap: '10px' } }}>
    <Box sx={{ display: 'flex' }}>
      <IconButton>
        <MailOutlineIcon sx={{ fill: '#2FD3AE' }} />
      </IconButton>
      <Box sx={{ display: { xs: 'flex', flexDirection: 'column' } }}>
        <Typography sx={{ fontSize: 18, color: '#011D71' }} fontFamily="Roboto" component="span">
          info@restoll.UA
        </Typography>
        <Typography sx={{ fontSize: 11, color: '#7894A4' }} fontFamily="Roboto" component="span">
          Напишіть нам
        </Typography>
      </Box>
    </Box>
    <Box sx={{ display: 'flex' }}>
      <IconButton>
        <LocalPhoneIcon sx={{ fill: '#2FD3AE' }} />
      </IconButton>
      <Box sx={{ display: { xs: 'flex', flexDirection: 'column' } }}>
        <Typography sx={{ fontSize: 18, color: '#011D71' }} fontFamily="Roboto" component="span">
          8-800-777-22-33
        </Typography>
        <Typography sx={{ fontSize: 11, color: '#7894A4' }} fontFamily="Roboto" component="span">
          Цілодобово
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default ContactInfo;
