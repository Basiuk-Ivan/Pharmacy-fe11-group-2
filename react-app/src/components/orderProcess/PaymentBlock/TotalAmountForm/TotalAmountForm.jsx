import { Table, TableBody, TableCell, TableRow, Typography, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

const TotalAmountForm = () => {
  const cartSumWithoutDiscount = useSelector(state => state.itemCards.cartSumWithoutDiscount);
  const sumDiscount = useSelector(state => state.itemCards.sumDiscount);
  const sumWithDiscount = useSelector(state => state.itemCards.sumWithDiscount);

  return (
    <Container>
      <Table sx={{ mb: '40px' }}>
        <TableBody>
          <TableRow>
            <TableCell
              colSpan={2}
              sx={{
                backgroundColor: 'white',
                fontSize: '22px',
                fontWeight: 700,
                fontFamily: 'Raleway, sans-serif',
                color: '#4F4F4F'
              }}
            >
              Загальна сума
            </TableCell>
          </TableRow>

          <TableRow
            sx={{
              backgroundColor: 'white'
            }}
          >
            <TableCell>Вартість без урахування знижки</TableCell>
            <TableCell sx={{ minWidth: '140px', textAlign: 'center' }}>{cartSumWithoutDiscount} грн.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Знижка</TableCell>
            <TableCell sx={{ minWidth: '140px', textAlign: 'center' }}>- {sumDiscount} грн.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography sx={{ textAlign: 'end', fontWeight: 700 }}>
        До сплати: {sumWithDiscount} грн.
      </Typography>
    </Container>
  );
};

export default TotalAmountForm;
