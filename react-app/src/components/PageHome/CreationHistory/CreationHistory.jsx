import { Box, Typography } from '@mui/material';
import Cards from './Cards';
import { typographyCreatyHistory, typographyHistoryDesc } from './style';

const CreationHistory = () => (
  <Box>
    <Box>
      <Typography fontFamily="Roboto" component="div" sx={typographyCreatyHistory}>
        Історія створення
      </Typography>
    </Box>
    <Box>
      <Typography fontFamily="Roboto" component="div" sx={typographyHistoryDesc}>
        Історія ГК НЕОФАРМ починалася 2005 року як невеликий сімейний бізнес - з відкриття кількох аптечних
        кіосків у Волинській області. А очолив його провізор, випускник першого мед. інституту ім. Богомольця
        - Євген Ткаченко. А 2013 року, на вулиці Кравчука, було відкрито першу аптеку під брендом "Столичка",
        до якої потягнулися не тільки місцеві жителі, а й люди з навколишніх мікрорайонів і навіть з
        Ківерцівщини. Стало зрозуміло, що формат соціальної аптеки затребуваний населенням і "Столичка" стала
        відкриватися одна за одною, стрімко розширюючи географію присутності.
      </Typography>
    </Box>
    <Cards />
  </Box>
);

export default CreationHistory;
