import { motion } from 'framer-motion';
import dodData from '../data/dod-certifications';
import { Link } from 'react-router-dom';

export default function DoD() {
  return (
    <motion.section
      className="page-container vendor-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <header className="vendor-hero">
          <h1>DoD 8570/8140 Certifications</h1>
          <p className="vendor-lead">Guidance and certification pathways for Department of Defense information assurance roles.</p>
          <a href="#dod-chart" className="quick-link">Jump to certification chart</a>
        </header>

        <section className="vendor-content">
          <h3>
            What’s DoD 8570 All About?</h3>
            <p>DoD 8570 laysout the certification standards for folks working in IT security across the
            Department of Defense. It helps organize roles into four main buckets—technical, management, architecture, and
            cybersecurity services—each with its own set of approved certifications to match the job’s focus.
          </p>

          <h3>Breaking Down the Categories and Levels</h3>
          <p>If you're working in Information Assurance (IA) within DoD systems, your role likely falls into one of these categories:</p>
          <ul>
            <li><strong>IAT (Information Assurance Technical):</strong> These are the hands-on pros—think helpdesk support, system admins, and network techs.</li>
            <li><strong>IAM (Information Assurance Management):</strong> Focused on leadership, compliance, and oversight—keeping everything aligned and secure.</li>
            <li><strong>IASAE (Information Assurance System Architect and Engineer):</strong> The big-picture thinkers—designing secure systems, analyzing risk, and engineering solutions.</li>
            <li><strong>CSSP (Cybersecurity Service Provider):</strong> The frontline defenders—handling threat analysis, incident response, infrastructure support, auditing, and more.</li>
          </ul>

          <p>Each category is split into three levels (I, II, and III), which reflect the depth of responsibility, complexity of skills, and level of system access required.</p>

          <div id="dod-chart" className="dod-chart">
            <div className="dod-row dod-header">
              <div className="dod-col category">Category / Level</div>
              <div className="dod-col certs">Approved Certifications</div>
            </div>
            {dodData.map((row) => {
              const cat = String(row.category || '').toLowerCase();
              let rowClass = '';
              if (cat.includes('iat')) rowClass = 'iat';
              else if (cat.includes('iam')) rowClass = 'iam';
              else if (cat.includes('iasae')) rowClass = 'iasae';
              else if (cat.includes('cssp')) rowClass = 'cssp';
              return (
                <div className={`dod-row ${rowClass}`} key={row.category}>
                  <div className="dod-col category">{row.category}</div>
                  <div className="dod-col certs">
                    {row.certs.map((c) => (
                      <Link key={c.name} to={c.href} className="cert-link">{c.name}</Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="vendor-note">This chart is a roadmap for career planning and DoD IA qualification tracking.</p>
        </section>
      </div>
    </motion.section>
  );
}


