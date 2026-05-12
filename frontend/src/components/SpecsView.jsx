import React, { useRef, useEffect, useState, useCallback } from 'react';

const specsLeft = [
  { label: 'ENGINE', value: '112cc, 4-stroke' },
  { label: 'TOP SPEED', value: 'Approx. 50 km/h' },
  { label: 'TRANSMISSION', value: '4-speed auto clutch' },
  { label: 'START SYSTEM', value: 'Electric + kickstart' },
  { label: 'FUEL TANK', value: '3.6 liters' },
];

const specsRight = [
  { label: 'SEAT HEIGHT', value: '26.8 in (R) / 28.7 in (R L)' },
  { label: 'WEIGHT', value: '76 kg (R) / 89 kg (R L)' },
];

// The available color variants
const colorVariants = [
  { id: 'green', hex: '#69BE28', thumb: '/assets/thumb-green.png' },
  { id: 'black', hex: '#171717', thumb: '/assets/thumb-black.png' },
  { id: 'red', hex: '#E53935', thumb: '/assets/thumb-red.png' },
];

const SpecsView = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // 360 Viewer State
  const [activeColor, setActiveColor] = useState('green');
  const [frame, setFrame] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // Fade-in animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // --- 360 DRAG LOGIC ---
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.type === 'touchstart' ? e.touches[0].clientX : e.clientX);
  };

  const handleDragMove = useCallback((e) => {
    if (!isDragging) return;

    // Prevent scrolling while rotating the bike on mobile
    if (e.type === 'touchmove') e.preventDefault();

    const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;

    // Sensitivity: Change frame every 10 pixels dragged
    if (Math.abs(diff) > 10) {
      setFrame((prevFrame) => {
        let newFrame = diff > 0 ? prevFrame - 1 : prevFrame + 1; // Drag right = rotate left
        if (newFrame > 36) newFrame = 1;
        if (newFrame < 1) newFrame = 36;
        return newFrame;
      });
      setStartX(currentX); // Reset start point for continuous dragging
    }
  }, [isDragging, startX]);

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Shared Styles
  const labelStyle = {
    display: 'block',
    fontFamily: '"Arial", sans-serif',
    fontSize: '12px',
    fontWeight: 700,
    color: '#A3A3A3',
    marginBottom: '4px',
    letterSpacing: '0.05em',
  };

  const valueStyle = {
    display: 'block',
    fontFamily: '"Arial", sans-serif',
    fontSize: '16px',
    fontWeight: 700,
    color: '#171717',
  };

  return (
    <section
      ref={sectionRef}
      id="specs-section"
      style={{
        width: '100%',
        minHeight: '800px',
        background: 'linear-gradient(180deg, #FAFAFA 0%, #E5E5E5 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '100px 0',
      }}
    >
      {/* Massive Watermark Text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -60%)',
        fontFamily: '"Impact", "Arial Black", sans-serif',
        fontSize: 'clamp(200px, 25vw, 400px)',
        fontWeight: 400,
        lineHeight: '1',
        // Light green fading into the background
        background: 'linear-gradient(180deg, rgba(105, 190, 40, 0.15) 0%, rgba(105, 190, 40, 0) 80%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        pointerEvents: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        zIndex: 1,
        letterSpacing: '5px',
      }}>
        KLX110R
      </div>

      {/* Main Grid Layout */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '200px 1fr 200px',
        gap: '40px',
        alignItems: 'center',
        padding: '0 6vw',
      }}>

        {/* LEFT COLUMN: Specs */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(-20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          {specsLeft.map((spec, idx) => (
            <div key={idx}>
              <span style={labelStyle}>{spec.label}</span>
              <span style={valueStyle}>{spec.value}</span>
            </div>
          ))}
        </div>

        {/* CENTER COLUMN: 360 Rotatable Bike Viewer & Thumbnails */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Draggable 360 Area */}
          <div
            style={{
              width: '100%',
              maxWidth: '800px',
              height: '500px',
              cursor: isDragging ? 'grabbing' : 'grab',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            {/* The Image that updates its source based on color and frame */}
            <img
              src={`/assets/bike-${activeColor}-${frame}.png`}
              alt={`Kawasaki KLX110R ${activeColor}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                pointerEvents: 'none', // Prevents the browser's default image drag ghost
                userSelect: 'none',
              }}
              draggable="false"
            />

            {/* Instruction helper text */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: '#FFF',
              padding: '6px 16px',
              borderRadius: '20px',
              fontFamily: '"Arial", sans-serif',
              fontSize: '12px',
              pointerEvents: 'none',
              opacity: isDragging ? 0 : 1,
              transition: 'opacity 0.3s ease',
            }}>
              ↔ Drag to rotate
            </div>
          </div>

          {/* Color Switcher Thumbnails */}
          <div style={{
            display: 'flex',
            gap: '16px',
            marginTop: '40px',
            zIndex: 10,
          }}>
            {colorVariants.map((variant) => (
              <div
                key={variant.id}
                onClick={() => setActiveColor(variant.id)}
                style={{
                  width: '60px',
                  height: '40px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '2px',
                  border: activeColor === variant.id ? '2px solid #171717' : '1px solid #D4D4D4',
                  boxShadow: activeColor === variant.id ? '0px 4px 10px rgba(0,0,0,0.1)' : 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  overflow: 'hidden',
                  padding: '2px'
                }}
              >
                <img
                  src={variant.thumb}
                  alt={`${variant.id} variant`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Specs & Color Availability */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          textAlign: 'right', // Right aligns the text
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>

          {/* Colors Available Block */}
          <div>
            <span style={labelStyle}>COLORS AVAILABLE</span>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '8px' }}>
              {colorVariants.map((variant) => (
                <div
                  key={variant.id}
                  onClick={() => setActiveColor(variant.id)}
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: variant.hex,
                    border: '2px solid #FFFFFF',
                    boxShadow: '0 0 0 1px #D4D4D4', // Creates the double border effect seen in screenshot
                    cursor: 'pointer',
                    borderRadius: '2px'
                  }}
                />
              ))}
            </div>
          </div>

          {specsRight.map((spec, idx) => (
            <div key={idx}>
              <span style={labelStyle}>{spec.label}</span>
              <span style={valueStyle}>{spec.value}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpecsView;