export const howWeWorkStyled = {
  fontSize: 36,
  fontWeight: 700,
  color: '#333333',
  marginBottom: '15px',
  '@media (max-width: 600px)': {
    fontSize: 28
  }
};

export const wrapperForItemStyled = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '30px'
};

export const stack = {
  justifyContent: 'space-between',
  width: '100%',
  rowGap: '20px',
  display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex' }
};

export const wrapperForItem = {
  display: 'flex',
  alignItems: 'center',
  maxWidth: '264px',
  gap: '8px'
};

export const wrapperForImg = {
  minWidth: '55px',
  minHeight: '55px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
