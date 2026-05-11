import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Hero = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const progressRef = useRef(null);

  // Auto-advance slides - Timer set to 5 seconds (5000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideImages = ['/assets/home-banner.png', '/assets/home-banner1.png'];

  return (
    <section
      id="hero-section"
      style={{
        position: 'relative',
        height: '100vh', // Fits exactly to the screen height
        // minHeight: '700px' <--- REMOVED: This is what was causing the scrollbar!
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
            backgroundPosition: 'top right',
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

      {/* Navbar */}
      <Navbar transparent={true} />

      {/* Vertical scroll progress bar on right edge */}
      <div
        style={{
          position: 'absolute',
          right: '20px',
          top: '15%', // Scaled responsively
          width: '10px',
          height: '220px', // Scaled down slightly
          backgroundColor: 'var(--kawasaki-green)',
          borderRadius: '100px',
          zIndex: 10,
        }}
      />

      {/* Vertical Carousel Dot Indicator */}
      <div
        id="carousel-dots"
        style={{
          position: 'absolute',
          left: '40px', // Pulled slightly tighter to the edge
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: '#EEEAEA',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '8px 4px',
          zIndex: 10,
        }}
      >
        {[...Array(11)].map((_, i) => (
          <div
            key={i}
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: i === 0 ? 'var(--kawasaki-green)' : '#A3A3A3',
              borderRadius: '4px',
              transition: 'background-color 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div
        style={{
          position: 'absolute',
          left: '10%', // Responsive left margin instead of 120px
          top: '25%', // 👇 MOVED UP: Changed from 324px to perfectly center it higher up
          width: '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px', // Scaled down gap
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
              // 👇 SCALED DOWN: Fonts scaled down ~10% to mimic your 90% zoom look
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
              fontSize: '18px', // Scaled down
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
          left: '50%', // Centers perfectly dynamically regardless of screen width
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
  );
};

export default Hero;