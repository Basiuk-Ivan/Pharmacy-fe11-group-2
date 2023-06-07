import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialMediaButton = () => (
  <Box sx={{ display: { xs: 'none', md: 'flex', flexWrap: 'wrap' } }}>
    <IconButton>
      <FacebookIcon sx={{ fill: '#2FD3AE' }} />
    </IconButton>
    <IconButton>
      <InstagramIcon sx={{ fill: '#2FD3AE' }} />
    </IconButton>
    <IconButton>
      <YouTubeIcon sx={{ fill: '#2FD3AE' }} />
    </IconButton>
  </Box>
);

export default SocialMediaButton;
