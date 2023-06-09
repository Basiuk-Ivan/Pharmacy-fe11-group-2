import { Container, Typography, Grid } from '@mui/material';
import { useState } from 'react';
import Contacts from '../components/Cabinet/Contacts';
import Orders from '../components/Cabinet/Orders';
import PersonalData from '../components/Cabinet/PersonalData';
import SectionsMenu from '../components/Cabinet/SectionsMenu';
import Bread from '../components/Bread';

const Cabinet = () => {
  const [activeSection, setActiveSection] = useState('personalData');

  const handleSectionClick = section => {
    setActiveSection(section);
  };

  return (
    <Container disableGutters>
      <Bread />
      <Typography
        sx={{
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 700,
          fontSize: '36px',
          color: '#2E3A59'
        }}
      >
        Особистий кабінет
      </Typography>
      <Grid container sx={{ gap: '30px' }}>
        <Grid item md={3}>
          <SectionsMenu handleSectionClick={handleSectionClick} />
        </Grid>

        <Grid item md={8}>
          {activeSection === 'personalData' && <PersonalData />}
          {activeSection === 'orders' && <Orders />}
          {activeSection === 'feedback' && <Contacts />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cabinet;
