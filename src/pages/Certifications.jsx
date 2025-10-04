// src/pages/Certification.jsx
import { useParams } from 'react-router-dom';
import certifications from '../data/certifications';

export default function Certification() {
  const { slug } = useParams();
  const lower = slug?.toString().toLowerCase();
  const item = certifications.find(c => c.id === lower || c.id === slug || (c.href || '').toString().toLowerCase().endsWith(lower));
  if (!item) return <div>Certification not found</div>;
  return (
    <div className="page-container">
      <div className="container">
        <h1>{item.title}</h1>
        <p>Details for {item.title}.</p>
      </div>
    </div>
  );
}
