import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../features/posts/postsSlice';

const categories = ['Tech', 'Lifestyle', 'News'];

function AddPostModal({ onClose }) {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.items);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!title.trim()) errs.title = 'Title is required';
    if (!body.trim()) errs.body = 'Body is required';
    if (!category) errs.category = 'Category is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;

    const newPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      title,
      body,
      category,
      userId: 0, // Simulate author as 0 for new posts
    };

    dispatch(addPost(newPost));
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Add New Post</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            {errors.title && <p className="error">{errors.title}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              id="body"
              value={body}
              onChange={e => setBody(e.target.value)}
            />
            {errors.body && <p className="error">{errors.body}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.category && <p className="error">{errors.category}</p>}
          </div>
          <div className="form-actions">
            <button type="submit">Add Post</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPostModal;
