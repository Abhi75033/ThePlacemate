import React, { useState, useEffect } from 'react';

// A simple SVG icon component for UI elements
const UIIcon = ({ name }) => {
  const icons = {
    user: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
    email: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
    card: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>,
    lock: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
    interview: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
  };
  return icons[name] || null;
};


const Step3_BookMockInterview = () => {
  
  // This data would be passed from previous steps
  const bookingDetails = {
    interviewType: 'Technical Interview',
    date: 'Friday, September 26, 2025',
    time: '10:00 AM',
    price: '$60.00'
  };

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(parseFloat(bookingDetails.price.replace('$', '')));
  const [couponMessage, setCouponMessage] = useState({ text: '', type: '' });
  const [isCouponListVisible, setIsCouponListVisible] = useState(false);

  const validCoupons = {
    'FIRSTIME100': { discount: 1, message: '100% off! Your session is free.' },
    'PRACTICE50': { discount: 0.5, message: '50% discount has been applied.' },
    'READY20': { discount: 0.2, message: '20% discount has been applied.' }
  };
  
  const handleApplyCoupon = (codeToApply) => {
    const code = codeToApply.toUpperCase().trim();
    if (validCoupons[code]) {
      const originalPrice = parseFloat(bookingDetails.price.replace('$', ''));
      const discountPercentage = validCoupons[code].discount;
      const newDiscount = originalPrice * discountPercentage;
      setDiscount(newDiscount);
      setCouponMessage({ text: validCoupons[code].message, type: 'success' });
    } else {
      setDiscount(0);
      setCouponMessage({ text: 'Invalid coupon code.', type: 'error' });
    }
  };

  const handleSelectCoupon = (code) => {
    setCouponCode(code);
    setIsCouponListVisible(false);
    handleApplyCoupon(code);
  };
  
  useEffect(() => {
    const originalPrice = parseFloat(bookingDetails.price.replace('$', ''));
    setFinalPrice(originalPrice - discount);
  }, [discount, bookingDetails.price]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment processing is not implemented. Your mock interview is booked!');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');
        
        body, * { box-sizing: border-box; }

        .payment-page-body {
            font-family: 'Lexend', sans-serif;
            background-color: #F9FAFB;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 2rem;
        }

        .booking-page-container { width: 100%; max-width: 1000px; }
        .back-button { display: inline-flex; align-items: center; gap: 0.5rem; color: #4B5563; font-size: 0.875rem; font-weight: 500; text-decoration: none; margin-bottom: 1.5rem; transition: color 0.2s ease; }
        .back-button:hover { color: #111827; }

        .progress-steps-container { display: flex; align-items: flex-start; justify-content: center; width: 100%; max-width: 600px; margin: 0 auto 3rem; gap: 0.5rem; }
        .progress-step { display: flex; flex-direction: column; align-items: center; text-align: center; color: #9CA3AF; font-weight: 500; position: relative; width: 120px; }
        .step-circle { width: 36px; height: 36px; border-radius: 50%; border: 2px solid #D1D5DB; display: flex; align-items: center; justify-content: center; font-weight: 700; background-color: #ffffff; transition: all 0.3s ease; z-index: 2; }
        .step-label { margin-top: 0.75rem; font-size: 0.875rem; font-weight: 500; }
        .progress-connector { flex-grow: 1; height: 2px; background-color: #D1D5DB; margin-top: 17px; }
        .progress-step.completed .step-circle, .progress-step.active .step-circle { background: linear-gradient(90deg, #4f46e5, #6d28d9); border-color: #4F46E5; color: white; box-shadow: 0 4px 10px -2px rgba(79, 70, 229, 0.4); }
        .progress-step.completed .step-label, .progress-step.active .step-label { color: #4F46E5; font-weight: 600; }
        .progress-step.completed .progress-connector { background: linear-gradient(90deg, #4f46e5, #6d28d9); }

        .confirmation-layout-grid {
            display: grid; grid-template-columns: 400px 1fr; gap: 2rem; align-items: flex-start; background: #FFFFFF; padding: 1.5rem; border-radius: 2rem; box-shadow: 0 20px 50px -20px rgba(0,0,0,0.1);
        }
        
        .form-column { padding: 1.5rem; }
        .form-column h2 { font-size: 1.75rem; font-weight: 700; color: #111827; margin: 0 0 2rem 0; }
        .input-group { position: relative; margin-bottom: 1.5rem; }
        .input-group label { display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem; }
        
        .input-wrapper { position: relative; }
        .input-wrapper .icon { position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: #9CA3AF; pointer-events: none; }
        .input-wrapper input { width: 100%; padding: 0.875rem 1rem 0.875rem 2.75rem; border: 1px solid #D1D5DB; border-radius: 0.75rem; font-size: 1rem; transition: border-color 0.2s, box-shadow 0.2s; background-color: #F9FAFB; }
        .input-wrapper input:focus { outline: none; border-color: #4F46E5; box-shadow: 0 0 0 3px #E0E7FF; background-color: #fff; }

        .coupon-group { display: flex; gap: 0.5rem; position: relative; }
        .coupon-group input { flex-grow: 1; padding: 0.875rem 1rem; border: 1px solid #D1D5DB; border-radius: 0.75rem; font-size: 1rem; background-color: #F9FAFB; transition: border-color 0.2s, box-shadow 0.2s; }
        .coupon-group input:focus { outline: none; border-color: #4F46E5; box-shadow: 0 0 0 3px #E0E7FF; background-color: #fff; }
        .apply-coupon-btn { flex-shrink: 0; padding: 0.75rem 1.25rem; border: none; background: #4F46E5; color: white; font-weight: 500; border-radius: 0.75rem; cursor: pointer; transition: all 0.2s ease; }
        .apply-coupon-btn:hover { background: #4338CA; }
        
        .coupon-dropdown { position: absolute; top: calc(100% + 4px); background-color: white; border: 1px solid #E5E7EB; border-radius: 0.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.08); width: 100%; z-index: 10; overflow: hidden; }
        .coupon-dropdown-item { padding: 0.75rem 1rem; cursor: pointer; font-size: 0.875rem; transition: background-color 0.2s ease; }
        .coupon-dropdown-item:hover { background-color: #F3F4F6; }
        .coupon-dropdown-item strong { color: #4F46E5; }
        
        .coupon-message { font-size: 0.875rem; margin-top: 0.5rem; height: 1.25rem; }
        .coupon-message.success { color: #16A34A; }
        .coupon-message.error { color: #DC2626; }
        
        .summary-column { background: linear-gradient(135deg, #6d28d9, #4f46e5); color: white; border-radius: 1.5rem; padding: 2.5rem; box-shadow: 0 20px 40px -15px rgba(79, 70, 229, 0.5); }
        .summary-header { text-align: center; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 1.5rem; margin-bottom: 1.5rem; }
        .summary-icon { width: 90px; height: 90px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; border: 4px solid white; background-color: rgba(255,255,255,0.1); }
        .summary-header h3 { font-size: 1.5rem; font-weight: 600; margin: 0; }
        
        .summary-item { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; font-size: 0.9rem; }
        .summary-item .label { color: rgba(255,255,255,0.8); }
        .summary-item .value { font-weight: 500; }
        .summary-item .discount { color: #A7F3D0; font-weight: 500; }
        
        .summary-total { margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.2); font-size: 1.75rem; font-weight: 700; }
        
        .confirm-pay-btn { display: flex; align-items: center; justify-content: center; gap: 0.75rem; width: 100%; background: #4F46E5; color: white; padding: 1rem 1.5rem; border-radius: 0.75rem; text-decoration: none; font-weight: 600; font-size: 1rem; text-align: center; transition: all 0.3s ease; box-shadow: 0 4px 15px -2px rgba(79, 70, 229, 0.4); border: none; cursor: pointer; margin-top: 2rem; }
        .confirm-pay-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px -2px rgba(79, 70, 229, 0.5); background: #4338CA; }

        @media (max-width: 992px) { .confirmation-layout-grid { grid-template-columns: 1fr; } .summary-column { grid-row: 1; } }
      `}</style>
      <div className="payment-page-body">
        <div className="booking-page-container">
           <a href="#" className="back-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
              Go Back
          </a>
          <div className="progress-steps-container">
              <div className="progress-step completed"><div className="step-circle">1</div><div className="step-label">Select Interview</div></div>
              <div className="progress-connector" style={{background: 'linear-gradient(90deg, #4f46e5, #6d28d9)'}}></div>
              <div className="progress-step completed"><div className="step-circle">2</div><div className="step-label">Schedule</div></div>
              <div className="progress-connector" style={{background: 'linear-gradient(90deg, #4f46e5, #6d28d9)'}}></div>
              <div className="progress-step active"><div className="step-circle">3</div><div className="step-label">Confirm & Pay</div></div>
          </div>

          <div className="confirmation-layout-grid">
              <div className="summary-column">
                  <div className="summary-header">
                      <div className="summary-icon"><UIIcon name="interview" /></div>
                      <h3>{bookingDetails.interviewType}</h3>
                  </div>
                  <div className="summary-body">
                      <div className="summary-item"><span className="label">Date:</span><span className="value">{bookingDetails.date}</span></div>
                      <div className="summary-item"><span className="label">Time:</span><span className="value">{bookingDetails.time}</span></div>
                      <hr style={{border: 'none', borderTop: '1px solid rgba(255,255,255,0.2)', margin: '1rem 0'}} />
                      <div className="summary-item"><span className="label">Price:</span><span className="value">{bookingDetails.price}</span></div>
                      {discount > 0 && (<div className="summary-item"><span className="label">Discount:</span><span className="discount">- ${discount.toFixed(2)}</span></div>)}
                      <div className="summary-item summary-total"><span className="label">Total Due:</span><span className="value">{finalPrice > 0 ? `$${finalPrice.toFixed(2)}` : 'Free'}</span></div>
                  </div>
              </div>
              <form className="form-column" onSubmit={handleSubmit} onBlur={() => setIsCouponListVisible(false)}>
                  <h2>Payment Details</h2>
                  <div className="input-group">
                      <label htmlFor="name">Full Name</label>
                      <div className="input-wrapper">
                          <span className="icon"><UIIcon name="user" /></span>
                          <input type="text" id="name" placeholder="John Doe" required />
                      </div>
                  </div>
                  <div className="input-group">
                      <label htmlFor="email">Email Address</label>
                      <div className="input-wrapper">
                           <span className="icon"><UIIcon name="email" /></span>
                          <input type="email" id="email" placeholder="john.doe@example.com" required />
                      </div>
                  </div>
                  <div className="input-group">
                      <label>Card Information</label>
                      <div className="input-wrapper">
                          <span className="icon"><UIIcon name="card" /></span>
                          <input type="text" id="card" placeholder="Mock Payment Element" readOnly style={{color: '#6B7280', cursor: 'not-allowed'}}/>
                      </div>
                  </div>
                  <hr style={{border: 'none', borderTop: '1px solid #E5E7EB', margin: '2rem 0'}} />
                  <div className="input-group">
                      <label htmlFor="coupon">Have a Coupon?</label>
                      <div className="coupon-group">
                          <input type="text" id="coupon" placeholder="Enter code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} onFocus={() => setIsCouponListVisible(true)} />
                          <button type="button" className="apply-coupon-btn" onClick={() => handleApplyCoupon(couponCode)}>Apply</button>
                      </div>
                      {isCouponListVisible && (
                          <div className="coupon-dropdown">
                              {Object.entries(validCoupons).map(([code, { message }]) => (
                                  <div key={code} className="coupon-dropdown-item" onMouseDown={() => handleSelectCoupon(code)}>
                                      <strong>{code}</strong> - {message.split('.')[0]}
                                  </div>
                              ))}
                          </div>
                      )}
                      <div className={`coupon-message ${couponMessage.type}`}>{couponMessage.text}</div>
                  </div>
                  <button type="submit" className="confirm-pay-btn">
                      <UIIcon name="lock" />
                      Confirm & Pay {finalPrice > 0 ? `$${finalPrice.toFixed(2)}` : 'Free'}
                  </button>
              </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3_BookMockInterview;

