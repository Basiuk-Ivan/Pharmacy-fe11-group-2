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
        email: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Невірний формат email').required('Обовязкове поле'),
      })}
      onSubmit={handleFormSubmit}
      validate={values => {
        const errors = {};
        return errors;
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
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
              Отримати новий пароль
            </StyledButton>
            <Typography id="modal-modal-footer" variant="h6" component="p">
              Натискаючи на кнопку, ви погоджуєтесь на обробку{' '}
              <UnderlineSpan>
                <HighlightSpan>персональних даних</HighlightSpan>
              </UnderlineSpan>
            </Typography>
          </div>
        </Form>
      )}
    </Formik>
  );
};
