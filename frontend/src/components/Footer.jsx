import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Shared style for social links to ensure consistent sizing and hover effects
  const socialIconStyle = {
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.2s ease',
    cursor: 'pointer'
  };

  return (
    <footer style={{ backgroundColor: '#171717', color: '#FFFFFF', padding: '80px 6vw 40px', fontFamily: '"Arial", sans-serif', position: 'relative' }}>

      {/* Moved Title Outside the Grid for Perfect Horizontal Alignment */}
      <h3 style={{ fontFamily: '"Impact", "Arial Black", sans-serif', fontSize: '24px', textTransform: 'uppercase', marginBottom: '32px', fontWeight: 400 }}>
        THE KAWASAKI LINE UP
      </h3>

      {/* Changed auto-fit to exactly 6 equal columns so it NEVER wraps */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px', marginBottom: '60px' }}>

        {/* Column 1 */}
        <div>
          <h4 style={{ color: 'var(--kawasaki-green, #69BE28)', fontSize: '16px', fontWeight: 700, marginBottom: '16px', height: '18px' }}>Street / Track</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#D4D4D4' }}>
            <li style={{ color: '#FFFFFF', fontWeight: 700 }}>Ninja Series</li>
            <li>NINJA ZX-4R</li>
            <li>NINJA ZX-6R</li>
            <li>NINJA ZX-10R</li>
          </ul>
          <h4 style={{ color: 'var(--kawasaki-green, #69BE28)', fontSize: '16px', fontWeight: 700, marginBottom: '16px', marginTop: '32px', height: '18px' }}>Dual Purpose</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#D4D4D4' }}>
            <li style={{ color: '#FFFFFF', fontWeight: 700 }}>KLX Series</li>
            <li>KLX230</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 style={{ color: 'var(--kawasaki-green, #69BE28)', fontSize: '16px', fontWeight: 700, marginBottom: '16px', height: '18px' }}>Street</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#D4D4D4' }}>
            <li style={{ color: '#FFFFFF', fontWeight: 700 }}>Z Series</li>
            <li>Z H2</li>
            <li>Z H2 SE</li>
            <li>Z 650</li>
            <li>Z 650 RS</li>
            <li>Z900</li>
            <li>Z 900RS</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <div style={{ height: '34px' }} /> {/* Invisible Spacer to align with Col 2 */}
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#D4D4D4' }}>
            <li style={{ color: '#FFFFFF', fontWeight: 700 }}>Ninja Series</li>
            <li>NINJA 300</li>
            <li>NINJA 500</li>
            <li>NINJA 650</li>
            <li>NINJA H2 SX</li>
            <li>NINJA H2 SX SE</li>
            <li>NINJA 1100SX</li>
          </ul>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#D4D4D4' }}>
            <li style={{ color: '#FFFFFF', fontWeight: 700 }}>Eliminator Series</li>
            <li>ELIMINATOR</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <div style={{ height: '34px' }} /> {/* Invisible Spacer to align with Col 2 */}
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#D4D4D4' }}>
            <li style={{ color: '#FFFFFF', fontWeight: 700 }}>Versys Series</li>
            <li>VERSYS 650</li>
            <li>VERSYS 1100</li>
          </ul>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#D4D4D4' }}>
            <li style={{ color: '#FFFFFF', fontWeight: 700 }}>Vulcan Series</li>
            <li>VULCAN S</li>
          </ul>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#D4D4D4' }}>
            <li style={{ color: '#FFFFFF', fontWeight: 700 }}>W Series</li>
            <li>W175</li>
            <li>W175 STREET</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h4 style={{ color: 'var(--kawasaki-green, #69BE28)', fontSize: '16px', fontWeight: 700, marginBottom: '16px', height: '18px' }}>Off-Road</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#D4D4D4' }}>
            <li style={{ color: '#FFFFFF', fontWeight: 700 }}>KX Series</li>
            <li>KX65</li>
            <li>KX85</li>
            <li>KX112</li>
            <li>KX250</li>
            <li>KX450</li>
          </ul>
        </div>

        {/* Column 6 */}
        <div>
          <div style={{ height: '34px' }} /> {/* Invisible Spacer to align with Col 5 */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#D4D4D4' }}>
            <li style={{ color: '#FFFFFF', fontWeight: 700 }}>KLX Series</li>
            <li>KLX100RU</li>
            <li>KLX140F</li>
            <li>KLX230RS</li>
            <li>KLX300R</li>
            <li>KLX450R</li>
          </ul>
        </div>
      </div>

      {/* Changed auto-fit to fixed fractions (1fr 1fr 2fr) to force a single row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: '40px', borderTop: '1px solid #333', paddingTop: '40px', paddingBottom: '40px' }}>

        {/* Service & Warranty */}
        <div>
          <h3 style={{ fontFamily: '"Impact", "Arial Black", sans-serif', fontSize: '20px', textTransform: 'uppercase', marginBottom: '24px', fontWeight: 400 }}>SERVICE & WARRANTY</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#D4D4D4' }}>
            <li><Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>CONTACT US</Link></li>
            <li>LOCATE A DEALER</li>
            <li>USEFUL LINKS</li>
            <li>INTERNATIONAL SITES</li>
            <li><Link to="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>PRIVACY POLICY</Link></li>
            <li><Link to="/terms-and-conditions" style={{ color: 'inherit', textDecoration: 'none' }}>TERMS AND CONDITIONS</Link></li>
          </ul>
        </div>

        {/* About Kawasaki */}
        <div>
          <h3 style={{ fontFamily: '"Impact", "Arial Black", sans-serif', fontSize: '20px', textTransform: 'uppercase', marginBottom: '24px', fontWeight: 400 }}>ABOUT KAWASAKI</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#D4D4D4' }}>
            <li>COMPANY</li>
            <li>RIDEOLOGY</li>
            <li>HERITAGE</li>
            <li>PRESS</li>
            <li>HISTORY</li>
            <li>CORPORATE INFO</li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h3 style={{ fontFamily: '"Impact", "Arial Black", sans-serif', fontSize: '20px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 400 }}>STAY CONNECTED</h3>
          <p style={{ fontSize: '13px', color: '#D4D4D4', marginBottom: '24px', lineHeight: '1.6' }}>Get notified about our latest releases, new model launches,<br />NEWS and events directly from Kawasaki</p>
          <div style={{ display: 'flex', borderBottom: '1px solid #D4D4D4', paddingBottom: '8px', maxWidth: '400px' }}>
            <input type="email" placeholder="Phone Number / Email Address" style={{ background: 'transparent', border: 'none', color: '#FFF', outline: 'none', flex: 1, fontSize: '14px' }} />
            <button style={{ background: 'var(--kawasaki-green, #69BE28)', color: '#FFF', border: 'none', padding: '8px 16px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>SUBSCRIBE +</button>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #333', paddingTop: '24px', fontSize: '12px', color: '#888' }}>
        <p>© 2026 India Kawasaki Motors PVT., LTD.</p>

        {/* Social Media Icons */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {/* Facebook */}
          <a href="#" style={socialIconStyle} onMouseEnter={(e) => e.currentTarget.style.opacity = 0.7} onMouseLeave={(e) => e.currentTarget.style.opacity = 1}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>

          {/* X (Twitter) */}
          <a href="#" style={socialIconStyle} onMouseEnter={(e) => e.currentTarget.style.opacity = 0.7} onMouseLeave={(e) => e.currentTarget.style.opacity = 1}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" style={socialIconStyle} onMouseEnter={(e) => e.currentTarget.style.opacity = 0.7} onMouseLeave={(e) => e.currentTarget.style.opacity = 1}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" style={socialIconStyle} onMouseEnter={(e) => e.currentTarget.style.opacity = 0.7} onMouseLeave={(e) => e.currentTarget.style.opacity = 1}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* YouTube */}
          <a href="#" style={socialIconStyle} onMouseEnter={(e) => e.currentTarget.style.opacity = 0.7} onMouseLeave={(e) => e.currentTarget.style.opacity = 1}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Floating Action Buttons - Changed to position: fixed */}
      <div style={{ position: 'fixed', right: '30px', bottom: '40px', display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 1000 }}>
        <button onClick={scrollToTop} style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#FFF', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M1 8.5L8 1.5L15 8.5" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#25D366', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFF"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.29 5.29 0 0 0-.571-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413z" /></svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;