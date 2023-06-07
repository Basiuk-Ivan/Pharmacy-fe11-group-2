import { Box, Button, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { menuStyles, buttonStyles, navLinkStyles } from './style';
// import { Container } from '@mui/system';

const pages = [
  {
    title: 'Ліки від кашлю, застуди та грипу',
    path: '/cough-cold-flu'
  },
  {
    title: 'Знеболюючі',
    path: '/painkillers'
  },
  {
    title: 'Для нервової системи',
    path: '/nervous-system'
  },
  {
    title: 'Серцево-судинна система',
    path: '/cardiovascular-system'
  }
];

const Menu = () => (
  <Box sx={menuStyles}>
    <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
      {pages.map(page => (
        <NavLink key={page.title} to={page.path} style={navLinkStyles}>
          <Button sx={buttonStyles}>{page.title}</Button>
        </NavLink>
      ))}
    </Container>
  </Box>
);

export default Menu;
