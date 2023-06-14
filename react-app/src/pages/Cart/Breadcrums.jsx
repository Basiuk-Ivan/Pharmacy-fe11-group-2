import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Box } from '@mui/system';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';

const IconBreadcrumbs = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
  color: rgba(47, 211, 174, 1);
  .Muibox-root {
    display: flex;
  }
`;

export default function CustomSeparator() {
  const breadcrumbs = [
    <Box key="home" sx={{ display: 'flex' }}>
      <NavLink to="/">
        <Box sx={{ display: 'flex' }}>
          <HomeOutlinedIcon sx={{ mr: 0.5, color: 'rgba(47, 211, 174, 1)' }} fontSize="small" />
          <Typography sx={{ color: 'rgba(47, 211, 174, 1)', marginRight: '12px' }}>Головна </Typography>
        </Box>
      </NavLink>
      <Box>
        <KeyboardDoubleArrowRightTwoToneIcon sx={{ fill: 'rgba(47, 211, 174, 1)', marginRight: '12px' }} />
      </Box>
      <Typography sx={{ color: '#BDBDBD' }}> Корзина</Typography>
    </Box>
  ];

  return (
    <IconBreadcrumbs>
      <Breadcrumbs>{breadcrumbs}</Breadcrumbs>
    </IconBreadcrumbs>
  );
}
