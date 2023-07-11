import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { CustomTextField, StyledButton, UnderlineSpan, HighlightSpan } from '../style';
import { openModalForgotPass } from '../../../redux/slice/modalSlice';

export const LoginForm = ({ activeTab, handleFormSubmit }) => {
  const isLogin = useSelector(state => state.isToken.isLogin);

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Невірний формат email').required("Обов'язкове поле"),
        password: Yup.string().required("Обов'язкове поле")
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
                  autoComplete="username"
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
                  autoComplete="current-password"
                />
                <ErrorMessage name="password" component="div" className="error-message" />
                {isLogin && <div className="error-message">Невірний логін або пароль</div>}
              </div>
              <div className="footer_container">
                <StyledButton type="submit" variant="contained" color="success">
                  Вхід
                </StyledButton>
                <Typography id="modal-modal-footer" variant="h6" component="p">
                  Забули пароль?{' '}
                  <UnderlineSpan
                    onClick={() => {
                      dispatch(openModalForgotPass());
                    }}
                  >
                    <HighlightSpan>перейдіть по посиланню</HighlightSpan>
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
