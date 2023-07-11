import { Box, Typography } from '@mui/material';
import { footerLogo, logoFlex, logoFlexText, logoText, logoTextLt, logoWord, Right } from '../style/index';
import logo from '../../../../assets/footer/footer_logo.svg';

export const Logo = () => (
  <Box>
    <Typography fontFamily="Roboto" component="div" sx={logoFlex}>
      <Typography component="img" alt="Логотип" src={logo} sx={footerLogo} />
      <Typography fontFamily="Roboto" component="div" sx={logoFlexText}>
        <Typography fontFamily="Roboto" component="div" sx={logoText}>
          <Typography fontFamily="Roboto" component="b" sx={logoWord}>
            Аптека.
          </Typography>
          онлайн
          <Typography fontFamily="Roboto" component="div" sx={logoTextLt}>
            Ваша онлайн аптека
          </Typography>
        </Typography>
        <Typography fontFamily="Roboto" component="p" sx={Right}>
          Усі права захищені та
          <br /> охороняються законом
        </Typography>
      </Typography>
    </Typography>
  </Box>
);
