import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// A simple SVG icon component for UI elements
const UIIcon = ({ name, className, style }) => {
   
    const icons = {
        dashboard: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
        sessions: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
        courses: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>,
        mentors: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
        profile: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
        settings: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
        logout: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>,
        check: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>,
        plus: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>,
        search: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
        chevronLeft: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="15 18 9 12 15 6"></polyline></svg>,
        menu: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>,
        interview: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
        bell: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
        award: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline></svg>,
        target: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
        briefcase: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
        file: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>,
        trendingUp: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>,
        shield: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
        creditCard: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>,
        download: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>,
        edit: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>,
        linkedin: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
        github: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
        globe: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
        graduationCap: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 1.7.9 3.2 2.3 4.2"></path><path d="M12 12v9"></path><path d="M18 12v5a4 4 0 0 1-4 4"></path></svg>,
        lock: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
        eye: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>,
        eyeOff: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>,
        visa: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" width="36" height="24"><path fill="#fff" d="M640 480H0V0h640z"/><path fill="#fff" d="M251.3 134.4l-24.3 129.2-24.1-129.2h-38.3l-48.9 181.2h44.1l11.4-55.6h55.6l6.9 55.6h39.9L293.4 134.4h-42.1zm-32.1 82.5l10-47.3 10.1 47.3h-20.1zM322.6 134.4h-35.1l-48.7 181.2h42.1l9-34.7h55.3l5.5 34.7h42.4L322.6 134.4zm-28.9 82.5l10.5-50.6 10.5 50.6h-21zM542.4 225l13.9-90.6h-42.1l-13.9 90.6h42.1zM422.2 134.4l-42.3 181.2h42.1l42.3-181.2h-42.1z"/></svg>,
        mastercard: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" width="36" height="24"><path fill="#ff5f00" d="M320 240a120 120 0 0 1 0-240 120 120 0 0 1 0 240z"/><path fill="#eb001b" d="M120 240a120 120 0 0 1 0-240 120 120 0 0 1 0 240z"/><path fill="#f79e1b" d="M220 240a120 120 0 0 1-200 0 120 120 0 0 1 200 0z"/></svg>,
        fileText: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
        trash: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
    };
    const iconElement = icons[name] || null;
    if (iconElement) {
        return React.cloneElement(iconElement, { className, style });
    }
    return null;
};

