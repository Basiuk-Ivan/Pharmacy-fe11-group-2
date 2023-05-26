import { Typography, Box, Grid } from '@mui/material';
import { wrapForItemStyles, textPeriodStyles, textDescStyles } from '../../style';

export const Period2016to2018 = () => (
  <Grid item xs={4} sm={4} md={4}>
    <Box sx={wrapForItemStyles}>
      <Typography sx={textPeriodStyles} fontFamily="Roboto" component="div">
        2016-2018
      </Typography>
      <Typography sx={textDescStyles} fontFamily="Roboto" component="div">
        За цей дворічний період, Аптека продовжувала своє зростання. Кількість працівників збільшилась до
        3000, а мережа аптек нараховувала 500 закладів, охоплюючи все більше міст. Аптека активно
        співпрацювала з громадськими організаціями та брала участь у благодійних акціях, допомагаючи тим, хто
        найбільше потребує підтримки.
      </Typography>
    </Box>
  </Grid>
);
