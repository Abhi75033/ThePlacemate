import React, { useState } from 'react';

const TestimonialsPage = () => {
  
  const [activeVideo, setActiveVideo] = useState(0);
  
  // Placeholder images for the background grid
  const studentImages = [
    'https://placehold.co/300x300/8B5CF6/FFFFFF?text=Alumni',
    'https://placehold.co/300x300/EC4899/FFFFFF?text=Success',
    'https://placehold.co/300x300/3B82F6/FFFFFF?text=Hired',
    'https://placehold.co/300x300/10B981/FFFFFF?text=Grad',
    'https://placehold.co/300x300/F59E0B/FFFFFF?text=Career',
    'https://placehold.co/300x300/EF4444/FFFFFF?text=Future',
    'https://placehold.co/300x300/6D28D9/FFFFFF?text=Talent',
    'https://placehold.co/300x300/4F46E5/FFFFFF?text=Achiever',
    'https://placehold.co/300x300/06B6D4/FFFFFF?text=Placed',
    'https://placehold.co/300x300/D946EF/FFFFFF?text=Expert',
  ];

  const testimonialsData = [
    { name: 'Priya Sharma', role: 'Software Engineer', company: 'Google', quote: 'ThePlacemate transformed my career. The hands-on projects and mock interviews gave me the confidence to crack one of the toughest interviews in the industry.', image: 'https://placehold.co/150x150/8B5CF6/FFFFFF?text=PS', companyLogo: 'https://www.vectorlogo.zone/logos/google/google-ar21.svg' },
    { name: 'Rohan Mehta', role: 'Product Manager', company: 'Microsoft', quote: 'The mentorship I received was invaluable. My mentor guided me through every step, from skill-building to salary negotiation. I couldn\'t have done it without them.', image: 'https://placehold.co/150x150/3B82F6/FFFFFF?text=RM', companyLogo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg' },
    { name: 'Anjali Kapoor', role: 'Data Scientist', company: 'Amazon', quote: 'The curriculum is perfectly aligned with what top companies are looking for. I felt completely prepared for the technical rounds and real-world challenges.', image: 'https://placehold.co/150x150/EC4899/FFFFFF?text=AK', companyLogo: 'https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg' },
    { name: 'Sameer Khan', role: 'Frontend Developer', company: 'Netflix', quote: 'The focus on building a strong portfolio was a game-changer. I had multiple projects to showcase, which made a huge difference in my interviews.', image: 'https://placehold.co/150x150/10B981/FFFFFF?text=SK', companyLogo: 'https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg' },
    { name: 'Neha Desai', role: 'UX Designer', company: 'Adobe', quote: 'ThePlacemate helped me transition from a non-tech background into a design role I love. The community is incredibly supportive!', image: 'https://placehold.co/150x150/F59E0B/FFFFFF?text=ND', companyLogo: 'https://www.vectorlogo.zone/logos/adobe/adobe-ar21.svg' },
    { name: 'Vikram Singh', role: 'Cloud Engineer', company: 'Salesforce', quote: 'The placement team is relentless. They have strong industry connections and worked tirelessly to find the right opportunity for me.', image: 'https://placehold.co/150x150/EF4444/FFFFFF?text=VS', companyLogo: 'https://www.vectorlogo.zone/logos/salesforce/salesforce-ar21.svg' },
  ];

  const achievementWall = [
      { image: 'https://placehold.co/400x500/8B5CF6/FFFFFF?text=Aarav', name: 'Aarav Patel', company: 'Placed at Google' },
      { image: 'https://placehold.co/400x500/EC4899/FFFFFF?text=Diya', name: 'Diya Sharma', company: 'Placed at Microsoft' },
      { image: 'https://placehold.co/400x500/3B82F6/FFFFFF?text=Rohan', name: 'Rohan Gupta', company: 'Placed at Amazon' },
      { image: 'https://placehold.co/400x500/10B981/FFFFFF?text=Isha', name: 'Isha Singh', company: 'Placed at Meta' }
  ];

  const hiringPartnersLogos = [
      'https://www.vectorlogo.zone/logos/google/google-ar21.svg',
      'https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg',
      'https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg',
      'https://www.vectorlogo.zone/logos/meta/meta-ar21.svg',
      'https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg',
      'https://www.vectorlogo.zone/logos/apple/apple-ar21.svg',
      'https://www.vectorlogo.zone/logos/adobe/adobe-ar21.svg',
      'https://www.vectorlogo.zone/logos/salesforce/salesforce-ar21.svg'
  ];

  const videoTestimonials = [
    { name: 'Priya Sharma', role: 'Software Engineer @ Google', thumbnail: 'https://placehold.co/320x180/8B5CF6/FFFFFF?text=Priya\'s+Story' },
    { name: 'Rohan Mehta', role: 'Product Manager @ Microsoft', thumbnail: 'https://placehold.co/320x180/3B82F6/FFFFFF?text=Rohan\'s+Story' },
    { name: 'Anjali Kapoor', role: 'Data Scientist @ Amazon', thumbnail: 'https://placehold.co/320x180/EC4899/FFFFFF?text=Anjali\'s+Story' },
  ];

  return (
    <>
      <style>{`
        .testimonials-page {
          font-family: 'Lexend', sans-serif;
          color: #1a202c;
          line-height: 1.6;
          background-color: #FFFFFF;
        }
        .section-header { text-align: center; margin-bottom: 3rem; }
        .section-title { font-size: clamp(2rem, 5vw, 2.5rem); font-weight: 700; color: #111827; margin: 0 0 0.5rem 0; }
        .section-subtitle { font-size: clamp(1rem, 2vw, 1.125rem); color: #4B5563; max-width: 600px; margin: 0 auto; }

        /* --- Hero Section --- */
        .testimonials-hero-section {
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          color: white;
          padding: 4rem 2rem;
          overflow: hidden;
          background-color: #111827;
        }

        .hero-photo-wall { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; }
        .hero-photo { position: absolute; border-radius: 1rem; object-fit: cover; opacity: 0.2; animation: drift 50s infinite linear alternate; }
        .photo-1 { top: 5%; left: 10%; width: 150px; height: 150px; animation-duration: 45s; }
        .photo-2 { top: 15%; left: 80%; width: 120px; height: 120px; animation-duration: 55s; }
        .photo-3 { top: 60%; left: 5%; width: 180px; height: 180px; animation-duration: 50s; }
        .photo-4 { top: 70%; left: 90%; width: 160px; height: 160px; animation-duration: 48s; }
        .photo-5 { top: 30%; left: 40%; width: 100px; height: 100px; animation-duration: 60s; }
        .photo-6 { top: 80%; left: 50%; width: 130px; height: 130px; animation-duration: 52s; }
        .photo-7 { top: 5%; left: 50%; width: 110px; height: 110px; animation-duration: 58s; }
        .photo-8 { top: 45%; left: 20%; width: 140px; height: 140px; animation-duration: 46s; }
        .photo-9 { top: 55%; left: 75%; width: 170px; height: 170px; animation-duration: 53s; }
        .photo-10 { top: 20%; left: 5%; width: 130px; height: 130px; animation-duration: 49s; }

        @keyframes drift {
          from { transform: translate(0, 0) rotate(0deg); }
          to { transform: translate(20px, -20px) rotate(5deg); }
        }

        .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle, rgba(17, 24, 39, 0.7) 0%, rgba(17, 24, 39, 0.9) 100%); z-index: 1; }
        .testimonials-hero-content { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; }
        .testimonials-hero-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; margin: 0 0 1rem 0; letter-spacing: -1.5px; line-height: 1.1; text-shadow: 0 4px 15px rgba(0,0,0,0.3); }
        .testimonials-hero-subtitle { font-size: clamp(1.1rem, 2vw, 1.25rem); font-weight: 300; max-width: 600px; margin: 0 auto 2rem auto; opacity: 0.9; text-shadow: 0 2px 10px rgba(0,0,0,0.3); }
        .hero-cta-btn { display: inline-block; padding: 0.8rem 2.5rem; border-radius: 9999px; font-weight: 600; text-decoration: none; transition: all 0.3s ease; background-color: white; color: #4F46E5; border: none; font-size: 1.1rem; box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
        .hero-cta-btn:hover { transform: translateY(-3px) scale(1.05); background-color: #F0F5FF; }

        /* --- Testimonials Grid Section --- */
        .testimonials-grid-section { padding: 4rem 2rem; background-color: #F9FAFB; }
        .testimonials-grid { column-count: 3; column-gap: 1.5rem; max-width: 1200px; margin: 0 auto; }
        .testimonial-card { background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem; break-inside: avoid; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .testimonial-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); }
        .testimonial-quote { font-size: 1.1rem; color: #374151; margin: 0 0 1.5rem 0; font-style: italic; }
        .testimonial-author-footer { display: flex; align-items: center; justify-content: space-between; gap: 1rem; border-top: 1px solid #F3F4F6; padding-top: 1.5rem; }
        .author-info { display: flex; align-items: center; gap: 1rem; }
        .author-avatar { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; }
        .author-name { font-weight: 600; color: #111827; }
        .author-role { color: #6B7280; font-size: 0.9rem; }
        .company-logo img { max-height: 25px; width: auto; filter: grayscale(100%); opacity: 0.6; }

        /* --- Achievement Wall Section --- */
        .achievement-wall-section { padding: 4rem 2rem; background-color: #FFFFFF; }
        .achievement-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; max-width: 1200px; margin: 0 auto; }
        .achievement-card { position: relative; border-radius: 1rem; overflow: hidden; aspect-ratio: 4 / 5; transition: transform 0.3s ease; }
        .achievement-card:hover { transform: scale(1.03); }
        .achievement-image { width: 100%; height: 100%; object-fit: cover; }
        .achievement-overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5rem; color: white; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%); }
        .achievement-name { font-size: 1.25rem; font-weight: 600; }
        .achievement-company { font-size: 1rem; opacity: 0.9; }

        /* --- REFINED: Video Testimonials Section --- */
        .video-testimonials-section { padding: 4rem 2rem; background-color: #F9FAFB; }
        .video-testimonials-container { max-width: 1200px; margin: 0 auto; }
        .video-content-wrapper { display: flex; gap: 2rem; }
        .video-player-wrapper { flex: 2; position: relative; width: 100%; aspect-ratio: 16 / 9; background-color: #111827; border-radius: 1rem; overflow: hidden; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.2); }
        .video-player-image { width: 100%; height: 100%; object-fit: cover; }
        .playlist { flex: 1; display: flex; flex-direction: column; gap: 1rem; }
        .playlist-item { display: flex; align-items: center; gap: 1rem; padding: 0.75rem; border-radius: 0.75rem; cursor: pointer; border: 1px solid #E5E7EB; background-color: #FFFFFF; transition: all 0.3s ease; }
        .playlist-item:hover { transform: translateX(5px); border-color: #C7D2FE; }
        .playlist-item.active { border-color: #6D28D9; background-color: #F5F3FF; transform: scale(1.03); }
        .playlist-thumbnail { width: 100px; height: 56px; object-fit: cover; border-radius: 0.5rem; flex-shrink: 0; }
        .playlist-item-name { font-weight: 600; color: #111827; font-size: 1rem; }
        .playlist-item-role { font-size: 0.9rem; color: #6B7280; }
        
        /* --- Alumni Network Section --- */
        .alumni-network-section { background-color: #FFFFFF; padding: 4rem 0; border-top: 1px solid #F3F4F6; }
        .logo-marquee { width: 100%; overflow: hidden; position: relative; -webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent); mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent); }
        .logo-track { display: flex; width: fit-content; animation: scroll 40s linear infinite; }
        .logo-marquee:hover .logo-track { animation-play-state: paused; }
        .logo-item { display: flex; align-items: center; justify-content: center; padding: 0 2.5rem; }
        .logo-item img { max-height: 40px; width: auto; filter: grayscale(100%); opacity: 0.5; transition: all 0.3s ease; }
        .logo-item:hover img { filter: grayscale(0%); opacity: 1; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        /* --- CTA Section --- */
        .testimonial-cta-section { background-color: #1F2937; color: white; padding: 5rem 2rem; text-align: center; }
        .cta-content { max-width: 700px; margin: 0 auto; }
        .cta-title { font-size: clamp(2rem, 5vw, 2.5rem); font-weight: 700; margin-bottom: 1rem; }
        .cta-text { font-size: clamp(1rem, 2vw, 1.125rem); margin-bottom: 2rem; opacity: 0.8; }
        .cta-button { display: inline-block; padding: 0.8rem 2.5rem; border-radius: 9999px; font-weight: 600; text-decoration: none; transition: all 0.3s ease; background-image: linear-gradient(to right, #6D28D9, #8B5CF6); color: white; border: none; }
        .cta-button:hover { transform: translateY(-3px) scale(1.05); box-shadow: 0 10px 20px rgba(139, 92, 246, 0.2); }

        @media (max-width: 992px) { 
            .testimonials-grid { column-count: 2; }
            .video-content-wrapper { flex-direction: column; }
        }
        @media (max-width: 640px) { .testimonials-grid { column-count: 1; } }

      `}</style>
      <div className="testimonials-page">
        <section className="testimonials-hero-section">
          <div className="hero-photo-wall">
            {studentImages.slice(0, 10).map((src, index) => (
              <img 
                key={index} 
                src={src} 
                alt={`Testimonial student ${index + 1}`} 
                className={`hero-photo photo-${index + 1}`}
              />
            ))}
          </div>
          <div className="hero-overlay"></div>
          <div className="testimonials-hero-content">
            <h1 className="testimonials-hero-title">Success Stories That Inspire</h1>
            <p className="testimonials-hero-subtitle">
              Hear directly from our alumni. Discover how ThePlacemate provided the skills, support, and connections they needed to launch and accelerate their dream careers in tech.
            </p>
            <a href="#stories" className="hero-cta-btn">View All Stories</a>
          </div>
        </section>

        <section className="alumni-network-section">
             <div className="section-header">
                <h2 className="section-title">Our Alumni Work At</h2>
            </div>
            <div className="logo-marquee">
                <div className="logo-track">
                    {[...hiringPartnersLogos, ...hiringPartnersLogos].map((logo, index) => (
                        <div className="logo-item" key={index}>
                            <img src={logo} alt={`Hiring partner logo ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="stories" className="testimonials-grid-section">
            <div className="testimonials-grid">
                {testimonialsData.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <p className="testimonial-quote">"{testimonial.quote}"</p>
                        <div className="testimonial-author-footer">
                            <div className="author-info">
                                <img src={testimonial.image} alt={testimonial.name} className="author-avatar" />
                                <div>
                                    <div className="author-name">{testimonial.name}</div>
                                    <div className="author-role">{testimonial.role}</div>
                                </div>
                            </div>
                            <div className="company-logo">
                                <img src={testimonial.companyLogo} alt={`${testimonial.company} logo`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className="achievement-wall-section">
            <div className="section-header">
                <h2 className="section-title">Placemate Achievement Wall</h2>
                <p className="section-subtitle">Celebrating the success of our students who are now making their mark in the tech industry.</p>
            </div>
            <div className="achievement-grid">
                {achievementWall.map((achievement, index) => (
                    <div className="achievement-card" key={index}>
                        <img src={achievement.image} alt={achievement.name} className="achievement-image" />
                        <div className="achievement-overlay">
                            <h3 className="achievement-name">{achievement.name}</h3>
                            <p className="achievement-company">{achievement.company}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className="video-testimonials-section">
            <div className="video-testimonials-container">
                 <div className="section-header">
                    <h2 className="section-title">Hear Their Stories in Person</h2>
                    <p className="section-subtitle">Watch our alumni share their experiences and how ThePlacemate helped shape their careers.</p>
                </div>
                <div className="video-content-wrapper">
                    <div className="video-player-wrapper">
                        <img src={videoTestimonials[activeVideo].thumbnail} alt={videoTestimonials[activeVideo].name} className="video-player-image" />
                    </div>
                    <div className="playlist">
                        {videoTestimonials.map((video, index) => (
                            <div 
                                key={index} 
                                className={`playlist-item ${activeVideo === index ? 'active' : ''}`}
                                onClick={() => setActiveVideo(index)}
                            >
                                <img src={video.thumbnail} alt={video.name} className="playlist-thumbnail" />
                                <div className="playlist-item-info">
                                    <div className="playlist-item-name">{video.name}</div>
                                    <div className="playlist-item-role">{video.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        
      </div>
    </>
  );
};

export default TestimonialsPage;

