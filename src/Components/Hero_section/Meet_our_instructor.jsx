import React from 'react';

const MeetOurInstructors = () => {
  const instructors = [
    {
      name: 'Prakash Gupta',
      title: 'Lead Instructor, Full-Stack Development',
      image: 'https://placehold.co/250x250/E0E7FF/1E40AF?text=PG',
      specialties: ['React', 'Node.js', 'System Design'],
      bio: 'Prakash is a seasoned full-stack developer with over 12 years of experience building scalable web applications for high-growth startups.',
      quote: 'My goal is to turn complex code into simple concepts. I believe in learning by building, not just by watching.',
      accentColor: '#DBEAFE',
    },
    {
      name: 'Deepika Nair',
      title: 'Data Science & ML Instructor',
      image: 'https://placehold.co/250x250/F3E8FF/5B21B6?text=DN',
      specialties: ['Python', 'TensorFlow', 'NLP'],
      bio: 'With a Ph.D. in Machine Learning, Deepika is passionate about making complex data science concepts accessible and engaging for students.',
      quote: 'Data tells a story. My job is to teach you the language so you can uncover those narratives.',
      accentColor: '#F3E8FF',
    },
    {
      name: 'Amit Kumar',
      title: 'Instructor, DevOps & Cloud Computing',
      image: 'https://placehold.co/250x250/E0F2FE/0891B2?text=AK',
      specialties: ['AWS', 'Docker', 'Kubernetes'],
      bio: 'Amit is a certified AWS Solutions Architect who helps students master the tools and practices of modern cloud infrastructure.',
      quote: 'Automation is the future. I empower students to build efficient, resilient systems that power modern technology.',
      accentColor: '#E0F2FE',
    },
  ];

  return (
    <>
      <style>{`
        .instructors-section {
          background-color: #FFFFFF;
          padding: clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        .instructors-container {
          max-width: 900px; /* Adjusted max-width for a more focused layout */
          margin: 0 auto;
          text-align: center;
        }
        .instructors-title {
          font-size: clamp(2rem, 5vw, 2.75rem);
          font-weight: 800;
          color: #111827;
          margin: 0 0 0.5rem 0;
        }
        .instructors-subtitle {
          font-size: 1.125rem;
          color: #4B5563;
          line-height: 1.6;
          max-width: 650px;
          margin: 0 auto 4rem auto;
        }
        
        /* --- NEW: List-based layout instead of grid --- */
        .instructors-list {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .instructor-card {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          background-color: #FFFFFF;
          border-radius: 1rem;
          text-align: left;
          transition: all 0.3s ease;
        }
        /* --- NEW: Alternating layout for every even card --- */
        .instructor-card:nth-child(even) {
          flex-direction: row-reverse;
        }
        
        .instructor-image-container {
            flex-shrink: 0;
            width: 250px;
            position: relative;
        }
        .instructor-image {
            width: 100%;
            aspect-ratio: 1 / 1;
            object-fit: cover;
            border-radius: 1rem;
            box-shadow: 0 10px 20px -5px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        .instructor-card:hover .instructor-image {
            transform: scale(1.05);
        }

        /* --- NEW: Accent background color --- */
        .instructor-image-container::before {
            content: '';
            position: absolute;
            bottom: -10px;
            left: -10px;
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            z-index: -1;
            transition: all 0.3s ease;
        }
        .instructor-card:hover .instructor-image-container::before {
             transform: translate(5px, 5px);
        }

        .instructor-info {
            padding: 1rem 0;
        }
        .instructor-name {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1F2937;
          margin: 0 0 0.25rem 0;
        }
        .instructor-title {
          font-size: 1rem;
          font-weight: 500;
          color: #4F46E5;
          margin: 0 0 1.5rem 0;
        }
        .instructor-specialties {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
        }
        .specialty-tag {
            background-color: #E0E7FF;
            color: #3730A3;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.8rem;
            font-weight: 500;
        }
        /* --- NEW: Quote style --- */
        .instructor-quote {
            font-size: 0.95rem;
            color: #4B5563;
            line-height: 1.6;
            margin: 0;
            font-style: italic;
            border-left: 3px solid #C7D2FE;
            padding-left: 1rem;
        }

        /* --- Responsive Design --- */
        @media (max-width: 768px) {
            .instructor-card,
            .instructor-card:nth-child(even) {
                flex-direction: column;
                text-align: center;
            }
            .instructor-specialties {
                justify-content: center;
            }
        }
      `}</style>
      <section className="instructors-section">
        <div className="instructors-container">
          <h2 className="instructors-title">Meet Our Instructors</h2>
          <p className="instructors-subtitle">
            Our courses are led by passionate instructors with extensive industry experience, committed to providing hands-on, practical education.
          </p>
          <div className="instructors-list">
            {instructors.map((instructor, index) => (
              <div className="instructor-card" key={index}>
                <div className="instructor-image-container" style={{'--accent-bg': instructor.accentColor}}>
                  <style>{`.instructor-image-container::before { background-color: ${instructor.accentColor}; }`}</style>
                  <img src={instructor.image} alt={instructor.name} className="instructor-image" />
                </div>
                <div className="instructor-info">
                  <h3 className="instructor-name">{instructor.name}</h3>
                  <p className="instructor-title">{instructor.title}</p>
                   <div className="instructor-specialties">
                    {instructor.specialties.map(skill => <span key={skill} className="specialty-tag">{skill}</span>)}
                  </div>
                  <p className="instructor-quote">"{instructor.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetOurInstructors;

