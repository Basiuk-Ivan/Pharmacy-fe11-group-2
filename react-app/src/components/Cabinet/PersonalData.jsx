import { TextField, Grid, Box, Container, MenuItem, Button, Checkbox, FormControlLabel } from '@mui/material';
import { styled, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateUserDB } from '../../utils/ActionsWithProduct/updateUserDB';
import { updateUser } from '../../redux/slice/userSlice';
import { theme } from '../../tools/muiTheme';
import ModalWindow from '../ModalWindow';
import { closeOrderModal, openOrderModal, removeItem } from '../../redux/slice/cartItems';
import { removeAllFromCartLocalStorage } from '../../utils/LocalStore/removeAllFromCartLocalStorage';

const ChangedTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-root': {
    borderRadius: 30
  }
}));

const PersonalData = () => {
  const firstName = useSelector(state => state.user.firstName);
  const secondName = useSelector(state => state.user.secondName);
  const gender = useSelector(state => state.user.gender);
  const email = useSelector(state => state.user.email);
  const phoneNumber = useSelector(state => state.user.phoneNumber);
  const userId = useSelector(state => state.user.id);
  const birthday = useSelector(state => state.user.birthday);
  const isOpenedOrderModal = useSelector(state => state.itemCards.isOpenedOrderModal);

  const dispatch = useDispatch();

  const [changePassword, setChangePassword] = useState(false);

  const handleCheckboxChange = () => {
    setChangePassword(!changePassword);
  };

  const handleCloseOrderModal = () => {
    dispatch(closeOrderModal());
  };
  const handleFormSubmit = async values => {
    const digitsOnly = values.phoneNumber.replace(/\D/g, '');
    const changedData = { ...values, phoneNumber: digitsOnly };
    try {
      const userData = await updateUserDB(userId, changedData, changePassword);
    } catch (err) {
      console.error('Error fetching', err);
    }
  };

  const changeUserStateData = values => {
    const digitsOnly = values.phoneNumber.replace(/\D/g, '');
    const changedData = { ...values, phoneNumber: digitsOnly };
    console.log(changedData);
    dispatch(updateUser(changedData));
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+$/, 'Введіть тільки літери')
      .min(2, 'Прізвище має містити не менше 2 символів')
      .max(20, 'Має бути не більше 20 символів')
      .required("Обов'язкове поле"),
    secondName: Yup.string()
      .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+$/, 'Введіть тільки літери')
      .min(2, 'Прізвище має містити не менше 2 символів')
      .max(20, 'Має бути не більше 20 символів')
      .required("Обов'язкове поле"),
    email: Yup.string().email('Невірний формат email').required("Обов'язкове поле"),
    phoneNumber: Yup.string()
      // .matches(/^[0-9]*$/, 'Можна вводити тільки цифри')
      .required("Обов'язкове поле"),
    ...(changePassword && { newpassword: Yup.string()
      .min(6, 'Мінімальна довжина пароля - 6 символів')
      .required("Обов'язкове поле") }),
    ...(changePassword && { confirmpassword: Yup.string()
      .oneOf([Yup.ref('newpassword'), null], 'Паролі повинні співпадати')
      .required("Обов'язкове поле") }),
  });

  const formik = useFormik({
    initialValues: {
      firstName,
      secondName,
      birthday: birthday || '2000.01.01',
      gender,
      email,
      phoneNumber,
      ...(changePassword && { newpassword: '' }),
      ...(changePassword && { confirmpassword: '' }),
    },
    validationSchema,
    onSubmit: async values => {
      await handleFormSubmit(values);
      changeUserStateData(values);
      dispatch(openOrderModal());
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mb: '60px' }}>
        <form onSubmit={formik.handleSubmit}>
          <ChangedTextField
            label="Ім'я"
            fullWidth
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.firstName && formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <ChangedTextField
            label="Прізвище"
            fullWidth
            name="secondName"
            value={formik.values.secondName}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.secondName && formik.errors.secondName)}
            helperText={formik.touched.secondName && formik.errors.secondName}
          />
          <Grid container spacing={2}>
            <Grid item md={6}>
              <ChangedTextField
                type="date"
                label="Дата народження"
                fullWidth
                name="birthday"
                value={formik.values.birthday}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item md={6}>
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
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.phoneNumber && formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />

          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={changePassword}
                  onChange={handleCheckboxChange}
                />
            }
              label="Встановити новий пароль"
            />
          </Box>
          {changePassword && (
            <>

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
            </>
          )}
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
        <ModalWindow
          mainText="Оновлено реєстраціні дані"
          handleClick={() => {}}
          handleClose={handleCloseOrderModal}
          isOpened={isOpenedOrderModal}
          actions={false}
        />
      </Container>
    </ThemeProvider>
  );
};

export default PersonalData;
