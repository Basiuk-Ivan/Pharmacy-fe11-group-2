import { Box, Typography, Stack } from '@mui/material';
import { EmployeesOver5000 } from './Items/EmployeesOver5000';
import { PharmaciesOver750 } from './Items/PharmaciesOver750';
import { UkraineCities80 } from './Items/UkraineCities80';
import { RealBigFamily } from './Items/RealBigFamily';
import { todayPharmacyStyles, itTypographyStyles, wrapperForItemStyles, stackStyles } from './style';

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
      <Stack direction="row" sx={stackStyles} flexWrap="wrap">
        <EmployeesOver5000 />
        <PharmaciesOver750 />
        <UkraineCities80 />
        <RealBigFamily />
      </Stack>
    </Box>
  </Box>
);

export default TodayPharmacy;
