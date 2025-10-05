import { motion } from 'framer-motion';

const MotionSection = motion.section;

export default function NPEnterprise() {
  return (
    <MotionSection
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
    <div className="container">
      <h1>CCNP Enterprise Certification</h1>
      <p>Modular curriculum meets modern design.</p>
      </div>
    </MotionSection>
  );
}


