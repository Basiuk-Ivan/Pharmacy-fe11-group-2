import { Container } from '@mui/system';
import { Typography } from '@mui/material';

import steps from '../../assets/healthBlog/postsImg/nature.jpg';
import { BlogImg, title } from './style/index';

export const Nature = () => (
  <Container>
    <br />
    <strong style={title}>Життя в гармонії з природою</strong>
    <br />
    <br />
    <img style={BlogImg} src={steps} alt="Earth" />

    <Typography fontFamily="Roboto" component="p" sx={{ textAlign: 'justify'}}>
      <br />
      Мене дуже турбує те, що зараз відбувається у нашому світі. З кожним днем стається все більше катаклізмів, яких, у теорії, ми могли б уникнути. Людство розвивається, технічний прогрес зростає, але разом з цим неймовірно страждає флора і фауна. Зникають тварини, величні простори поступаються місцем мегаполісам. Люди потребують багато ресурсів для свого проживання.
      <br />
      <br />

      Не можна сприймати природу лише як простір для діяльності й джерело матеріальних благ. Це добре, що ми створюємо заповідники, організовуємо суботники, але ще є безліч речей, котрі ми маємо змінити. Наприклад, зменшити кількість шкідливих викидів у атмосферу та світовий океан, відмовитися від поліетилену або хоча б не викидати сміття просто на вулиці.
      <br />
      <br />
      Разом з новітніми винаходами приходить певна кількість негативних наслідків. Винайшли автомобіль – отримали шкідливі гази, що виходять в атмосферу, збудували завод – маємо відходи, які йдуть у річки та океан. Але радує те, що вчені шукають більш екологічні способи полегшити нам життя. У багатьох країнах люди перейшли на електричний транспорт, використовують багаторазові екологічні сумки замість поліетиленових пакетів. Таким чином наша планета звільняється від зайвого сміття. Та все ж існують місця скупчення великої кількості відходів. Наприклад, у моїй області знаходиться селище Макухівка, поряд з яким є сміттєзвалище, яке з кожним днем, місяцем та роком зростає у своїх розмірах. Жителям села набридло це. І вони анонсували 28 жовтня перекриття дороги до міського сміттєзвалища. Сподіваюся, що наша влада відреагує на цей протест.
      <br />
      <br />
      Серед свого оточення я намагаюся поширювати думку про збереження нашої природи. Мені дуже імпонує те, що більшість нашої молоді переймаються захистом довкілля. Доведу це на реальному прикладі. Десь кілька місяців тому, у моєму селі, а саме в центрі, хтось зламав сміттєвий бак і залишив його у такому стані поряд з зупинкою. Через декілька годин на сторінці нашої громади у Facebook з’явився пост від мешканця мого села (а саме одного з учнів школи) про те, що він знає, хто зробив таку шкоду, і якщо ця людина не виправить свою помилку, його дані буду виставлені у цій соцмережі. Можливо це досить суворо, але я вважаю, якщо мав сміливість таке зробити, то май сміливість відповідати за наслідки.
    </Typography>
    <br />
    <br />
  </Container>
);
