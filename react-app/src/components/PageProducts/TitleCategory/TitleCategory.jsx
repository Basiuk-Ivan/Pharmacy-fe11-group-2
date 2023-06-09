import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';
import { categoryCurrentStyle, currentPageStyle, linkAndCurrentCategoryStyle, linkStyle } from './style';

function TitleCategory() {
  return (
    <Box id="link&CurrentCategory" sx={linkAndCurrentCategoryStyle}>
      <Box id="linkWrapper" sx={{ display: 'flex' }}>
        <NavLink to="/" sx={linkStyle}>
          <HomeOutlinedIcon fontSize="medium" sx={{ marginRight: '13px' }} />
          <Typography>Головна</Typography>
        </NavLink>
        <Box id="currentPage" sx={currentPageStyle}>
          <KeyboardDoubleArrowRightTwoToneIcon sx={{ marginRight: '11px' }} />
          <Typography>Пошук по категорії</Typography>
        </Box>
      </Box>
      <Box id="categoryCurrent" sx={categoryCurrentStyle}>Ліки від кашлю, застуди та грипу</Box>
    </Box>
  );
}

export default TitleCategory;
