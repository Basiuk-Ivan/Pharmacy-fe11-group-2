import { Box } from '@mui/material';
import ChoiceCategoryAccordion from './ChoiceCategoryAccordion/ChoiceCategoryAccordion';

const ChoiceCategory = () => (
  <Box
    title="choiceCategoryWrapper"
    sx={{
      boxShadow: '0px 5px 20px 0px #0B361D1A',
      marginBottom: '40px',
      // padding: '0 9px'
    }}
  >
    <Box
      title="titleCategory"
      sx={{
        borderBottom: '1px solid #F5F5F5',
        height: '57px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '26px',
        fontSize: '14px',
        fontWeight: '700',
        color: '#4F4F4F',
      }}
    >
      КАТЕГОРІЇ
    </Box>
    <ChoiceCategoryAccordion />

  </Box>
);

export default ChoiceCategory;
