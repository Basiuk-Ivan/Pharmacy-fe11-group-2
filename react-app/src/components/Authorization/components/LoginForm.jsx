import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Typography } from '@mui/material';

import { CustomTextField, StyledButton, UnderlineSpan, HighlightSpan } from '../style';
import ForgotPasswordModal from './ForgotPassword.jsx';

export const LoginForm = ({ activeTab, handleFormSubmit }) => {
  const [forgotPasswordOpen, setForgotPasswordOpen] = React.useState(false);

  const handleForgotPasswordOpen = () => {
    setForgotPasswordOpen(true);
  };

  const handleForgotPasswordClose = () => {
    setForgotPasswordOpen(false);
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Невірний формат email').required('Обовязкове поле'),
        password: Yup.string().required('Обовязкове поле').min(6, 'Мінімальна довжина пароля - 6 символів')
      })}
      onSubmit={handleFormSubmit}
      validate={values => {
        const errors = {};
        return errors;
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          {activeTab === 'login' && (
            <>
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
              <div className="form-group">
                <CustomTextField
                  type="password"
                  id="password"
                  name="password"
                  label="Пароль"
                  variant="outlined"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>
              <div className="footer_container">
                <StyledButton type="submit" variant="contained" color="success">
                  Вхід
                </StyledButton>
                <Typography id="modal-modal-footer" variant="h6" component="p">
                  <UnderlineSpan>
                    <Button onClick={handleForgotPasswordOpen}>Забули пароль</Button>
                    <ForgotPasswordModal open={forgotPasswordOpen} onClose={handleForgotPasswordClose} />
                  </UnderlineSpan>
                </Typography>
              </div>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};
