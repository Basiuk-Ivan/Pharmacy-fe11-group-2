import { Box, Container } from '@mui/material';
import {
  footer,
  background
} from './style';
import { Logo } from './items/Logo';
import { AboutCompanyList } from './items/AboutCompanyList';
import { FeedBackList } from './items/FeedBackList';
import { FooterMail } from './items/FooterMail';
import { DescComp } from './items/DescComp';

const Footer = () => (
  <Box
    sx={background}
  >
    <Container sx={footer}>
      <Logo />
      <AboutCompanyList />
      <FeedBackList />
      <FooterMail />
      <DescComp />
    </Container>
  </Box>
);

export default Footer;
