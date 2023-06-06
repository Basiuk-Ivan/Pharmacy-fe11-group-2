import { Container, Typography, Grid } from '@mui/material';
import Contacts from '../components/Cabinet/Contacts';
import Orders from '../components/Cabinet/Orders';
import PersonalData from '../components/Cabinet/PersonalData';
import SectionsMenu from '../components/Cabinet/SectionsMenu';
import Bread from '../components/Favourite/Bread';

const Cabinet = () => {
  const ttt = 'asd';
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
      <Grid
        container
        sx={{
          gap: '30px'
        }}
      >
        <Grid
          item
          md={3}
        ><SectionsMenu />
        </Grid>

        <Grid
          item
          md={8}
        >
          <PersonalData />
        </Grid>
      </Grid>
      <Orders />
      <Contacts />
    </Container>

  );
};

export default Cabinet;
