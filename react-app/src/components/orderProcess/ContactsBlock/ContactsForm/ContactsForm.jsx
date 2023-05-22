import { TextField, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ChangedTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-root': {
    borderRadius: 30
  }
}));

const ContactsForm = () => (
  <>
    <Typography
      variant="h5"
      sx={{
        margin: '40px 0 40px 45px'
      }}
    >
      Контактні дані
    </Typography>
    <form id="contacts">
      <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
        <Grid item md={5}>
          <ChangedTextField label="Ваше ім'я" fullWidth />
          <ChangedTextField label="Ваш e-mail" fullWidth />
          <ChangedTextField label="Місто" fullWidth />
          <ChangedTextField label="Будинок" fullWidth />
        </Grid>
        <Grid item md={5}>
          <ChangedTextField label="Ваше прізвище" fullWidth />
          <ChangedTextField label="Ваш телефон" fullWidth />
          <ChangedTextField label="Вулиця" fullWidth />
          <ChangedTextField label="Квартира" fullWidth />
        </Grid>
      </Grid>
    </form>
  </>
);

export default ContactsForm;
