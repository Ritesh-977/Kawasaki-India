import React, { useState } from 'react';

/**
 * Feature – Reusable section for both "Perfect Fit" and "Electric Start".
 * Uses a 3D Layering technique (z-index) so the text background slides behind the image, 
 * while the text itself slides over the image.
 */
const Feature = ({
  bgTextLine1 = 'ELECTRIC START',
  tagline = 'THE KLX®110R MAKES GETTING STARTED SIMPLE—SO THE FUN NEVER HAS TO WAIT.',
  description = "KLX®110R motorcycles feature electric start for quick, hassle-free ignition. With dual-sport versatility, they're built to conquer trails and streets alike—perfect for riders of all levels.",
  imageLeft = false,
  imageSrc = 'https://via.placeholder.com/600x600',
  price = null,
  id
}) => {
  const [hovered, setHovered] = useState(false);

  // Animation settings - Smooth and slow
  const ease = 'cubic-bezier(0.22, 1, 0.36, 1)';
  const dur = '0.85s';

  // Theme Colors
  const kawasakiGreen = '#69BE28';
  const darkGreenShadow = '#4a8a19';

  // Dynamic Shift Amounts based on layout
  const imageShift = imageLeft ? 70 : -70;
  const textShift = imageLeft ? -120 : 120;

  // Controls how far the price box slides inward
  const priceShift = imageLeft ? 140 : -140;

  // BACKGROUND GRADIENT
  // Maximum green, but fades to a slightly translucent white/green at the edge
  const gradientDirection = imageLeft ? 'to left' : 'to right';
  const headerGradient = `linear-gradient(${gradientDirection}, ${kawasakiGreen} 0%, ${kawasakiGreen} 85%, rgba(255, 255, 255, 0.6) 100%)`;

  return (
    <section
      id={id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: imageLeft ? 'row' : 'row-reverse',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1400px', // Increased slightly to accommodate the wider gaps
        margin: '0 auto',
        // Increased padding to create clear gaps away from the outer edges of the page
        padding: '80px 6vw',
        backgroundColor: '#FFFFFF',
        fontFamily: 'sans-serif',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* ── IMAGE SIDE (50%) ── */}
      <div style={{
        flex: '0 0 50%',
        position: 'relative',
      }}>
        <img
          src={imageSrc}
          alt={bgTextLine1}
          style={{
            // Scaled down to 85% to make the image slightly smaller, with auto margins to keep it centered
            width: '85%',
            height: 'auto',
            display: 'block',
            margin: '0 auto',
            objectFit: 'cover',
            position: 'relative',
            zIndex: 2, // LAYER 2: Image sits above the green background
            transform: hovered ? `translateX(${imageShift}px)` : 'translateX(0px)',
            transition: `transform ${dur} ${ease}`,
          }}
        />

        {/* ── PRICE BOX OVERLAY ── */}
        {price && (
          <div style={{
            position: 'absolute',
            bottom: '20%',
            // Starts on the outer edge (Right side for Electric Start)
            left: imageLeft ? '0px' : 'auto',
            right: imageLeft ? 'auto' : '0px',
            // Slides inward "in between" on hover
            transform: hovered ? `translateX(${priceShift}px)` : 'translateX(0px)',
            transition: `transform ${dur} ${ease}`,
            backgroundColor: '#2b2b2b',
            padding: '16px 24px',
            zIndex: 10,
            boxShadow: '0px 10px 30px rgba(0,0,0,0.15)',
          }}>
            <div style={{
              fontFamily: '"Impact", "Arial Black", sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              color: '#FFFFFF',
              letterSpacing: '1px',
              marginBottom: '2px',
            }}>
              {price.label}
            </div>
            <div style={{
              fontFamily: '"Impact", "Arial Black", sans-serif',
              fontSize: 'clamp(32px, 4vw, 46px)',
              fontWeight: 400,
              color: '#FFFFFF',
              lineHeight: 1,
              letterSpacing: '1px',
            }}>
              {price.amount}
            </div>
          </div>
        )}
      </div>

      {/* ── TEXT SIDE (50%) ── */}
      <div style={{
        flex: '0 0 50%',
        paddingLeft: imageLeft ? '50px' : '0px',
        paddingRight: !imageLeft ? '50px' : '0px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>

        {/* HEADING WRAPPER */}
        <div style={{
          position: 'relative',
          width: '100%',
          minHeight: '120px',
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: '8px',
          marginBottom: '20px'
        }}>

          {/* 1. ANIMATED GREEN BACKGROUND BLOCK */}
          <div style={{
            position: 'absolute',
            right: imageLeft ? '0px' : 'auto',
            left: imageLeft ? 'auto' : '0px',
            top: 0,
            bottom: 0,
            width: hovered ? 'calc(100% + 45px)' : '0px',
            background: headerGradient,
            transition: `width ${dur} ${ease}`,
            zIndex: 1, // LAYER 1: Background sits behind everything
          }} />

          {/* 2. SLIDING HEADING TEXT */}
          <h2 style={{
            position: 'relative',
            zIndex: 3, // LAYER 3: Text sits on top of everything
            margin: 0,
            paddingLeft: imageLeft ? '30px' : '0px',
            paddingRight: imageLeft ? '20px' : '70px',
            fontFamily: '"Impact", "Arial Black", sans-serif',
            fontSize: 'clamp(50px, 6vw, 90px)',
            fontWeight: 'normal',
            letterSpacing: '1px',
            lineHeight: 0.85,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            transform: hovered ? `translateX(${textShift}px)` : 'translateX(0px)',
            color: hovered ? '#FFFFFF' : kawasakiGreen,
            textShadow: hovered
              ? `6px 5px 0px ${darkGreenShadow}`
              : `6px 5px 0px rgba(105, 190, 40, 0.2)`,
            transition: `all ${dur} ${ease}`,
          }}>
            {bgTextLine1}
          </h2>
        </div>

        {/* ── STATIC TEXT CONTENT ── */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          paddingLeft: imageLeft ? '30px' : '0px',
          paddingRight: imageLeft ? '20px' : '70px',
        }}>
          {/* TAGLINE */}
          <h3 style={{
            margin: '0 0 16px 0',
            fontFamily: '"Arial", sans-serif',
            fontSize: '18px',
            fontWeight: 800,
            letterSpacing: '0.04em',
            lineHeight: 1.4,
            textTransform: 'uppercase',
            color: kawasakiGreen,
          }}>
            {tagline}
          </h3>

          {/* DESCRIPTION */}
          <p style={{
            margin: 0,
            fontFamily: '"Arial", sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 1.6,
            color: '#333333',
            maxWidth: '500px',
          }}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;