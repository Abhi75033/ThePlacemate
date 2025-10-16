import React, { useState } from 'react';

const Step2_MentorProfile = () => {
  // Dummy data for a selected mentor - this would typically be fetched based on an ID
  const mentor = {
    id: 1,
    name: 'Sarah Chen',
    title: 'Senior Software Engineer @ Google',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    category: 'Web Development',
    expertise: ['React', 'TypeScript', 'System Design', 'Frontend Architecture', 'Career Growth'],
    about: 'With over 8 years of experience at Google, I specialize in building scalable frontend systems and leading high-impact teams. I\'m passionate about mentoring aspiring engineers, helping them navigate technical challenges and build fulfilling careers in tech. Let\'s work together to achieve your goals!',
    session: {
        duration: '45 Min',
        price: '$75'
    }
  };

  // State for the simple calendar
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 8, 26)); // Default to Sep 26, 2025
  const [selectedTime, setSelectedTime] = useState(null);

  const availableTimes = ['09:00 AM', '10:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');
        
        body {
            font-family: 'Lexend', sans-serif;
            background-color: #F9FAFB;
        }

        .profile-page-container {
            max-width: 1100px;
            margin: 0 auto;
            padding: clamp(2rem, 8vw, 4rem) clamp(1.5rem, 5vw, 4rem);
        }
        
        .profile-layout-grid {
            display: grid;
            grid-template-columns: 1fr 400px;
            gap: 3rem;
            align-items: flex-start;
        }

        .mentor-details-column {
            background-color: #ffffff;
            border-radius: 1.5rem;
            padding: 2rem;
            border: 1px solid #F3F4F6;
        }

        .mentor-header {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 2rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid #E5E7EB;
        }

        .mentor-profile-avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid #E0E7FF;
            flex-shrink: 0;
        }

        @media (max-width: 768px) {
            .mentor-profile-avatar {
                width: 80px;
                height: 80px;
            }
        }

        .mentor-info h1 {
            font-size: 2rem;
            font-weight: 700;
            color: #111827;
            margin: 0;
        }

        .mentor-info p {
            font-size: 1rem;
            color: #4F46E5;
            font-weight: 500;
            margin: 0.25rem 0 0 0;
        }

        .mentor-section h2 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #111827;
            margin-bottom: 1rem;
        }

        .mentor-section p {
            font-size: 1rem;
            color: #4B5563;
            line-height: 1.7;
        }
        
        .profile-expertise-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
            margin-top: 1.5rem;
        }

        .profile-expertise-tag {
            background-color: #E0E7FF;
            color: #4338CA;
            font-size: 0.875rem;
            font-weight: 500;
            padding: 0.375rem 1rem;
            border-radius: 9999px;
        }

        /* Booking Column */
        .booking-column {
            background-color: #ffffff;
            border-radius: 1.5rem;
            padding: 2rem;
            border: 1px solid #F3F4F6;
            position: sticky;
            top: 2rem;
        }

        .session-details {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #F9FAFB;
            padding: 1rem;
            border-radius: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .session-details div { text-align: center; }
        .session-details .label { font-size: 0.875rem; color: #6B7280; }
        .session-details .value { font-size: 1.25rem; font-weight: 600; color: #111827; }

        .booking-column h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: #111827;
            margin-bottom: 1rem;
        }

        .time-slots-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
        }

        .time-slot-btn {
            padding: 0.75rem;
            border: 1px solid #D1D5DB;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            font-weight: 500;
            background-color: transparent;
            color: #374151;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .time-slot-btn:hover {
            border-color: #4F46E5;
            color: #4F46E5;
        }
        
        .time-slot-btn.selected {
            background-color: #4F46E5;
            color: white;
            border-color: #4F46E5;
        }

        .confirm-booking-btn {
            display: block;
            width: 100%;
            background: linear-gradient(90deg, #4f46e5, #6d28d9);
            color: white;
            padding: 0.875rem 1.5rem;
            border-radius: 0.75rem;
            text-decoration: none;
            font-weight: 600;
            font-size: 1rem;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 4px 10px -2px rgba(79, 70, 229, 0.4);
            margin-top: 1.5rem;
            border: none;
            cursor: pointer;
        }
        .confirm-booking-btn:disabled {
            background: #D1D5DB;
            cursor: not-allowed;
            box-shadow: none;
        }
        .confirm-booking-btn:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 6px 15px -2px rgba(79, 70, 229, 0.5);
        }

        @media (max-width: 992px) {
            .profile-layout-grid {
                grid-template-columns: 1fr;
            }
        }
      `}</style>
      <div className="profile-page-container">
        <div className="profile-layout-grid">
            <div className="mentor-details-column">
                <div className="mentor-header">
                    <img src={mentor.avatar} alt={mentor.name} className="mentor-profile-avatar" onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/100x100/E0E7FF/4338CA?text=${mentor.name.charAt(0)}`; }}/>
                    <div className="mentor-info">
                        <h1>{mentor.name}</h1>
                        <p>{mentor.title}</p>
                    </div>
                </div>

                <div className="mentor-section">
                    <h2>About Me</h2>
                    <p>{mentor.about}</p>
                </div>

                <div className="mentor-section" style={{marginTop: '2rem'}}>
                    <h2>Areas of Expertise</h2>
                     <div className="profile-expertise-tags">
                        {mentor.expertise.map(skill => <span key={skill} className="profile-expertise-tag">{skill}</span>)}
                    </div>
                </div>
            </div>
            
            <div className="booking-column">
                <div className="session-details">
                    <div>
                        <div className="label">Price</div>
                        <div className="value">{mentor.session.price}</div>
                    </div>
                    <div>
                        <div className="label">Duration</div>
                        <div className="value">{mentor.session.duration}</div>
                    </div>
                </div>
                
                <h3>Select a Time Slot</h3>
                <p style={{fontSize: '0.9rem', color: '#6B7280', marginTop: '-0.5rem', marginBottom: '1.5rem'}}>
                    Date: <strong>{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</strong>
                </p>

                <div className="time-slots-grid">
                    {availableTimes.map(time => (
                        <button 
                            key={time} 
                            className={`time-slot-btn ${selectedTime === time ? 'selected' : ''}`}
                            onClick={() => setSelectedTime(time)}
                        >
                            {time}
                        </button>
                    ))}
                </div>
                
                <button 
                    className="confirm-booking-btn" 
                    disabled={!selectedTime}
                    onClick={() => alert(`Booking confirmed for ${selectedDate.toLocaleDateString()} at ${selectedTime}!`)}
                >
                    Confirm Booking
                </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Step2_MentorProfile;
