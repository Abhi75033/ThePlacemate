import React from 'react';

const Footer = () => {
  return (
    <>
      <style>{`
        /* --- NEW: Pre-Footer CTA Block --- */
        .pre-footer-cta {
            background: linear-gradient(90deg, #4F46E5, #7C3AED);
            padding: clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 3rem);
            text-align: center;
        }
        .cta-content {
            max-width: 650px;
            margin: 0 auto;
        }
        .cta-title {
            font-size: clamp(2rem, 5vw, 2.5rem);
            font-weight: 800;
            color: #FFFFFF;
            margin: 0 0 1rem 0;
            line-height: 1.2;
        }
        .cta-subtitle {
            font-size: 1.125rem;
            color: #E0E7FF;
            margin: 0 0 2rem 0;
        }
        .cta-button {
            background-color: #FFFFFF;
            color: #6D28D9;
            font-weight: 600;
            padding: 0.8rem 2.5rem;
            border-radius: 9999px;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        .cta-button:hover {
            transform: scale(1.05);
        }
        
        /* --- Enhanced Footer Section --- */
        .footer-section {
          background-color: #111827; /* Dark background */
          color: #9CA3AF; /* Light grey text */
          padding: clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 3rem);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          position: relative;
          overflow: hidden;
        }
        /* Subtle background pattern */
        .footer-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: radial-gradient(#1F2937 1px, transparent 1px);
            background-size: 20px 20px;
            opacity: 0.3;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative; /* To be above the pseudo-element */
          z-index: 2;
        }
        .footer-grid {
          display: grid;
          /* Adjusted grid for a more balanced look */
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }
        .footer-column h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0 0 1rem 0;
        }
        .footer-column p, .footer-column a {
          font-size: 0.95rem;
          line-height: 1.6;
          text-decoration: none;
          color: #9CA3AF;
          transition: color 0.3s ease;
        }
        .footer-column a:hover {
          color: #FFFFFF;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        /* Brand Column */
        .brand-info .logo-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 0.5rem 0;
        }

        /* Newsletter Form */
        .newsletter-form {
            display: flex;
            margin-top: 1rem;
        }
        .newsletter-input {
            width: 100%;
            padding: 0.6rem 0.8rem;
            border: 1px solid #374151;
            background-color: #1F2937;
            color: #FFFFFF;
            border-radius: 0.5rem 0 0 0.5rem;
            outline: none;
        }
        .newsletter-button {
            padding: 0.6rem 1rem;
            border: none;
            background-color: #4F46E5;
            color: #FFFFFF;
            border-radius: 0 0.5rem 0.5rem 0;
            cursor: pointer;
            font-weight: 500;
        }
        
        /* Bottom Bar */
        .footer-bottom {
            border-top: 1px solid #374151;
            padding-top: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .legal-links {
            display: flex;
            gap: 1.5rem;
        }
        .social-links {
            display: flex;
            gap: 1rem;
        }
        .social-links a {
            transition: transform 0.3s ease;
        }
        .social-links a:hover {
            transform: scale(1.1);
        }
        .social-links a svg {
            width: 24px;
            height: 24px;
        }

        /* --- Responsive Design --- */
        @media (max-width: 992px) {
            .footer-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (max-width: 576px) {
            .footer-grid {
                grid-template-columns: 1fr;
            }
            .footer-bottom {
                flex-direction: column-reverse; /* Social links on top */
                gap: 1.5rem;
            }
        }
      `}</style>
      
      {/* Pre-Footer CTA */}
      <section className="pre-footer-cta">
        <div className="cta-content">
            <h2 className="cta-title">Ready to Launch Your Career?</h2>
            <p className="cta-subtitle">Join ThePlacemate today and take the first step towards a successful and fulfilling career in tech. Your dream job is waiting.</p>
            <a href="#" className="cta-button">Get Started Now</a>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Column 1: Brand Info */}
            <div className="footer-column brand-info">
              <h3 className="logo-title">ThePlacemate</h3>
              <p>Crafting meaningful connections between people and places. We turn talent into successful placements.</p>
            </div>
            
            {/* Column 2: Platform Links */}
            <div className="footer-column">
              <h3>Platform</h3>
              <div className="footer-links">
                <a href="#">Courses</a>
                <a href="#">Mentors</a>
                <a href="#">Recruiters</a>
                <a href="#">Success Stories</a>
              </div>
            </div>

            {/* Column 3: Company Links */}
            <div className="footer-column">
              <h3>Company</h3>
              <div className="footer-links">
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
                <a href="#">FAQ</a>
              </div>
            </div>

            {/* Column 4: Newsletter */}
            <div className="footer-column">
              <h3>Stay Updated</h3>
              <p>Subscribe to our newsletter for the latest news and tips.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email" className="newsletter-input" />
                <button type="submit" className="newsletter-button">Go</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="legal-links">
                <p>&copy; {new Date().getFullYear()} ThePlacemate</p>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.064.195.621 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.588-7.52 2.588-.49 0-.974-.028-1.45-.086 2.685 1.723 5.874 2.73 9.342 2.73 11.21 0 17.345-9.288 17.345-17.345 0-.265-.006-.528-.018-.79A12.348 12.348 0 0024 4.557z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

