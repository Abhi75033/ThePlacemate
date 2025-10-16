import React from 'react';

// A simple SVG icon component for UI elements
const UIIcon = ({ name }) => {
  const icons = {
    check: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
    calendar: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
    clock: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
  };
  return icons[name] || null;
};


const BookingConfirmation = () => {
  
  // This data would be passed as props from the booking flow
  const bookingDetails = {
    mentorName: 'Sarah Chen',
    mentorTitle: 'Senior Software Engineer @ Google',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    date: 'Friday, September 26, 2025',
    time: '10:00 AM',
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');
        
        /* This wrapper ensures the component centers itself within any parent container */
        .confirmation-page-wrapper {
            font-family: 'Lexend', sans-serif;
            background: linear-gradient(170deg, #F9FAFB 0%, #F0F5FF 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 4rem 2rem;
            min-height: 80vh; /* Use min-height to adapt to content size */
        }

        /* --- ANIMATIONS --- */
        @keyframes fadeInSlideUp {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(-40px);
            }
        }
        
        @keyframes iconScaleIn {
            from {
                transform: scale(0.5);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
        }


        .confirmation-container {
          width: 100%;
          max-width: 600px;
          text-align: center;
        }
        
        .confirmation-card {
            background-color: #ffffff;
            border-radius: 2rem;
            border: 1px solid #E5E7EB;
            box-shadow: 0 20px 50px -20px rgba(0,0,0,0.1);
            padding: 3rem;
            /* Animation applied here */
            opacity: 0;
            animation: fadeInSlideUp 0.6s 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .success-icon-wrapper {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: linear-gradient(135deg, #34D399, #10B981);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: -7rem auto 1.5rem;
            box-shadow: 0 10px 20px -5px rgba(22, 163, 74, 0.4);
            border: 6px solid #fff;
            /* Animation applied here */
            opacity: 0;
            transform: scale(0.5);
            animation: iconScaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .confirmation-card h1 {
            font-size: 2.25rem;
            font-weight: 700;
            color: #111827;
            margin: 0;
        }

        .confirmation-card .subtitle {
            font-size: 1.125rem;
            color: #4B5563;
            margin: 0.5rem auto 2rem;
            max-width: 400px;
        }

        .booking-ticket {
            background-color: #F9FAFB;
            border: 1px solid #F3F4F6;
            border-radius: 1.5rem;
            padding: 2rem;
            margin-bottom: 2rem;
        }

        .ticket-header {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            padding-bottom: 1.5rem;
            margin-bottom: 1.5rem;
            border-bottom: 2px dashed #E5E7EB;
        }
        
        .ticket-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        .ticket-mentor-info {
            text-align: left;
        }

        .ticket-mentor-info h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin: 0;
            color: #111827;
        }

        .ticket-mentor-info p {
            font-size: 0.875rem;
            color: #6B7280;
            margin: 0.25rem 0 0 0;
        }

        .ticket-details {
            display: flex;
            justify-content: space-around;
            gap: 1rem;
        }
        
        .ticket-detail-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 0.9rem;
            color: #374151;
        }

        .ticket-detail-item .icon {
            color: #4F46E5;
        }
        
        .actions-container {
            display: flex;
            gap: 1rem;
            justify-content: center;
        }
        
        .action-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
        }
        
        .btn-primary {
            background: #4F46E5;
            color: white;
            box-shadow: 0 4px 15px -2px rgba(79, 70, 229, 0.3);
        }
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px -2px rgba(79, 70, 229, 0.4);
        }
        
        .btn-secondary {
            background: #E0E7FF;
            color: #4338CA;
        }
        .btn-secondary:hover {
            background: #C7D2FE;
        }

        .back-home-link {
            margin-top: 2rem;
            display: inline-block;
            color: #6B7280;
            font-size: 0.875rem;
            text-decoration: none;
            font-weight: 500;
        }
        .back-home-link:hover {
            color: #111827;
        }
        
      `}</style>
      <div className="confirmation-page-wrapper">
          <div className="confirmation-container">
            <div className="confirmation-card">
                <div className="success-icon-wrapper">
                    <UIIcon name="check" />
                </div>
                <h1>Booking Confirmed!</h1>
                <p className="subtitle">
                    Great news! Your session with {bookingDetails.mentorName} is locked in. A confirmation email has been sent to you.
                </p>

                <div className="booking-ticket">
                    <div className="ticket-header">
                        <img src={bookingDetails.avatar} alt={bookingDetails.mentorName} className="ticket-avatar" />
                        <div className="ticket-mentor-info">
                            <h3>{bookingDetails.mentorName}</h3>
                            <p>{bookingDetails.mentorTitle}</p>
                        </div>
                    </div>
                    <div className="ticket-details">
                        <div className="ticket-detail-item">
                            <span className="icon"><UIIcon name="calendar" /></span>
                            <span>{bookingDetails.date}</span>
                        </div>
                        <div className="ticket-detail-item">
                            <span className="icon"><UIIcon name="clock" /></span>
                            <span>{bookingDetails.time}</span>
                        </div>
                    </div>
                </div>

                <div className="actions-container">
                    <button className="action-btn btn-primary">Add to Calendar</button>
                    <button className="action-btn btn-secondary">View All Bookings</button>
                </div>
                <a href="#" className="back-home-link">Go back to Homepage</a>
            </div>
          </div>
      </div>
    </>
  );
};

export default BookingConfirmation;

