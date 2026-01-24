import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';

// Pages
import Home from './pages/Home';
import Research from './pages/Research';
import ArticleDetail from './pages/ArticleDetail';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black cursor-default overflow-x-hidden">
        <CustomCursor />
        {/* Navbar is fixed, so it stays on top */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:id" element={<ArticleDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
