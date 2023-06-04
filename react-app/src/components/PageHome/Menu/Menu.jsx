// import { Box, Button } from '@mui/material';
// import { NavLink } from 'react-router-dom';
// import { menuStyles, buttonStyles, navLinkStyles } from './style';
// // import DiscountBanner from './DiscountBanner';

// const pages = [
//   'Ліки від кашлю, застуди та грипу',
//   'Знеболюючі',
//   'Для нервової системи',
//   'Серцево-судинна система'
// ];

// const Menu = () => (
//   <>
//     {/* <Box> */}
//     <Box position="absolute" sx={menuStyles}>
//       {pages.map(page => (
//         <NavLink key={page} to="/products" style={navLinkStyles}>
//           <Button sx={buttonStyles}>{page}</Button>
//         </NavLink>
//       ))}
//     </Box>
//     {/* <Box>
//       <DiscountBanner />
//     </Box> */}
//     {/* </Box> */}
//   </>
// );

// export default Menu;

import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { menuStyles, buttonStyles, navLinkStyles } from './style';

const pages = [
  {
    title: 'Ліки від кашлю, застуди та грипу',
    // path: '/products'
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
  <Box position="absolute" sx={menuStyles}>
    {pages.map(page => (
      <NavLink key={page.title} to={page.path} style={navLinkStyles}>
        <Button sx={buttonStyles}>{page.title}</Button>
      </NavLink>
    ))}
  </Box>
);

export default Menu;
