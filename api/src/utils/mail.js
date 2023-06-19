import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});


export const sendMailRegistration = async ({ email, firstName, secondName, password }) => {
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Ваші реєстраційні дані на сайті Pharmacy ',
        text: 'Привіт, шановний(на) ${firstName} ${secondName}. Ваша реєстрація успішна, ваш пароль: ${password}',
        html: `<span>Привіт, шановний(на) ${firstName} ${secondName}. Ваша реєстрація успішна, ваш пароль: ${password}</span>`,
    });
};