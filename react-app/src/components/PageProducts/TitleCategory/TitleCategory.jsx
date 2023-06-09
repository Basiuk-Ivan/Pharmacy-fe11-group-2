import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { currentCategoryStyle, wrappCurrentCategoryStyle } from './style';

function TitleCategory() {
  const values = {
    painkillers: 'Знеболюючі',
    cardiovascularSystem: 'Серцево-судинна система',
    coughColdFlu: 'Ліки від кашлю, застуди та грипу',
    nervousSystem: 'Для нервової системи'
  };
  const { pathname } = window.location;
  const pathArray = pathname.slice(1).split('/');
  const finalData = pathArray.map(item => values[item]);

  return (
    <Box sx={wrappCurrentCategoryStyle}>
      {finalData.map((item, index) => (
        <Typography sx={currentCategoryStyle} key={index}>
          {item}
        </Typography>
      ))}
    </Box>
  );
}

export default TitleCategory;
