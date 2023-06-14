import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { Pagination } from '@mui/material';
import { theme } from '../../../tools/muiTheme';
import { changePage } from '../../../redux/slice/numPageSlice';

function PaginationProducts() {
  const dispatch = useDispatch();
  // const { category } = useSelector(state => state.category);

  // const { products, status, err } = useSelector(state => state.products);
  // const { products } = useSelector(state => state.products);
  // console.log('products:', products);
  // const { numPage, products } = useSelector(selectProductsData);

  const { totalFound } = useSelector(state => state.products);

  const { numPage } = useSelector(state => state.numPage);

  const totalPage = Math.ceil(totalFound / 2);

  function handleChange(num) {
    sessionStorage.setItem('numPage', num);
    dispatch(changePage(num));
    // dispatch(changePage(1));

    // Coment this line
    // dispatch(fetchProductsData({ category, numPage }));
  }

  return (
    <ThemeProvider theme={theme}>
      <Pagination
        count={totalPage}
        page={numPage}
        color="primary"
        variant="outlined"
        shape="rounded"
        hidePrevButton
        hideNextButton
        boundaryCount={2}
        siblingCount={1}
        onChange={(_, num) => handleChange(num)}
      />
    </ThemeProvider>
  );
}

export default PaginationProducts;
