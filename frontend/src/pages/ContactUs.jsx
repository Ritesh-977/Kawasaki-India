import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Ensure page starts at the top
    }, []);

    return (
        <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar transparent={false} />

            {/* Main Layout Container */}
            <div style={{ flex: 1, display: 'flex', maxWidth: '1400px', margin: '0 auto', width: '100%', padding: '140px 6vw 80px', gap: '60px' }}>

                {/* Left Sidebar - Socials */}
                <aside style={{ width: '200px', flexShrink: 0, borderRight: '1px solid #E5E5E5' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {['Facebook', 'X (Twitter)', 'Instagram', 'LinkedIn', 'Youtube'].map((network) => (
                            <li key={network} style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', fontFamily: '"Arial", sans-serif', fontSize: '15px', color: '#171717', fontWeight: 500 }}>
                                {/* Generic placeholder icon matching the vibe */}
                                <div style={{ width: '24px', height: '24px', backgroundColor: '#E5E5E5', borderRadius: network === 'Facebook' || network === 'Instagram' ? '50%' : '4px' }} />
                                {network}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Right Main Content */}
                <main style={{ flex: 1 }}>
                    <h1 style={{ fontFamily: '"Impact", "Arial Black", sans-serif', fontSize: '40px', color: '#000', margin: '0 0 40px 0', letterSpacing: '1px' }}>
                        CONTACT US
                    </h1>

                    {/* Info Cards Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px' }}>
                        {/* Location Card */}
                        <div style={{ backgroundColor: '#FFF', padding: '32px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', borderRadius: '2px' }}>
                            <h3 style={{ fontFamily: '"Arial", sans-serif', fontSize: '18px', fontWeight: 700, margin: '0 0 16px 0', color: '#333' }}>Location</h3>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <span style={{ color: 'var(--kawasaki-green, #69BE28)', marginTop: '2px' }}>📍</span>
                                <p style={{ margin: 0, fontFamily: '"Arial", sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#555' }}>
                                    <strong>Kawasaki Mumbai</strong><br />
                                    Unit No.4&5, Ground Floor, Hubtown Viva,<br />
                                    Western Express Highway, Jogeshwari(E) - 400060
                                </p>
                            </div>
                        </div>

                        {/* Contact Info Card */}
                        <div style={{ backgroundColor: '#FFF', padding: '32px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', borderRadius: '2px' }}>
                            <h3 style={{ fontFamily: '"Arial", sans-serif', fontSize: '18px', fontWeight: 700, margin: '0 0 16px 0', color: '#333' }}>Contact Information</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--kawasaki-green, #69BE28)' }}>📞</span>
                                    <p style={{ margin: 0, fontFamily: '"Arial", sans-serif', fontSize: '14px', color: '#555' }}>+98 3299846847 <strong>(Sales)</strong></p>
                                </div>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--kawasaki-green, #69BE28)' }}>✉️</span>
                                    <p style={{ margin: 0, fontFamily: '"Arial", sans-serif', fontSize: '14px', color: '#555' }}>anzen.kawasaki@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div style={{ backgroundColor: '#FFF', padding: '40px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', borderRadius: '2px' }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontFamily: '"Arial", sans-serif', fontSize: '14px', fontWeight: 700, color: '#333' }}>Your Email Address <span style={{ color: '#E53935' }}>*</span></label>
                                <input type="email" placeholder="@gmail" style={{ padding: '12px 16px', border: '1px solid #D4D4D4', borderRadius: '2px', outline: 'none', fontSize: '15px', fontFamily: '"Arial", sans-serif' }} />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontFamily: '"Arial", sans-serif', fontSize: '14px', fontWeight: 700, color: '#333' }}>Subject <span style={{ color: '#E53935' }}>*</span></label>
                                <input type="text" placeholder="Inquire about KLX 310" style={{ padding: '12px 16px', border: '1px solid #D4D4D4', borderRadius: '2px', outline: 'none', fontSize: '15px', fontFamily: '"Arial", sans-serif' }} />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontFamily: '"Arial", sans-serif', fontSize: '14px', fontWeight: 700, color: '#333' }}>Message <span style={{ color: '#E53935' }}>*</span></label>
                                <textarea rows="8" placeholder="Message Here" style={{ padding: '12px 16px', border: '1px solid #D4D4D4', borderRadius: '2px', outline: 'none', fontSize: '15px', fontFamily: '"Arial", sans-serif', resize: 'vertical' }} />
                            </div>

                            <div>
                                <button type="button" style={{ backgroundColor: 'var(--kawasaki-green, #69BE28)', color: '#FFF', border: 'none', padding: '12px 32px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', borderRadius: '2px' }}>
                                    SENT
                                </button>
                            </div>

                        </form>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default ContactUs;