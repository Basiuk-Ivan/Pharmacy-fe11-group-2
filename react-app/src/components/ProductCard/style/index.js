export const wrapForCardStyles = isInCart => ({
  position: 'relative',
  overflow: 'visible',
  width: isInCart ? 'auto' : '220px',
  height: isInCart ? 'auto' : '430px',
  display: isInCart ? 'flex' : 'block',
  cursor: 'auto',
  '@media (max-width: 640px)': {
    flexDirection: 'column'
  }
});

export const cardContentStyles = isInCart => ({
  padding: isInCart ? 0 : undefined,
  width: '100%',
  display: 'flex',
  flexDirection: isInCart ? 'row' : 'column',
  '&:last-child': {
    paddingTop: isInCart ? '13px' : undefined,
    paddingBottom: isInCart ? '13px' : undefined
  },
  '@media (max-width: 640px)': {
    padding: '10px'
  },
  '@media (max-width: 455px)': {
    flexDirection: 'column'
  }
});

export const textForquantityStyles = {
  fontSize: '12px',
  fontWeight: 700,
  color: '#2FD3AE'
};

export const boxForImg = {
  width: '220px',
  height: '170px',
  padding: '5px',
  display: 'flex',
  '@media (max-width: 640px)': {
    margin: '0 auto'
  }
};
export const boxForImgPromotion = {
  width: '220px',
  height: '170px'
};

export const imgPromotion = {
  width: '200px',
  height: '100%',
  objectFit: 'contain',
  cursor: 'pointer'
};

export const imgStyles = {
  width: '180px',
  objectFit: 'contain'
};

export const ratingStyles = { fontSize: '18px' };

export const wrappForDetailsStyles = isInCart => ({
  marginBottom: isInCart ? undefined : '15px'
});

export const productNameStyles = isInCart => ({
  mt: '5px',
  mb: isInCart ? 0 : '20px',
  fontSize: '16px',
  fontWeight: 500,
  color: '#525A68',
  overflow: 'hidden',
  maxHeight: '45px',
  '&:hover': {
    cursor: 'pointer',
    color: '#46baa0'
  }
});

export const priceStyles = {
  fontSize: '21px',
  fontWeight: 700,
  color: '#525A68'
};

export const discountStyles = {
  fontSize: '14px',
  fontWeight: 700,
  color: '#DD8888',
  textDecoration: 'line-through'
};

export const cartStyles = isCart => ({
  borderRadius: '50%',
  height: '50px',
  width: '50px',
  color: '#ffffff',
  backgroundColor: isCart ? 'orange' : '#2FD3AE',

  '&:hover': {
    backgroundColor: 'orange'
  }
});

export const checkBoxStyles = { padding: '3px' };

export const favoriteIcon = { color: 'red' };

export const productDayStyles = {
  position: 'absolute',
  top: -12,
  left: 10,
  padding: '5px 10px',
  backgroundColor: '#2FD3AE',
  fontSize: '12px',
  fontWeight: 500,
  color: '#FFFFFF',
  borderRadius: '20px'
};

export const favoriteIconStyles = isCart => ({
  position: 'absolute',
  top: isCart ? '9px' : '1px',
  right: isCart ? '27px' : '4px',
  display: 'flex',
  justifyContent: 'end',
  color: 'rgba(0, 0, 0, 0.6)',

  '&:hover': {
    filter: 'invert(20%) sepia(51%) saturate(7402%) hue-rotate(353deg) brightness(92%) contrast(105%)'
  }
});

export const buttonBasePlusStyles = {
  position: 'absolute',
  width: '20px',
  height: '14px',
  top: '10px',
  right: '-5px',
  padding: 0,
  margin: 0,
  backgroundColor: ' #2FD3AE',
  fontSize: '18px',
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50px',
  border: 'none',
  cursor: 'pointer'
};

export const buttonBaseMinusStyles = {
  width: '20px',
  padding: '0',
  height: '14px',
  position: 'absolute',
  top: '10px',
  left: '-5px',
  backgroundColor: '#DD8888',
  fontSize: '18px',
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50px',
  border: 'none',
  cursor: 'pointer',
  fontFamily: '"Roboto", "san-serif"'
};

export const iconButtonStyles = {
  position: 'absolute',
  top: '-11px',
  right: '-12px',
  display: 'flex',
  justifyContent: 'end',
  background: '#828282',
  color: 'white',
  width: '25px',
  height: '25px',
  padding: 0,
  '&:hover': {
    color: '#828282'
  }
};

export const wrappForQuantityStyles = {
  padding: '4px 20px',
  borderRadius: '50px',
  backgroundColor: '#ffffff',
  textAlign: 'center',
  fontFamily: '"Roboto", "san-serif"',
  boxShadow: '0px 0px 40px rgba(11, 54, 29, 0.1)'
};

export const stackStyles = isInCart => ({
  flex: isInCart ? '1 1 50%' : undefined,
  paddingTop: isInCart ? '20px' : undefined,
  paddingLeft: isInCart ? '20px' : undefined,
  flexWrap: isInCart ? 'wrap' : undefined,
  columnGap: isInCart ? '50px' : undefined,
  justifyContent: isInCart ? undefined : 'space-between',
  paddingBottom: isInCart ? '10px' : undefined
});

export const boxForButtonBaseStyles = {
  position: 'relative',
  mb: '14px'
};
