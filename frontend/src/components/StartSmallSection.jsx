import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StartSmallSection = () => {
  const [hovered, setHovered] = useState(false);

  // 👇 UPDATED: The "Goldilocks" duration (1.8s) and a smoother, mechanical ease-in-out curve
  const animDuration = 1.8;
  const easeCurve = [0.4, 0.0, 0.2, 1];

  const transitionSettings = {
    duration: animDuration,
    ease: easeCurve
  };

  // Keyframe transition settings specifically for the crossing doors
  const doorTransition = {
    duration: animDuration,
    times: [0, 0.12, 1],
    ease: easeCurve
  };

  // LEFT DOOR POLYGONS
  const closedPolygonLeft = 'polygon(0% 0%, 80% 0%, 70% 50%, 80% 100%, 0% 100%)';
  const overlapPolygonLeft = 'polygon(0% 0%, 84% 0%, 74% 50%, 84% 100%, 0% 100%)';
  const openPolygonLeft = 'polygon(-100% 0%, -20% 0%, -30% 50%, -20% 100%, -100% 100%)';

  // RIGHT DOOR POLYGONS
  const closedPolygonRight = 'polygon(80% 0%, 100% 0%, 100% 100%, 80% 100%, 70% 50%)';
  const overlapPolygonRight = 'polygon(76% 0%, 100% 0%, 100% 100%, 76% 100%, 66% 50%)';
  const openPolygonRight = 'polygon(120% 0%, 140% 0%, 140% 100%, 120% 100%, 110% 50%)';

  return (
    <section
      id="start-small-section"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url('/assets/home-banner1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Subtle dark gradient for text readability (always present behind green) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 100%)',
        zIndex: 1,
      }} />

      {/* TEXT CONTAINER - Z-Index 2 (Placed BEHIND the green overlay curtain) */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '10vh 8vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
      }}>

        {/* Top Content: START SMALL text + Right description */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '100%',
          marginTop: '15vh',
        }}>
          {/* Top Left - Comes from the FAR RIGHT ENDPOINT */}
          <motion.div
            initial={{ opacity: 0, x: '50vw' }}
            animate={{
              opacity: hovered ? 1 : 0,
              x: hovered ? 0 : '50vw'
            }}
            transition={transitionSettings}
          >
            <h2 style={{
              fontFamily: '"Impact", "Arial Black", sans-serif',
              fontSize: 'clamp(32px, 4vw, 56px)',
              color: '#FFFFFF',
              margin: 0,
              lineHeight: '1.1',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
            }}>
              START SMALL.<br />RIDE BIG.
            </h2>
          </motion.div>

          {/* Top Right - Comes from FAR BOTTOM ENDPOINT */}
          <motion.div
            initial={{ opacity: 0, y: '50vh' }}
            animate={{
              opacity: hovered ? 1 : 0,
              y: hovered ? 0 : '50vh'
            }}
            transition={{ ...transitionSettings, delay: 0.1 }}
            style={{
              position: 'relative',
              maxWidth: '300px',
              marginRight: '2vw'
            }}
          >
            {/* The SVG Line */}
            <svg
              style={{
                position: 'absolute',
                right: '100%',
                top: '12px',
                width: '120px',
                height: '80px',
                overflow: 'visible',
                pointerEvents: 'none',
              }}
            >
              <line x1="110" y1="0" x2="0" y2="60" stroke="#FFFFFF" strokeWidth="1" />
              <circle cx="0" cy="60" r="3" fill="var(--kawasaki-green, #69BE28)" />
            </svg>
            <p style={{
              fontFamily: '"Arial", sans-serif',
              fontSize: '16px',
              color: '#FFFFFF',
              lineHeight: '1.6',
              margin: 0,
              textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
              fontWeight: 400,
            }}>
              Effortless starts, a perfect fit for young riders, and off-road power that delivers big-time fun.
            </p>
          </motion.div>
        </div>

        {/* Bottom Content: KLX110R - Comes from the FAR LEFT ENDPOINT */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          width: '100%',
          marginBottom: '8vh',
        }}>
          <motion.div
            initial={{ opacity: 0, x: '-50vw' }}
            animate={{
              opacity: hovered ? 1 : 0,
              x: hovered ? 0 : '-50vw'
            }}
            transition={transitionSettings}
          >
            <h1 style={{
              fontFamily: '"Impact", "Arial Black", sans-serif',
              fontSize: 'clamp(60px, 12vw, 130px)',
              color: '#FFFFFF',
              margin: 0,
              lineHeight: '1',
              textTransform: 'uppercase',
              textShadow: '4px 4px 12px rgba(0,0,0,0.4)',
              letterSpacing: '2px'
            }}>
              KLX110R
            </h1>
          </motion.div>
        </div>
      </div>

      {/* --- SPLIT GREEN OVERLAYS (Cross-Grow Sliding) --- */}

      {/* 1. LEFT DOOR */}
      <motion.div
        animate={{
          clipPath: hovered ? [closedPolygonLeft, overlapPolygonLeft, openPolygonLeft] : [openPolygonLeft, overlapPolygonLeft, closedPolygonLeft]
        }}
        transition={doorTransition}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(105, 190, 40, 0.85)',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

      {/* 2. RIGHT DOOR */}
      <motion.div
        animate={{
          clipPath: hovered ? [closedPolygonRight, overlapPolygonRight, openPolygonRight] : [openPolygonRight, overlapPolygonRight, closedPolygonRight]
        }}
        transition={doorTransition}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(105, 190, 40, 0.85)',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

    </section>
  );
};

export default StartSmallSection;