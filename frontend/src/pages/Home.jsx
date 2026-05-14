import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

/**
 * Home – "Launching Page"
 * Adjusted typography and grid sizing (~10% scale down) 
 * to prevent flex wrapping on standard laptop screens at 100% zoom.
 */

const PRODUCT_CARDS = [
  {
    id: 'klx110r',
    title: 'KLX110R',
    subtitle: 'Lightweight. Powerful. Built for the next generation of riders.',
    date: 'This page will be open from XXXX to XXXX.',
    imageSrc: '/assets/hero-bg.png',
    route: '/klx110r',
    active: true,
  },
  {
    id: 'ninja650',
    title: 'NINJA 650',
    subtitle: 'Lightweight and stylish. a perfect balance of power.',
    date: 'This page will be open from XXXX to XXXX.',
    imageSrc: '/assets/ninja-bg.png',
    route: null,
    active: false,
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      style={{
        minHeight: '100vh',
        backgroundColor: '#171717',
        color: '#FFFFFF',
        fontFamily: '"Arial", sans-serif',
        overflowX: 'hidden',
      }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Main Content */}
      <div style={{ padding: '80px 6vw 80px', maxWidth: '1600px', margin: '0 auto' }}>

        {/* Header Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '60px',
          gap: '40px',
          flexWrap: 'wrap',
          alignItems: 'flex-start'
        }}>
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
          >
            <p style={{
              fontFamily: '"Arial", sans-serif',
              fontSize: '16px', // Scaled down from 18px
              fontWeight: 700,
              color: '#FFFFFF',
              margin: 0,
              lineHeight: '1.2',
            }}>
              Welcome to
            </p>
            <h1 style={{
              fontFamily: '"Impact", "Arial Black", sans-serif',
              fontSize: '48px', // Scaled down from 56px to prevent wrapping
              fontWeight: 400,
              color: '#FFFFFF',
              margin: 0,
              lineHeight: '1.1',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              KAWASAKI LAUNCH PAGE
            </h1>
          </motion.div>

          {/* Right: Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxWidth: '500px', // Scaled down from 600px to give the title more room
            }}
          >
            <p style={{ fontFamily: '"Arial", sans-serif', fontSize: '16px', fontWeight: 700, color: '#FFFFFF', margin: 0, lineHeight: '1.4' }}>
              Please choose your model from below and click it and<br />proceed the pre-booking
            </p>
            <p style={{ fontFamily: '"Arial", sans-serif', fontSize: '16px', fontWeight: 700, color: '#FFFFFF', margin: 0, lineHeight: '1.4' }}>
              If you want pre-book, please enter from below as your prefer.
            </p>
            <p style={{ fontFamily: '"Arial", sans-serif', fontSize: '16px', fontWeight: 700, color: '#FFFFFF', margin: 0, lineHeight: '1.4' }}>
              Your booking is not complete even if you click below
            </p>
          </motion.div>
        </div>

        {/* Product Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'grid',
            // Scaled down minmax to 450px so both cards fit side-by-side on smaller laptop screens
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '40px',
            justifyContent: 'center',
          }}
        >
          {PRODUCT_CARDS.map((card) => (
            <motion.div
              key={card.id}
              id={`card-${card.id}`}
              whileHover={{ scale: card.active ? 1.02 : 1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                cursor: card.active ? 'pointer' : 'default',
                opacity: card.active ? 1 : 0.8,
              }}
              onClick={() => {
                if (card.active && card.route) {
                  navigate(card.route);
                } else if (!card.active) {
                  alert(`${card.title} Launch Page coming soon!`);
                }
              }}
            >
              {/* Card Image */}
              <div style={{
                width: '100%',
                aspectRatio: '600 / 478',
                backgroundImage: `url("${card.imageSrc}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Subtle gradient overlay to match image depth */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%)',
                }} />

                {/* CTA Button – perfectly centered */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 5,
                }}>
                  <button
                    style={{
                      backgroundColor: 'var(--kawasaki-green, #69BE28)',
                      color: '#FFFFFF',
                      border: 'none',
                      padding: '12px 24px',
                      fontFamily: '"Arial", sans-serif',
                      fontSize: '14px', // Scaled down from 16px
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      pointerEvents: 'none',
                      boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
                    }}
                    tabIndex={-1}
                  >
                    GO TO LAUNCH PAGE
                  </button>
                </div>
              </div>

              {/* Card Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h2 style={{
                    fontFamily: '"Impact", "Arial Black", sans-serif',
                    fontSize: '42px', // Scaled down from 48px
                    fontWeight: 400,
                    color: 'var(--kawasaki-green, #69BE28)',
                    lineHeight: '1',
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {card.title}
                  </h2>
                  <p style={{
                    fontFamily: '"Arial", sans-serif',
                    fontSize: '16px', // Scaled down from 18px
                    color: '#FFFFFF',
                    lineHeight: '1.4',
                    margin: 0,
                  }}>
                    {card.subtitle}
                  </p>
                </div>
                <p style={{
                  fontFamily: '"Arial", sans-serif',
                  fontSize: '13px', // Scaled down from 14px
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: '1.4',
                  margin: 0,
                }}>
                  {card.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;