import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

/**
 * Home – "Launching Page" matching Figma nodes 11708:47754 and 11989:47557.
 *
 * Layout:
 *  - Dark (#171717) full-page background
 *  - Navbar at top
 *  - Header section: left "Welcome to / Kawasaki Launch page", right: 3 instruction lines
 *  - Two product cards (600×478 image + title/subtitle/date text)
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
    title: 'Ninja 650',
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
        fontFamily: 'var(--font-body)',
        overflowX: 'hidden',
      }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Navbar – white logo on dark bg */}
      <Navbar transparent={true} />

      {/* Main Content – padded below nav */}
      <div style={{ padding: '120px 100px 80px' }}>

        {/* Header Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '80px',
          gap: '40px',
          flexWrap: 'wrap',
        }}>
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
          >
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              fontWeight: 700,
              color: '#FFFFFF',
              margin: 0,
              lineHeight: '27px',
            }}>
              Welcome to
            </p>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '52px',
              fontWeight: 600,
              color: '#FFFFFF',
              margin: 0,
              lineHeight: '78px',
              textTransform: 'none',
            }}>
              Kawasaki Launch page
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
              gap: '10px',
              maxWidth: '524px',
              paddingRight: '59px',
            }}
          >
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 700, color: '#FFFFFF', margin: 0, lineHeight: '27px' }}>
              Please choose your model from below and click it and {'\n'}proceed the pre-booking
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 700, color: '#FFFFFF', margin: 0, lineHeight: '27px' }}>
              If you want pre-book, please enter from below as your prefer.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 700, color: '#FFFFFF', margin: 0, lineHeight: '27px' }}>
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
            display: 'flex',
            gap: '40px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {PRODUCT_CARDS.map((card) => (
            <motion.div
              key={card.id}
              id={`card-${card.id}`}
              whileHover={{ scale: card.active ? 1.02 : 1 }}
              style={{
                width: '600px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                cursor: card.active ? 'pointer' : 'default',
                opacity: card.active ? 1 : 0.7,
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
                width: '600px',
                height: '478px',
                backgroundImage: `url("${card.imageSrc}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)',
                }} />

                {/* CTA Button – centered in lower half */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '219px',
                  transform: 'translateX(-50%)',
                  zIndex: 5,
                }}>
                  <button
                    id={`card-btn-${card.id}`}
                    className="btn"
                    style={{ width: '169px', height: '40px', pointerEvents: 'none' }}
                    tabIndex={-1}
                  >
                    Go To Launch Page
                  </button>
                </div>
              </div>

              {/* Card Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '41px',
                    fontWeight: 700,
                    color: 'var(--kawasaki-green)',
                    lineHeight: '62px',
                    margin: 0,
                    textTransform: 'none',
                  }}>
                    {card.title}
                  </h2>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '20px',
                    color: '#FFFFFF',
                    lineHeight: '30px',
                    margin: 0,
                  }}>
                    {card.subtitle}
                  </p>
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: '21px',
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
