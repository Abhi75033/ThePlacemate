import React, { useState } from 'react';

// A simple SVG icon component for UI elements
const UIIcon = ({ name, className }) => {
  const icons = {
    check: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>,
    chevron: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="6 9 12 15 18 9"></polyline></svg>
  };
  return icons[name] || null;
};

const PricingCard = ({ plan, billingCycle }) => {
    const isPopular = plan.name === 'Pro';
    const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
    const period = billingCycle === 'monthly' ? '/month' : '/year';

    return (
        <div className={`pricing-card ${isPopular ? 'popular' : ''}`}>
            {isPopular && <div className="popular-badge">Most Popular</div>}
            <div className="plan-header">
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
            </div>
            <div className="price-container">
                <span className="price-amount">${price}</span>
                <span className="price-period">{period}</span>
            </div>
            <ul className="features-list">
                {plan.features.map((feature, index) => (
                    <li key={index}>
                        <span className="check-icon"><UIIcon name="check" /></span>
                        {feature}
                    </li>
                ))}
            </ul>
            <button className={`choose-plan-btn ${isPopular ? 'popular-btn' : ''}`}>
                Choose Plan
            </button>
        </div>
    );
};

const FAQItem = ({ faq, index, openIndex, setOpenIndex }) => {
    const isOpen = index === openIndex;

    return (
        <div className="faq-item">
            <button className="faq-question" onClick={() => setOpenIndex(isOpen ? null : index)}>
                <span>{faq.question}</span>
                <UIIcon name="chevron" className={`faq-chevron ${isOpen ? 'open' : ''}`} />
            </button>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                <p>{faq.answer}</p>
            </div>
        </div>
    );
};


