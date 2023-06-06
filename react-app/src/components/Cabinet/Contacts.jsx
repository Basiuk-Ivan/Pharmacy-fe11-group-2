import { TextField, Grid, Typography, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ChangedTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-root': {
    borderRadius: 30
  }
}));

const Contacts = () => {
  const validationSchema = Yup.object().shape({
    subject: Yup.string().required('Обязательное поле'),
    nameSurname: Yup.string().required('Обязательное поле'),
    phone: Yup.string().required('Обязательное поле').matches(/^[0-9]*$/, 'Можно вводить только цифры'),
    email: Yup.string().email('Неверный формат email').required('Обязательное поле'),
    text: Yup.string().required('Обязательное поле'),
  });

  const formik = useFormik({
    initialValues: {
      subject: '',
      nameSurname: '',
      phone: '',
      email: '',
      text: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    }
  });

  return (
    <Grid container>
      <Grid item md={3} />
      <Grid item md={8}>
        <Container sx={{ mb: '60px' }}>
          <Typography
            sx={{
              margin: '0 0 20px 0',
              fontFamily: 'Raleway, sans-serif',
              color: '#4F4F4F',
              fontWeight: '700',
              fontSize: '24px',
              width: '100%'
            }}
          >
            Форма зворотнього зв'язку
          </Typography>
          <form id="contacts" onSubmit={formik.handleSubmit}>
            <ChangedTextField
              label="Тема звернення"
              fullWidth
              name="subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              helperText={formik.touched.subject && formik.errors.subject}
            />

            <ChangedTextField
              label="Прізвище та Ім'я"
              fullWidth
              name="nameSurname"
              value={formik.values.nameSurname}
              onChange={formik.handleChange}
              error={formik.touched.nameSurname && Boolean(formik.errors.nameSurname)}
              helperText={formik.touched.nameSurname && formik.errors.nameSurname}
            />

            <Grid container spacing={2}>
              <Grid item md={6}>
                <ChangedTextField
                  label="Телефон"
                  fullWidth
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
              <Grid item md={6}>
                <ChangedTextField
                  label="e-mail адрес"
                  fullWidth
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
            </Grid>

            <ChangedTextField
              label="Текст повідомлення"
              fullWidth
              name="text"
              value={formik.values.text}
              onChange={formik.handleChange}
              error={formik.touched.text && Boolean(formik.errors.text)}
              helperText={formik.touched.text && formik.errors.text}
              multiline
              rows={5}
            />

            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: '#2FD3AE',
                borderRadius: 50,
                mt: '20px',
                color: '#FFFFFF',
                padding: '13px 68px 10px 68px'
              }}
            >
              Відправити
            </Button>
          </form>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Contacts;
