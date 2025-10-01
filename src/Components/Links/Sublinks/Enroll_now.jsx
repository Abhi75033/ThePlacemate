import React, { useState } from 'react';

// --- SVG Icons ---
const LockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
const CreditCardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>;
const PayPalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8.336 2.44a1 1 0 0 0-.97.74l-2.8 14.066a1 1 0 0 0 .97.74h4.482c.48 0 .891-.35.97-.74l.54-3.235c.08-.433.48-.74.97-.74h2.24c4.331 0 7.4-2.186 7.4-6.425C22 3.63 17.653 2.44 12.805 2.44H8.336zm4.188 3.51h1.535c2.251 0 3.731.9 3.731 3.236 0 2.24-.9 3.42-3.235 3.42h-.97l-1.06-6.656z"></path></svg>;
const UpiIcon = () => (
    <svg width="48" height="16" viewBox="0 0 125 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.7343 14.8226L0.53125 0.546875H10.455L14.0535 7.64837L17.7003 0.546875H27.5753L20.3722 14.8226C18.9649 17.5181 16.5938 19.3338 13.8893 19.3338C11.1848 19.3338 8.86194 17.5181 7.7343 14.8226Z" fill="#F47B20"/>
        <path d="M51.1963 0.546875L43.2083 19.141H53.036L51.8601 16.2084H59.5074L58.3315 13.324H50.6359L55.4468 1.95405L54.1205 0.546875H51.1963Z" fill="#0071BC"/>
        <path d="M68.7363 11.8594L65.0413 3.67056H64.7513L60.2713 13.3722L63.5893 19.141H74.3413L68.7363 11.8594Z" fill="#F47B20"/>
        <path d="M41.0592 19.141H31.1342V0.546875H41.0592V5.11894H35.4842V8.15506H40.5282V12.2942H35.4842V14.569H41.0592V19.141Z" fill="#0071BC"/>
        <path d="M101.444 4.09825V0.546875H80.0156V5.11894H85.5906V19.141H90.1156V5.11894H97.7147C100.086 5.11894 101.444 4.87754 101.444 4.09825Z" fill="#F47B20"/>
        <path d="M124.211 4.38825C124.211 1.8335 122.28 0.546875 118.411 0.546875H105.74V19.141H110.265V12.1533H115.124L118.867 19.141H124.793L120.268 11.2335C122.822 10.0275 124.211 7.76075 124.211 4.38825ZM110.265 8.44506V4.70625H117.468C119.284 4.70625 119.815 5.58188 119.815 6.50563C119.815 7.86225 118.994 8.44506 117.227 8.44506H110.265Z" fill="#0071BC"/>
    </svg>
);
const UserCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.52 19c.64-2.2 1.84-4 3.22-5.26C10.6 12.23 12.7 12 15 12h0c2.3 0 4.4.23 6.26 1.74 1.38 1.26 2.58 3.06 3.22 5.26"/><circle cx="12" cy="7" r="4"/></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>;
const InfoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;
const ChevronDownIcon = ({ className }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;


const CheckoutPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [openFaq, setOpenFaq] = useState(0);
    const [selectedCoupon, setSelectedCoupon] = useState('');
    const [showManualInput, setShowManualInput] = useState(false);
    const [manualCouponCode, setManualCouponCode] = useState('');
    
    const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);
    
    const faqData = [
        { q: "What is your refund policy?", a: "We offer a 30-day, no-questions-asked money-back guarantee. If you are not satisfied with the course, you can request a full refund within 30 days of your purchase." },
        { q: "When will I get access to the course?", a: "You will get immediate access to all course materials, including videos and resources, as soon as your payment is successfully processed." },
        { q: "Is my payment information secure?", a: "Absolutely. All payments are processed through a secure SSL-encrypted connection to ensure your personal and financial information is kept safe." },
    ];
    
    const coupons = [
        { code: 'FIRST50', discount: 50, type: 'percent' },
        { code: 'DIWALI20', discount: 20, type: 'percent' },
        { code: 'LEARN100', discount: 100, type: 'fixed' },
    ];
    
    const originalPrice = 199.99;
    let discountAmount = 0;
    
    const appliedCoupon = coupons.find(c => c.code === selectedCoupon);
    if (appliedCoupon) {
        if (appliedCoupon.type === 'percent') {
            discountAmount = (originalPrice * appliedCoupon.discount) / 100;
        } else {
            discountAmount = appliedCoupon.discount;
        }
    }
    
    const total = originalPrice - discountAmount;

    const handleCouponChange = (e) => {
        const value = e.target.value;
        if (value === 'OTHER') {
            setShowManualInput(true);
            setSelectedCoupon('');
        } else {
            setShowManualInput(false);
            setSelectedCoupon(value);
        }
    };

    const handleApplyManualCoupon = () => {
        const validCoupon = coupons.find(c => c.code.toLowerCase() === manualCouponCode.toLowerCase().trim());
        if (validCoupon) {
            setSelectedCoupon(validCoupon.code);
            setShowManualInput(false);
            setManualCouponCode('');
        } else {
            alert('Invalid coupon code.');
        }
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');
                
                .checkout-page {
                    font-family: 'Lexend', sans-serif;
                    background-color: #F9FAFB;
                    background-image: radial-gradient(#E5E7EB 1px, transparent 1px);
                    background-size: 20px 20px;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                }

                .checkout-header {
                    width: 100%;
                    max-width: 1100px;
                    margin-bottom: 2rem;
                }
                
                .checkout-header h1 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #111827;
                }
                
                .checkout-container {
                    width: 100%;
                    max-width: 1100px;
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 3rem;
                    align-items: flex-start;
                }

                /* --- Left Side: Payment Details --- */
                .payment-details {
                    background-color: #FFFFFF;
                    border: 1px solid #E5E7EB;
                    border-radius: 1rem;
                    padding: 2.5rem;
                    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.05);
                }

                .form-section-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #1F2937;
                    margin: 1.5rem 0 1rem 0;
                }
                .form-section-title:first-child {
                    margin-top: 0;
                }

                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                }

                .full-width {
                    grid-column: 1 / -1;
                }
                
                .form-label {
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: #4B5563;
                    margin-bottom: 0.5rem;
                }
                
                .input-wrapper {
                    position: relative;
                }

                .input-icon {
                    position: absolute;
                    top: 50%;
                    left: 1rem;
                    transform: translateY(-50%);
                    color: #9CA3AF;
                }

                .form-input {
                    width: 100%;
                    padding: 0.8rem 1rem 0.8rem 3rem;
                    border: 1px solid #D1D5DB;
                    border-radius: 0.5rem;
                    font-size: 1rem;
                    font-family: 'Lexend', sans-serif;
                    transition: all 0.2s ease;
                }

                .form-input:focus {
                    outline: none;
                    border-color: #4F46E5;
                    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
                }
                
                .payment-method-options {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .payment-method-option {
                    display: flex;
                    align-items: center;
                    padding: 1rem;
                    border: 2px solid #D1D5DB;
                    border-radius: 0.75rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                
                .payment-method-option:hover {
                    border-color: #A5B4FC;
                }

                .payment-method-option.selected {
                    border-color: #4F46E5;
                    background-color: #EEF2FF;
                    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
                }
                .payment-method-option input { margin-right: 1rem; }
                .payment-method-icon { margin-right: 1rem; color: #4B5563; display: flex; align-items: center; }
                .payment-method-option.selected .payment-method-icon { color: #4F46E5; }
                
                .verify-upi-btn {
                    margin-top: 1rem;
                    width: 100%;
                    padding: 0.8rem;
                    background-color: #1F2937;
                    color: white;
                    border: none;
                    border-radius: 0.5rem;
                    font-weight: 500;
                    cursor: pointer;
                }

                /* --- Right Side: Order Summary --- */
                .order-summary {
                    position: sticky;
                    top: 6rem; /* Adjusted for header */
                    background-color: #FFFFFF;
                    border: 1px solid #E5E7EB;
                    border-radius: 1rem;
                    padding: 2rem;
                    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.05);
                }
                
                .order-summary-title { font-size: 1.5rem; font-weight: 600; color: #111827; margin: 0 0 1.5rem 0; }
                .order-item { display: flex; gap: 1rem; align-items: flex-start; }
                .order-item-img { width: 100px; height: auto; border-radius: 0.5rem; }
                .order-item-details h4 { font-size: 1.1rem; font-weight: 500; color: #1F2937; margin: 0 0 0.5rem 0; }
                .order-item-price { font-size: 1rem; font-weight: 500; color: #4B5563; }
                
                .promo-code-container {
                    margin-top: 1.5rem;
                }
                .promo-select { 
                    width: 100%;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
                    background-repeat: no-repeat;
                    background-position: right 0.7rem center;
                    background-size: 0.65em auto;
                    border: 1px solid #D1D5DB; 
                    border-radius: 0.5rem; 
                    padding: 0.6rem 2.5rem 0.6rem 1rem;
                    font-size: 1rem;
                    cursor: pointer;
                }
                .manual-promo-container {
                    margin-top: 0.75rem;
                    display: flex;
                    gap: 0.5rem;
                }
                .promo-input { flex-grow: 1; border: 1px solid #D1D5DB; border-radius: 0.5rem; padding: 0.6rem 1rem; }
                .promo-btn { background-color: #E5E7EB; border: 1px solid #D1D5DB; color: #374151; padding: 0 1rem; border-radius: 0.5rem; cursor: pointer; }

                .price-details { margin: 1.5rem 0; display: flex; flex-direction: column; gap: 0.75rem; border-top: 1px dashed #D1D5DB; padding-top: 1.5rem; }
                .price-row { display: flex; justify-content: space-between; font-size: 1rem; color: #4B5563; }
                .price-total { font-weight: 700; color: #111827; font-size: 1.2rem; margin-top: 0.5rem; padding-top: 1rem; border-top: 1px solid #E5E7EB; }

                .complete-payment-btn {
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
                }

                .complete-payment-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
                }
                
                .secure-transaction-note { display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-top: 1.5rem; font-size: 0.9rem; color: #6B7280; }

                /* --- FAQ Section --- */
                .faq-section {
                    width: 100%;
                    max-width: 1100px;
                    margin-top: 3rem;
                    padding: 2.5rem;
                    background-color: #FFFFFF;
                    border: 1px solid #E5E7EB;
                    border-radius: 1rem;
                    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.05);
                }
                .faq-title { font-size: 1.5rem; font-weight: 700; color: #111827; margin: 0 0 2rem 0; }
                .faq-accordion { display: flex; flex-direction: column; gap: 1rem; }
                .faq-item { border-bottom: 1px solid #E5E7EB; padding-bottom: 1rem; }
                .faq-item:last-child { border-bottom: none; padding-bottom: 0; }
                .faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: none; border: none; text-align: left; padding: 0.5rem 0; }
                .faq-question h3 { font-size: 1.1rem; font-weight: 600; color: #1F2937; margin: 0; }
                .faq-toggle-icon { transition: transform 0.3s ease; color: #6B7280; }
                .faq-toggle-icon.open { transform: rotate(180deg); }
                .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out; }
                .faq-answer.open { max-height: 200px; }
                .faq-answer p { margin: 1rem 0 0 0; color: #4B5563; line-height: 1.7; }


                /* Responsive */
                @media (max-width: 992px) {
                    .checkout-container { grid-template-columns: 1fr; }
                    .order-summary { position: static; }
                }
                @media (max-width: 640px) {
                    .form-grid { grid-template-columns: 1fr; }
                    .payment-details, .order-summary, .faq-section { padding: 1.5rem; }
                }
            `}</style>

            <div className="checkout-page">
                <header className="checkout-header"><h1>Course Enrollment</h1></header>
                <div className="checkout-container">
                    <div className="payment-details">
                        <h2 className="form-section-title">Billing Information</h2>
                        <div className="form-grid">
                            <div className="form-group full-width">
                                <label className="form-label" htmlFor="name">Full Name</label>
                                <div className="input-wrapper">
                                    <span className="input-icon"><UserCircleIcon /></span>
                                    <input className="form-input" id="name" type="text" placeholder="Alex Morgan" />
                                </div>
                            </div>
                            <div className="form-group full-width">
                                <label className="form-label" htmlFor="email">Email Address</label>
                                <div className="input-wrapper">
                                    <span className="input-icon"><MailIcon /></span>
                                    <input className="form-input" id="email" type="email" placeholder="alex.morgan@example.com" />
                                </div>
                            </div>
                        </div>

                        <h2 className="form-section-title">Payment Method</h2>
                        <div className="payment-method-options">
                            <div className={`payment-method-option ${paymentMethod === 'card' ? 'selected' : ''}`} onClick={() => setPaymentMethod('card')}>
                                <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} readOnly />
                                <span className="payment-method-icon"><CreditCardIcon /></span>
                                <label>Credit / Debit Card</label>
                            </div>
                            <div className={`payment-method-option ${paymentMethod === 'paypal' ? 'selected' : ''}`} onClick={() => setPaymentMethod('paypal')}>
                                <input type="radio" name="payment" value="paypal" checked={paymentMethod === 'paypal'} readOnly />
                                <span className="payment-method-icon"><PayPalIcon /></span>
                                <label>PayPal</label>
                            </div>
                             <div className={`payment-method-option ${paymentMethod === 'upi' ? 'selected' : ''}`} onClick={() => setPaymentMethod('upi')}>
                                <input type="radio" name="payment" value="upi" checked={paymentMethod === 'upi'} readOnly />
                                <span className="payment-method-icon"><UpiIcon /></span>
                                <label>UPI</label>
                            </div>
                        </div>

                        {paymentMethod === 'card' && (
                            <div className="form-grid" style={{marginTop: '1.5rem'}}>
                                <div className="form-group full-width">
                                    <label className="form-label" htmlFor="cardNumber">Card Number</label>
                                    <div className="input-wrapper">
                                        <span className="input-icon"><CreditCardIcon /></span>
                                        <input className="form-input" id="cardNumber" type="text" placeholder="1234 5678 9101 1121" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="expiry">Expiry Date</label>
                                    <input className="form-input" style={{paddingLeft: '1rem'}} id="expiry" type="text" placeholder="MM / YY" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="cvc">CVC</label>
                                     <div className="input-wrapper">
                                        <span className="input-icon"><InfoIcon /></span>
                                        <input className="form-input" id="cvc" type="text" placeholder="123" />
                                    </div>
                                </div>
                            </div>
                        )}
                        {paymentMethod === 'upi' && (
                             <div style={{marginTop: '1.5rem'}}>
                                <div className="form-group full-width">
                                    <label className="form-label" htmlFor="upiId">Enter your UPI ID</label>
                                    <div className="input-wrapper">
                                        <input className="form-input" style={{paddingLeft: '1rem'}} id="upiId" type="text" placeholder="yourname@bank" />
                                    </div>
                                    <button className="verify-upi-btn">Verify & Pay</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="order-summary">
                        <h2 className="order-summary-title">Order Summary</h2>
                        <div className="order-item">
                            <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=200" alt="Course Thumbnail" className="order-item-img" />
                            <div className="order-item-details">
                                <h4>The Complete Web Development Bootcamp</h4>
                                <p className="order-item-price">${originalPrice}</p>
                            </div>
                        </div>
                        
                        <div className="promo-code-container">
                            <label className="form-label">Coupon</label>
                            <select className="promo-select" value={showManualInput ? 'OTHER' : selectedCoupon} onChange={handleCouponChange}>
                                <option value="">Apply a coupon</option>
                                {coupons.map(coupon => (
                                    <option key={coupon.code} value={coupon.code}>
                                        {coupon.code} - {coupon.type === 'percent' ? `${coupon.discount}% off` : `$${coupon.discount} off`}
                                    </option>
                                ))}
                                <option value="OTHER">Other...</option>
                            </select>
                        </div>
                        
                        {showManualInput && (
                            <div className="manual-promo-container">
                                <input 
                                    type="text" 
                                    placeholder="Enter promo code" 
                                    className="promo-input"
                                    value={manualCouponCode}
                                    onChange={(e) => setManualCouponCode(e.target.value)}
                                />
                                <button className="promo-btn" onClick={handleApplyManualCoupon}>Apply</button>
                            </div>
                        )}


                        <div className="price-details">
                            <div className="price-row"><span>Original Price:</span><span>${originalPrice.toFixed(2)}</span></div>
                            <div className="price-row">
                                <span>Discount:</span>
                                <span style={{color: '#10B981'}}>- ${discountAmount.toFixed(2)}</span>
                            </div>
                            <div className="price-row price-total">
                                <span>Total:</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <button className="complete-payment-btn" onClick={() => alert('Payment Successful! Welcome to the course.')}>
                            Complete Payment
                        </button>
                        
                        <div className="secure-transaction-note"><LockIcon /><span>Secure SSL Transaction</span></div>
                    </div>
                </div>
                
                <section className="faq-section">
                    <h2 className="faq-title">Frequently Asked Questions</h2>
                    <div className="faq-accordion">
                        {faqData.map((faq, index) => (
                            <div className="faq-item" key={index}>
                                <button className="faq-question" onClick={() => toggleFaq(index)}>
                                    <h3>{faq.q}</h3>
                                    <ChevronDownIcon className={`faq-toggle-icon ${openFaq === index ? 'open' : ''}`} />
                                </button>
                                <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default CheckoutPage;

