import React, { useState } from 'react';

// --- SVG Icons for HERO section ---
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const BarChartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>;
const StarIcon = ({ isFilled = true }) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={isFilled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;

// --- SVG Icons for CONTENT section ---
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const TargetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
const ChevronDownIcon = ({ className }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const PlayCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;


const ViewCoursePage = () => {
    // State for accordions
    const [openSection, setOpenSection] = useState(0);
    const [openLiveSection, setOpenLiveSection] = useState(0);
    const [openFaq, setOpenFaq] = useState(0);
    // State for tabs
    const [activeTab, setActiveTab] = useState('curriculum');
    // State for user rating
    const [userRating, setUserRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const toggleSection = (index) => setOpenSection(openSection === index ? null : index);
    const toggleLiveSection = (index) => setOpenLiveSection(openLiveSection === index ? null : index);
    const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

    const curriculumData = [
        { title: "Module 1: Introduction to Web Development", duration: "1h 30m", lessons: [ { name: "How the Internet Works", time: "15m" }, { name: "Introduction to HTML, CSS & JavaScript", time: "45m" }, { name: "Setting Up Your Development Environment", time: "30m" }, ], },
        { title: "Module 2: Advanced HTML & CSS", duration: "4h 15m", lessons: [ { name: "Deep Dive into Semantic HTML", time: "45m" }, { name: "Flexbox, Grid, and Responsive Design", time: "1h 30m" }, { name: "Advanced CSS Animations and Transitions", time: "1h 15m" }, { name: "Building a Responsive Portfolio Website", time: "45m" }, ], },
        { title: "Module 3: JavaScript Fundamentals", duration: "8h 50m", lessons: [ { name: "Variables, Data Types, and Operators", time: "1h 20m" }, { name: "DOM Manipulation", time: "2h 30m" }, { name: "Asynchronous JavaScript (Promises, Async/Await)", time: "3h 10m" }, { name: "Building a To-Do List App", time: "1h 50m" }, ], },
        { title: "Module 4: Introduction to React.js", duration: "10h 5m", lessons: [ { name: "Thinking in Components", time: "1h 0m" }, { name: "State, Props, and Lifecycle", time: "2h 45m" }, { name: "Handling Events and Forms", time: "2h 20m" }, { name: "Building a Weather App with React", time: "4h 0m" }, ], }
    ];
    
     const liveSessionsData = [
        { week: "Week 1: Foundations & Introduction", sessions: [ { title: "Live Q&A: Setting Up Your Environment", date: "Wednesday, September 24, 2025", time: "7:00 PM - 8:00 PM IST", }, { title: "Live Now: Getting Started with HTML", date: "Saturday, September 27, 2025", time: "11:00 AM - 12:30 PM IST", } ] },
        { week: "Week 2: Diving into HTML & CSS", sessions: [ { title: "Live Workshop: Building a Responsive Layout", date: "Wednesday, October 1, 2025", time: "7:00 PM - 8:30 PM IST", }, { title: "Deep Dive: Advanced CSS Selectors", date: "Saturday, October 4, 2025", time: "11:00 AM - 12:00 PM IST", } ] },
        { week: "Week 3: JavaScript Fundamentals", sessions: [ { title: "Live Coding: DOM Manipulation Challenge", date: "Wednesday, October 8, 2025", time: "7:00 PM - 8:00 PM IST", } ] },
    ];
    
    const reviewsData = [
        { name: 'Rahul Varma', rating: 5, review: 'This is the best web development course I have ever taken. The instructor explains complex topics in a very simple and engaging way. Highly recommended!' },
        { name: 'Anjali Singh', rating: 4, review: 'Great content and very well-structured. I wish there were more advanced Node.js topics, but overall it’s a fantastic course for beginners.' },
        { name: 'Sameer Khan', rating: 5, review: 'Alex is an amazing teacher! The live sessions were incredibly helpful for clearing my doubts. The projects are practical and helped me build a solid portfolio.' },
    ];
    
    const faqData = [
        { q: 'Is this course suitable for complete beginners?', a: 'Yes! This course is designed for absolute beginners with no prior programming experience. We start with the fundamental concepts and build up from there.' },
        { q: 'Will I get a certificate upon completion?', a: 'Yes, upon successful completion of all modules and projects, you will receive a verifiable certificate that you can share on your LinkedIn profile and resume.' },
        { q: 'What if I miss a live session?', a: 'No worries! All live sessions are recorded and will be made available in the "Live Sessions" tab within 24 hours, so you can watch them at your convenience.' },
        { q: 'Is there a community or support forum?', a: 'Yes, all enrolled students get access to our private Discord community where you can ask questions, share your progress, and interact with fellow learners and instructors.' },
    ];

    const ratingBreakdown = { 5: 75, 4: 15, 3: 5, 2: 3, 1: 2 };

    const now = new Date("2025-09-27T11:54:00+05:30"); // Hardcoded current time for demonstration

    // Helper to parse time and create Date objects
    const getSessionDates = (sessionDate, sessionTime) => {
        try {
            const timeParts = sessionTime.split(' - ');
            const startTimeStr = timeParts[0];
            const endTimeStr = timeParts[1].split(' ')[0] + ' ' + timeParts[1].split(' ')[1];
            const parseTime = (timeStr) => {
                const [time, period] = timeStr.split(' ');
                let [hour, minute] = time.split(':').map(Number);
                if (period.toLowerCase() === 'pm' && hour < 12) hour += 12;
                if (period.toLowerCase() === 'am' && hour === 12) hour = 0;
                return { hour, minute: minute || 0 };
            };
            const start = parseTime(startTimeStr);
            const end = parseTime(endTimeStr);
            const sessionStartDate = new Date(sessionDate);
            sessionStartDate.setHours(start.hour, start.minute, 0, 0);
            const sessionEndDate = new Date(sessionDate);
            sessionEndDate.setHours(end.hour, end.minute, 0, 0);
            return { sessionStartDate, sessionEndDate };
        } catch (error) {
            return { sessionStartDate: null, sessionEndDate: null };
        }
    };
    
    const isSessionActive = (sessionDate, sessionTime) => {
        const { sessionStartDate, sessionEndDate } = getSessionDates(sessionDate, sessionTime);
        if (!sessionStartDate || !sessionEndDate) return false;
        return now >= sessionStartDate && now <= sessionEndDate;
    };

    const hasSessionPassed = (sessionDate, sessionTime) => {
        const { sessionEndDate } = getSessionDates(sessionDate, sessionTime);
        if (!sessionEndDate) return false;
        return now > sessionEndDate;
    };
    
    const handleAddToCalendar = (session) => {
        const { title, date, time } = session;
        const { sessionStartDate, sessionEndDate } = getSessionDates(date, time);
        if (!sessionStartDate || !sessionEndDate) return alert("Could not parse session time.");
        const toGoogleFormat = (d) => d.toISOString().replace(/-|:|\.\d{3}/g, '');
        const googleDates = `${toGoogleFormat(sessionStartDate)}/${toGoogleFormat(sessionEndDate)}`;
        const calendarUrl = new URL('https://www.google.com/calendar/render');
        calendarUrl.searchParams.append('action', 'TEMPLATE');
        calendarUrl.searchParams.append('text', title);
        calendarUrl.searchParams.append('dates', googleDates);
        calendarUrl.searchParams.append('details', `Joining the live session for: ${title}`);
        calendarUrl.searchParams.append('ctz', 'Asia/Kolkata');
        window.open(calendarUrl.toString(), '_blank');
    };


    return (
        <>
            <style>{`
                /* --- General & Hero Section Styles --- */
                @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');
                body { background-color: #F9FAFB; }
                .course-hero-section { font-family: 'Lexend', sans-serif; background-color: #111827; color: #F9FAFB; padding: 5rem 2rem; display: flex; justify-content: center; align-items: center; }
                .course-hero-container { max-width: 1200px; width: 100%; display: grid; grid-template-columns: 1fr 1.2fr; align-items: center; gap: 4rem; }
                .course-thumbnail-wrapper { position: relative; cursor: pointer; border-radius: 1rem; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4); }
                .course-thumbnail { width: 100%; height: auto; display: block; transition: transform 0.3s ease; }
                .course-thumbnail-wrapper:hover .course-thumbnail { transform: scale(1.05); }
                .play-button-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.3); display: flex; justify-content: center; align-items: center; opacity: 1; transition: opacity 0.3s ease; }
                .course-thumbnail-wrapper:hover .play-button-overlay { opacity: 0.8; }
                .play-button-icon { width: 70px; height: 70px; background: rgba(255, 255, 255, 0.9); border-radius: 50%; display: flex; justify-content: center; align-items: center; }
                .play-button-icon svg { width: 30px; height: 30px; color: #4F46E5; margin-left: 4px; }
                .course-details-content h1 { font-size: clamp(2.2rem, 4vw, 3rem); font-weight: 800; line-height: 1.2; margin: 0 0 1rem 0; }
                .course-description { font-size: 1.1rem; color: #D1D5DB; line-height: 1.7; margin-bottom: 2rem; }
                .instructor-info { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2rem; }
                .instructor-photo { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 2px solid #374151; }
                .instructor-name { font-weight: 500; color: #E5E7EB; }
                .course-meta { display: flex; flex-wrap: wrap; gap: 1.5rem; margin-bottom: 2.5rem; color: #D1D5DB; }
                .meta-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.95rem; }
                .meta-item svg { color: #818CF8; }
                .course-cta-buttons { display: flex; gap: 1rem; }
                .cta-button { padding: 0.8rem 2rem; border-radius: 0.5rem; font-weight: 600; font-size: 1rem; border: 2px solid transparent; cursor: pointer; transition: all 0.3s ease; }
                .cta-primary { background-color: #4F46E5; color: white; }
                .cta-primary:hover { background-color: #4338CA; }
                .cta-secondary { background-color: transparent; color: #E5E7EB; border-color: #374151; }
                .cta-secondary:hover { background-color: #374151; color: white; }

                /* --- Course Content Section Styles --- */
                .course-content-section { font-family: 'Lexend', sans-serif; background-color: #F9FAFB; padding: 5rem 2rem; }
                .course-content-container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 2fr; gap: 3rem; }
                .course-sidebar { position: sticky; top: 2rem; display: flex; flex-direction: column; gap: 2rem; }
                .info-box { border: 1px solid #E5E7EB; border-radius: 0.75rem; padding: 1.5rem; background-color: #FFFFFF; }
                .info-box h3 { font-size: 1.25rem; font-weight: 600; color: #111827; margin: 0 0 1rem 0; }
                .info-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; }
                .info-list-item { display: flex; align-items: flex-start; gap: 0.75rem; color: #374151; font-size: 0.95rem; }
                .info-list-item svg { flex-shrink: 0; margin-top: 2px; }
                .tabs-navigation { display: flex; gap: 1rem; border-bottom: 1px solid #E5E7EB; margin-bottom: 2rem; }
                .tab-button { padding: 0.75rem 0.25rem; font-size: 1.2rem; font-weight: 600; color: #6B7280; background: none; border: none; cursor: pointer; border-bottom: 3px solid transparent; transition: all 0.2s ease; }
                .tab-button.active { color: #4F46E5; border-bottom-color: #4F46E5; }
                .curriculum-content h2 { font-size: 1.8rem; font-weight: 700; color: #111827; margin-bottom: 1.5rem; }
                .curriculum-accordion { border: 1px solid #E5E7EB; border-radius: 0.75rem; overflow: hidden; }
                .accordion-item { border-bottom: 1px solid #E5E7EB; }
                .accordion-item:last-child { border-bottom: none; }
                .accordion-header { display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 1.25rem; background-color: #FFFFFF; cursor: pointer; border: none; text-align: left; }
                .accordion-header:hover { background-color: #F9FAFB; }
                .accordion-title { font-size: 1.1rem; font-weight: 600; color: #1F2937; }
                .accordion-meta { font-size: 0.9rem; color: #6B7280; margin-top: 0.25rem; }
                .accordion-toggle-icon { transition: transform 0.3s ease; color: #6B7280; }
                .accordion-toggle-icon.open { transform: rotate(180deg); }
                .accordion-content { max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out; background-color: #FFFFFF; }
                .accordion-content.open { max-height: 500px; }
                .lesson-list { padding: 0 1.25rem 1.25rem 1.25rem; list-style: none; margin: 0; display: flex; flex-direction: column; gap: 1rem; border-top: 1px solid #E5E7EB; }
                .lesson-item { display: flex; justify-content: space-between; align-items: center; font-size: 0.95rem; color: #374151; }
                .lesson-name { display: flex; align-items: center; gap: 0.75rem; }
                .lesson-time { font-size: 0.9rem; color: #6B7280; }
                .live-session-content-list { padding: 0.5rem 1.25rem 1.25rem 1.25rem; list-style: none; margin: 0; display: flex; flex-direction: column; gap: 1rem; border-top: 1px solid #E5E7EB; }
                .live-session-card { background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 0.75rem; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
                .live-session-card h4 { font-size: 1.2rem; font-weight: 600; color: #111827; margin: 0; }
                .session-time-info { display: flex; align-items: center; gap: 0.5rem; color: #4B5563; font-size: 0.95rem; }
                .session-actions { display: flex; gap: 1rem; margin-top: 0.5rem; }
                .join-button { background-color: #4F46E5; color: white; border: none; padding: 0.6rem 1.2rem; border-radius: 0.5rem; font-weight: 500; cursor: pointer; transition: background-color 0.2s; }
                .join-button:disabled { background-color: #A5B4FC; cursor: not-allowed; }
                .calendar-button { background-color: #F3F4F6; color: #374151; border: 1px solid #D1D5DB; padding: 0.6rem 1.2rem; border-radius: 0.5rem; font-weight: 500; cursor: pointer; transition: background-color 0.2s; }
                .calendar-button:hover { background-color: #E5E7EB; }

                /* --- Ratings, Rate, FAQ Section Styles --- */
                .page-section { font-family: 'Lexend', sans-serif; padding: 0 2rem 5rem 2rem; }
                .page-section-container { max-width: 800px; margin: 0 auto; }
                .section-title { font-size: 1.8rem; font-weight: 700; color: #111827; margin-bottom: 2rem; }
                .ratings-summary { display: grid; grid-template-columns: auto 1fr; gap: 2rem; align-items: center; background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 0.75rem; padding: 2rem; }
                .rating-score { text-align: center; }
                .rating-score-value { font-size: 3.5rem; font-weight: 800; color: #111827; }
                .rating-stars { display: flex; gap: 0.25rem; color: #FBBF24; margin: 0.5rem 0; }
                .rating-score-text { font-size: 1rem; font-weight: 500; color: #6B7280; }
                .rating-breakdown-list { display: flex; flex-direction: column; gap: 0.75rem; }
                .rating-breakdown-item { display: flex; align-items: center; gap: 1rem; font-size: 0.9rem; }
                .progress-bar-container { flex-grow: 1; background-color: #F3F4F6; border-radius: 99px; height: 8px; overflow: hidden; }
                .progress-bar-fill { background-color: #FBBF24; height: 100%; border-radius: 99px; }
                .review-card { background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 0.75rem; padding: 1.5rem; margin-top: 1.5rem; }
                .review-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
                .review-avatar { width: 40px; height: 40px; border-radius: 50%; background-color: #E5E7EB; display: flex; align-items: center; justify-content: center; color: #6B7280; }
                .review-author { font-weight: 600; color: #111827; }
                .review-body { color: #4B5563; line-height: 1.6; }
                .rate-course-box { background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 0.75rem; padding: 2rem; text-align: center; }
                .rating-input-stars { display: flex; justify-content: center; gap: 0.5rem; margin: 1rem 0 1.5rem 0; }
                .rating-input-stars svg { width: 32px; height: 32px; cursor: pointer; color: #D1D5DB; transition: color 0.2s; }
                .rating-input-stars svg.filled, .rating-input-stars svg.hovered { color: #FBBF24; }
                .submit-rating-btn { background-color: #4F46E5; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 500; cursor: pointer; }
                .faq-accordion { display: flex; flex-direction: column; gap: 1rem; }
                .faq-item { background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 0.75rem; }
                .faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 1.25rem; cursor: pointer; background: none; border: none; text-align: left; }
                .faq-question h3 { font-size: 1.1rem; font-weight: 600; color: #1F2937; margin: 0; }
                .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out, padding 0.4s ease-out; }
                .faq-answer.open { max-height: 200px; padding: 0 1.25rem 1.25rem 1.25rem; }
                .faq-answer p { margin: 0; color: #4B5563; line-height: 1.7; border-top: 1px solid #E5E7EB; padding-top: 1.25rem; }

                /* Responsive */
                @media (max-width: 992px) {
                  .course-hero-container, .course-content-container { grid-template-columns: 1fr; gap: 3rem; }
                  .course-sidebar { position: static; }
                }
                @media (max-width: 640px) {
                    .ratings-summary { grid-template-columns: 1fr; text-align: center; }
                    .rating-score { margin-bottom: 1rem; }
                    .rating-stars { justify-content: center; }
                }

            `}</style>
            
            {/* --- Hero Section JSX --- */}
            <section className="course-hero-section">
                <div className="course-hero-container">
                  <div className="course-thumbnail-wrapper">
                    <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2231&auto-format=fit=crop" alt="Web Development Course" className="course-thumbnail" />
                    <div className="play-button-overlay"> <div className="play-button-icon"> <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg> </div> </div>
                  </div>
                  <div className="course-details-content">
                    <h1>The Complete Web Development Bootcamp</h1>
                    <p className="course-description"> Become a full-stack web developer with just one course. Learn HTML, CSS, Javascript, React, Node.js, and more to build real-world applications from scratch. </p>
                    <div className="instructor-info">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto-format=fit=crop" alt="Instructor" className="instructor-photo" />
                      <span className="instructor-name">Created by Alex Morgan</span>
                    </div>
                    <div className="course-meta">
                      <div className="meta-item"><ClockIcon /><span>8 Weeks Long</span></div>
                      <div className="meta-item"><BarChartIcon /><span>For Beginners</span></div>
                      <div className="meta-item"><StarIcon /><span>4.8 (12,500 ratings)</span></div>
                    </div>
                    <div className="course-cta-buttons">
                      <button className="cta-button cta-primary">Enroll Now</button>
                      <button className="cta-button cta-secondary">Save for Later</button>
                    </div>
                  </div>
                </div>
            </section>

            {/* --- Content Section JSX --- */}
            <section className="course-content-section">
                <div className="course-content-container">
                  <aside className="course-sidebar">
                    <div className="info-box">
                      <h3>What you'll learn</h3>
                      <ul className="info-list">
                        <li className="info-list-item"><CheckCircleIcon /><span>Build beautiful, responsive websites with HTML5, CSS3, and Flexbox.</span></li>
                        <li className="info-list-item"><CheckCircleIcon /><span>Master modern JavaScript (ES6+) and asynchronous programming.</span></li>
                        <li className="info-list-item"><CheckCircleIcon /><span>Develop powerful single-page applications with React.js.</span></li>
                        <li className="info-list-item"><CheckCircleIcon /><span>Create scalable back-end servers and APIs with Node.js and Express.</span></li>
                        <li className="info-list-item"><CheckCircleIcon /><span>Understand and use NoSQL databases like MongoDB.</span></li>
                      </ul>
                    </div>
                    <div className="info-box">
                      <h3>Requirements</h3>
                      <ul className="info-list">
                        <li className="info-list-item"><TargetIcon /><span>No prior programming experience needed. We start from the very basics.</span></li>
                        <li className="info-list-item"><TargetIcon /><span>A computer with internet access (Windows, macOS, or Linux).</span></li>
                        <li className="info-list-item"><TargetIcon /><span>A passion for learning and the determination to succeed.</span></li>
                      </ul>
                    </div>
                  </aside>
                  <main className="curriculum-content">
                    <div className="tabs-navigation">
                        <button className={`tab-button ${activeTab === 'curriculum' ? 'active' : ''}`} onClick={() => setActiveTab('curriculum')}> Course Curriculum </button>
                        <button className={`tab-button ${activeTab === 'live' ? 'active' : ''}`} onClick={() => setActiveTab('live')}> Live Sessions </button>
                    </div>
                    {activeTab === 'curriculum' && ( <div className="curriculum-accordion"> {curriculumData.map((section, index) => ( <div key={index} className="accordion-item"> <button className="accordion-header" onClick={() => toggleSection(index)}> <div> <h4 className="accordion-title">{section.title}</h4> <p className="accordion-meta">{section.lessons.length} lessons • {section.duration}</p> </div> <ChevronDownIcon className={`accordion-toggle-icon ${openSection === index ? 'open' : ''}`} /> </button> <div className={`accordion-content ${openSection === index ? 'open' : ''}`}> <ul className="lesson-list"> {section.lessons.map((lesson, lessonIndex) => ( <li key={lessonIndex} className="lesson-item"> <span className="lesson-name"> <PlayCircleIcon /> {lesson.name} </span> <span className="lesson-time">{lesson.time}</span> </li> ))} </ul> </div> </div> ))} </div> )}
                    {activeTab === 'live' && ( <div className="curriculum-accordion"> {liveSessionsData.map((week, index) => ( <div key={index} className="accordion-item"> <button className="accordion-header" onClick={() => toggleLiveSection(index)}> <div> <h4 className="accordion-title">{week.week}</h4> <p className="accordion-meta">{week.sessions.length} live sessions this week</p> </div> <ChevronDownIcon className={`accordion-toggle-icon ${openLiveSection === index ? 'open' : ''}`} /> </button> <div className={`accordion-content ${openLiveSection === index ? 'open' : ''}`}> <div className="live-session-content-list"> {week.sessions.map((session, sessionIndex) => { const sessionIsActiveNow = isSessionActive(session.date, session.time); const sessionHasPassedNow = hasSessionPassed(session.date, session.time); return ( <div key={sessionIndex} className="live-session-card"> <h4>{session.title}</h4> <div className="session-time-info"> <CalendarIcon /> <span>{session.date} • {session.time}</span> </div> <div className="session-actions"> <button className="join-button" disabled={!sessionIsActiveNow && !sessionHasPassedNow} onClick={() => { if (sessionHasPassedNow) alert('Navigating to recording...'); else if (sessionIsActiveNow) alert('Joining live session...'); }} > {sessionHasPassedNow ? 'View Recording' : 'Join Session'} </button> <button className="calendar-button" onClick={() => handleAddToCalendar(session)} > Add to Calendar </button> </div> </div> ) })} </div> </div> </div> ))} </div> )}
                  </main>
                </div>
            </section>
            
            {/* --- Ratings & Reviews Section --- */}
            <section className="page-section">
                <div className="page-section-container">
                    <h2 className="section-title">Ratings & Reviews</h2>
                    <div className="ratings-summary">
                        <div className="rating-score">
                            <div className="rating-score-value">4.8</div>
                            <div className="rating-stars">
                                {[...Array(5)].map((_, i) => <StarIcon key={i} isFilled={i < 4.8} />)}
                            </div>
                            <div className="rating-score-text">Course Rating</div>
                        </div>
                        <div className="rating-breakdown-list">
                            {Object.entries(ratingBreakdown).reverse().map(([stars, percent]) => (
                                <div key={stars} className="rating-breakdown-item">
                                    <span>{stars} Stars</span>
                                    <div className="progress-bar-container"><div className="progress-bar-fill" style={{width: `${percent}%`}}></div></div>
                                    <span>{percent}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <h3 className="section-title" style={{marginTop: '3rem', fontSize: '1.5rem'}}>Student Feedback</h3>
                    {reviewsData.map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="review-header">
                                <div className="review-avatar"><UserIcon/></div>
                                <div>
                                    <div className="review-author">{review.name}</div>
                                    <div className="rating-stars" style={{color: '#FBBF24'}}>
                                        {[...Array(5)].map((_, i) => <StarIcon key={i} isFilled={i < review.rating} />)}
                                    </div>
                                </div>
                            </div>
                            <p className="review-body">{review.review}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Rate Course Section --- */}
            <section className="page-section">
                <div className="page-section-container">
                    <div className="rate-course-box">
                        <h2 className="section-title" style={{marginBottom: '0.5rem'}}>Rate this course</h2>
                        <p className="text-gray-600">Tell others what you think</p>
                        <div className="rating-input-stars">
                            {[...Array(5)].map((_, index) => {
                                const ratingValue = index + 1;
                                return (
                                    <span key={ratingValue} onMouseEnter={() => setHoverRating(ratingValue)} onMouseLeave={() => setHoverRating(0)} onClick={() => setUserRating(ratingValue)}>
                                        <svg viewBox="0 0 24 24" className={ratingValue <= (hoverRating || userRating) ? 'filled' : ''}>
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                    </span>
                                );
                            })}
                        </div>
                        <button className="submit-rating-btn" onClick={() => alert(`Thank you for your ${userRating}-star rating!`)}>Submit Rating</button>
                    </div>
                </div>
            </section>
            
            {/* --- FAQ Section --- */}
            <section className="page-section">
                <div className="page-section-container">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <div className="faq-accordion">
                        {faqData.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button className="faq-question" onClick={() => toggleFaq(index)}>
                                    <h3>{faq.q}</h3>
                                    <ChevronDownIcon className={`accordion-toggle-icon ${openFaq === index ? 'open' : ''}`} />
                                </button>
                                <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ViewCoursePage;

