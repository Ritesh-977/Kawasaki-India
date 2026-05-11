import React, { useRef, useEffect, useState } from 'react';

/**
 * Gallery – Photo gallery section showing KLX110R action shots.
 * Figma shows a 3-image horizontal gallery layout with overflow hidden.
 */

const GALLERY_IMAGES = [
  { id: 1, src: '/assets/hero-bg.png', alt: 'KLX110R Action Shot 1' },
  { id: 2, src: '/assets/perfect-fit-section.png', alt: 'KLX110R Action Shot 2' },
  { id: 3, src: '/assets/off-road-section.png', alt: 'KLX110R Action Shot 3' },
];

const Gallery = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery-section"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '80px 0',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Section Header */}
      <div style={{
        padding: '0 100px',
        marginBottom: '40px',
        borderBottom: '1px solid #D4D4D4',
        paddingBottom: '16px',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '46px',
          fontWeight: 600,
          color: '#171717',
          lineHeight: '69px',
          textTransform: 'none',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}>
          Gallery
        </h2>
      </div>

      {/* Images Row */}
      <div style={{
        display: 'flex',
        gap: '0',
        width: '100%',
      }}>
        {GALLERY_IMAGES.map((img, idx) => (
          <div
            key={img.id}
            id={`gallery-img-${idx + 1}`}
            onClick={() => setActiveIdx(idx)}
            style={{
              flex: activeIdx === idx ? 2 : 1,
              height: '480px',
              backgroundImage: `url("${img.src}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              cursor: 'pointer',
              transition: 'flex 0.5s ease',
              opacity: visible ? 1 : 0,
              filter: activeIdx === idx ? 'brightness(1)' : 'brightness(0.6)',
            }}
          >
            {/* Hover/active overlay */}
            {activeIdx === idx && (
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.6) 100%)',
              }} />
            )}
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '24px',
      }}>
        {GALLERY_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            style={{
              width: idx === activeIdx ? '32px' : '8px',
              height: '8px',
              backgroundColor: idx === activeIdx ? 'var(--kawasaki-green)' : '#D4D4D4',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
