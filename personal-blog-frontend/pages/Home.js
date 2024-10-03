import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';
import PostList from '../components/PostList';

const Home = () => {
  const { posts } = useContext(PostContext);

  return (
    <div className="container">
      <h1>All Blog Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
