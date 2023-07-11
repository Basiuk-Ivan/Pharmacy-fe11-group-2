export const youBrowsedStyle = {
  margin: '75px 0 35px 0',
  display: 'flex',
  flexDirection: 'column'
};

export const youBrowsedTitleWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

export const titleStyle = {
  color: '#333333',
  fontSize: '36px',
  fontWeight: '700',
  mb: '20px',
  '@media (max-width: 770px)': {
    fontSize: '28px',
    fontWeight: '600',
  },
  '@media (max-width: 530px)': {
    fontSize: '20px',
    fontWeight: '500',
  }
};

export const youBrowsedTitleSliderStyle = {
  display: 'flex',
  gap: '40px',
  alignItems: 'center',
  paddingRight: '20px'
};

export const cardsWrapperStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '13px',
  marginBottom: '30px',
  rowGap: '20px',
  justifyContent: 'space-around'
};

export const cardWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 24,
  fontWeight: 600,
  cursor: 'pointer',
};
