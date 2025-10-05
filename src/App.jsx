import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Certification from './pages/Certifications';
import Cisco from './cert-vendors/Cisco';
import Comptia from './cert-vendors/Comptia';
import DoD8570 from './cert-vendors/DoD-8570-8140';
import CCNA from './certifications/cisco/CCNA';
import CCNPEnterprise from './certifications/cisco/CCNP-Enterprise';
import CCNPSecurity from './certifications/cisco/CCNP-Security';
import Navbar from './components/Navbar';
import './styles/main.scss';
import CCISO from './certifications/CCISO';
import SecPlus from './certifications/comptia/Sec-Plus';
import NetPlus from './certifications/comptia/Net-Plus';
import LinuxPlus from './certifications/comptia/Linux-Plus';
import APlus from './certifications/comptia/A-Plus';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certifications/cisco" element={<Cisco />} />
  <Route path="/certifications/cisco/ccna" element={<CCNA />} />
  <Route path="/certifications/cisco/ccnp-enterprise" element={<CCNPEnterprise />} />
  <Route path="/certifications/cisco/ccnp-security" element={<CCNPSecurity />} />
  <Route path="/certifications/DoD-8570-8140" element={<DoD8570 />} />
  <Route path="/certifications/dod-8570-8140" element={<DoD8570 />} />
        <Route path="/certifications/comptia" element={<Comptia />} />
  <Route path="/certifications/comptia/security-plus" element={<SecPlus />} />
  <Route path="/certifications/comptia/network-plus" element={<NetPlus />} />
  <Route path="/certifications/comptia/linux-plus" element={<LinuxPlus />} />
  <Route path="/certifications/comptia/a-plus" element={<APlus />} />
  <Route path="/certifications/cciso" element={<CCISO />} />
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
