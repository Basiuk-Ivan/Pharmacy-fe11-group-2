/* eslint-disable no-console */
import React, { useState } from 'react';
import { Modal, Tab, Tabs, TextField, Button, MenuItem, Typography } from '@mui/material';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
// import Auth from './Auth.scss';

const StyledButton = styled(Button)`
  width: 160px;
  height: 50px;
  border-radius: 26px;
  background: #2fd3ae;
`;

const UnderlineSpan = styled.span`
  text-decoration: underline;
  color: #2fd3ae;
`;

const HighlightSpan = styled.span`
  color: #2fd3ae;
`;

const CustomTextField = styled(TextField)`
  border-radius: 26px;
`;

const AuthButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  // const handleModalOpen = () => {
  //   setShowModal(true);
  // };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleFormSubmit = values => {
    console.log(values);
  };

  return (
    <Modal open={showModal} onClose={handleModalClose}>
      <div className="auth-modal">
        <container className="auth-modal__container">
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="Вхід" value="login" />
            <Tab label="Реєстрація" value="registration" />
          </Tabs>
          <Typography id="modal-modal-title" variant="h6" component="p">
            Залиште ваші дані, і ми зв'яжемося з вами. Ми не займаємося розсилкою рекламних повідомлень, а
            також не передаємо контактні дані третім особам
          </Typography>

          <Formik
            initialValues={{
              email: '',
              password: '',
              firstName: '',
              lastName: '',
              birthDate: '',
              gender: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Невірний формат email').required('Обовязкове поле'),
              password: Yup.string()
                .required('Обовязкове поле')
                .min(6, 'Мінімальна довжина пароля - 6 символів'),
              confirmPassword: Yup.string()
                .required('Обовязковк поле')
                .oneOf([Yup.ref('password'), null], 'Паролі повинні співпадати')
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
                    <container className="footer_container">
                      <StyledButton type="submit" variant="contained" color="success">
                        Вхід
                      </StyledButton>
                      <Typography id="modal-modal-footer" variant="h6" component="p">
                        Натискаючи на кнопку, ви погоджуєтесь на обробку{' '}
                        <UnderlineSpan>
                          <HighlightSpan>персональних даних</HighlightSpan>
                        </UnderlineSpan>
                      </Typography>
                    </container>
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
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        label="Дата нарождення"
                        variant="outlined"
                        value={values.birthDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                      <ErrorMessage name="birthDate" component="div" className="error-message" />
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
                    <container className="footer_container">
                      <StyledButton type="submit" variant="contained" color="success">
                        Реєстрація
                      </StyledButton>
                      <Typography id="modal-modal-footer" variant="h6" component="p">
                        Натискаючи на кнопку, ви погоджуєтесь на обробку{' '}
                        <UnderlineSpan>
                          <HighlightSpan>персональних даних</HighlightSpan>
                        </UnderlineSpan>
                      </Typography>
                    </container>
                  </>
                )}
              </Form>
            )}
          </Formik>
        </container>
      </div>
    </Modal>
  );
};

export default AuthButton;
