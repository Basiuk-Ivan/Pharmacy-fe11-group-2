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
              fontWeight: 700,
              fontFamily: 'Raleway, sans-serif',
              color: '#4F4F4F'
            }}
          >
            Загальна сума
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Знижка</TableCell>
          <TableCell>25 грн</TableCell>
        </TableRow>
        <TableRow
          sx={{
            backgroundColor: 'white'
          }}
        >
          <TableCell>Без урахування доставки</TableCell>
          <TableCell>548 грн
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
      Загальна сума: 198.65 грн
    </Typography>
  </Container>
);

export default TotalAmountForm;
