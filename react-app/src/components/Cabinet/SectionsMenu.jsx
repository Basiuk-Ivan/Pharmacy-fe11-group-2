import { Table, TableBody, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableStyles } from './style';

const ChangedTableCell = styled(TableCell)(() => ({
  color: '#4F4F4F',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '700',
  fontSize: '14px',
  textTransform: 'uppercase',
  cursor: 'pointer'
}
));

const SectionsMenu = props => {
  const { handleSectionClick } = props;
  return (
    <Table sx={tableStyles}>
      <TableBody>
        <TableRow>
          <ChangedTableCell onClick={() => handleSectionClick('personalData')}>
            Особисті дані
          </ChangedTableCell>
        </TableRow>
        <TableRow>
          <ChangedTableCell onClick={() => handleSectionClick('changePassword')}>
            Зміна паролю
          </ChangedTableCell>
        </TableRow>
        <TableRow>
          <ChangedTableCell
            onClick={() => handleSectionClick('orders')}
          >Ваші замовлення
          </ChangedTableCell>
        </TableRow>
        <TableRow>
          <ChangedTableCell
            onClick={() => handleSectionClick('reviews')}
          >Ваші відгуки
          </ChangedTableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default SectionsMenu;
