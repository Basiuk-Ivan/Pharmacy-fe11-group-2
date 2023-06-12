import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Tab, Tabs, TextField, MenuItem, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { theme } from '../../tools/muiTheme';
import { closeModal } from '../../redux/slice/modalSlice';
import './Auth.scss';
import { style, StyledButton, UnderlineSpan, HighlightSpan, CustomTextField } from './Style';

const AuthButton = () => {
  const isOpen = useSelector(state => state.modalSlice.openModal);
  const dispatch = useDispatch();

  const handleCloseModal = () => dispatch(closeModal());

  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleFormSubmit = values => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Modal
          open={isOpen}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="auth-modal">
              <div className="auth-modal__container">
                <Tabs color="success" value={activeTab} onChange={handleTabChange}>
                  <Tab label="Вхід" value="login" />
                  <Tab color="success" label="Реєстрація" value="registration" />
                </Tabs>
                <Typography id="modal-modal-title" variant="h6" component="p">
                  Залиште ваші дані, і ми зв'яжемося з вами. Ми не займаємося розсилкою рекламних повідомлень,
                  а також не передаємо контактні дані третім особам
                </Typography>

                <Formik
                  initialValues={{
                    email: '',
                    password: '',
                    firstName: '',
                    lastName: '',
                    phone: '',
                    gender: ''
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().email('Невірний формат email').required('Обовязкове поле'),
                    password: Yup.string()
                      .required('Обовязкове поле')
                      .min(6, 'Мінімальна довжина пароля - 6 символів'),
                    confirmPassword: Yup.string()
                      .required('Обовязкове поле')
                      .oneOf([Yup.ref('password'), null], 'Паролі повинні співпадати'),
                    phone: Yup.string()
                      .required('Обовязкове поле')
                      .matches(/^[0-9]*$/, 'Можна вводити тільки цифри')
                  })}
                  onSubmit={handleFormSubmit}
                  // eslint-disable-next-line no-unused-vars
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
                              Натискаючи на кнопку, ви погоджуєтесь на обробку{' '}
                              <UnderlineSpan>
                                <HighlightSpan>персональних даних</HighlightSpan>
                              </UnderlineSpan>
                            </Typography>
                          </div>
                        </>
                      )}

                      {activeTab === 'registration' && (
                        <>
                          <div className="form-group">
                            <CustomTextField
                              type="text"
                              id="firstName"
                              name="firstName"
                              label="Введіть Імя"
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
                              id="lastName"
                              name="lastName"
                              label="Введіть Прізвище"
                              variant="outlined"
                              value={values.lastName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <ErrorMessage name="lastName" component="div" className="error-message" />
                          </div>
                          <div className="form-group">
                            <CustomTextField
                              type="text"
                              id="phone"
                              name="phone"
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
                            <ErrorMessage name="phone" component="div" className="error-message" />
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
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </ThemeProvider>
  );
};
export default AuthButton;
