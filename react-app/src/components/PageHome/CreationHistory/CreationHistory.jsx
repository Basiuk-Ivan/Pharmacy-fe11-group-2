/* eslint-disable max-len */
import { Box, Typography } from '@mui/material';
import Card from './Card';

const CreationHistory = () => (
  <Box sx={{ background: '#F7FAFB', padding: '88px 60px 50px', marginBottom: '30px', marginTop: '20px' }}>
    <Box>
      <Typography
        fontFamily="Roboto"
        component="div"
        sx={{ fontSize: 36, fontWeight: 700, color: '#333333' }}
      >
        Історія створення
      </Typography>
    </Box>
    <Box>
      <Typography fontFamily="Roboto" component="div" sx={{ fontSize: 18, color: '#828282' }}>
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
