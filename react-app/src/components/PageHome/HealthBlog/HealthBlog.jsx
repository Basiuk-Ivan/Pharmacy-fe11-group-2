import { Box, Typography } from '@mui/material';
import {healthBlogStyled, wrapperForItem, stack, toBlog, blogTitle, Title, AfterBlogImg} from './style';
import selfTreatmentRisks from '../../../assets/healthBlog/samo.svg';
import doctor from '../../../assets/healthBlog/doctor.svg';
import BlogItem from "./BlogItem.jsx";
import hand from "../../../assets/healthBlog/hand.png";
import pigs from "../../../assets/healthBlog/pigs.png";
import jar from "../../../assets/healthBlog/jar.png";
import aveJar from "../../../assets/healthBlog/aveJar.png";

const blogImgs = {hand:hand,
                  pigs: pigs,
                    jar: jar,
                    aveJar: aveJar};

const HealthBlog = () => (
  <Box>
    <Box sx={Title}>
      <Typography fontFamily="Roboto" component="div" sx={healthBlogStyled}>
        Блог про здоровʼя
      </Typography>
      <Typography fontFamily="Roboto" sx={toBlog}>
        Нещодавні записи
      </Typography>
    </Box>
    <Box sx={wrapperForItem}>
      <Box sx={stack}>
        {Object.entries(blogImgs).map(([key, value]) => (
        <BlogItem BlogImg={value} BlogImgName={key}/>
        ))}
      </Box>
    </Box>
    <Box sx={AfterBlogImg}>
      <img style={{ width: '80%' }} src={selfTreatmentRisks} alt="Samo" />
      <img style={{ width: '80%' }} src={doctor} alt="doctor" />
    </Box>
  </Box>
);

export default HealthBlog;
