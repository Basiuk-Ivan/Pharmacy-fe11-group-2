import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { wrapForSocialMediaStyles, fillForIcaonStyles } from './style';

const SocialMediaButton = () => (
  <Box sx={wrapForSocialMediaStyles}>
    <IconButton>
      <FacebookIcon sx={fillForIcaonStyles} />
    </IconButton>
    <IconButton>
      <InstagramIcon sx={fillForIcaonStyles} />
    </IconButton>
    <IconButton>
      <YouTubeIcon sx={fillForIcaonStyles} />
    </IconButton>
  </Box>
);

export default SocialMediaButton;
