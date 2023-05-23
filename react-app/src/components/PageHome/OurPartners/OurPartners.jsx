import { Box, Typography } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ourPartnersStyles, wrapperForGrid } from './style';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const OurPartners = () => (
  <Box>
    <Box>
      <Typography fontFamily="Roboto" component="div" sx={ourPartnersStyles}>
        Наші партнери
      </Typography>
    </Box>
    <Box sx={wrapperForGrid}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        {Array.from(Array(12)).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid item xs={1} sm={1} md={2} key={index}>
            <Item>xs=1</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default OurPartners;
