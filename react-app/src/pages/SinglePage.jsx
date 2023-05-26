import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SinglePage = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, [id]);

  return (
    <div>
      {posts && (
        <>
          <h2>{posts.title}</h2>
          <div>{posts.body}</div>
          <Link to={`/post/${id}/edit`}>Edit post</Link>
        </>
      )}
    </div>
  );
};

export default SinglePage;
