import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import otpBank from '../../../assets/ourPartners/otpbank.png';
import parisBank from '../../../assets/ourPartners/paribasbank.png';
import paypal from '../../../assets/ourPartners/paypal.png';
import raiffeisen from '../../../assets/ourPartners/raiffeisen.png';
import yoomoney from '../../../assets/ourPartners/yoomoney.png';
import ziraatbank from '../../../assets/ourPartners/ziraatbank.png';
import { SliderPartner } from './components/SliderPartner';
import { ourPartnersStyles } from './style';

const imgOurPartners = [otpBank, parisBank, paypal, raiffeisen, yoomoney, ziraatbank];

const OurPartners = () => (
  <Box>
    <Box>
      <Typography fontFamily="Roboto" component="div" sx={ourPartnersStyles}>
        Наші партнери
      </Typography>
    </Box>
    <SliderPartner />
    <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex' }, flexDirection: 'column' }}>
      <Grid container rowGap={2}>
        {imgOurPartners.map((img, index) => (
          <Grid item key={index}>
            <img style={{ width: '100%' }} src={img} alt={`bank-${index}`} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default OurPartners;
