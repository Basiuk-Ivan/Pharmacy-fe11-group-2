import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

export const todayPharmacyStyles = { fontSize: 24, fontWeight: 700, color: '#333333' };
export const itTypographyStyles = { fontSize: 18, color: '#828282' };
export const wrapperForItemStyles = { display: 'flex', justifyContent: 'center', marginBottom: '30px' };
export const stackStyles = { justifyContent: 'space-between', width: '100%' };