// =================================================================================
// DUMMY DATA
// =================================================================================
const initialStudentData = {
    name: 'Alex Thompson',
    // email: 'alex.t@example.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    headline: 'Aspiring Frontend Developer | React Enthusiast',
    bio: 'Passionate about creating beautiful and functional user interfaces. Currently honing my skills in modern web technologies and looking for my first full-time role.',
    socials: [
        { id: 1, name: 'linkedin', url: 'https://linkedin.com/in/alexthompson', icon: 'linkedin' },
        { id: 2, name: 'github', url: 'https://github.com/alexthompson', icon: 'github' },
        { id: 3, name: 'portfolio', url: 'https://alexthompson.dev', icon: 'globe' },
    ],
    skills: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Figma', 'CSS', 'HTML', 'Next.js', 'Tailwind CSS'],
    experience: [
        { id: 1, role: 'Frontend Intern', company: 'Innovate LLC', duration: 'Jun 2024 - Aug 2024', logo: 'innovate' }
    ],
    education: [
        { id: 1, degree: 'B.S. in Computer Science', institution: 'State University', year: '2024', logo: 'state-uni' }
    ],
    customSections: [],
    stats: { upcomingSessions: 3, completedInterviews: 8, coursesInProgress: 4 },
    upcomingSessions: [
        { mentor: 'Sarah Chen', role: 'Frontend Expert', date: 'Sep 28, 2025', time: '10:00 AM', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop' },
        { mentor: 'David Lee', role: 'UX/UI Design Lead', date: 'Oct 02, 2025', time: '02:00 PM', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format=fit,crop' },
    ],
    pastSessions: [
        { mentor: 'Michael Rodriguez', role: 'Product Manager', date: 'Sep 15, 2025', time: '11:00 AM', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop' }
    ],
    courses: [
        { title: 'Advanced React Patterns', progress: 75, category: 'Web Development', status: 'In Progress' },
        { title: 'Data Structures & Algorithms', progress: 40, category: 'Computer Science', status: 'In Progress' },
        { title: 'Intro to Python', progress: 100, category: 'Programming', status: 'Completed' },
    ],
    allCourses: [
        { title: 'Advanced React Patterns', progress: 75, category: 'Web Development', status: 'In Progress' },
        { title: 'Data Structures & Algorithms', progress: 40, category: 'Computer Science', status: 'In Progress' },
        { title: 'Intro to Python', progress: 100, category: 'Programming', status: 'Completed' },
        { title: 'UX Design Fundamentals', progress: 0, category: 'Design', status: 'Not Started' },
        { title: 'Machine Learning Basics', progress: 0, category: 'Data Science', status: 'Not Started' },
    ],
    recommendations: [
        { type: 'mentor', name: 'Michael Rodriguez', role: 'Product Manager @ Spotify', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop' },
        { type: 'course', title: 'Product Management Fundamentals', category: 'Product Management' },
        { type: 'interview', title: 'Behavioral Mock Interview', category: 'Career Prep' }
    ],
    activity: [
        { type: 'course', action: 'Completed "Intro to Python"', time: '2 hours ago' },
        { type: 'session', action: 'Booked a session with David Lee', time: '1 day ago' },
        { type: 'interview', action: 'Completed a Behavioral Mock Interview', time: '3 days ago' },
        { type: 'course', action: 'Enrolled in "Advanced React Patterns"', time: '4 days ago' },
    ],
    goal: {
        title: 'Land a Frontend Developer Role',
        milestones: [
            { text: 'Complete "Advanced React Patterns"', completed: true },
            { text: 'Build 3 portfolio projects', completed: true },
            { text: 'Pass 5 mock technical interviews', completed: false },
            { text: 'Get resume reviewed by a mentor', completed: false },
        ]
    },
    achievements: [
        { title: 'Course Completer', icon: 'award', color: '#4F46E5' },
        { title: 'Interview Pro', icon: 'award', color: '#10B981' },
        { title: 'Mentee Master', icon: 'award', color: '#F59E0B' },
        { title: 'Fast Learner', icon: 'award', color: '#EF4444' },
    ],
    applications: [
        { company: 'TechCorp', role: 'Frontend Developer', status: 'Interviewing', date: 'Sep 22' },
        { company: 'Innovate LLC', role: 'React Developer', status: 'Applied', date: 'Sep 20' },
        { company: 'WebSolutions', role: 'Junior Developer', status: 'Rejected', date: 'Sep 18' },
        { company: 'Data Dynamics', role: 'Data Analyst', status: 'Offer', date: 'Sep 25' },
    ],
    resources: [
        { title: 'Ultimate Resume Guide', icon: 'file' },
        { title: 'Top 50 Interview Questions', icon: 'file' },
        { title: 'Portfolio Best Practices', icon: 'file' },
    ],
    weakAreas: [
        { area: 'System Design', advice: 'Practice with common architecture patterns.' },
        { area: 'JavaScript Promises', advice: 'Review async/await and error handling.' },
    ],
    allMentors: [
        { id: 1, name: 'Sarah Chen', title: 'Senior Software Engineer @ Google', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop', category: 'Web Development', expertise: ['React', 'TypeScript', 'System Design', 'Frontend'], },
        { id: 2, name: 'Michael Rodriguez', title: 'Product Manager @ Spotify', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop', category: 'Product Management', expertise: ['Agile', 'Roadmapping', 'User Research', 'A/B Testing'], },
        { id: 3, name: 'Emily Carter', title: 'Data Scientist @ Netflix', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format=fit,crop', category: 'Data Science', expertise: ['Python', 'Machine Learning', 'SQL', 'Statistics'], },
    ],
    settings: {
        notifications: {
            email: {
                sessionReminders: true,
                courseUpdates: true,
                newMessages: false,
            },
            push: {
                sessionReminders: true,
                newMessages: true
            }
        },
        subscription: {
            plan: 'Pro Plan',
            nextBillDate: 'October 25, 2025'
        },
        paymentMethods: [
            { id: 1, brand: 'Visa', last4: '4242', expiry: '08/2028', isDefault: true },
            { id: 2, brand: 'Mastercard', last4: '5555', expiry: '06/2026', isDefault: false },
        ],
        billingHistory: [
            { date: 'Sep 25, 2025', amount: '$59.00', plan: 'Pro Plan', invoiceId: 'INV12345' },
            { date: 'Aug 25, 2025', amount: '$59.00', plan: 'Pro Plan', invoiceId: 'INV12344' },
            { date: 'Jul 25, 2025', amount: '$59.00', plan: 'Pro Plan', invoiceId: 'INV12343' },
        ]
    }
};


// =================================================================================
// PAGE COMPONENTS
// =================================================================================

const DashboardContent = ({ student }) => {
     const navigate = useNavigate()
    // ... (This component remains unchanged)
    const Recharts = window.Recharts;
    const goalProgress = (student.goal.milestones.filter(m => m.completed).length / student.goal.milestones.length) * 100;
    const applicationStatusData = [
        { name: 'Interviewing', value: student.applications.filter(a => a.status === 'Interviewing').length },
        { name: 'Applied', value: student.applications.filter(a => a.status === 'Applied').length },
        { name: 'Rejected', value: student.applications.filter(a => a.status === 'Rejected').length },
        { name: 'Offer', value: student.applications.filter(a => a.status === 'Offer').length },
    ];
    const COLORS = ['#3B82F6', '#F59E0B', '#EF4444', '#10B981'];

    return (
        <>
            <div className="header-top-row">
                <div className="welcome-message">
                    <h1>Welcome back, {student.name.split(' ')[0]}!</h1>
                    <p>Let's continue making progress on your career goals today.</p>
                </div>
                <div className="header-actions">
                    <button onClick={()=>navigate('/courses')} className="action-btn-header btn-secondary-header"><UIIcon name="search" /> Browse Courses</button>
                    <button onClick={()=>navigate('/book_new_seeion')} className="action-btn-header btn-primary-header"><UIIcon name="plus" /> Book a Session</button>
                </div>
            </div>
            <div className="stats-grid">
                <div className="stat-card"> <div className="stat-icon" style={{ backgroundColor: '#4F46E5' }}><UIIcon name="sessions" /></div> <div className="stat-info"> <span className="stat-value">{student.stats.upcomingSessions}</span> <span className="stat-label">Upcoming Sessions</span> </div> </div>
                <div className="stat-card"> <div className="stat-icon" style={{ backgroundColor: '#10B981' }}><UIIcon name="check" /></div> <div className="stat-info"> <span className="stat-value">{student.stats.completedInterviews}</span> <span className="stat-label">Completed Interviews</span> </div> </div>
                <div className="stat-card"> <div className="stat-icon" style={{ backgroundColor: '#F59E0B' }}><UIIcon name="courses" /></div> <div className="stat-info"> <span className="stat-value">{student.stats.coursesInProgress}</span> <span className="stat-label">Courses in Progress</span> </div> </div>
            </div>

            <div className="dashboard-grid">
                <div className="main-panel-card">
                    <div className="card-header">
                        <h2>Upcoming Sessions</h2>
                        <a href="#" className="view-all-link">View All</a>
                    </div>
                    <div className="session-list">
                        {student.upcomingSessions.map((session, index) => (
                            <div key={index} className="session-card-new">
                                <img src={session.avatar} alt={session.mentor} className="session-avatar" />
                                <div className="session-details-new">
                                    <h4>{session.mentor}</h4>
                                    <p>{session.role}</p>
                                </div>
                                <div className="session-time-new">
                                    <p>{session.date}</p>
                                    <span>{session.time}</span>
                                </div>
                                <button className="join-btn-new">Join Now</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="main-panel-card">
                    <div className="card-header">
                        <h2>Continue Learning</h2>
                        <a href="#" className="view-all-link">My Courses</a>
                    </div>
                    <div>
                        {(student.courses || []).map((course, index) => (
                            <div key={index} className="course-card">
                                <div style={{ flexGrow: 1 }}>
                                    <div className="course-info">
                                        <h4>{course.title}</h4>
                                        <p>{course.category}</p>
                                    </div>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
                                    </div>
                                </div>
                                <span style={{ fontWeight: 600, color: '#111827' }}>{course.progress}%</span>
                            </div>
                        ))}
                    </div>
                    <div className="activity-section">
                        <div className="card-header" style={{ marginTop: '2rem' }}>
                            <h2>Recent Activity</h2>
                            <a href="#" className="view-all-link">View All</a>
                        </div>
                        <ul className="activity-feed">
                            {(student.activity || []).map((item, index) => {
                                const iconColor = item.type === 'course' ? '#F59E0B' : item.type === 'session' ? '#4F46E5' : '#10B981';
                                return (
                                    <li key={index} className="activity-item">
                                        <div className="activity-icon" style={{ border: `2px solid ${iconColor}` }}>
                                            <UIIcon name={item.type === 'course' ? 'courses' : item.type === 'session' ? 'sessions' : 'check'} style={{ color: iconColor }} />
                                        </div>
                                        <div className="activity-content">
                                            <p>{item.action}</p>
                                            <span>{item.time}</span>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid-secondary">
                <div className="main-panel-card">
                    <div className="card-header">
                        <h2>Job Application Tracker</h2>
                        <a href="#" className="view-all-link">View All</a>
                    </div>
                    {Recharts ? (
                        <div className="job-tracker-layout">
                            <div className="job-tracker-chart">
                                <Recharts.ResponsiveContainer width="100%" height="100%">
                                    <Recharts.PieChart>
                                        <Recharts.Pie data={applicationStatusData} innerRadius={40} outerRadius={60} fill="#8884d8" paddingAngle={5} dataKey="value">
                                            {applicationStatusData.map((entry, index) => (<Recharts.Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                                        </Recharts.Pie>
                                        <Recharts.Tooltip />
                                    </Recharts.PieChart>
                                </Recharts.ResponsiveContainer>
                            </div>
                            <div className="job-tracker-legend">
                                <ul>
                                    {applicationStatusData.map((entry, index) => (
                                        <li key={`item-${index}`}>
                                            <span className="legend-dot" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                                            {entry.name}: {entry.value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ) : (<div>Loading Chart...</div>)}
                </div>
                <div className="main-panel-card">
                    <div className="card-header">
                        <h2>Achievements</h2>
                        <a href="#" className="view-all-link">View All</a>
                    </div>
                    <div className="achievements-grid">
                        {student.achievements.map((a, i) => (
                            <div key={i} className="achievement-card">
                                <div className="achievement-icon" style={{ backgroundColor: `${a.color}20`, color: a.color }}>
                                    <UIIcon name={a.icon} />
                                </div>
                                <p>{a.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="dashboard-grid-secondary">
                <div className="main-panel-card">
                    <div className="card-header">
                        <h2>Weak Areas to Improve</h2>
                        <a href="#" className="view-all-link">Get Help</a>
                    </div>
                    <div className="weak-areas-list">
                        {student.weakAreas.map((area, index) => (
                            <div key={index} className="weak-area-item">
                                <h4>{area.area}</h4>
                                <p>{area.advice}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="main-panel-card">
                    <div className="card-header">
                        <h2>Resource Hub</h2>
                        <a href="#" className="view-all-link">View All</a>
                    </div>
                    <div className="resource-grid">
                        {student.resources.map((res, i) => (
                            <a href="#" key={i} className="resource-card">
                                <UIIcon name={res.icon} className="resource-icon" />
                                <span>{res.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <section className="recommendations-section">
                <div className="card-header">
                    <h2>Recommended For You</h2>
                    <a href="#" className="view-all-link">Browse All</a>
                </div>
                <div className="recommendations-grid">
                    {student.recommendations.map((rec, index) => (
                        <div key={index} className="rec-card">
                            <div className="rec-card-header">
                                <div className="rec-icon" style={{ backgroundColor: rec.type === 'mentor' ? '#4F46E5' : rec.type === 'course' ? '#F59E0B' : '#10B981' }}>
                                    <UIIcon name={rec.type === 'mentor' ? 'mentors' : rec.type === 'course' ? 'courses' : 'interview'} />
                                </div>
                                <div>
                                    <h4>{rec.title || rec.name}</h4>
                                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#6B7280' }}>{rec.category || rec.role}</p>
                                </div>
                            </div>
                            <a href="#">{rec.type === 'mentor' ? 'View Profile' : 'Start Learning'} &rarr;</a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

const MySessionsPage = ({ student }) => {
    // ... (This component remains unchanged)
    const [filter, setFilter] = useState('Upcoming');
    const sessions = filter === 'Upcoming' ? student.upcomingSessions : student.pastSessions;
    return (
        <div>
            <div className="header-top-row">
                <div className="welcome-message">
                    <h1>My Sessions</h1>
                    <p>Review your scheduled and past mentoring sessions.</p>
                </div>
                <button className="action-btn-header btn-primary-header"><UIIcon name="plus" /> Book a New Session</button>
            </div>
            <div className="page-filters">
                <button className={`filter-btn ${filter === 'Upcoming' ? 'active' : ''}`} onClick={() => setFilter('Upcoming')}>Upcoming</button>
                <button className={`filter-btn ${filter === 'Past' ? 'active' : ''}`} onClick={() => setFilter('Past')}>Past</button>
            </div>
            <div className="session-list-page">
                {sessions.map((session, index) => (
                    <div key={index} className="session-card-new">
                        <img src={session.avatar} alt={session.mentor} className="session-avatar" />
                        <div className="session-details-new">
                            <h4>{session.mentor}</h4>
                            <p>{session.role}</p>
                        </div>
                        <div className="session-time-new">
                            <p>{session.date}</p>
                            <span>{session.time}</span>
                        </div>
                        <button className="join-btn-new">{filter === 'Upcoming' ? 'Join Now' : 'View Recording'}</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const MyCoursesPage = ({ student }) => {
    // ... (This component remains unchanged)
    const [filter, setFilter] = useState('All');
    const filteredCourses = student.allCourses.filter(course => {
        if (filter === 'All') return true;
        return course.status === filter;
    });

    return (
        <div>
            <div className="header-top-row">
                <div className="welcome-message">
                    <h1>My Courses</h1>
                    <p>Continue your learning journey and track your progress.</p>
                </div>
                <button className="action-btn-header btn-secondary-header"><UIIcon name="search" /> Browse New Courses</button>
            </div>
            <div className="page-filters">
                <button className={`filter-btn ${filter === 'All' ? 'active' : ''}`} onClick={() => setFilter('All')}>All</button>
                <button className={`filter-btn ${filter === 'In Progress' ? 'active' : ''}`} onClick={() => setFilter('In Progress')}>In Progress</button>
                <button className={`filter-btn ${filter === 'Completed' ? 'active' : ''}`} onClick={() => setFilter('Completed')}>Completed</button>
            </div>
            <div className="my-courses-grid">
                {filteredCourses.map((course, index) => (
                    <div key={index} className="my-course-card">
                        <div className="course-card-image" style={{ backgroundColor: '#4F46E520' }}>
                            <UIIcon name="courses" style={{ color: '#4F46E5', width: '48px', height: '48px' }} />
                        </div>
                        <div className="my-course-info">
                            <h4>{course.title}</h4>
                            <p>{course.category}</p>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                                <span style={{ fontSize: '0.8rem', color: '#6B7280' }}>{course.status}</span>
                                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#111827' }}>{course.progress}%</span>
                            </div>
                        </div>
                        <button className="join-btn-new" style={{ width: '100%', marginTop: '1rem' }}>
                            {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const FindAMentorPage = ({ student }) => {
    // ... (This component remains unchanged)
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Web Development', 'Data Science', 'Product Management'];
    const filteredMentors = activeFilter === 'All' ? student.allMentors : student.allMentors.filter(m => m.category === activeFilter);
    return (
        <div>
            <div className="header-top-row">
                <div className="welcome-message">
                    <h1>Find a Mentor</h1>
                    <p>Browse our network of industry professionals to find your perfect match.</p>
                </div>
            </div>
            <div className="page-filters">
                {filters.map(filter => (
                    <button key={filter} className={`filter-btn ${activeFilter === filter ? 'active' : ''}`} onClick={() => setActiveFilter(filter)}>
                        {filter}
                    </button>
                ))}
            </div>
            <div className="mentor-grid-page">
                {filteredMentors.map(mentor => (
                    <div className="mentor-card-page" key={mentor.id}>
                        <img src={mentor.avatar} alt={mentor.name} className="mentor-avatar-page" />
                        <h3>{mentor.name}</h3>
                        <p className="mentor-title-page">{mentor.title}</p>
                        <div className="mentor-tags-page">
                            {mentor.expertise.slice(0, 3).map(skill => <span key={skill} className="mentor-tag-page">{skill}</span>)}
                        </div>
                        <button className="join-btn-new" style={{ width: '100%', marginTop: '1rem' }}>View Profile</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ProfilePage = ({ student, setStudent }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(JSON.parse(JSON.stringify(student))); // Deep copy
    const [newSkill, setNewSkill] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newAvatarUrl, setNewAvatarUrl] = useState("");

    useEffect(() => {
        setFormData(JSON.parse(JSON.stringify(student)));
    }, [student]);

    const handleInputChange = (e, section = null, index = null, field = null) => {
        const { name, value } = e.target;
        if (section) {
            const list = [...formData[section]];
            if (index !== null) {
                list[index][field] = value;
                setFormData(prev => ({ ...prev, [section]: list }));
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleAddItem = (section) => {
        const newId = Date.now();
        let newItem;
        switch (section) {
            case 'experience':
                newItem = { id: newId, role: 'New Role', company: 'Company Name', duration: 'Present', logo: '' };
                break;
            case 'education':
                newItem = { id: newId, degree: 'New Degree', institution: 'Institution Name', year: '2025', logo: '' };
                break;
            case 'customSections':
                newItem = { id: newId, title: 'New Section', content: '' };
                break;
            case 'socials':
                newItem = { id: newId, name: 'website', url: '', icon: 'globe' };
                break;
            default:
                return;
        }
        setFormData(prev => ({ ...prev, [section]: [...prev[section], newItem] }));
    };

    const handleRemoveItem = (section, id) => {
        setFormData(prev => ({ ...prev, [section]: prev[section].filter(item => item.id !== id) }));
    };


    const handleAddSkill = (e) => {
        e.preventDefault();
        if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
            setFormData(prev => ({ ...prev, skills: [...prev.skills, newSkill.trim()] }));
            setNewSkill("");
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setFormData(prev => ({ ...prev, skills: prev.skills.filter(skill => skill !== skillToRemove) }));
    };

    const handleSave = () => {
        setStudent(formData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData(JSON.parse(JSON.stringify(student)));
        setIsEditing(false);
    };

    const handleAvatarSave = () => {
        setFormData(prev => ({ ...prev, avatar: newAvatarUrl }));
        setIsModalOpen(false);
    }

    const profileCompletion = Math.round(
        (((formData.headline ? 1 : 0) +
            (formData.bio ? 1 : 0) +
            (formData.skills.length > 0 ? 1 : 0) +
            (formData.experience.length > 0 ? 1 : 0) +
            (formData.education.length > 0 ? 1 : 0) +
            (formData.socials.length > 0 ? 1 : 0)
        ) / 6) * 100
    );

    const renderLogo = (item) => {
        const styles = {
            innovate: { background: '#EDE9FE', color: '#6D28D9', initials: 'I' },
            'state-uni': { background: '#DBEAFE', color: '#2563EB', initials: 'S' },
        };
        const style = styles[item.logo] || { background: '#F3F4F6', color: '#4B5563', initials: item.company ? item.company.charAt(0) : '?' };

        return (
            <div className="timeline-logo" style={{ backgroundColor: style.background, color: style.color }}>
                {style.initials}
            </div>
        )
    }

    return (
        <div>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Change Profile Picture</h2>
                        <p>Enter a new image URL.</p>
                        <input
                            type="text"
                            className="modal-input"
                            placeholder="https://images.unsplash.com/..."
                            value={newAvatarUrl}
                            onChange={(e) => setNewAvatarUrl(e.target.value)}
                        />
                        {newAvatarUrl && <img src={newAvatarUrl} alt="New Avatar Preview" className="modal-avatar-preview" />}
                        <div className="modal-actions">
                            <button className="action-btn-header btn-secondary-header" onClick={() => setIsModalOpen(false)}>Cancel</button>
                            <button className="action-btn-header btn-primary-header" onClick={handleAvatarSave}>Save Changes</button>
                        </div>
                    </div>
                </div>
            )}
            <div className="profile-banner">
                <div className="profile-banner-content">
                    <div className="profile-avatar-container">
                        <img src={formData.avatar} alt={formData.name} className="profile-avatar-large" />
                        {isEditing && (
                            <button className="change-picture-btn" onClick={() => { setNewAvatarUrl(formData.avatar); setIsModalOpen(true); }}>
                                <UIIcon name="edit" style={{ width: 16, height: 16 }} />
                            </button>
                        )}
                    </div>
                    <div className="profile-header-info">
                        {isEditing ? (
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="profile-name-input" />
                        ) : (
                            <h1>{formData.name}</h1>
                        )}
                        {isEditing ? (
                            <input type="text" name="headline" value={formData.headline} onChange={handleInputChange} className="profile-headline-input" />
                        ) : (
                            <p>{formData.headline}</p>
                        )}
                    </div>
                    <div className="profile-header-actions">
                        {isEditing ? (
                            <>
                                <button className="action-btn-header btn-secondary-header" onClick={handleCancel}>Cancel</button>
                                <button className="action-btn-header btn-primary-header" onClick={handleSave}>Save Profile</button>
                            </>
                        ) : (
                            <button className="action-btn-header btn-primary-header" onClick={() => setIsEditing(true)}>Edit Profile</button>
                        )}
                    </div>
                </div>
            </div>

            <div className="profile-page-grid">
                <div className="profile-main-col">
                    <div className="profile-card">
                        <div className="card-header"><h3>About Me</h3></div>
                        {isEditing ? (
                            <textarea name="bio" rows="5" value={formData.bio} onChange={handleInputChange} className="profile-bio-textarea"></textarea>
                        ) : (
                            <p className="profile-bio-text">{formData.bio}</p>
                        )}
                    </div>

                    <div className="profile-card">
                        <div className="card-header"><h3>Experience</h3></div>
                        <div className="timeline">
                            {formData.experience.map((exp, index) => (
                                <div className="timeline-item" key={exp.id}>
                                    {renderLogo(exp)}
                                    <div className="timeline-details">
                                        {isEditing ? (
                                            <>
                                                <input type="text" placeholder="Role" className="timeline-input-title" value={exp.role} onChange={(e) => handleInputChange(e, 'experience', index, 'role')} />
                                                <input type="text" placeholder="Company" className="timeline-input-subtitle" value={exp.company} onChange={(e) => handleInputChange(e, 'experience', index, 'company')} />
                                                <input type="text" placeholder="Duration" className="timeline-input-meta" value={exp.duration} onChange={(e) => handleInputChange(e, 'experience', index, 'duration')} />
                                            </>
                                        ) : (
                                            <>
                                                <h4>{exp.role}</h4>
                                                <p>{exp.company}</p>
                                                <span>{exp.duration}</span>
                                            </>
                                        )}
                                    </div>
                                    {isEditing && (
                                        <button className="remove-item-btn" onClick={() => handleRemoveItem('experience', exp.id)}>
                                            <UIIcon name="trash" />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                        {isEditing && (
                            <button className="add-item-btn" onClick={() => handleAddItem('experience')}>
                                <UIIcon name="plus" /> Add Experience
                            </button>
                        )}
                    </div>

                    <div className="profile-card">
                        <div className="card-header"><h3>Education</h3></div>
                        <div className="timeline">
                            {formData.education.map((edu, index) => (
                                <div className="timeline-item" key={edu.id}>
                                    {renderLogo(edu)}
                                    <div className="timeline-details">
                                        {isEditing ? (
                                            <>
                                                <input type="text" placeholder="Degree" className="timeline-input-title" value={edu.degree} onChange={(e) => handleInputChange(e, 'education', index, 'degree')} />
                                                <input type="text" placeholder="Institution" className="timeline-input-subtitle" value={edu.institution} onChange={(e) => handleInputChange(e, 'education', index, 'institution')} />
                                                <input type="text" placeholder="Year" className="timeline-input-meta" value={edu.year} onChange={(e) => handleInputChange(e, 'education', index, 'year')} />
                                            </>
                                        ) : (
                                            <>
                                                <h4>{edu.degree}</h4>
                                                <p>{edu.institution}</p>
                                                <span>{edu.year}</span>
                                            </>
                                        )}
                                    </div>
                                    {isEditing && (
                                        <button className="remove-item-btn" onClick={() => handleRemoveItem('education', edu.id)}>
                                            <UIIcon name="trash" />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                        {isEditing && (
                            <button className="add-item-btn" onClick={() => handleAddItem('education')}>
                                <UIIcon name="plus" /> Add Education
                            </button>
                        )}
                    </div>
                    
                    {formData.customSections.map((section, index) => (
                        <div className="profile-card" key={section.id}>
                            {isEditing ? (
                                <>
                                    <div className="card-header">
                                         <input type="text" placeholder="Section Title" className="timeline-input-title" value={section.title} onChange={(e) => handleInputChange(e, 'customSections', index, 'title')} />
                                         <button className="remove-item-btn" onClick={() => handleRemoveItem('customSections', section.id)}>
                                            <UIIcon name="trash" />
                                        </button>
                                    </div>
                                    <textarea placeholder="Section Content" rows="5" value={section.content} onChange={(e) => handleInputChange(e, 'customSections', index, 'content')} className="profile-bio-textarea"></textarea>
                                </>
                            ) : (
                                <>
                                   <div className="card-header"><h3>{section.title}</h3></div>
                                    <p className="profile-bio-text">{section.content}</p>
                                </>
                            )}
                        </div>
                    ))}
                    {isEditing && (
                        <button className="add-item-btn" style={{width: '100%', justifyContent: 'center'}} onClick={() => handleAddItem('customSections')}>
                            <UIIcon name="plus" /> Add Custom Section
                        </button>
                    )}

                </div>
                <div className="profile-side-col">
                    <div className="profile-card">
                        <div className="card-header"><h3>Profile Strength</h3></div>
                        <div className="progress-circle-container">
                            <svg className="progress-circle" width="120" height="120" viewBox="0 0 120 120">
                                <circle className="progress-circle-bg" cx="60" cy="60" r="54" />
                                <circle className="progress-circle-bar" cx="60" cy="60" r="54" transform="rotate(-90 60 60)" style={{ strokeDashoffset: `calc(339 - (339 * ${profileCompletion}) / 100)` }} />
                            </svg>
                            <span className="progress-circle-text">{profileCompletion}%</span>
                        </div>
                    </div>

                    <div className="profile-card">
                        <div className="card-header"><h3>My Skills</h3></div>
                        <div className="skills-container">
                            {formData.skills.map((skill) => (
                                <span key={skill} className="skill-tag">
                                    {skill}
                                    {isEditing && (<button className="skill-delete-btn" onClick={() => handleRemoveSkill(skill)}>&times;</button>)}
                                </span>
                            ))}
                        </div>
                        {isEditing && (
                            <form className="add-skill-form" onSubmit={handleAddSkill}>
                                <input type="text" placeholder="Add a skill" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} />
                                <button type="submit" className="action-btn-header btn-primary-header" style={{ padding: '0.5rem 1rem' }}>+</button>
                            </form>
                        )}
                    </div>
                    <div className="profile-card">
                        <div className="card-header"><h3>Social Links</h3></div>
                         {isEditing ? (
                            <div className="social-links-edit-container">
                                {formData.socials.map((social, index) => (
                                    <div key={social.id} className="social-link-edit-item">
                                        <input type="text" placeholder="e.g., twitter" value={social.name} onChange={(e) => handleInputChange(e, 'socials', index, 'name')} />
                                        <input type="text" placeholder="URL" value={social.url} onChange={(e) => handleInputChange(e, 'socials', index, 'url')} />
                                         <button className="remove-item-btn" onClick={() => handleRemoveItem('socials', social.id)}>
                                            <UIIcon name="trash" />
                                        </button>
                                    </div>
                                ))}
                                <button className="add-item-btn" onClick={() => handleAddItem('socials')}>
                                    <UIIcon name="plus" /> Add Link
                                </button>
                            </div>
                         ) : (
                            <div className="social-links-container">
                                {formData.socials.filter(s => s.url).map(social => (
                                     <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link-btn">
                                        <UIIcon name={social.icon || 'globe'} />
                                        {social.name.charAt(0).toUpperCase() + social.name.slice(1)}
                                    </a>
                                ))}
                            </div>
                         )}
                    </div>
                </div>
            </div>
        </div>
    );
};


const SettingsPage = ({ student, setStudent }) => {
    // ... (This component remains unchanged)
    const [activeTab, setActiveTab] = useState('Billing');
    const [notifications, setNotifications] = useState(student.settings.notifications);
    const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
    const [passwordVisibility, setPasswordVisibility] = useState({ current: false, new: false, confirm: false });
    const [passwordStrength, setPasswordStrength] = useState({ score: 0, text: '', color: '' });
    const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false);
    const [paymentMethods, setPaymentMethods] = useState(student.settings.paymentMethods);
    const [newCardInfo, setNewCardInfo] = useState({ number: '', name: '', expiry: '', cvc: '' });
    const [isCardFlipped, setIsCardFlipped] = useState(false);


    const handleNotificationChange = (type, key) => {
        const newNotifications = { ...notifications };
        newNotifications[type][key] = !newNotifications[type][key];
        setNotifications(newNotifications);
        setStudent(prev => ({ ...prev, settings: { ...prev.settings, notifications: newNotifications } }));
    };

    const checkPasswordStrength = (password) => {
        let score = 0;
        if (password.length >= 8) score++;
        if (/\d/.test(password)) score++;
        if (/[a-zA-Z]/.test(password)) score++;
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score = 3;

        let text = '';
        let color = '';
        if (score >= 3) { text = 'Strong'; color = '#10B981'; }
        else if (score === 2) { text = 'Medium'; color = '#F59E0B'; }
        else if (score >= 1) { text = 'Weak'; color = '#EF4444'; }

        setPasswordStrength({ score, text, color });
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswords(prev => ({ ...prev, [name]: value }));
        if (name === 'new') {
            if (value) {
                checkPasswordStrength(value);
            } else {
                setPasswordStrength({ score: 0, text: '', color: '' });
            }
        }
    };

    const togglePasswordVisibility = (field) => {
        setPasswordVisibility(prev => ({ ...prev, [field]: !prev[field] }));
    };

    const handleUpdatePassword = () => {
        if (passwords.new !== passwords.confirm) {
            alert("New passwords do not match.");
            return;
        }
        if (passwordStrength.score < 2) {
            alert("New password is too weak.");
            return;
        }
        alert("Password updated successfully!");
        setPasswords({ current: '', new: '', confirm: '' });
        setPasswordStrength({ score: 0, text: '', color: '' });
    };

    const handleCardInputChange = (e) => {
        let { name, value } = e.target;

        if (name === 'number' || name === 'cvc') {
            value = value.replace(/\D/g, ''); // Remove all non-digits
        }
        if (name === 'name') {
            value = value.replace(/[^a-zA-Z\s]/g, ''); // Allow letters and spaces
        }
        if (name === 'expiry') {
            value = value.replace(/\D/g, ''); // Remove non-digits
            if (value.length > 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
        }
        setNewCardInfo({ ...newCardInfo, [name]: value });
    };

    const handleAddNewCard = () => {
        if (!newCardInfo.number || !newCardInfo.name || !newCardInfo.expiry || !newCardInfo.cvc) {
            alert("Please fill all card details.");
            return;
        }
        const newCard = {
            id: Date.now(),
            brand: newCardInfo.number.startsWith('4') ? 'Visa' : 'Mastercard',
            last4: newCardInfo.number.slice(-4),
            expiry: newCardInfo.expiry,
            isDefault: false
        };
        const updatedMethods = [...paymentMethods, newCard];
        setPaymentMethods(updatedMethods);
        setStudent(prev => ({ ...prev, settings: { ...prev.settings, paymentMethods: updatedMethods } }));
        setNewCardInfo({ number: '', name: '', expiry: '', cvc: '' });
        setIsAddCardModalOpen(false);
    }

    const getCardBrand = (number) => {
        if (number.startsWith('4')) return 'visa';
        if (number.startsWith('5')) return 'mastercard';
        return null;
    }

    const formatCardNumber = (num) => {
        const parts = num.match(/.{1,4}/g) || [];
        return parts.join(' ');
    }


    return (
        <div>
            {isAddCardModalOpen && (
                <div className="modal-overlay" onClick={() => setIsAddCardModalOpen(false)}>
                    <div className="modal-content modal-billing" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-billing-grid">
                            <div className="modal-billing-left">
                                <div className={`card-3d-wrapper ${isCardFlipped ? 'is-flipped' : ''}`}>
                                    <div className="card-3d-front">
                                        <div className="card-shine"></div>
                                        <div className="card-visual-brand-logo">
                                            {getCardBrand(newCardInfo.number) && <UIIcon name={getCardBrand(newCardInfo.number)} />}
                                        </div>
                                        <div className="card-visual-chip"></div>
                                        <div className="card-visual-number">{formatCardNumber(newCardInfo.number) || '•••• •••• •••• ••••'}</div>
                                        <div className="card-visual-bottom-row">
                                            <span className="card-label">Card Holder</span>
                                            <span className="card-label">Expires</span>
                                        </div>
                                        <div className="card-visual-bottom-row" style={{ fontSize: '1rem', fontWeight: 500 }}>
                                            <span>{newCardInfo.name.toUpperCase() || 'ALEX THOMPSON'}</span>
                                            <span>{newCardInfo.expiry || 'MM/YY'}</span>
                                        </div>
                                    </div>
                                    <div className="card-3d-back">
                                        <div className="card-back-black-strip"></div>
                                        <div className="card-back-cvv-strip">
                                            <span className="cvv-label">CVV</span>
                                            <span>{newCardInfo.cvc}</span>
                                        </div>
                                        <div className="card-back-brand">
                                            {getCardBrand(newCardInfo.number) && <UIIcon name={getCardBrand(newCardInfo.number)} />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-billing-right">
                                <h2>Card details</h2>
                                <div className="input-group">
                                    <label>Cardholder's name</label>
                                    <input type="text" className="modal-input" name="name" value={newCardInfo.name} onChange={handleCardInputChange} onFocus={() => setIsCardFlipped(false)} />
                                </div>
                                <div className="input-group">
                                    <label>Card number</label>
                                    <input type="text" className="modal-input" name="number" value={newCardInfo.number} onChange={handleCardInputChange} maxLength="16" onFocus={() => setIsCardFlipped(false)} />
                                </div>
                                <div className="form-row">
                                    <div className="input-group">
                                        <label>Expiration date</label>
                                        <input type="text" className="modal-input" placeholder="MM/YY" name="expiry" value={newCardInfo.expiry} onChange={handleCardInputChange} maxLength="5" onFocus={() => setIsCardFlipped(false)} />
                                    </div>
                                    <div className="input-group">
                                        <label>CVV</label>
                                        <input type="text" className="modal-input" name="cvc" value={newCardInfo.cvc} onChange={handleCardInputChange} maxLength="3" onFocus={() => setIsCardFlipped(true)} onBlur={() => setIsCardFlipped(false)} />
                                    </div>
                                </div>
                                <div className="modal-actions" style={{ marginTop: '1rem' }}>
                                    <button className="action-btn-header btn-primary-header" style={{ width: '100%' }} onClick={handleAddNewCard}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="header-top-row">
                <div className="welcome-message">
                    <h1>Settings</h1>
                    <p>Manage your account, notifications, and subscription.</p>
                </div>
            </div>
            <div className="page-filters">
                <button className={`filter-btn ${activeTab === 'Account' ? 'active' : ''}`} onClick={() => setActiveTab('Account')}>Account</button>
                <button className={`filter-btn ${activeTab === 'Notifications' ? 'active' : ''}`} onClick={() => setActiveTab('Notifications')}>Notifications</button>
                <button className={`filter-btn ${activeTab === 'Subscription' ? 'active' : ''}`} onClick={() => setActiveTab('Subscription')}>Subscription</button>
                <button className={`filter-btn ${activeTab === 'Billing' ? 'active' : ''}`} onClick={() => setActiveTab('Billing')}>Billing</button>
                <button className={`filter-btn ${activeTab === 'Appearance' ? 'active' : ''}`} onClick={() => setActiveTab('Appearance')}>Appearance</button>
            </div>

            {activeTab === 'Account' && (
                <div className="settings-grid">
                    <div className="main-panel-card">
                        <div className="card-header"><h2>Email Address</h2></div>
                        <p className="settings-text">Your email address is <strong>{student.email}</strong>.</p>
                    </div>
                    <div className="main-panel-card">
                        <div className="card-header"><h2>Change Password</h2></div>
                        <div className="password-form-container">
                            <div className="input-group">
                                <label>Current Password</label>
                                <div className="password-input-wrapper-settings">
                                    <UIIcon name="lock" className="password-input-icon-settings" />
                                    <input type={passwordVisibility.current ? "text" : "password"} name="current" value={passwords.current} onChange={handlePasswordChange} />
                                    <button className="password-toggle-icon-settings" onClick={() => togglePasswordVisibility('current')}><UIIcon name={passwordVisibility.current ? 'eyeOff' : 'eye'} /></button>
                                </div>
                            </div>
                            <div className="input-group">
                                <label>New Password</label>
                                <div className="password-input-wrapper-settings">
                                    <UIIcon name="lock" className="password-input-icon-settings" />
                                    <input type={passwordVisibility.new ? "text" : "password"} name="new" value={passwords.new} onChange={handlePasswordChange} />
                                    <button className="password-toggle-icon-settings" onClick={() => togglePasswordVisibility('new')}><UIIcon name={passwordVisibility.new ? 'eyeOff' : 'eye'} /></button>
                                </div>
                                {passwords.new && (<div className="password-strength-meter"><div className="strength-bar-container"><div className="strength-bar" style={{ width: `${(passwordStrength.score / 3) * 100}%`, backgroundColor: passwordStrength.color }}></div></div><span className="strength-text" style={{ color: passwordStrength.color }}>{passwordStrength.text}</span></div>)}
                            </div>
                            <div className="input-group">
                                <label>Confirm New Password</label>
                                <div className="password-input-wrapper-settings">
                                    <UIIcon name="lock" className="password-input-icon-settings" />
                                    <input type={passwordVisibility.confirm ? "text" : "password"} name="confirm" value={passwords.confirm} onChange={handlePasswordChange} />
                                    <button className="password-toggle-icon-settings" onClick={() => togglePasswordVisibility('confirm')}><UIIcon name={passwordVisibility.confirm ? 'eyeOff' : 'eye'} /></button>
                                </div>
                            </div>
                            <div className="card-footer" style={{ paddingRight: 0, paddingTop: '1rem' }}>
                                <button onClick={handleUpdatePassword} type="button" className="action-btn-header btn-primary-header">Update Password</button>
                            </div>
                        </div>
                    </div>
                    <div className="main-panel-card danger-zone">
                        <div className="card-header"><h2>Danger Zone</h2></div>
                        <p className="settings-text">Deleting your account is permanent and cannot be undone.</p>
                        <button className="delete-btn" onClick={() => { if (confirm('Are you sure you want to delete your account?')) { alert('Account deleted.') } }}>Delete My Account</button>
                    </div>
                </div>
            )}

            {activeTab === 'Notifications' && (
                <div className="main-panel-card">
                    <div className="card-header"><h2>Email Notifications</h2></div>
                    <div className="notification-list">
                        <div className="notification-item">
                            <div>
                                <h4>Session Reminders</h4>
                                <p>Receive reminders for your upcoming sessions.</p>
                            </div>
                            <label className="switch"><input type="checkbox" checked={notifications.email.sessionReminders} onChange={() => handleNotificationChange('email', 'sessionReminders')} /><span className="slider round"></span></label>
                        </div>
                        <div className="notification-item">
                            <div>
                                <h4>Course Updates</h4>
                                <p>Get notified about new content in your enrolled courses.</p>
                            </div>
                            <label className="switch"><input type="checkbox" checked={notifications.email.courseUpdates} onChange={() => handleNotificationChange('email', 'courseUpdates')} /><span className="slider round"></span></label>
                        </div>
                    </div>
                    <div className="card-header" style={{ marginTop: '2rem' }}><h2>Push Notifications</h2></div>
                    <div className="notification-list">
                        <div className="notification-item">
                            <div>
                                <h4>Session Reminders</h4>
                                <p>Get a push notification 15 minutes before a session.</p>
                            </div>
                            <label className="switch"><input type="checkbox" checked={notifications.push.sessionReminders} onChange={() => handleNotificationChange('push', 'sessionReminders')} /><span className="slider round"></span></label>
                        </div>
                        <div className="notification-item">
                            <div>
                                <h4>New Messages</h4>
                                <p>Receive notifications for new messages from mentors.</p>
                            </div>
                            <label className="switch"><input type="checkbox" checked={notifications.push.newMessages} onChange={() => handleNotificationChange('push', 'newMessages')} /><span className="slider round"></span></label>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'Subscription' && (
                <div className="main-panel-card">
                    <div className="card-header"><h2>My Subscription</h2></div>
                    <div className="subscription-info">
                        <div>
                            <p>Current Plan</p>
                            <h4>{student.settings.subscription.plan}</h4>
                        </div>
                        <div>
                            <p>Next Billing Date</p>
                            <h4>{student.settings.subscription.nextBillDate}</h4>
                        </div>
                        <button className="action-btn-header btn-secondary-header">Manage Subscription</button>
                    </div>
                </div>
            )}

            {activeTab === 'Billing' && (
                <div className="settings-grid">
                    <div className="main-panel-card">
                        <div className="card-header">
                            <h2>Payment Methods</h2>
                            <button className="action-btn-header btn-secondary-header" onClick={() => setIsAddCardModalOpen(true)}>
                                <UIIcon name="plus" /> Add Card
                            </button>
                        </div>
                        <p className="settings-text">Manage your saved payment methods for your subscription.</p>
                        <div className="payment-methods-list">
                            {paymentMethods.map((card) => (
                                <div key={card.id} className="payment-method-card">
                                    <div className="card-brand-icon"><UIIcon name="creditCard" /></div>
                                    <div className="card-details">
                                        <h4>{card.brand} ending in {card.last4}</h4>
                                        <p>Expires {card.expiry}</p>
                                    </div>
                                    {card.isDefault && <span className="default-badge">Default</span>}
                                    <button className="remove-card-btn">Remove</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="main-panel-card">
                        <div className="card-header"><h2>Billing History</h2></div>
                        <div className="billing-history-list">
                            {student.settings.billingHistory.map((item, index) => (
                                <div key={index} className="billing-history-item">
                                    <div className="billing-item-icon"><UIIcon name="file" /></div>
                                    <div className="billing-item-details">
                                        <h4>{item.plan} - {item.amount}</h4>
                                        <p>Paid on {item.date}</p>
                                    </div>
                                    <a href="#" className="download-invoice-btn"><UIIcon name="download" /> Download</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'Appearance' && (
                <div className="main-panel-card">
                    <div className="card-header"><h2>Appearance</h2></div>
                    <p className="settings-text">Customize the look and feel of your dashboard.</p>
                    <div className="notification-item">
                        <div>
                            <h4>Dark Mode</h4>
                            <p>Toggle dark mode for the dashboard.</p>
                        </div>
                        <label className="switch"><input type="checkbox" /><span className="slider round"></span></label>
                    </div>
                </div>
            )}
        </div>
    );
}

// =================================================================================
// MAIN DASHBOARD COMPONENT
// =================================================================================
const StudentDashboard = () => {
    const [activeLink, setActiveLink] = useState('Profile');
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [student, setStudent] = useState(initialStudentData);

    const renderContent = () => {
        switch (activeLink) {
            case 'Dashboard':
                return <DashboardContent student={student} />;
            case 'My Sessions':
                return <MySessionsPage student={student} />;
            case 'My Courses':
                return <MyCoursesPage student={student} />;
            case 'Find a Mentor':
                return <FindAMentorPage student={student} />;
            case 'Profile':
                return <ProfilePage student={student} setStudent={setStudent} />;
            case 'Settings':
                return <SettingsPage student={student} setStudent={setStudent} />;
            default:
                return <DashboardContent student={student} />;
        }
    };

    return (
        <>
            <script src="https://unpkg.com/recharts/umd/Recharts.min.js"></script>
            <style>{`
                /* --- All existing styles are the same, with these additions --- */
                .add-item-btn { 
                    display: inline-flex; align-items: center; gap: 0.5rem;
                    background-color: #F3F4F6; color: #4B5563; border: 1px solid #E5E7EB;
                    padding: 0.5rem 1rem; border-radius: 0.5rem; font-weight: 600; cursor: pointer;
                    margin-top: 1rem;
                }
                .remove-item-btn {
                    background: none; border: none; color: #EF4444; cursor: pointer;
                    padding: 0.5rem; margin-left: auto; align-self: flex-start;
                }
                .social-links-edit-container { display: flex; flex-direction: column; gap: 1rem; }
                .social-link-edit-item { display: grid; grid-template-columns: 80px 1fr auto; gap: 0.5rem; align-items: center; }
                .social-link-edit-item input { border: 1px solid #D1D5DB; border-radius: 0.5rem; padding: 0.5rem; }

                /* Other existing styles remain untouched */
                @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');
                .dashboard-body { font-family: 'Lexend', sans-serif; background-color: #F9FAFB; }
                .dashboard-layout { display: flex; align-items: flex-start; }
                .sidebar { width: 260px; background: #FFFFFF; border-right: 1px solid #E5E7EB; display: flex; flex-direction: column; padding: 2rem 1rem; flex-shrink: 0; transition: width 0.3s ease; position: sticky; top: 0; height: 100vh; }
                .sidebar.collapsed { width: 92px; padding: 2rem 0.5rem; }
                .sidebar-logo { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2.5rem; padding: 0 0.5rem; }
                .sidebar-logo .logo-icon { width: 40px; height: 40px; background: linear-gradient(135deg, #6d28d9, #4f46e5); border-radius: 0.75rem; color: white; display:flex; align-items:center; justify-content:center; font-weight:700; font-size: 1.5rem; flex-shrink: 0;}
                .sidebar-logo .logo-text { font-size: 1.25rem; font-weight: 700; color: #111827; white-space: nowrap; opacity: 1; transition: opacity 0.2s ease; }
                .sidebar.collapsed .logo-text { opacity: 0; display: none; }
                .sidebar-nav { flex-grow: 1; overflow-y: auto; }
                .nav-link { display: flex; align-items: center; gap: 1rem; padding: 0.875rem 1rem; margin-bottom: 0.5rem; border-radius: 0.75rem; text-decoration: none; color: #4B5563; font-weight: 500; transition: all 0.2s ease; white-space: nowrap; }
                .sidebar.collapsed .nav-link { justify-content: center; }
                .nav-link:hover { background-color: #F3F4F6; color: #111827; }
                .nav-link.active { background: #4F46E5; color: white; box-shadow: 0 4px 10px -2px rgba(79, 70, 229, 0.4); }
                .nav-link .nav-text { opacity: 1; transition: opacity 0.2s ease; }
                .sidebar.collapsed .nav-text { opacity: 0; display: none; }
                .sidebar-footer { margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid #E5E7EB; }
                .user-profile-link { display: flex; align-items: center; gap: 1rem; text-decoration: none; padding: 0.5rem; border-radius: 0.75rem; }
                .sidebar.collapsed .user-profile-link { justify-content: center; }
                .user-profile-link:hover { background-color: #F3F4F6; }
                .user-avatar { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
                .user-info { white-space: nowrap; opacity: 1; transition: opacity 0.2s ease; }
                .sidebar.collapsed .user-info { opacity: 0; display: none; }
                .user-info h4 { font-size: 0.875rem; font-weight: 600; color: #111827; margin: 0; }
                .user-info p { font-size: 0.75rem; color: #6B7280; margin: 0; }
                .collapse-btn { position: absolute; top: 2.5rem; right: -12px; width: 24px; height: 24px; background: #fff; border: 1px solid #E5E7EB; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.3s ease; z-index: 10; }
                .collapse-btn:hover { background: #F3F4F6; }
                .collapse-btn .chevron { transition: transform 0.3s ease; }
                .sidebar.collapsed .collapse-btn .chevron { transform: rotate(180deg); }
                .main-content { flex-grow: 1; padding: 2rem 3rem; width: 100%; }
                .header-top-row { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
                .welcome-message h1 { font-size: 2.25rem; font-weight: 700; color: #111827; margin: 0; }
                .welcome-message p { font-size: 1.125rem; color: #4B5563; margin: 0.5rem 0 0 0; }
                .header-actions { display: flex; gap: 1rem; }
                .action-btn-header { display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.75rem 1.25rem; border-radius: 0.75rem; text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: all 0.3s ease; border: 1px solid transparent; cursor: pointer; }
                .btn-secondary-header { background: #fff; color: #4B5563; border-color: #D1D5DB; }
                .btn-secondary-header:hover { background-color: #F9FAFB; border-color: #9CA3AF; }
                .btn-primary-header { background: #4F46E5; color: white; }
                .btn-primary-header:hover { background: #4338CA; }
                .mobile-menu-btn { display: none; background: none; border: none; padding: 0.5rem; cursor: pointer; }
                .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2.5rem; }
                .stat-card { background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 1.5rem; padding: 1.5rem; display: flex; align-items: center; gap: 1.5rem; transition: all 0.3s ease; }
                .stat-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.08); border-color: #D1D5DB; }
                .stat-icon { flex-shrink: 0; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; }
                .stat-info .stat-value { display: block; font-size: 2rem; font-weight: 700; color: #111827; }
                .stat-info .stat-label { display: block; font-size: 0.9rem; color: #6B7280; }
                .dashboard-grid, .dashboard-grid-secondary { display: grid; gap: 2rem; margin-top: 2.5rem; }
                .dashboard-grid { grid-template-columns: 2fr 1fr; }
                .dashboard-grid-secondary { grid-template-columns: 1fr 1fr; }
                .main-panel-card { background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 1.5rem; padding: 2rem; }
                .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
                .card-header h2, .card-header h3 { font-size: 1.25rem; font-weight: 600; color: #111827; margin: 0; }
                .card-header .view-all-link { font-size: 0.875rem; font-weight: 500; color: #4F46E5; text-decoration: none; }
                .session-list { display: flex; flex-direction: column; gap: 1rem; }
                .session-card-new { display: grid; grid-template-columns: auto 1fr auto auto; align-items: center; gap: 1.5rem; padding: 1rem; border-radius: 1.25rem; background-color: #F9FAFB; border: 1px solid #F3F4F6; transition: all 0.3s ease; }
                .session-card-new:hover { transform: translateY(-4px); box-shadow: 0 8px 25px -8px rgba(0,0,0,0.08); border-color: #E5E7EB; }
                .session-avatar { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
                .session-details-new h4 { margin: 0; font-size: 1rem; font-weight: 600; color: #111827; }
                .session-details-new p { margin: 0.25rem 0 0 0; font-size: 0.875rem; color: #6B7280; }
                .session-time-new { text-align: right; color: #4B5563; }
                .session-time-new p { margin: 0; font-size: 0.875rem; font-weight: 500; }
                .session-time-new span { font-size: 0.75rem; color: #6B7280; }
                .join-btn-new { padding: 0.6rem 1.25rem; background: #4F46E5; color: white; border: none; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 600; cursor: pointer; transition: background-color 0.2s ease; }
                .join-btn-new:hover { background: #4338CA; }
                .course-card { display: flex; align-items: center; gap: 1rem; }
                .course-card:not(:last-child) { margin-bottom: 1.5rem; }
                .course-info h4 { font-size: 1rem; font-weight: 600; color: #111827; margin: 0 0 0.25rem 0;}
                .course-info p { font-size: 0.875rem; color: #6B7280; margin: 0; }
                .progress-bar { width: 100%; background: #E5E7EB; border-radius: 99px; height: 8px; margin-top: 0.5rem; }
                .progress-fill { height: 100%; background: #4F46E5; border-radius: 99px; }
                .recommendations-section { margin-top: 2.5rem; }
                .recommendations-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
                .rec-card { background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 1.5rem; padding: 1.5rem; transition: all 0.3s ease; }
                .rec-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.08); border-color: #D1D5DB; }
                .rec-card-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
                .rec-icon { width: 40px; height: 40px; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0; }
                .rec-card-header h4 { font-size: 1rem; font-weight: 600; color: #111827; margin: 0; }
                .rec-card p { font-size: 0.875rem; color: #6B7280; margin: 0 0 1rem 0; line-height: 1.5; }
                .rec-card a { font-size: 0.875rem; font-weight: 600; color: #4F46E5; text-decoration: none; }
                .activity-section { margin-top: 2.5rem; }
                .activity-feed { list-style: none; padding: 0; margin: 0; position: relative; }
                .activity-feed::before { content: ''; position: absolute; top: 12px; left: 12px; bottom: 12px; width: 2px; background-color: #E5E7EB; }
                .activity-item { display: flex; gap: 1.5rem; position: relative; }
                .activity-item:not(:last-child) { margin-bottom: 1.5rem; }
                .activity-icon { width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; z-index: 1; background: #fff; }
                .activity-icon svg { width: 16px; height: 16px; }
                .activity-content p { font-size: 0.9rem; font-weight: 500; color: #374151; margin: 0; }
                 .activity-content span { font-size: 0.8rem; color: #9CA3AF; }
                .milestone-list { list-style: none; padding: 0; margin: 0; }
                .milestone-item { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; }
                .milestone-item input { width: 16px; height: 16px; accent-color: #4F46E5; }
                .milestone-item label { font-size: 0.9rem; color: #374151; }
                .milestone-item label.completed { text-decoration: line-through; color: #9CA3AF; }
                .achievements-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); gap: 1rem; }
                .achievement-card { text-align: center; }
                .achievement-icon { width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem; }
                .achievement-card p { font-size: 0.8rem; font-weight: 500; color: #4B5563; margin: 0; }
                .job-tracker-layout { display: flex; align-items: center; gap: 2rem; }
                .job-tracker-chart { height: 150px; width: 150px; flex-shrink: 0; }
                .job-tracker-legend ul { list-style: none; padding: 0; margin: 0; }
                .job-tracker-legend li { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; margin-bottom: 0.5rem;}
                .legend-dot { width: 10px; height: 10px; border-radius: 50%; }
                .weak-areas-list { margin-top: 1.5rem; }
                .weak-area-item { background: #F9FAFB; border-radius: 0.75rem; padding: 1rem; }
                .weak-area-item:not(:last-child) { margin-bottom: 1rem; }
                .weak-area-item h4 { font-size: 0.9rem; font-weight: 600; margin: 0 0 0.25rem 0; color: #111827; }
                .weak-area-item p { font-size: 0.875rem; margin: 0; color: #6B7280; }
                .resource-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
                .resource-card { display: flex; align-items: center; gap: 1rem; padding: 1rem; border-radius: 0.75rem; text-decoration: none; color: #374151; background: #F9FAFB; }
                .resource-card:hover { background: #F3F4F6; }
                .resource-icon { color: #4F46E5; }
                .page-filters { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 2rem 0; border-bottom: 1px solid #E5E7EB; }
                .filter-btn { padding: 0.5rem 1rem; border: none; background: none; border-bottom: 2px solid transparent; font-size: 1rem; font-weight: 500; color: #6B7280; cursor: pointer; }
                .filter-btn.active { color: #4F46E5; border-bottom-color: #4F46E5; }
                .session-list-page { display: flex; flex-direction: column; gap: 1.5rem; }
                .my-courses-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
                .my-course-card { background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 1.5rem; overflow: hidden; }
                .course-card-image { height: 120px; display: flex; align-items: center; justify-content: center; }
                .my-course-info { padding: 1.5rem; }
                .mentor-grid-page { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem; }
                .mentor-card-page { background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 1.5rem; padding: 1.5rem; text-align: center; }
                .mentor-avatar-page { width: 80px; height: 80px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem; flex-shrink: 0; }
                .mentor-card-page h3 { font-size: 1.25rem; font-weight: 600; margin: 0; }
                .mentor-title-page { font-size: 0.875rem; color: #6B7280; margin: 0.25rem 0 1rem 0; }
                .mentor-tags-page { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; }
                .mentor-tag-page { background-color: #E0E7FF; color: #4338CA; font-size: 0.75rem; font-weight: 500; padding: 0.25rem 0.75rem; border-radius: 9999px; position: relative; }
                .profile-banner { background: linear-gradient(to right, #6D28D9, #4F46E5); border-radius: 1.5rem; padding: 2rem; margin-bottom: 2rem; }
                .profile-banner-content { display: flex; align-items: center; gap: 2rem; flex-wrap: wrap; }
                .profile-avatar-container { position: relative; }
                .profile-avatar-large { width: 100px; height: 100px; border-radius: 50%; object-fit: cover; border: 3px solid white; box-shadow: 0 4px 15px rgba(0,0,0,0.2); flex-shrink: 0; max-width: 100px; max-height: 100px; }
                .change-picture-btn { position: absolute; bottom: 5px; right: 5px; background: white; border: 1px solid #E5E7EB; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #4F46E5; transition: all 0.2s ease; }
                .change-picture-btn:hover { background-color: #F3F4F6; transform: scale(1.1); }
                .profile-header-info { flex-grow: 1; }
                .profile-header-info h1 { color: white; font-size: 2.25rem; margin: 0; }
                .profile-header-info p { color: #E0E7FF; font-size: 1.125rem; margin: 0.25rem 0 0; }
                .profile-name-input, .profile-headline-input { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); color: white; border-radius: 0.5rem; padding: 0.5rem 1rem; font-family: inherit; width: 100%;}
                .profile-name-input { font-size: 2.25rem; font-weight: 700; margin-bottom: 0.25rem; }
                .profile-headline-input { font-size: 1.125rem; }
                .profile-header-actions { flex-shrink: 0; display: flex; gap: 1rem; }
                .profile-page-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; align-items: start; }
                .profile-main-col, .profile-side-col { display: flex; flex-direction: column; gap: 2rem; }
                .profile-card { background: #fff; border: 1px solid #E5E7EB; border-radius: 1.5rem; padding: 1.5rem; }
                .profile-card .card-header h3 { font-size: 1.125rem; color: #374151; }
                .profile-bio-text { color: #4B5563; line-height: 1.6; }
                .profile-bio-textarea { width: 100%; border: 1px solid #D1D5DB; border-radius: 0.75rem; padding: 1rem; font-family: inherit; font-size: 1rem; color: #4B5563; resize: vertical; }
                .timeline { position: relative; padding-left: 1.5rem; border-left: 2px solid #E5E7EB; }
                .timeline-item { position: relative; display: flex; gap: 1rem; padding-bottom: 2rem; }
                .timeline-item:last-child { padding-bottom: 0; }
                .timeline-logo { position: absolute; left: -24px; top: 0; width: 46px; height: 46px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.25rem; border: 4px solid #F9FAFB; }
                .timeline-details { padding-left: 3rem; flex-grow: 1; }
                .timeline-details h4, .timeline-input-title { font-size: 1rem; font-weight: 600; color: #111827; margin: 0; }
                .timeline-details p, .timeline-input-subtitle { margin: 0.25rem 0 0; color: #4B5563; }
                .timeline-details span, .timeline-input-meta { margin-top: 0.25rem; color: #6B7280; font-size: 0.875rem; display: block; }
                .timeline-input-title, .timeline-input-subtitle, .timeline-input-meta { width: 100%; border: 1px solid #D1D5DB; border-radius: 0.5rem; padding: 0.5rem; font-family: inherit; margin-bottom: 0.5rem; font-size: 1rem; }
                .progress-circle-container { display: flex; justify-content: center; align-items: center; position: relative; }
                .progress-circle { transform: rotate(-90deg); }
                .progress-circle-bg { fill: none; stroke: #E5E7EB; stroke-width: 12; }
                .progress-circle-bar { fill: none; stroke: #4F46E5; stroke-width: 12; stroke-linecap: round; transition: stroke-dashoffset 0.5s ease; stroke-dasharray: 339; }
                .progress-circle-text { position: absolute; font-size: 1.75rem; font-weight: 700; color: #4F46E5; }
                .skills-container { display: flex; flex-wrap: wrap; gap: 0.5rem; }
                .skill-tag { background-color: #E0E7FF; color: #4338CA; font-size: 0.875rem; font-weight: 500; padding: 0.5rem 1rem; border-radius: 9999px; display: inline-flex; align-items: center; gap: 0.5rem; }
                .skill-delete-btn { background: #C7D2FE; color: #4338CA; border: none; border-radius: 50%; width: 18px; height: 18px; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 0; font-size: 14px; line-height: 1; }
                .add-skill-form { display: flex; gap: 0.5rem; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #E5E7EB; }
                .add-skill-form input { flex-grow: 1; border: 1px solid #D1D5DB; border-radius: 0.5rem; padding: 0.5rem; }
                .social-links-container { display: flex; flex-direction: column; gap: 0.75rem; }
                .social-link-btn { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; color: #374151; font-weight: 500; padding: 0.75rem 1rem; border-radius: 0.75rem; transition: background-color 0.2s ease; }
                .social-link-btn:hover { background-color: #F3F4F6; }
                .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(17, 24, 39, 0.6); display: flex; align-items: center; justify-content: center; z-index: 1000; backdrop-filter: blur(4px); }
                .modal-content { background: white; padding: 2rem; border-radius: 1.5rem; width: 90%; max-width: 500px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
                .modal-content.modal-billing { max-width: 700px; padding: 0; overflow: hidden;}
                .modal-content h2 { margin-top: 0; font-size: 1.5rem; }
                .modal-input { width: 100%; padding: 0.75rem 1rem; border: 1px solid #D1D5DB; border-radius: 0.5rem; font-size: 0.875rem; }
                .modal-input:focus { border-color: #4F46E5; box-shadow: 0 0 0 3px #C7D2FE; outline: none; }
                .modal-avatar-preview { max-width: 150px; height: auto; border-radius: 50%; margin: 1.5rem auto; display: block; }
                .modal-actions { display: flex; justify-content: flex-end; gap: 1rem; margin-top: 2rem; }
                .modal-billing-grid { display: grid; grid-template-columns: 280px 1fr; }
                .modal-billing-left { background-color: #F9FAFB; padding: 2rem; display: flex; align-items: center; justify-content: center; }
                .modal-billing-right { padding: 2.5rem; }
                .card-3d-wrapper { perspective: 1000px; width: 240px; height: calc(240px / 1.586); }
                .card-3d-front, .card-3d-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; transform-style: preserve-3d; transition: transform 0.6s; border-radius: 1rem; overflow: hidden; }
                .card-3d-front { background: linear-gradient(135deg, #4338CA, #6D28D9); padding: 1.5rem; color: white; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 15px 30px rgba(0,0,0,0.2); }
                .card-shine { position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(105deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 60%); transition: transform 0.3s ease; pointer-events: none; }
                .card-3d-front:hover .card-shine { transform: translateX(100%); }
                .card-3d-back { background: linear-gradient(135deg, #4B5563, #374151); transform: rotateY(180deg); padding: 1rem; }
                .card-3d-wrapper.is-flipped .card-3d-front { transform: rotateY(-180deg); }
                .card-3d-wrapper.is-flipped .card-3d-back { transform: rotateY(0deg); }
                .card-back-black-strip { background: #111827; height: 40px; margin-top: 1.5rem; }
                .card-back-cvv-strip { background: #fff; height: 30px; width: 85%; margin: 1rem auto 0; border-radius: 4px; text-align: right; padding: 0.5rem; color: #111827; font-family: monospace; font-size: 1rem; display: flex; align-items: center; justify-content: flex-end; }
                .cvv-label { color: #6B7280; font-size: 0.6rem; margin-right: 0.5rem; font-family: 'Lexend', sans-serif;}
                .card-visual-brand-logo { position: absolute; top: 1.5rem; right: 1.5rem; }
                .card-back-brand { position: absolute; bottom: 1.5rem; right: 1.5rem; }
                .card-visual-chip { width: 48px; height: 36px; background: linear-gradient(135deg, #d6d6d6, #a7a7a7); border-radius: 0.375rem; }
                .card-visual-number { font-family: 'Courier New', monospace; font-size: 1.25rem; letter-spacing: 2px; margin-top: 1.5rem; height: 1.5rem; }
                .card-visual-bottom-row { display: flex; justify-content: space-between; }
                .card-label { font-size: 0.6rem; text-transform: uppercase; color: rgba(255,255,255,0.7); }
                .form-row { display: flex; gap: 1rem; }
                .form-row .input-group { flex: 1; }
                .settings-grid { display: flex; flex-direction: column; gap: 2rem; margin-top: 2rem; }
                .settings-text { color: #4B5563; margin-top: 0; }
                .input-group { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem; }
                .input-group label { font-weight: 500; font-size: 0.875rem; }
                .password-form-container .card-footer { border: none; padding-top: 0; }
                .password-input-wrapper-settings { position: relative; display: flex; align-items: center; }
                .password-input-wrapper-settings input { width: 100%; padding: 0.75rem 3rem 0.75rem 3rem; border: 1px solid #D1D5DB; border-radius: 0.75rem; }
                .password-input-icon-settings { position: absolute; left: 1rem; color: #9CA3AF; }
                .password-toggle-icon-settings { position: absolute; right: 1rem; background: none; border: none; cursor: pointer; color: #6B7280; padding: 0; }
                .password-strength-meter { display: flex; align-items: center; gap: 0.75rem; margin-top: 0.5rem;}
                .strength-bar-container { flex-grow: 1; background-color: #E5E7EB; border-radius: 3px; height: 6px; overflow:hidden; }
                .strength-bar { height: 100%; border-radius: 3px; transition: all 0.3s ease; }
                .strength-text { font-size: 0.875rem; font-weight: 500; width: 60px; text-align: right; }
                .danger-zone { border-color: #F87171; }
                .delete-btn { background: #EF4444; color: white; border: none; padding: 0.75rem 1.25rem; border-radius: 0.5rem; font-weight: 600; cursor: pointer; }
                .notification-list { display: flex; flex-direction: column; gap: 1.5rem; }
                .notification-item { display: flex; justify-content: space-between; align-items: center; }
                .notification-item h4 { font-size: 1rem; font-weight: 600; margin: 0; }
                .notification-item p { font-size: 0.875rem; color: #6B7280; margin: 0.25rem 0 0 0; }
                .switch { position: relative; display: inline-block; width: 40px; height: 22px; }
                .switch input { opacity: 0; width: 0; height: 0; }
                .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; transition: .4s; }
                .slider:before { position: absolute; content: ""; height: 18px; width: 18px; left: 2px; bottom: 2px; background-color: white; transition: .4s; }
                input:checked + .slider { background-color: #4F46E5; }
                input:checked + .slider:before { transform: translateX(18px); }
                .slider.round { border-radius: 34px; }
                .slider.round:before { border-radius: 50%; }
                .subscription-info { display: flex; justify-content: space-between; align-items: center; }
                .subscription-info p { margin: 0; color: #6B7280; }
                .subscription-info h4 { margin: 0.25rem 0 0 0; font-size: 1.125rem; }
                .payment-methods-list { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
                .payment-method-card { display: flex; align-items: center; gap: 1rem; padding: 1rem; background: #F9FAFB; border: 1px solid #F3F4F6; border-radius: 0.75rem; }
                .card-brand-icon { flex-shrink: 0; color: #4B5563; }
                .card-details { flex-grow: 1; }
                .card-details h4 { font-size: 1rem; font-weight: 600; color: #111827; margin: 0; }
                .card-details p { font-size: 0.875rem; color: #6B7280; margin: 0.25rem 0 0 0; }
                .default-badge { background-color: #E0E7FF; color: #4338CA; padding: 0.25rem 0.75rem; border-radius: 99px; font-size: 0.75rem; font-weight: 600; }
                .remove-card-btn { background: none; border: none; color: #EF4444; font-weight: 600; cursor: pointer; font-size: 0.875rem; }
                .billing-history-list { display: flex; flex-direction: column; gap: 1rem; }
                .billing-history-item { display: flex; align-items: center; gap: 1rem; padding: 1rem; background: #F9FAFB; border-radius: 0.75rem; }
                .billing-item-icon { color: #4F46E5; }
                .billing-item-details { flex-grow: 1; }
                .billing-item-details h4 { font-size: 1rem; font-weight: 600; margin: 0; }
                .billing-item-details p { font-size: 0.875rem; color: #6B7280; margin: 0.25rem 0 0 0; }
                .download-invoice-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border: 1px solid #D1D5DB; background: #fff; border-radius: 0.5rem; text-decoration: none; color: #374151; font-weight: 500; }
                .page-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.4); z-index: 999; }
                @media (max-width: 1200px) {
                    .dashboard-grid, .recommendations-grid, .dashboard-grid-secondary, .profile-page-grid { grid-template-columns: 1fr; }
                    .modal-billing-grid { grid-template-columns: 1fr; }
                    .modal-billing-left { display: none; }
                }
                @media (max-width: 992px) {
                    .stats-grid, .resource-grid, .my-courses-grid, .mentor-grid-page { grid-template-columns: 1fr; }
                    .sidebar { position: fixed; left: 0; top: 0; height: 100%; z-index: 1000; transform: translateX(-100%); transition: transform 0.3s ease; }
                    .sidebar.mobile-open { transform: translateX(0); }
                    .main-content { padding: 1.5rem; width: 100%; }
                    .dashboard-layout { height: auto; }
                    .collapse-btn { display: none; }
                    .mobile-menu-btn { display: block; }
                    .page-overlay.active { display: block; }
                    .profile-banner-content { flex-direction: column; text-align: center; gap: 1rem; }
                    .profile-avatar-large { width: 80px; height: 80px; }
                    .profile-header-actions { justify-content: center; }
                    .session-avatar { width: 40px; height: 40px; }
                    .mentor-avatar-page { width: 60px; height: 60px; }
                }
            `}</style>
            <div className="dashboard-body">
                <div className="dashboard-layout">
                    <div className={`page-overlay ${isMobileNavOpen ? 'active' : ''}`} onClick={() => setIsMobileNavOpen(false)}></div>
                    <aside className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''} ${isMobileNavOpen ? 'mobile-open' : ''}`}>
                        <div className="sidebar-logo">
                            <span className="logo-icon">TP</span>
                            <span className="logo-text">ThePlacemate</span>
                        </div>
                        <button className="collapse-btn" onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}>
                            <UIIcon name="chevronLeft" className="chevron" />
                        </button>
                        <nav className="sidebar-nav">
                            <a href="#" className={`nav-link ${activeLink === 'Dashboard' ? 'active' : ''}`} onClick={() => setActiveLink('Dashboard')}><UIIcon name="dashboard" /> <span className="nav-text">Dashboard</span></a>
                            <a href="#" className={`nav-link ${activeLink === 'My Sessions' ? 'active' : ''}`} onClick={() => setActiveLink('My Sessions')}><UIIcon name="sessions" /> <span className="nav-text">My Sessions</span></a>
                            <a href="#" className={`nav-link ${activeLink === 'My Courses' ? 'active' : ''}`} onClick={() => setActiveLink('My Courses')}><UIIcon name="courses" /> <span className="nav-text">My Courses</span></a>
                            <a href="#" className={`nav-link ${activeLink === 'Find a Mentor' ? 'active' : ''}`} onClick={() => setActiveLink('Find a Mentor')}><UIIcon name="mentors" /> <span className="nav-text">Find a Mentor</span></a>
                        </nav>
                        <div className="sidebar-footer">
                            <a href="#" className={`nav-link ${activeLink === 'Profile' ? 'active' : ''}`} onClick={() => setActiveLink('Profile')}><UIIcon name="profile" /> <span className="nav-text">Profile</span></a>
                            <a href="#" className={`nav-link ${activeLink === 'Settings' ? 'active' : ''}`} onClick={() => setActiveLink('Settings')}><UIIcon name="settings" /> <span className="nav-text">Settings</span></a>
                            <a href="#" className="nav-link"><UIIcon name="logout" /> <span className="nav-text">Logout</span></a>
                        </div>
                        <div className="user-profile-link" style={{ marginTop: '2rem' }}>
                            <img src={student.avatar} alt={student.name} className="user-avatar" />
                            <div className="user-info">
                                <h4>{student.name}</h4>
                                <p>{student.email}</p>
                            </div>
                        </div>
                    </aside>
                    <main className="main-content">
                        <button className="mobile-menu-btn" onClick={() => setIsMobileNavOpen(true)}>
                            <UIIcon name="menu" />
                        </button>
                        {renderContent()}
                    </main>
                </div>
            </div>
        </>
    );
};

export default StudentDashboard;
