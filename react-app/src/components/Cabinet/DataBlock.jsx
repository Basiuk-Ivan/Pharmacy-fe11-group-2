import { TextField, Container, MenuItem, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { styled, ThemeProvider } from '@mui/material/styles';
import ModalWindow from '../ModalWindow';
import { updateUserDB } from '../../utils/ActionsWithProduct/updateUserDB';
import { updateUser } from '../../redux/slice/userSlice';
import { theme as muiTheme } from '../../tools/muiTheme';
import { closeOrderModal, openOrderModal } from '../../redux/slice/cartItems';
import { saveBtnStyles } from './style';

const ChangedTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-root': {
    borderRadius: 30
  }
}));

const DataBlock = () => {
  const firstName = useSelector(state => state.user.firstName);
  const secondName = useSelector(state => state.user.secondName);
  const gender = useSelector(state => state.user.gender);
  const email = useSelector(state => state.user.email);
  const phoneNumber = useSelector(state => state.user.phoneNumber);
  const userId = useSelector(state => state.user.id);
  const birthday = useSelector(state => state.user.birthday);
  const isOpenedOrderModal = useSelector(state => state.itemCards.isOpenedOrderModal);

  const dispatch = useDispatch();

  const handleCloseOrderModal = () => {
    dispatch(closeOrderModal());
  };
  const handleFormSubmit = async values => {
    const digitsOnly = values.phoneNumber.replace(/\D/g, '');
    const changedData = { ...values, phoneNumber: digitsOnly };
    try {
      const userData = await updateUserDB(userId, changedData, false);
    } catch (err) {
      console.error('Error fetching', err);
    }
  };

  const changeUserStateData = values => {
    const digitsOnly = values.phoneNumber.replace(/\D/g, '');
    const changedData = { ...values, phoneNumber: digitsOnly };
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
    phoneNumber: Yup.string().matches(/^[0-9]*$/, 'Можна вводити тільки цифри').required("Обов'язкове поле")
  });

  const formik = useFormik({
    initialValues: {
      firstName,
      secondName,
      birthday: birthday || '2000-01-01',
      gender,
      email,
      phoneNumber: phoneNumber || ''
    },
    validationSchema,
    onSubmit: async values => {
      await handleFormSubmit(values);
      changeUserStateData(values);
      dispatch(openOrderModal());
    }
  });

  return (
    <ThemeProvider theme={muiTheme}>
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
          <ChangedTextField
            type="date"
            label="Дата народження"
            fullWidth
            name="birthday"
            value={formik.values.birthday}
            onChange={formik.handleChange}
          />
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
          <Button variant="contained" type="submit" sx={saveBtnStyles}>
            Зберегти зміни
          </Button>
        </form>
        <ModalWindow
          mainText="Оновлено реєстраціні дані"
          handleClick={() => {
          }}
          handleClose={handleCloseOrderModal}
          isOpened={isOpenedOrderModal}
          actions={false}
        />
      </Container>
    </ThemeProvider>
  );
};

export default DataBlock;
