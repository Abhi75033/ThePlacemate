import React from 'react';
import { useNavigate } from 'react-router-dom';

// --- SVG Icons ---
const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);
const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
const DownloadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;


const PaymentSuccessPage = () => {
    const navigate = useNavigate()
    const handleDownloadReceipt = () => {
        const receiptElement = document.getElementById('receipt-content');
        const opt = {
            margin:       0.5,
            filename:     'Course_Enrollment_Receipt.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        // Use window.html2pdf to access the library from the global scope
        if (window.html2pdf) {
            window.html2pdf().from(receiptElement).set(opt).save();
        } else {
            console.error('html2pdf.js not loaded');
            alert('Could not download PDF. Please try again later.');
        }
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');
                
                .payment-success-page {
                    font-family: 'Lexend', sans-serif;
                    background-color: #F9FAFB;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                }

                .success-container {
                    background-color: #FFFFFF;
                    border: 1px solid #E5E7EB;
                    border-radius: 1.5rem;
                    padding: 3rem;
                    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05), 0 10px 10px -5px rgba(0,0,0,0.04);
                    text-align: center;
                    max-width: 600px;
                    width: 100%;
                }
                
                .success-icon {
                    margin-bottom: 1.5rem;
                }

                .success-title {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: #111827;
                    margin: 0 0 0.5rem 0;
                }
                
                .success-subtitle {
                    font-size: 1.1rem;
                    color: #4B5563;
                    margin-bottom: 2rem;
                    max-width: 450px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .enrolled-course-card {
                    display: flex;
                    gap: 1.5rem;
                    align-items: center;
                    text-align: left;
                    padding: 1.5rem;
                    background-color: #F9FAFB;
                    border: 1px solid #E5E7EB;
                    border-radius: 1rem;
                    margin-bottom: 2.5rem;
                }
                
                .enrolled-course-img {
                    width: 120px;
                    height: auto;
                    border-radius: 0.75rem;
                    object-fit: cover;
                }

                .enrolled-course-details h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #1F2937;
                    margin: 0 0 0.25rem 0;
                }
                
                .enrolled-course-details p {
                    font-size: 1rem;
                    color: #6B7280;
                    margin: 0;
                }
                
                .action-buttons {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    align-items: center;
                }
                
                .start-learning-btn {
                    width: 100%;
                    padding: 1rem;
                    font-size: 1.1rem;
                    font-weight: 600;
                    background-image: linear-gradient(to right, #4F46E5, #6D28D9);
                    color: #FFFFFF;
                    border: none;
                    border-radius: 0.75rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(79, 70, 229, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                }

                .start-learning-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
                }
                
                .download-receipt-btn {
                    font-size: 0.95rem;
                    font-weight: 500;
                    color: #4B5563;
                    background: none;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .download-receipt-btn:hover {
                    text-decoration: underline;
                }
                
                .email-note {
                    margin-top: 2rem;
                    font-size: 0.9rem;
                    color: #6B7280;
                }
            `}</style>
            
            <div className="payment-success-page">
                <div className="success-container">
                    <div className="success-icon">
                        <CheckCircleIcon />
                    </div>
                    
                    <h1 className="success-title">Enrollment Confirmed!</h1>
                    <p className="success-subtitle">
                        Welcome aboard! You now have full access to the course. We're thrilled to have you with us.
                    </p>

                    <div className="enrolled-course-card">
                        <img 
                            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=300" 
                            alt="Course Thumbnail" 
                            className="enrolled-course-img" 
                        />
                        <div className="enrolled-course-details">
                            <h3>The Complete Web Development Bootcamp</h3>
                            <p>by Alex Morgan</p>
                        </div>
                    </div>
                    
                    <div className="action-buttons">
                        <button onClick={()=>navigate('/student_dashboard')} className="start-learning-btn">
                            <span>Start Learning Now</span>
                            <ArrowRightIcon />
                        </button>
                        <button className="download-receipt-btn" onClick={handleDownloadReceipt}>
                            <DownloadIcon />
                            <span>Download Receipt</span>
                        </button>
                    </div>

                    <p className="email-note">
                        A confirmation email with your receipt has been sent to alex.morgan@example.com.
                    </p>
                </div>
            </div>
            
            {/* Hidden Receipt for PDF Generation */}
            <div id="receipt-content" style={{ position: 'absolute', left: '-9999px', fontFamily: 'sans-serif', width: '800px', padding: '2rem', color: '#333' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #eee', paddingBottom: '1rem' }}>
                    <h1 style={{ fontSize: '2rem', margin: 0, color: '#111827' }}>CourseEnrol Inc.</h1>
                    <h2 style={{ fontSize: '1.5rem', margin: 0, color: '#6B7280' }}>RECEIPT</h2>
                </div>
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <h3 style={{ margin: '0 0 0.5rem 0', color: '#1F2937' }}>Billed To:</h3>
                        <p style={{ margin: 0 }}>Alex Morgan</p>
                        <p style={{ margin: '0.25rem 0 0 0' }}>alex.morgan@example.com</p>
                    </div>
                    <div>
                        <p style={{ margin: 0 }}><strong>Receipt #:</strong> 123-45678</p>
                        <p style={{ margin: '0.25rem 0 0 0' }}><strong>Date:</strong> Sep 27, 2025</p>
                    </div>
                </div>
                <table style={{ width: '100%', marginTop: '3rem', borderCollapse: 'collapse' }}>
                    <thead style={{ backgroundColor: '#F9FAFB' }}>
                        <tr>
                            <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #eee' }}>Description</th>
                            <th style={{ padding: '0.75rem', textAlign: 'right', borderBottom: '1px solid #eee' }}>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>The Complete Web Development Bootcamp</td>
                            <td style={{ padding: '0.75rem', textAlign: 'right', borderBottom: '1px solid #eee' }}>$199.99</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Discount (FIRST50)</td>
                            <td style={{ padding: '0.75rem', textAlign: 'right', borderBottom: '1px solid #eee' }}>-$100.00</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td style={{ padding: '1rem 0.75rem 0.75rem 0.75rem', textAlign: 'right', fontWeight: 'bold' }}>Total Paid:</td>
                            <td style={{ padding: '1rem 0.75rem 0.75rem 0.75rem', textAlign: 'right', fontWeight: 'bold', fontSize: '1.2rem' }}>$99.99</td>
                        </tr>
                    </tfoot>
                </table>
                <div style={{ marginTop: '3rem', textAlign: 'center', color: '#6B7280', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                    <p>Thank you for your purchase! If you have any questions, please contact support@courseenrol.com.</p>
                </div>
            </div>
        </>
    );
};

export default PaymentSuccessPage;

