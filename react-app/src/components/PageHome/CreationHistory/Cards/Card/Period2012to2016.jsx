import { Typography, Box, Grid } from '@mui/material';
import { wrapForItemStyles, textPeriodStyles, textDescStyles } from '../../style';

export const Period2012to2016 = () => (
  <Grid item xs={4} sm={4} md={4}>
    <Box sx={wrapForItemStyles}>
      <Typography sx={textPeriodStyles} fontFamily="Roboto" component="div">
        2012-2016
      </Typography>
      <Typography sx={textDescStyles} fontFamily="Roboto" component="div">
        Протягом цього чотирирічного періоду, Аптека зміцнила свою позицію на ринку. Кількість працівників
        збільшилась до 2000, а мережа аптек нараховувала 400 закладів у різних містах України. Аптека активно
        співпрацювала з лікарями та проводила безкоштовні консультації для своїх клієнтів, спрямовуючи їх на
        правильний шлях до поліпшення здоров'я.
      </Typography>
    </Box>
  </Grid>
);
