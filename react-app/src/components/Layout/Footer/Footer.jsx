import {Box, Container, Typography} from '@mui/material';
import {menuStyles, footer, footerImg, logoText, logoTextLt} from './style';
import logo from "../../../assets/footer_logo.svg";

const Footer = () => (
  <Box
    sx={menuStyles}
  >
    <Container sx={footer}>
    <Box>
      <Typography component="img" alt="Логотип" src={logo} sx={footerImg}></Typography>
      <Typography fontFamily="Roboto" component="p" sx={logoText}>
        Аптека.онлайн
      </Typography>
      <Typography fontFamily="Roboto" component="p" sx={logoTextLt}>
        Ваша онлайн аптека
      </Typography>
    </Box>
    <Box>dhdhdghdghdhdffddhdhd</Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    </Container>
  </Box>
);

export default Footer;
