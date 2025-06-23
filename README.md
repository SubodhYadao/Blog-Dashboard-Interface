# Blog Dashboard

This is a responsive Blog Dashboard web app built with React.js and Redux Toolkit. It displays a list of blog posts fetched from the JSONPlaceholder API and supports viewing, filtering, and adding new posts. The interface is mobile-friendly and includes a dark/light mode toggle.

## Features

- Fetches blog posts from JSONPlaceholder API (`GET /posts`)
- Displays post title, body, author (userId), and simulated category
- Sidebar with filter categories: Tech, Lifestyle, News, All
- Add Post modal form with validation (Title, Body, Category)
- Posts stored and managed with Redux Toolkit
- Dark/light mode toggle in header
- Responsive design for mobile and desktop

## Project Structure

- `src/` - React components and Redux slices
  - `components/` - UI components (Header, Sidebar, MainSection, BlogCard, AddPostModal)
  - `features/posts/postsSlice.js` - Redux slice for posts state management
  - `store.js` - Redux store configuration
  - `App.js` - Main app component
  - `index.js` - React app entry point
- `public/index.html` - HTML entry point
- `package.json` - Project dependencies and scripts
- `App.css` - Styling and responsive design

## Getting Started

1. Github Repository Clone

   ```bash
  git clone https://github.com/SubodhYadao/Blog-Dashboard-Interface
   ```

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## Usage

- Use the sidebar to filter posts by category.
- Click "Add Post" to open the modal form and add a new blog post.
- Toggle dark/light mode using the button in the header.
- The app is responsive and works well on mobile devices.

## Dependencies

- React
- Redux Toolkit
- React Redux
- React Scripts

