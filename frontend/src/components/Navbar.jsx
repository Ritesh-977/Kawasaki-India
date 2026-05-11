import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = ({ transparent = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBg = transparent
    ? scrolled
      ? '#171717'
      : 'linear-gradient(180deg, #171717 0%, rgba(125, 125, 125, 0) 100%)'
    : '#FFFFFF';

  const menuIconFilter = transparent || scrolled ? 'none' : 'invert(1)';

  return (
    <>
      <nav
        id="main-nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '80px',
          background: navBg,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 100px',
          zIndex: 500,
          transition: 'background 0.3s ease',
          boxShadow: !transparent && scrolled ? '0px 1px 2px rgba(0,0,0,0.05)' : 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">
            <img
              src="/assets/logo.svg"
              alt="Kawasaki"
              style={{ height: '40px', filter: !transparent && !scrolled ? 'none' : 'none' }}
            />
          </Link>
        </div>

        <div
          id="menu-toggle"
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', zIndex: 200 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger icon – three bars */}
          <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="27" height="2" rx="1" fill={transparent || scrolled ? '#FFFFFF' : '#171717'} />
            <rect y="9" width="27" height="2" rx="1" fill={transparent || scrolled ? '#FFFFFF' : '#171717'} />
            <rect y="18" width="27" height="2" rx="1" fill={transparent || scrolled ? '#FFFFFF' : '#171717'} />
          </svg>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.6)',
                zIndex: 600,
              }}
            />

            {/* Side Drawer */}
            <motion.div
              id="side-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.28 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '360px',
                maxWidth: '100vw',
                height: '100vh',
                backgroundColor: '#111111',
                boxShadow: '-4px 0 24px rgba(0,0,0,0.5)',
                zIndex: 700,
                display: 'flex',
                flexDirection: 'column',
                padding: '40px 40px',
              }}
            >
              {/* Close */}
              <div
                style={{ alignSelf: 'flex-end', cursor: 'pointer', marginBottom: '40px' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { label: 'Home', to: '/' },
                  { label: 'KLX110R', to: '/klx110r' },
                  { label: 'Ninja 650', to: '#' },
                  { label: 'Accessories', to: '#' },
                  { label: 'Contact Us', to: '#' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      color: '#FFFFFF',
                      fontSize: '28px',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      padding: '12px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                      letterSpacing: '0.04em',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#69BE28'}
                    onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Footer branding */}
              <div style={{ marginTop: 'auto', paddingTop: '40px' }}>
                <img src="/assets/logo.svg" alt="Kawasaki" style={{ height: '32px', opacity: 0.6 }} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
