import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

export const todayPharmacyStyles = {
  fontSize: 24,
  fontWeight: 700,
  color: '#333333',
  '@media (max-width: 600px)': {
    fontSize: 20
  }
};

export const itTypographyStyles = {
  fontSize: 18,
  color: '#828282',
  marginBottom: '15px'
};

export const wrapperForItemStyles = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '30px'
};

export const stackStyles = {
  justifyContent: 'space-between',
  width: '100%',
  rowGap: '20px'
};

export const wrapperForItem = {
  display: 'flex',
  alignItems: 'center',
  width: '264px',
  gap: '8px'
};

export const wrapperForImg = {
  backgroundColor: '#2FD3AE',
  borderRadius: '50%',
  minWidth: '55px',
  minHeight: '55px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const textStyles = {
  color: '#4F4F4F',
  fontSize: '15px'
};
