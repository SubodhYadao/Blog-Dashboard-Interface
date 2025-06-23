import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from './BlogCard';

function MainSection({ onAddPost }) {
  const posts = useSelector(state => state.posts.items);
  const filter = useSelector(state => state.posts.filter);

  const filteredPosts =
    filter === 'All' ? posts : posts.filter(post => post.category === filter);

  return (
    <main className="main-section">
      <div className="main-header">
        <h1>Blog Posts</h1>
        <button className="add-post-btn" onClick={onAddPost}>
          Add Post
        </button>
      </div>
      <div className="posts-list">
        {filteredPosts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          filteredPosts.map(post => <BlogCard key={post.id} post={post} />)
        )}
      </div>
    </main>
  );
}

export default MainSection;
