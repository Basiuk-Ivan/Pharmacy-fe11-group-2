export const mainCategoryStyle = {
  color: '#4F4F4F',

  ':hover': { '& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root': { color: '#1f1e1e', width: '1.1em', height: '1.1em' }, '& .MuiTypography-root': { color: '#1f1e1e', fontWeight: '600' }, '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded .MuiSvgIcon-root': { color: '#FFFFFF', width: '1.1em', height: '1.1em' }, '&.MuiAccordionSummary-root.Mui-expanded .MuiTypography-root': { color: '#FFFFFF', fontWeight: '600' } },
  '&.MuiAccordionSummary-root.Mui-expanded': { backgroundColor: '#2FD3AE', color: '#FFFFFF' },
  '.MuiAccordionSummary-expandIconWrapper.Mui-expanded': { color: '#FFFFFF' }
};

export const secondCategoryWrappStyle = {
  display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', color: '#4F4F4F'
};

export const secondCategoryStyle = {
  fontSize: '14px',
  cursor: 'pointer',
  ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' }
};

export const secondCategoryStyleCheck = {
  color: '#2FD3AE',
  fontWeight: '600',
  fontSize: '14px',
  cursor: 'pointer'
};

export const secondCategoryStyle4px = {
  fontSize: '14px', cursor: 'pointer', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '4px' }
};

export const marginStyle = {
  marginBottom: '15px',
};
