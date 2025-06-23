import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import AddPostModal from './components/AddPostModal';
import { fetchPosts } from './features/posts/postsSlice';

function App() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <Sidebar />
        <MainSection onAddPost={() => setIsModalOpen(true)} />
      </div>
      {isModalOpen && <AddPostModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;
