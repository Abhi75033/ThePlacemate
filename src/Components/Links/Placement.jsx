import React from 'react';

const PlacementsPage = () => {

  // --- Icon SVGs for Stats ---
  const TargetIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>);
  const BriefcaseIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>);
  const DollarSignIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>);

  // --- Icon SVGs for Process ---
  const TrainingIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>);
  const PortfolioIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>);
  const InterviewIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>);
  const JobAccessIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>);
  const OffersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 12H16c-.7 2-2 4-4 4s-3.3-2-4-4H2.5"/><path d="M16 12a2 2 0 1 1-4 0c0-4 8-3 8-8a2 2 0 1 0-4 0"/><path d="M12 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>);
  const SupportIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>);

  // --- Data & SVG Components ---
  const successStories = [
    { name: 'Priya Sharma', role: 'Software Engineer @ Google', story: '"ThePlacemate transformed my career. The hands-on projects and mock interviews gave me the confidence to crack one of the toughest interviews in the industry."', image: 'https://placehold.co/150x150/8B5CF6/FFFFFF?text=PS' },
    { name: 'Rohan Mehta', role: 'Product Manager @ Microsoft', story: '"The mentorship I received was invaluable. My mentor guided me through every step, from skill-building to salary negotiation. I couldn\'t have done it without them."', image: 'https://placehold.co/150x150/3B82F6/FFFFFF?text=RM' },
    { name: 'Anjali Kapoor', role: 'Data Scientist @ Amazon', story: '"The curriculum is perfectly aligned with what top companies are looking for. I felt completely prepared for the technical rounds and real-world challenges."', image: 'https://placehold.co/150x150/EC4899/FFFFFF?text=AK' }
  ];
  const GoogleLogo = () => (<svg height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.18,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.18,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.18,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1Z"/></svg>);
  const MicrosoftLogo = () => (<svg height="26" viewBox="0 0 26 26" fill="currentColor"><path d="M0 0H12.2V12.2H0V0ZM13.8 0H26V12.2H13.8V0ZM0 13.8H12.2V26H0V13.8ZM13.8 13.8H26V26H13.8V13.8Z"/></svg>);
  const AmazonLogo = () => (<svg height="30" viewBox="0 0 102 31" fill="currentColor"><path d="M57.4 20.3c-1.9-0.8-3.4-1.9-4.5-3.2c-1.1-1.3-1.6-2.9-1.6-4.9c0-2.5 0.9-4.6 2.6-6.4c1.7-1.8 4-2.7 6.8-2.7c2.8 0 5.1 0.9 6.8 2.7c1.7 1.8 2.6 3.9 2.6 6.4c0 2-0.5 3.6-1.6 4.9c-1.1 1.3-2.6 2.3-4.5 3.2l-10.8 4.6V0h11.9v8.9h0.2c1.4-3.1 3.4-5.3 6.1-6.7c2.7-1.4 5.7-2.1 9-2.1c4.5 0 8.1 1.5 10.9 4.6c2.8 3.1 4.2 7 4.2 11.8c0 4.9-1.4 8.9-4.2 12c-2.8 3.1-6.4 4.6-10.9 4.6c-3.3 0-6.3-0.7-9-2.1c-2.7-1.4-4.7-3.6-6.1-6.7h-0.2v10.9H57.4V20.3z M71.6 23c1.5 0 2.8-0.5 3.8-1.5c1-1 1.5-2.3 1.5-3.8c0-1.5-0.5-2.8-1.5-3.8c-1-1-2.3-1.5-3.8-1.5s-2.8 0.5-3.8 1.5c-1 1-1.5 2.3-1.5 3.8c0 1.5 0.5 2.8 1.5 3.8C68.8 22.5 70.1 23 71.6 23z" /><path d="M0 0.1h10.9v20.4h11.3v8.6H0V0.1z M34.1 3.2c-2.6-2.1-5.7-3.2-9.4-3.2c-4.1 0-7.6 1.3-10.5 3.8S9.3 9.7 9.3 13.9c0 3.7 1.2 6.8 3.6 9.3c2.4 2.5 5.5 3.7 9.4 3.7c3.2 0 6-0.8 8.4-2.4l-2.4-7.1c-1.2 0.8-2.5 1.2-4 1.2c-1.9 0-3.4-0.6-4.6-1.7c-1.2-1.1-1.8-2.7-1.8-4.7c0-2 0.6-3.6 1.8-4.7c1.2-1.1 2.7-1.7 4.6-1.7c1.5 0 2.8 0.4 4 1.2L34.1 3.2z" /></svg>);
  const MetaLogo = () => <svg height="28" viewBox="0 0 28 28" fill="currentColor"><path d="M27.5 14C27.5 6.55 21.45 0.5 14 0.5C6.55 0.5 0.5 6.55 0.5 14C0.5 20.7 5.43 26.24 11.75 27.29V17.75H8.25V14H11.75V11.13C11.75 7.66 13.88 5.75 17.02 5.75C18.52 5.75 19.85 5.88 20.25 5.93V9H18.2C16.54 9 16.25 9.92 16.25 11.41V14H20L19.25 17.75H16.25V27.29C22.57 26.24 27.5 20.7 27.5 14Z" /></svg>;
  const NetflixLogo = () => <svg height="28" viewBox="0 0 26 28" fill="currentColor"><path d="M25.1,2.1V27.9H19.2V15.7L12.9,27.9H6.8V2.1H12.7V14.2L19,2.1H25.1Z" /></svg>;
  const hiringPartners = [ { name: 'Google', logo: <GoogleLogo/> }, { name: 'Microsoft', logo: <MicrosoftLogo/> }, { name: 'Amazon', logo: <AmazonLogo/> }, { name: 'Meta', logo: <MetaLogo/> }, { name: 'Netflix', logo: <NetflixLogo/> }, { name: 'Apple', logo: <AmazonLogo/> }, { name: 'Adobe', logo: <GoogleLogo/> }, { name: 'Salesforce', logo: <MicrosoftLogo/> }, ];
  const placementProcess = [ { step: 1, title: "Skill Enhancement & Training", description: "You begin with our industry-vetted curriculum, working on real-world projects to build a strong foundation.", icon: <TrainingIcon /> }, { step: 2, title: "Portfolio & Resume Building", description: "We help you craft a professional, standout resume and a portfolio that showcases your best work to recruiters.", icon: <PortfolioIcon /> }, { step: 3, title: "Mock Interviews & Prep", description: "Face mock interviews with industry experts who provide personalized feedback to boost your confidence.", icon: <InterviewIcon /> }, { step: 4, title: "Exclusive Job Access", description: "Get access to our exclusive portal with job openings from our 500+ hiring partners.", icon: <JobAccessIcon /> }, { step: 5, title: "Interviews & Offers", description: "We schedule your interviews and our team assists you in the negotiation process to secure the best possible offer.", icon: <OffersIcon /> }, { step: 6, title: "Post-Placement Support", description: "Our support continues even after you're hired, with guidance to ensure you excel in your new role.", icon: <SupportIcon /> }, ];

  return (
    <>
      <style>{`
        .placements-page { font-family: 'Lexend', sans-serif; color: #1a202c; line-height: 1.6; background-color: #F9FAFB; }
        .section-container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
        .placements-hero-section { padding: 6rem 2rem; text-align: center; position: relative; color: white; overflow: hidden; background-color: #111827; }
        .placements-hero-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; background: radial-gradient(ellipse at 70% 80%, rgba(109, 40, 217, 0.3), transparent 50%), radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.3), transparent 50%); animation: bg-pulse 10s infinite alternate; }
        @keyframes bg-pulse { 0% { opacity: 0.8; } 100% { opacity: 1; transform: scale(1.05); } }
        .placements-hero-content { position: relative; z-index: 1; max-width: 900px; margin: 0 auto; }
        .placements-hero-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; margin: 0 0 1rem 0; letter-spacing: -1.5px; line-height: 1.1; }
        .placements-hero-title span { background: linear-gradient(90deg, #8B5CF6, #EC4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .placements-hero-subtitle { font-size: clamp(1.1rem, 2vw, 1.25rem); font-weight: 300; max-width: 700px; margin: 0 auto 3rem auto; opacity: 0.8; }
        .stats-bar { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; max-width: 900px; margin: 3rem auto 0 auto; padding: 2rem; background-color: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border-radius: 1.5rem; border: 1px solid rgba(255, 255, 255, 0.1); }
        .stat-item { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
        .stat-icon { color: #A78BFA; }
        .stat-value { font-size: 2.25rem; font-weight: 700; }
        .stat-label { font-size: 1rem; opacity: 0.8; }
        .hiring-partners-section { background-color: #FFFFFF; padding: 4rem 0; }
        .hiring-partners-title { font-size: 2.5rem; font-weight: 700; color: #111827; text-align: center; margin-bottom: 3rem; }
        .logo-marquee { width: 100%; overflow: hidden; position: relative; -webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent); mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent); }
        .logo-track { display: flex; width: fit-content; animation: scroll 40s linear infinite; }
        .logo-marquee:hover .logo-track { animation-play-state: paused; }
        .logo-item { display: flex; align-items: center; justify-content: center; padding: 0 2.5rem; }
        .logo-item svg { fill: #A0AEC0; transition: fill 0.3s ease; }
        .logo-item:hover svg { fill: #111827; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .success-stories-section { background-color: #FFFFFF; }
        .section-title { font-size: 2.5rem; font-weight: 700; color: #111827; text-align: center; margin-bottom: 1rem; }
        .section-subtitle { font-size: 1.125rem; color: #4B5563; text-align: center; max-width: 600px; margin: 0 auto 3.5rem auto; }
        .stories-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .story-card { background-color: #F9FAFB; border: 1px solid #F3F4F6; border-radius: 1.5rem; padding: 2rem; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .story-card:hover { transform: translateY(-8px); box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.08); }
        .story-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
        .story-avatar { width: 60px; height: 60px; border-radius: 50%; object-fit: cover; }
        .story-name { font-size: 1.25rem; font-weight: 600; color: #111827; }
        .story-role { font-size: 0.95rem; color: #4F46E5; }
        .story-quote { font-size: 1rem; color: #4B5563; line-height: 1.7; border-left: 3px solid #D1D5DB; padding-left: 1.5rem; margin: 0; }
        .placement-process-section { background-color: #F9FAFB; }
        .process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; position: relative; }
        .process-card { background-color: #FFFFFF; border: 1px solid #F3F4F6; border-radius: 1.5rem; padding: 2rem; position: relative; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .process-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px -5px rgba(0,0,0,0.06); }
        .process-step-number { position: absolute; top: 1.5rem; right: 1.5rem; font-size: 3rem; font-weight: 800; color: #F3F4F6; }
        .process-icon { display: inline-flex; align-items: center; justify-content: center; width: 50px; height: 50px; border-radius: 50%; background-color: #E0E7FF; color: #4F46E5; margin-bottom: 1.5rem; }
        .process-title { font-size: 1.25rem; font-weight: 600; color: #111827; margin: 0 0 0.5rem 0; }
        .process-description { font-size: 1rem; color: #4B5563; line-height: 1.7; }

        @media (max-width: 992px) {
            .process-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
        }

        @media (max-width: 768px) {
            .placements-hero-section { padding: 5rem 1.5rem; }
            .stats-bar { grid-template-columns: 1fr; gap: 2rem; }
            .hiring-partners-title, .section-title { font-size: 2rem; }
            .section-subtitle { font-size: 1rem; }
        }
      `}</style>
      <div className="placements-page">
        <section className="placements-hero-section">
          <div className="placements-hero-bg"></div>
          <div className="placements-hero-content">
            <h1 className="placements-hero-title">
              Launch Your Dream Career with <span>ThePlacemate</span>
            </h1>
            <p className="placements-hero-subtitle">
              We're not just a training institute; we are your dedicated career partner. Our mission is to bridge the gap between your skills and top-tier job opportunities with leading companies worldwide.
            </p>
            <div className="stats-bar">
                <div className="stat-item">
                    <div className="stat-icon"><TargetIcon/></div>
                    <div className="stat-value">95%</div>
                    <div className="stat-label">Placement Rate</div>
                </div>
                 <div className="stat-item">
                    <div className="stat-icon"><BriefcaseIcon/></div>
                    <div className="stat-value">500+</div>
                    <div className="stat-label">Hiring Partners</div>
                </div>
                 <div className="stat-item">
                    <div className="stat-icon"><DollarSignIcon/></div>
                    <div className="stat-value">₹7 LPA</div>
                    <div className="stat-label">Average Package</div>
                </div>
            </div>
          </div>
        </section>

        <section className="hiring-partners-section">
            <h2 className="hiring-partners-title">Our Top Hiring Partners</h2>
            <div className="logo-marquee">
                <div className="logo-track">
                    {[...hiringPartners, ...hiringPartners].map((partner, index) => (
                        <div className="logo-item" key={index}>
                            {partner.logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="success-stories-section section-container">
            <h2 className="section-title">Hear From Our Achievers</h2>
            <p className="section-subtitle">
                Our greatest success is the success of our students. Read about their journey from aspiring learners to accomplished professionals at top companies.
            </p>
            <div className="stories-grid">
                {successStories.map((story, index) => (
                    <div className="story-card" key={index}>
                        <div className="story-header">
                            <img src={story.image} alt={story.name} className="story-avatar" />
                            <div>
                                <h3 className="story-name">{story.name}</h3>
                                <p className="story-role">{story.role}</p>
                            </div>
                        </div>
                        <p className="story-quote">{story.story}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="placement-process-section section-container">
            <h2 className="section-title">Our Placement Process</h2>
            <p className="section-subtitle">
                We provide a clear, structured path from day one of your training to the day you receive your offer letter—and beyond.
            </p>
            <div className="process-grid">
                {placementProcess.map((item) => (
                    <div className="process-card" key={item.step}>
                        <div className="process-step-number">0{item.step}</div>
                        <div className="process-icon">{item.icon}</div>
                        <h3 className="process-title">{item.title}</h3>
                        <p className="process-description">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
       
      </div>
    </>
  );
};

export default PlacementsPage;

