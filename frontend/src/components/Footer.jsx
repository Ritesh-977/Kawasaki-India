import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <div style={{ display: 'flex', gap: '16px' }}>
          {/* Simple SVG placeholders for social icons */}
          <div style={{ width: '20px', height: '20px', backgroundColor: '#FFF', borderRadius: '50%' }} />
          <div style={{ width: '20px', height: '20px', backgroundColor: '#FFF' }} />
          <div style={{ width: '20px', height: '20px', backgroundColor: '#FFF', borderRadius: '4px' }} />
          <div style={{ width: '20px', height: '20px', backgroundColor: '#FFF', borderRadius: '4px' }} />
          <div style={{ width: '20px', height: '20px', backgroundColor: '#FFF', borderRadius: '2px' }} />
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div style={{ position: 'absolute', right: '30px', bottom: '40px', display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 100 }}>
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