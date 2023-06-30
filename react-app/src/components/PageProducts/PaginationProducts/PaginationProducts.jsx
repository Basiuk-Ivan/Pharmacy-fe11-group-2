import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { Pagination } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { theme } from '../../../tools/muiTheme';
import { changePage } from '../../../redux/slice/numPageSlice';

function PaginationProducts() {
  let totalPage = 1;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryString = location.search;
  const searchParams = new URLSearchParams(queryString);

  const filterBase = useSelector(state => state.filterBase);
  const { totalFound } = useSelector(state => state.products);
  // const { numPage } = useSelector(state => state.numPage);
  const numPage = parseInt(searchParams.get('page'), 10);

  totalPage = Math.ceil(totalFound / filterBase.limit);

  function handleChange(num) {
    dispatch(changePage(num));
    searchParams.set('page', num.toString());
    navigate({ search: searchParams.toString(), replace: true });
  }

  return (
    <ThemeProvider theme={theme}>
      <Pagination
        size="medium"
        count={totalPage}
        page={numPage}
        // page={searchParams.get('page')}
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
