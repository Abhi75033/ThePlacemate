import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecruitersPage = () => {
  const [openFaq, setOpenFaq] = useState(0); // Initially open the first FAQ


  const navigate = useNavigate()

  // --- Icon SVGs for Value Props ---
  const TalentIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>);
  const ClockIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>);
  const ZapIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>);
  
  // --- Icon SVGs for Talent Pool ---
  const CodeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);
  const DatabaseIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>);
  const CloudIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>);
  const MobileIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>);
  const SecurityIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>);
  const DesignIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>);

  // --- Icon SVGs for Hiring Process ---
  const ShareIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>);
  const MatchIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>);
  const HandshakeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 10.5 18 7c.8-.8.8-2 0-2.8l-2.2-2.2a1.94 1.94 0 0 0-2.8 0L9.5 5.5"/><path d="m11.5 13.5 3-3"/><path d="M9.5 13.5 6 17c-.8.8-.8 2 0 2.8l2.2 2.2a1.94 1.94 0 0 0 2.8 0l3.5-3.5"/><path d="m3 21 6-6"/></svg>);

  const CtaGraphic = () => (
    <svg width="100%" height="100%" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="cta-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="80" fill="none" stroke="url(#cta-grad)" strokeWidth="2" opacity="0.3"/>
      <circle cx="100" cy="100" r="60" fill="rgba(255,255,255,0.05)"/>
      <circle cx="60" cy="70" r="8" fill="url(#cta-grad)"/>
      <circle cx="140" cy="130" r="8" fill="url(#cta-grad)"/>
      <circle cx="150" cy="60" r="5" fill="url(#cta-grad)"/>
      <line x1="65" y1="75" x2="95" y2="95" stroke="url(#cta-grad)" strokeWidth="1.5" opacity="0.7"/>
      <line x1="145" y1="125" x2="105" y2="105" stroke="url(#cta-grad)" strokeWidth="1.5" opacity="0.7"/>
      <line x1="150" y1="65" x2="140" y2="125" stroke="url(#cta-grad)" strokeWidth="1.5" opacity="0.5" strokeDasharray="4"/>
    </svg>
  );

  const talentPool = [
    { icon: <CodeIcon />, title: "Software Development", skills: ["React.js", "Node.js", "Python", "Java", "Go"] },
    { icon: <DatabaseIcon />, title: "Data Science & AI", skills: ["Machine Learning", "TensorFlow", "PyTorch", "Pandas", "NLP"] },
    { icon: <CloudIcon />, title: "Cloud & DevOps", skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"] },
    { icon: <MobileIcon />, title: "Mobile App Development", skills: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)"] },
    { icon: <SecurityIcon />, title: "Cybersecurity", skills: ["Ethical Hacking", "Network Security", "Penetration Testing"] },
    { icon: <DesignIcon />, title: "UI/UX Design", skills: ["Figma", "Adobe XD", "User Research", "Prototyping"] }
  ];

  const hiringProcess = [
      { icon: <ShareIcon/>, title: "Tell Us Your Needs", description: "Share your job description and the key skills you're looking for." },
      { icon: <MatchIcon/>, title: "Get Matched Candidates", description: "Within 48 hours, we provide a shortlist of pre-vetted candidates." },
      { icon: <HandshakeIcon/>, title: "Interview & Hire", description: "Conduct your interviews and hire the best fit, completely free of charge." }
  ];
  
  const partnerTestimonials = [
    { name: 'David Chen', role: 'Engineering Manager, Google', quote: 'The candidates from ThePlacemate are consistently high-quality and well-prepared. It has significantly streamlined our hiring process for junior talent.', image: 'https://placehold.co/150x150/1E3A8A/FFFFFF?text=DC' },
    { name: 'Emily Rodriguez', role: 'Lead Recruiter, Microsoft', quote: 'Partnering with ThePlacemate gives us access to a diverse and skilled talent pool. Their candidates integrate quickly and make an immediate impact.', image: 'https://placehold.co/150x150/4F46E5/FFFFFF?text=ER' },
  ];

  const faqs = [
      { q: "What is the cost to hire from ThePlacemate?", a: "There are zero sourcing fees or upfront costs. You only pay a success fee if you decide to hire one of our candidates, which is a percentage of their annual salary." },
      { q: "How are your candidates vetted?", a: "Our candidates go through a rigorous, multi-stage vetting process that includes technical assessments, live coding challenges, multiple mock interviews, and a portfolio review to ensure they are job-ready." },
      { q: "Can we request candidates with a specific tech stack?", a: "Absolutely. When you share your job requirements, we match you with candidates who have the specific technical skills and experience you're looking for." },
      { q: "What is the typical timeline for hiring a candidate?", a: "We can provide a shortlist of matched candidates within 48-72 hours. From there, the timeline depends on your internal interview process, but our goal is to help you hire much faster than traditional methods." },
  ]

  return (
    <>
      <style>{`
        .recruiters-page { font-family: 'Lexend', sans-serif; color: #1a202c; line-height: 1.6; background-color: #F9FAFB; }
        .recruiters-hero-section { background-color: #FFFFFF; padding: 6rem 2rem; text-align: center; position: relative; overflow: hidden; }
        .recruiters-hero-content { max-width: 900px; margin: 0 auto; position: relative; z-index: 1; }
        .hero-tag { display: inline-block; background-color: #E0E7FF; color: #4F46E5; padding: 0.5rem 1rem; border-radius: 9999px; font-weight: 600; margin-bottom: 1rem; }
        .recruiters-hero-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; margin: 0 0 1rem 0; letter-spacing: -1.5px; line-height: 1.1; color: #111827; }
        .recruiters-hero-title span { background: linear-gradient(90deg, #6D28D9, #4F46E5); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .recruiters-hero-subtitle { font-size: clamp(1.1rem, 2vw, 1.25rem); font-weight: 400; max-width: 700px; margin: 0 auto 2.5rem auto; color: #4B5563; }
        .cta-btn { display: inline-block; padding: 0.8rem 2.5rem; border-radius: 9999px; font-weight: 600; text-decoration: none; transition: all 0.3s ease; background-image: linear-gradient(to right, #6D28D9, #8B5CF6); color: white; border: none; font-size: 1.1rem; }
        .cta-btn:hover { transform: translateY(-3px) scale(1.05); box-shadow: 0 10px 20px rgba(139, 92, 246, 0.2); }
        .value-props-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 4rem; text-align: left; }
        .value-prop-card { background-color: #F9FAFB; padding: 2rem; border-radius: 1.5rem; border: 1px solid #F3F4F6; }
        .value-prop-icon { display: inline-flex; align-items: center; justify-content: center; width: 50px; height: 50px; border-radius: 50%; background-color: #E0E7FF; color: #4F46E5; margin-bottom: 1.5rem; }
        .value-prop-title { font-size: 1.25rem; font-weight: 600; color: #111827; margin: 0 0 0.5rem 0; }
        .value-prop-description { font-size: 1rem; color: #4B5563; }
        .talent-pool-section { padding: 4rem 2rem; background-color: #F9FAFB; }
        .section-header { text-align: center; margin-bottom: 3rem; }
        .section-title { font-size: clamp(2rem, 5vw, 2.5rem); font-weight: 700; color: #111827; margin: 0 0 0.5rem 0; }
        .section-subtitle { font-size: clamp(1rem, 2vw, 1.125rem); color: #4B5563; max-width: 600px; margin: 0 auto; }
        .talent-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; }
        .talent-card { background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 1.5rem; padding: 2rem; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .talent-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px -5px rgba(0,0,0,0.08); }
        .talent-card-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
        .talent-icon { color: #4F46E5; }
        .talent-title { font-size: 1.5rem; font-weight: 600; color: #111827; }
        .talent-skills-list { display: flex; flex-wrap: wrap; gap: 0.75rem; padding-left: 0; list-style: none; margin: 0; }
        .talent-skill-item { background-color: #F3F4F6; color: #374151; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; }
        .hiring-process-section { background-color: #FFFFFF; padding: 4rem 2rem; }
        .process-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; max-width: 1200px; margin: 3rem auto 0 auto; position: relative; }
        .process-card { text-align: center; }
        .process-icon-wrapper { display: flex; justify-content: center; margin-bottom: 1.5rem; }
        .process-icon { display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; border-radius: 50%; background-color: #E0E7FF; color: #4F46E5; }
        .process-title { font-size: 1.25rem; font-weight: 600; color: #111827; margin: 0 0 0.5rem 0; }
        .process-description { font-size: 1rem; color: #4B5563; }
        .process-connector { position: absolute; top: 30px; left: 25%; width: 50%; height: 2px; background-image: linear-gradient(to right, #D1D5DB 50%, transparent 50%); background-size: 10px 2px; z-index: -1; }
        .testimonials-section { background-color: #F9FAFB; padding: 4rem 2rem; }
        .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; }
        .testimonial-card { background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 1.5rem; padding: 2rem; }
        .testimonial-quote { font-size: 1.1rem; font-style: italic; color: #374151; margin: 0 0 1.5rem 0; }
        .testimonial-author { display: flex; align-items: center; gap: 1rem; }
        .author-avatar { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; }
        .author-name { font-weight: 600; color: #111827; }
        .author-role { color: #6B7280; }

        /* --- NEW: FAQ Section --- */
        .faq-recruiter-section { background-color: #FFFFFF; padding: 4rem 2rem; }
        .faq-accordion { max-width: 800px; margin: 3rem auto 0 auto; display: flex; flex-direction: column; gap: 1rem; }
        .faq-item { border: 1px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; cursor: pointer; transition: all 0.3s ease; }
        .faq-item:hover { border-color: #C7D2FE; }
        .faq-question { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
        .faq-question-text { font-size: 1.125rem; font-weight: 600; color: #1F2937; margin: 0; }
        .faq-icon { flex-shrink: 0; transition: transform 0.3s ease-in-out; color: #4F46E5; }
        .faq-icon.active { transform: rotate(45deg); }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease-in-out, margin-top 0.4s ease-in-out; }
        .faq-answer.open { max-height: 200px; margin-top: 1.5rem; }
        .faq-answer p { font-size: 1rem; color: #4B5563; line-height: 1.7; margin: 0; }
        
        .recruiter-cta-section { background-color: #111827; color: white; padding: 5rem 2rem; overflow: hidden; }
        .recruiter-cta-container { display: flex; align-items: center; justify-content: space-between; gap: 3rem; max-width: 1200px; margin: 0 auto; }
        .cta-text-content { text-align: left; max-width: 550px; }
        .recruiter-cta-title { font-size: clamp(2rem, 5vw, 2.5rem); font-weight: 700; margin-bottom: 1rem; }
        .recruiter-cta-text { font-size: clamp(1rem, 2vw, 1.125rem); margin-bottom: 2rem; opacity: 0.8; }
        .recruiter-cta-btn { display: inline-block; padding: 0.8rem 2.5rem; border-radius: 9999px; font-weight: 600; text-decoration: none; transition: all 0.3s ease; background-image: linear-gradient(to right, #6D28D9, #8B5CF6); color: white; border: none; }
        .recruiter-cta-btn:hover { transform: translateY(-3px) scale(1.05); box-shadow: 0 10px 20px rgba(139, 92, 246, 0.2); }
        .cta-visual-content { flex-shrink: 0; width: 250px; height: 250px; }

        @media (max-width: 992px) {
            .process-grid { grid-template-columns: 1fr; gap: 3rem; }
            .process-connector { display: none; }
            .recruiter-cta-container { flex-direction: column; text-align: center; }
            .cta-text-content { text-align: center; }
            .cta-visual-content { display: none; }
        }
        @media (max-width: 768px) {
            .recruiters-hero-section { padding: 5rem 1.5rem; }
            .testimonials-grid { grid-template-columns: 1fr; }
        }

      `}</style>
      <div className="recruiters-page">
        <section className="recruiters-hero-section">
          <div className="recruiters-hero-content">
            <div className="hero-tag">For Hiring Managers</div>
            <h1 className="recruiters-hero-title">
              Hire Top Tech Talent, <span>Faster</span>
            </h1>
            <p className="recruiters-hero-subtitle">
              Stop sorting through endless unqualified resumes. We provide a pipeline of pre-vetted, job-ready candidates trained in the most in-demand tech skills, ready to contribute from day one.
            </p>
            <a href="#" onClick={()=>navigate('/recuriter_dashboard')}  className="cta-btn">Partner With Us</a>
            
            <div className="value-props-grid">
                <div className="value-prop-card">
                    <div className="value-prop-icon"><ZapIcon /></div>
                    <h3 className="value-prop-title">Zero Sourcing Fees</h3>
                    <p className="value-prop-description">Access our talent pool and hire candidates at no upfront cost to your company.</p>
                </div>
                <div className="value-prop-card">
                    <div className="value-prop-icon"><TalentIcon /></div>
                    <h3 className="value-prop-title">Pre-Vetted Candidates</h3>
                    <p className="value-prop-description">Every candidate undergoes rigorous technical and soft-skill assessments.</p>
                </div>
                <div className="value-prop-card">
                    <div className="value-prop-icon"><ClockIcon /></div>
                    <h3 className="value-prop-title">Reduce Hiring Time</h3>
                    <p className="value-prop-description">Cut your hiring timeline in half by interviewing candidates who are ready to perform.</p>
                </div>
            </div>
          </div>
        </section>

        <section className="talent-pool-section">
            <div className="section-header">
                <h2 className="section-title">Explore Our Talent Pool</h2>
                <p className="section-subtitle">Our graduates are proficient in the latest technologies and are ready to tackle your most challenging projects.</p>
            </div>
            <div className="talent-grid">
                {talentPool.map((pool, index) => (
                    <div className="talent-card" key={index}>
                        <div className="talent-card-header">
                            <div className="talent-icon">{pool.icon}</div>
                            <h3 className="talent-title">{pool.title}</h3>
                        </div>
                        <ul className="talent-skills-list">
                            {pool.skills.map((skill, i) => (
                                <li className="talent-skill-item" key={i}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>

        <section className="hiring-process-section">
            <div className="section-header">
                 <h2 className="section-title">Our Simple Hiring Process</h2>
                <p className="section-subtitle">We've streamlined the hiring process to make it as efficient and effective as possible for you.</p>
            </div>
            <div className="process-grid">
                <div className="process-connector"></div>
                {hiringProcess.map((step, index) => (
                    <div className="process-card" key={index}>
                        <div className="process-icon-wrapper"><div className="process-icon">{step.icon}</div></div>
                        <h3 className="process-title">{step.title}</h3>
                        <p className="process-description">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="testimonials-section">
            <div className="section-header">
                <h2 className="section-title">From Our Partners</h2>
                <p className="section-subtitle">Discover why leading companies trust ThePlacemate to find their next generation of tech talent.</p>
            </div>
            <div className="testimonials-grid">
                {partnerTestimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <p className="testimonial-quote">{testimonial.quote}</p>
                        <div className="testimonial-author">
                            <img src={testimonial.image} alt={testimonial.name} className="author-avatar" />
                            <div>
                                <div className="author-name">{testimonial.name}</div>
                                <div className="author-role">{testimonial.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className="faq-recruiter-section">
            <div className="section-header">
                <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
            <div className="faq-accordion">
                {faqs.map((faq, index) => (
                    <div className="faq-item" key={index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                        <div className="faq-question">
                            <p className="faq-question-text">{faq.q}</p>
                            <div className={`faq-icon ${openFaq === index ? 'active' : ''}`}>
                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                        </div>
                        <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                            <p>{faq.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

       

      </div>
    </>
  );
};

export default RecruitersPage;

