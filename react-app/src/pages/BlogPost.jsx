import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../redux/todosSlice';

const BlogPost = () => {
  const posts = useSelector(state => state.posts.posts);

  const { status, err } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <h2>Post</h2>

      {posts.map(post => (
        <Link key={post.id} to={`/post/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
      {status === 'loading' && <h2>Loading</h2>}
      {err && <h2> ERROR {err}</h2>}
    </>
  );
};

export default BlogPost;
