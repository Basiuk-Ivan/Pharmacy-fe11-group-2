import { Stack, Typography, Box, Breadcrumbs } from '@mui/material';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';
import styled from 'styled-components';
import { breadValues } from '../../../utils/commonConstans/breadValues';
import {
  breadContainerStyles,
  arrowIconStyles,
  homeIconStyles,
  itemTextStyles,
  itemContainerStyles, categoryContainerStyles
} from './style';

const IconBreadcrumbs = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  color: #2fd3ae;

  .Muibox-root {
    display: flex;
  }
`;
const BreadProduct = ({ category, name }) => {
  const finalData = breadValues[category];

  return (
    <IconBreadcrumbs sx={{ mt: '30px' }}>
      <Breadcrumbs>
        <Stack sx={breadContainerStyles} key="home">
          <NavLink to="/">
            <Box sx={itemContainerStyles}>
              <HomeOutlinedIcon sx={homeIconStyles} fontSize="small" />
              <Typography sx={itemTextStyles}>Головна </Typography>
            </Box>
          </NavLink>
          <NavLink to={`/product?page=1&categories=${category}&sort=1&limit=8`}>
            <Stack direction="row" sx={categoryContainerStyles}>
              <Box>
                <KeyboardDoubleArrowRightTwoToneIcon sx={arrowIconStyles} />
              </Box>
              <Typography sx={{ color: '#2FD3AE' }}>{finalData}</Typography>
            </Stack>
          </NavLink>
          <Stack direction="row" sx={{ minHeight: '30px' }}>
            <Box>
              <KeyboardDoubleArrowRightTwoToneIcon sx={arrowIconStyles} />
            </Box>
            <Typography sx={{ color: '#BDBDBD' }}>{name}</Typography>
          </Stack>
        </Stack>
      </Breadcrumbs>
    </IconBreadcrumbs>
  );
};

export default BreadProduct;
