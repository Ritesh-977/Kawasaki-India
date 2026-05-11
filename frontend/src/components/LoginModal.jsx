import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoginModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        zIndex: 10000, // Sits above everything
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                    }}
                    onClick={onClose} // Close when clicking outside
                >
                    {/* Modal Box */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the box
                        style={{
                            backgroundColor: '#FFFFFF',
                            width: '100%',
                            maxWidth: '520px',
                            padding: '40px',
                            position: 'relative',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                            borderRadius: '2px',
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: '24px',
                                right: '24px',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '4px',
                            }}
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 1L1 15M1 1L15 15" stroke="#737373" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>

                        {/* Title */}
                        <h2 style={{
                            fontFamily: '"Impact", "Arial Black", sans-serif',
                            fontSize: '24px',
                            fontWeight: 400,
                            color: '#000000',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            margin: '0 0 32px 0',
                        }}>
                            Login with Mobile
                        </h2>

                        {/* Form */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{
                                fontFamily: 'var(--font-heading), sans-serif',
                                fontSize: '14px',
                                fontWeight: 700,
                                color: '#171717',
                            }}>
                                Mobile
                            </label>

                            {/* Input Group */}
                            <div style={{ display: 'flex', height: '48px' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    border: '1px solid #D4D4D4',
                                    borderRight: 'none', // seamlessly connects to the button
                                    padding: '0 16px',
                                    flex: 1,
                                    backgroundColor: '#FFFFFF',
                                }}>
                                    <span style={{ fontSize: '18px' }}>🇮🇳</span>
                                    <span style={{ marginLeft: '8px', color: '#737373', fontFamily: 'var(--font-body), sans-serif', fontSize: '15px' }}>
                                        +91
                                    </span>
                                    <input
                                        type="tel"
                                        placeholder="998989898988"
                                        style={{
                                            border: 'none',
                                            outline: 'none',
                                            marginLeft: '12px',
                                            width: '100%',
                                            fontSize: '15px',
                                            fontFamily: 'var(--font-body), sans-serif',
                                            color: '#171717',
                                        }}
                                    />
                                </div>

                                <button style={{
                                    backgroundColor: 'var(--kawasaki-green, #69BE28)',
                                    color: '#FFFFFF',
                                    border: 'none',
                                    padding: '0 24px',
                                    fontFamily: 'var(--font-heading), sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s ease',
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5ca823'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--kawasaki-green, #69BE28)'}
                                >
                                    GET OTP
                                </button>
                            </div>
                        </div>

                        {/* Footer Disclaimer */}
                        <div style={{ marginTop: '32px' }}>
                            <p style={{
                                margin: 0,
                                fontFamily: 'var(--font-body), sans-serif',
                                fontSize: '13px',
                                color: '#171717',
                            }}>
                                By Agreeing to sign in you agree to Kawasaki's <a href="#" style={{ color: '#171717', textDecoration: 'underline', fontStyle: 'italic' }}>Privacy Policy</a>
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoginModal;