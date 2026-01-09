import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import MissionVision from './pages/MissionVision';
import Clients from './pages/Clients';
import Partnerships from './pages/Partnerships';
import Testimonials from './pages/Testimonials';
import Awards from './pages/Awards';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/mission" element={<MissionVision />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
