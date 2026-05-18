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

// Two color variants — each with their own angle images
const colorVariants = [
  {
    id: 'green',
    label: 'Kawasaki Green',
    hex: '#69BE28',
    leftColor: '#171717',
    rightColor: '#69BE28',
    activeBorderColor: '#171717',
    angles: [
      { id: 'angle1', src: '/assets/angle1.png', label: 'View 1' },
      { id: 'angle2', src: '/assets/angle2.png', label: 'View 2' },
      { id: 'angle3', src: '/assets/angle3.png', label: 'View 3' },
    ],
  },
  {
    id: 'black',
    label: 'Ebony Black',
    hex: '#171717',
    leftColor: '#171717',
    rightColor: '#808080',
    activeBorderColor: '#171717',
    angles: [
      { id: 'angle4', src: '/assets/angle4.png', label: 'View 1' },
      { id: 'angle5', src: '/assets/angle5.png', label: 'View 2' },
      { id: 'angle6', src: '/assets/angle6.png', label: 'View 3' },
    ],
  },
];

const SpecsView = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Color + Angle Viewer State
  const [activeColor, setActiveColor] = useState('green');
  const [activeAngleId, setActiveAngleId] = useState('angle1');
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // Derived: current color variant and its angles
  const currentVariant = colorVariants.find((c) => c.id === activeColor);
  const currentAngles = currentVariant?.angles ?? [];
  const currentImage = currentAngles.find((a) => a.id === activeAngleId)?.src;

  // When color changes, snap to first angle of that color
  const handleColorChange = (colorId) => {
    const variant = colorVariants.find((c) => c.id === colorId);
    setActiveColor(colorId);
    setActiveAngleId(variant.angles[0].id);
  };

  // Fade-in animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // --- DRAG LOGIC (cycles through active color's angles) ---
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.type === 'touchstart' ? e.touches[0].clientX : e.clientX);
  };

  const handleDragMove = useCallback((e) => {
    if (!isDragging) return;
    if (e.type === 'touchmove') e.preventDefault();
    const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    if (Math.abs(diff) > 60) {
      const direction = diff > 0 ? -1 : 1;
      setActiveAngleId((prev) => {
        const idx = currentAngles.findIndex((a) => a.id === prev);
        const next = (idx + direction + currentAngles.length) % currentAngles.length;
        return currentAngles[next].id;
      });
      setStartX(currentX);
    }
  }, [isDragging, startX, currentAngles]);

  const handleDragEnd = () => setIsDragging(false);

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
        top: '5%',
        left: '50%',
        transform: 'translate(-50%, 0)',
        fontFamily: '"Impact", "Arial Black", sans-serif',
        fontSize: 'clamp(200px, 25vw, 400px)',
        fontWeight: 400,
        lineHeight: '1',
        background: 'linear-gradient(180deg, rgba(125, 181, 81, 0.5) 0%, rgba(255, 255, 255, 0.30) 100%)',
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

        {/* CENTER COLUMN: Bike Viewer & Angle Thumbnails */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Draggable Area */}
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
            <img
              src={currentImage}
              alt={`Kawasaki KLX110R ${activeColor}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                pointerEvents: 'none',
                userSelect: 'none',
                transition: 'opacity 0.3s ease',
              }}
              draggable="false"
            />

            {/* Drag hint */}
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

          {/* Angle Thumbnails — dynamically switch with color */}
          <div style={{
            display: 'flex',
            gap: '16px',
            marginTop: '40px',
            zIndex: 10,
          }}>
            {currentAngles.map((angle) => (
              <div
                key={angle.id}
                onClick={() => setActiveAngleId(angle.id)}
                title={angle.label}
                style={{
                  width: '80px',
                  height: '55px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '4px',
                  border: activeAngleId === angle.id ? `2px solid ${currentVariant.hex}` : '1px solid #D4D4D4',
                  boxShadow: activeAngleId === angle.id
                    ? `0px 4px 14px ${activeColor === 'green' ? 'rgba(105,190,40,0.25)' : 'rgba(0,0,0,0.2)'}`
                    : 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s ease',
                  overflow: 'hidden',
                  padding: '4px',
                }}
              >
                <img
                  src={angle.src}
                  alt={angle.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2px' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Specs & Color Swatches */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          textAlign: 'right',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>

          {/* Colors Available Block */}
          <div>
            <span style={labelStyle}>COLORS AVAILABLE</span>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '10px' }}>
              {colorVariants.map((variant) => {
                const isActive = activeColor === variant.id;
                return (
                  <div
                    key={variant.id}
                    onClick={() => handleColorChange(variant.id)}
                    title={variant.label}
                    style={{
                      width: '34px',
                      height: '28px',
                      borderRadius: '4px',
                      border: isActive ? `2px solid ${variant.activeBorderColor}` : '1px solid #D4D4D4',
                      boxShadow: 'none',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      display: 'flex',
                      transition: 'all 0.2s ease',
                      flexShrink: 0,
                    }}
                  >
                    {/* Left half */}
                    <div style={{ flex: 1, backgroundColor: variant.leftColor }} />
                    {/* Right half */}
                    <div style={{ flex: 1, backgroundColor: variant.rightColor }} />
                  </div>
                );
              })}
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