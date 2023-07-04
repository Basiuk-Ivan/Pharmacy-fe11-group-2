import nodemailer from 'nodemailer';
import HTML_TEMPLATE from './mailTemplate.js';

// const transporter = nodemailer.createTransport({
//   host: 'smtp.ukr.net',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'pharmacy_shop@ukr.net',
//     pass: '73tOm3Qhbe71AhIn',
//   },
//   tls: { rejectUnauthorized: false },
// });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fe.11.group.c@gmail.com',
    pass: 'hynlysmxahzjyllh',
  },
  tls: { rejectUnauthorized: false },
});

export const sendMailOrder = async ({ products, email, totalPrice }) => {
  const productsList = products.map(
    ({ name, price, quantity }) =>
      `<li>${name} ціна: ${price} грн    кількість: ${quantity} шт  разом: ${
        price * quantity
      } грн </li>`
  );
  const message = `<p>Привіт, шановний клієнт. Це ваше замовлення </p>
        <ul>${productsList}</ul>
        <hr>
        <div style="text-align: right">РАЗОМ:  ${totalPrice} грн</div>
        `;
  await transporter.sendMail({
    from: 'fe.11.group.c@gmail.com',
    to: email,
    subject: 'Ваше замовлення від сайту Pharmacy ',
    text: 'message',
    html: HTML_TEMPLATE(message),
  });
};

export const sendMailRegistration = async ({
  email,
  firstName,
  secondName,
  password,
}) => {
  const message =
    'Привіт, шановний(на) ' +
    firstName +
    ' ' +
    secondName +
    '.Ваша реєстрація успішна. Ваша пошта: ' +
    email +
    ', Ваш пароль: ' +
    password;
  await transporter.sendMail({
    // from: 'pharmacy_shop@ukr.net',
    from: 'fe.11.group.c@gmail.com',
    to: email,
    subject: 'Ваші реєстраційні дані на сайті Pharmacy ',
    text: message,
    html: HTML_TEMPLATE(message),
  });
};
