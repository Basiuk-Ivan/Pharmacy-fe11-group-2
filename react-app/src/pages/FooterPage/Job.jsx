import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import { MailTo } from './style';

export const Job = () => (
  <Container>
    <br />
    <Typography fontFamily="Roboto" component="p">
      <strong>Вакансії</strong>
      <br />
      <br />
      Запрошуємо в свою команду
    </Typography>
    <br />
    <Typography fontFamily="Roboto" component="p">
      Якщо Ви хочете розвиватися і допомогти нам розвивати нашу компанію, то ми чекаємо саме Вас!
    </Typography>
    <br />
    <Typography fontFamily="Roboto" component="p">
      Ми будемо раді бачити в своїй команді кваліфікованих фахівців на наступних позиціях:<br />
      контент-менеджер;<br />
      автор текстів;<br />
      співробітник колл-центру;<br />
      програміст.
    </Typography>
    <br />
    <Typography fontFamily="Roboto" component="p">
      А наші аптечні заклади-партнери у зв'язку з постійним розширенням і розвитком шукають:<br />
      кваліфікованих провізорів;<br />
      досвідчених фармацевтів.
    </Typography>
    <br />
    <Typography fontFamily="Roboto" component="p">
      З питань працевлаштування звертайтеся:<br />
      по телефону: 0-800-999-999 (безкоштовно з усіх мобільних операторів);<br />
      відправляйте своє резюме на електронну пошту:&nbsp;
      <MailTo>
        <a href="mailto:fe.11.group.c@gmail.com">fe.11.group.c@gmail.com</a>.
      </MailTo>
    </Typography>
    <br />
    <br />
  </Container>
);
