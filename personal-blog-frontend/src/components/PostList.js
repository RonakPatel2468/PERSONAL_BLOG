import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div className="post-item" key={post._id}>
            <h2>
              <Link to={`/posts/${post._id}`}>{post.title}</Link>
            </h2>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default PostList;
