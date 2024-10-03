import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createPost, updatePost, fetchPostById } from '../services/postService';

const PostForm = ({ isEdit }) => {
  const { id } = useParams();
  const [post, setPost] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit) {
      const loadPost = async () => {
        const fetchedPost = await fetchPostById(id);
        setPost(fetchedPost);
      };
      loadPost();
    }
  }, [id, isEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await updatePost(id, post);
    } else {
      await createPost(post);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
      </div>
      <div>
        <label>Content</label>
        <textarea
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        />
      </div>
      <button type="submit">{isEdit ? 'Update Post' : 'Create Post'}</button>
    </form>
  );
};

export default PostForm;
