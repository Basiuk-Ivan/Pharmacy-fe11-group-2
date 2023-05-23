import { Box, Typography, Stack } from '@mui/material';
import { todayPharmacyStyles, itTypographyStyles, wrapperForItemStyles, stackStyles, Item } from './style';

const TodayPharmacy = () => (
  <Box>
    <Box>
      <Typography fontFamily="Roboto" component="div" sx={todayPharmacyStyles}>
        Сьогодні “Аптека”
      </Typography>
      <Typography fontFamily="Roboto" component="div" sx={itTypographyStyles}>
        це -
      </Typography>
    </Box>
    <Box sx={wrapperForItemStyles}>
      <Stack direction="row" spacing={2} sx={stackStyles}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
      </Stack>
    </Box>
  </Box>
);

export default TodayPharmacy;
