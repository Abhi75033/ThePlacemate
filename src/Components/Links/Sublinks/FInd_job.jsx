import React from 'react';

// --- SVG Icons ---
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const ExclusiveIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
);

const FastTrackIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 12H3m12-4H3m9-4H3"></path>
        <path d="M21 12l-4-4l4-4"></path>
    </svg>
);

const GrowthIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

// --- Icons for How It Works Section ---
const ProfileIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
    </svg>
);
const MatchIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"/><path d="M22 12h-4"/><path d="M6 12H2"/><path d="M12 6V2"/><path d="M12 22v-4"/>
    </svg>
);
const HireIcon = () => (
     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
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
const CandidatePage = () => {
  
  const featuredJobs = [
    {
        logo: "https://placehold.co/50x50/1F2937/FFFFFF?text=NX",
        title: "Senior Frontend Engineer",
        company: "Nexus Innovations",
        location: "San Francisco, CA",
        tags: ["Remote", "TypeScript", "React"]
    },
    {
        logo: "https://placehold.co/50x50/1F2937/FFFFFF?text=DT",
        title: "Lead Backend Developer",
        company: "DataTech Solutions",
        location: "New York, NY",
        tags: ["On-site", "Python", "AWS"]
    },
    {
        logo: "https://placehold.co/50x50/1F2937/FFFFFF?text=QI",
        title: "Machine Learning Engineer",
        company: "Quantum Intelligence",
        location: "Boston, MA",
        tags: ["Hybrid", "PyTorch", "AI"]
    },
     {
        logo: "https://placehold.co/50x50/1F2937/FFFFFF?text=CD",
        title: "Cloud DevOps Engineer",
        company: "CyberDynamics",
        location: "Austin, TX",
        tags: ["Remote", "Kubernetes", "CI/CD"]
    },
  ];

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

        .candidate-page-container {
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

        .hero-section {
          padding: 8rem 1.5rem 6rem 1.5rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          z-index: 0;
          width: 500px;
          height: 500px;
          background: rgba(139, 92, 246, 0.2);
          bottom: -150px;
          left: -200px;
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
          text-align: center;
        }

        @media (min-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr 1fr;
            text-align: left;
          }
        }

        .hero-content {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .hero-title {
          font-size: 3.75rem;
          font-weight: 800;
          line-height: 1.15;
          color: #FFFFFF;
          margin-bottom: 1.5rem;
        }
        
        .hero-title .highlight {
          background: -webkit-linear-gradient(45deg, #A5B4FC, #5EEAD4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.125rem;
          color: #D1D5DB;
          line-height: 1.7;
          max-width: 550px;
          margin-bottom: 2.5rem;
          margin-left: auto;
          margin-right: auto;
        }
        
        @media (min-width: 1024px) {
            .hero-subtitle {
                margin-left: 0;
                margin-right: 0;
            }
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
           background: #6366F1;
           box-shadow: 0 12px 30px -5px rgba(79, 70, 229, 0.5), 0 8px 20px -5px rgba(79, 70, 229, 0.3);
        }

        .hero-image-container {
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
          position: relative;
        }
        
        .hero-image {
          width: 100%;
          max-width: 500px;
          height: auto;
          border-radius: 1.5rem;
          display: block;
        }

        .search-bar-wrapper {
            margin-top: 3rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        @media (min-width: 1024px) {
            .search-bar-wrapper {
                margin-left: 0;
                margin-right: 0;
            }
        }

        .search-bar {
            display: flex;
            background: rgba(0, 0, 0, 0.2);
            border: 1px solid #374151;
            border-radius: 0.75rem;
            padding: 0.5rem;
            backdrop-filter: blur(10px);
        }

        .search-input {
            flex-grow: 1;
            background: transparent;
            border: none;
            outline: none;
            color: white;
            font-size: 1rem;
            padding: 0.5rem 1rem;
        }
        .search-input::placeholder {
            color: #6B7280;
        }

        .search-button {
            background: #4F46E5;
            color: white;
            border: none;
            border-radius: 0.5rem;
            padding: 0.75rem 1.25rem;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: background-color 0.3s ease;
        }
        .search-button:hover {
            background: #6366F1;
        }
        
        /* --- Shared Section Styles --- */
        .page-section {
          padding: 6rem 1.5rem;
          position: relative;
          z-index: 1;
        }

        .section-title {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
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

        /* --- Why Join Section --- */
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
          background: linear-gradient(45deg, #4338CA, #5EEAD4);
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
        
        /* --- Featured Jobs Section --- */
        #featured-jobs {
            background-color: rgba(0,0,0,0.1);
        }

        .jobs-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
        }
        
        .job-card {
            background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
            padding: 1.5rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
            opacity: 0;
            animation: fadeInUp 0.8s ease-out forwards;
        }
        .job-card:nth-child(1) { animation-delay: 0.2s; }
        .job-card:nth-child(2) { animation-delay: 0.4s; }
        .job-card:nth-child(3) { animation-delay: 0.6s; }
        .job-card:nth-child(4) { animation-delay: 0.8s; }
        
        .job-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .job-card-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
        }
        
        .job-card-logo {
            width: 50px;
            height: 50px;
            border-radius: 0.5rem;
            background-color: #1F2937;
            display:flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .job-card-logo img {
            width: 100%;
            height: 100%;
            border-radius: 0.5rem;
        }
        
        .job-card-title-group {
            flex-grow: 1;
        }
        
        .job-card-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: #FFFFFF;
        }

        .job-card-company {
            font-size: 0.9rem;
            color: #9CA3AF;
        }
        
        .job-card-location {
            font-size: 0.9rem;
            color: #9CA3AF;
            margin-top: auto;
            padding-top: 1rem;
        }

        .job-card-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 1rem;
        }

        .job-card-tag {
            background-color: rgba(94, 234, 212, 0.1);
            color: #5EEAD4;
            font-size: 0.75rem;
            font-weight: 500;
            padding: 0.25rem 0.75rem;
            border-radius: 999px;
        }

        .job-card-footer {
            margin-top: 1.5rem;
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
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
        
         /* --- Footer --- */
        .page-footer {
            background-color: rgba(0,0,0,0.1);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding: 3rem 1.5rem;
            position: relative;
            z-index: 1;
        }
        
        .footer-container {
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
        
        @media (max-width: 768px) {
            .hero-title, .section-title h2 {
                font-size: 2.75rem;
            }
            .hero-section, .page-section {
                padding: 6rem 1.5rem;
            }
             .cta-container {
                padding: 2.5rem 1.5rem;
            }
            .cta-container h2 {
                font-size: 2rem;
            }
        }
      `}</style>
      <div className="candidate-page-container">
        <div className="grid-overlay"></div>
        <main>
            <section className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                <h1 className="hero-title">
                    Find Your Next <span className="highlight">Breakthrough</span> Role.
                </h1>
                <p className="hero-subtitle">
                    You're in the top tier of your field. It's time your career reflected it. We connect exceptional talent like you with innovative companies shaping the future.
                </p>
                <div className="search-bar-wrapper">
                    <div className="search-bar">
                        <input type="text" className="search-input" placeholder="Search by role, skill, or company" />
                        <button className="search-button">
                            <SearchIcon />
                            <span>Find Jobs</span>
                        </button>
                    </div>
                </div>
                </div>
                <div className="hero-image-container">
                    <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="A professional woman confidently leading a meeting"
                    className="hero-image" 
                    />
                </div>
            </div>
            </section>

            <section className="page-section">
                <div className="section-title">
                    <h2>Why Join Our Platform?</h2>
                    <p>We're dedicated to helping you find roles that don't just match your skills, but also fuel your passion and ambition.</p>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon"><ExclusiveIcon/></div>
                        <h3>Exclusive Opportunities</h3>
                        <p>Access roles at top-tier companies and high-growth startups that you won't find anywhere else.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FastTrackIcon/></div>
                        <h3>Fast-Tracked Process</h3>
                        <p>Our direct connections with hiring managers mean a transparent, faster hiring process. No more black holes.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><GrowthIcon/></div>
                        <h3>Career Growth</h3>
                        <p>We focus on long-term partnerships, connecting you with roles that offer meaningful challenges and growth.</p>
                    </div>
                </div>
            </section>

            <section id="featured-jobs" className="page-section">
                <div className="section-title">
                    <h2>Featured Opportunities</h2>
                    <p>Hand-picked roles from our network of innovative and exciting companies.</p>
                </div>
                <div className="jobs-grid">
                    {featuredJobs.map((job, index) => (
                        <div className="job-card" key={index}>
                            <div className="job-card-header">
                                <div className="job-card-logo">
                                    <img src={job.logo} alt={`${job.company} logo`} />
                                </div>
                                <div className="job-card-title-group">
                                    <h3 className="job-card-title">{job.title}</h3>
                                    <p className="job-card-company">{job.company}</p>
                                </div>
                            </div>
                            <div className="job-card-tags">
                                {job.tags.map(tag => <span key={tag} className="job-card-tag">{tag}</span>)}
                            </div>
                            <div className="job-card-footer">
                                <p className="job-card-location">{job.location}</p>
                                <a href="#" className="cta-button cta-primary" style={{padding: '0.6rem 1.2rem', fontSize: '0.9rem'}}>
                                    View Details
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            <section className="page-section">
                <div className="section-title">
                    <h2>Your Path to Success</h2>
                    <p>Our streamlined process is designed to be simple, transparent, and respectful of your time.</p>
                </div>
                <div className="process-steps-container">
                    <div className="step-connector"></div>
                    <div className="process-step">
                        <div className="step-icon-wrapper"><ProfileIcon /></div>
                        <h3>1. Create Your Profile</h3>
                        <p>Showcase your skills and experience to our curated network of top employers in minutes.</p>
                    </div>
                    <div className="process-step">
                        <div className="step-icon-wrapper"><MatchIcon /></div>
                        <h3>2. Get Matched</h3>
                        <p>Our system intelligently matches you with roles that align with your expertise and career goals.</p>
                    </div>
                    <div className="process-step">
                        <div className="step-icon-wrapper"><HireIcon /></div>
                        <h3>3. Get Hired</h3>
                        <p>Connect directly with hiring managers and land your dream job with a seamless interview process.</p>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="cta-container">
                    <h2>Your Career, Accelerated.</h2>
                    <p>Ready to explore the best opportunities in tech? Join our exclusive talent pool and let your next great role find you.</p>
                    <div className="cta-button-wrapper">
                        <a href="#join" className="cta-button cta-primary" style={{fontSize: '1.1rem', padding: '1.1rem 2.2rem'}}>
                            Join the Talent Pool <ArrowRightIcon />
                        </a>
                    </div>
                </div>
            </section>
        </main>
        <footer className="page-footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h3>TalentLink</h3>
                    <p>&copy; 2025 TalentLink. All rights reserved.</p>
                </div>
                <div className="footer-links">
                    <a href="#">For Recruiters</a>
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

export default CandidatePage;

