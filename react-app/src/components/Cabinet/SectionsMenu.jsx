import { Table, TableBody, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';

const ChangedTableCell = styled(TableCell)(() => ({
  color: '#4F4F4F',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '700',
  fontSize: '14px',
  textTransform: 'uppercase',
  cursor: 'pointer'
}
));

const SectionsMenu = () => (
  <Table
    sx={{
      mb: '40px',
      border: '1px solid #E7E9EB',
    }}
  >
    <TableBody>
      <TableRow>
        <ChangedTableCell>
          Особисті дані
        </ChangedTableCell>
      </TableRow>
      <TableRow>
        <ChangedTableCell sx={{
          backgroundColor: '#F7FAFB'
        }}
        >Ваші замовлення
        </ChangedTableCell>
      </TableRow>
      <TableRow
        sx={{
          backgroundColor: 'white'
        }}
      >
        <ChangedTableCell>Зворотній Зв'язок</ChangedTableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export default SectionsMenu;
