import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionSection = motion.section;

export default function CCISO() {
  return (
    <MotionSection
      className="page-container vendor-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <header className="vendor-hero">
          <h1>CCISO</h1>
          <p className="vendor-lead">EC-Council Certified Chief Information Security Officer (C|CISO)</p>
          <a href="#cert-top" className="quick-link">Jump to exam details</a>
          <Link to="/certifications" className="quick-link">All certifications</Link>
        </header>
        <section id="cert-top"><br></br></section>
        {/* <section id="cert-top" className="vendor-content"> */}
        <section className="vendor-content">
          {/* <h2>CCISO</h2> */}

          <table className="cert-meta-table">
            <tbody>
              <tr>
                <th>Certification (Acronym)</th>
                <td>CCISO</td>
              </tr>
              <tr>
                <th>Full name</th>
                <td>EC-Council Certified Chief Information Security Officer (C|CISO)</td>
              </tr>
              <tr>
                <th>Certification Vendor</th>
                <td><a href="https://www.eccouncil.org" target="_blank" rel="noopener noreferrer">EC-Council</a></td>
              </tr>
              <tr>
                <th>Exam Number</th>
                <td>712-50</td>
              </tr>
              <tr>
                <th>Last Updated</th>
                <td>Current version v3; last published exam blueprint update in 2021 (v3 originally released in 2019)</td>
              </tr>
            </tbody>
          </table>

          <h3>Detailed description</h3>
          <div className="section-body">
            <p>The CCISO certification, offered by the EC-Council (International Council of E-Commerce Consultants), aims to bridge the gap between technical security knowledge and executive management skills. It emphasizes governance, risk management, policy development, and strategic planning, preparing professionals to lead security programs at the organizational level.</p>
          </div>

          <h3>Who should get this certification?</h3>
          <div className="section-body">
            <p>Senior security professionals, Chief Information Security Officers, security directors, and executives responsible for information security governance and strategy.</p>
          </div>

          <h3>Why get this certification?</h3>
          <div className="section-body">
            <p>It validates high-level security management expertise, enhances leadership credibility, and demonstrates the ability to align security initiatives with organizational goals, making it ideal for those aiming to advance into executive roles.</p>
          </div>

          <h3>Requirements</h3>
          <div className="section-body">
            <p>Minimum of five years of cumulative work experience in information security management, including experience in policy, governance, and leadership roles. No formal prerequisites, but professional experience is strongly recommended.</p>
          </div>

          <h3>Cost</h3>
          <div className="section-body">
            <p>Approximately $999 USD</p>
          </div>

          <h3>Exam details</h3>
          <div className="section-body">
            <ul className="exam-details">
              <li><strong>Passing score:</strong> 70%</li>
              <li><strong>Number of questions:</strong> 150 multiple-choice questions</li>
              <li><strong>Time limit:</strong> 2.5 hours (150 minutes)</li>
              <li><strong>Testing provider:</strong> Pearson VUE</li>
              <li><strong>Registration portal:</strong> <a href="https://cert.eccouncil.org/cciso" target="_blank" rel="noopener noreferrer">EC-Council — Certification registration</a></li>
            </ul>
          </div>

          <h3>
            <a
              className="cert-official-link"
              href="https://www.eccouncil.org/certifications/certified-chief-information-security-officer-cciso/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Certification Site
            </a>
          </h3>

          
        </section>
      </div>
    </MotionSection>
  );
}
