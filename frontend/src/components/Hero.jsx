import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

// Define all the sections on the page for the dot navigation
const PAGE_SECTIONS = [
  { id: 'hero-section', label: 'Unleash the fun' },
  { id: 'start-small-section', label: 'Start Small. Ride Big.' },
  { id: 'perfect-fit-section', label: 'Perfect fit' },
  { id: 'electric-start-section', label: 'Electric start' },
  { id: 'off-road-section', label: 'Off-Road Capability' },
  { id: 'secure-adventure-section', label: 'Secure your Adventure' },
  { id: 'specs-section', label: 'Bike Specs' },
  { id: 'accessories-section', label: 'Recommended Accessories' },
  { id: 'upgraded-features-section', label: 'Bike Features' },
  { id: 'booking-form', label: 'Booking Form' },
  { id: 'footer', label: 'Footer' }
];

const Hero = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  // State for the global scroll trackers
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredDot, setHoveredDot] = useState(null);

  // Auto-advance Hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll Spy Logic: Tracks scroll percentage and active section
  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate overall page scroll progress for the right bar
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = totalScroll / windowHeight;
      setScrollProgress(progress);

      // 2. Determine which section is currently in the viewport
      let currentSectionIdx = 0;
      for (let i = 0; i < PAGE_SECTIONS.length; i++) {
        const el = document.getElementById(PAGE_SECTIONS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section has reached the middle of the screen
          if (rect.top <= window.innerHeight / 2) {
            currentSectionIdx = i;
          }
        }
      }
      setActiveSection(currentSectionIdx);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click handler to scroll to a specific section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Click handler to jump to a specific point on the page via the right progress bar
  const handleProgressBarClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const percentage = clickY / rect.height;
    const targetScrollY = percentage * (document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  const slideImages = ['/assets/home-banner.png', '/assets/home-banner1.png'];

  // A darker green shade for better contrast on hover
  const darkGreen = '#3b7a13';

  return (
    <>
      <Navbar transparent={true} />

      {/* --- GLOBAL FLOATING NAVIGATION (Dots & Progress Bar) --- */}

      {/* 1. Vertical Carousel Dot Indicator */}
      <div
        id="global-carousel-dots"
        style={{
          position: 'fixed', // Fixed so it follows the user down the page
          left: '40px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgb(238 238 238 / 10%)',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '8px 4px',
          zIndex: 900, // Keeps it above content but below the mobile menu
        }}
      >
        {PAGE_SECTIONS.map((section, i) => (
          <div
            key={i}
            onClick={() => scrollToSection(section.id)}
            onMouseEnter={() => setHoveredDot(i)}
            onMouseLeave={() => setHoveredDot(null)}
            style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            {/* The Dot */}
            <div
              style={{
                width: '8px',
                height: '8px',
                // 👇 CHANGED: Turns dark green if it is the active section OR if it is hovered
                backgroundColor: i === activeSection || hoveredDot === i ? darkGreen : '#A3A3A3',
                borderRadius: '4px',
                transition: 'background-color 0.2s ease',
              }}
            />

            {/* Hover Tooltip Label */}
            {hoveredDot === i && (
              <div style={{
                position: 'absolute',
                left: '20px', // Pushed to the right of the dot
                color: darkGreen, // 👇 CHANGED: Text is now the darker green
                fontFamily: '"Arial", sans-serif',
                fontSize: '12px',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                backgroundColor: '#FFFFFF',
                padding: '4px 8px',
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                pointerEvents: 'none', // Prevents tooltip from interfering with clicks
              }}>
                {section.label}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 2. Interactive Scroll Progress Bar on Right Edge */}
      <div
        onClick={handleProgressBarClick}
        style={{
          position: 'fixed', // Fixed to follow the user
          right: '20px',
          top: '25%',
          width: '8px',
          height: '50vh', // Scales nicely to 50% of the screen height
          backgroundColor: '#E5E5E5', // Empty track color
          borderRadius: '100px',
          zIndex: 900,
          cursor: 'pointer',
          overflow: 'hidden',
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        {/* The Green Fill */}
        <div style={{
          width: '100%',
          height: `${Math.max(5, scrollProgress * 100)}%`, // Always shows at least 5% so it's visible at the top
          backgroundColor: 'var(--kawasaki-green)', // Progress bar stays standard Kawasaki Green
          borderRadius: '100px',
          transition: 'height 0.1s ease-out',
        }} />
      </div>


      {/* --- HERO SECTION --- */}
      <section
        id="hero-section"
        style={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          backgroundColor: '#000',
          overflow: 'hidden',
        }}
      >
        {/* Background Images */}
        {slideImages.map((bg, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url("${bg}")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right top',
              zIndex: 1,
              transform: `translateX(${(index - activeSlide) * 100}%)`,
              transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        ))}

        {/* Left Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
            zIndex: 2,
          }}
        />

        {/* Main Content Container */}
        <div
          style={{
            position: 'absolute',
            left: '10%',
            top: '25%',
            width: '500px',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            zIndex: 10,
          }}
        >
          {/* Text Container */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h1
              className="animate-fade-in-left"
              style={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-heading)',
                fontSize: '46px',
                fontWeight: 600,
                lineHeight: '64px',
                whiteSpace: 'pre-line',
                margin: 0,
              }}
            >
              {`Unleash the Fun\nAll-New KLX110R`}
            </h1>
            <p
              className="animate-fade-in-left animate-delay-1"
              style={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                lineHeight: '28px',
                whiteSpace: 'pre-line',
                margin: 0,
              }}
            >
              {`Lightweight. Powerful.\nBuilt for the next generation of riders.`}
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-left animate-delay-2">
            <button
              id="hero-prebook-btn"
              className="btn"
              style={{ height: '40px', fontSize: '16px' }}
              onClick={() => navigate('/klx110r')}
            >
              Pre-Book Now
            </button>
          </div>
        </div>

        {/* Slide Progress Bars – bottom center */}
        <div
          id="slide-progress"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '40px',
            display: 'flex',
            gap: '10px',
            zIndex: 10,
          }}
        >
          {[0, 1].map((idx) => (
            <div
              key={idx}
              style={{
                width: '120px',
                height: '2px',
                backgroundColor: idx === activeSlide ? 'var(--kawasaki-green)' : '#D4D4D4',
                borderRadius: '1px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {idx === activeSlide && (
                <div
                  key={`progress-${activeSlide}`}
                  className="slide-progress-bar"
                  style={{ position: 'absolute', left: 0, top: 0, height: '100%' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div
          id="scroll-down-indicator"
          style={{
            position: 'absolute',
            left: '40px',
            bottom: '40px',
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            zIndex: 10,
          }}
        >
          {/* Mouse icon */}
          <div
            style={{
              width: '16px',
              height: '24px',
              borderRadius: '40px',
              border: '1px solid #D4D4D4',
              position: 'relative',
              flexShrink: 0,
            }}
          >
            <div
              className="mouse-scroll-dot"
              style={{
                width: '4px',
                height: '4px',
                backgroundColor: '#D4D4D4',
                borderRadius: '50%',
                position: 'absolute',
                left: '5px',
                top: '3px',
              }}
            />
          </div>
          <span
            style={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              fontWeight: 700,
              lineHeight: '20px',
            }}
          >
            Scroll down to explore
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;