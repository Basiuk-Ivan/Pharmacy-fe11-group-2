import { Box, Typography, Stack } from '@mui/material';
import { healthBlogStyled, wrapperForItem, stack, Item } from './style';
import selfTreatmentRisks from '../../../assets/healthBlog/samo.svg';

const HealthBlog = () => (
  <Box>
    <Box>
      <Typography fontFamily="Roboto" component="div" sx={healthBlogStyled}>
        Блог про здоровʼя
      </Typography>
    </Box>
    <Box sx={wrapperForItem}>
      <Stack direction="row" spacing={2} sx={stack}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
      </Stack>
    </Box>
    <Box>
      <img style={{ width: '100%' }} src={selfTreatmentRisks} alt="Samo" />
    </Box>
  </Box>
);

export default HealthBlog;
