import { TextField, Grid, Typography, Container, MenuItem, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';

const ChangedTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-root': {
    borderRadius: 30
  }
}));

const PersonalData = () => {
  const validationSchema = Yup.object().shape({
    surname: Yup.string().required('Обовязкове поле'),
    name: Yup.string().required('Обовязкове поле'),
    email: Yup.string().email('Невірний формат email').required('Обовязкове поле'),
    phone: Yup.string()
      .required('Обовязкове поле')
      .matches(/^[0-9]*$/, 'Можна вводити тільки цифри'),
    newpassword: Yup.string().required('Обовязкове поле').min(6, 'Мінімальна довжина пароля - 6 символів'),

    confirmpassword: Yup.string()
      .required('Обовязкове поле')
      .oneOf([Yup.ref('newpassword'), null], 'Паролі повинні співпадати')
  });

  const formik = useFormik({
    initialValues: {
      surname: '',
      name: '',
      day: '',
      month: '',
      year: '',
      gender: '',
      email: '',
      phone: '',
      newpassword: '',
      confirmpassword: ''
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  });

  const daysDate = () => {
    const items = [];
    for (let x = 1; x < 32; x++) {
      items.push(
        <MenuItem key={x + 9} value={`${x}`}>
          {x}
        </MenuItem>
      );
    }
    return items;
  };

  const monthsDate = () => {
    const items = [
      'січень',
      'лютий',
      'березень',
      'квітень',
      'травень',
      'червень',
      'липень',
      'серпень',
      'вересень',
      'жовтень',
      'листопад',
      'грудень'
    ];
    return items.map(el => (
      <MenuItem key={el} value={`${el}`}>
        {el}
      </MenuItem>
    ));
  };

  const yearsDate = () => {
    const items = [];
    for (let x = 2023; x > 1900; x--) {
      items.push(
        <MenuItem key={x + 9} value={`${x}`}>
          {x}
        </MenuItem>
      );
    }
    return items;
  };

  return (
    <Container sx={{ mb: '60px' }}>
      <form onSubmit={formik.handleSubmit}>
        <ChangedTextField
          label="Прізвище"
          fullWidth
          name="surname"
          value={formik.values.surname}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.surname && formik.errors.surname)}
          helperText={formik.touched.surname && formik.errors.surname}
        />
        <ChangedTextField
          label="Ім'я"
          fullWidth
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.name && formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <Typography>Дата народження</Typography>
        <Grid container>
          <Grid item md={3}>
            <ChangedTextField
              select
              label="День"
              fullWidth
              name="day"
              value={formik.values.day}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.day && formik.errors.day)}
              helperText={formik.touched.day && formik.errors.day}
            >
              {daysDate()}
            </ChangedTextField>
          </Grid>
          <Grid item md={3}>
            <ChangedTextField
              select
              label="Місяць"
              fullWidth
              name="month"
              value={formik.values.month}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.month && formik.errors.month)}
              helperText={formik.touched.month && formik.errors.month}
            >
              {monthsDate()}
            </ChangedTextField>
          </Grid>
          <Grid item md={3}>
            <ChangedTextField
              select
              label="Рік"
              fullWidth
              name="year"
              value={formik.values.year}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.year && formik.errors.year)}
              helperText={formik.touched.year && formik.errors.year}
            >
              {yearsDate()}
            </ChangedTextField>
          </Grid>
          <Grid item md={3}>
            <ChangedTextField
              select
              label="Стать"
              fullWidth
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.gender && formik.errors.gender)}
              helperText={formik.touched.gender && formik.errors.gender}
            >
              <MenuItem value="male">Чоловіча</MenuItem>
              <MenuItem value="female">Жіноча</MenuItem>
            </ChangedTextField>
          </Grid>
        </Grid>
        <ChangedTextField
          label="e-mail адреса"
          fullWidth
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.email && formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <ChangedTextField
          label="Телефон"
          fullWidth
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.phone && formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <ChangedTextField
          type="password"
          label="Новий пароль"
          fullWidth
          name="newpassword"
          value={formik.values.newpassword}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.newpassword && formik.errors.newpassword)}
          helperText={formik.touched.newpassword && formik.errors.newpassword}
        />
        <ChangedTextField
          type="password"
          label="Підтвердження пароля"
          fullWidth
          name="confirmpassword"
          value={formik.values.confirmpassword}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.confirmpassword && formik.errors.confirmpassword)}
          helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
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
          Зберегти зміни
        </Button>
      </form>
    </Container>
  );
};

export default PersonalData;
