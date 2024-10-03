import React from 'react';
import PostForm from '../components/PostForm';

const NewPost = () => {
  return (
    <div className="container">
      <h1>Create New Post</h1>
      <PostForm isEdit={false} />
    </div>
  );
};

export default NewPost;
