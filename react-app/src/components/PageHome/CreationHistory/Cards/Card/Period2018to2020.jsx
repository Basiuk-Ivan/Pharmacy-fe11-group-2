import { Typography, Box, Grid } from '@mui/material';
import { wrapForItemStyles, textPeriodStyles, textDescStyles } from '../../style';

export const Period2018to2020 = () => (
  <Grid item xs={4} sm={4} md={4}>
    <Box sx={wrapForItemStyles}>
      <Typography sx={textPeriodStyles} fontFamily="Roboto" component="div">
        2018-2020
      </Typography>
      <Typography sx={textDescStyles} fontFamily="Roboto" component="div">
        У цей період, Аптека продовжувала свій успішний розвиток. Кількість працівників зросла до 4000, а
        мережа аптек розширилась до 600, надаючи послуги у різних містах України. Аптека активно впроваджувала
        програми здорового способу життя, проводила освітні заходи для своїх клієнтів з метою підвищення
        свідомості щодо здоров'я.
      </Typography>
    </Box>
  </Grid>
);
