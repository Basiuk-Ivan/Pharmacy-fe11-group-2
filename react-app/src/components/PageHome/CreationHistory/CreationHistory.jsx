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
        История ГК НЕОФАРМ начиналась в 2000 году как небольшой семейный бизнес – с открытия нескольких
        аптечных киосков в Красногорском районе Московской области. А возглавил его провизор, выпускник
        первого мед.института им. Сеченова - Евгений Нифантьев. А в 2013 году, на улице Толбухина, была
        открыта первая аптека под брендом «Столички», в которую потянулись не только местные жители, но и люди
        из окрестных микрорайонов и даже подмосковного Одинцово. Стало понятно, что формат социальной аптеки
        востребован населением и «Столички» стали открываться одна за одной, стремительно расширяя географию
        присутствия.
      </Typography>
    </Box>
    <Card />
  </Box>
);

export default CreationHistory;
