import {
  Table, TableBody, TableCell, TableRow, Typography, Container
} from '@mui/material';

const TotalAmountForm = () => (
  <Container>
    <Table
      sx={{
        mb: '40px'
      }}
    >
      <TableBody sx={{}}>
        <TableRow>
          <TableCell
            colSpan={2}
            sx={{
              backgroundColor: 'white',
              fontSize: '24px',
              fontWeight: 700
            }}
          >
            Загальна сума
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Скидка</TableCell>
          <TableCell>-32 руб</TableCell>
        </TableRow>
        <TableRow
          sx={{
            backgroundColor: 'white'
          }}
        >
          <TableCell>Итого без доставки</TableCell>
          <TableCell>548 руб
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Typography
      sx={{
        textAlign: 'end',
        fontWeight: 700
      }}
    >
      Загальна сума: $198.65
    </Typography>
  </Container>
);

export default TotalAmountForm;
