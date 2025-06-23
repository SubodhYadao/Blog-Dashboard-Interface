import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/posts/postsSlice';

const categories = ['All', 'Tech', 'Lifestyle', 'News'];

function Sidebar() {
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.posts.filter);

  return (
    <aside className="sidebar">
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li
            key={category}
            className={category === currentFilter ? 'active' : ''}
            onClick={() => dispatch(setFilter(category))}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
