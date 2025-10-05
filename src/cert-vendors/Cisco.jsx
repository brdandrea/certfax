import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionSection = motion.section;

export default function Cisco() {
  return (
    <MotionSection
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h1>Cisco Certifications</h1>
        <p>Modular curriculum meets modern design.</p>

        <section className="vendor-content" aria-label="Cisco certs">
          <h3>Cisco Certifications</h3>
          <p>Explore Cisco-focused certification pages below:</p>
          <ul className="role-list">
            <li><Link to="/certifications/cisco/ccna" className="cert-link">CCNA</Link></li>
            <li><Link to="/certifications/cisco/ccnp-enterprise" className="cert-link">CCNP Enterprise</Link></li>
            <li><Link to="/certifications/cisco/ccnp-security" className="cert-link">CCNP Security</Link></li>
          </ul>
        </section>
      </div>
    </MotionSection>
  );
}


