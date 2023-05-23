import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const healthBlogStyled = {
  fontSize: 36,
  fontWeight: 700,
  color: '#333333'
};

export const wrapperForItem = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '30px'
};

export const stack = {
  justifyContent: 'space-between',
  width: '100%'
};

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '360px',
  height: '375px'
}));
