import React from 'react';

function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <h3 className="blog-title">{post.title}</h3>
      <p className="blog-body">{post.body}</p>
      <p className="blog-category">Category: {post.category}</p>
    </div>
  );
}

export default BlogCard;
