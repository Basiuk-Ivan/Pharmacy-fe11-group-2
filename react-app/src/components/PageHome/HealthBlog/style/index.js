import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const healthBlogStyled = {
  fontSize: 36,
  fontWeight: 700,
  color: '#333333',
  textAlign: 'left',
};

export const toBlog = {
  position: 'relative',
  fontSize: 14,
  color: '#2FD3AE',
  alignSelf: 'center',
  '::before': {
    position: 'absolute',
    top: '-1px',
    left: '-14px',
    content: 'url("../../../../src/assets/right.png")',
    width: '10px',
    height: '10px'
  }
};
export const Title = {
  display: 'flex',
  gap: '35px',
};

export const wrapperForItem = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginBottom: '30px'
};

export const stack = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1.1%',
  width: '100%',
  flexWrap: 'wrap',
};

export const blogTitle = {
  fontWeight: 700,
  fontSize: 18,
  textAlign: 'left',
  color: '#333333',

};

export const blogDesc = {
  fontSize: 14,
  textAlign: 'left',
  color: '#828282',
};

export const blogImg = {
  marginLeft: '-9px',
};

export const AfterBlogImg = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
};

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  width: '290px',
  height: '375px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}));
