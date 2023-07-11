import { TextField, Container, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { styled, ThemeProvider } from '@mui/material/styles';
import ModalWindow from '../ModalWindow';
import { updateUserDB } from '../../utils/ActionsWithProduct/updateUserDB';
import { closeModalChangePassword, openModalChangePassword } from '../../redux/slice/userSlice';
import { theme as muiTheme } from '../../tools/muiTheme';
import { saveBtnStyles } from './style';

const ChangedTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-root': {
    borderRadius: 30
  }
}));

const ChangePasswordBlock = () => {
  const userId = useSelector(state => state.user.id);
  const isOpenModalChangePassword = useSelector(state => state.user.isOpenModalChangePassword);

  const dispatch = useDispatch();

  const handleFormSubmit = async values => {
    try {
      const userData = await updateUserDB(userId, values, true);
    } catch (err) {
      console.error('Error fetching', err);
    }
  };
  const handleCloseModal = () => {
    dispatch(closeModalChangePassword());
  };

  const validationSchema = Yup.object().shape({
    newpassword: Yup.string().min(6, 'Мінімальна довжина пароля - 6 символів').required("Обов'язкове поле"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('newpassword'), null], 'Паролі повинні співпадати')
      .required("Обов'язкове поле")
  });

  const formik = useFormik({
    initialValues: {
      newpassword: '',
      confirmpassword: ''
    },
    validationSchema,
    onSubmit: async values => {
      await handleFormSubmit(values);
      dispatch(openModalChangePassword());
    }
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <Container sx={{ mb: '60px' }}>
        <form onSubmit={formik.handleSubmit}>
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
          <Button variant="contained" type="submit" sx={saveBtnStyles}>
            Зберегти зміни
          </Button>
        </form>
        <ModalWindow
          mainText="Пароль оновлено успішно"
          handleClick={() => {
          }}
          handleClose={handleCloseModal}
          isOpened={isOpenModalChangePassword}
          actions={false}
        />
      </Container>
    </ThemeProvider>
  );
};

export default ChangePasswordBlock;
