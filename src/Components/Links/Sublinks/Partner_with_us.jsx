import React from 'react';

// --- SVG Icons ---
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

import { FcGoogle } from "react-icons/fc";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { FaApple } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { SiAccenture } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { BsNvidia } from "react-icons/bs";


const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

// --- Icons for Features Section ---
const EliteTalentIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

const StreamlinedProcessIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
    </svg>
);

const DataDrivenIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <path d="M15 3h6v6"></path>
        <path d="M10 14L21 3"></path>
    </svg>
);

// --- Icons for How It Works Section ---
const PostJobIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="12" y1="18" x2="12" y2="12"></line>
        <line x1="9" y1="15" x2="15" y2="15"></line>
    </svg>
);

const MatchIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const HireIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 18.5a2.5 2.5 0 0 1 5 0"/>
        <path d="M4 11.5a2.5 2.5 0 0 1 5 0"/>
        <path d="M15 18.5a2.5 2.5 0 0 1 5 0"/>
        <path d="M15 11.5a2.5 2.5 0 0 1 5 0"/>
        <path d="M9 15l6-6"/>
        <path d="M15 15l-6-6"/>
    </svg>
);


// --- Main Page Component ---
const RecruiterPartnerPage = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');
        
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @keyframes animated-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .partner-page-container {
          font-family: 'Lexend', sans-serif;
          background-color: #111827;
          color: #F9FAFB;
          overflow-x: hidden;
          position: relative;
          background: linear-gradient(-45deg, #111827, #131833, #1F2937, #111827);
          background-size: 400% 400%;
          animation: animated-gradient 15s ease infinite;
        }
        
        .grid-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
            background-size: 50px 50px;
            z-index: 0;
        }

        .partner-hero-section {
          padding: 8rem 1.5rem 6rem 1.5rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }

        /* --- Background Glows & Shapes --- */
        .partner-hero-section::before, .partner-hero-section::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          z-index: 0;
          will-change: transform;
        }

        .partner-hero-section::before {
          width: 450px;
          height: 450px;
          background: rgba(79, 70, 229, 0.25);
          top: -120px;
          left: -180px;
        }

        .partner-hero-section::after {
          width: 400px;
          height: 400px;
          background: rgba(139, 92, 246, 0.2);
          bottom: -80px;
          right: -120px;
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 1024px) {
          .hero-container {
            grid-template-columns: 1.1fr 1fr;
            text-align: left;
          }
        }

        .hero-content {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .hero-content .tagline {
          color: #A5B4FC;
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 1rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .hero-content .hero-title {
          font-size: 3.75rem;
          font-weight: 800;
          line-height: 1.15;
          color: #FFFFFF;
          margin-bottom: 1.5rem;
        }
        
        .hero-content .hero-title .highlight {
          background: -webkit-linear-gradient(45deg, #818CF8, #C4B5FD);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-content .hero-subtitle {
          font-size: 1.125rem;
          color: #D1D5DB;
          line-height: 1.7;
          max-width: 550px;
          margin-bottom: 2.5rem;
        }

        .hero-cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        
        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 1.75rem;
          border-radius: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          cursor: pointer;
        }
        
        .cta-button:hover {
          transform: translateY(-4px);
        }

        .cta-primary {
          background: #4F46E5;
          color: #FFFFFF;
          box-shadow: 0 8px 25px -5px rgba(79, 70, 229, 0.4), 0 5px 15px -5px rgba(79, 70, 229, 0.2);
        }
        .cta-primary:hover {
           background: #818CF8;
           box-shadow: 0 12px 30px -5px rgba(129, 140, 248, 0.5), 0 8px 20px -5px rgba(129, 140, 248, 0.3);
        }

        .cta-secondary {
          background-color: rgba(255, 255, 255, 0.05);
          color: #E5E7EB;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
        }
        .cta-secondary:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .trusted-by .trusted-title {
          font-size: 0.875rem;
          color: #9CA3AF;
          margin-bottom: 1.5rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .trusted-logos {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 2.5rem;
        }
        
        .trusted-logos img {
          height: 24px;
          filter: brightness(0) invert(1);
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        
        .trusted-logos img:hover {
          opacity: 0.8;
        }
        
        .hero-image-container {
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
          position: relative;
          perspective: 1000px;
        }
        
        .hero-image-wrapper {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          padding: 1rem;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }
        .hero-image-container:hover .hero-image-wrapper {
           transform: rotateX(5deg) rotateY(-5deg) scale(1.05);
           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }


        .hero-image {
          width: 100%;
          max-width: 500px;
          height: auto;
          border-radius: 1rem;
          display: block;
        }
        
        /* --- Shared Section Styles --- */
        .why-us-section, .how-it-works-section, .cta-section {
          padding: 6rem 1.5rem;
          position: relative;
          z-index: 1;
        }

        .section-title {
          text-align: center;
          margin-bottom: 4rem;
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .section-title h2 {
          font-size: 2.75rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 1rem;
        }

        .section-title p {
          font-size: 1.125rem;
          color: #9CA3AF;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }
        
        /* --- Why Us Section --- */
        .features-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .feature-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.25rem;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          text-align: center;
          transition: transform 0.3s ease, background 0.3s ease;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .feature-card:nth-child(1) { animation-delay: 0.2s; }
        .feature-card:nth-child(2) { animation-delay: 0.4s; }
        .feature-card:nth-child(3) { animation-delay: 0.6s; }

        .feature-card:hover {
            transform: translateY(-10px);
            background: rgba(255, 255, 255, 0.08);
        }

        .feature-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          margin-bottom: 1.5rem;
          background: linear-gradient(45deg, #4F46E5, #818CF8);
          color: #FFFFFF;
        }
        
        .feature-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
        }
        
        .feature-card p {
          color: #9CA3AF;
          line-height: 1.6;
        }

        /* --- How It Works Process Steps --- */
        .process-steps-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            position: relative;
        }

        @media (min-width: 768px) {
            .process-steps-container {
                flex-direction: row;
                justify-content: space-between;
            }
            .process-step {
                width: 30%;
            }
            .step-connector {
                position: absolute;
                top: 48px;
                left: 15%;
                width: 70%;
                height: 2px;
                background: repeating-linear-gradient(90deg, #4F46E5, #4F46E5 4px, transparent 4px, transparent 8px);
                z-index: -1;
            }
        }

        .process-step {
            text-align: center;
            opacity: 0;
            animation: fadeInUp 0.8s ease-out forwards;
        }
        .process-step:nth-child(1) { animation-delay: 0.2s; }
        .process-step:nth-child(2) { animation-delay: 0.4s; }
        .process-step:nth-child(3) { animation-delay: 0.6s; }

        .step-icon-wrapper {
            width: 96px;
            height: 96px;
            border-radius: 50%;
            background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem auto;
            color: #C4B5FD;
        }

        .process-step h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: #FFFFFF;
            margin-bottom: 0.5rem;
        }

        .process-step p {
            color: #9CA3AF;
            line-height: 1.6;
        }

        /* --- CTA Section --- */
        .cta-section {
          padding-bottom: 8rem;
        }

        .cta-container {
            max-width: 900px;
            margin: 0 auto;
            background: linear-gradient(145deg, rgba(79, 70, 229, 0.1), rgba(79, 70, 229, 0.05));
            border: 1px solid rgba(79, 70, 229, 0.2);
            border-radius: 1.5rem;
            padding: 4rem;
            text-align: center;
            position: relative;
            overflow: hidden;
            opacity: 0;
            animation: fadeInUp 0.8s ease-out forwards;
            animation-delay: 0.2s;
        }

        .cta-container::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, rgba(167, 139, 250, 0) 70%);
            animation: rotateGlow 20s linear infinite;
        }

        @keyframes rotateGlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .cta-container h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #FFFFFF;
        }

        .cta-container p {
            font-size: 1.125rem;
            color: #D1D5DB;
            max-width: 600px;
            margin: 0 auto 2.5rem auto;
        }

        .cta-button-wrapper .cta-primary {
            font-size: 1.1rem;
            padding: 1.1rem 2.2rem;
        }

        @media (max-width: 768px) {
            .hero-content .hero-title {
                font-size: 2.75rem;
            }
            .partner-hero-section {
                padding: 6rem 1.5rem;
                text-align: center;
            }
            .hero-container, .section-title {
                text-align: center;
            }
            .hero-cta-buttons, .trusted-logos {
                justify-content: center;
            }
            .hero-content .hero-subtitle {
                margin-left: auto;
                margin-right: auto;
            }
             .section-title h2 {
                font-size: 2.25rem;
            }
            .cta-container {
                padding: 2.5rem 1.5rem;
            }
            .cta-container h2 {
                font-size: 2rem;
            }
        }
      `}</style>
      <div className="partner-page-container">
        <div className="grid-overlay"></div>
        <section className="partner-hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <p className="tagline">PARTNER WITH US</p>
              <h1 className="hero-title">
                Access Elite Tech Talent, <span className="highlight">Faster.</span>
              </h1>
              <p className="hero-subtitle">
                Step into our exclusive ecosystem. We connect innovative companies with a curated network of pre-vetted, elite tech professionals who are ready to drive your vision forward.
              </p>
              <div className="hero-cta-buttons">
                <a href="#post-job" className="cta-button cta-primary">
                  Post a Job <ArrowRightIcon />
                </a>
                <a href="#schedule-demo" className="cta-button cta-secondary">
                  Schedule a Demo <CalendarIcon />
                </a>
              </div>
              <div className="trusted-by">
                <p className="trusted-title">POWERING HIRING FOR INDUSTRY LEADERS</p>
                <div className="trusted-logos">
                  {/* <img src="https://placehold.co/100x30/FFFFFF/FFFFFF?text=." alt="Google" />
                  <img src="https://placehold.co/100x30/FFFFFF/FFFFFF?text=." alt="Microsoft" />
                  <img src="https://placehold.co/100x30/FFFFFF/FFFFFF?text=." alt="Apple" />
                  <img src="https://placehold.co/100x30/FFFFFF/FFFFFF?text=." alt="Amazon" /> */}
                  <FaGoogle />
                  <TfiMicrosoftAlt/>
                  <FaAmazon/>
                  <FaApple/>
                  <SiAccenture/>
                  <BsNvidia/>
                </div>
              </div>
            </div>
            <div className="hero-image-container">
              <div className="hero-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="A modern team collaborating in a high-tech office"
                  className="hero-image" 
                />
              </div>
            </div>
          </div>
        </section>

        <section className="why-us-section">
            <div className="section-title">
                <h2>Why Partner With Us?</h2>
                <p>We're more than a platform; we're a dedicated partner in your success, providing the tools and talent you need to innovate and scale.</p>
            </div>
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon">
                        <EliteTalentIcon />
                    </div>
                    <h3>Elite Talent Pool</h3>
                    <p>Gain access to the top 3% of tech professionals, rigorously vetted for skill, experience, and cultural fit.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                       <StreamlinedProcessIcon />
                    </div>
                    <h3>Streamlined Process</h3>
                    <p>Our intuitive platform and dedicated support save you time, reducing your hiring timeline from months to weeks.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <DataDrivenIcon />
                    </div>
                    <h3>Data-Driven Matching</h3>
                    <p>Leverage our intelligent matching algorithm to find the perfect candidates for your specific technical and business needs.</p>
                </div>
            </div>
        </section>

        <section className="how-it-works-section">
            <div className="section-title">
                <h2>Our Simple 3-Step Process</h2>
                <p>From posting your job to making a hire, our process is designed for maximum efficiency and transparency.</p>
            </div>
            <div className="process-steps-container">
                 <div className="step-connector"></div>
                <div className="process-step">
                    <div className="step-icon-wrapper"><PostJobIcon /></div>
                    <h3>1. Post Your Role</h3>
                    <p>Submit your job description and requirements through our streamlined portal in minutes.</p>
                </div>
                <div className="process-step">
                    <div className="step-icon-wrapper"><MatchIcon /></div>
                    <h3>2. Get Matched</h3>
                    <p>Our AI, combined with human expertise, provides a shortlist of ideal, pre-vetted candidates.</p>
                </div>
                <div className="process-step">
                    <div className="step-icon-wrapper"><HireIcon /></div>
                    <h3>3. Interview & Hire</h3>
                    <p>Conduct interviews and extend offers directly. We handle the rest, from contracts to onboarding.</p>
                </div>
            </div>
        </section>
        
        <section className="cta-section">
            <div className="cta-container">
                <h2>Ready to Hire the Best?</h2>
                <p>Join the top companies building their dream teams with our unparalleled network of tech talent. Your next great hire is just a click away.</p>
                <div className="cta-button-wrapper">
                     <a href="#post-job" className="cta-button cta-primary">
                        Start Hiring Now <ArrowRightIcon />
                     </a>
                </div>
            </div>
        </section>

      </div>
    </>
  );
};

export default RecruiterPartnerPage;

