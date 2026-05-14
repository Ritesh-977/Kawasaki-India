import React, { useRef, useEffect, useState } from 'react';

/**
 * Accessories – "Recommended Accessories" section.
 *
 * Layout:
 * - Section header with bottom border: "RECOMMENDED ACCESSORIES"
 * - Horizontally scrollable row of product cards fitting 4 items per view.
 * - Cards: white bg, border, green "New" badge, product image, tighter text scaling.
 */

const ACCESSORIES = [
  {
    id: 1,
    name: 'WSBK 2024 Bodywarmer Male',
    description: 'Softshell body warmer with zipped outer pockets. Outer pockets are zipped.',
    price: '₹8,520.00',
    badge: 'New',
    image: '/assets/Body-warmer.png',
  },
  {
    id: 2,
    name: 'WSBK 2024 Beanie Adult',
    description: 'Knitted beanie with racing logo\'s in Kawasaki 2024 Wsbk team-colours.',
    price: '₹1,510.00',
    badge: 'New',
    image: '/assets/Beanie-adult.png',
  },
  {
    id: 3,
    name: 'WSBK 2024 Cap Adult',
    description: 'Six panel peak cap in Kawasaki 2024 Wsbk team-colours with green mesh back.',
    price: '₹1,680.00',
    badge: 'New',
    image: '/assets/cap-adult.png',
  },
  {
    id: 4,
    name: 'WSBK 2024 Polo Male',
    description: 'Kawasaki 2024 Wsbk team-colored short sleeved polo-shirt with 3-button placket.',
    price: '₹5,830.00',
    badge: 'New',
    image: '/assets/polo-male.png',
  },
  {
    id: 5,
    name: 'WSBK 2024 Bodywarmer Male',
    description: 'Softshell body warmer with zipped outer pockets. Outer pockets are zipped.',
    price: '₹8,520.00',
    badge: 'New',
    image: '/assets/Body-warmer.png',
  },
];

const Accessories = () => {
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
      id="accessories-section"
      style={{
        backgroundColor: '#FAFAFA',
        padding: '120px 100px', // Slightly adjusted top/bottom padding for balance
        width: '100%',
        position: 'relative',
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
      <div
        style={{
          borderBottom: '1px solid #D4D4D4',
          paddingBottom: '16px',
          marginBottom: '40px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '40px', // Scaled to match screenshot proportion
          fontWeight: 700,
          color: '#171717',
          lineHeight: '1.2',
          textTransform: 'uppercase', // Forced uppercase per screenshot
          margin: 0,
          letterSpacing: '0.5px',
        }}>
          Recommended Accessories
        </h2>
      </div>

      {/* Product List (Horizontally Scrollable) */}
      <div
        className="hide-scroll"
        style={{
          display: 'flex',
          gap: '24px', // 24px gap + 286px card width allows exactly 4 to fit in ~1220px area
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          paddingBottom: '20px', // Gives room for potential shadows
        }}>
        {ACCESSORIES.map((item, idx) => (
          <div
            key={item.id}
            id={`accessory-card-${item.id}`}
            className="product-card"
            style={{
              width: '286px',
              minWidth: '286px', // CRUCIAL: prevents cards from squishing so they force horizontal scroll
              backgroundColor: '#FFFFFF', // Solid white card background
              border: '1px solid #EFEFEF', // Subtle border
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: `opacity 0.5s ease ${idx * 0.08}s, transform 0.5s ease ${idx * 0.08}s`,
              cursor: 'pointer',
            }}
          >
            {/* Product Image Area */}
            <div style={{ width: '100%', height: '220px', position: 'relative', flexShrink: 0 }}>
              {/* Badge */}
              <div style={{
                position: 'absolute',
                top: '12px', // Pushed slightly inward for breathing room
                left: '12px',
                backgroundColor: 'var(--kawasaki-green)',
                padding: '4px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 5,
              }}>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                }}>
                  {item.badge}
                </span>
              </div>

              {/* The Actual Product Image */}
              <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px', // Keeps the image from touching the edges of the card
              }}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain' // Ensures the image scales correctly without warping
                    }}
                  />
                ) : (
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#D4D4D4' }}>Image Area</span>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              flex: 1,
            }}>
              {/* Card Title */}
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '18px', // Scaled down to match the screenshot
                fontWeight: 600,
                color: '#171717',
                lineHeight: '1.4',
                margin: 0,
              }}>
                {item.name}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px', // Scaled down for tighter body text
                color: '#737373',
                lineHeight: '1.6',
                margin: 0,
                flexGrow: 1,
              }}>
                {item.description}
              </p>

              {/* Price */}
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px', // Slightly smaller price
                color: '#171717',
                fontWeight: 600,
                marginTop: '8px',
              }}>
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Right Scroll/Next Arrow Button */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '32px',
      }}>
        <button style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--kawasaki-green)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E5E5E5'; }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="var(--kawasaki-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

    </section>
  );
};

export default Accessories;