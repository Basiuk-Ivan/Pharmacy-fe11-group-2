import { Table, TableBody, TableCell, TableRow, Typography, Container } from '@mui/material';
import { useSelector } from 'react-redux';

const TotalAmountForm = () => {
  const productItemCart = useSelector(state => state.itemCards.items);
  const sumDiscount = useSelector(state => state.itemCards.sumDiscount);
  const sumWithDiscount = useSelector(state => state.itemCards.sumWithDiscount);

  const totalAmount = () => {
    let total = 0;
    let itemDiscount = 0; // Изменено на let
    productItemCart.forEach(element => {
      total += element.price;
      itemDiscount += element.discount; // Изменено на itemDiscount
    });
    return { total, itemDiscount }; // Возвращаем объект с обоими значениями
  };


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
            <TableCell>{sumDiscount}</TableCell>
          </TableRow>
          <TableRow
            sx={{
              backgroundColor: 'white'
            }}
          >
            <TableCell>Без урахування доставки</TableCell>
            <TableCell>{sumWithDiscount} грн.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography sx={{ textAlign: 'end', fontWeight: 700 }}>
        Загальна сума: {sumWithDiscount} грн.
      </Typography>
    </Container>
  );
};

export default TotalAmountForm;
