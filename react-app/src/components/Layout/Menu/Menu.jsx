import { Box, Button, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { mainCategory } from '../../../redux/slice/filterBaseSlice';

import { menuStyles, buttonStyles, navLinkStyles } from './style';

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

const Menu = () => {
  const dispatch = useDispatch();

  const choiceMainCategory = path => {
    dispatch(mainCategory(path.slice(1)));
    sessionStorage.setItem('currentCategory', path.slice(1));
  };

  return (
    <Box sx={menuStyles}>
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {pages.map(page => (
          <NavLink key={page.title} to={page.path} style={navLinkStyles}>
            <Button onClick={() => choiceMainCategory(page.path)} sx={buttonStyles}>
              {page.title}
            </Button>
          </NavLink>
        ))}
      </Container>
    </Box>
  );
};
export default Menu;
