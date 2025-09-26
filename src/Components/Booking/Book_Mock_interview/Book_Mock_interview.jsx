import React, { useState } from 'react';

// A simple SVG icon component for UI elements
const UIIcon = ({ name }) => {
  const icons = {
    chevronLeft: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>,
    chevronRight: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>,
  };
  return icons[name] || null;
};

const Calendar = ({ selectedDate, setSelectedDate }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startingDay = firstDayOfMonth.getDay();
    const totalDays = lastDayOfMonth.getDate();

    const changeMonth = (offset) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
    };

    const handleDateClick = (day) => {
        const newSelectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        if (newSelectedDate >= today) {
            setSelectedDate(newSelectedDate);
        }
    };

    const renderDays = () => {
        const days = [];
        for (let i = 0; i < startingDay; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }
        for (let day = 1; day <= totalDays; day++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const isToday = date.getTime() === today.getTime();
            const isSelected = selectedDate && date.getTime() === selectedDate.getTime();
            const isPast = date < today;

            let className = "calendar-day";
            if (isToday) className += " today";
            if (isSelected) className += " selected";
            if (isPast) className += " past";
            
            days.push(
                <div key={day} className={className} onClick={() => handleDateClick(day)}>
                    {day}
                </div>
            );
        }
        return days;
    };

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <button onClick={() => changeMonth(-1)}><UIIcon name="chevronLeft" /></button>
                <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
                <button onClick={() => changeMonth(1)}><UIIcon name="chevronRight" /></button>
            </div>
            <div className="calendar-grid">
                {daysOfWeek.map(day => <div key={day} className="day-name">{day}</div>)}
                {renderDays()}
            </div>
        </div>
    );
};


