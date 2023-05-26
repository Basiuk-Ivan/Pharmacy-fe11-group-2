import {Box, Container, Typography} from '@mui/material';
import {
  footer,
 background
} from './style';
import {Logo} from "./items/Logo.jsx";
import {AboutCompanyList} from "./items/AboutCompanyList.jsx";
import {FeedBackList} from "./items/FeedBackList.jsx";
import {FooterMail} from "./items/FooterMail.jsx";
import {DescComp} from "./items/DescComp.jsx";

const Footer = () => (
  <Box
    sx={background}
  >
    <Container sx={footer}>
    <Logo/>
    <AboutCompanyList/>
    <FeedBackList/>
    <FooterMail/>
    <DescComp/>
    </Container>
  </Box>
);

export default Footer;
