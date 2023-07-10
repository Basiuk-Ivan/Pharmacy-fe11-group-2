import { TextField, Box, Container, MenuItem, Button, Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';
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

const ChangePasswordBlock = () => {
  const userId = useSelector(state => state.user.id);
  const isOpenedOrderModal = useSelector(state => state.itemCards.isOpenedOrderModal);

  const dispatch = useDispatch();

    const handleFormSubmit = async values => {
        try {
            const userData = await updateUserDB(userId, values, true);
        } catch (err) {
            console.error('Error fetching', err);
        }
    };
  const handleCloseOrderModal = () => {
    dispatch(closeOrderModal());
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
      changeUserStateData(values);
      dispatch(openOrderModal());
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

export default ChangePasswordBlock;
