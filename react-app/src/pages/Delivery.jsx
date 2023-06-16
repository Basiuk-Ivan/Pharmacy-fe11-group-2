import { Container } from '@mui/system';
import { Typography } from '@mui/material';

export const Delivery = () => (
  <Container>
    <br />
    <br />
    <Typography fontFamily="Roboto" component="p">
      <strong>Доставка</strong>
      <br />
      <br />
      Способи доставки
      <br />
      На сайті наразі є два способи доставки:
    </Typography>
    <br />
    <Typography fontFamily="Roboto" component="p">
      cамовивіз з аптеки;
      <br />
      доставка у відділення «Нова Пошта».
      <br />
      Ви можете обрати більш зручний для вас при оформленні замовлення.
    </Typography>
    <br />
    <Typography fontFamily="Roboto" component="p">
      Самовивіз з найближчої аптеки
      <br />
      Оплата на сайті чи в аптеці
      <br />
      Отримання в день замовлення (при умові, що товар є в аптеці)
      <br />
      Найкраща ціна
    </Typography>
    <br />
    <Typography fontFamily="Roboto" component="p">
      Доставка Новою Поштою
      <br />
      Оплата на сайті чи у відділенні Нової пошти
      <br />
      Безкоштовна доставка від 750 грн
      <br />
      Доставка у відділення Нової пошти
    </Typography>
    <br />
    <br />
  </Container>
);
