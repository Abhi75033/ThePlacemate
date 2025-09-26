import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingHeader = () => {
  const navigate = useNavigate()
    // Icon component for "How It Works"
    const handle_submit =()=>{
      navigate('/find_mentor')
    }
    const StepIcon = ({ name }) => {
        const icons = {
            search: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
            calendar: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
            connect: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="14"></line><polyline points="4 14 12 22 20 14"></polyline></svg>,
        };
        return icons[name] || null;
    };

    // Icon component for "Why Mentors Stand Out"
    const BenefitIcon = ({ name }) => {
        const icons = {
            experts: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
            personalized: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
            network: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
            vetted: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>,
        };
        return icons[name] || null;
    }

    const steps = [
        {
          icon: 'search',
          title: 'Find Your Mentor',
          description: 'Browse profiles, filter by expertise, and select the mentor who best fits your career goals.',
          action: handle_submit()
          
        },
        {
          icon: 'calendar',
          title: 'Schedule Your Session',
          description: 'View your mentor\'s availability in their calendar and book a time slot that works perfectly for you.'
        },
        {
          icon: 'connect',
          title: 'Start Learning',
          description: 'Connect with your mentor for a 1-on-1 video session and get the personalized guidance you need to succeed.'
        }
    ];

    const benefits = [
        {
            icon: 'experts',
            title: 'Real-World Experts',
            description: 'Learn from professionals currently working at leading tech companies, not just career coaches.'
        },
        {
            icon: 'personalized',
            title: 'Personalized Guidance',
            description: 'Receive advice and a career plan that is tailored specifically to your unique skills and aspirations.'
        },
        {
            icon: 'network',
            title: 'Exclusive Network',
            description: 'Gain insights and potential referrals from mentors with extensive professional connections.'
        },
        {
            icon: 'vetted',
            title: 'Vetted & Trained',
            description: 'Every mentor is carefully selected for their expertise, experience, and passion for teaching.'
        }
    ];

  return (
    <>
      <style>{`
        /* Global Font */
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');

        /* Hero Section */
        .booking-hero-section {
          font-family: 'Lexend', sans-serif;
          background-color: #F9FAFB;
          padding: clamp(3rem, 10vw, 6rem) clamp(1.5rem, 5vw, 4rem);
        }
        .booking-hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
        }
        .hero-content { flex: 1; max-width: 550px; }
        .hero-content h1 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          color: #111827;
          line-height: 1.2;
          margin: 0 0 1rem 0;
        }
        .hero-content h1 span {
          background: linear-gradient(90deg, #6d28d9, #4f46e5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-content p {
          font-size: 1.125rem;
          color: #4B5563;
          line-height: 1.7;
          margin: 0 0 2rem 0;
        }
        .hero-cta-button {
          display: inline-block;
          background: linear-gradient(90deg, #4f46e5, #6d28d9);
          color: white;
          padding: 0.875rem 2rem;
          border-radius: 9999px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px -2px rgba(79, 70, 229, 0.4);
        }
        .hero-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px -2px rgba(79, 70, 229, 0.5);
        }
        .hero-image-wrapper { flex: 1; display: flex; justify-content: center; align-items: center; }
        .hero-image {
          width: 100%;
          max-width: 500px;
          height: auto;
          border-radius: 1.5rem;
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15);
          object-fit: cover;
        }
        
        /* How It Works Section */
        .how-it-works-section {
          font-family: 'Lexend', sans-serif;
          background-color: #F9FAFB;
          padding: clamp(3rem, 10vw, 6rem) clamp(1.5rem, 5vw, 4rem);
        }
        .how-it-works-container { max-width: 1200px; margin: 0 auto; text-align: center; }
        .how-it-works-header h2 { font-size: clamp(2rem, 5vw, 2.75rem); font-weight: 800; color: #111827; margin: 0; }
        .how-it-works-header p { font-size: 1.125rem; color: #4B5563; line-height: 1.6; margin: 1rem auto 0; max-width: 600px; }
        .steps-container { display: flex; justify-content: space-between; gap: 2rem; margin-top: 4rem; position: relative; }
        .steps-container::before {
          content: '';
          position: absolute;
          top: 40px;
          left: 15%;
          right: 15%;
          height: 2px;
          background-image: linear-gradient(to right, #D1D5DB 50%, transparent 50%);
          background-size: 16px 2px;
          background-repeat: repeat-x;
          z-index: 0;
        }
        .step-card {
          flex: 1;
          background-color: white;
          border-radius: 1.5rem;
          padding: 2rem;
          border: 1px solid #F3F4F6;
          box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.04);
          position: relative;
          z-index: 1;
        }
        .step-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #E0E7FF, #C7D2FE);
          color: #4338CA;
          margin: -4rem auto 1.5rem;
          border: 6px solid #F9FAFB;
        }
        .step-icon-wrapper svg { width: 32px; height: 32px; }
        .step-card h3 { font-size: 1.5rem; font-weight: 700; color: #111827; margin: 0 0 0.75rem 0; }
        .step-card p { font-size: 1rem; color: #4B5563; line-height: 1.6; margin: 0; }
        
        /* --- NEW SECTION: Why Mentors Stand Out --- */
        .why-stand-out-section {
          font-family: 'Lexend', sans-serif;
          background-color: #ffffff;
          padding: clamp(3rem, 10vw, 6rem) clamp(1.5rem, 5vw, 4rem);
        }
        .why-stand-out-container { max-width: 1200px; margin: 0 auto; text-align: center; }
        .why-stand-out-header h2 { font-size: clamp(2rem, 5vw, 2.75rem); font-weight: 800; color: #111827; margin: 0; }
        .why-stand-out-header p { font-size: 1.125rem; color: #4B5563; line-height: 1.6; margin: 1rem auto 3rem; max-width: 700px; }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          text-align: left;
        }
        .benefit-card {
          background-color: #F9FAFB;
          border-radius: 1.5rem;
          padding: 2rem;
          border: 1px solid #F3F4F6;
        }
        .benefit-icon {
          width: 50px;
          height: 50px;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #E0E7FF;
          color: #4338CA;
          margin-bottom: 1.5rem;
        }
        .benefit-icon svg { width: 24px; height: 24px; }
        .benefit-card h3 { font-size: 1.25rem; font-weight: 700; color: #111827; margin: 0 0 0.5rem 0; }
        .benefit-card p { font-size: 1rem; color: #4B5563; line-height: 1.6; margin: 0; }


        /* Responsive Styles */
        @media (max-width: 992px) {
          .booking-hero-container { flex-direction: column; text-align: center; }
          .hero-image-wrapper { margin-top: 2rem; }
          .steps-container { flex-direction: column; align-items: center; gap: 4rem; }
          .steps-container::before { display: none; }
          .step-card { max-width: 400px; width: 100%; }
        }
      `}</style>
      
      {/* Hero Section */}
      <section className="booking-hero-section">
        <div className="booking-hero-container">
          <div className="hero-content">
            <h1>
              Unlock Your Potential with <span>1-on-1 Mentorship</span>
            </h1>
            <p>
              Connect with seasoned industry experts who are dedicated to guiding you. Get personalized advice, build a career roadmap, and gain the confidence to land your dream job.
            </p>
            <a href="#find-mentor" className="hero-cta-button">
              Find Your Mentor
            </a>
          </div>
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
              alt="Mentor helping a student in a modern office"
              className="hero-image"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/500x350/E0E7FF/4338CA?text=Mentorship'; }}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <div className="how-it-works-header">
            <h2>How It Works</h2>
            <p>Get started with your personalized mentorship in just a few simple steps.</p>
          </div>
          <div className="steps-container">
            {steps.map((step, index) => (
              <div className="step-card" key={index}>
                <div className="step-icon-wrapper">
                  <StepIcon name={step.icon} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW "Why Our Mentors Stand Out" SECTION --- */}
      <section className="why-stand-out-section">
          <div className="why-stand-out-container">
              <div className="why-stand-out-header">
                  <h2>Why Our Mentors Stand Out</h2>
                  <p>We've curated a network of top-tier professionals committed to your success. Here’s what makes them different.</p>
              </div>
              <div className="benefits-grid">
                  {benefits.map((benefit, index) => (
                      <div className="benefit-card" key={index}>
                          <div className="benefit-icon">
                            <BenefitIcon name={benefit.icon} />
                          </div>
                          <h3>{benefit.title}</h3>
                          <p>{benefit.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </>
  );
};

export default BookingHeader;

