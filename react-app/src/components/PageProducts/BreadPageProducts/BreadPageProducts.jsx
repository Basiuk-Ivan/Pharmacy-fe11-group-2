import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink, useLocation } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import styled from 'styled-components';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';
import React from 'react';

const IconBreadcrumbs = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  color: rgba(47, 211, 174, 1);
  .Muibox-root {
    display: flex;
  }
`;

const BreadPageProducts = () => {
  const values = {
    painkillers: 'Знеболюючі',
    'cardiovascular-system': 'Серцево-судинна система',
    'cough-cold-flu': 'Ліки від кашлю, застуди та грипу',
    'nervous-system': 'Для нервової системи',
    antipyretic: 'Жарознижуючі',
    cough: 'Кашель та біль у горлі',
    nasal: 'Назальна терапія',
    spasm: 'Від спазму',
    migraine: 'Від болю при мігрені',
    'back-pain': 'Від болю у спині',
    sedatives: 'Седативні(заспокійливі)',
    antidepressants: 'Антидепресанти',
    hypertension: 'Гіпертонія',
    'blood-thinning': 'Для розрідження крові',
    thrombosis: 'Тромбоз',
    varicosity: 'Варікоз'
  };
  const location = useLocation();
  const queryString = location.search;
  const searchParams = new URLSearchParams(queryString);
  const currentCategory = searchParams.get('categories');
  const finalData = values[currentCategory];

  return (
    <IconBreadcrumbs sx={{ mt: '30px' }}>
      <Breadcrumbs>
        <Box sx={{ display: 'flex' }} key="home">
          <NavLink to="/">
            <Box sx={{ display: 'flex' }}>
              <HomeOutlinedIcon sx={{ mr: 0.5, color: 'rgba(47, 211, 174, 1)' }} fontSize="small" />
              <Typography sx={{ color: 'rgba(47, 211, 174, 1)', marginRight: '12px' }}>Головна </Typography>
            </Box>
          </NavLink>
          <>
            <Box>
              <KeyboardDoubleArrowRightTwoToneIcon sx={{ fill: '#BDBDBD', marginRight: '12px' }} />
            </Box>
            <Typography sx={{ color: '#BDBDBD' }}>
              {finalData}
            </Typography>
          </>
        </Box>
      </Breadcrumbs>
    </IconBreadcrumbs>
  );
};

export default BreadPageProducts;
