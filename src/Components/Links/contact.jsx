import React, { useState } from 'react';

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(0); // Default first FAQ to be open
  const [consultationType, setConsultationType] = useState('admissions');

  // --- Icon SVGs ---
  const MailIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>);
  const PhoneIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>);
  const MapPinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>);
  const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
  const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>;
  const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

  const faqData = [
    { q: "What are your business hours?", a: "Our support team and admissions counselors are available from Monday to Friday, 10:00 AM to 7:00 PM IST." },
    { q: "How long does it take to get a response?", a: "We strive to respond to all inquiries within 24 business hours. If your query is urgent, we recommend calling us directly during business hours." },
    { q: "Can I schedule a one-on-one counseling session?", a: "Yes! We encourage prospective students to schedule a free counseling session to discuss their career goals. Please mention it in the contact form, and we'll arrange a call." },
    { q: "Do you have any partnerships or collaboration programs?", a: "We are always open to collaborating with companies and industry professionals. Please select 'Partnership Inquiry' as the subject in the contact form to reach the right team." }
  ];

  return (
    <>
      <style>{`
        .contact-page {
          font-family: 'Lexend', sans-serif;
          color: #1a202c;
          line-height: 1.6;
          background-color: #F9FAFB;
        }
        .section-header { text-align: center; margin-bottom: 3rem; }
        .section-title { font-size: clamp(2rem, 5vw, 2.5rem); font-weight: 700; color: #111827; margin: 0 0 0.5rem 0; }
        .section-subtitle { font-size: clamp(1rem, 2vw, 1.125rem); color: #4B5563; max-width: 600px; margin: 0 auto; }

        /* --- Hero Section --- */
        .contact-hero-section {
          background-color: #FFFFFF;
          padding: 5rem 2rem;
          text-align: center;
          border-bottom: 1px solid #E5E7EB;
        }
        
        .contact-hero-content { max-width: 900px; margin: 0 auto; }
        .contact-hero-title { font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 800; margin: 0 0 1rem 0; letter-spacing: -1px; line-height: 1.1; color: #111827; }
        .contact-hero-subtitle { font-size: clamp(1.1rem, 2vw, 1.25rem); font-weight: 400; max-width: 700px; margin: 0 auto 3rem auto; color: #4B5563; }
        .contact-info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 4rem; }
        .contact-card { background-color: #F9FAFB; padding: 2.5rem 2rem; border-radius: 1.5rem; border: 1px solid #F3F4F6; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .contact-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px -5px rgba(0,0,0,0.08); }
        .contact-icon { display: inline-flex; align-items: center; justify-content: center; width: 60px; height: 60px; border-radius: 50%; background-color: #E0E7FF; color: #4F46E5; margin-bottom: 1.5rem; }
        .contact-card-title { font-size: 1.5rem; font-weight: 600; color: #111827; margin: 0 0 0.5rem 0; }
        .contact-card-text { font-size: 1rem; color: #4B5563; margin: 0 0 1rem 0; }
        .contact-card-link { font-weight: 600; color: #4F46E5; text-decoration: none; transition: opacity 0.3s ease; }
        .contact-card-link:hover { opacity: 0.8; }
        
        /* --- Contact Form Section --- */
        .contact-form-section { padding: 4rem 2rem; }
        .contact-form-container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: flex-start; }
        .contact-form { background-color: #FFFFFF; padding: 3rem; border-radius: 1.5rem; border: 1px solid #E5E7EB; }
        .form-group { margin-bottom: 1.5rem; }
        .form-label { display: block; font-size: 0.875rem; font-weight: 600; color: #374151; margin-bottom: 0.5rem; }
        .form-input, .form-textarea { width: 100%; box-sizing: border-box; padding: 0.75rem 1rem; font-size: 1rem; font-family: 'Lexend', sans-serif; border: 1px solid #D1D5DB; border-radius: 0.5rem; transition: border-color 0.3s ease, box-shadow 0.3s ease; }
        .form-input:focus, .form-textarea:focus { outline: none; border-color: #4F46E5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2); }
        .form-textarea { min-height: 120px; resize: vertical; }
        .submit-btn { width: 100%; padding: 0.8rem 1.5rem; border-radius: 0.5rem; font-weight: 600; text-decoration: none; transition: all 0.3s ease; background-image: linear-gradient(to right, #6D28D9, #8B5CF6); color: white; border: none; font-size: 1rem; cursor: pointer; }
        .submit-btn:hover { box-shadow: 0 10px 20px rgba(139, 92, 246, 0.2); }
        .map-container { width: 100%; height: 500px; border-radius: 1.5rem; overflow: hidden; border: 1px solid #E5E7EB; }

        /* --- FAQ Section --- */
        .faq-contact-section { background-color: #F9FAFB; padding: 4rem 2rem; }
        .faq-accordion { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem; }
        .faq-item { background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; cursor: pointer; transition: all 0.3s ease; }
        .faq-item:hover { border-color: #C7D2FE; }
        .faq-question { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
        .faq-question-text { font-size: 1.125rem; font-weight: 600; color: #1F2937; margin: 0; }
        .faq-icon { flex-shrink: 0; transition: transform 0.3s ease-in-out; color: #4F46E5; }
        .faq-icon.active { transform: rotate(45deg); }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease-in-out, margin-top 0.4s ease-in-out; }
        .faq-answer.open { max-height: 200px; margin-top: 1.5rem; }
        .faq-answer p { font-size: 1rem; color: #4B5563; line-height: 1.7; margin: 0; }

        /* --- NEW: Consultation Section --- */
        .consultation-section { background-color: #FFFFFF; padding: 4rem 2rem; }
        .consultation-box { max-width: 800px; margin: 0 auto; background-color: #F9FAFB; border-radius: 1.5rem; border: 1px solid #F3F4F6; padding: 3rem; }
        .consultation-tabs { display: flex; justify-content: center; background-color: #E5E7EB; border-radius: 9999px; padding: 0.5rem; margin-bottom: 2rem; }
        .consultation-tab { flex: 1; padding: 0.6rem 1.25rem; border: none; border-radius: 9999px; font-size: 1rem; font-weight: 600; background-color: transparent; color: #374151; cursor: pointer; transition: all 0.3s ease; }
        .consultation-tab.active { background-color: white; color: #1E3A8A; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .consultation-content { text-align: center; }
        .consultation-title { font-size: 1.5rem; font-weight: 600; color: #111827; margin: 0 0 0.5rem 0; }
        .consultation-description { font-size: 1rem; color: #4B5563; margin-bottom: 1.5rem; }
        .consultation-btn { display: inline-block; padding: 0.75rem 2rem; border-radius: 0.5rem; font-weight: 600; text-decoration: none; transition: all 0.3s ease; background-image: linear-gradient(to right, #4F46E5, #6D28D9); color: white; border: none; }
        .consultation-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 15px rgba(79, 70, 229, 0.2); }

        /* --- Socials Section --- */
        .socials-section { background-color: #F9FAFB; padding: 4rem 2rem; border-top: 1px solid #E5E7EB;}
        .socials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; }
        .social-card { background-color: #FFFFFF; border-radius: 1rem; padding: 2rem; text-decoration: none; color: inherit; display: block; transition: all 0.3s ease; border: 1px solid #E5E7EB;}
        .social-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px -5px rgba(0,0,0,0.08); border-color: #D1D5DB; }
        .social-card-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
        .social-icon { color: #4F46E5; }
        .social-title { font-size: 1.25rem; font-weight: 600; color: #111827; }
        .social-description { font-size: 1rem; color: #4B5563; }

        @media (max-width: 992px) {
            .contact-form-container { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
            .contact-hero-section { padding: 4rem 1.5rem; }
            .contact-form { padding: 2rem; }
        }
        @media (max-width: 480px) {
            .consultation-tabs { flex-direction: column; border-radius: 1rem; }
        }
      `}</style>
      <div className="contact-page">
        <section className="contact-hero-section">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Get in Touch</h1>
            <p className="contact-hero-subtitle">
              We're here to help you on your journey into tech. Whether you're a prospective student, a potential hiring partner, or just have a question, we'd love to hear from you.
            </p>
            
            <div className="contact-info-grid">
                <div className="contact-card">
                    <div className="contact-icon"><MailIcon /></div>
                    <h3 className="contact-card-title">Email Us</h3>
                    <p className="contact-card-text">For general inquiries, support, or admissions questions.</p>
                    <a href="mailto:hello@theplacemate.com" className="contact-card-link">hello@theplacemate.com</a>
                </div>
                <div className="contact-card">
                    <div className="contact-icon"><PhoneIcon /></div>
                    <h3 className="contact-card-title">Call Us</h3>
                    <p className="contact-card-text">Speak directly with our admissions team during business hours.</p>
                    <a href="tel:+911234567890" className="contact-card-link">+91 12345 67890</a>
                </div>
                <div className="contact-card">
                    <div className="contact-icon"><MapPinIcon /></div>
                    <h3 className="contact-card-title">Visit Us</h3>
                    <p className="contact-card-text">123 Tech Park, Innovation Tower, Navi Mumbai, India</p>
                    <a href="https://maps.google.com/maps?q=International%20Infotech%20Park,%20Vashi,%20Navi%20Mumbai" target="_blank" rel="noopener noreferrer" className="contact-card-link">Get Directions</a>
                </div>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
            <div className="contact-form-container">
                <div className="contact-form">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" id="name" className="form-input" placeholder="Priya Sharma" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" id="email" className="form-input" placeholder="priya.sharma@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" id="subject" className="form-input" placeholder="e.g., Course Inquiry" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <textarea id="message" className="form-textarea" placeholder="Hi there, I'd like to ask about..." required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
                <div className="map-container">
                   <iframe
                        src="https://maps.google.com/maps?q=International%20Infotech%20Park,%20Vashi,%20Navi%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
        
        <section className="faq-contact-section">
            <div className="section-header">
                <h2 className="section-title">Common Questions</h2>
                <p className="section-subtitle">Find quick answers to common questions. If you can't find what you're looking for, use the form above to get in touch.</p>
            </div>
            <div className="faq-accordion">
                {faqData.map((faq, index) => (
                    <div className="faq-item" key={index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                        <div className="faq-question">
                            <p className="faq-question-text">{faq.q}</p>
                            <div className={`faq-icon ${openFaq === index ? 'active' : ''}`}>
                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </div>
                        </div>
                        <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                            <p>{faq.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className="consultation-section">
            <div className="section-header">
                <h2 className="section-title">Schedule a Consultation</h2>
                <p className="section-subtitle">Want to discuss your future or a potential partnership? Schedule a call with the right team.</p>
            </div>
            <div className="consultation-box">
                <div className="consultation-tabs">
                    <button className={`consultation-tab ${consultationType === 'admissions' ? 'active' : ''}`} onClick={() => setConsultationType('admissions')}>
                        For Students
                    </button>
                    <button className={`consultation-tab ${consultationType === 'partnerships' ? 'active' : ''}`} onClick={() => setConsultationType('partnerships')}>
                        For Companies
                    </button>
                </div>
                {consultationType === 'admissions' && (
                    <div className="consultation-content">
                        <h3 className="consultation-title">Talk to an Admissions Advisor</h3>
                        <p className="consultation-description">Get personalized guidance on the right career path and course for you.</p>
                        <a href="#" className="consultation-btn">Schedule a Call</a>
                    </div>
                )}
                {consultationType === 'partnerships' && (
                    <div className="consultation-content">
                        <h3 className="consultation-title">Discuss a Partnership</h3>
                        <p className="consultation-description">Let's explore how our top-tier talent can help grow your business.</p>
                        <a href="#" className="consultation-btn">Schedule a Meeting</a>
                    </div>
                )}
            </div>
        </section>

        <section className="socials-section">
            <div className="section-header">
                <h2 className="section-title">Follow Our Journey</h2>
                <p className="section-subtitle">Stay connected with us on social media for the latest updates, success stories, and tech insights.</p>
            </div>
            <div className="socials-grid">
                <a href="#" className="social-card">
                    <div className="social-card-header">
                        <div className="social-icon"><LinkedInIcon /></div>
                        <h3 className="social-title">LinkedIn</h3>
                    </div>
                    <p className="social-description">Connect with our professional network and get industry updates.</p>
                </a>
                <a href="#" className="social-card">
                    <div className="social-card-header">
                        <div className="social-icon"><TwitterIcon /></div>
                        <h3 className="social-title">Twitter</h3>
                    </div>
                    <p className="social-description">Follow us for real-time news, announcements, and tech trends.</p>
                </a>
                <a href="#" className="social-card">
                    <div className="social-card-header">
                        <div className="social-icon"><InstagramIcon /></div>
                        <h3 className="social-title">Instagram</h3>
                    </div>
                    <p className="social-description">See behind-the-scenes content and student success stories.</p>
                </a>
            </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;

