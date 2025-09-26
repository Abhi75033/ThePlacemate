import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// A simple SVG icon component to avoid repeating SVG code
const Icon = ({ name }) => {
  const icons = {
    // Service Icons
    guidance: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19.34 19.34 3.34"/><path d="m14 10 6 6"/><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z"/></svg>,
    portfolio: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>,
    training: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10v6"/><path d="M12 2a5 5 0 0 0-5 5v1.5a1.5 1.5 0 0 1-3 0V10a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.5a1.5 1.5 0 0 1 3 0V17a5 5 0 0 0 5 5h0a5 5 0 0 0 5-5v-1.5a1.5 1.5 0 0 1 3 0V16a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1.5a1.5 1.5 0 0 1-3 0V8a5 5 0 0 0-5-5Z"/></svg>,
    interview: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>,
    webinars: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    projects: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 12-1.25-2.5L8.5 8.25 10 7l.54.54"/><path d="M14.59 13.51a5 5 0 0 1-6.1-6.1l.3-.61L10 7l.54.54 1.25 1.25.61-.3 1.25-2.5L12 4l-1-1-1 1-1 1-1 1 2 2 1 1-2 2-1 1-1 1-1 1 2 2 1 1 .5.5.5.5h.5l.5-.5.5-.5.5-.5.5-.5Z"/><path d="M16 14h.5l.5.5.5.5.5.5.5.5.5.5v.5l-.5.5-.5.5-.5.5-.5.5-2 2-1-1-1-1-1-1-1-1-2-2 1-1 1-1 1-1 1-1 2-2 .61-.3 1.25 1.25L13.51 14.59l.61.3 2.5-1.25L17 12l-1-1-1 1-1 1Z"/></svg>,
    support: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h.01"/><path d="M11 11h.01"/><path d="M14 14h.01"/><path d="M18.32 7.32a9.53 9.53 0 0 1 0 9.36"/><path d="M7.32 18.32a9.53 9.53 0 0 1-5-4.68A9.53 9.53 0 0 1 7.32 4.32"/><path d="M13.68 18.32a9.53 9.53 0 0 1-9.36 0"/><path d="m19 15-5-5"/><path d="m19 10 1 1"/><path d="m13 16 1 1"/></svg>,
    postSupport: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="m9 12 2 2 4-4"/></svg>,
    bookMentor: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M12 14v4"></path><path d="M10 16h4"></path></svg>,
    bookInterview: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"></path><rect x="2" y="6" width="14" height="12" rx="2" ry="2"></rect></svg>,
    // Trusted Icons
    verified: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
    success: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
    transparent: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>,
    // Mentors Icons
    experts: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    oneOnOne: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>,
    roadmap: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>,
    // Placements Icons
    network: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
    dedicatedSupport: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
    highRate: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>,
  };
  return icons[name] || null;
};

