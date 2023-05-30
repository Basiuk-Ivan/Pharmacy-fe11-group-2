import {borderColor, color, fontWeight, minWidth, padding} from "@mui/system";

export const wrapperForTestimonials = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '50px',
  background: '#F6FBFA',
  height: '500px',
  marginBottom: '30px'
};

export const mainFeedback = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '45px',
  background: 'white',
  padding: '35px',
  marginLeft: '50px',

}
export const feedBack = {
  flex: 2,
}
export const ave = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '50px',
  minWidth: '300px',
}
export const aveText = {
  fontWeight: 'bold',
  fontSize: '24px',
}
export const aveRate = {
  fontWeight: 'bold',
  fontSize: '64px',
}
export const totalRate = {
  fontSize: '16px',
  color: '#4F4F4F',
  textAlign: 'center'
}
export const feedBackItem = {}
export const totalCountFeed = {
  marginLeft: '25px',
  position: 'relative',
  color: '#2FD3AE',
  fontSize: '16px',
  fontWeight: '700',
  textTransform: 'uppercase',
  '::before': {
    position: 'absolute',
    top: '-2px',
    left: '-25px',
    content: 'url("../../../../src/assets/right.png")',
  width: '10px',
  height: '10px',},
}

export const btnFeed = {
  background: '#2FD3AE',
  fontSize: '14px',
  padding: '11px 31px',
  borderRadius: '31px',
  ':hover': { backgroundColor: '#26bea2' },
}

export const StarRate = {
  color: '#F2C94C',
  fontSize: '19px',
}

export  const linkFeed = {
  cursor: 'pointer',
  textDecoration: 'none',
  color: '#2FD3AE',
}
