import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { CustomTextField, StyledButton, UnderlineSpan, HighlightSpan } from '../style';
import { getNewPasswordDB } from '../../../utils/ActionWithUser/getNewPasswordDB';
import { closeModalForgotPass } from '../../../redux/slice/modalSlice';

export const ForgotForm = () => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeModalForgotPass());
  };
  const handleFormSubmit = async values => {
    try {
      await getNewPasswordDB(values.email);
    } catch (err) {
      console.error('Error fetching', err);
    }

    handleCloseModal();
  };
  return (
    <Formik
      initialValues={{
        email: ''
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Невірний формат email').required('Обовязкове поле')
      })}
      onSubmit={handleFormSubmit}
      validate={values => {
        const errors = {};
        return errors;
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <Typography id="forgot-password-modal-title" variant="h6" component="h2">
            Забули пароль?
          </Typography>
          <Typography id="forgot-password-modal-description" sx={{ mt: 2, mb: 2 }}>
            Введіть ваш email і ми відправимо Вам інструкції з відновлення паролю.
          </Typography>
          <div className="form-group">
            <CustomTextField
              type="email"
              id="email"
              name="email"
              label="Ваш e-mail"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div className="footer_container">
            <StyledButton type="submit" variant="contained" color="success">
              Відновити пароль
            </StyledButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};
