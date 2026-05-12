import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * SecondaryHero – "Secure Your Adventure" full-screen banner section.
 * Matches Figma node "Banner 963" at position 4315px in the Landing Page.
 */
const SecondaryHero = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="secure-adventure-section"
      style={{
        position: 'relative',
        width: '100%',
        height: '960px',
        backgroundImage: 'url("/assets/secondary-hero-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Dark overlay for readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.45)',
        zIndex: 1,
      }} />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '565px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          alignItems: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {/* Text Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start', width: '100%' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '52px',
            fontWeight: 600,
            color: '#FFFFFF',
            lineHeight: '78px',
            textAlign: 'center',
            width: '100%',
            margin: 0,
          }}>
            Secure Your Adventure
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '20px',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: '30px',
            textAlign: 'center',
            width: '100%',
            margin: 0,
          }}>
            Book the KLX®110R and Hit the Trails
          </p>
        </div>

        {/* CTA Button */}
        <button
          id="secondary-prebook-btn"
          className="btn btn-lg"
          onClick={() => {
            const el = document.getElementById('booking-form');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Pre-book now
        </button>
      </div>
    </section>
  );
};

export default SecondaryHero;
