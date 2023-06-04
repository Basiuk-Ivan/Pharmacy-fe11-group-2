export const wrapForCardStyles = isInCart => ({
  position: 'relative',
  overflow: 'visible',
  width: isInCart ? 'auto' : '220px',
  display: isInCart ? 'flex' : 'block'
});

export const cardMediaStyles = isInCart => ({
  minHeight: isInCart ? '150px' : '180px',
  minWidth: isInCart ? '220px' : 'auto'
});

export const cardContentStyles = isInCart => ({
  padding: isInCart ? 0 : undefined,
  width: '100%',
  display: 'flex',
  flexDirection: isInCart ? 'row' : 'column',
  marginLeft: isInCart ? '20px' : undefined,
  '&:last-child': {
    paddingBottom: isInCart ? 0 : undefined,
    paddingTop: isInCart ? '13px' : undefined
  }
});

export const textForquantityStyles = {
  fontSize: '12px',
  fontWeight: 700,
  color: '#2FD3AE'
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
  color: '#525A68'
});

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
