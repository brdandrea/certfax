import { motion } from 'framer-motion';

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
      </div>
    </MotionSection>
  );
}


