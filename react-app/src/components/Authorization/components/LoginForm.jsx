import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { CustomTextField, StyledButton, UnderlineSpan, HighlightSpan } from '../style';
import { openModalForgotPass } from '../../../redux/slice/modalSlice';

export const LoginForm = ({ activeTab, handleFormSubmit }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Неверный формат email').required('Обязательное поле'),
        password: Yup.string().required('Обязательное поле').min(6, 'Минимальная длина пароля - 6 символов')
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
                Вход
              </StyledButton>
              <Typography id="modal-modal-footer" variant="h6" component="p">
                Забыли пароль?{' '}
                <UnderlineSpan
                  onClick={() => {
                    dispatch(openModalForgotPass());
                  }}
                >
                  <HighlightSpan>перейдите по ссылке</HighlightSpan>
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
