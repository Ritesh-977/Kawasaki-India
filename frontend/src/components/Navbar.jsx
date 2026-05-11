import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal'; // <-- Import the new modal

const Navbar = ({ transparent = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // <-- Add State for Modal
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

  // Handle Menu Item Clicks
  const handleMenuClick = (e, label) => {
    if (label === 'LOGIN') {
      e.preventDefault(); // Prevent default link navigation
      setIsMenuOpen(false); // Close the green overlay menu
      setIsLoginModalOpen(true); // Open the login modal
    } else {
      setIsMenuOpen(false); // Just close the menu for other links
    }
  };

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
          onClick={() => setIsMenuOpen(true)}
        >
          {/* Hamburger icon – three bars */}
          <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="27" height="2" rx="1" fill={transparent || scrolled ? '#FFFFFF' : '#171717'} />
            <rect y="9" width="27" height="2" rx="1" fill={transparent || scrolled ? '#FFFFFF' : '#171717'} />
            <rect y="18" width="27" height="2" rx="1" fill={transparent || scrolled ? '#FFFFFF' : '#171717'} />
          </svg>
        </div>
      </nav>

      {/* FULL SCREEN OVERLAY MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(105, 190, 40, 0.85)',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Overlay Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '80px',
              padding: '0 100px',
            }}>
              <img src="/assets/logo.svg" alt="Kawasaki" style={{ height: '40px' }} />

              <div
                style={{ cursor: 'pointer', padding: '10px' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Centered Menu Links */}
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              gap: '40px',
              paddingBottom: '80px',
            }}>
              {[
                { label: 'LOGIN', to: '#' },
                { label: 'CONTACT US', to: '/contact' },
                { label: 'PRIVACY POLICY', to: '/privacy-policy' },
                { label: 'TERMS AND CONDITIONS', to: '/terms-and-conditions' },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={(e) => handleMenuClick(e, item.label)}
                  style={{
                    fontSize: 'clamp(20px, 3vw, 35px)',
                    fontFamily: '"Impact", "Arial Black", sans-serif',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    textDecoration: 'none',
                    transform: 'scale(1)',

                    // Diagonal Wipe Setup
                    backgroundImage: 'linear-gradient(to top right, #171717 50%, #FFFFFF 50%)',
                    backgroundSize: '220% 220%',
                    backgroundPosition: '100% 0%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                    transition: 'background-position 1s cubic-bezier(0.22, 1, 0.36, 1), transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.backgroundPosition = '0% 100%';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.backgroundPosition = '100% 0%';
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RENDER THE LOGIN MODAL */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default Navbar;