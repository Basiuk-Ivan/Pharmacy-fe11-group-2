import { Table, TableBody, TableCell, TableRow, Typography, Container } from '@mui/material';
import { useSelector } from 'react-redux';

const TotalAmountForm = () => {
  const productItemCart = useSelector(state => state.itemCards.items);

  const totalAmount = () => {
    let total = 0;
    let itemDiscount = 0; // Изменено на let
    productItemCart.forEach(element => {
      total += element.price;
      itemDiscount += element.discount; // Изменено на itemDiscount
    });
    return { total, itemDiscount }; // Возвращаем объект с обоими значениями
  };

  const { total, itemDiscount } = totalAmount(); // Деструктурируем значения из функции

  return (
    <Container>
      <Table sx={{ mb: '40px' }}>
        <TableBody>
          <TableRow>
            <TableCell colSpan={2} sx={{ backgroundColor: 'white', fontSize: '24px', fontWeight: 700, fontFamily: 'Raleway, sans-serif', color: '#4F4F4F' }}>
              Загальна сума
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Знижка</TableCell>
            <TableCell>0 грн</TableCell>
          </TableRow>
          <TableRow
            sx={{
              backgroundColor: 'white'
            }}
          >
            <TableCell>Без урахування доставки</TableCell>
            <TableCell>{`${totalAmount()} грн.`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography sx={{ textAlign: 'end', fontWeight: 700 }}>
        Загальна сума: {total - itemDiscount} грн.
      </Typography>
    </Container>
  );
};

export default TotalAmountForm;