const WhyWeChoose = () => {
  const [activeFilter, setActiveFilter] = useState('Explore services');
  const navigate = useNavigate()
  const filters = ['Trusted', 'Mentors', 'Placements', 'Explore services'];

  // --- HANDLER FUNCTIONS ---
  const handleBookMentorClick = () => {
    
    navigate('/book_mentor')
    
  };

  const handleclick_mock =()=>{
    navigate('/book_mock_interview')
  }

  const handleResume = ()=>{
    navigate('/reseume_temp')
  }

  const handleBookInterviewClick = () => {
    console.log('Navigate to Mock Interview Booking Page...');
     // e.g., window.location.href = '/book-interview';
  };
  
  const content = {
    'Explore services': [
      { 
        icon: 'bookMentor', 
        title: 'Book 1:1 Mentor', 
        description: 'Schedule dedicated sessions with mentors for personalized guidance.', 
        buttonText: 'Book Now',
        action: handleBookMentorClick // Assigning the handler function
      },
      { 
        icon: 'bookInterview', 
        title: 'Book Mock Interview', 
        description: 'Practice your interview skills in a simulated environment.', 
        buttonText: 'Book Now',
        action: handleclick_mock // Assigning the handler function
      },
     { 
  icon: 'bookInterview', 
  title: 'Build ATS Friendly Resume', 
  description: 'Craft a resume that passes ATS filters and grabs recruiters’ attention instantly.', 
  buttonText: 'Book Now',
  action: handleResume // Assigning the handler function
},
      { icon: 'guidance', title: 'Career Guidance & Counseling', description: 'Personalized plans and one-on-one counselor sessions.' },
      { icon: 'portfolio', title: 'Resume & Portfolio Building', description: 'Tailored resumes and portfolios that get noticed.' },
      { icon: 'training', title: 'Skill Development & Training', description: 'Practical courses and projects to build job-ready skills.' },
      { icon: 'interview', title: 'Interview Preparation', description: 'Mock interviews and feedback from industry experts.' },
      { icon: 'webinars', title: 'Workshops & Webinars', description: 'Live sessions with recruiters and hiring managers.' },
      { icon: 'projects', title: 'Internships & Live Projects', description: 'Real-world projects and internship placements.' },
      { icon: 'support', title: 'Job Placement Support', description: 'Employer introductions, referrals, and application guidance.' },
      { icon: 'postSupport', title: 'Post-Placement Support', description: 'Onboarding help and career progression guidance.' },
    ],
    'Trusted': [
      { icon: 'verified', title: 'Verified Company Network', description: 'We partner with over 500+ verified companies, from startups to MNCs.' },
      { icon: 'success', title: 'Proven Success Stories', description: 'Our alumni work at top companies like Google, Microsoft, and Amazon.' },
      { icon: 'transparent', title: 'Transparent Process', description: 'No hidden fees. Our ISA model means we only succeed when you do.' },
    ],
    'Mentors': [
      { icon: 'experts', title: 'Learn from Industry Experts', description: 'Our mentors are professionals from top companies with years of experience.' },
      { icon: 'oneOnOne', title: '1-on-1 Mentorship Sessions', description: 'Get personalized feedback and guidance tailored to your specific career goals.' },
      { icon: 'roadmap', title: 'Personalized Career Roadmaps', description: 'Work with your mentor to build a step-by-step plan for your dream job.' },
    ],
    'Placements': [
      { icon: 'network', title: 'Access to Top Companies', description: 'Our extensive network gives you exclusive access to job opportunities.' },
      { icon: 'dedicatedSupport', title: 'Dedicated Placement Support', description: 'Our team works tirelessly to match you with the right role.' },
      { icon: 'highRate', title: 'High Placement Success Rate', description: 'We have a 95% placement rate for students who complete our programs.' },
    ]
  };

  const [currentServices, setCurrentServices] = useState(content['Explore services']);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setCurrentServices(content[activeFilter]);
      setIsAnimating(false);
    }, 300); // Should match the animation duration

    return () => clearTimeout(timer);
  }, [activeFilter]);

  return (
    <>
      <style>{`
        .why-choose-us-section {
          background-color: #F9FAFB;
          padding: clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem);
          font-family: 'Lexend', sans-serif;
          position: relative;
        }
        .why-choose-us-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .header-text {
          max-width: 500px;
        }
        .header-text h2 {
          font-size: clamp(2rem, 5vw, 2.75rem);
          font-weight: 800;
          color: #111827;
          margin: 0;
        }
        .header-text h2 span {
          background: linear-gradient(90deg, #6d28d9, #4f46e5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .header-text p {
          font-size: 1.125rem;
          color: #4B5563;
          line-height: 1.6;
          margin-top: 1rem;
        }
        .filter-buttons {
          display: flex;
          gap: 0.5rem;
          background-color: #E5E7EB;
          border-radius: 9999px;
          padding: 0.5rem;
          flex-shrink: 0;
        }
        .filter-btn {
          padding: 0.6rem 1.25rem;
          border: none;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          background-color: transparent;
          color: #374151;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .filter-btn.active, .filter-btn:hover {
          background-color: white;
          color: #1E3A8A;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          transition: opacity 0.3s ease;
        }
        .services-grid.animating {
            opacity: 0;
        }
        .service-card {
          background-color: white;
          padding: 2rem;
          border-radius: 1.5rem;
          border: 1px solid #F3F4F6;
          box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.08);
        }
        .card-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #E0E7FF, #C7D2FE);
          color: #4338CA;
          margin-bottom: 1.5rem;
        }
        .service-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #111827;
          margin: 0 0 0.5rem 0;
        }
        .service-card p {
          font-size: 1rem;
          color: #4B5563;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
          flex-grow: 1;
        }
        .learn-more-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: #4338CA;
          text-decoration: none;
          transition: color 0.3s ease;
          margin-top: auto;
        }
        .learn-more-link:hover {
          color: #6D28D9;
        }
        .book-now-btn {
          display: inline-block;
          background: linear-gradient(90deg, #4f46e5, #6d28d9);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px -2px rgba(79, 70, 229, 0.4);
          margin-top: auto;
          cursor: pointer;
        }
        .book-now-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px -2px rgba(79, 70, 229, 0.5);
        }
        
        @media (max-width: 992px) {
          .section-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
        @media (max-width: 768px) {
            .filter-buttons-container {
                width: 100%;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
                padding-bottom: 1rem;
            }
            .filter-buttons-container::-webkit-scrollbar {
                display: none;
            }
            .filter-buttons {
                flex-wrap: nowrap;
                justify-content: flex-start;
                padding-left: clamp(1rem, 5vw, 3rem);
                padding-right: clamp(1rem, 5vw, 3rem);
                width: max-content;
            }
        }
        @media (max-width: 576px) {
            .header-text p { font-size: 1rem; }
            .services-grid { grid-template-columns: 1fr; }
            .service-card { padding: 1.5rem; }
        }
      `}</style>
      <section className="why-choose-us-section">
        <div className="why-choose-us-container">
          <div className="section-header">
            <div className="header-text">
              <h2>Why choose <span>ThePlacemate?</span></h2>
              <p>A joined approach combining expertise, hands-on experience and employer connections to turn talent into placements. Here's what sets us apart.</p>
            </div>
            <div className="filter-buttons-container">
                <div className="filter-buttons">
                  {filters.map(filter => (
                    <button 
                      key={filter}
                      className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
            </div>
          </div>

          <div className={`services-grid ${isAnimating ? 'animating' : ''}`}>
            {currentServices.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="card-icon">
                  <Icon name={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.buttonText && service.action ? (
                  <a 
                    href="#!" 
                    className="book-now-btn" 
                    onClick={(e) => {
                      e.preventDefault();
                      service.action();
                    }}
                  >
                    {service.buttonText}
                  </a>
                ) : (
                  <a href="#!" className="learn-more-link">Learn more</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyWeChoose;
