import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
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
                        <h2 style={{ fontFamily: '"Impact", "Arial Black", sans-serif', fontSize: '24px', margin: '0 0 24px 0', letterSpacing: '0.5px' }}>Terms and Conditions</h2>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <li style={{ fontSize: '13px', color: '#737373', textDecoration: 'underline', cursor: 'pointer' }}>Introduction</li>
                            <li style={{ fontSize: '13px', color: '#737373', textDecoration: 'underline', cursor: 'pointer' }}>Agreement</li>
                            <li style={{ fontSize: '13px', color: '#737373', textDecoration: 'underline', cursor: 'pointer' }}>Privacy</li>
                            <li style={{ fontSize: '13px', color: '#737373', textDecoration: 'underline', cursor: 'pointer' }}>Forward Looking Statements</li>
                            <li style={{ fontSize: '13px', color: '#737373', textDecoration: 'underline', cursor: 'pointer' }}>Disclaimer of warranties and limitation of liability</li>
                            <li style={{ fontSize: '13px', color: '#737373', textDecoration: 'underline', cursor: 'pointer' }}>Exclusions and Limitations</li>
                            <li style={{ fontSize: '13px', color: '#737373', textDecoration: 'underline', cursor: 'pointer' }}>Our proprietary rights</li>
                            <li style={{ fontSize: '13px', color: '#737373', textDecoration: 'underline', cursor: 'pointer' }}>Indemnity</li>
                        </ul>
                    </div>
                </aside>

                {/* Right Main Content */}
                <main style={{ flex: 1, fontFamily: '"Arial", sans-serif', color: '#333', lineHeight: '1.7', fontSize: '14px' }}>
                    <p style={{ marginBottom: '32px' }}>
                        Kawasaki Motors, Ltd. (hereinafter referred to as "The Company") handles Personal Information and Anonymously Processed Information appropriately based on the recognition of the significance of protection of Personal Information...
                    </p>

                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#171717', marginBottom: '16px' }}>1. Agreement</h3>
                    <p style={{ marginBottom: '32px' }}>
                        By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.<br /><br />
                        PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately.
                    </p>

                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#171717', marginBottom: '16px' }}>2. Privacy</h3>
                    <p style={{ marginBottom: '32px' }}>
                        Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.
                    </p>

                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#171717', marginBottom: '16px' }}>3. Linked Sites</h3>
                    <p style={{ marginBottom: '32px' }}>
                        This Site may contain links to other independent third-party Web sites ("Linked Sites"). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and do not endorse the content of such Linked Sites.
                    </p>

                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#171717', marginBottom: '16px' }}>4. Forward Looking Statements</h3>
                    <p style={{ marginBottom: '32px' }}>
                        All materials reproduced on this site speak as of the original date of publication or filing. The fact that a document is available on this site does not mean that the information contained in such document has not been modified or superseded by events.
                    </p>

                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#171717', marginBottom: '16px' }}>5. Disclaimer of warranties and limitation of liability</h3>
                    <p style={{ marginBottom: '32px' }}>
                        A. This site may contain inaccuracies and typographical errors. We do not warrant the accuracy or completeness of the materials or the reliability of any advice, opinion, statement or other information displayed or distributed through the site.<br /><br />
                        B. You understand and agree that under no circumstances, including, but not limited to, negligence, shall we be liable for any direct, indirect, incidental, special, punitive or consequential damages.
                    </p>

                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#171717', marginBottom: '16px' }}>6. Exclusions and Limitations</h3>
                    <p style={{ marginBottom: '32px' }}>
                        Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, our liability in such jurisdiction shall be limited to the maximum extent permitted by law.
                    </p>

                </main>
            </div>

            <Footer />
        </div>
    );
};

export default TermsAndConditions;