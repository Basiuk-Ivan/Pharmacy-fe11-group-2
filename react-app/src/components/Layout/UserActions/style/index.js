import { Badge } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    padding: '0 4px'
  }
}));

export const wrapForActionsStyles = {
  display: {
    xs: 'none',
    md: 'flex',
    flexWrap: 'wrap'
  }
};

export const fillForIcon = { fill: '#2FD3AE' };

export const colorForBadge = { color: '#2FD3AE' };
