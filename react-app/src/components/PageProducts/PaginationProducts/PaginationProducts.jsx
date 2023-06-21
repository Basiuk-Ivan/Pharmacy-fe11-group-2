import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { Pagination } from '@mui/material';
import { theme } from '../../../tools/muiTheme';
import { changePage } from '../../../redux/slice/numPageSlice';

function PaginationProducts() {
  let totalPage = 1;
  const dispatch = useDispatch();

  const filterBase = useSelector(state => state.filterBase);
  const { totalFound } = useSelector(state => state.products);
  const { numPage } = useSelector(state => state.numPage);

  totalPage = Math.ceil(totalFound / filterBase.limit);

  function handleChange(num) {
    dispatch(changePage(num));
  }

  return (
    <ThemeProvider theme={theme}>
      <Pagination
        size="medium"
        count={totalPage}
        page={numPage}
        color="primary"
        variant="outlined"
        shape="rounded"
        boundaryCount={1}
        siblingCount={0}
        onChange={(_, num) => handleChange(num)}
      />
    </ThemeProvider>
  );
}

export default PaginationProducts;
