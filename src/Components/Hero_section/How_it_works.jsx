import React from 'react';

// Self-contained SVG icons for each step
const StepIcon = ({ step }) => {
  const icons = {
    1: ( // Compass for Counseling
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
    ),
    2: ( // Layers for Skill Development
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
    ),
    3: ( // Briefcase for Projects
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
    ),
    4: ( // Award for Interview Prep
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline></svg>
    ),
    5: ( // Rocket for Placement
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.1S5.21 15.24 4.5 16.5z"></path><path d="M19.5 4.5c1.5-1.26 2-5 2-5s-3.74.5-5 2c-.71.84-.7 2.3-.05 3.1s2.31.79 3.05-.05z"></path><path d="M16 8l-1.5 1.5"></path><path d="M13 11l-1.5 1.5"></path><path d="M10 14l-1.5 1.5"></path><path d="M7 17l-1.5 1.5"></path><path d="M22 2l-5 5"></path><path d="M2 22l5-5"></path></svg>
    ),
  };
  return <div className="step-icon-wrapper">{icons[step]}</div>;
};

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: 'Career Counseling & Assessment',
      description: 'We start with a deep dive into your skills, interests, and career goals to create a personalized roadmap.',
    },
    {
      step: 2,
      title: 'Personalized Skill Development',
      description: 'Engage in practical courses and workshops designed to build a strong portfolio and job-ready skills.',
    },
    {
      step: 3,
      title: 'Placement-Driven Projects',
      description: 'Apply your new skills to industry-relevant projects that solve real-world problems, making your portfolio stand out.',
    },
    {
      step: 4,
      title: 'Resume & Interview Prep',
      description: 'Our experts help you craft a standout resume. Ace interviews with mock sessions and AI-powered preparation tools.',
    },
    {
      step: 5,
      title: 'Placements & Onboarding',
      description: 'Get exclusive access to our network of hiring partners and receive support throughout your onboarding process.',
    },
  ];

  return (
    <>
      <style>{`
        .how-it-works-section {
          background-color: #FFFFFF;
          padding: clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        .how-it-works-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .how-it-works-title {
          font-size: clamp(2rem, 5vw, 2.75rem);
          font-weight: 800;
          color: #111827;
          margin: 0 0 0.5rem 0;
        }
        .how-it-works-subtitle {
          font-size: 1.125rem;
          color: #4B5563;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto 4rem auto;
        }
        .timeline {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
        }
        /* The connecting line */
        .timeline::before {
            content: '';
            position: absolute;
            top: 30px; /* Aligns with the center of the icon circle */
            left: 5%;
            width: 90%;
            height: 2px;
            background-color: #E5E7EB; /* Light grey line */
            z-index: 1;
        }
        .timeline-step {
          position: relative;
          text-align: left;
          z-index: 2; /* Ensures steps are above the line */
        }
        .step-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #FFFFFF;
          border: 2px solid #E5E7EB;
          margin-bottom: 1.5rem;
          color: #60A5FA; /* Blue icon color */
          transition: all 0.3s ease;
        }
        .timeline-step:hover .step-icon-wrapper {
            background-color: #60A5FA;
            color: #FFFFFF;
            border-color: #60A5FA;
            transform: scale(1.1);
        }
        .step-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1F2937;
          margin: 0 0 0.75rem 0;
        }
        .step-description {
          font-size: 1rem;
          color: #4B5563;
          line-height: 1.6;
        }

        /* --- Responsive Design --- */
        @media (max-width: 1024px) {
            .timeline {
                grid-template-columns: repeat(3, 1fr);
                gap: 3rem 2rem;
            }
            .timeline::before {
                display: none; /* Hide horizontal line on tablets */
            }
        }

        @media (max-width: 768px) {
            .timeline {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 500px) {
            .timeline {
                grid-template-columns: 1fr;
                gap: 3rem;
            }
            .timeline-step {
                text-align: center;
            }
            .step-icon-wrapper {
                margin-left: auto;
                margin-right: auto;
            }
        }
      `}</style>
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <h2 className="how-it-works-title">Your Journey to Placement</h2>
          <p className="how-it-works-subtitle">
            We provide a clear and structured path to help you achieve your career goals. Here’s how we turn your potential into a profession.
          </p>
          <div className="timeline">
            {steps.map((item) => (
              <div className="timeline-step" key={item.step}>
                <StepIcon step={item.step} />
                <h3 className="step-title">{item.title}</h3>
                <p className="step-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;