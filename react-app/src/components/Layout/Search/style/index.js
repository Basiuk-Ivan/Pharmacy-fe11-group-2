import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  // width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 0, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}));

export const inputStyles = {
  border: '1px solid #E0E0E0',
  borderRadius: '20px',
  paddingRight: '25px'
};

export const searchIconStyle = { fill: '#2FD3AE' };

export const searchBlockStyle = {
  position: 'absolute',
  top: '60px',
  left: '50%',
  p: '5px',
  borderRadius: '10px',
  transform: 'translateX(-50%)',
  zIndex: '2',
  width: { xs: '250px', sm: '310px' },
  maxWidth: 360,
  bgcolor: '#c7f5ee',
  maxHeight: 320
};

export const clearIconStyle = {
  position: 'absolute',
  right: '4px',
  top: '8px',
  cursor: 'pointer',
  color: '#2fd3ae'
};

export const boxResultStyle = {
  margin: 'auto',
  fontFamily: 'Roboto, sans-serif',
  textAlign: 'center',
  fontSize: '16px',
  color: '#011d71'
};

export const boxNameStyle = {
  color: '#011d71',
  fontWeight: '500',
  fontFamily: 'Roboto, sans-serif',
  fontSize: { xs: '12px', sm: '14px' },
  pr: '2px'
};

export const productImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'contain'
};

export const listIconStyle = {
  width: { xs: '50px', sm: '70px' },
  height: { xs: '70px', sm: '100px' }
};

export const searchBlockInnerStyle = {
  maxWidth: 360,
  maxHeight: 310,
  overflowY: 'auto',
  minHeight: 100
};
