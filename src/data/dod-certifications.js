// Data file for DoD 8570/8140 certification requirements
// Each entry maps a Category / Level to an array of { name, href } entries
const dodCertifications = [
  {
    category: 'IAT Level I',
    certs: [
      { name: 'A+ CE', href: '/certifications/a-plus-ce' },
      { name: 'Network+ CE', href: '/certifications/network-plus-ce' },
      { name: 'SSCP', href: '/certifications/sscp' },
      { name: 'CCNA', href: '/certifications/ccna' },
      { name: 'CND', href: '/certifications/cnd' },
    ],
  },
  {
    category: 'IAT Level II',
    certs: [
      { name: 'Security+ CE', href: '/certifications/security-plus-ce' },
      { name: 'CySA+', href: '/certifications/cysa-plus' },
      { name: 'GSEC', href: '/certifications/gsec' },
      { name: 'GICSP', href: '/certifications/gicsp' },
      { name: 'CCNA', href: '/certifications/ccna' },
      { name: 'SSCP', href: '/certifications/sscp' },
    ],
  },
  {
    category: 'IAT Level III',
    certs: [
      { name: 'CASP+ CE', href: '/certifications/casp-plus-ce' },
      { name: 'CISSP (or Associate)', href: '/certifications/cissp' },
      { name: 'CISA', href: '/certifications/cisa' },
      { name: 'CCNP Security', href: '/certifications/ccnp-security' },
      { name: 'GCED', href: '/certifications/gced' },
      { name: 'GCIH', href: '/certifications/gcih' },
      { name: 'CCSP', href: '/certifications/ccsp' },
    ],
  },
  {
    category: 'IAM Level I',
    certs: [
      { name: 'CAP', href: '/certifications/cap' },
      { name: 'Security+ CE', href: '/certifications/security-plus-ce' },
      { name: 'CND', href: '/certifications/cnd' },
      { name: 'Cloud+', href: '/certifications/cloud-plus' },
      { name: 'GSLC', href: '/certifications/gslc' },
    ],
  },
  {
    category: 'IAM Level II',
    certs: [
      { name: 'CAP', href: '/certifications/cap' },
      { name: 'CASP+ CE', href: '/certifications/casp-plus-ce' },
      { name: 'CISM', href: '/certifications/cism' },
      { name: 'CISSP (or Associate)', href: '/certifications/cissp' },
      { name: 'GSLC', href: '/certifications/gslc' },
      { name: 'CCISO', href: '/certifications/cciso' },
      { name: 'HCISPP', href: '/certifications/hcispp' },
    ],
  },
  {
    category: 'IAM Level III',
    certs: [
      { name: 'CISM', href: '/certifications/cism' },
      { name: 'CISSP (or Associate)', href: '/certifications/cissp' },
      { name: 'GSLC', href: '/certifications/gslc' },
      { name: 'CCISO', href: '/certifications/cciso' },
    ],
  },
  {
    category: 'IASAE Level I',
    certs: [
      { name: 'CASP+ CE', href: '/certifications/casp-plus-ce' },
      { name: 'CISSP (or Associate)', href: '/certifications/cissp' },
      { name: 'CSSLP', href: '/certifications/csslp' },
    ],
  },
  {
    category: 'IASAE Level II',
    certs: [
      { name: 'CASP+ CE', href: '/certifications/casp-plus-ce' },
      { name: 'CISSP (or Associate)', href: '/certifications/cissp' },
      { name: 'CSSLP', href: '/certifications/csslp' },
    ],
  },
  {
    category: 'IASAE Level III',
    certs: [
      { name: 'CISSP-ISSAP', href: '/certifications/cissp-issap' },
      { name: 'CISSP-ISSEP', href: '/certifications/cissp-issep' },
      { name: 'CCSP', href: '/certifications/ccsp' },
    ],
  },
  {
    category: 'CSSP Analyst',
    certs: [
      { name: 'CEH', href: '/certifications/ceh' },
      { name: 'CFR', href: '/certifications/cfr' },
      { name: 'CCNA Cyber Ops', href: '/certifications/ccna-cyber-ops' },
      { name: 'CCNA', href: '/certifications/ccna' },
      { name: 'CySA+', href: '/certifications/cysa-plus' },
      { name: 'GCIA', href: '/certifications/gcia' },
      { name: 'GCIH', href: '/certifications/gcih' },
      { name: 'GICSP', href: '/certifications/gicsp' },
      { name: 'Cloud+', href: '/certifications/cloud-plus' },
      { name: 'PenTest+', href: '/certifications/pentest-plus' },
    ],
  },
  {
    category: 'CSSP Infrastructure Support',
    certs: [
      { name: 'CEH', href: '/certifications/ceh' },
      { name: 'CySA+', href: '/certifications/cysa-plus' },
      { name: 'SSCP', href: '/certifications/sscp' },
      { name: 'Cloud+', href: '/certifications/cloud-plus' },
      { name: 'GICSP', href: '/certifications/gicsp' },
      { name: 'CHFI', href: '/certifications/chfi' },
      { name: 'CFR', href: '/certifications/cfr' },
      { name: 'CND', href: '/certifications/cnd' },
    ],
  },
  {
    category: 'CSSP Incident Responder',
    certs: [
      { name: 'CEH', href: '/certifications/ceh' },
      { name: 'CCNA Cyber Ops', href: '/certifications/ccna-cyber-ops' },
      { name: 'CCNA', href: '/certifications/ccna' },
      { name: 'CySA+', href: '/certifications/cysa-plus' },
      { name: 'PenTest+', href: '/certifications/pentest-plus' },
      { name: 'GCIH', href: '/certifications/gcih' },
      { name: 'CFR', href: '/certifications/cfr' },
      { name: 'CHFI', href: '/certifications/chfi' },
      { name: 'GCFA', href: '/certifications/gcfa' },
    ],
  },
  {
    category: 'CSSP Auditor',
    certs: [
      { name: 'CEH', href: '/certifications/ceh' },
      { name: 'CySA+', href: '/certifications/cysa-plus' },
      { name: 'CISA', href: '/certifications/cisa' },
      { name: 'PenTest+', href: '/certifications/pentest-plus' },
      { name: 'GSNA', href: '/certifications/gsna' },
      { name: 'CFR', href: '/certifications/cfr' },
    ],
  },
  {
    category: 'CSSP Manager',
    certs: [
      { name: 'CISM', href: '/certifications/cism' },
      { name: 'CISSP-ISSMP', href: '/certifications/cissp-issmp' },
      { name: 'CCISO', href: '/certifications/cciso#cert-top' },
    ],
  },
];

export default dodCertifications;
