import { IconButton, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialMediaButton = () => (
  <Box>
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
