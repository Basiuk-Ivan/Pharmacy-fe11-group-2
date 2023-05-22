import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
// import DiscountBanner from './DiscountBanner';

const pages = [
  'Ліки від кашлю, застуди та грипу',
  'Знеболюючі',
  'Для нервової системи',
  'Серцево-судинна система'
];

const menuStyle = {
  flexGrow: 1,
  display: { xs: 'none', md: 'flex' },
  justifyContent: 'center',
  gap: '100px',
  background: 'linear-gradient(45deg, #011D71 30%, #2FD3BD 90%)',
  top: '75px',
  width: '100%',
  // тут підпрвити
  '@media (max-width: 959.95px)': {
    display: 'block'
  }
};

const Menu = () => (
  <>
    {/* <Box> */}
    <Box position="absolute" sx={menuStyle}>
      {pages.map(page => (
        <NavLink key={page} to="/post" style={{ textDecoration: 'none' }}>
          <Button sx={{ my: 2, color: 'white', display: 'block' }}>{page}</Button>
        </NavLink>
      ))}
    </Box>
    {/* <Box>
      <DiscountBanner />
    </Box> */}
    {/* </Box> */}
  </>
);

export default Menu;
