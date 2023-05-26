import { Typography, Box, Grid } from '@mui/material';
import { wrapForItemStyles, textPeriodStyles, textDescStyles } from '../../style';

export const Period2005to2008 = () => (
  <Grid item xs={4} sm={4} md={4}>
    <Box sx={wrapForItemStyles}>
      <Typography sx={textPeriodStyles} fontFamily="Roboto" component="div">
        2005-2008
      </Typography>
      <Typography sx={textDescStyles} fontFamily="Roboto" component="div">
        Протягом цього періоду, Аптека поступово збільшувала свою присутність на ринку. Кількість працівників
        зросла до 100, а мережа аптек налічувала 15 закладів у різних містах України. Завдяки професійному
        підходу та якісному обслуговуванню, Аптека швидко завоювала довіру клієнтів та стала однією з
        найпопулярніших фармацевтичних мереж.
      </Typography>
    </Box>
  </Grid>
);
