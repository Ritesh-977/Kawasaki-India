import React, { useRef, useEffect, useState } from 'react';

/**
 * Accessories – "Recommended Accessories" section matching Figma node 11407:63775.
 *
 * Layout:
 *  - Section header with bottom border: "Recommended Accessories"
 *  - 4 product cards in a row, each 286×450px
 *  - Cards: white bg, green "New" badge, product image, name (Oswald), desc, price
 *
 * Background: #FAFAFA, padding: 152px 100px 145px
 */

const ACCESSORIES = [
  {
    id: 1,
    name: 'WSBK 2024 Bodywarmer Male',
    description: 'Softshell body warmer with zipped outer pockets. Outer pockets are zipped.',
    price: '₹8,520.00',
    badge: 'New',
    imgPlaceholder: '#f0f0f0',
  },
  {
    id: 2,
    name: 'WSBK 2024 Beanie Adult',
    description: 'Knitted beanie with racing logo\'s in Kawasaki 2024 Wsbk team-colours.',
    price: '₹1,510.00',
    badge: 'New',
    imgPlaceholder: '#e8e8e8',
  },
  {
    id: 3,
    name: 'KLX 110R Track Day Helmet',
    description: 'Full-face helmet with ventilation system, certified for off-road use.',
    price: '₹6,999.00',
    badge: 'New',
    imgPlaceholder: '#ececec',
  },
  {
    id: 4,
    name: 'Kawasaki Racing Team Jacket',
    description: 'Officially licensed team jacket with embroidered logos and fleece lining.',
    price: '₹4,250.00',
    badge: 'New',
    imgPlaceholder: '#e5e5e5',
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
        padding: '152px 100px 145px',
        width: '100%',
      }}
    >
      {/* Section Header */}
      <div
        style={{
          borderBottom: '1px solid #D4D4D4',
          paddingBottom: '16px',
          marginBottom: '40px',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '46px',
          fontWeight: 600,
          color: '#171717',
          lineHeight: '69px',
          textTransform: 'none',
        }}>
          Recommended Accessories
        </h2>
      </div>

      {/* Product List */}
      <div style={{
        display: 'flex',
        gap: '32px',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}>
        {ACCESSORIES.map((item, idx) => (
          <div
            key={item.id}
            id={`accessory-card-${item.id}`}
            className="product-card"
            style={{
              width: '286px',
              minWidth: '260px',
              height: '450px',
              flexShrink: 0,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: `opacity 0.5s ease ${idx * 0.08}s, transform 0.5s ease ${idx * 0.08}s`,
              cursor: 'pointer',
            }}
          >
            {/* Product Image Area */}
            <div style={{ width: '286px', height: '220px', position: 'relative', flexShrink: 0 }}>
              {/* Badge */}
              <div style={{
                position: 'absolute',
                top: '4px',
                left: '4px',
                backgroundColor: 'var(--kawasaki-green)',
                borderRadius: '2px',
                width: '57px',
                height: '22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 5,
              }}>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#F8FAFC',
                }}>
                  {item.badge}
                </span>
              </div>

              {/* Placeholder image */}
              <div style={{
                position: 'absolute',
                left: '24px',
                top: '21px',
                width: '238px',
                height: '178px',
                backgroundColor: item.imgPlaceholder,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', color: '#A3A3A3' }}>Product Image</span>
              </div>
            </div>

            {/* Product Info */}
            <div style={{
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              flex: 1,
            }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '22px',
                fontWeight: 500,
                color: '#171717',
                lineHeight: '33px',
                textTransform: 'none',
              }}>
                {item.name}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: '#737373',
                lineHeight: '22px',
                flexGrow: 1,
              }}>
                {item.description}
              </p>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '20px',
                color: '#171717',
                lineHeight: '30px',
                fontWeight: 400,
              }}>
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accessories;
