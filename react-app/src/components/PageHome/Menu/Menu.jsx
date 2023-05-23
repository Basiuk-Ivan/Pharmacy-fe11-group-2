import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { menuStyles, buttonStyles, navLinkStyles } from './style';
// import DiscountBanner from './DiscountBanner';

const pages = [
  'Ліки від кашлю, застуди та грипу',
  'Знеболюючі',
  'Для нервової системи',
  'Серцево-судинна система'
];

const Menu = () => (
  <>
    {/* <Box> */}
    <Box position="absolute" sx={menuStyles}>
      {pages.map(page => (
        <NavLink key={page} to="/products" style={navLinkStyles}>
          <Button sx={buttonStyles}>{page}</Button>
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
