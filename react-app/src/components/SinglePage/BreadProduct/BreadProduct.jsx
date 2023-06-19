import { Stack, Typography, Box, Breadcrumbs } from '@mui/material';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';
import styled from 'styled-components';

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
    sedatives: 'Седативні (заспокійливі)',
    antidepressants: 'Антидепресанти',
    hypertension: 'Гіпертонія',
    'blood-thinning': 'Для розрідження крові',
    thrombosis: 'Тромбоз',
    varicosity: 'Варикоз'
  };

  const finalData = values[category];

  return (
    <IconBreadcrumbs sx={{ mt: '30px' }}>
      <Breadcrumbs>
        <Stack
          sx={{ display: 'flex', rowGap: '10px', flexDirection: { xs: 'column', sm: 'row' } }}
          key="home"
        >
          <NavLink to="/">
            <Box sx={{ display: 'flex', height: '30px' }}>
              <HomeOutlinedIcon sx={{ mr: 0.5, color: '#2FD3AE' }} fontSize="small" />
              <Typography sx={{ color: '#2FD3AE', mr: '12px' }}>Головна </Typography>
            </Box>
          </NavLink>
          <NavLink to={`/${category}`}>
            <Stack direction="row" sx={{ minHeight: '30px', mr: '5px' }}>
              <Box>
                <KeyboardDoubleArrowRightTwoToneIcon sx={{ fill: '#BDBDBD', mr: '12px' }} />
              </Box>
              <Typography sx={{ color: '#2FD3AE' }}>{finalData}</Typography>
            </Stack>
          </NavLink>
          <Stack direction="row" sx={{ minHeight: '30px' }}>
            <Box>
              <KeyboardDoubleArrowRightTwoToneIcon sx={{ fill: '#BDBDBD', mr: '12px' }} />
            </Box>
            <Typography sx={{ color: '#BDBDBD' }}>{name}</Typography>
          </Stack>
        </Stack>
      </Breadcrumbs>
    </IconBreadcrumbs>
  );
};

export default BreadProduct;
