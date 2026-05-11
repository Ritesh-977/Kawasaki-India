import React, { useState, useRef, useEffect } from 'react';

/**
 * BookingForm – Pre-booking form section.
 * Matches the Figma booking section with:
 *  - Dealer locator dropdown
 *  - Form fields: name, phone, email, state/city, preferred dealer
 *  - Green CTA button
 */

const STATES = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad'];

const BookingForm = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: '',
    dealer: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    height: '48px',
    padding: '0 16px',
    border: '1px solid #D4D4D4',
    backgroundColor: '#FFFFFF',
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
    color: '#171717',
    outline: 'none',
    borderRadius: '1px',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: 700,
    color: '#A3A3A3',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  return (
    <section
      ref={sectionRef}
      id="booking-form"
      style={{
        backgroundColor: '#FAFAFA',
        padding: '120px 100px',
        width: '100%',
        borderTop: '1px solid #E5E5E5',
      }}
    >
      {/* Header */}
      <div style={{
        borderBottom: '1px solid #D4D4D4',
        paddingBottom: '16px',
        marginBottom: '60px',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '46px',
          fontWeight: 600,
          color: '#171717',
          lineHeight: '69px',
          textTransform: 'none',
        }}>
          Pre-Book Your KLX110R
        </h2>
      </div>

      {submitted ? (
        <div style={{
          textAlign: 'center',
          padding: '80px 40px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          borderRadius: '4px',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', color: 'var(--kawasaki-green)', marginBottom: '12px' }}>
            Thank You!
          </h3>
          <p style={{ fontSize: '18px', color: '#737373', maxWidth: '400px', margin: '0 auto' }}>
            Your pre-booking request has been received. Our team will contact you shortly.
          </p>
        </div>
      ) : (
        <div style={{
          display: 'flex',
          gap: '60px',
          alignItems: 'flex-start',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          {/* Left – info */}
          <div style={{ flex: '0 0 400px' }}>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '28px',
              fontWeight: 600,
              color: '#171717',
              lineHeight: '42px',
              marginBottom: '16px',
              textTransform: 'none',
            }}>
              Find your nearest dealership and secure your KLX110R today!
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: '#737373',
              lineHeight: '26px',
              marginBottom: '32px',
            }}>
              Your booking is not complete until confirmed by a dealer representative.
              All bookings are subject to availability.
            </p>

            {/* Quick Dealer Lookup */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Select State/City</label>
              <select
                id="dealer-state-select"
                style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
              >
                <option value="">Select a location</option>
                {STATES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <button id="find-dealer-btn" className="btn" style={{ width: '100%' }}>
              Find Dealer
            </button>
          </div>

          {/* Right – Form */}
          <div style={{ flex: 1 }}>
            <form id="prebook-form" onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div>
                  <label htmlFor="name" style={labelStyle}>Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--kawasaki-green)'}
                    onBlur={(e) => e.target.style.borderColor = '#D4D4D4'}
                  />
                </div>
                <div>
                  <label htmlFor="phone" style={labelStyle}>Phone Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--kawasaki-green)'}
                    onBlur={(e) => e.target.style.borderColor = '#D4D4D4'}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label htmlFor="email" style={labelStyle}>Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = 'var(--kawasaki-green)'}
                  onBlur={(e) => e.target.style.borderColor = '#D4D4D4'}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
                <div>
                  <label htmlFor="state" style={labelStyle}>State / City *</label>
                  <select
                    id="state"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--kawasaki-green)'}
                    onBlur={(e) => e.target.style.borderColor = '#D4D4D4'}
                  >
                    <option value="">Select location</option>
                    {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="dealer" style={labelStyle}>Preferred Dealer</label>
                  <select
                    id="dealer"
                    name="dealer"
                    value={formData.dealer}
                    onChange={handleChange}
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--kawasaki-green)'}
                    onBlur={(e) => e.target.style.borderColor = '#D4D4D4'}
                  >
                    <option value="">Select dealer</option>
                    <option>Kawasaki Delhi Central</option>
                    <option>Kawasaki Mumbai West</option>
                  </select>
                </div>
              </div>

              <button id="submit-booking-btn" type="submit" className="btn btn-lg" style={{ width: '100%' }}>
                Submit Pre-Booking Request
              </button>

              <p style={{ marginTop: '16px', fontSize: '12px', color: '#A3A3A3', lineHeight: '18px' }}>
                * Your booking is not complete even after form submission. A dealer will confirm availability.
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookingForm;
