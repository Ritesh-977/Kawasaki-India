import React, { useRef, useEffect, useState } from 'react';

/**
 * SpecsView – Specs section matching Figma node "Spec" at 5274px.
 *
 * Layout:
 *  - Large gradient "KLX110R" watermark text at top
 *  - Left side: 5 spec rows (Engine, Top Speed, Transmission, Start System, Fuel Tank)
 *  - Center: Bike side-profile image + color swatches
 *  - Right side: 3 spec rows (Colors, Seat Height, Weight)
 * 
 * Background: linear-gradient(180deg, #FAFAFA 37%, #E5E5E5 87%)
 */

const specsLeft = [
  { label: 'Engine', value: '112cc, 4-stroke' },
  { label: 'Top Speed', value: 'Approx. 50 km/h' },
  { label: 'Transmission', value: '4-speed auto clutch' },
  { label: 'Start System', value: 'Electric + kickstart' },
  { label: 'Fuel Tank', value: '3.6 liters' },
];

const specsRight = [
  { label: 'Colors Available', value: '' },
  { label: 'Seat Height', value: '26.8 in (R) / 28.7 in (R L)' },
  { label: 'Weight', value: '76 kg (R) / 89 kg (R L)' },
];

const colorSwatches = [
  { color: '#69BE28', selected: true },
  { color: '#525252', selected: false },
  { color: '#C8102E', selected: false },
];

const SpecsView = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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
      id="specs-section"
      style={{
        width: '100%',
        minHeight: '960px',
        background: 'linear-gradient(180deg, #FAFAFA 37%, #E5E5E5 87%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '0',
      }}
    >
      {/* Large watermark text */}
      <div style={{
        position: 'absolute',
        top: '-52px',
        left: '43px',
        fontFamily: 'var(--font-heading)',
        fontSize: '400px',
        fontWeight: 600,
        lineHeight: '600px',
        background: 'linear-gradient(180deg, #69BE28 0%, rgba(255, 255, 255, 0) 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        pointerEvents: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        zIndex: 1,
      }}>
        KLX110R
      </div>

      {/* Content Layout */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        minHeight: '960px',
        padding: '0 100px',
        paddingBottom: '60px',
      }}>
        {/* Left Specs */}
        <div style={{
          width: '240px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          paddingBottom: '80px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(-20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          {specsLeft.map((spec, idx) => (
            <div key={idx} className="spec-item">
              <span className="spec-label">{spec.label}</span>
              <span className="spec-value">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Center – Bike Image */}
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.1s',
        }}>
          <img
            src="/assets/specs-section.png"
            alt="KLX110R Specifications"
            style={{
              width: '919px',
              maxWidth: '100%',
              objectFit: 'contain',
            }}
          />

          {/* Color swatches below the bike */}
          <div style={{
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
          }}>
            {colorSwatches.map((swatch, idx) => (
              <div
                key={idx}
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: swatch.color,
                  borderRadius: '2px',
                  border: '1px solid #D4D4D4',
                  boxShadow: swatch.selected ? '0px 0px 0px 4px rgba(0,0,0,1), 0px 0px 0px 2px rgba(255,255,255,1)' : 'none',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>

        {/* Right Specs */}
        <div style={{
          width: '240px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          paddingBottom: '80px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(20px)',
          transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
        }}>
          {specsRight.map((spec, idx) => (
            <div key={idx} className="spec-item" style={{ alignItems: 'flex-end' }}>
              <span className="spec-label spec-value-right">{spec.label}</span>
              {spec.value && (
                <span className="spec-value spec-value-right">{spec.value}</span>
              )}
              {idx === 0 && (
                <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
                  {colorSwatches.map((sw, i) => (
                    <div
                      key={i}
                      style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: sw.color,
                        borderRadius: '2px',
                        border: '1px solid #D4D4D4',
                        boxShadow: sw.selected ? '0 0 0 4px rgba(0,0,0,1), 0 0 0 2px rgba(255,255,255,1)' : 'none',
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsView;
