import {Box, Typography} from '@mui/material';
import {
  ave,
  aveRate,
  aveText,
  feedBack,
  feedBackItem,
  mainFeedback,
  totalCountFeed,
  totalRate,
  wrapperForTestimonials
} from './style';
import {healthBlogStyled} from "../HealthBlog/style/index.js";

const Testimonials = () => <Box sx={wrapperForTestimonials}>
  <Typography fontFamily="Roboto" component="div" sx={mainFeedback}>
    <Typography fontFamily="Roboto" component="div" sx={ave}>
      <Typography fontFamily="Roboto" component="div" sx={aveText}>
      </Typography>
      <Typography fontFamily="Roboto" component="div" sx={aveRate}>
      </Typography>
    </Typography>
    <Typography fontFamily="Roboto" component="div" sx={totalRate}>
    </Typography>

  </Typography>
  <Typography fontFamily="Roboto" component="div" sx={feedBack}>
    <Typography fontFamily="Roboto" component="div" sx={feedBackItem}>

    </Typography>
    <Typography fontFamily="Roboto" component="div" sx={feedBackItem}>

    </Typography>
    <Typography fontFamily="Roboto" component="div" sx={feedBackItem}>

    </Typography>
    <Typography fontFamily="Roboto" component="div" sx={totalCountFeed}>

    </Typography>

  </Typography>
</Box>;

export default Testimonials;
