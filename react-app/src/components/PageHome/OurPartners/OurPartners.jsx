import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import otpBank from '../../../assets/ourPartners/otpbank.png';
import parisBank from '../../../assets/ourPartners/paribasbank.png';
import paypal from '../../../assets/ourPartners/paypal.png';
import raiffeisen from '../../../assets/ourPartners/raiffeisen.png';
import yoomoney from '../../../assets/ourPartners/yoomoney.png';
import ziraatbank from '../../../assets/ourPartners/ziraatbank.png';
import { ourPartnersStyles, wrapperForGrid } from './style';

const imgOurPartners = [otpBank, parisBank, paypal, raiffeisen, yoomoney, ziraatbank];

const OurPartners = () => (
  <Box>
    <Box>
      <Typography fontFamily="Roboto" component="div" sx={ourPartnersStyles}>
        Наші партнери
      </Typography>
    </Box>
    <Box sx={wrapperForGrid}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        {imgOurPartners.map((img, index) => (
          <Grid item xs={1} sm={1} md={2} key={index}>
            <img src={img} alt={`bank-${index}`} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default OurPartners;
