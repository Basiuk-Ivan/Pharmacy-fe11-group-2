export const wrapForCardStyles = isInCart => ({
  position: 'relative',
  maxWidth: isInCart ? '278px' : 'auto'
});

export const cardMediaStyles = isInCart => ({
  height: '160px',
  width: isInCart ? 'auto' : '200px'
});

export const cardContentStyles = isInCart => ({
  display: 'flex',
  flexDirection: isInCart ? 'column' : 'row'
});

export const bodyForquantityStyles = { mt: '22px' };

export const textForquantityStyles = {
  fontSize: '12px',
  fontWeight: 700,
  color: '#2FD3AE'
};

export const ratingStyles = { fontSize: '18px' };

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

export const cartStyles = {
  backgroundColor: '#2FD3AE',
  borderRadius: '50%',
  height: '50px',
  width: '50px',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: 'orange'
  }
};

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
