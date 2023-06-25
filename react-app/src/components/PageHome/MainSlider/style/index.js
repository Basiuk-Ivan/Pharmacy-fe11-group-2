export const swiperStyles = {
  height: '600px',
  marginBottom: '25px',
  backgroundColor: '#F6FBFA'
};

export const wrapForItemStyles = {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  padding: '0 70px',
  '@media (max-width: 900px)': {
    flexDirection: 'column'
  }
};

export const oralBTextStyles = {
  color: '#011D71',
  fontSize: '40px',
  fontWeight: 700,
  '@media (max-width: 900px)': {
    marginTop: '15px',
    fontSize: '30px'
  },
  '@media (max-width: 520px)': {
    fontSize: '25px'
  }
};

export const boxForText = {
  flex: '1 1 50%',
  '@media (max-width: 900px)': {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    width: '430px'
  },
  '@media (max-width: 520px)': {
    width: '230px'
  }
};

export const toothbrushTextStyles = {
  color: '#011D71',
  fontSize: '40px',
  '@media (max-width: 900px)': {
    fontSize: '30px'
  },
  '@media (max-width: 520px)': {
    fontSize: '25px'
  }
};

export const descStyles = {
  color: '#7894A4',
  fontSize: '16px',
  marginTop: '10px',
  marginBottom: '20px',
  '@media (max-width: 900px)': {
    fontSize: '14px'
  }
};

export const wrapForImgStyles = {
  display: 'flex',
  flex: '1 1 50%',
  alignItems: 'center',
  width: '325px',
  height: '329px',
  '@media (max-width: 900px)': {
    maxWidth: '220px',
    marginBottom: '40px'
  },
  '@media (max-width: 520px)': {
    width: '170px',
    height: '140px',
    marginBottom: '40px'
  }
};

export const imgStyles = {
  width: '100%',
  height: '100%',
  objectFit: 'contain'
};

export const buttonStyles = {
  borderRadius: '50px',
  boxShadow: '0px 40px 40px rgba(1, 29, 113, 0.2)',
  background: '#011D71',
  width: '200px',
  height: '46px',
  color: '#fff',
  '&:hover': {
    color: '#011D71',
    background: '#e3e3e369'
  },
  '@media (max-width: 520px)': {
    boxShadow: '0px 20px 40px rgba(1, 29, 113, 0.2)',
    width: '150px',
    height: '46px',
    fontSize: '12px'
  }
};
