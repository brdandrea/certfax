import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import certifications from '../data/certifications';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (btnRef.current?.contains(e.target)) return;
      if (!panelRef.current?.contains(e.target)) setOpen(false);
    }
    function onEsc(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  return (
    <nav className="nav-root" aria-label="Primary">
      <div className="container nav-inner">
        <div className="nav-left">
          <Link to="/" className="nav-brand">CertFax</Link>
        </div>

        <div className="nav-center">
          <button
            ref={btnRef}
            className="nav-link nav-button"
            aria-haspopup="true"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            Certification Vendors <span className={`chev ${open ? 'open' : ''}`}>▾</span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.ul
                key="cert-dropdown"
                ref={panelRef}
                className="dropdown-panel"
                role="menu"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.16 }}
              >
                {certifications.map(c => (
                  <li key={c.id} role="none">
                    <Link role="menuitem" to={c.href} className="dropdown-item" onClick={() => setOpen(false)}>
                      {c.title}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <div className="nav-right">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>
      </div>
    </nav>
  );
}
