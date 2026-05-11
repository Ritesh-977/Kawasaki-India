import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar transparent={false} />

            <div style={{ flex: 1, display: 'flex', maxWidth: '1400px', margin: '0 auto', width: '100%', padding: '140px 6vw 80px', gap: '60px' }}>

                {/* Left Sticky Sidebar */}
                <aside style={{ width: '250px', flexShrink: 0 }}>
                    <div style={{ position: 'sticky', top: '120px' }}>
                        <h2 style={{ fontFamily: '"Impact", "Arial Black", sans-serif', fontSize: '24px', margin: '0 0 24px 0', letterSpacing: '0.5px' }}>Privacy Policy</h2>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <li style={{ fontSize: '13px', color: '#171717', fontWeight: 700, cursor: 'pointer' }}>Introduction</li>
                            <li style={{ fontSize: '13px', color: '#737373', textDecoration: 'underline', cursor: 'pointer' }}>Compliance with relevant laws and regulations, guidelines, etc.</li>
                            <li style={{ fontSize: '13px', color: '#737373', textDecoration: 'underline', cursor: 'pointer' }}>Control of Personal Information, Etc.</li>
                            <li style={{ fontSize: '13px', color: '#737373', textDecoration: 'underline', cursor: 'pointer' }}>Matters specific to each of the handling of Personal Information and that of Anonymously Processed Information</li>
                            <li style={{ fontSize: '13px', color: '#737373', textDecoration: 'underline', cursor: 'pointer' }}>Regarding this Policy</li>
                            <li style={{ fontSize: '13px', color: '#737373', textDecoration: 'underline', cursor: 'pointer' }}>Key Definitions</li>
                        </ul>
                    </div>
                </aside>

                {/* Right Main Content */}
                <main style={{ flex: 1, fontFamily: '"Arial", sans-serif', color: '#333', lineHeight: '1.7', fontSize: '14px' }}>
                    <p style={{ marginBottom: '32px' }}>
                        Kawasaki Motors, Ltd. (hereinafter referred to as "The Company") handles Personal Information and Anonymously Processed Information (collectively called "Personal Information, Etc." in this Policy) appropriately based on the recognition of the significance of protection of Personal Information, Etc. in accordance with the following policy:
                    </p>

                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#171717', marginBottom: '16px' }}>1. Compliance with relevant laws and regulations, guidelines, etc.</h3>
                    <p style={{ marginBottom: '32px' }}>
                        The Company will comply with the Act on the Protection of Personal Information of Japan as well as the relevant laws and regulations, rules, and guidelines, etc. concerning the handling of Personal Information, Etc.
                    </p>

                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#171717', marginBottom: '16px' }}>2. Control of Personal Information, Etc.</h3>
                    <p style={{ marginBottom: '32px' }}>
                        The Company controls Personal Information, Etc. appointing a chief privacy officer who is responsible for the handling of Personal Information, Etc. at The Company in accordance with the internal regulations concerning the handling of Personal Information, Etc. In addition, it has taken actions in information systems to prevent any leakage, loss, or damage, etc. to Personal Information, Etc., while continuously maintaining and improving those security control actions.
                    </p>

                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#171717', marginBottom: '16px' }}>3. Matters specific to each of the handling of Personal Information and that of Anonymously Processed Information</h3>
                    <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '12px' }}>(1) Handling of Personal Information</h4>
                    <ol style={{ paddingLeft: '20px', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <li>Name of the Personal Information Handling Business Operator: Kawasaki Motors, Ltd.</li>
                        <li>Utilization purpose of Personal Information: The Company may use Personal Information obtained by a proper means in accordance with relevant laws and regulations...
                            <ul style={{ listStyleType: 'lower-alpha', paddingLeft: '20px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <li>Proposal, communication, meeting, execution, performance, and cancellation of agreement...</li>
                                <li>Inquiry, communication, meeting, execution, performance, and cancellation of agreement...</li>
                                <li>Communication, distribution, notification, information on product or service, lot drawing, delivery...</li>
                            </ul>
                        </li>
                    </ol>

                    <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '12px' }}>(2) Handling of Anonymously Processed Information</h4>
                    <p style={{ marginBottom: '32px' }}>
                        When producing or providing to a third party any Anonymously Processed Information, The Company will disclose items and matters required in the Act on the Protection of Personal Information of Japan.
                    </p>

                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#171717', marginBottom: '16px' }}>4. Regarding this Policy</h3>
                    <p style={{ marginBottom: '16px' }}>
                        This Policy is an English translation of the main part of the Japanese policy on the handling of Personal Information, Etc. of Kawasaki Motors, Ltd. Where there is a difference between the two versions, the Japanese policy will govern.
                    </p>
                    <p style={{ color: '#E53935', fontStyle: 'italic', marginBottom: '32px' }}>
                        This Policy may change without notice. In such a case, it will be released on this website without delay.
                    </p>

                </main>
            </div>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;