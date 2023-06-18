import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import {wrapForSocialMediaStyles, fillForIcaonStyles} from './style';
import Link from '@mui/material/Link';

const SocialMediaButton = () => (
    <Box sx={wrapForSocialMediaStyles}>
        <Link href="https://www.facebook.com/" target="_blank">
            <IconButton>
                <FacebookIcon sx={fillForIcaonStyles}/>
            </IconButton>
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
            <IconButton>
                <InstagramIcon sx={fillForIcaonStyles}/>
            </IconButton>
        </Link>
        <Link href="https://www.youtube.com/" target="_blank">
            <IconButton>
                <YouTubeIcon sx={fillForIcaonStyles}/>
            </IconButton>
        </Link>
    </Box>
);

export default SocialMediaButton;
