import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../redux/todosSlice';

const Products = () => {
  const products = useSelector(state => state.products.products);
  const { status, err } = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <h2>Products</h2>

      {products.map(product => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <li>{product.name}</li>
          {/* <li>{product.title}</li> */}
        </Link>
      ))}
      {status === 'loading' && <h2>Loading</h2>}
      {err && <h2> ERROR {err}</h2>}
    </>
  );
};

export default Products;
