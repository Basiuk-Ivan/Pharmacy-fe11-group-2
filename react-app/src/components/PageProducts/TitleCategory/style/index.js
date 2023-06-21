export const wrappCurrentCategoryStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '30px'
};

export const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: '#2fd3ae',
  marginRight: '14px'
};

export const currentPageStyle = {
  display: 'flex',
  alignItems: 'center',
  color: '#BDBDBD'
};

export const currentCategoryStyle = {
  marginTop: '10px',
  color: '#394045',
  fontSize: '36px',
  fontWeight: '700',
  '@media (max-width: 770px)': {
    marginTop: '10px',
    fontSize: '28px',
    fontWeight: '600',
  },
  '@media (max-width: 530px)': {
    marginTop: '5px',
    fontSize: '20px',
    fontWeight: '500',
  }
};
