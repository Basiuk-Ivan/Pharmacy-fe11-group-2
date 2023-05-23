import { Box, Typography, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { howWeWorkStyled, wrapperForItemStyled, stack } from './style';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const HowWeWork = () => (
  <Box>
    <Box>
      <Typography fontFamily="Roboto" component="div" sx={howWeWorkStyled}>
        Як ми працюємо?
      </Typography>
    </Box>
    <Box sx={wrapperForItemStyled}>
      <Stack direction="row" spacing={2} sx={stack}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
      </Stack>
    </Box>
  </Box>
);

export default HowWeWork;
