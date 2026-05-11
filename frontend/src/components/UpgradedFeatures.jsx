import React, { useRef, useState, useEffect } from 'react';

/**
 * UpgradedFeatures – Replaces the old Gallery section.
 * Layout:
 * - Centered "UPGRADED TO RIDE BETTER" title.
 * - Horizontally scrollable row of feature cards.
 * - Each card has an image, a fading green accent line, title, and description.
 * - Floating right arrow button to scroll the container.
 */

const UPGRADED_FEATURES = [
  {
    id: 1,
    title: 'TFT Colour Instrumentation',
    description: 'New digital TFT display adds a premium, high-tech touch with extra features for an enhanced ride.',
    imgPlaceholder: '#E5E5E5',
  },
  {
    id: 2,
    title: 'New Tyres, Lighter Handling',
    description: 'Dunlop Sportmax Roadsport 2 tyres improve grip and deliver noticeably lighter, more responsive handling.',
    imgPlaceholder: '#D4D4D4',
  },
  {
    id: 3,
    title: 'Improved Windshield',
    description: 'Sleek new windshield design boosts sporty style while offering better wind protection at higher speeds.',
    imgPlaceholder: '#E5E5E5',
  },
  {
    id: 4,
    title: 'LED Lighting',
    description: 'Bright white LED headlights cast a wide beam for excellent visibility and striking looks.',
    imgPlaceholder: '#D4D4D4',
  },
];

const UpgradedFeatures = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Scroll handler for the next arrow button
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="upgraded-features-section"
      style={{
        backgroundColor: '#FAFAFA', // Light grey background matching screenshot
        padding: '100px 0 120px 0',
        width: '100%',
        position: 'relative',
        overflow: 'hidden', // Prevents horizontal scroll on the whole page
      }}
    >
      {/* Invisible style block to hide the horizontal scrollbar for a clean UI */}
      <style>
        {`
          .hide-scroll::-webkit-scrollbar {
            display: none;
          }
          .hide-scroll {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      {/* Section Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '60px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}>
        <h2 style={{
          fontFamily: '"Impact", "Arial Black", sans-serif',
          fontSize: 'clamp(40px, 5vw, 64px)',
          fontWeight: 400,
          color: '#171717',
          lineHeight: '1.1',
          textTransform: 'uppercase',
          margin: 0,
          letterSpacing: '1px',
        }}>
          Upgraded to Ride Better
        </h2>
      </div>

      {/* Horizontally Scrollable Container */}
      <div style={{ position: 'relative', width: '100%' }}>
        <div
          ref={scrollContainerRef}
          className="hide-scroll"
          style={{
            display: 'flex',
            gap: '32px',
            padding: '0 100px', // Adds padding to the start and end of the scroll list
            overflowX: 'auto',
            scrollBehavior: 'smooth',
          }}
        >
          {UPGRADED_FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                minWidth: '340px', // Card width
                width: '340px',
                flexShrink: 0,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.5s ease ${idx * 0.1}s, transform 0.5s ease ${idx * 0.1}s`,
              }}
            >
              {/* Image Area */}
              <div style={{
                width: '100%',
                height: '240px',
                backgroundColor: feature.imgPlaceholder,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
              }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#888' }}>
                  {feature.title} Image
                </span>
              </div>

              {/* Text Area with Green Fading Line */}
              <div style={{ display: 'flex', gap: '16px' }}>
                {/* Green Fading Accent Line */}
                <div style={{
                  width: '6px',
                  background: 'linear-gradient(to bottom, var(--kawasaki-green) 0%, var(--kawasaki-green) 60%, transparent 100%)',
                  flexShrink: 0,
                }} />

                {/* Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <h3 style={{
                    fontFamily: '"Impact", "Arial Black", sans-serif',
                    fontSize: '24px',
                    fontWeight: 400,
                    color: '#171717',
                    lineHeight: '1.2',
                    margin: 0,
                    letterSpacing: '0.5px',
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontFamily: '"Arial", sans-serif',
                    fontSize: '16px',
                    color: '#333333',
                    lineHeight: '1.6',
                    margin: 0,
                  }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Right Arrow Button */}
        <div style={{
          position: 'absolute',
          right: '50px',
          top: '35%', // Centered vertically relative to the images
          transform: 'translateY(-50%)',
          zIndex: 10,
        }}>
          <button
            onClick={scrollRight}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="var(--kawasaki-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpgradedFeatures;