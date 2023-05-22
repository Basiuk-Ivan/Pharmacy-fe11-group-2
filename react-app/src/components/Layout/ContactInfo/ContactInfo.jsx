import { Box, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const ContactInfo = () => (
  <Box
    sx={{
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <MailOutlineIcon sx={{ fill: '#2FD3AE' }} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography fontFamily="Roboto" component="span" sx={{ fontSize: 18, color: '#011D71' }}>
          info@restoll.UA
        </Typography>
        <Typography fontFamily="Roboto" component="span" sx={{ fontSize: 11, color: '#7894A4' }}>
          Напишіть нам
        </Typography>
      </Box>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <LocalPhoneIcon sx={{ fill: '#2FD3AE' }} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography fontFamily="Roboto" component="span" sx={{ fontSize: 18, color: '#011D71' }}>
          8-800-777-22-33
        </Typography>
        <Typography fontFamily="Roboto" component="span" sx={{ fontSize: 11, color: '#7894A4' }}>
          Цілодобово
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default ContactInfo;