const SubscriptionPage = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [openFAQ, setOpenFAQ] = useState(0); // First FAQ item is open by default

    const plans = [
        { name: 'Basic', description: 'For individuals getting started.', monthlyPrice: 29, annualPrice: 290, features: [ '5 Mock Interviews per month', '2 Mentor Sessions per month', 'Access to Basic Courses', 'Community Forum Access', 'Email Support' ] },
        { name: 'Pro', description: 'For professionals aiming to excel.', monthlyPrice: 59, annualPrice: 590, features: [ '15 Mock Interviews per month', '10 Mentor Sessions per month', 'Access to All Courses', 'Resume & Portfolio Review', 'Priority Email Support' ] },
        { name: 'Teams', description: 'For organizations and groups.', monthlyPrice: 99, annualPrice: 990, features: [ 'Unlimited Mock Interviews', 'Unlimited Mentor Sessions', 'Dedicated Account Manager', 'Team Performance Analytics', '24/7 Premium Support' ] }
    ];

    const faqs = [
        { question: "Can I cancel my subscription at any time?", answer: "Yes, you can cancel your subscription at any time from your account settings. Your subscription will remain active until the end of the current billing period, and you will not be charged again." },
        { question: "What is the difference between monthly and annual billing?", answer: "Choosing an annual plan gives you a significant discount compared to paying monthly. You get the same great features but at a lower overall cost for the year." },
        { question: "Can I upgrade or downgrade my plan later?", answer: "Absolutely! You can easily upgrade or downgrade your plan from your dashboard. The change will take effect in the next billing cycle." },
        { question: "Do you offer refunds?", answer: "We offer a 30-day money-back guarantee on all our plans. If you're not satisfied within the first 30 days, simply contact our support team for a full refund." }
    ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');
        
        .subscription-page-body {
            font-family: 'Lexend', sans-serif;
            background-color: #F9FAFB;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4rem 2rem;
        }
        
        .subscription-container {
            width: 100%;
            max-width: 1100px;
            text-align: center;
        }

        .page-header h1 {
            font-size: clamp(2.5rem, 5vw, 3.5rem);
            font-weight: 800;
            color: #111827;
            margin: 0;
        }
        
        .page-header h1 span {
            background: linear-gradient(90deg, #6d28d9, #4f46e5);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .page-header p {
            font-size: 1.125rem;
            color: #4B5563;
            line-height: 1.6;
            margin: 1rem auto 0;
            max-width: 600px;
        }
        
        .billing-toggle {
            display: inline-flex;
            align-items: center;
            background-color: #E5E7EB;
            border-radius: 9999px;
            padding: 0.5rem;
            margin: 2.5rem 0;
        }

        .toggle-btn {
            padding: 0.6rem 1.25rem;
            border: none;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 600;
            background-color: transparent;
            color: #374151;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .toggle-btn.active {
            background-color: white;
            color: #4F46E5;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        }
        .save-badge {
            font-size: 0.875rem;
            font-weight: 500;
            color: #16A34A;
            margin-left: 1rem;
        }
        
        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            align-items: center;
            margin-top: 4rem;
        }

        .pricing-card {
            background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 1.5rem; padding: 2.5rem; text-align: left; display: flex; flex-direction: column; height: 100%; transition: all 0.3s ease; position: relative;
        }
        
        .pricing-card.popular {
            border-color: #4F46E5; transform: scale(1.05); box-shadow: 0 20px 40px -15px rgba(79, 70, 229, 0.2);
        }
        
        .popular-badge {
            position: absolute; top: -1rem; left: 50%; transform: translateX(-50%); background: linear-gradient(90deg, #6d28d9, #4f46e5); color: white; padding: 0.375rem 1rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
        }

        .plan-header h3 { font-size: 1.75rem; font-weight: 700; color: #111827; margin: 0; }
        .plan-header p { font-size: 0.9rem; color: #6B7280; margin: 0.5rem 0 0 0; }
        .price-container { margin: 2rem 0; display: flex; align-items: baseline; }
        .price-amount { font-size: 3rem; font-weight: 800; color: #111827; }
        .price-period { font-size: 1rem; color: #6B7280; margin-left: 0.5rem; font-weight: 500; }
        
        .features-list { list-style: none; padding: 0; margin: 0 0 2.5rem 0; flex-grow: 1; }
        .features-list li { display: flex; align-items: center; gap: 0.75rem; font-size: 0.9rem; color: #374151; margin-bottom: 1rem; }
        .features-list .check-icon { color: #4F46E5; }

        .choose-plan-btn {
            display: block; width: 100%; background: white; color: #4F46E5; border: 1px solid #4F46E5; padding: 0.875rem; border-radius: 0.75rem; text-decoration: none; font-weight: 600; font-size: 1rem; text-align: center; transition: all 0.3s ease; cursor: pointer;
        }
        .choose-plan-btn:hover { background: #F3F4F6; }
        .choose-plan-btn.popular-btn { background: #4F46E5; color: white; border-color: #4F46E5; }
        .choose-plan-btn.popular-btn:hover { background: #4338CA; }

        /* --- FAQ Section --- */
        .faq-section {
            margin-top: 6rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
        }
        .faq-header {
            text-align: center;
            margin-bottom: 3rem;
        }
        .faq-header h2 { font-size: 2.5rem; font-weight: 800; color: #111827; margin: 0; }
        .faq-header p { font-size: 1.125rem; color: #4B5563; margin: 1rem 0 0 0; }

        .faq-item {
            border-bottom: 1px solid #E5E7EB;
        }
        .faq-question {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: left;
            padding: 1.5rem 0;
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1.125rem;
            font-weight: 600;
            color: #111827;
        }
        .faq-chevron {
            color: #4F46E5;
            transition: transform 0.3s ease;
        }
        .faq-chevron.open {
            transform: rotate(180deg);
        }
        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), padding 0.5s ease;
        }
        .faq-answer.open {
            max-height: 200px; /* Adjust as needed */
            padding-bottom: 1.5rem;
        }
        .faq-answer p {
            font-size: 1rem;
            color: #4B5563;
            line-height: 1.7;
            margin: 0;
        }


        @media (max-width: 992px) { 
            .pricing-grid { grid-template-columns: 1fr; margin-top: 2.5rem; } 
            .pricing-card.popular { transform: scale(1); } 
        }
      `}</style>
      <div className="subscription-page-body">
        <div className="subscription-container">
            <div className="page-header">
                <h1>Flexible Plans for Your <span>Growth</span></h1>
                <p>Choose the subscription that fits your career goals. Unlock exclusive access to mentors, mock interviews, and courses.</p>
            </div>
            
            <div className="billing-toggle">
                <button className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`} onClick={() => setBillingCycle('monthly')}>Monthly</button>
                <button className={`toggle-btn ${billingCycle === 'annual' ? 'active' : ''}`} onClick={() => setBillingCycle('annual')}>Annual</button>
                <span className="save-badge">Save 15%</span>
            </div>

            <div className="pricing-grid">
                {plans.map((plan, index) => ( <PricingCard key={index} plan={plan} billingCycle={billingCycle} /> ))}
            </div>

            <section className="faq-section">
                <div className="faq-header">
                    <h2>Frequently Asked Questions</h2>
                    <p>Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.</p>
                </div>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FAQItem 
                            key={index} 
                            faq={faq} 
                            index={index}
                            openIndex={openFAQ}
                            setOpenIndex={setOpenFAQ} 
                        />
                    ))}
                </div>
            </section>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;

