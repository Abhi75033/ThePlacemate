import React, { useState, useEffect } from 'react';

// --- SVG Icons ---
const ArrowLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>;
const CheckCircleIcon = ({ filled = false }) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={filled ? 0 : 2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const PlayCircleIcon = ({ size = 18 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>;
const VideoPlaceholderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>;
const ChevronDownIcon = ({ className }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const TargetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
const FileTextIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;


const CoursePlayerPage = () => {
    // Data for the page
    const courseData = [ { title: "Module 1: Introduction", lessons: [ { id: 1, title: "How the Internet Works", duration: "15m", content: "A deep dive into the underlying protocols and infrastructure that power the web." }, { id: 2, title: "Intro to Web Development", duration: "45m", content: "Understanding the roles of HTML, CSS, and JavaScript in creating modern websites." }, { id: 3, title: "Setting Up Your Environment", duration: "30m", content: "A step-by-step guide to installing VS Code, Node.js, and other essential tools." }, ], }, { title: "Module 2: Advanced HTML & CSS", lessons: [ { id: 4, title: "Deep Dive into Semantic HTML", duration: "45m", content: "Learn the importance of semantic tags for SEO and accessibility." }, { id: 5, title: "Flexbox, Grid, and Responsive Design", duration: "1h 30m", content: "Master modern CSS layouts to build complex, responsive websites." }, ], }, { title: "Module 3: JavaScript Fundamentals", lessons: [ { id: 6, title: "Variables, Data Types, and Operators", duration: "1h 20m", content: "Grasp the building blocks of the JavaScript language." }, { id: 7, title: "DOM Manipulation", duration: "2h 30m", content: "Learn how to interact with and dynamically change website content." }, ], } ];
    const liveSessionsData = [ { week: "Week 1: Foundations & Introduction", sessions: [ { title: "Live Q&A: Setting Up Your Environment", date: "Wednesday, September 24, 2025", time: "7:00 PM - 8:00 PM IST", }, { title: "Live Now: Getting Started with HTML", date: "Saturday, September 27, 2025", time: "11:00 AM - 12:30 PM IST", } ] }, { week: "Week 2: Diving into HTML & CSS", sessions: [ { title: "Live Workshop: Building a Responsive Layout", date: "Wednesday, October 1, 2025", time: "7:00 PM - 8:30 PM IST", } ] }, ];
    const mentorsData = [ { name: "Priya Sharma", title: "Senior Frontend Developer", expertise: "React, Next.js, UI/UX", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200" }, { name: "Rohan Desai", title: "Backend Specialist", expertise: "Node.js, Databases, DevOps", img: "https://images.unsplash.com/photo-1506794778202-cad84cf4f1d?q=80&w=200" }, { name: "Aisha Khan", title: "Full-Stack Engineer", expertise: "System Design, MERN Stack", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200" } ];
    const learnData = [ "Build beautiful, responsive websites with HTML5, CSS3, and Flexbox.", "Master modern JavaScript (ES6+) and asynchronous programming.", "Develop powerful single-page applications with React.js.", "Create scalable back-end servers and APIs with Node.js and Express.", "Understand and use NoSQL databases like MongoDB." ];
    const requirementsData = [ "No prior programming experience needed. We start from the very basics.", "A computer with internet access (Windows, macOS, or Linux).", "A passion for learning and the determination to succeed." ];
    const projectsData = [ { id: 1, title: "Project 1: Personal Portfolio Website", description: "Build a responsive personal portfolio website to showcase your skills and projects. This is a foundational project to practice your HTML and CSS.", todos: [ "Create the basic HTML structure.", "Style the page using CSS Flexbox or Grid.", "Ensure the website is responsive on mobile devices.", "Deploy the website to a hosting service like Netlify or Vercel." ] }, { id: 2, title: "Project 2: JavaScript To-Do List App", description: "Create a functional to-do list application to practice your DOM manipulation and event handling skills in JavaScript.", todos: [ "Design the UI for adding and displaying tasks.", "Implement functionality to add new tasks.", "Allow users to mark tasks as complete.", "Enable users to delete tasks." ] } ];

    // State management
    const [activeLesson, setActiveLesson] = useState(courseData[0].lessons[0]);
    const [completedLessons, setCompletedLessons] = useState(new Set());
    const [openSection, setOpenSection] = useState(0);
    const [openLiveSection, setOpenLiveSection] = useState(0);
    const [completionPercentage, setCompletionPercentage] = useState(0);
    const [activeTab, setActiveTab] = useState('curriculum');
    const [openProjectSubmission, setOpenProjectSubmission] = useState(null);
    
    const totalLessons = courseData.reduce((acc, section) => acc + section.lessons.length, 0);
    const now = new Date("2025-09-27T12:32:00+05:30");

    useEffect(() => {
        const newPercentage = Math.round((completedLessons.size / totalLessons) * 100);
        setCompletionPercentage(newPercentage);
    }, [completedLessons, totalLessons]);

    // Helper functions
    const toggleLessonComplete = (lessonId) => { setCompletedLessons(prev => { const newSet = new Set(prev); newSet.has(lessonId) ? newSet.delete(lessonId) : newSet.add(lessonId); return newSet; }); };
    const getSessionDates = (sessionDate, sessionTime) => { try { const timeParts = sessionTime.split(' - '); const startTimeStr = timeParts[0]; const endTimeStr = timeParts[1].split(' ')[0] + ' ' + timeParts[1].split(' ')[1]; const parseTime = (timeStr) => { const [time, period] = timeStr.split(' '); let [hour, minute] = time.split(':').map(Number); if (period.toLowerCase() === 'pm' && hour < 12) hour += 12; if (period.toLowerCase() === 'am' && hour === 12) hour = 0; return { hour, minute: minute || 0 }; }; const start = parseTime(startTimeStr); const end = parseTime(endTimeStr); const sessionStartDate = new Date(sessionDate); sessionStartDate.setHours(start.hour, start.minute, 0, 0); const sessionEndDate = new Date(sessionDate); sessionEndDate.setHours(end.hour, end.minute, 0, 0); return { sessionStartDate, sessionEndDate }; } catch (error) { return { sessionStartDate: null, sessionEndDate: null }; } };
    const isSessionActive = (sessionDate, sessionTime) => { const { sessionStartDate, sessionEndDate } = getSessionDates(sessionDate, sessionTime); if (!sessionStartDate || !sessionEndDate) return false; return now >= sessionStartDate && now <= sessionEndDate; };
    const hasSessionPassed = (sessionDate, sessionTime) => { const { sessionEndDate } = getSessionDates(sessionDate, sessionTime); if (!sessionEndDate) return false; return now > sessionEndDate; };
    const handleAddToCalendar = (session) => { const { title, date, time } = session; const { sessionStartDate, sessionEndDate } = getSessionDates(date, time); if (!sessionStartDate || !sessionEndDate) return alert("Could not parse session time."); const toGoogleFormat = (d) => d.toISOString().replace(/-|:|\.\d{3}/g, ''); const googleDates = `${toGoogleFormat(sessionStartDate)}/${toGoogleFormat(sessionEndDate)}`; const calendarUrl = new URL('https://www.google.com/calendar/render'); calendarUrl.searchParams.append('action', 'TEMPLATE'); calendarUrl.searchParams.append('text', title); calendarUrl.searchParams.append('dates', googleDates); calendarUrl.searchParams.append('details', `Joining the live session for: ${title}`); calendarUrl.searchParams.append('ctz', 'Asia/Kolkata'); window.open(calendarUrl.toString(), '_blank'); };
    
    return (
        <>
            <style>{`
                /* --- General Styles --- */
                @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');
                .course-player-page { font-family: 'Lexend', sans-serif; background-color: #F9FAFB; min-height: 100vh; }
                .page-container { max-width: 1400px; margin: 0 auto; padding: 0 2rem; }
                /* --- Header --- */
                .course-header-section { background-color: #FFFFFF; border-bottom: 1px solid #E5E7EB; padding: 2rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
                .back-link { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.95rem; font-weight: 500; color: #4B5563; margin-bottom: 1.5rem; text-decoration: none; }
                .course-title-area { display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem; margin-bottom: 1.5rem; }
                .course-title-area h1 { font-size: clamp(1.8rem, 4vw, 2.5rem); font-weight: 700; color: #111827; margin: 0; line-height: 1.2; }
                .course-instructor-info { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; }
                .course-instructor-photo { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
                .instructor-name { font-weight: 600; color: #1F2937; }
                .progress-area { display: flex; align-items: center; gap: 1rem; }
                .progress-bar-container { flex-grow: 1; height: 12px; background-color: #E5E7EB; border-radius: 99px; overflow: hidden; }
                .progress-bar-fill { height: 100%; background-image: linear-gradient(to right, #4F46E5, #818CF8); border-radius: 99px; transition: width 0.5s ease-in-out; }
                .progress-text { font-size: 0.9rem; font-weight: 500; color: #4B5563; }
                /* --- Video Player --- */
                .video-player-section { margin: 2rem 0; }
                .video-player-main { background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 1rem; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.07); }
                .video-placeholder { aspect-ratio: 16 / 9; background-color: #111827; border-top-left-radius: 1rem; border-top-right-radius: 1rem; display: flex; align-items: center; justify-content: center; color: #9CA3AF; }
                .lesson-content { padding: 2rem; }
                .lesson-content h2 { font-size: 1.8rem; font-weight: 600; margin: 0 0 0.5rem 0; color: #1F2937; }
                /* --- Course Content Section --- */
                .course-content-container { max-width: 1400px; margin: 2rem auto; display: grid; grid-template-columns: 1fr 2.5fr; gap: 3rem; }
                .course-sidebar { position: sticky; top: 2rem; display: flex; flex-direction: column; gap: 2rem; }
                .info-box { border: 1px solid #E5E7EB; border-radius: 0.75rem; padding: 1.5rem; background-color: #FFFFFF; }
                .info-box h3 { font-size: 1.25rem; font-weight: 600; color: #111827; margin: 0 0 1rem 0; }
                .info-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; }
                .info-list-item { display: flex; align-items: flex-start; gap: 0.75rem; color: #374151; font-size: 0.95rem; }
                .info-list-item svg { flex-shrink: 0; margin-top: 2px; color: #4F46E5; }
                /* --- Main Content Tabs --- */
                .curriculum-content { background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; }
                .tabs-navigation { display: flex; gap: 1rem; border-bottom: 1px solid #E5E7EB; margin-bottom: 1.5rem; }
                .tab-button { padding: 0.5rem 0.25rem; font-size: 1rem; font-weight: 600; color: #6B7280; background: none; border: none; cursor: pointer; border-bottom: 3px solid transparent; }
                .tab-button.active { color: #4F46E5; border-bottom-color: #4F46E5; }
                .accordion-header { display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 1rem; background: #fff; cursor: pointer; border: none; text-align: left; border-bottom: 1px solid #E5E7EB; }
                .accordion-header:hover { background-color: #F9FAFB; }
                .accordion-content { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; }
                .accordion-content.open { max-height: 500px; }
                .lesson-item { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; cursor: pointer; border-bottom: 1px solid #F3F4F6; }
                .lesson-item-main { display: flex; align-items: center; gap: 1rem; flex-grow: 1; }
                .completion-icon { color: #D1D5DB; cursor: pointer; }
                .completion-icon.completed { color: #4F46E5; }
                .live-session-card { background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 0.75rem; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem; }
                .live-badge { display: inline-block; background-color: #FEE2E2; color: #DC2626; padding: 0.25rem 0.75rem; border-radius: 99px; font-size: 0.8rem; font-weight: 600; margin-left: 0.5rem; }
                .join-button, .project-button { background-color: #4F46E5; color: white; border: none; padding: 0.6rem 1rem; border-radius: 0.5rem; cursor: pointer; }
                .join-button:disabled { background-color: #A5B4FC; cursor: not-allowed; }
                .calendar-button { background-color: #F3F4F6; color: #374151; border: 1px solid #D1D5DB; padding: 0.6rem 1rem; border-radius: 0.5rem; font-weight: 500; cursor: pointer; }
                /* --- Projects Tab Styles --- */
                .project-card { background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1.5rem; }
                .project-card h4 { font-size: 1.2rem; font-weight: 600; margin: 0 0 0.5rem 0; }
                .todo-list { list-style-type: none; padding-left: 0; margin: 1rem 0; }
                .todo-item { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem; color: #4B5563; }
                .submission-area { margin-top: 1.5rem; border-top: 1px solid #E5E7EB; padding-top: 1.5rem; }
                .submission-input { width: 100%; border: 1px solid #D1D5DB; border-radius: 0.5rem; padding: 0.75rem; margin-bottom: 1rem; }
                /* --- Mentors Section --- */
                .mentors-section { margin-top: 3rem; background: #fff; border-radius: 1rem; border: 1px solid #E5E7EB; padding: 2rem; }
                .mentors-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
                .mentor-card { text-align: center; border: 1px solid #E5E7EB; border-radius: 0.75rem; padding: 1.5rem; transition: all 0.2s ease; }
                .mentor-card:hover { transform: translateY(-5px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.07); }
                .mentor-img { width: 100px; height: 100px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem; }
                .book-session-btn { background-color: #4F46E5; color: white; border: none; padding: 0.6rem 1.2rem; border-radius: 0.5rem; cursor: pointer; }

                @media (max-width: 1024px) { .course-content-container { grid-template-columns: 1fr; } .course-sidebar { position: static; } }
            `}</style>
            
            <div className="course-player-page">
                <header className="course-header-section">
                    <div className="page-container">
                        <a href="#" className="back-link"><ArrowLeftIcon /><span>Back to My Courses</span></a>
                        <div className="course-title-area">
                            <h1>The Complete Web Development Bootcamp</h1>
                            <div className="course-instructor-info">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" alt="Instructor" className="course-instructor-photo" />
                                <div><div className="instructor-label">Instructor</div><div className="instructor-name">Alex Morgan</div></div>
                            </div>
                        </div>
                        <div className="progress-area">
                            <div className="progress-bar-container"><div className="progress-bar-fill" style={{ width: `${completionPercentage}%` }}></div></div>
                            <p className="progress-text">{completionPercentage}% Complete</p>
                        </div>
                    </div>
                </header>

                <main className="page-container">
                    <section className="video-player-section">
                        <div className="video-player-main">
                            <div className="video-placeholder"><VideoPlaceholderIcon /></div>
                            <div className="lesson-content">
                                <h2>{activeLesson.title}</h2>
                                <p>{activeLesson.content}</p>
                            </div>
                        </div>
                    </section>
                    
                    <section className="course-content-container">
                        <aside className="course-sidebar">
                            <div className="info-box">
                                <h3>What you'll learn</h3>
                                <ul className="info-list">{learnData.map((item, i) => <li key={i} className="info-list-item"><CheckCircleIcon filled={true}/><span>{item}</span></li>)}</ul>
                            </div>
                            <div className="info-box">
                                <h3>Requirements</h3>
                                <ul className="info-list">{requirementsData.map((item, i) => <li key={i} className="info-list-item"><TargetIcon /><span>{item}</span></li>)}</ul>
                            </div>
                        </aside>
                        <main className="curriculum-content">
                            <div className="tabs-navigation">
                                <button className={`tab-button ${activeTab === 'curriculum' ? 'active' : ''}`} onClick={() => setActiveTab('curriculum')}>Course Curriculum</button>
                                <button className={`tab-button ${activeTab === 'live' ? 'active' : ''}`} onClick={() => setActiveTab('live')}>Live Sessions</button>
                                <button className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>Projects</button>
                            </div>

                            {activeTab === 'curriculum' && (<div>{courseData.map((section, index) => (
                                <div key={index}>
                                    <button className="accordion-header" onClick={() => setOpenSection(openSection === index ? null : index)}>
                                        <span style={{fontWeight: 600}}>{section.title}</span>
                                        <ChevronDownIcon className={`accordion-toggle-icon ${openSection === index ? 'open' : ''}`} />
                                    </button>
                                    <div className={`accordion-content ${openSection === index ? 'open' : ''}`}>
                                        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                            {section.lessons.map(lesson => (
                                                <li key={lesson.id} className={`lesson-item ${activeLesson.id === lesson.id ? 'active' : ''}`} onClick={() => setActiveLesson(lesson)}>
                                                    <span onClick={(e) => { e.stopPropagation(); toggleLessonComplete(lesson.id); }} className={`completion-icon ${completedLessons.has(lesson.id) ? 'completed' : ''}`}>
                                                        <CheckCircleIcon filled={completedLessons.has(lesson.id)} />
                                                    </span>
                                                    <div className="lesson-item-main">
                                                        <PlayCircleIcon />
                                                        <div>
                                                            <p className="lesson-item-title">{lesson.title}</p>
                                                        </div>
                                                    </div>
                                                    <span className="lesson-item-duration">{lesson.duration}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}</div>)}

                            {activeTab === 'live' && (<div>{liveSessionsData.map((week, index) => (
                                <div key={index}>
                                    <button className="accordion-header" onClick={() => setOpenLiveSection(openLiveSection === index ? null : index)}>
                                        <span style={{fontWeight: 600}}>{week.week}</span>
                                        <ChevronDownIcon className={`accordion-toggle-icon ${openLiveSection === index ? 'open' : ''}`} />
                                    </button>
                                    <div className={`accordion-content ${openLiveSection === index ? 'open' : ''}`}>
                                        <div style={{padding: '1rem'}}>
                                            {week.sessions.map((session, sIndex) => {
                                                const isActive = isSessionActive(session.date, session.time); 
                                                const hasPassed = hasSessionPassed(session.date, session.time); 
                                                return (
                                                <div key={sIndex} className="live-session-card">
                                                    <p><strong>{session.title}{isActive && <span className="live-badge">LIVE</span>}</strong></p>
                                                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6B7280', fontSize: '0.9rem'}}><CalendarIcon /><span>{session.date} • {session.time}</span></div>
                                                    <div style={{marginTop: '1rem', display: 'flex', gap: '0.5rem'}}>
                                                        <button className="join-button" disabled={!isActive && !hasPassed}>{hasPassed ? 'View Recording' : 'Join Session'}</button>
                                                        <button className="calendar-button" onClick={() => handleAddToCalendar(session)}>Add to Calendar</button>
                                                    </div>
                                                </div>
                                            );})}
                                        </div>
                                    </div>
                                </div>
                           ))}</div>)}

                            {activeTab === 'projects' && (<div>{projectsData.map((project) => (
                                <div key={project.id} className="project-card">
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                    <h5>To-Do's:</h5>
                                    <ul className="todo-list">
                                        {project.todos.map((todo, i) => <li key={i} className="todo-item"><FileTextIcon /><span>{todo}</span></li>)}
                                    </ul>
                                    {openProjectSubmission === project.id ? (
                                        <div className="submission-area">
                                            <label htmlFor={`submission-${project.id}`}>Project Link (e.g., GitHub, Netlify)</label>
                                            <input id={`submission-${project.id}`} type="text" className="submission-input" placeholder="https://github.com/..." />
                                            <button className="project-button" onClick={() => alert('Project submitted!')}>Submit Project</button>
                                            <button className="project-button" style={{marginLeft: '0.5rem', backgroundColor: '#6B7280'}} onClick={() => setOpenProjectSubmission(null)}>Cancel</button>
                                        </div>
                                    ) : (
                                        <button className="project-button" onClick={() => setOpenProjectSubmission(project.id)}>Start Project</button>
                                    )}
                                </div>
                            ))}</div>)}
                        </main>
                    </section>

                    <section className="mentors-section">
                        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>Meet Your Mentors</h2>
                        <div className="mentors-grid">
                            {mentorsData.map((mentor, index) => (
                                <div key={index} className="mentor-card">
                                    <img src={mentor.img} alt={mentor.name} className="mentor-img" />
                                    <h4>{mentor.name}</h4>
                                    <p><strong>{mentor.title}</strong></p>
                                    <p>{mentor.expertise}</p>
                                    <button className="book-session-btn">Book a Session</button>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default CoursePlayerPage;

