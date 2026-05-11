import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer – matches the Figma footer (dark #171717 background).
 *
 * Sections:
 *  - Logo + tagline column
 *  - Sport (Road) bikes: Z Series, Ninja Series, Eliminator, Versys, Vulcan, W Series
 *  - Off-Road bikes: KX Series, KLX Series
 *  - SERVICE & WARRANTY links
 * 
 * Bottom bar: copyright + social icons
 */

const FOOTER_LINKS = [
  {
    heading: 'Z Series',
    links: ['Z400', 'Z650RS', 'z900', 'z 900rs'],
  },
  {
    heading: 'Ninja Series',
    links: ['Ninja 300', 'NINJA 500', 'ninja 650', 'ninja h2 sx', 'Ninja 1100sx'],
  },
  {
    heading: 'Off-Road',
    links: ['KX65', 'KX85', 'KX250', 'KX450', 'KLX100RU', 'KLX140F', 'KLX230rS', 'KLX300R'],
  },
  {
    heading: 'Service & Warranty',
    links: ['CONTACT US', 'LOCATE A DEALER', 'USEFUL LINKS', 'INTERNATIONAL SITES', 'Privacy Policy'],
  },
];

const Footer = () => {
  return (
    <footer
      id="main-footer"
      style={{
        backgroundColor: '#171717',
        color: '#FFFFFF',
        padding: '80px 100px 40px',
      }}
    >
      {/* Top Row */}
      <div style={{
        display: 'flex',
        gap: '60px',
        marginBottom: '60px',
        flexWrap: 'wrap',
      }}>
        {/* Logo + tagline */}
        <div style={{ flex: '0 0 220px' }}>
          <img src="/assets/logo.svg" alt="Kawasaki" style={{ height: '40px', marginBottom: '20px' }} />
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            color: '#A3A3A3',
            lineHeight: '21px',
            maxWidth: '180px',
          }}>
            Let the good times roll.<br />
            India Kawasaki Motors Pvt. Ltd.
          </p>
        </div>

        {/* Navigation Columns */}
        {FOOTER_LINKS.map((col) => (
          <div key={col.heading} style={{ flex: 1, minWidth: '140px' }}>
            <h5 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '16px',
              lineHeight: '24px',
            }}>
              {col.heading}
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: '#FFFFFF',
                      opacity: 0.75,
                      lineHeight: '21px',
                      transition: 'opacity 0.2s ease, color 0.2s ease',
                    }}
                    onMouseEnter={(e) => { e.target.style.opacity = '1'; e.target.style.color = 'var(--kawasaki-green)'; }}
                    onMouseLeave={(e) => { e.target.style.opacity = '0.75'; e.target.style.color = '#FFFFFF'; }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#A3A3A3' }}>
          © {new Date().getFullYear()} India Kawasaki Motors Pvt. Ltd. All rights reserved.
        </p>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {/* Facebook */}
          <a href="#" aria-label="Facebook" style={{ color: '#A3A3A3', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--kawasaki-green)'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#A3A3A3'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram" style={{ color: '#A3A3A3', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--kawasaki-green)'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#A3A3A3'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          {/* YouTube */}
          <a href="#" aria-label="YouTube" style={{ color: '#A3A3A3', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--kawasaki-green)'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#A3A3A3'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="#171717" />
            </svg>
          </a>
          {/* Twitter/X */}
          <a href="#" aria-label="Twitter" style={{ color: '#A3A3A3', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--kawasaki-green)'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#A3A3A3'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
