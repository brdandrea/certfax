import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionSection = motion.section;

export default function Comptia() {
  return (
    <MotionSection
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h1>Comptia Certifications</h1>
        <p>Modular curriculum meets modern design.</p>

        <section className="vendor-content" aria-label="CompTIA certs">
          <h3>CompTIA Certifications</h3>
          <ul className="role-list">
            <li><Link to="/certifications/comptia/security-plus" className="cert-link">Security+</Link></li>
            <li><Link to="/certifications/comptia/network-plus" className="cert-link">Network+</Link></li>
            <li><Link to="/certifications/comptia/linux-plus" className="cert-link">Linux+</Link></li>
            <li><Link to="/certifications/comptia/a-plus" className="cert-link">A+</Link></li>
          </ul>
        </section>
      </div>
    </MotionSection>
  );
}


