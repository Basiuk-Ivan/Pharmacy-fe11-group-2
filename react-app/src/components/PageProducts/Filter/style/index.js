export const filterWrapperStyle = {
  boxShadow: '0px 5px 20px 0px #0B361D1A',
};

export const titleCategoryStyle = {
  borderBottom: '1px solid #F5F5F5',
  height: '57px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '26px',
  fontSize: '14px',
  fontWeight: '700',
  color: '#4F4F4F'
};

export const marginStyle = {
  marginBottom: '15px'
};

export const mainCategoryStyle = {
  color: '#4F4F4F',

  ':hover': { '& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root': { color: '#1f1e1e', width: '1.1em', height: '1.1em' }, '& .MuiTypography-root': { color: '#1f1e1e', fontWeight: '600' }, '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded .MuiSvgIcon-root': { color: '#FFFFFF', width: '1.1em', height: '1.1em' }, '&.MuiAccordionSummary-root.Mui-expanded .MuiTypography-root': { color: '#FFFFFF', fontWeight: '600' } },
  '&.MuiAccordionSummary-root.Mui-expanded': { backgroundColor: '#2FD3AE', color: '#FFFFFF' },
  '.MuiAccordionSummary-expandIconWrapper.Mui-expanded': { color: '#FFFFFF' }
};

export const priceInputWrapperStyle = {
  display: 'flex',
  margin: '10px 0',
  gap: '10px'
};

export const formGroupStyle = {
  color: '#4F4F4F',
  fontSize: '13px',
  fontWeight: '400'
};

export const formGroupCheckStyle = {
  color: '#4F4F4F',
  padding: '0 9px'
};

export const formCheckboxStyle = {
  marginRight: '0',
  fontSize: '10px',
  ':hover': { '& .MuiFormControlLabel-label': { color: '#1f1e1e',
    fontWeight: '600' },
  '& .MuiCheckbox-root': { color: '#1f1e1e',
    fontWeight: '600' } }
};

export const buttonWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '12px',
  padding: '20px 5px 50px 5px'
};

export const showButtonStyle = {
  backgroundColor: '#2fd3ae',
  ':hover': { backgroundColor: '#1b7360' }
};

export const resetButtonStyle = {
  color: '#2fd3ae',
  borderColor: '#2fd3ae',
  ':hover': { color: '#1b7360', borderColor: '#1b7360' }
};

export const errorPriceStyle = {
  color: 'red', mt: '-10px', mb: '10px', pl: '7px', fontSize: '15px',
};
