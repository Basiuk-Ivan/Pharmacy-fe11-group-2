import { Box, Typography } from '@mui/material';
import { healthBlogStyled, wrapperForItem, stack, Title, AfterBlogImg } from './style';
import selfTreatmentRisks from '../../../assets/healthBlog/samo.svg';
import doctor from '../../../assets/healthBlog/doctor.svg';
import BlogItem from './BlogItem';
import hand from '../../../assets/healthBlog/hand.png';
import pigs from '../../../assets/healthBlog/pigs.png';
import jar from '../../../assets/healthBlog/jar.png';
import aveJar from '../../../assets/healthBlog/aveJar.png';

const blogImgs = { hand, pigs, jar, aveJar };
const blogTitleText = [
  '5 Простих Кроків до Здорового Життя',
  'Піклуйтесь про своє Здоровʼя. Поради:',
  'Здоровʼя в Гармонії: Інформація та Підказки',
  'Життя в Здоровʼї: Поради для Балансу та Енергії'
];

const blogDescriptionText = [
  'Дізнайтесь про пʼять простих кроків, які допоможуть вам жити здоровим і насолоджуватись повнотою життя.',
  'Отримайте цінні поради та рекомендації щодо догляду за своїм здоровʼям і піклуйтесь про себе.',
  'Наш блог надає інформацію та підказки, як зберігати гармонію у своєму здоровʼї та досягати високої якості життя.',
  'Дізнайтеся, як зберегти баланс та енергію, дотримуючись порад і рекомендацій, що пропонує наш блог про здоровʼя.'
];

const HealthBlog = () => (
  <Box>
    <Box sx={Title}>
      <Typography fontFamily="Roboto" component="div" sx={healthBlogStyled}>
        Блог про здоровʼя
      </Typography>
    </Box>
    <Box sx={wrapperForItem}>
      <Box sx={stack}>
        {Object.entries(blogImgs).map(([key, value], index) => (
          <BlogItem
            key={key}
            BlogImg={value}
            BlogImgName={key}
            blogTitleText={blogTitleText[index]}
            blogDescriptionText={blogDescriptionText[index]}
          />
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
