import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Certification from './pages/Certifications';
import Cisco from './cert-vendors/Cisco';
import Comptia from './cert-vendors/Comptia';
import DoD8570 from './cert-vendors/DoD-8570-8140';
import Navbar from './components/Navbar';
import './styles/main.scss';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certifications/cisco" element={<Cisco />} />
  <Route path="/certifications/DoD-8570-8140" element={<DoD8570 />} />
  <Route path="/certifications/dod-8570-8140" element={<DoD8570 />} />
        <Route path="/certifications/comptia" element={<Comptia />} />
        <Route path="/certifications/:slug" element={<Certification />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <AnimatedRoutes />
    </div>
  );
}
