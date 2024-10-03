import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPostById, deletePost } from '../services/postService';
import { useNavigate } from 'react-router-dom';

const ViewPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPost = async () => {
      const fetchedPost = await fetchPostById(id);
      setPost(fetchedPost);
    };
    loadPost();
  }, [id]);

  const handleDelete = async () => {
    await deletePost(id);
    navigate('/');
  };

  return (
    <div className="container">
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{new Date(post.createdAt).toLocaleDateString()}</p>
          <p>{post.content}</p>
          <Link to={`/posts/edit/${id}`}>Edit</Link>
          <button onClick={handleDelete}>Delete</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewPost;
