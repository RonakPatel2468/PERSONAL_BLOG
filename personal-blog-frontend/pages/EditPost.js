import React from 'react';
import PostForm from '../components/PostForm';

const EditPost = () => {
  return (
    <div className="container">
      <h1>Edit Post</h1>
      <PostForm isEdit={true} />
    </div>
  );
};

export default EditPost;
