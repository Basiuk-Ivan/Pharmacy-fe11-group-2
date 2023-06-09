import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { menuStyles, buttonStyles, navLinkStyles } from './style';

import { mainCategory } from '../../../redux/slice/filterBaseSlice';

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
    path: '/cardiovascular-system',
    // path: '/cardiovascularSystem',
  }
];

const Menu = () => {
  const dispatch = useDispatch();

  const choiceMainCategory = path => {
    dispatch(mainCategory(path.slice(1)));
  };

  return (
    <Box position="absolute" sx={menuStyles}>
      {pages.map(page => (
        <NavLink key={page.title} to={page.path} style={navLinkStyles}>
          {/* <Button sx={buttonStyles}>{page.title}</Button> */}
          <Button onClick={() => choiceMainCategory(page.path)} sx={buttonStyles}>{page.title}</Button>
        </NavLink>
      ))}
    </Box>
  );
};

export default Menu;
