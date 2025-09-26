import React from 'react';

const AboutPage = () => {

  // SVGs for the value proposition cards
  const EmpowermentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
  );

  const InnovationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
  );

  const CommunityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  );

  const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
  );


  return (
    <>
      <style>{`
        /* --- General Page Styles --- */
        .about-page {
          font-family: 'Lexend', sans-serif;
          color: #1a202c;
          line-height: 1.6;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        /* --- Hero Section --- */
        .hero-section {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          color: white;
          overflow: hidden;
        }

        .animated-gradient-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: linear-gradient(-45deg, #6D28D9, #4F46E5, #3B82F6, #EC4899);
          background-size: 400% 400%;
          animation: gradient-animation 15s ease infinite;
        }

        @keyframes gradient-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .hero-content {
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.1);
          -webkit-backdrop-filter: blur(15px);
          backdrop-filter: blur(15px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          max-width: 800px;
          animation: fadeIn 1s ease-out forwards;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin: 0 0 1rem 0;
          letter-spacing: -1px;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          font-weight: 300;
          max-width: 600px;
          margin: 0 auto;
          opacity: 0.9;
        }
        
        /* --- Mission & Values Section --- */
        .mission-section {
            background-color: #f7fafc; 
            text-align: center;
        }
        
        .section-title {
            font-size: clamp(2rem, 5vw, 2.5rem);
            font-weight: 700;
            color: #1E3A8A;
            margin-bottom: 1rem;
        }

        .section-description {
            font-size: clamp(1rem, 2vw, 1.125rem);
            color: #4A5568;
            max-width: 700px;
            margin: 0 auto 3rem auto;
        }
        
        .values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .value-card {
            background-color: white;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.07);
            text-align: left;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .value-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 30px -5px rgba(30, 64, 138, 0.15);
        }

        .value-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            border-radius: 50%;
            background-color: #E0E7FF;
            color: #4F46E5;
            margin-bottom: 1.5rem;
        }

        .value-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #2d3748;
        }

        .value-text {
            font-size: 1rem;
            color: #4A5568;
        }
        
        /* --- Journey / Timeline Section --- */
        .journey-section {
            background-color: #ffffff;
            text-align: center;
        }

        .timeline {
            position: relative;
            max-width: 800px;
            margin: 3rem auto;
        }

        .timeline::after {
            content: '';
            position: absolute;
            width: 4px;
            background-color: #E0E7FF;
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -2px;
            transition: left 0.3s ease, margin-left 0.3s ease;
        }

        .timeline-item {
            padding: 1rem 2.5rem;
            position: relative;
            background-color: inherit;
            width: 50%;
            transition: width 0.3s ease, padding 0.3s ease, left 0.3s ease;
        }

        .timeline-item.left {
            left: 0;
        }

        .timeline-item.right {
            left: 50%;
        }
        
        .timeline-item::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: white;
            border: 4px solid #4F46E5;
            top: 25px;
            border-radius: 50%;
            z-index: 1;
            transition: right 0.3s ease, left 0.3s ease, top 0.3s ease;
        }

        .timeline-item.left::after {
            right: -10px;
        }
        
        .timeline-item.right::after {
            left: -10px;
        }
        
        .timeline-content {
            padding: 1.5rem;
            background-color: #f7fafc;
            position: relative;
            border-radius: 0.5rem;
            text-align: left;
        }

        .timeline-year {
            font-size: 1.5rem;
            font-weight: 700;
            color: #4F46E5;
            margin-bottom: 0.5rem;
        }

        .timeline-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        
        .timeline-text {
            font-size: 1rem;
            color: #4A5568;
        }
        
        /* --- Team Section --- */
        .team-section {
            background-color: #f7fafc;
            text-align: center;
        }

        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .team-card {
            background-color: #ffffff;
            border-radius: 1rem;
            box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.07);
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            overflow: hidden;
        }
        
        .team-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 30px -5px rgba(30, 64, 138, 0.15);
        }

        .team-image-container {
            position: relative;
            width: 100%;
            height: 280px;
            overflow: hidden;
        }
        
        .team-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
        }

        .team-card:hover .team-image {
            transform: scale(1.05);
        }

        .team-image-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, rgba(79, 70, 229, 0.8), rgba(99, 102, 241, 0.3));
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .team-card:hover .team-image-overlay {
            opacity: 1;
        }

        .team-social-link {
            color: white;
            transform: translateY(10px);
            opacity: 0;
            transition: transform 0.3s ease 0.1s, opacity 0.3s ease 0.1s;
        }

        .team-card:hover .team-social-link {
            transform: translateY(0);
            opacity: 1;
        }

        .team-info {
            padding: 1.5rem;
        }

        .team-name {
            font-size: 1.25rem;
            font-weight: 600;
            margin: 0 0 0.25rem 0;
        }

        .team-role {
            font-size: 1rem;
            color: #4F46E5;
            margin: 0;
        }

        /* --- RESPONSIVE STYLES --- */
        @media (max-width: 768px) {
          .section-container {
            padding: 3rem 1.5rem;
          }

          /* Collapse timeline into a single column */
          .timeline::after {
            left: 20px;
          }
          .timeline-item {
            width: 100%;
            padding-left: 55px;
            padding-right: 15px;
          }
          .timeline-item.left, .timeline-item.right {
            left: 0;
          }
          .timeline-item.left::after, .timeline-item.right::after {
            left: 11px;
          }
          /* FIX: Align timeline circle with the content */
          .timeline-item::after {
            top: 38px;
          }
        }
         
         @media (max-width: 480px) {
            .section-container {
                padding: 3rem 1rem;
            }
            .timeline-content {
                width:60%;
                padding: 1rem;
            }
            .timeline-year {
                font-size: 1.25rem;
            }
            .timeline-title {
                font-size: 1.1rem;
            }
            .timeline-text {
                font-size: 0.95rem;
            }
            /* FIX: Re-align timeline circle for smaller mobile fonts */
            .timeline-item::after {
              top: 28px;
            }
         }

      `}</style>

      <div className="about-page">
        {/* --- Hero Section --- */}
        <section className="hero-section">
          <div className="animated-gradient-bg"></div>
          <div className="hero-content">
            <h1 className="hero-title">Connecting Ambition with Opportunity</h1>
            <p className="hero-subtitle">
              We believe that the right connection can change a life. ThePlacemate was founded on the simple idea of bridging the gap between talented individuals and the world’s most innovative companies.
            </p>
          </div>
        </section>
        
        {/* --- Mission Section --- */}
        <section className="mission-section section-container">
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="section-description">
                Our mission is to empower every individual with the skills, confidence, and connections they need to build a fulfilling career. We are committed to fostering a supportive ecosystem where talent thrives and opportunities are accessible to all.
            </p>

            <div className="values-grid">
                <div className="value-card">
                    <div className="value-icon"><EmpowermentIcon /></div>
                    <h3 className="value-title">Empowerment</h3>
                    <p className="value-text">
                        We provide the tools and knowledge to help you take control of your professional journey and achieve your goals.
                    </p>
                </div>
                <div className="value-card">
                    <div className="value-icon"><InnovationIcon /></div>
                    <h3 className="value-title">Innovation</h3>
                    <p className="value-text">
                        We continuously adapt to the evolving job market, offering cutting-edge courses and placement strategies.
                    </p>
                </div>
                <div className="value-card">
                    <div className="value-icon"><CommunityIcon /></div>
                    <h3 className="value-title">Community</h3>
                    <p className="value-text">
                        We're building a network of learners, mentors, and industry leaders to support you every step of the way.
                    </p>
                </div>
            </div>
        </section>

        {/* --- Journey Section --- */}
        <section className="journey-section section-container">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-description">
                From a simple idea to a thriving community, our story is one of passion, perseverance, and a commitment to making a difference.
            </p>

            <div className="timeline">
                <div className="timeline-item left">
                    <div className="timeline-content">
                        <h3 className="timeline-year">2021</h3>
                        <h4 className="timeline-title">The Spark of an Idea</h4>
                        <p className="timeline-text">ThePlacemate was born from a desire to connect aspiring talent with leading companies, creating a direct path to career success.</p>
                    </div>
                </div>
                <div className="timeline-item right">
                    <div className="timeline-content">
                        <h3 className="timeline-year">2022</h3>
                        <h4 className="timeline-title">First Placement Success</h4>
                        <p className="timeline-text">We celebrated a major milestone with our first cohort of students successfully placed in top-tier tech companies.</p>
                    </div>
                </div>
                <div className="timeline-item left">
                    <div className="timeline-content">
                        <h3 className="timeline-year">2023</h3>
                        <h4 className="timeline-title">Expanding Horizons</h4>
                        <p className="timeline-text">Our course offerings grew, and we forged new partnerships with industry leaders to broaden opportunities for our students.</p>
                    </div>
                </div>
                 <div className="timeline-item right">
                    <div className="timeline-content">
                        <h3 className="timeline-year">2024</h3>
                        <h4 className="timeline-title">Community of 10,000+</h4>
                        <p className="timeline-text">Our community surpassed 10,000 members, becoming a vibrant network of learners, mentors, and professionals.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* --- Team Section --- */}
        <section className="team-section section-container">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-description">
                We are a passionate team of educators, innovators, and industry experts dedicated to helping you succeed.
            </p>
            <div className="team-grid">
                {/* Team Member 1 */}
                <div className="team-card">
                    <div className="team-image-container">
                        <img src="https://media.licdn.com/dms/image/v2/D5603AQHFyG7rTb9T4A/profile-displayphoto-shrink_400_400/B56ZZxEwH3HUAg-/0/1745653794090?e=1761782400&v=beta&t=O1_8tZa81IgiKVihVr0TA32omo8LurGs5RYgGbF9uGg" alt="Abhishek kumar" className="team-image" />
                        <div className="team-image-overlay">
                            <a href="https://www.linkedin.com/in/abhishekkumar-webdev/" className="team-social-link" aria-label="Abhishek Kumar's LinkedIn Profile"><LinkedInIcon /></a>
                        </div>
                    </div>
                    <div className="team-info">
                        <h3 className="team-name">Abhishek Kumar</h3>
                        <p className="team-role">Founder & CEO</p>
                    </div>
                </div>
                {/* Team Member 2 */}
                <div className="team-card">
                    <div className="team-image-container">
                        <img src="https://placehold.co/400x400/4F46E5/FFFFFF?text=Rohan+M." alt="Rohan Mehta" className="team-image" />
                        <div className="team-image-overlay">
                            <a href="#" className="team-social-link" aria-label="Rohan Mehta's LinkedIn Profile"><LinkedInIcon /></a>
                        </div>
                    </div>
                    <div className="team-info">
                        <h3 className="team-name">Rohan Mehta</h3>
                        <p className="team-role">Head of Placements</p>
                    </div>
                </div>
                {/* Team Member 3 */}
                <div className="team-card">
                    <div className="team-image-container">
                        <img src="https://placehold.co/400x400/3B82F6/FFFFFF?text=Anjali+K." alt="Anjali Kapoor" className="team-image" />
                        <div className="team-image-overlay">
                            <a href="#" className="team-social-link" aria-label="Anjali Kapoor's LinkedIn Profile"><LinkedInIcon /></a>
                        </div>
                    </div>
                    <div className="team-info">
                        <h3 className="team-name">Anjali Kapoor</h3>
                        <p className="team-role">Lead Instructor</p>
                    </div>
                </div>
            </div>
        </section>

      </div>
    </>
  );
};

export default AboutPage;

