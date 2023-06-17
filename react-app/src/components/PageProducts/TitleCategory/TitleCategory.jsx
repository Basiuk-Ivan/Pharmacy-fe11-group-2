import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { currentCategoryStyle, wrappCurrentCategoryStyle } from './style';

function TitleCategory() {
  const values = {
    painkillers: 'Знеболюючі',
    cardiovascularSystem: 'Серцево-судинна система',
    coughColdFlu: 'Ліки від кашлю, застуди та грипу',
    nervousSystem: 'Для нервової системи',
    antipyretic: 'Жарознижуючі',
    cough: 'Кашель та біль у горлі',
    nasal: 'Назальна терапія',
    spasm: 'Від спазму',
    migraine: 'Від болю при мігрені',
    backPain: 'Від болю у спині',
    sedatives: 'Седативні(заспокійливі)',
    antidepressants: 'Антидепресанти',
    hypertension: 'Гіпертонія',
    bloodThinning: 'Для розрідження крові',
    thrombosis: 'Тромбоз',
    varicosity: 'Варікоз'
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
