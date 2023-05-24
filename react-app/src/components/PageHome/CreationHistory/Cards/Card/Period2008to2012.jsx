import { Typography, Box, Grid } from '@mui/material';
import { wrapForItemStyles, textPeriodStyles, textDescStyles } from '../../style';

export const Period2008to2012 = () => (
  <Grid item xs={4} sm={4} md={4}>
    <Box sx={wrapForItemStyles}>
      <Typography sx={textPeriodStyles} fontFamily="Roboto" component="div">
        2008-2012
      </Typography>
      <Typography sx={textDescStyles} fontFamily="Roboto" component="div">
        За наступні чотири роки, Аптека продовжувала активний розвиток. Кількість працівників зросла до 1000,
        а мережа аптек збільшилась до 200, охоплюючи більше міст. У цей період Аптека активно співпрацювала з
        медичними установами та фармацевтичними компаніями, впроваджуючи новітні технології та інноваційні
        методи лікування.
      </Typography>
    </Box>
  </Grid>
);
