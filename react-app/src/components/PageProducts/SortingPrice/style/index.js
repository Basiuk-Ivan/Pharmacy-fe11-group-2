export const sortingWrapperStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#F7FAFB',
  marginBottom: '25px',
  '@media (max-width: 770px)': {
    flexDirection: 'column',
    gap: '10px'
  }
};

export const sortingStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '40px',
  paddingLeft: '20px',
  '@media (max-width: 1062px)': {
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'flex-start',
    pl: '0'
  }
};

export const sortingTitleStyles = {
  fontSize: '14px',
  fontWeight: '700',
  color: '#333333',
  '@media (max-width: 899px)': {
    pl: '5px'
  }
};

export const sortingTitlePriceStyles = {
  display: 'flex',
  color: '#2fd3ae',
  alignItems: 'center'
};

export const sortingTitlePriceIconStyles = {
  display: 'flex',
  alignItems: 'center',
  '@media (max-width: 899px)': {
    display: 'none',
  }
};

export const paginationWrapperStyles = {
  display: 'flex',
  alignItems: 'center',
  paddingRight: '20px',
  '@media (max-width: 899px)': {
    pr: '10px'
  },
  '@media (max-width: 770px)': {
    pr: '5px',
    pl: '2px'
  },
};

export const formControlStyle = {
  minWidth: 100,
  border: 'none',
  p: '5px'
};
