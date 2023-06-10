import {Typography} from '@mui/material';
import {Box} from '@mui/system';
import {NavLink} from 'react-router-dom';
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

const BreadProduct = ({category, name}) => {
    const values = {
        // orderprocess: 'Оформлення замовлення',
        // favourite: 'Обране',
        // cabinet: 'Особистий кабінет',
        painkillers: 'Знеболюючі',
        cardiovascularSystem: 'Серцево-судинна система',
        coughColdFlu: 'Ліки від кашлю, застуди та грипу',
        nervousSystem: 'Для нервової системи'
    };


    const finalData = values[category];
    console.log(finalData)


    return (
        <IconBreadcrumbs sx={{mt: '30px'}}>
            <Breadcrumbs>
                <Box sx={{display: 'flex'}} key="home">
                    <NavLink to="/">
                        <Box sx={{display: 'flex'}}>
                            <HomeOutlinedIcon sx={{mr: 0.5, color: 'rgba(47, 211, 174, 1)'}} fontSize="small"/>
                            <Typography sx={{color: 'rgba(47, 211, 174, 1)', marginRight: '12px'}}>Головна </Typography>
                        </Box>
                    </NavLink>
                    <NavLink to="/">
                        <Stack>
                        <Box>
                            <KeyboardDoubleArrowRightTwoToneIcon sx={{fill: '#BDBDBD', marginRight: '12px'}}/>
                        </Box>
                        <Typography  sx={{color: '#BDBDBD'}}>
                            {finalData}
                        </Typography>
                        </Stack>
                    </NavLink>

                </Box>
            </Breadcrumbs>
        </IconBreadcrumbs>
    );
};

export default BreadProduct;
