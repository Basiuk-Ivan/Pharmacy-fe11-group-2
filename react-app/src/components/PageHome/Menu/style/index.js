export const menuStyles = {
  flexGrow: 1,
  display: { xs: 'none', md: 'flex' },
  justifyContent: 'center',
  gap: '100px',
  background: 'linear-gradient(45deg, #011D71 30%, #2FD3BD 90%)',
  top: '75px',
  left: 0,
  width: '100%',
  // тут підпрвити
  '@media (max-width: 959.95px)': {
    display: 'block'
  }
};

export const buttonStyles = {
  my: 2,
  color: 'white',
  display: 'block'
};

export const navLinkStyles = {
  textDecoration: 'none'
};
