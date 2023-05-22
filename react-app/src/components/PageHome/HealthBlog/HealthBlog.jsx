import { Box, Typography, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import selfTreatmentRisks from '../../../assets/healthBlog/samo.svg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '360px',
  height: '375px'
}));
const HealthBlog = () => (
  <>
    <Box>
      <Typography
        fontFamily="Roboto"
        component="div"
        sx={{ fontSize: 36, fontWeight: 700, color: '#333333' }}
      >
        Блог про здоровʼя
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
    <Box>
      <img src={selfTreatmentRisks} alt="Samo" />
    </Box>
  </>
);

export default HealthBlog;
