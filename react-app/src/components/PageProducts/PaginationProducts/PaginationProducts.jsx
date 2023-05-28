import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import { changePage } from '../../../redux/numPageSlice';

function PaginationProducts() {
  const dispatch = useDispatch();
  // const { products, status, err } = useSelector(state => state.products);
  const { products } = useSelector(state => state.products);
  const { numPage } = useSelector(state => state.numPage);

  const totalPage = Math.ceil(products.length / 4);

  function handleChange(num) {
    dispatch(changePage(num));
  }

  return (
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
  );
}

export default PaginationProducts;
