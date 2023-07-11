export const wrapperForTestimonials = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4%',
  flexWrap: 'wrap',
  background: '#F6FBFA',
  padding: '5% 5%'
};

export const mainFeedback = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '45px',
  background: 'white',
  padding: '4%'
};
export const feedBack = {
  marginTop: '5px',
  flex: 2,
  marginLeft: '2%'
};
export const ave = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '50px',
  minWidth: '300px'
};
export const aveText = {
  fontWeight: 'bold',
  fontSize: '24px'
};
export const aveRate = {
  fontWeight: 'bold',
  fontSize: '64px'
};
export const totalRate = {
  fontSize: '16px',
  color: '#4F4F4F',
  textAlign: 'center'
};
export const feedBackItem = {
  marginRight: '3%',
  marginBottom: '4%'
};

export const feedBackItemStar = {
  width: '370px',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media (max-width: 400px)': {
    width: '100%'
  }
};
export const feedBackItemText = {
  marginTop: '1%',
  color: '#4F4F4F',
  fontSize: '14px',
  textAlign: 'justify'
};

export const StarRateItem = {
  color: '#F2C94C',
  fontSize: '19px'
};

export const feedBackDate = {
  fontSize: '18px',
  color: '#828282',
  marginLeft: '7px',
};

export const feedBackName = {
  fontSize: '18px',
  fontWeight: '700',
  color: '#333333'
};
export const totalCountFeed = {
  marginLeft: '25px',
  position: 'relative',
  color: '#2FD3AE',
  fontSize: '14px',
  fontWeight: '700',
  textTransform: 'uppercase',
  '::before': {
    position: 'absolute',
    top: '-2px',
    left: '-25px',
    content: 'url("../../../../src/assets/right.png")',
    width: '10px',
    height: '10px'
  }
};

export const btnFeed = {
  background: '#2FD3AE',
  fontSize: '14px',
  padding: '11px 31px',
  borderRadius: '31px',
  color: 'white',
  ':hover': { backgroundColor: '#26bea2' }
};

export const StarRate = {
  color: '#F2C94C',
  fontSize: '19px'
};

export const linkFeed = {
  cursor: 'pointer',
  textDecoration: 'none',
  color: '#2FD3AE'
};