const Step2_BookMockInterview = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const availableTimes = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');
        
        body, * { box-sizing: border-box; }

        .schedule-page-body {
            font-family: 'Lexend', sans-serif;
            background-color: #F9FAFB;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 2rem;
        }

        .booking-page-container { width: 100%; max-width: 1000px; }
        .back-button { display: inline-flex; align-items: center; gap: 0.5rem; color: #4B5563; font-size: 0.875rem; font-weight: 500; text-decoration: none; margin-bottom: 1.5rem; transition: color 0.2s ease; }
        .back-button:hover { color: #111827; }
        .progress-steps-container { display: flex; align-items: flex-start; justify-content: center; width: 100%; max-width: 600px; margin: 0 auto 3rem; gap: 0.5rem; }
        .progress-step { display: flex; flex-direction: column; align-items: center; text-align: center; color: #9CA3AF; font-weight: 500; position: relative; width: 120px; }
        .step-circle { width: 36px; height: 36px; border-radius: 50%; border: 2px solid #D1D5DB; display: flex; align-items: center; justify-content: center; font-weight: 700; background-color: #ffffff; transition: all 0.3s ease; z-index: 2; }
        .step-label { margin-top: 0.75rem; font-size: 0.875rem; font-weight: 500; }
        .progress-connector { flex-grow: 1; height: 2px; background-color: #D1D5DB; margin-top: 17px; }
        .progress-step.completed .step-circle, .progress-step.active .step-circle { background: linear-gradient(90deg, #4f46e5, #6d28d9); border-color: #4F46E5; color: white; box-shadow: 0 4px 10px -2px rgba(79, 70, 229, 0.4); }
        .progress-step.completed .step-label, .progress-step.active .step-label { color: #4F46E5; font-weight: 600; }
        .progress-step.completed .progress-connector { background: linear-gradient(90deg, #4f46e5, #6d28d9); }

        .schedule-layout-grid {
            display: grid; grid-template-columns: 1fr 350px; gap: 2rem; align-items: flex-start;
        }
        
        /* Calendar Styles */
        .calendar-container { background: #FFFFFF; border-radius: 1.5rem; padding: 2rem; border: 1px solid #E5E7EB; box-shadow: 0 10px 40px -15px rgba(0,0,0,0.05); }
        .calendar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
        .calendar-header h2 { font-size: 1.25rem; font-weight: 600; color: #111827; margin: 0; }
        .calendar-header button { background: none; border: none; cursor: pointer; padding: 0.5rem; color: #6B7280; border-radius: 50%; }
        .calendar-header button:hover { background: #F3F4F6; color: #111827; }
        .calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.5rem; }
        .day-name { text-align: center; font-size: 0.875rem; font-weight: 500; color: #6B7280; }
        
        /* --- FIX: Made calendar date selection a circle --- */
        .calendar-day {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px; /* Equal width */
            height: 40px; /* Equal height */
            margin: 0 auto; /* Center within the grid cell */
            border-radius: 50%;
            cursor: pointer;
            transition: background-color 0.2s, color 0.2s;
        }

        .calendar-day:not(.past):not(.empty):hover { background-color: #E0E7FF; }
        .calendar-day.today { font-weight: 700; color: #4F46E5; }
        .calendar-day.selected { background-color: #4F46E5; color: white; font-weight: 700; }
        .calendar-day.past { color: #D1D5DB; cursor: not-allowed; }
        .calendar-day.empty { cursor: default; }

        /* Time Slot Styles */
        .time-slot-column { background: #FFFFFF; border-radius: 1.5rem; padding: 2rem; border: 1px solid #E5E7EB; box-shadow: 0 10px 40px -15px rgba(0,0,0,0.05); }
        .time-slot-column h3 { font-size: 1.25rem; font-weight: 600; color: #111827; margin: 0 0 1.5rem 0; }
        .time-slots-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
        .time-slot-btn { padding: 0.75rem; border: 1px solid #D1D5DB; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 500; background-color: transparent; color: #374151; cursor: pointer; transition: all 0.2s ease; }
        .time-slot-btn:hover { border-color: #4F46E5; color: #4F46E5; }
        .time-slot-btn.selected { background-color: #4F46E5; color: white; border-color: #4F46E5; }
        .placeholder-text { font-size: 0.9rem; color: #6B7280; text-align: center; padding: 2rem 0; }
        
        .proceed-btn { display: block; width: 100%; background: #4F46E5; color: white; padding: 1rem; border-radius: 0.75rem; text-decoration: none; font-weight: 600; font-size: 1rem; text-align: center; transition: all 0.3s ease; box-shadow: 0 4px 15px -2px rgba(79, 70, 229, 0.4); border: none; cursor: pointer; margin-top: 2rem; }
        .proceed-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 20px -2px rgba(79, 70, 229, 0.5); background: #4338CA; }
        .proceed-btn:disabled { background: #D1D5DB; cursor: not-allowed; box-shadow: none; }

        @media (max-width: 992px) { .schedule-layout-grid { grid-template-columns: 1fr; } }
      `}</style>
      <div className="schedule-page-body">
        <div className="booking-page-container">
           <a href="#" className="back-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
              Go Back
          </a>
          <div className="progress-steps-container">
              <div className="progress-step completed"><div className="step-circle">1</div><div className="step-label">Select Interview</div></div>
              <div className="progress-connector" style={{background: 'linear-gradient(90deg, #4f46e5, #6d28d9)'}}></div>
              <div className="progress-step active"><div className="step-circle">2</div><div className="step-label">Schedule</div></div>
              <div className="progress-connector"></div>
              <div className="progress-step"><div className="step-circle">3</div><div className="step-label">Confirm & Pay</div></div>
          </div>

          <div className="schedule-layout-grid">
              <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
              <div className="time-slot-column">
                <h3>Available Time Slots</h3>
                {selectedDate ? (
                    <>
                        <p style={{fontSize: '0.9rem', color: '#6B7280', marginTop: '-1rem', marginBottom: '1.5rem'}}>
                            For <strong>{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</strong>
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
                    </>
                ) : (
                    <p className="placeholder-text">Please select a date from the calendar to see available times.</p>
                )}
                <button className="proceed-btn" disabled={!selectedDate || !selectedTime}>Proceed to Payment</button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2_BookMockInterview;

