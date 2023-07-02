import { Box, Button, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { mainCategory } from '../../../redux/slice/filterBaseSlice';

import { menuStyles, buttonStyles, navLinkStyles } from './style';

const Menu = () => {
  const filterBase = useSelector(state => state.filterBase);
  const dispatch = useDispatch();

  const pages = [
    {
      title: 'Ліки від кашлю, застуди та грипу',
      path: '/cough-cold-flu',
      req: `product?page=1&categories=cough-cold-flu&sort=1&limit=${filterBase.limit}`
    },
    {
      title: 'Знеболюючі',
      path: '/painkillers',
      req: `product?page=1&categories=painkillers&sort=1&limit=${filterBase.limit}`
    },
    {
      title: 'Для нервової системи',
      path: '/nervous-system',
      req: `product?page=1&categories=nervous-system&sort=1&limit=${filterBase.limit}`
    },
    {
      title: 'Серцево-судинна система',
      path: '/cardiovascular-system',
      req: `product?page=1&categories=cardiovascular-system&sort=1&limit=${filterBase.limit}`
    }
  ];

  const choiceMainCategory = path => {
    dispatch(mainCategory(path.slice(1)));
    sessionStorage.setItem('currentCategory', path.slice(1));
    sessionStorage.removeItem('accordionsData');
  };

  return (
    <Box sx={menuStyles}>
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {pages.map(page => (
          <NavLink key={page.title} to={page.req} style={navLinkStyles}>
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
