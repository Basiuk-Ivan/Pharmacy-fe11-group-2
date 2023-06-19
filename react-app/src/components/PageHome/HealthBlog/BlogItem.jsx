import { Typography, Box } from '@mui/material';
import { blogDesc, blogImg, blogTitle, Item } from './style/index';

const BlogItem = ({ BlogImg, BlogImgName, blogTitleText, blogDescriptionText }) => (
  <Item>
    <Typography component="div" sx={blogImg}>
      <img src={BlogImg} alt={`post-${BlogImgName}`} />
    </Typography>
    <Typography component="div" sx={blogTitle}>
      <Box>{blogTitleText}</Box>
    </Typography>
    <Typography component="div" sx={blogDesc}>
      {blogDescriptionText}
    </Typography>
  </Item>
);

export default BlogItem;
