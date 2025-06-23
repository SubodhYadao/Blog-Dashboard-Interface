import React, { useState, useEffect } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <header className="header">
      <div className="logo">Blog Dashboard</div>
      <button
        className="dark-toggle"
        onClick={() => setDarkMode(prev => !prev)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
}

export default Header;
