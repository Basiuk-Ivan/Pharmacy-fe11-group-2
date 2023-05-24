/* eslint-disable max-len */
import { Box, Typography } from '@mui/material';
import Card from './Card';
import { mainBoxStyles, typographyCreatyHistory, typographyHistoryDesc } from './style';

const CreationHistory = () => (
  <Box sx={mainBoxStyles}>
    <Box>
      <Typography fontFamily="Roboto" component="div" sx={typographyCreatyHistory}>
        Історія створення
      </Typography>
    </Box>
    <Box>
      <Typography fontFamily="Roboto" component="div" sx={typographyHistoryDesc}>
        Історія ГК НЕОФАРМ починалася 2000 року як невеликий сімейний бізнес - з відкриття кількох аптечних
        кіосків у Красногорському районі Московської області. А очолив його провізор, випускник першого мед.
        інституту ім. Сеченова - Євген Ніфантьєв. А 2013 року, на вулиці Толбухіна, було відкрито першу аптеку
        під брендом "Столички", до якої потягнулися не тільки місцеві жителі, а й люди з навколишніх
        мікрорайонів і навіть з підмосковного Одинцово. Стало зрозуміло, що формат соціальної аптеки
        затребуваний населенням і "Столички" стали відкриватися одна за одною, стрімко розширюючи географію
        присутності. xs=2 xs=2
      </Typography>
    </Box>
    <Card />
  </Box>
);

export default CreationHistory;
