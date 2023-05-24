import { Typography, Box, Grid } from '@mui/material';
import { wrapForItemStyles, textPeriodStyles, textDescStyles } from '../../style';

export const Period2020to2022 = () => (
  <Grid item xs={4} sm={4} md={4}>
    <Box sx={wrapForItemStyles}>
      <Typography sx={textPeriodStyles} fontFamily="Roboto" component="div">
        2020-2022
      </Typography>
      <Typography sx={textDescStyles} fontFamily="Roboto" component="div">
        Аптека лідирувала на фармацевтичному ринку останні два роки. Кількість працівників зросла до 5000, а
        мережа аптек налічувала 755 закладів. Запровадження інноваційних послуг, таких як онлайн-консультації
        та доставка ліків, забезпечувало зручність та задоволення клієнтів.
      </Typography>
    </Box>
  </Grid>
);
