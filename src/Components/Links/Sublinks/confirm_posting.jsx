import React from 'react';

// --- SVG Icons ---
const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

const DashboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
);

// --- Social Icons for Footer ---
const TwitterIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
);
const LinkedinIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);


// --- Main Page Component ---
const JobConfirmationPage = () => {
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

        .confirmation-page {
          font-family: 'Lexend', sans-serif;
          background-color: #111827;
          color: #F9FAFB;
          overflow-x: hidden;
          position: relative;
          background: linear-gradient(-45deg, #111827, #131833, #1F2937, #111827);
          background-size: 400% 400%;
          animation: animated-gradient 15s ease infinite;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        .main-content {
            flex-grow: 1;
            padding: 6rem 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
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

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes draw {
            to { stroke-dashoffset: 0; }
        }

        .confirmation-container {
            max-width: 600px;
            width: 100%;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }

        .confirmation-card {
            background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1.25rem;
            padding: 3rem;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            text-align: center;
            opacity: 0;
            animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }
        
        .success-icon .circle {
            stroke-dasharray: 264;
            stroke-dashoffset: 264;
            animation: draw 0.8s ease-out 0.5s forwards;
        }
        .success-icon .tick {
            stroke-dasharray: 48;
            stroke-dashoffset: 48;
            animation: draw 0.5s ease-out 0.9s forwards;
        }

        .confirmation-card h1 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #FFFFFF;
            margin-top: 1.5rem;
            margin-bottom: 1rem;
        }

        .confirmation-card p {
            font-size: 1.125rem;
            color: #9CA3AF;
            line-height: 1.7;
            margin-bottom: 2.5rem;
        }
        
        .confirmation-actions {
            display: flex;
            justify-content: center;
            gap: 1rem;
        }
        
        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.8rem 1.5rem;
          border-radius: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          cursor: pointer;
          flex-shrink: 0;
          white-space: nowrap;
        }
        
        .cta-primary {
          background: #4F46E5;
          color: #FFFFFF;
          box-shadow: 0 8px 25px -5px rgba(79, 70, 229, 0.4), 0 5px 15px -5px rgba(79, 70, 229, 0.2);
        }
        .cta-primary:hover {
           background: #6366F1;
           transform: translateY(-2px);
           box-shadow: 0 12px 30px -5px rgba(79, 70, 229, 0.5), 0 8px 20px -5px rgba(79, 70, 229, 0.3);
        }

        .cta-secondary {
            background-color: transparent;
            color: #9CA3AF;
            border: 1px solid #374151;
        }
        .cta-secondary:hover {
            background-color: rgba(255, 255, 255, 0.1);
            color: #FFFFFF;
            border-color: #9CA3AF;
            transform: translateY(-2px);
        }
        
        /* --- Footer --- */
        .page-footer {
            background-color: rgba(0,0,0,0.1);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding: 3rem 1.5rem;
            position: relative;
            z-index: 1;
        }
        
        .footer-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 2rem;
        }

        @media (min-width: 768px) {
            .footer-container {
                flex-direction: row;
                justify-content: space-between;
                text-align: left;
            }
        }
        
        .footer-brand h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        .footer-brand p {
            color: #9CA3AF;
            font-size: 0.9rem;
        }

        .footer-links {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;
        }

        .footer-links a {
            color: #9CA3AF;
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.3s ease;
        }

        .footer-links a:hover {
            color: #FFFFFF;
        }
        
        .footer-socials {
            display: flex;
            gap: 1rem;
        }

        .footer-socials a {
            color: #9CA3AF;
            transition: color 0.3s ease;
        }
        .footer-socials a:hover {
            color: #FFFFFF;
        }

        /* Responsive Adjustments */
        @media (max-width: 540px) {
            .confirmation-actions {
                flex-direction: column;
            }
            .cta-button {
                width: 100%;
            }
             .confirmation-card {
                padding: 2.5rem 1.5rem;
            }
            .confirmation-card h1 {
                font-size: 2rem;
            }
            .confirmation-card p {
                font-size: 1rem;
            }
        }

         @media (max-width: 1200px){
            
            .cta-button{

                width:200px;
            }

         }
      `}</style>
      <div className="confirmation-page">
        <div className="grid-overlay"></div>
        <main className="main-content">
            <div className="confirmation-container">
                <div className="confirmation-card">
                    <svg className="success-icon" width="88" height="88" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
                        <circle className="circle" cx="44" cy="44" r="42" stroke="#5EEAD4" strokeWidth="4" fill="none" />
                        <polyline className="tick" points="25,44 38,57 63,32" stroke="#5EEAD4" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <h1>Submission Successful!</h1>
                    <p>Your job posting has been received. Our team will review it shortly, and we will begin matching it with qualified candidates from our elite talent pool. You'll receive an email confirmation soon.</p>
                    
                    <div className="confirmation-actions">
                        <a href="#" className="cta-button cta-secondary">
                            <DashboardIcon /> Go to Dashboard
                        </a>
                        <a href="#" className="cta-button cta-primary">
                            <PlusIcon /> Post Another Job
                        </a>
                    </div>
                </div>
            </div>
        </main>
        <footer className="page-footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h3>ThePlacemate</h3>
                    <p>&copy; 2025 TalentLink. All rights reserved.</p>
                </div>
                <div className="footer-links">
                    <a href="#">Partner with Us</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
                <div className="footer-socials">
                    <a href="#"><TwitterIcon /></a>
                    <a href="#"><LinkedinIcon /></a>
                </div>
            </div>
        </footer>
      </div>
    </>
  );
};

export default JobConfirmationPage;

