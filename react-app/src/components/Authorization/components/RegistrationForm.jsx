import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, MenuItem, Typography } from '@mui/material';

import { CustomTextField, StyledButton, UnderlineSpan, HighlightSpan } from '../style';

export const RegistrationForm = ({ activeTab, handleFormSubmit }) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      secondName: '',
      phoneNumber: '',
      gender: ''
    }}
    validationSchema={Yup.object().shape({
      firstName: Yup.string()
        .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+$/, 'Введіть тільки букви')
        .required("Обов'язкове поле"),
      secondName: Yup.string()
        .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+$/, 'Введіть тільки букви')
        .required("Обов'язкове поле"),
      email: Yup.string().email('Невірний формат email').required('Обовязкове поле'),
      password: Yup.string().required('Обовязкове поле').min(6, 'Мінімальна довжина пароля - 6 символів'),
      confirmPassword: Yup.string()
        .required('Обовязкове поле')
        .oneOf([Yup.ref('password'), null], 'Паролі повинні співпадати'),
      phoneNumber: Yup.string()
        .required('Обовязкове поле')
        .matches(/^[0-9]*$/, 'Можна вводити тільки цифри')
    })}
    onSubmit={handleFormSubmit}
    validate={values => {
      const errors = {};
      return errors;
    }}
  >
    {({ values, handleChange, handleBlur }) => (
      <Form>
        {activeTab === 'registration' && (
          <>
            <div className="form-group">
              <CustomTextField
                type="text"
                id="firstName"
                name="firstName"
                label="Введіть Ім'я"
                variant="outlined"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="firstName" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <CustomTextField
                type="text"
                id="secondName"
                name="secondName"
                label="Введіть Прізвище"
                variant="outlined"
                value={values.secondName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="secondName" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <CustomTextField
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                label="Введіть Телефон"
                variant="outlined"
                as={TextField}
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={{
                  pattern: '[0-9]*'
                }}
              />
              <ErrorMessage name="phoneNumber" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <CustomTextField
                select
                id="gender"
                name="gender"
                label="Стать"
                variant="outlined"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <MenuItem value="male">Чоловіча</MenuItem>
                <MenuItem value="female">Жіноча</MenuItem>
              </CustomTextField>
              <ErrorMessage name="gender" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <CustomTextField
                type="email"
                id="email"
                name="email"
                label="Введіть e-mail"
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
                label="Введіть пароль"
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <CustomTextField
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                label="Підтвердіть пароль"
                variant="outlined"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="confirmPassword" component="div" className="error-message" />
            </div>
            <div className="footer_container">
              <StyledButton type="submit" variant="contained" color="success">
                Реєстрація
              </StyledButton>
              <Typography id="modal-modal-footer" variant="h6" component="p">
                Натискаючи на кнопку, ви погоджуєтесь на обробку{' '}
                <UnderlineSpan>
                  <HighlightSpan>персональних даних</HighlightSpan>
                </UnderlineSpan>
              </Typography>
            </div>
          </>
        )}
      </Form>
    )}
  </Formik>
);
