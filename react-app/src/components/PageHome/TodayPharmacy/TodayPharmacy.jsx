import { Box, Typography, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));
const TodayPharmacy = () => (
  <Box>
    <Box>
      <Typography
        fontFamily="Roboto"
        component="div"
        sx={{ fontSize: 24, fontWeight: 700, color: '#333333' }}
      >
        Сьогодні “Аптека”
      </Typography>
      <Typography fontFamily="Roboto" component="div" sx={{ fontSize: 18, color: '#828282' }}>
        це -
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
      <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', width: '100%' }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
      </Stack>
    </Box>
  </Box>
);

export default TodayPharmacy;
