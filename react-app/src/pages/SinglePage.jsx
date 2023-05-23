import {
  useParams
  // Link
} from 'react-router-dom';
import { useEffect, useState } from 'react';

const SinglePage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then(res => res.json())
  //     .then(data => setProducts(data));
  // }, [id]);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        const product = data.find(item => item.id === id);
        setProducts(product);
      });
  }, [id]);

  return (
    <div>
      {products && (
        <>
          <h2>{products.name}</h2>
          {/* <Link to={`/post/${id}/edit`}>Edit post</Link> */}
        </>
      )}
    </div>
  );
};

export default SinglePage;
