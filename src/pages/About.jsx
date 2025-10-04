import { motion } from 'framer-motion';

export default function About() {
  console.log('About component rendered');
  return (
    <motion.section
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h2>About This Curriculum</h2>
        <p>Built for clarity, optimized for reuse.</p>
      </div>
    </motion.section>
  );
}
