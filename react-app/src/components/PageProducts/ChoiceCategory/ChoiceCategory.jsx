import { Box } from '@mui/material';
import ChoiceCategoryAccordion from './ChoiceCategoryAccordion/ChoiceCategoryAccordion';
import { choiceCategoryStyle, titleCategoryStyle } from './style';

function ChoiceCategory() {
  return (
    <Box id="choiceCategoryWrapper" sx={choiceCategoryStyle}>
      <Box id="titleCategory" sx={titleCategoryStyle}>КАТЕГОРІЇ</Box>
      <ChoiceCategoryAccordion />
    </Box>
  );
}

export default ChoiceCategory;
