import { Box, Typography } from '@mui/material';

const MobileLogo = () => (
  <Box sx={{ display: { xs: 'none', flexDirection: 'column', sm: 'flex', md: 'none' } }}>
    <Typography
      fontFamily="Roboto"
      noWrap
      sx={{
        mr: 2,
        fontSize: 18,
        flexGrow: 1,
        color: '#011D71',
        textDecoration: 'none',
        lineHeight: 1
      }}
    >
      Аптека.онлайн
    </Typography>
    <Typography
      fontFamily="Roboto"
      noWrap
      sx={{
        mr: 2,
        fontSize: 14,
        flexGrow: 1,
        color: '#7894A4',
        textDecoration: 'none',
        lineHeight: 1
      }}
    >
      Ваша онлайн аптека
    </Typography>
  </Box>
);

export default MobileLogo;
