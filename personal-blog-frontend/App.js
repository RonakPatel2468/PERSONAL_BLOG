import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import EditPost from './pages/EditPost';
import ViewPost from './pages/ViewPost';
import PostProvider from './context/PostContext';
import './App.css';

const App = () => {
  return (
    <PostProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/posts/edit/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<ViewPost />} />
        </Routes>
        <Footer />
      </Router>
    </PostProvider>
  );
};

export default App;
