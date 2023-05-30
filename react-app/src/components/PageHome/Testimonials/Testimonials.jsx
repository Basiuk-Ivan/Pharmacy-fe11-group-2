import {Box, Button, Link, Rating, Typography} from '@mui/material';
import {
  ave,
  aveRate,
  aveText, btnFeed,
  feedBack, linkFeed,
  mainFeedback, StarRate,
  totalCountFeed,
  totalRate,
  wrapperForTestimonials
} from './style';
import React from "react";
import {FeedKyiv} from "./item/FeedKyiv.jsx";
import {FeedDnepr} from "./item/FeedDnepr.jsx";
import {FeedLviv} from "./item/FeedLviv.jsx";

const Testimonials = () => {
  return (<Box sx={wrapperForTestimonials}>
  <Typography fontFamily="Roboto" component="div" sx={mainFeedback}>
    <Typography fontFamily="Roboto" component="div" sx={ave}>
      <Typography fontFamily="Roboto" component="div" sx={aveText}>Середня <br/> оцінка <br/> аптеки
      </Typography>
      <Typography fontFamily="Roboto" component="div">
      <Typography fontFamily="Roboto" component="div" sx={aveRate}>4.8
      </Typography>
      <Rating name="half-rating" defaultValue={4} sx={StarRate} readOnly  />
      </Typography>
    </Typography>
    <Typography fontFamily="Roboto" component="div" sx={totalRate}>Общий рейтинг на основе 4349 <br/> отзывов наших покупателей
    </Typography>
    <Box>
    <Button variant="contained" sx={btnFeed}>Залишити відгук</Button>
    </Box>

  </Typography>
  <Typography fontFamily="Roboto" component="div" sx={feedBack}>
    <FeedKyiv/>
    <FeedDnepr/>
    <FeedLviv/>
    <Typography fontFamily="Roboto" component="div" sx={totalCountFeed}>
      <Link sx={linkFeed}>Все 4349 отзывов
      </Link>
    </Typography>

  </Typography>
</Box>
  );
};


export default Testimonials;
