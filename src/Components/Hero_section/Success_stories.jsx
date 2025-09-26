import React from 'react';

// A self-contained component to render the star ratings
const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starClass = index < rating ? 'star-filled' : 'star-empty';
        return (
          <svg key={index} className={`star ${starClass}`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        );
      })}
    </div>
  );
};

const SuccessStories = () => {
  // Added 'featured' and 'companyLogo' properties
  const testimonials = [
    {
      name: 'Priya Sharma',
      placement: 'Placed at TCS',
      quote: "The personalized guidance and project-based learning were game-changers. ThePlacemate didn't just prepare me for interviews; they prepared me for a career.",
      image: 'https://placehold.co/100x100/E9D5FF/3730A3?text=PS',
      rating: 5,
      featured: true,
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/TCS_Logo.svg'
    },
    {
      name: 'Rohan Mehta',
      placement: 'Placed at Infosys',
      quote: "The AI interview tool was incredible. I walked into my interviews feeling confident and prepared for anything. The mentors are industry experts.",
      image: 'https://placehold.co/100x100/D1FAE5/065F46?text=RM',
      rating: 5,
      featured: false,
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg'
    },
    {
      name: 'Anjali Desai',
      placement: 'Placed at Accenture',
      quote: "From building my resume to connecting me with top recruiters, the support was end-to-end. The practical projects gave me a portfolio that truly stood out.",
      image: 'https://placehold.co/100x100/FEE2E2/991B1B?text=AD',
      rating: 5,
      featured: false,
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg'
    },
     {
      name: 'Vikram Singh',
      placement: 'Placed at Wipro',
      quote: "I was struggling to get noticed by good companies. ThePlacemate's network and placement-driven projects made all the difference.",
      image: 'https://placehold.co/100x100/FEF9C3/854D0E?text=VS',
      rating: 4,
      featured: false,
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg'
    },
  ];

  const featuredTestimonial = testimonials.find(t => t.featured);
  const otherTestimonials = testimonials.filter(t => !t.featured);

  return (
    <>
      <style>{`
        .success-stories-section {
          background-color: #F9FAFB; /* Light grey background */
          padding: clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        .success-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .success-title {
          font-size: clamp(2rem, 5vw, 2.75rem);
          font-weight: 800;
          color: #111827;
          margin: 0 0 0.5rem 0;
        }
        .success-subtitle {
          font-size: 1.125rem;
          color: #4B5563;
          line-height: 1.6;
          max-width: 650px;
          margin: 0 auto 4rem auto;
        }
        
        /* --- NEW: Enhanced Layout --- */
        .testimonials-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            text-align: left;
        }

        /* --- Featured Testimonial (Video) --- */
        .featured-testimonial .card-header {
            margin-bottom: 1rem;
        }
        .video-thumbnail {
            position: relative;
            cursor: pointer;
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 10px 20px -5px rgba(0,0,0,0.1);
        }
        .video-thumbnail img {
            width: 100%;
            display: block;
            aspect-ratio: 16 / 9;
            object-fit: cover;
        }
        .play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 70px;
            height: 70px;
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(5px);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        .video-thumbnail:hover .play-button {
            transform: translate(-50%, -50%) scale(1.1);
            background-color: rgba(255, 255, 255, 1);
        }
        .play-button svg {
            width: 32px;
            height: 32px;
            color: #6D28D9;
        }
        .featured-testimonial .testimonial-quote {
            font-size: 1.125rem;
            margin-top: 1.5rem;
            padding: 0;
        }
        .featured-testimonial .testimonial-quote::before {
            content: none; /* No quote mark on featured */
        }

        /* --- Other Testimonials --- */
        .other-testimonials {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        .testimonial-card {
          background-color: #FFFFFF;
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid #F3F4F6;
          box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.04);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px -8px rgba(0, 0, 0, 0.1);
        }
        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .student-image {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
        }
        .student-info {
           flex-grow: 1;
        }
        .student-name {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1F2937;
          margin: 0;
        }
        .student-placement {
          font-size: 0.9rem;
          font-weight: 500;
          color: #60A5FA;
          margin: 0;
        }
        .company-logo {
            max-width: 80px;
            max-height: 24px;
            object-fit: contain;
            filter: grayscale(100%);
            opacity: 0.6;
        }
        .testimonial-quote {
          font-size: 0.95rem;
          color: #4B5563;
          line-height: 1.6;
          font-style: italic;
          margin: 0;
          flex-grow: 1;
        }
        
        .star-rating { display: flex; gap: 0.25rem; margin-bottom: 1rem; }
        .star { width: 18px; height: 18px; }
        .star-filled { color: #FBBF24; }
        .star-empty { color: #E5E7EB; }

        /* --- NEW: CTA at the bottom --- */
        .success-cta {
            margin-top: 4rem;
            padding: 2.5rem;
            background: linear-gradient(90deg, #4F46E5, #7C3AED);
            border-radius: 1rem;
        }
        .cta-title {
            font-size: 1.75rem;
            font-weight: 700;
            color: #FFFFFF;
            margin: 0 0 1rem 0;
        }
        .cta-button {
            background-color: #FFFFFF;
            color: #6D28D9;
            font-weight: 600;
            padding: 0.75rem 2rem;
            border-radius: 9999px;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
        }
        .cta-button:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        /* --- Responsive Design --- */
        @media (max-width: 992px) {
            .testimonials-layout {
                grid-template-columns: 1fr;
            }
            .other-testimonials {
                margin-top: 2rem;
            }
        }
      `}</style>
      <section className="success-stories-section">
        <div className="success-container">
          <h2 className="success-title">Success Stories from Our Graduates</h2>
          <p className="success-subtitle">
            Don't just take our word for it. Hear from the talented individuals who have launched their careers with ThePlacemate.
          </p>
          <div className="testimonials-layout">
            {/* Featured Testimonial */}
            {featuredTestimonial && (
              <div className="featured-testimonial">
                 <div className="video-thumbnail">
                    <img src={featuredTestimonial.image} alt={featuredTestimonial.name}/>
                    <div className="play-button">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                    </div>
                </div>
                <div className="card-header" style={{marginTop: '1.5rem'}}>
                  <div>
                    <h3 className="student-name">{featuredTestimonial.name}</h3>
                    <p className="student-placement">{featuredTestimonial.placement}</p>
                  </div>
                </div>
                <StarRating rating={featuredTestimonial.rating} />
                <p className="testimonial-quote">{featuredTestimonial.quote}</p>
              </div>
            )}
            
            {/* Other Testimonials */}
            <div className="other-testimonials">
              {otherTestimonials.map((story, index) => (
                <div className="testimonial-card" key={index}>
                  <div className="card-header">
                    <img src={story.image} alt={story.name} className="student-image" />
                    <div className="student-info">
                      <h3 className="student-name">{story.name}</h3>
                      <p className="student-placement">{story.placement}</p>
                    </div>
                    <img src={story.companyLogo} alt={`${story.placement} logo`} className="company-logo" />
                  </div>
                  <StarRating rating={story.rating} />
                  <p className="testimonial-quote">{story.quote}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="success-cta">
             <h3 className="cta-title">Ready to Write Your Own Success Story?</h3>
             <a href="#" className="cta-button">Get Started Now</a>
          </div>

        </div>
      </section>
    </>
  );
};

export default SuccessStories;

