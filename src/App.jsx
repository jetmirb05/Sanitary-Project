// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewNavbar from '../src/components/layout/NewNavbar';
import Footer from '../src/components/layout/Footer';
import AboutUs from './pages/AboutUsPage';
import Gallery from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <>
      <NewNavbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route element={<Footer />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
