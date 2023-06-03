export const wrapForCardStyles = isInCart => ({
  position: 'relative',
  width: isInCart ? 'auto' : '220px',
  display: isInCart ? 'flex' : 'block'
});

export const cardMediaStyles = isInCart => ({
  minHeight: '180px',
  width: isInCart ? '220px' : 'auto'
});

export const cardContentStyles = isInCart => ({
  display: 'flex',
  paddingTop: '0px',
  flexDirection: isInCart ? 'row' : 'column'
});

export const textForquantityStyles = {
  fontSize: '12px',
  fontWeight: 700,
  color: '#2FD3AE'
};

export const ratingStyles = { fontSize: '18px' };

export const wrappForDetails = { marginBottom: '15px' };

export const productNameStyles = {
  mt: '5px',
  mb: '20px',
  fontSize: '16px',
  fontWeight: 500,
  color: '#525A68'
};

export const priceStyles = {
  fontSize: '24px',
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

export const productDayStyles = {
  position: 'absolute',
  top: 12,
  left: 10,
  padding: '5px 10px',
  backgroundColor: '#2FD3AE',
  fontSize: '12px',
  fontWeight: 500,
  color: '#FFFFFF',
  borderRadius: '20px'
};

export const favoriteIconStyles = {
  position: 'absolute',
  top: '2px',
  right: '5px',
  display: 'flex',
  justifyContent: 'end',
  color: 'rgba(0, 0, 0, 0.6)',

  '&:hover': {
    filter: 'invert(20%) sepia(51%) saturate(7402%) hue-rotate(353deg) brightness(92%) contrast(105%)'
  }
};
