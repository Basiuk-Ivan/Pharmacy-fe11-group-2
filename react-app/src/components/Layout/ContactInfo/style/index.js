export const mainBoxStyles = {
  display: {
    xs: 'none',
    sm: 'flex',
    md: 'flex',
    flexWrap: 'wrap',
    gap: '10px'
  },
  '@media (max-width: 714px)': {
    display: 'none'
  }
};

export const wrapperBoxStyles = {
  display: 'flex'
};

export const mailOutlineIconStyles = { fill: '#2FD3AE' };

export const wrapperForTextStyles = {
  display: {
    xs: 'flex',
    flexDirection: 'column'
  },
  '@media (max-width: 1145px)': {
    display: 'none'
  }
};

export const emailStyles = {
  fontSize: 18,
  color: '#011D71'
};

export const descriptionStyles = {
  fontSize: 11,
  color: '#7894A4'
};

export const wrapperForNumberPhoneStyles = {
  display: 'flex'
};

export const localPhoneIconStyle = { fill: '#2FD3AE' };

export const bodyForNumberPhoneStyles = {
  display: {
    xs: 'flex',
    flexDirection: 'column',
    '@media (max-width: 1021px)': {
      display: 'none'
    }
  }
};

export const numberPhoneStyles = {
  fontSize: 18,
  color: '#011D71'
};

export const numberPhoneDescStyles = {
  fontSize: 11,
  color: '#7894A4'
};
