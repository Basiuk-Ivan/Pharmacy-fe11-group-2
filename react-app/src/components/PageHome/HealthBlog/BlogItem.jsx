import {blogDesc, blogImg, blogTitle, Item} from "./style/index.js";
import {Typography} from "@mui/material";

const BlogItem = ({ BlogImg, BlogImgName }) => (
  <Item>
    <Typography component="div" sx={blogImg}>
    <img src={BlogImg} alt={`post-${BlogImgName}`} />
    </Typography>
    <Typography component="p" sx={blogTitle}>
      Активне життя без "припливів" - все у ваших руках
    </Typography>
    <Typography component="p" sx={blogDesc}>
      І все ж природу обдурити неможливо, і майже кожна жінка після сорока років замислюється про наближення клімаксу.
    </Typography>
  </Item>
);

export default BlogItem;
