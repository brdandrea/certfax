import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
// import certifications from '../data/certifications';
import carouselData from '../data/carousel-data';

export default function Home() {
  const slides = carouselData.map((c) => ({
    id: c.id,
    title: c.title,
    subtitle: c.subtitle || 'Learn more',
    href: c.href,
    img: c.img || null,
  }));

  return (
    <motion.section
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h1>Welcome to CertFax</h1>
        <p>Modular curriculum meets modern design.</p>

        <div style={{ marginTop: '1.5rem' }}>
          <Carousel items={slides} interval={5000} />
        </div>
      </div>
    </motion.section>
  );
}
