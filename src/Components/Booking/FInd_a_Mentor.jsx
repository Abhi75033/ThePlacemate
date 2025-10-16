import React, { useState } from 'react';

//++++++++++++++ Main Page Component ++++++++++++++
const Step1_FindMentor = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Web Development', 'Data Science', 'Product Management', 'UX/UI Design'];

  const allMentors = [
    { id: 1, name: 'Sarah Chen', title: 'Senior Software Engineer @ Google', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop', category: 'Web Development', expertise: ['React', 'TypeScript', 'System Design', 'Frontend'], },
    { id: 2, name: 'Michael Rodriguez', title: 'Product Manager @ Spotify', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop', category: 'Product Management', expertise: ['Agile', 'Roadmapping', 'User Research', 'A/B Testing'], },
    { id: 3, name: 'Emily Carter', title: 'Data Scientist @ Netflix', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format=fit,crop', category: 'Data Science', expertise: ['Python', 'Machine Learning', 'SQL', 'Statistics'], },
    { id: 4, name: 'David Lee', title: 'UX/UI Design Lead @ Airbnb', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit,crop', category: 'UX/UI Design', expertise: ['Figma', 'Prototyping', 'Design Systems', 'User Flows'], },
    { id: 5, name: 'Jessica Taylor', title: 'Backend Developer @ Amazon', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286de2?q=80&w=1888&auto=format&fit,crop', category: 'Web Development', expertise: ['Node.js', 'Go', 'Microservices', 'Databases'], },
    { id: 6, name: 'Chris Martinez', title: 'Data Analyst @ Meta', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit,crop', category: 'Data Science', expertise: ['Tableau', 'Power BI', 'Data Viz', 'Excel'], },
  ];

  const filteredMentors = activeFilter === 'All'
    ? allMentors
    : allMentors.filter(mentor => mentor.category === activeFilter);

  return (
    <>
      <style>{`
        /* Global Font */
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');
        
        body {
            font-family: 'Lexend', sans-serif;
            background-color: #ffffff;
        }

        /* Mentor List Section */
        .mentor-list-section { background-color: #ffffff; padding: clamp(3rem, 8vw, 5rem) clamp(1.5rem, 5vw, 4rem); }
        .mentor-list-container { max-width: 1200px; margin: 0 auto; text-align: center; }
        
        /* --- ATTRACTIVE STEP INDICATOR STYLES --- */
        .progress-steps-container {
          display: flex;
          align-items: flex-start; /* Aligns items to the top */
          justify-content: center;
          width: 100%;
          max-width: 600px;
          margin: 0 auto 3rem;
          gap: 0.5rem;
        }

        .progress-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: #9CA3AF; /* Inactive color */
          font-weight: 500;
          position: relative;
          width: 120px;
        }

        .step-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid #D1D5DB;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          background-color: #ffffff;
          transition: all 0.3s ease;
          z-index: 2;
        }

        .step-label {
          margin-top: 0.75rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .progress-connector {
          flex-grow: 1;
          height: 2px;
          background-color: #D1D5DB; /* Inactive line */
          margin-top: 17px; /* Aligns with vertical center of circle */
        }

        /* Active State */
        .progress-step.active .step-circle {
          background: linear-gradient(90deg, #4f46e5, #6d28d9);
          border-color: #4F46E5;
          color: white;
          box-shadow: 0 4px 10px -2px rgba(79, 70, 229, 0.4);
        }

        .progress-step.active .step-label {
          color: #4F46E5;
          font-weight: 600;
        }
        
        @media (max-width: 500px) {
            .step-label { font-size: 0.75rem; }
            .progress-step { width: 80px; }
        }


        .mentor-list-header h2 { font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 800; color: #111827; margin: 0; }
        .mentor-list-header h2 span {
          background: linear-gradient(90deg, #6d28d9, #4f46e5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .mentor-list-header p { font-size: 1.125rem; color: #4B5563; line-height: 1.6; margin: 1rem auto 0; max-width: 600px; }
        .mentor-filters { display: flex; justify-content: center; gap: 0.75rem; margin: 2.5rem 0; flex-wrap: wrap; }
        .mentor-filter-btn { padding: 0.6rem 1.25rem; border: 1px solid #D1D5DB; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; background-color: transparent; color: #374151; cursor: pointer; transition: all 0.3s ease; }
        .mentor-filter-btn.active, .mentor-filter-btn:hover { background-color: #4F46E5; color: white; border-color: #4F46E5; }
        .mentors-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; }
        .mentor-card { background-color: #F9FAFB; border: 1px solid #F3F4F6; border-radius: 1.5rem; padding: 1.5rem; text-align: center; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .mentor-card:hover { transform: translateY(-8px); box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.08); }
        .mentor-avatar { width: 80px; height: 80px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem; border: 3px solid white; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); flex-shrink: 0; }

        @media (max-width: 768px) {
            .mentor-avatar { width: 60px; height: 60px; }
        }
        .mentor-card h3 { font-size: 1.25rem; font-weight: 700; color: #111827; margin: 0; }
        .mentor-card .title { font-size: 0.875rem; color: #6B7280; margin: 0.25rem 0 1rem 0; }
        .expertise-tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; margin-bottom: 1.5rem; }
        .expertise-tag { background-color: #E0E7FF; color: #4338CA; font-size: 0.75rem; font-weight: 500; padding: 0.25rem 0.75rem; border-radius: 9999px; }
        .book-session-btn { display: block; width: 100%; background: linear-gradient(90deg, #4f46e5, #6d28d9); color: white; padding: 0.75rem 1.5rem; border-radius: 0.75rem; text-decoration: none; font-weight: 600; font-size: 0.9rem; text-align: center; transition: all 0.3s ease; box-shadow: 0 4px 10px -2px rgba(79, 70, 229, 0.4); }
        .book-session-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 15px -2px rgba(79, 70, 229, 0.5); }

      `}</style>
      <main>
        <section id="find-mentor" className="mentor-list-section">
            <div className="mentor-list-container">
                {/* --- ATTRACTIVE STEP INDICATOR --- */}
                <div className="progress-steps-container">
                    <div className="progress-step active">
                        <div className="step-circle">1</div>
                        <div className="step-label">Find Mentor</div>
                    </div>
                    <div className="progress-connector"></div>
                    <div className="progress-step">
                        <div className="step-circle">2</div>
                        <div className="step-label">View Profile</div>
                    </div>
                    <div className="progress-connector"></div>
                    <div className="progress-step">
                        <div className="step-circle">3</div>
                        <div className="step-label">Book Session</div>
                    </div>
                </div>

                <div className="mentor-list-header">
                  <h2>Find the Right <span>Mentor</span> for You</h2>
                  <p>Browse our network of industry professionals. Filter by expertise to find the perfect match for your career goals.</p>
                </div>
                <div className="mentor-filters">
                {filters.map(filter => (
                    <button key={filter} className={`mentor-filter-btn ${activeFilter === filter ? 'active' : ''}`} onClick={() => setActiveFilter(filter)}>
                    {filter}
                    </button>
                ))}
                </div>
                <div className="mentors-grid">
                {filteredMentors.map(mentor => (
                    <div className="mentor-card" key={mentor.id}>
                    <img src={mentor.avatar} alt={mentor.name} className="mentor-avatar" onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/80x80/E0E7FF/4338CA?text=${mentor.name.charAt(0)}`; }}/>
                    <h3>{mentor.name}</h3>
                    <p className="title">{mentor.title}</p>
                    <div className="expertise-tags">
                        {mentor.expertise.map(skill => <span key={skill} className="expertise-tag">{skill}</span>)}
                    </div>
                    <a href="#" className="book-session-btn">View Profile</a>
                    </div>
                ))}
                </div>
            </div>
        </section>
      </main>
    </>
  );
};

export default Step1_FindMentor;

