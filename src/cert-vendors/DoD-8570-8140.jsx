import { motion } from 'framer-motion';
import dodData from '../data/dod-certifications';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function DoD() {
  // conservative, ordered mapping to local certification pages
  function mapCertHref(href, name) {
    const h = String(href || '').toLowerCase();
    const n = String(name || '').toLowerCase();

    // Avoid short token collisions by checking longer/unique names first
    // If a cert is explicitly external or has no local page, return original href

    // Cisco
    if (/\bccnp(?:\s|-)?security\b/.test(n) || h.includes('ccnp-security')) return '/certifications/cisco/ccnp-security';
    if (/\bccnp(?:\s|-)?enterprise\b/.test(n) || h.includes('ccnp-enterprise')) return '/certifications/cisco/ccnp-enterprise';
    if (/\bccna\b/.test(n) || h.includes('ccna')) return '/certifications/cisco/ccna';

    // CompTIA exact matches (handle 'CE' suffixes)
    if (/\bsecurity\+?(?:\s*ce)?\b/.test(n) || h.includes('security-plus')) return '/certifications/comptia/security-plus';
    if (/\bnetwork\+?(?:\s*ce)?\b/.test(n) || h.includes('network-plus')) return '/certifications/comptia/network-plus';
    if (/\blinux\+?\b/.test(n) || h.includes('linux-plus')) return '/certifications/comptia/linux-plus';
    if (/\ba\+?(?:\s*ce)?\b/.test(n) || h.includes('a-plus')) return '/certifications/comptia/a-plus';

    // If no local mapping, return the href (could be external or other slug)
    return href;
  }
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
          <a href="#additional-certs" className="quick-link">Additional certifications requirement</a>
        </header>

        <section className="vendor-content">
          <h3>
            What’s DoD 8570 All About?</h3>
            <p>DoD 8570 lays out the certification standards for folks working in IT security across the
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
                    {row.certs.map((c) => {
                      const target = mapCertHref(c.href, c.name) || c.href || '#';
                      // return <Link key={c.name} to={target} className="cert-link">{c.name}</Link>;
                      return <HashLink smooth key={c.name} to={target} className="cert-link">{c.name}</HashLink>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="vendor-note">This chart is a roadmap for career planning and DoD IA qualification tracking.</p>
        </section>

        <section id="additional-certs" className="vendor-content">
          <h3>Are Additional Certifications Required?</h3>
          <p><strong>Short answer:</strong> One baseline certification per role or level is enough to meet the minimum requirement—but depending on your job duties and the systems you work with, you might need more.</p>

          <p><strong>Here’s why:</strong> If you're in a role like <span className="keyword">IAT</span> (Information Assurance Technician) or System Administrator and you have privileged access to specific platforms (like Windows Server, Cisco routers, or Splunk), your supervisor or <span className="keyword">ISSM</span> (Information System Security Manager) may require you to earn Computing Environment (CE) or platform-specific certifications. These extra certs help ensure you're fully qualified to manage and secure the systems you're responsible for.</p>

          <ul className="role-list">
            <li>
              <strong>Role: IAT Level II</strong>
              <ul>
                <li><strong>Baseline Certification:</strong> CompTIA Security+</li>
                <li><strong>Additional CE Certifications:</strong> Microsoft Certified: Azure Administrator, Cisco CCNA</li>
              </ul>
            </li>

            <li>
              <strong>Role: System Administrator</strong>
              <ul>
                <li><strong>Baseline Certification:</strong> GIAC Security Essentials (GSEC)</li>
                <li><strong>Additional CE Certifications:</strong> Red Hat Certified System Admin (RHCSA), VMware VCP</li>
              </ul>
            </li>

            <li>
              <strong>Role: Cybersecurity Analyst</strong>
              <ul>
                <li><strong>Baseline Certification:</strong> CEH (Certified Ethical Hacker)</li>
                <li><strong>Additional CE Certifications:</strong> Splunk Core Certified Power User, Elastic Certified Analyst</li>
              </ul>
            </li>

            <li>
              <strong>Role: Network Operations</strong>
              <ul>
                <li><strong>Baseline Certification:</strong> Cisco CCNA</li>
                <li><strong>Additional CE Certifications:</strong> Palo Alto Networks PCNSA, Fortinet NSE 4</li>
              </ul>
            </li>
          </ul>
        </section>
        
        <section id="recommendations" className="vendor-content">
          <p style={{ marginTop: '0.75rem' }}><a href="#top" className="quick-link">Back to top</a></p>
        </section>
      </div>
    </motion.section>
  );
}


