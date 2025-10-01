import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookSessionHero = () => {

  const navigate = useNavigate()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');

        .booking-hero-section {
          font-family: 'Lexend', sans-serif;
          background-color: #F9FAFB;
          padding: 5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .booking-hero-container {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 4rem;
        }

        .booking-hero-content h1 {
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          font-weight: 800;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }
        
        .booking-hero-content h1 span {
            color: #4F46E5;
        }

        .booking-hero-content p {
          font-size: 1.15rem;
          color: #4B5563;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        .booking-hero-cta {
          display: inline-block;
          padding: 1rem 2.5rem;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          background-image: linear-gradient(to right, #4F46E5, #6D28D9);
          color: white;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 15px rgba(79, 70, 229, 0.2);
        }

        .booking-hero-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 20px rgba(79, 70, 229, 0.3);
        }

        .booking-hero-image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .booking-hero-image {
          width: 100%;
          max-width: 450px;
          height: auto;
          border-radius: 1.5rem;
          object-fit: cover;
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15);
        }

        /* Responsive adjustments */
        @media (max-width: 992px) {
          .booking-hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .booking-hero-content p {
            margin-left: auto;
            margin-right: auto;
          }
          .booking-hero-image-wrapper {
            margin-top: 3rem;
          }
        }
      `}</style>

      <section className="booking-hero-section">
        <div className="booking-hero-container">
          <div className="booking-hero-content">
            <h1>Unlock Your Potential. <span>Book a Session.</span></h1>
            <p>
              Connect with experienced mentors and industry experts. Get personalized guidance to accelerate your career and achieve your goals.
            </p>
            <button onClick={()=>navigate('/find_mentor')} className="booking-hero-cta">
              Explore Mentors
            </button>
          </div>
          <div className="booking-hero-image-wrapper">
             {/*  */}
            <img 
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop" 
              alt="Professional Mentor Session" 
              className="booking-hero-image"
            />
          </div>
        </div>
      </section>
      
    </>
  );
};

export default BookSessionHero;