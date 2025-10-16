import React, { useState, useEffect, useRef } from 'react';

// --- SVG Icons ---
const UsersIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const BriefcaseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const BuildingIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line><line x1="9" y1="15" x2="9.01" y2="15"></line><line x1="15" y1="15" x2="15.01" y2="15"></line></svg>;
const DollarSignIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
const LayoutGridIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>;
const BarChartIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>;
const SettingsIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
const LogOutIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
const ChevronLeftIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>;
const BookOpenIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;
const MessageSquareIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
const ShieldIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const TrashIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>;
const KeyIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>;
const PlusIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const MenuIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
const ClockIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const SendIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;
const SearchIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const DownloadIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;
const EyeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
const EditIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>;
const UserPlusIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="17" y1="11" x2="23" y2="11"></line></svg>;
const ShieldCheckIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>;
const ListIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>;
const ActivityIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;
const FileTextIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
const UploadIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>;
const FolderIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>;
const LogInIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>;
const FileCheckIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 15 2 2 4-4"></path></svg>;
const VideoIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>;
const BookMarkIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>;
const GripVerticalIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>;
const CalendarIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const BellIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>;
const FileIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>;
const ReplaceIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 15 2-2 2 2"/><path d="m9 11 2 2 2-2"/></svg>;
const LinkIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg>;


// --- Reusable Modal Component ---
const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content glass-effect" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">{title}</h2>
                    <button onClick={onClose} className="modal-close-btn">&times;</button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

// --- Dashboard Content Components ---
const AdminOverviewContent = () => {
    const stats = [
        { title: "Total Users", value: "12,482", icon: <UsersIcon />, action: () => alert('Navigating to User Management...') }, 
        { title: "Active Companies", value: "856", icon: <BuildingIcon />, action: () => alert('Navigating to Recruiter Management...') }, 
        { title: "Open Job Postings", value: "1,240", icon: <BriefcaseIcon />, action: () => alert('Navigating to Placement Management...') }, 
        { title: "Monthly Revenue", value: "$42,500", icon: <DollarSignIcon />, action: () => alert('Navigating to Analytics...') }
    ];
    
    // The current day is Wednesday (index 2)
    const currentDayIndex = (new Date().getDay() + 6) % 7;
    const weeklyData = [ { day: 'Mon', signups: 28 }, { day: 'Tue', signups: 45 }, { day: 'Wed', signups: 32 }, { day: 'Thu', signups: 60 }, { day: 'Fri', signups: 75 }, { day: 'Sat', signups: 50 }, { day: 'Sun', signups: 40 }];
    const maxSignups = Math.max(...weeklyData.map(d => d.signups), 0);
    
    const recentActivities = [ 
        { user: 'Aarav Sharma', action: 'signed up as a Candidate.', time: '2m ago', type: 'signup' }, 
        { user: 'TechCorp', action: 'posted a new job: Frontend Dev.', time: '1h ago', type: 'job_post' }, 
        { user: 'Riya Singh', action: 'signed up as a Candidate.', time: '3h ago', type: 'signup' }, 
        { user: 'Innovate LLC', action: 'upgraded to a premium plan.', time: '5h ago', type: 'plan_upgrade' }, 
        { user: 'Admin', action: 'approved 5 new reviews.', time: '8h ago', type: 'review' }, 
    ];

    const getActivityIcon = (type) => {
        switch(type) {
            case 'signup': return <UsersIcon />;
            case 'job_post': return <BriefcaseIcon />;
            case 'plan_upgrade': return <DollarSignIcon />;
            case 'review': return <MessageSquareIcon />;
            default: return <ClockIcon />;
        }
    };

    const handleNotificationSubmit = (e) => { 
        e.preventDefault();
        const recipient = e.target.recipient.value;
        if(window.confirm(`Are you sure you want to send this notification to ${recipient}?`)) {
            alert('Notification sent!'); 
            e.target.reset();
        }
    };

    return (
        <div className="overview-layout">
            <div className="overview-main">
                <div className="stats-grid">
                    {stats.map((stat, i) => (
                        <div key={i} className="stat-card glass-effect stat-card-clickable" style={{animationDelay: `${0.2 + i * 0.1}s`}} onClick={stat.action}>
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-info">
                                <div className="value">{stat.value}</div>
                                <div className="title">{stat.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="content-card glass-effect" style={{animationDelay: '0.6s'}}>
                    <h2 className="content-title">Recent Activity</h2>
                    <div className="activity-feed">
                        {recentActivities.map((activity, index) => (
                            <div className="activity-item" key={index}>
                                <div className={`activity-icon-wrapper activity-type-${activity.type}`}>
                                    {getActivityIcon(activity.type)}
                                </div>
                                <div className="activity-text"><strong>{activity.user}</strong> {activity.action}</div>
                                <div className="activity-time">{activity.time}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="overview-sidebar">
                <div className="content-card glass-effect" style={{animationDelay: '0.4s'}}>
                    <h2 className="content-title">Weekly Registrations</h2>
                    <div className="chart-container">
                        {weeklyData.map((data, index) => (
                           <div className="chart-bar-wrapper" key={index}>
                                <div 
                                    className={`chart-bar ${index === currentDayIndex ? 'chart-bar-today' : ''}`}
                                    style={{ height: `${(data.signups / maxSignups) * 100}%` }}
                                >
                                    <div className="bar-tooltip">{data.signups}</div>
                                </div>
                                <div className="chart-label">{data.day}</div>
                           </div>
                        ))}
                    </div>
                </div>
                 <div className="content-card glass-effect" style={{animationDelay: '0.7s'}}>
                    <h2 className="content-title">Key Metrics</h2>
                    <div className="key-metrics-list">
                        <div className="key-metric-item">
                            <span className="key-metric-label">Top Performing Course</span>
                            <span className="key-metric-value">Adv. Frontend</span>
                        </div>
                         <div className="key-metric-item">
                            <span className="key-metric-label">Most Hires by Company</span>
                            <span className="key-metric-value">TechCorp</span>
                        </div>
                         <div className="key-metric-item">
                            <span className="key-metric-label">Avg. Application Time</span>
                            <span className="key-metric-value">3 days</span>
                        </div>
                         <div className="key-metric-item">
                            <span className="key-metric-label">Platform Uptime (30d)</span>
                            <span className="key-metric-value">99.98%</span>
                        </div>
                    </div>
                </div>
                <div className="content-card glass-effect" style={{animationDelay: '0.8s'}}>
                       <h2 className="content-title">Quick Notification</h2>
                    <form className="notification-form" onSubmit={handleNotificationSubmit}>
                        <div className="form-group"><label htmlFor="recipient">Recipient</label><select id="recipient" name="recipient" className="form-input"><option value="All Candidates">All Candidates</option><option value="All Companies">All Companies</option><option value="All Users">All Users</option></select></div>
                         <div className="form-group"><label htmlFor="subject">Subject</label><input type="text" id="subject" name="subject" className="form-input" placeholder="e.g. Platform Maintenance"/></div>
                        <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" name="message" rows="3" className="form-input" placeholder="Enter your message here..."></textarea></div>
                        <button type="submit" className="cta-button cta-primary"><SendIcon /> Send Notification</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// --- User Management Sub-Components ---
const UserOverviewDashboard = () => {
    const stats = [ { title: "Total Users", value: "12,482" }, { title: "Active Users", value: "11,980" }, { title: "Inactive Users", value: "502" }, { title: "New This Week", value: "328" }, ];
    const recentSignups = [ { name: 'Kavya Patel', role: 'Candidate', time: '5m ago' }, { name: 'Dev Solutions', role: 'Recruiter', time: '2h ago' }, { name: 'Rohan Mehta', role: 'Candidate', time: '4h ago' } ];
    return (
        <div className="user-overview-grid">
            <div className="stats-grid">{stats.map((stat, i) => <div key={i} className="stat-card glass-effect" style={{animationDelay: `${0.1 + i * 0.1}s`}}><div className="stat-info"><div className="value">{stat.value}</div><div className="title">{stat.title}</div></div></div>)}</div>
            <div className="content-card glass-effect" style={{animationDelay: '0.5s'}}>
                   <h2 className="content-title">Recent Signups</h2>
                   <div className="activity-feed">
                       {recentSignups.map((user, i) => (
                           <div className="activity-item" key={i}>
                               <div className="activity-icon"><UsersIcon/></div>
                               <div className="activity-text"><strong>{user.name}</strong> joined as a {user.role}</div>
                               <div className="activity-time">{user.time}</div>
                           </div>
                       ))}
                   </div>
            </div>
        </div>
    );
};

const UserDirectory = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Priya Sharma', email: 'priya.s@example.com', role: 'Candidate', status: true }, 
        { id: 2, name: 'Alex Johnson', email: 'alex.j@company.com', role: 'Recruiter', status: true }, 
        { id: 3, name: 'Sameer Khan', email: 'sameer.k@example.com', role: 'Candidate', status: false }, 
        { id: 4, name: 'John Doe', email: 'john.d@admin.com', role: 'Admin', status: true }, 
        { id: 5, name: 'Anika Reddy', email: 'anika.r@example.com', role: 'Candidate', status: true },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [modalType, setModalType] = useState(''); // 'view', 'edit', 'delete'

    const openModal = (user, type) => {
        setSelectedUser(user);
        setModalType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
        setModalType('');
    };
    
    const handleUserDelete = (userId) => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
        closeModal();
    }

    const renderModalContent = () => {
        if (!selectedUser) return null;

        switch (modalType) {
            case 'view':
                return (
                    <div className="user-details-view">
                        <div className="user-avatar-large">{selectedUser.name.charAt(0)}</div>
                        <h3>{selectedUser.name}</h3>
                        <p>{selectedUser.email}</p>
                        <p><span className={`role-badge role-${selectedUser.role.toLowerCase()}`}>{selectedUser.role}</span></p>
                        <p>Status: <span className={selectedUser.status ? 'status-active' : 'status-suspended'}>{selectedUser.status ? 'Active' : 'Suspended'}</span></p>
                    </div>
                );
            case 'edit':
                 return (
                    <form onSubmit={(e) => { e.preventDefault(); alert('User updated!'); closeModal(); }}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" className="form-input" defaultValue={selectedUser.name} />
                        </div>
                         <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-input" defaultValue={selectedUser.email} />
                        </div>
                         <div className="form-group">
                            <label>Role</label>
                             <select className="form-input" defaultValue={selectedUser.role}>
                                 <option>Candidate</option>
                                 <option>Recruiter</option>
                                 <option>Admin</option>
                            </select>
                        </div>
                        <div className="form-actions-modal">
                            <button type="button" className="cta-button cta-secondary" onClick={closeModal}>Cancel</button>
                            <button type="submit" className="cta-button cta-primary">Save Changes</button>
                        </div>
                    </form>
                 );
            case 'delete':
                return (
                    <div>
                        <p>Are you sure you want to delete <strong>{selectedUser.name}</strong>? This action cannot be undone.</p>
                        <div className="form-actions-modal">
                            <button className="cta-button cta-secondary" onClick={closeModal}>Cancel</button>
                            <button className="cta-button cta-danger" onClick={() => handleUserDelete(selectedUser.id)}>Delete User</button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };
    
    const getModalTitle = () => {
        if (!selectedUser) return '';
        switch (modalType) {
            case 'view': return `User Profile: ${selectedUser.name}`;
            case 'edit': return `Edit User: ${selectedUser.name}`;
            case 'delete': return 'Confirm Deletion';
            default: return '';
        }
    }

    return (
        <>
        <div className="content-card glass-effect">
            <div className="directory-header">
                <div className="search-bar"><SearchIcon /><input type="text" placeholder="Search by name or email..." /></div>
                <div className="filter-controls"><select className="role-select"><option>All Roles</option><option>Candidate</option><option>Recruiter</option><option>Admin</option></select><select className="role-select"><option>Any Status</option><option>Active</option><option>Suspended</option></select></div>
                <button className="cta-button cta-primary" onClick={() => alert('Exporting user data...')}><DownloadIcon/> Export</button>
            </div>
            <div className="table-container">
                <div className="table-header-row"><div className="table-header-cell">User</div><div className="table-header-cell">Role</div><div className="table-header-cell">Status</div><div className="table-header-cell">Actions</div></div>
                {users.map((user) => 
                    <div className="table-row" key={user.id}>
                        <div className="table-cell" data-label="User"><div className="cell-title">{user.name}</div><div className="cell-subtitle">{user.email}</div></div>
                        <div className="table-cell" data-label="Role"><span className={`role-badge role-${user.role.toLowerCase()}`}>{user.role}</span></div>
                        <div className="table-cell" data-label="Status"><label className="switch"><input type="checkbox" defaultChecked={user.status} /><span className="slider round"></span></label></div>
                        <div className="table-cell actions" data-label="Actions">
                            <button className="action-button" title="View Details" onClick={() => openModal(user, 'view')}><EyeIcon/></button>
                            <button className="action-button" title="Edit User" onClick={() => openModal(user, 'edit')}><EditIcon/></button>
                            <button className="action-button delete" title="Delete User" onClick={() => openModal(user, 'delete')}><TrashIcon /></button>
                        </div>
                    </div>
                )}
            </div>
             <div className="pagination-footer">
                <button className="pagination-button" onClick={() => alert('Loading previous page...')}>Previous</button>
                <span>Page 1 of 10</span>
                <button className="pagination-button" onClick={() => alert('Loading next page...')}>Next</button>
            </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} title={getModalTitle()}>
            {renderModalContent()}
        </Modal>
        </>
    );
};

const AddInviteUser = () => {
    const [fileName, setFileName] = useState('');

    const handleManualSubmit = (e) => {
        e.preventDefault();
        alert('User added successfully!');
        e.target.reset();
    };

    const handleInviteSubmit = (e) => {
        e.preventDefault();
        alert('Invitation sent!');
        e.target.reset();
    };

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName('');
        }
    };
    
    const handleBulkUpload = (e) => {
        e.preventDefault();
        if(fileName) {
            alert(`File "${fileName}" uploaded for processing.`);
            e.target.reset();
            setFileName('');
        } else {
            alert('Please select a file to upload.');
        }
    };

    return (
        <div className="add-user-layout">
            <div className="content-card glass-effect" style={{animationDelay: '0.2s'}}>
                <h2 className="content-title">Add User Manually</h2>
                <form className="add-user-form" onSubmit={handleManualSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" name="fullName" className="form-input" placeholder="e.g., Anjali Deshpande" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" className="form-input" placeholder="e.g., anjali.d@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Assign Role</label>
                            <select id="role" name="role" className="form-input" required>
                                <option value="candidate">Candidate</option>
                                <option value="recruiter">Recruiter</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="cta-button cta-primary"><UserPlusIcon /> Add User</button>
                    </div>
                </form>
            </div>

             <div className="content-card glass-effect" style={{animationDelay: '0.4s'}}>
                <h2 className="content-title">Send Invitation Link on Email</h2>
                <form className="add-user-form" onSubmit={handleInviteSubmit}>
                    <div className="form-group">
                        <label htmlFor="inviteEmails">Email Addresses</label>
                        <textarea id="inviteEmails" name="inviteEmails" rows="3" className="form-input" placeholder="Enter one or more email addresses, separated by commas." required></textarea>
                    </div>
                     <div className="form-group">
                        <label htmlFor="inviteRole">Assign Role on Registration</label>
                        <select id="inviteRole" name="inviteRole" className="form-input" required>
                            <option value="candidate">Candidate</option>
                            <option value="recruiter">Recruiter</option>
                        </select>
                    </div>
                    <div className="form-actions">
                         <button type="submit" className="cta-button cta-primary"><SendIcon /> Send Invitations</button>
                    </div>
                </form>
            </div>

             <div className="content-card glass-effect" style={{animationDelay: '0.6s'}}>
                <h2 className="content-title">Bulk Upload for Adding Students</h2>
                 <form onSubmit={handleBulkUpload}>
                    <p className="upload-instructions">Add many students at once by uploading a CSV or Excel file. The file should have columns for 'name', 'email', and 'role'.</p>
                    <div className="file-upload-area">
                        <input type="file" id="bulkUploadFile" className="file-input" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" onChange={handleFileChange} />
                        <label htmlFor="bulkUploadFile" className="file-label">
                            <UploadIcon />
                            <span>{fileName || 'Click to choose a file'}</span>
                        </label>
                    </div>
                    <div className="form-actions bulk-actions">
                        <a href="#" onClick={(e) => { e.preventDefault(); alert('Downloading template file...'); }} className="download-template-link">Download CSV Template</a>
                        <button type="submit" className="cta-button cta-primary"><UploadIcon /> Upload & Invite</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const RolesAndPermissions = () => {
    const allPermissions = [
        { id: 'view_content', label: 'View Content' }, { id: 'apply_jobs', label: 'Apply for Jobs' },
        { id: 'upload_content', label: 'Upload Content' }, { id: 'schedule_sessions', label: 'Schedule Sessions' },
        { id: 'post_jobs', label: 'Post Jobs' }, { id: 'review_applicants', label: 'Review Applicants' },
        { id: 'manage_users', label: 'Manage Users' }, { id: 'full_control', label: 'Full Admin Control' },
    ];

    const initialRoles = [
        { name: 'Student', description: 'Can view content and apply for jobs.', permissions: { 'view_content': true, 'apply_jobs': true } },
        { name: 'Mentor', description: 'Can upload content and schedule sessions.', permissions: { 'upload_content': true, 'schedule_sessions': true, 'view_content': true } },
        { name: 'Recruiter', description: 'Can post jobs and review applicants.', permissions: { 'post_jobs': true, 'review_applicants': true, 'view_content': true } },
        { name: 'Admin', description: 'Has full control over the platform.', permissions: { 'view_content': true, 'apply_jobs': true, 'upload_content': true, 'schedule_sessions': true, 'post_jobs': true, 'review_applicants': true, 'manage_users': true, 'full_control': true } }
    ];

    const [roles, setRoles] = useState(initialRoles);

    const handlePermissionChange = (roleIndex, permissionId) => {
        const newRoles = [...roles];
        const currentPermissionState = newRoles[roleIndex].permissions[permissionId] || false;
        newRoles[roleIndex].permissions[permissionId] = !currentPermissionState;
        setRoles(newRoles);
    };

    return (
        <div className="roles-permissions-layout">
            <div className="roles-header">
                <h2 className="content-title">Manage Roles & Permissions</h2>
                <button className="cta-button cta-primary" onClick={() => alert('Opening modal to add a new role...')}><PlusIcon/> Add New Role</button>
            </div>
            <div className="roles-grid">
                {roles.map((role, roleIndex) => (
                    <div key={role.name} className="content-card glass-effect role-card">
                        <div className="role-card-header">
                            <div>
                                <h3 className="role-name">{role.name}</h3>
                                <p className="role-description">{role.description}</p>
                            </div>
                            <div className="role-actions">
                                <button className="action-button" title="Edit Role" onClick={() => alert(`Editing permissions for ${role.name}...`)}><EditIcon /></button>
                                <button className="action-button delete" title="Delete Role" onClick={() => alert(`Deleting the ${role.name} role... (A confirmation modal would appear here)`)}><TrashIcon /></button>
                            </div>
                        </div>
                        <div className="permissions-grid">
                            {allPermissions.map(permission => (
                                <div key={permission.id} className="permission-item">
                                    <label className="permission-label">
                                        <input 
                                            type="checkbox" 
                                            className="permission-checkbox"
                                            checked={role.permissions[permission.id] || false}
                                            onChange={() => handlePermissionChange(roleIndex, permission.id)}
                                            disabled={role.name === 'Admin'}
                                        />
                                        <span className="custom-checkbox"></span>
                                        {permission.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const GroupManagement = () => {
    const allUsers = [
        { id: 1, name: 'Priya Sharma', avatar: 'PS' },
        { id: 2, name: 'Alex Johnson', avatar: 'AJ' },
        { id: 3, name: 'Sameer Khan', avatar: 'SK' },
        { id: 4, name: 'John Doe', avatar: 'JD' },
        { id: 5, name: 'Anika Reddy', avatar: 'AR' },
    ];

    const [groups, setGroups] = useState([
        { id: 1, name: 'Batch 2025', description: 'Students graduating in 2025', members: [1, 3] },
        { id: 2, name: 'Frontend Course Group', description: 'Advanced frontend development students', members: [5] },
        { id: 3, name: 'Recruiter Team', description: 'Internal and external recruiting partners', members: [2, 4] }
    ]);

    const getUserById = (id) => allUsers.find(user => user.id === id);

    return (
        <div className="group-management-layout">
             <div className="groups-header">
                <h2 className="content-title">Batch & Group Management</h2>
                <button className="cta-button cta-primary" onClick={() => alert('Opening modal to create a new group...')}><PlusIcon/> Create New Group</button>
            </div>
            <div className="groups-grid">
                {groups.map(group => (
                    <div key={group.id} className="content-card glass-effect group-card">
                        <div className="group-card-header">
                            <div>
                                <h3 className="group-name">{group.name}</h3>
                                <p className="group-description">{group.description}</p>
                            </div>
                            <div className="group-actions">
                                <button className="action-button" title="Edit Group" onClick={() => alert(`Editing details for ${group.name}...`)}><EditIcon /></button>
                                <button className="action-button delete" title="Delete Group" onClick={() => alert(`Deleting the group ${group.name}... (A confirmation modal would appear here)`)}><TrashIcon /></button>
                            </div>
                        </div>
                        <div className="group-members">
                            <h4>Members ({group.members.length})</h4>
                            <div className="member-list">
                                {group.members.map(memberId => {
                                    const user = getUserById(memberId);
                                    return (
                                        <div key={memberId} className="member-avatar" title={user.name}>{user.avatar}</div>
                                    );
                                })}
                                <button className="add-member-btn" title="Add Member" onClick={() => alert(`Opening modal to add members to ${group.name}...`)}><PlusIcon /></button>
                            </div>
                        </div>
                         <div className="group-card-footer">
                            <button className="cta-button cta-secondary" onClick={() => alert(`Opening member management screen for ${group.name}...`)}>Manage Members</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ActivityLogs = () => {
    const logData = [
        { user: { name: 'Priya Sharma', avatar: 'PS' }, action: 'Applied for the "Frontend Developer" job.', timestamp: '2025-09-29 11:42 AM', ip: '103.22.84.11', type: 'job_apply' },
        { user: { name: 'Admin', avatar: 'AD' }, action: 'Deleted the user "Sameer Khan".', timestamp: '2025-09-29 11:30 AM', ip: '127.0.0.1', type: 'delete' },
        { user: { name: 'Alex Johnson', avatar: 'AJ' }, action: 'Logged in successfully.', timestamp: '2025-09-29 11:15 AM', ip: '202.54.12.33', type: 'login' },
        { user: { name: 'Innovate LLC', avatar: 'IL' }, action: 'Uploaded new company branding assets.', timestamp: '2025-09-29 10:55 AM', ip: '115.98.45.20', type: 'upload' },
        { user: { name: 'Anika Reddy', avatar: 'AR' }, action: 'Submitted the "React Skills Assessment".', timestamp: '2025-09-29 10:20 AM', ip: '49.36.17.91', type: 'test_submit' },
    ];

    const getIconForAction = (type) => {
        switch (type) {
            case 'login': return <LogInIcon />;
            case 'job_apply': return <BriefcaseIcon />;
            case 'upload': return <UploadIcon />;
            case 'test_submit': return <FileCheckIcon />;
            case 'delete': return <TrashIcon />;
            default: return <ActivityIcon />;
        }
    };

    return (
        <div className="activity-log-layout">
            <div className="content-card glass-effect">
                 <div className="directory-header">
                    <div className="search-bar"><SearchIcon /><input type="text" placeholder="Search by user or action..." /></div>
                    <div className="filter-controls">
                        <select className="role-select">
                            <option>All Action Types</option>
                            <option>Login</option>
                            <option>Job Application</option>
                            <option>Content Upload</option>
                            <option>Test Submission</option>
                            <option>Deletion</option>
                        </select>
                        <input type="date" className="form-input" />
                    </div>
                </div>
                <div className="log-list">
                    {logData.map((log, index) => (
                        <div key={index} className="log-item">
                            <div className={`log-icon log-icon-${log.type}`}>{getIconForAction(log.type)}</div>
                            <div className="log-details">
                                <div className="log-action">
                                    <span className="log-user">{log.user.name}</span> {log.action}
                                </div>
                                <div className="log-meta">
                                    <span>{log.timestamp}</span>
                                    <span>•</span>
                                    <span>IP: {log.ip}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ReportsAndExport = () => {
    const reports = [
        { title: "Active User Report", description: "Detailed report of user login and activity trends.", format: "Excel", icon: <UsersIcon /> },
        { title: "Placed Students Data", description: "Comprehensive list of students who have been successfully placed.", format: "PDF", icon: <BriefcaseIcon /> },
        { title: "Content Engagement", description: "Analytics on content views, likes, and shares.", format: "Excel", icon: <BarChartIcon /> },
        { title: "Revenue Summary", description: "Monthly and quarterly revenue breakdown.", format: "PDF", icon: <DollarSignIcon /> }
    ];

    return (
        <div className="reports-export-layout">
            <div className="content-card glass-effect" style={{animationDelay: '0.2s'}}>
                <h2 className="content-title">Export User Data</h2>
                <p className="export-description">Download the complete list of registered users in your preferred format. This includes user details, roles, and status.</p>
                <div className="export-buttons">
                    <button className="cta-button cta-primary" onClick={() => alert('Generating and downloading user data as an Excel file...')}><DownloadIcon /> Export to Excel</button>
                    <button className="cta-button cta-secondary" onClick={() => alert('Generating and downloading user data as a PDF file...')}>Export to PDF</button>
                </div>
            </div>
            <div className="content-card glass-effect" style={{animationDelay: '0.4s'}}>
                <h2 className="content-title">Download Analytics Reports</h2>
                <p className="export-description">Generate and download detailed analytics reports for platform insights.</p>
                <div className="reports-grid">
                    {reports.map((report, index) => (
                        <div key={index} className="report-card">
                            <div className="report-icon">{report.icon}</div>
                            <div className="report-info">
                                <h3 className="report-title">{report.title}</h3>
                                <p className="report-description">{report.description}</p>
                            </div>
                            <div className="report-actions">
                                <button className="cta-button cta-primary" onClick={() => alert(`Generating and downloading "${report.title}" as ${report.format}...`)}><DownloadIcon /> Download {report.format}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// --- Content Management Components ---
const CurriculumManagement = () => {
    const initialCourses = [
        { id: 1, title: 'Advanced Frontend Development', published: true, lastUpdated: '2025-09-28', modules: [
            { id: 101, title: 'Module 1: Deep Dive into React', topics: [{id: 1001, title: 'Topic 1.1: State and Props'}, {id: 1002, title: 'Topic 1.2: React Hooks'}] },
            { id: 102, title: 'Module 2: Mastering CSS Grid', topics: [{id: 1003, title: 'Topic 2.1: Grid Layouts'}] },
        ]},
        { id: 2, title: 'Backend with Node.js & Express', published: false, lastUpdated: '2025-09-25', modules: [] },
    ];
    
    const [courses, setCourses] = useState(initialCourses);
    const [expandedCourses, setExpandedCourses] = useState([1]);

    const toggleCourse = (courseId) => {
        setExpandedCourses(prev => prev.includes(courseId) ? prev.filter(id => id !== courseId) : [...prev, courseId]);
    };
    
    return (
        <div className="curriculum-management">
            <div className="curriculum-header">
                <h2 className="content-title">Curriculum Builder</h2>
                <button className="cta-button cta-primary" onClick={() => alert("Open modal to add new course")}><PlusIcon/> Add New Course</button>
            </div>

            <div className="courses-list">
                {courses.map(course => (
                    <div key={course.id} className="course-item glass-effect">
                        <div className="course-header" onClick={() => toggleCourse(course.id)}>
                            <div className="course-title-section">
                                <button className="expand-btn">
                                    <ChevronLeftIcon style={{ transform: expandedCourses.includes(course.id) ? 'rotate(-90deg)' : 'rotate(0deg)'}} />
                                </button>
                                <h3>{course.title}</h3>
                                <span className={`status-badge ${course.published ? 'published' : 'draft'}`}>
                                    {course.published ? 'Published' : 'Draft'}
                                </span>
                            </div>
                            <div className="course-actions" onClick={(e) => e.stopPropagation()}>
                                <span className="last-updated">Last Updated: {course.lastUpdated}</span>
                                <label className="switch" title={course.published ? 'Unpublish Course' : 'Publish Course'}>
                                    <input type="checkbox" defaultChecked={course.published} onChange={() => alert(`Toggling publish status for ${course.title}`)}/>
                                    <span className="slider round"></span>
                                </label>
                                <button className="action-button" title="Edit Course" onClick={() => alert(`Editing ${course.title}`)}><EditIcon /></button>
                                <button className="action-button delete" title="Delete Course" onClick={() => alert(`Deleting ${course.title}`)}><TrashIcon /></button>
                            </div>
                        </div>

                        <div className={`course-content-wrapper ${expandedCourses.includes(course.id) ? 'expanded' : ''}`}>
                            <div className="course-content">
                                {course.modules.map((module) => (
                                    <div key={module.id} className="module-item">
                                        <div className="module-header">
                                            <span className="drag-handle"><GripVerticalIcon /></span>
                                            <h4>{module.title}</h4>
                                            <div className="module-actions">
                                                <button className="action-button-sm" onClick={() => alert(`Adding topic to ${module.title}`)}><PlusIcon/> Add Topic</button>
                                                <button className="action-button-sm" onClick={() => alert(`Editing ${module.title}`)}><EditIcon /></button>
                                                <button className="action-button-sm delete" onClick={() => alert(`Deleting ${module.title}`)}><TrashIcon /></button>
                                            </div>
                                        </div>
                                        <div className="topics-list">
                                            {module.topics.map((topic) => (
                                                <div key={topic.id} className="topic-item">
                                                    <span className="drag-handle"><GripVerticalIcon /></span>
                                                    <p>{topic.title}</p>
                                                    <div className="topic-actions">
                                                      <button className="action-button-sm" onClick={() => alert(`Editing ${topic.title}`)}><EditIcon/></button>
                                                      <button className="action-button-sm delete" onClick={() => alert(`Deleting ${topic.title}`)}><TrashIcon /></button>
                                                    </div>
                                                </div>
                                            ))}
                                            {module.topics.length === 0 && <p className="no-topics-text">No topics in this module yet.</p>}
                                        </div>
                                    </div>
                                ))}
                                 <button className="cta-button cta-secondary add-module-btn" onClick={() => alert(`Adding module to ${course.title}`)}><PlusIcon/> Add New Module</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const LiveSessionsManagement = () => {
    const initialSessions = [
        { id: 1, title: 'React Hooks Masterclass', description: 'A deep dive into useState, useEffect, and custom hooks.', speaker: 'Priya Sharma', dateTime: '2025-10-05T14:00:00', status: 'Upcoming', links: { zoom: 'https://zoom.us/j/12345', meet: '' }, attendees: [{ id: 1, name: 'Alex Johnson' },{ id: 3, name: 'Anika Reddy' }] },
        { id: 2, title: 'Introduction to Node.js', description: 'Covering the basics of Node.js, npm, and building a simple server.', speaker: 'Rohan Mehta', dateTime: '2025-09-28T11:00:00', status: 'Completed', links: { meet: 'https://meet.google.com/xyz-abc' }, attendees: [ { id: 1, name: 'Alex Johnson' }, { id: 2, name: 'Sameer Khan' }, { id: 3, name: 'Anika Reddy' }, { id: 4, name: 'John Doe' }] },
        { id: 3, title: 'Advanced CSS Techniques', description: 'Exploring Flexbox, Grid, and modern CSS features.', speaker: 'Anika Reddy', dateTime: '2025-09-25T16:00:00', status: 'Cancelled', links: {}, attendees: [] }
    ];

    const [sessions, setSessions] = useState(initialSessions);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(''); // 'schedule', 'edit', 'cancel', 'attendance', 'notify'
    const [selectedSession, setSelectedSession] = useState(null);

    const openModal = (type, session = null) => {
        setModalType(type);
        setSelectedSession(session);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSession(null);
        setModalType('');
    };
    
    const handleScheduleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you'd get form data and update state
        if (selectedSession) {
            alert(`Session "${selectedSession.title}" has been updated!`);
        } else {
            alert("New session has been scheduled!");
        }
        closeModal();
    };
    
    const handleCancelSession = (sessionId) => {
        setSessions(sessions.map(s => s.id === sessionId ? { ...s, status: 'Cancelled' } : s));
        closeModal();
    };
    
    const getModalTitle = () => {
        switch(modalType) {
            case 'schedule': return 'Schedule a New Live Session';
            case 'edit': return `Edit Session: ${selectedSession?.title}`;
            case 'cancel': return 'Confirm Cancellation';
            case 'attendance': return `Attendance for ${selectedSession?.title}`;
            case 'notify': return 'Send Notifications';
            default: return '';
        }
    };
    
    const renderModalContent = () => {
        if (!modalType) return null;
        
        switch(modalType) {
            case 'schedule':
            case 'edit':
                return (
                    <form onSubmit={handleScheduleSubmit} className="session-form">
                        <div className="form-group">
                            <label>Session Title</label>
                            <input type="text" className="form-input" defaultValue={selectedSession?.title} placeholder="e.g., Introduction to React" required />
                        </div>
                        <div className="form-group">
                            <label>Speaker / Mentor</label>
                            <input type="text" className="form-input" defaultValue={selectedSession?.speaker} placeholder="e.g., Priya Sharma" required />
                        </div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Date</label>
                                <input type="date" className="form-input" defaultValue={selectedSession ? new Date(selectedSession.dateTime).toISOString().split('T')[0] : ''} required />
                            </div>
                            <div className="form-group">
                                <label>Time</label>
                                <input type="time" className="form-input" defaultValue={selectedSession ? new Date(selectedSession.dateTime).toTimeString().substring(0, 5) : ''} required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea rows="3" className="form-input" defaultValue={selectedSession?.description} placeholder="Enter a brief session description..."></textarea>
                        </div>
                        <div className="form-group">
                            <label>Joining Links</label>
                            <input type="url" className="form-input" defaultValue={selectedSession?.links?.zoom} placeholder="Zoom Link (Optional)" />
                            <input type="url" className="form-input" defaultValue={selectedSession?.links?.meet} placeholder="Google Meet Link (Optional)" />
                        </div>
                        <div className="form-actions-modal">
                            <button type="button" className="cta-button cta-secondary" onClick={closeModal}>Cancel</button>
                            <button type="submit" className="cta-button cta-primary">{selectedSession ? 'Save Changes' : 'Schedule Session'}</button>
                        </div>
                    </form>
                );
            case 'cancel':
                return (
                     <div>
                        <p>Are you sure you want to cancel the session <strong>"{selectedSession?.title}"</strong>? This action will notify all registered students.</p>
                        <div className="form-actions-modal">
                            <button className="cta-button cta-secondary" onClick={closeModal}>No, Keep It</button>
                            <button className="cta-button cta-danger" onClick={() => handleCancelSession(selectedSession.id)}>Yes, Cancel Session</button>
                        </div>
                    </div>
                );
            case 'attendance':
                return (
                    <div className="attendance-tracker">
                        {selectedSession?.attendees.length > 0 ? (
                             <ul className="attendance-list">
                                {selectedSession.attendees.map(attendee => (
                                    <li key={attendee.id} className="attendee-item">
                                        <div className="user-avatar-small">{attendee.name.charAt(0)}</div>
                                        <span>{attendee.name}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="placeholder-text" style={{padding: '2rem 0'}}>No attendance data available.</p>
                        )}
                        
                    </div>
                );
            case 'notify':
                 return (
                     <div>
                        <p>This will send an email notification and a reminder to all students about the upcoming session: <strong>"{selectedSession?.title}"</strong>.</p>
                        <div className="form-actions-modal">
                            <button className="cta-button cta-secondary" onClick={closeModal}>Cancel</button>
                            <button className="cta-button cta-primary" onClick={() => { alert('Notifications sent!'); closeModal(); }}>Confirm & Send</button>
                        </div>
                    </div>
                 );
            default: return null;
        }
    };

    return (
        <div className="live-sessions-layout">
            <div className="sessions-header">
                <h2 className="content-title">Live Sessions</h2>
                <button className="cta-button cta-primary" onClick={() => openModal('schedule')}><PlusIcon /> Schedule New Session</button>
            </div>
            <div className="sessions-grid">
                {sessions.map(session => (
                    <div key={session.id} className={`content-card glass-effect session-card status-border-${session.status.toLowerCase()}`}>
                        <div className="session-card-header">
                            <div>
                                <h3 className="session-title">{session.title}</h3>
                                <p className="session-speaker">by {session.speaker}</p>
                            </div>
                            <span className={`session-status-badge status-${session.status.toLowerCase()}`}>{session.status}</span>
                        </div>
                        <div className="session-card-body">
                            <div className="session-time">
                                <CalendarIcon />
                                <span>{new Date(session.dateTime).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}</span>
                            </div>
                            <p className="session-description">{session.description}</p>
                        </div>
                        <div className="session-card-footer">
                           {session.status === 'Upcoming' && (
                             <>
                                <button className="action-button" title="Edit / Reschedule" onClick={() => openModal('edit', session)}><EditIcon /></button>
                                <button className="action-button" title="Send Notification" onClick={() => openModal('notify', session)}><BellIcon /></button>
                                <button className="action-button delete" title="Cancel Session" onClick={() => openModal('cancel', session)}><TrashIcon /></button>
                            </>
                           )}
                           {session.status === 'Completed' && (
                                <button className="cta-button cta-secondary" onClick={() => openModal('attendance', session)}>
                                    <UsersIcon/> Track Attendance ({session.attendees.length})
                                </button>
                           )}
                        </div>
                    </div>
                ))}
            </div>
             <Modal isOpen={isModalOpen} onClose={closeModal} title={getModalTitle()}>
                {renderModalContent()}
            </Modal>
        </div>
    );
};
const StudyMaterialManagement = () => {
    const initialMaterials = [
        { id: 1, title: 'React Hooks Cheatsheet', type: 'PDF', course: 'Advanced Frontend Development', access: 'Student', downloads: 125, lastUpdated: '2025-09-15', fileName: 'react-hooks.pdf' },
        { id: 2, title: 'Intro to Express.js', type: 'Video', course: 'Backend with Node.js & Express', access: 'All', downloads: 210, lastUpdated: '2025-09-12', fileName: 'intro-express.mp4' },
        { id: 3, title: 'CSS Grid vs. Flexbox', type: 'PPT', course: 'Advanced Frontend Development', access: 'Mentor', downloads: 45, lastUpdated: '2025-09-10', fileName: 'grid-flexbox.pptx' },
        { id: 4, title: 'Project Scoping Document', type: 'Doc', course: 'Placement Management', access: 'Recruiter', downloads: 88, lastUpdated: '2025-09-18', fileName: 'project-scope.docx' },
    ];

    const [materials, setMaterials] = useState(initialMaterials);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(''); // 'upload', 'edit', 'delete', 'replace'
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [uploadFileName, setUploadFileName] = useState('');

    const openModal = (type, material = null) => {
        setModalType(type);
        setSelectedMaterial(material);
        setUploadFileName(material?.fileName || '');
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMaterial(null);
        setModalType('');
        setUploadFileName('');
    };
    
    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setUploadFileName(e.target.files[0].name);
        } else {
            setUploadFileName('');
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        if (modalType === 'upload') alert(`"${uploadFileName}" uploaded successfully!`);
        if (modalType === 'edit') alert(`Material "${selectedMaterial.title}" updated!`);
        if (modalType === 'replace') alert(`File for "${selectedMaterial.title}" has been replaced with "${uploadFileName}"!`);
        closeModal();
    };

    const handleDelete = (materialId) => {
        setMaterials(materials.filter(m => m.id !== materialId));
        closeModal();
    }

    const getModalTitle = () => {
        switch(modalType) {
            case 'upload': return 'Upload New Study Material';
            case 'edit': return `Edit Material: ${selectedMaterial?.title}`;
            case 'delete': return 'Confirm Deletion';
            case 'replace': return `Replace File for: ${selectedMaterial?.title}`;
            default: return '';
        }
    };

    const renderModalContent = () => {
        if (!modalType) return null;

        switch(modalType) {
            case 'upload':
            case 'edit':
                return (
                    <form onSubmit={handleFormSubmit}>
                        {modalType === 'upload' && (
                            <div className="form-group">
                                <label>Upload File</label>
                                <div className="file-upload-area small">
                                    <input type="file" id="materialUpload" className="file-input" onChange={handleFileChange} required/>
                                    <label htmlFor="materialUpload" className="file-label small">
                                        <UploadIcon />
                                        <span>{uploadFileName || 'Click to choose a file'}</span>
                                    </label>
                                </div>
                            </div>
                        )}
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" className="form-input" defaultValue={selectedMaterial?.title} placeholder="e.g., React Hooks Cheatsheet" required />
                        </div>
                        <div className="form-group">
                            <label>Description / Tags</label>
                            <input type="text" className="form-input" defaultValue={selectedMaterial?.description} placeholder="e.g., PDF, React, Frontend, Cheatsheet" />
                        </div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Categorize by Course</label>
                                <select className="form-input" defaultValue={selectedMaterial?.course}>
                                    <option>Advanced Frontend Development</option>
                                    <option>Backend with Node.js & Express</option>
                                    <option>Placement Management</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Control Access</label>
                                <select className="form-input" defaultValue={selectedMaterial?.access}>
                                    <option>All</option>
                                    <option>Student</option>
                                    <option>Mentor</option>
                                    <option>Recruiter</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-actions-modal">
                            <button type="button" className="cta-button cta-secondary" onClick={closeModal}>Cancel</button>
                            <button type="submit" className="cta-button cta-primary">{modalType === 'upload' ? 'Upload Material' : 'Save Changes'}</button>
                        </div>
                    </form>
                );
            case 'replace':
                return (
                     <form onSubmit={handleFormSubmit}>
                        <p>Upload a new version of the file. The old file will be replaced, but all other details and analytics will be preserved.</p>
                        <div className="form-group">
                            <label>New File Version</label>
                            <div className="file-upload-area small">
                                <input type="file" id="materialReplace" className="file-input" onChange={handleFileChange} required/>
                                <label htmlFor="materialReplace" className="file-label small">
                                    <UploadIcon />
                                    <span>{uploadFileName || 'Click to choose a file'}</span>
                                </label>
                            </div>
                        </div>
                        <div className="form-actions-modal">
                            <button type="button" className="cta-button cta-secondary" onClick={closeModal}>Cancel</button>
                            <button type="submit" className="cta-button cta-primary"><ReplaceIcon/> Replace File</button>
                        </div>
                    </form>
                );
            case 'delete':
                return (
                    <div>
                        <p>Are you sure you want to delete <strong>"{selectedMaterial?.title}"</strong>? This action cannot be undone.</p>
                        <div className="form-actions-modal">
                            <button className="cta-button cta-secondary" onClick={closeModal}>Cancel</button>
                            <button className="cta-button cta-danger" onClick={() => handleDelete(selectedMaterial.id)}>Delete Material</button>
                        </div>
                    </div>
                );
            default: return null;
        }
    };

    return (
        <div className="study-material-layout">
            <div className="sessions-header">
                <h2 className="content-title">Study Materials</h2>
                <button className="cta-button cta-primary" onClick={() => openModal('upload')}><UploadIcon /> Upload Material</button>
            </div>
            <div className="materials-grid">
                {materials.map(material => (
                    <div key={material.id} className="content-card glass-effect material-card">
                        <div className="material-card-header">
                            <div className="material-icon-wrapper"><FileIcon /></div>
                            <div>
                                <h3 className="material-title">{material.title}</h3>
                                <p className="material-course">{material.course}</p>
                            </div>
                        </div>
                        <div className="material-card-body">
                           <div className="material-details-grid">
                                <div><span>Type</span><span>{material.type}</span></div>
                                <div><span>Access</span><span>{material.access}</span></div>
                                <div><span>Downloads</span><span>{material.downloads}</span></div>
                                <div><span>Updated</span><span>{material.lastUpdated}</span></div>
                           </div>
                        </div>
                        <div className="material-card-footer">
                            <button className="action-button" title="Edit Details" onClick={() => openModal('edit', material)}><EditIcon /></button>
                            <button className="action-button" title="Replace File" onClick={() => openModal('replace', material)}><ReplaceIcon /></button>
                            <button className="action-button delete" title="Delete Material" onClick={() => openModal('delete', material)}><TrashIcon /></button>
                        </div>
                    </div>
                ))}
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} title={getModalTitle()}>
                {renderModalContent()}
            </Modal>
        </div>
    );
};
const TopicManagement = () => {
    const coursesData = [
        { id: 1, title: 'Advanced Frontend Development', modules: [ { id: 101, title: 'Module 1: Deep Dive into React' }, { id: 102, title: 'Module 2: Mastering CSS Grid' } ]},
        { id: 2, title: 'Backend with Node.js & Express', modules: [ { id: 201, title: 'Module 1: Intro to Node' }, { id: 202, title: 'Module 2: Express Routing' } ]},
        { id: 3, title: 'Placement Management', modules: [ { id: 301, title: 'Module 1: Resume Building' } ]}
    ];

    const initialTopics = [
        { id: 1, title: 'Understanding React State', description: 'A comprehensive look at useState and useReducer hooks.', courseId: 1, moduleId: 101, resources: [ { id: 101, type: 'PDF', title: 'State & Lifecycle Docs', url: '#' }, { id: 102, type: 'Video', title: 'useState in 10 mins', url: '#' } ], progress: { completed: 18, total: 25 } },
        { id: 2, title: 'Grid vs. Flexbox', description: 'When to use one over the other for modern layouts.', courseId: 1, moduleId: 102, resources: [ { id: 201, type: 'Link', title: 'CSS-Tricks Guide', url: '#' } ], progress: { completed: 24, total: 25 } },
        { id: 3, title: 'Building a REST API', description: 'Creating endpoints and handling requests with Express.', courseId: 2, moduleId: 202, resources: [], progress: { completed: 10, total: 22 } },
    ];

    const [topics, setTopics] = useState(initialTopics);
    const [isTopicModalOpen, setTopicModalOpen] = useState(false);
    const [isResourceModalOpen, setResourceModalOpen] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const openTopicModal = (topic = null) => {
        setSelectedTopic(topic);
        setIsEditing(!!topic);
        setTopicModalOpen(true);
    };
    const closeTopicModal = () => {
        setTopicModalOpen(false);
        setSelectedTopic(null);
        setIsEditing(false);
    };

    const openResourceModal = (topic) => {
        setSelectedTopic(topic);
        setResourceModalOpen(true);
    };
    const closeResourceModal = () => {
        setResourceModalOpen(false);
        setSelectedTopic(null);
    };
    
    const getResourceIcon = (type) => {
        switch (type) {
            case 'PDF': return <FileTextIcon />;
            case 'Video': return <VideoIcon />;
            case 'Link': return <LinkIcon />;
            default: return <FileIcon />;
        }
    };

    const handleTopicSave = (e) => {
        e.preventDefault();
        // In a real app, you would handle form data properly
        alert(isEditing ? `Topic "${selectedTopic.title}" updated!` : 'New topic created!');
        closeTopicModal();
    };

    const TopicModal = () => {
        const [selectedCourse, setSelectedCourse] = useState(selectedTopic?.courseId || '');
        const availableModules = coursesData.find(c => c.id == selectedCourse)?.modules || [];
        
        return (
            <Modal isOpen={isTopicModalOpen} onClose={closeTopicModal} title={isEditing ? 'Edit Topic' : 'Create New Topic'}>
                <form onSubmit={handleTopicSave}>
                    <div className="form-group">
                        <label>Topic Title</label>
                        <input type="text" className="form-input" defaultValue={selectedTopic?.title} placeholder="e.g., Introduction to Asynchronous JavaScript" required />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea rows="3" className="form-input" defaultValue={selectedTopic?.description} placeholder="Briefly describe what this topic covers."></textarea>
                    </div>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Assign to Course</label>
                            <select className="form-input" defaultValue={selectedTopic?.courseId} onChange={(e) => setSelectedCourse(e.target.value)} required>
                                <option value="" disabled>Select a course</option>
                                {coursesData.map(course => <option key={course.id} value={course.id}>{course.title}</option>)}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Assign to Module</label>
                            <select className="form-input" defaultValue={selectedTopic?.moduleId} required disabled={!selectedCourse}>
                                 <option value="" disabled>Select a module</option>
                                {availableModules.map(module => <option key={module.id} value={module.id}>{module.title}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="form-actions-modal">
                        <button type="button" className="cta-button cta-secondary" onClick={closeTopicModal}>Cancel</button>
                        <button type="submit" className="cta-button cta-primary">{isEditing ? 'Save Changes' : 'Create Topic'}</button>
                    </div>
                </form>
            </Modal>
        )
    };
    
    const ResourceModal = () => (
         <Modal isOpen={isResourceModalOpen} onClose={closeResourceModal} title={`Resources for: ${selectedTopic?.title}`}>
            <div className="resource-manager">
                <div className="current-resources">
                    <h4 className="resource-title">Attached Resources</h4>
                    {selectedTopic?.resources.length > 0 ? (
                        <div className="resource-list">
                        {selectedTopic.resources.map(res => (
                            <div key={res.id} className="resource-item">
                                <div className="resource-icon">{getResourceIcon(res.type)}</div>
                                <span className="resource-name">{res.title} ({res.type})</span>
                                <div className="resource-actions">
                                    <button className="action-button-sm"><EditIcon/></button>
                                    <button className="action-button-sm delete"><TrashIcon/></button>
                                </div>
                            </div>
                        ))}
                        </div>
                    ) : <p className="no-resources-text">No resources attached yet.</p>}
                </div>
                <div className="add-resource-form">
                     <h4 className="resource-title">Add New Resource</h4>
                     <form onSubmit={(e) => { e.preventDefault(); alert("New resource added!"); }}>
                        <div className="form-group">
                            <label>Resource Title</label>
                            <input type="text" className="form-input" placeholder="e.g., Official Documentation" required/>
                        </div>
                         <div className="form-grid">
                            <div className="form-group">
                                <label>Type</label>
                                <select className="form-input">
                                    <option>PDF</option>
                                    <option>Video</option>
                                    <option>Link</option>
                                </select>
                            </div>
                             <div className="form-group">
                                <label>URL or File Path</label>
                                <input type="text" className="form-input" placeholder="https://example.com/resource" required/>
                            </div>
                        </div>
                        <div className="form-actions" style={{justifyContent: 'flex-end'}}>
                             <button type="submit" className="cta-button cta-primary"><PlusIcon/> Add Resource</button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );

    return (
        <div className="topic-management-layout">
             <div className="sessions-header">
                <h2 className="content-title">Topic Management</h2>
                <button className="cta-button cta-primary" onClick={() => openTopicModal()}><PlusIcon /> Create New Topic</button>
            </div>
            <div className="content-card glass-effect">
                <div className="table-container">
                     <div className="table-header-row"><div className="table-header-cell">Topic</div><div className="table-header-cell">Course / Module</div><div className="table-header-cell">Resources</div><div className="table-header-cell">Completion</div><div className="table-header-cell">Actions</div></div>
                     {topics.map(topic => {
                         const course = coursesData.find(c => c.id === topic.courseId);
                         const module = course?.modules.find(m => m.id === topic.moduleId);
                         const completionPercentage = (topic.progress.completed / topic.progress.total) * 100;
                         return (
                            <div className="table-row" key={topic.id}>
                                <div className="table-cell" data-label="Topic">
                                    <div className="cell-title">{topic.title}</div>
                                    <div className="cell-subtitle">{topic.description}</div>
                                </div>
                                <div className="table-cell" data-label="Course / Module">
                                    <div className="cell-title">{course?.title}</div>
                                    <div className="cell-subtitle">{module?.title}</div>
                                </div>
                                <div className="table-cell" data-label="Resources">
                                    <div className="resource-pills">
                                        {topic.resources.map(res => (
                                            <span key={res.id} className="resource-pill" title={res.title}>
                                                {getResourceIcon(res.type)} {res.title}
                                            </span>
                                        ))}
                                        {topic.resources.length === 0 && <span className="no-resources-pill">None</span>}
                                    </div>
                                </div>
                                <div className="table-cell" data-label="Completion">
                                    <div className="progress-bar-container">
                                        <div className="progress-bar" style={{ width: `${completionPercentage}%` }}></div>
                                    </div>
                                    <span className="progress-text">{topic.progress.completed} / {topic.progress.total} Students</span>
                                </div>
                                <div className="table-cell actions" data-label="Actions">
                                    <button className="action-button" title="Edit Topic" onClick={() => openTopicModal(topic)}><EditIcon/></button>
                                    <button className="action-button" title="Manage Resources" onClick={() => openResourceModal(topic)}><FolderIcon/></button>
                                    <button className="action-button delete" title="Delete Topic" onClick={() => alert('Delete confirmation would show here.')}><TrashIcon /></button>
                                </div>
                            </div>
                         )
                     })}
                </div>
            </div>
            {isTopicModalOpen && <TopicModal />}
            {isResourceModalOpen && <ResourceModal />}
        </div>
    )
};


const ContentManagementContent = () => {
    const [activeTab, setActiveTab] = useState('Curriculum');
    const tabs = [
        { name: 'Curriculum', icon: <BookOpenIcon/> },
        { name: 'Live Sessions', icon: <VideoIcon/> },
        { name: 'Study Material', icon: <FolderIcon/> },
        { name: 'Topics', icon: <BookMarkIcon/> },
    ];

    const renderContent = () => {
        switch(activeTab) {
            case 'Curriculum': return <CurriculumManagement />;
            case 'Live Sessions': return <LiveSessionsManagement />;
            case 'Study Material': return <StudyMaterialManagement />;
            case 'Topics': return <TopicManagement />;
            default: return <PlaceholderContent title={activeTab} />;
        }
    };

    return (
        <div>
            <div className="sub-nav-container">
                {tabs.map(tab => (
                    <button 
                        key={tab.name} 
                        className={`sub-nav-tab ${activeTab === tab.name ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.name)}
                        title={tab.name}
                    >
                        <span className="sub-nav-icon">{tab.icon}</span>
                        <span className="sub-nav-text">{tab.name}</span>
                    </button>
                ))}
            </div>
            <div className="sub-nav-content">
                {renderContent()}
            </div>
        </div>
    );
};

const UserManagementContent = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const tabs = [
        { name: 'Overview', icon: <LayoutGridIcon/> },
        { name: 'User Directory', icon: <ListIcon/> },
        { name: 'Add / Invite User', icon: <UserPlusIcon/> },
        { name: 'Roles & Permissions', icon: <ShieldCheckIcon/> },
        { name: 'Group Management', icon: <FolderIcon/> },
        { name: 'Activity Logs', icon: <ActivityIcon/> },
        { name: 'Reports / Export', icon: <FileTextIcon/> }
    ];

    const renderUserContent = () => {
        switch(activeTab) {
            case 'Overview': return <UserOverviewDashboard />;
            case 'User Directory': return <UserDirectory />;
            case 'Add / Invite User': return <AddInviteUser />;
            case 'Roles & Permissions': return <RolesAndPermissions />;
            case 'Group Management': return <GroupManagement />;
            case 'Activity Logs': return <ActivityLogs />;
            case 'Reports / Export': return <ReportsAndExport />;
            default: return <PlaceholderContent title={activeTab} />;
        }
    };

    return (
        <div>
            <div className="sub-nav-container">
                {tabs.map(tab => (
                    <button 
                        key={tab.name} 
                        className={`sub-nav-tab ${activeTab === tab.name ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.name)}
                        title={tab.name}
                    >
                        <span className="sub-nav-icon">{tab.icon}</span>
                        <span className="sub-nav-text">{tab.name}</span>
                    </button>
                ))}
            </div>
            <div className="sub-nav-content">
                {renderUserContent()}
            </div>
        </div>
    );
};

// --- Analytics Dashboard Components ---
const AnalyticsDashboardContent = () => {
    return (
        <div className="analytics-grid">
            <StudentProgressTracking />
            <PlacementOutcomes />
            <UserEngagementMetrics />
            <PerformanceInsights />
            <CustomReports />
        </div>
    );
};

const StudentProgressTracking = () => {
    const progressData = [
        { label: 'Avg. Test Score', value: '88%', color: 'var(--success-color)' },
        { label: 'Attendance', value: '94%', color: 'var(--accent-color-secondary)' },
        { label: 'Completion Rate', value: '76%', color: 'var(--accent-color)' },
    ];
    return (
        <div className="content-card glass-effect grid-col-span-2" style={{animationDelay: '0.2s'}}>
            <h2 className="content-title">Student Progress Tracking</h2>
            <div className="kpi-grid">
                {progressData.map(item => (
                    <div key={item.label} className="kpi-card glass-effect" style={{cursor: 'pointer'}} onClick={() => alert(`Viewing details for ${item.label}...`)}>
                        <div className="kpi-value" style={{ color: item.color }}>{item.value}</div>
                        <div className="kpi-label">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const PlacementOutcomes = () => {
    return (
        <div className="content-card glass-effect grid-col-span-2" style={{animationDelay: '0.3s'}}>
            <h2 className="content-title">Placement & Career Outcomes</h2>
             <div className="kpi-grid">
                <div className="kpi-card glass-effect" style={{cursor: 'pointer'}} onClick={() => alert('Viewing placement rate details...')}>
                    <div className="kpi-value">82%</div>
                    <div className="kpi-label">Placement Rate</div>
                </div>
                 <div className="kpi-card glass-effect" style={{cursor: 'pointer'}} onClick={() => alert('Viewing salary package statistics...')}>
                    <div className="kpi-value">$95k</div>
                    <div className="kpi-label">Avg. Package</div>
                </div>
            </div>
            <div className="funnel-container">
                <div className="funnel-stage funnel-stage-applied" style={{cursor: 'pointer'}} onClick={() => alert('Viewing 1,204 students who applied...')}>
                    <span className="funnel-label">Applied</span> <span className="funnel-value">1,204</span>
                </div>
                <div className="funnel-stage funnel-stage-shortlisted" style={{cursor: 'pointer'}} onClick={() => alert('Viewing 480 shortlisted students...')}>
                    <span className="funnel-label">Shortlisted</span> <span className="funnel-value">480</span>
                </div>
                 <div className="funnel-stage funnel-stage-interview" style={{cursor: 'pointer'}} onClick={() => alert('Viewing 210 students who were interviewed...')}>
                    <span className="funnel-label">Interviewed</span> <span className="funnel-value">210</span>
                </div>
                 <div className="funnel-stage funnel-stage-offer" style={{cursor: 'pointer'}} onClick={() => alert('Viewing 102 students who received offers...')}>
                    <span className="funnel-label">Offered</span> <span className="funnel-value">102</span>
                </div>
            </div>
        </div>
    );
};

const UserEngagementMetrics = () => {
     const engagementData = [
        { label: 'Daily Active Users', value: '8.2k' },
        { label: 'Avg. Session Time', value: '42 min' },
        { label: 'Top Course', value: 'Adv. Frontend' },
    ];
    return (
        <div className="content-card glass-effect grid-col-span-2" style={{animationDelay: '0.4s'}}>
            <h2 className="content-title">User Engagement</h2>
            <div className="kpi-grid">
                {engagementData.map(item => (
                     <div key={item.label} className="kpi-card glass-effect" style={{cursor: 'pointer'}} onClick={() => alert(`Viewing engagement details for ${item.label}...`)}>
                        <div className="kpi-value" style={{color: 'var(--accent-color-secondary)'}}>{item.value}</div>
                        <div className="kpi-label">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const PerformanceInsights = () => {
    const topStudents = [ {rank: 1, name: 'Riya Singh', score: '98%'}, {rank: 2, name: 'Aarav Sharma', score: '96%'}, {rank: 3, name: 'Kavya Patel', score: '95%'}];
    const atRiskStudents = [{name: 'Sameer Khan', reason: 'Low Attendance (65%)'}, {name: 'Rohan Mehta', reason: 'Failing Test Scores (45%)'}];
    return (
        <div className="content-card glass-effect grid-col-span-2" style={{animationDelay: '0.5s'}}>
             <h2 className="content-title">Performance Insights</h2>
             <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem'}}>
                <div>
                    <h3 className="resource-title">Top Performers</h3>
                     <div className="leaderboard-list">
                        {topStudents.map(s => (
                            <div key={s.rank} className="leaderboard-item" style={{cursor: 'pointer'}} onClick={() => alert(`Viewing profile for ${s.name}...`)}>
                                <span className="leaderboard-rank">{s.rank}</span>
                                <div className="user-avatar-small">{s.name.charAt(0)}</div>
                                <span className="leaderboard-name">{s.name}</span>
                                <span className="leaderboard-score">{s.score}</span>
                            </div>
                        ))}
                    </div>
                </div>
                 <div>
                     <h3 className="resource-title">At-Risk Students</h3>
                     <div className="at-risk-list">
                         {atRiskStudents.map(s => (
                            <div key={s.name} className="at-risk-item" style={{cursor: 'pointer'}} onClick={() => alert(`Opening intervention options for ${s.name}...`)}>
                               <div className="user-avatar-small">{s.name.charAt(0)}</div>
                               <div>
                                   <div className="leaderboard-name">{s.name}</div>
                                   <div className="at-risk-reason">{s.reason}</div>
                               </div>
                            </div>
                         ))}
                     </div>
                </div>
            </div>
        </div>
    );
};

const CustomReports = () => {
    return(
        <div className="content-card glass-effect grid-col-span-4" style={{animationDelay: '0.6s'}}>
            <h2 className="content-title">Custom Reports & Exports</h2>
             <p className="export-description">Generate and download custom reports based on specific criteria. Select your filters and export the data in your desired format.</p>
            <div className="filter-controls" style={{flexDirection: 'row', gap: '1rem', flexWrap: 'wrap'}}>
                 <select className="form-input" style={{flex: 1}}><option>All Batches</option><option>Batch 2025</option></select>
                <select className="form-input" style={{flex: 1}}><option>All Courses</option></select>
                <input type="date" className="form-input" style={{flex: 1}} />
                <button className="cta-button cta-primary" onClick={() => alert('Generating and downloading custom report...')}>
                    <DownloadIcon/> Generate & Download
                </button>
            </div>
        </div>
    );
};


// --- Placement Management Components ---

const PlacementManagementContent = () => {
    const [activeTab, setActiveTab] = useState('Job Postings');
    const [selectedJob, setSelectedJob] = useState(null);

    const tabs = [
        { name: 'Job Postings', icon: <BriefcaseIcon /> },
        { name: 'Recruiters', icon: <BuildingIcon /> },
        { name: 'Reports', icon: <FileTextIcon /> },
    ];
    
    // This function allows switching to the applicant tracking view
    const viewApplicantsForJob = (job) => {
        setSelectedJob(job);
        setActiveTab('Applicant Tracking');
    };
    
    // This function allows returning to the main job board
    const backToJobs = () => {
        setSelectedJob(null);
        setActiveTab('Job Postings');
    }

    const renderContent = () => {
        if (activeTab === 'Applicant Tracking' && selectedJob) {
            return <ApplicantTracking job={selectedJob} onBack={backToJobs} />;
        }
        switch(activeTab) {
            case 'Job Postings': return <JobPostings onViewApplicants={viewApplicantsForJob} />;
            case 'Recruiters': return <RecruiterManagement />;
            case 'Reports': return <PlacementReports />;
            default: return <JobPostings onViewApplicants={viewApplicantsForJob} />;
        }
    };

    return (
        <div>
            {/* We only show the sub-navigation if not in the applicant view */}
            {!(activeTab === 'Applicant Tracking' && selectedJob) && (
                <div className="sub-nav-container">
                    {tabs.map(tab => (
                        <button
                            key={tab.name}
                            className={`sub-nav-tab ${activeTab === tab.name ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.name)}
                            title={tab.name}
                        >
                            <span className="sub-nav-icon">{tab.icon}</span>
                            <span className="sub-nav-text">{tab.name}</span>
                        </button>
                    ))}
                </div>
            )}
            <div className="sub-nav-content">
                {renderContent()}
            </div>
        </div>
    );
};

const JobPostings = ({ onViewApplicants }) => {
    const [jobs, setJobs] = useState([
        { id: 1, title: 'Frontend Developer', company: 'TechCorp', status: 'Active', applicants: 125, eligibility: 'CSE, IT | Batch 2025 | >7 CGPA' },
        { id: 2, title: 'Data Analyst Intern', company: 'DataMinds', status: 'Active', applicants: 88, eligibility: 'All Branches | Batch 2026' },
        { id: 3, title: 'Backend Engineer', company: 'Innovate LLC', status: 'Expired', applicants: 210, eligibility: 'CSE, IT | >8 CGPA' },
    ]);
    const [isJobModalOpen, setJobModalOpen] = useState(false);
    const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    
    const handleCreate = () => {
        setSelectedJob(null);
        setJobModalOpen(true);
    };
    
    const handleEdit = (job) => {
        setSelectedJob(job);
        setJobModalOpen(true);
    };

    const handleDelete = (job) => {
        setSelectedJob(job);
        setConfirmModalOpen(true);
    };
    
    const confirmDelete = () => {
        alert(`Job "${selectedJob.title}" deleted.`);
        setConfirmModalOpen(false);
        setSelectedJob(null);
    };

    return (
        <>
            <div className="pm-header">
                <h2 className="content-title" style={{margin: 0, padding: 0, border: 'none'}}>Active & Expired Postings</h2>
                <button className="cta-button cta-primary" onClick={handleCreate}><PlusIcon/> Create New Job</button>
            </div>
            <div className="content-card glass-effect">
                <div className="table-container">
                     <div className="table-header-row"><div className="table-header-cell">Job Title</div><div className="table-header-cell">Status</div><div className="table-header-cell">Applicants</div><div className="table-header-cell">Actions</div></div>
                    {jobs.map(job => (
                        <div className="table-row" key={job.id}>
                            <div className="table-cell" data-label="Job Title">
                                <div className="cell-title">{job.title}</div>
                                <div className="cell-subtitle">{job.company}</div>
                            </div>
                             <div className="table-cell" data-label="Status"><span className={`status-badge ${job.status === 'Active' ? 'published' : 'draft'}`}>{job.status}</span></div>
                             <div className="table-cell" data-label="Applicants"><div className="cell-title">{job.applicants}</div></div>
                             <div className="table-cell actions" data-label="Actions">
                                 <button className="action-button" title="View Applicants" onClick={() => onViewApplicants(job)}><UsersIcon/></button>
                                 <button className="action-button" title="Edit Posting" onClick={() => handleEdit(job)}><EditIcon/></button>
                                 <button className="action-button delete" title="Delete Posting" onClick={() => handleDelete(job)}><TrashIcon /></button>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
            {isJobModalOpen && (
                 <Modal isOpen={isJobModalOpen} onClose={() => setJobModalOpen(false)} title={selectedJob ? 'Edit Job Posting' : 'Create New Job Posting'}>
                    <form onSubmit={(e) => { e.preventDefault(); alert('Job Saved!'); setJobModalOpen(false); }}>
                        <div className="form-group"><label>Job Title</label><input type="text" className="form-input" defaultValue={selectedJob?.title} required /></div>
                        <div className="form-group"><label>Company</label><input type="text" className="form-input" defaultValue={selectedJob?.company} required /></div>
                        <div className="form-group"><label>Eligibility Criteria (Batch, Course, Skills, CGPA)</label><textarea className="form-input" rows="3" defaultValue={selectedJob?.eligibility}></textarea></div>
                        <div className="form-actions-modal">
                            <button type="button" className="cta-button cta-secondary" onClick={() => setJobModalOpen(false)}>Cancel</button>
                            <button type="submit" className="cta-button cta-primary">Save Posting</button>
                        </div>
                    </form>
                 </Modal>
            )}
            {isConfirmModalOpen && (
                 <Modal isOpen={isConfirmModalOpen} onClose={() => setConfirmModalOpen(false)} title="Confirm Deletion">
                    <div>
                        <p>Are you sure you want to delete the job posting for <strong>"{selectedJob?.title}"</strong>?</p>
                        <div className="form-actions-modal">
                            <button className="cta-button cta-secondary" onClick={() => setConfirmModalOpen(false)}>Cancel</button>
                            <button className="cta-button cta-danger" onClick={confirmDelete}>Delete</button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
};

const ApplicantTracking = ({ job, onBack }) => {
    const [applicants, setApplicants] = useState([
        {id: 1, name: 'Riya Singh', course: 'CSE', batch: 2025, cgpa: '9.2', status: 'Hired'},
        {id: 2, name: 'Aarav Sharma', course: 'IT', batch: 2025, cgpa: '8.8', status: 'Interview'},
        {id: 3, name: 'Kavya Patel', course: 'CSE', batch: 2025, cgpa: '8.5', status: 'Shortlisted'},
        {id: 4, name: 'Sameer Khan', course: 'MECH', batch: 2025, cgpa: '7.5', status: 'Rejected'},
        {id: 5, name: 'Rohan Mehta', course: 'CSE', batch: 2025, cgpa: '7.8', status: 'Applied'},
    ]);
    const [isProfileModalOpen, setProfileModalOpen] = useState(false);
    const [selectedApplicant, setSelectedApplicant] = useState(null);

    const viewProfile = (applicant) => {
        setSelectedApplicant(applicant);
        setProfileModalOpen(true);
    };

    return (
        <>
            <div className="pm-header">
                <div>
                     <button onClick={onBack} className="cta-button cta-secondary" style={{marginBottom: '1rem'}}>&larr; Back to All Jobs</button>
                     <h2 className="content-title" style={{margin: 0, padding: 0, border: 'none'}}>Applicants for {job.title}</h2>
                </div>
            </div>
            <div className="applicant-funnel">
                <div className="funnel-card" style={{borderColor: '#3b82f6'}}><div className="funnel-card-value">125</div><div className="funnel-card-label">Applied</div></div>
                <div className="funnel-card" style={{borderColor: '#a855f7'}}><div className="funnel-card-value">45</div><div className="funnel-card-label">Shortlisted</div></div>
                <div className="funnel-card" style={{borderColor: '#f97316'}}><div className="funnel-card-value">22</div><div className="funnel-card-label">Interview</div></div>
                <div className="funnel-card" style={{borderColor: '#22c55e'}}><div className="funnel-card-value">8</div><div className="funnel-card-label">Hired</div></div>
            </div>
            <div className="content-card glass-effect">
                 <div className="applicant-table-controls">
                    <div className="search-bar" style={{flexGrow: 1}}><SearchIcon /><input type="text" placeholder="Search by name, skills..." /></div>
                    <div className="filter-controls" style={{flexDirection: 'row', gap: '1rem'}}>
                        <select className="form-input"><option>All Status</option></select>
                        <button className="cta-button cta-secondary">Bulk Reject</button>
                    </div>
                 </div>
                 <div className="table-container">
                      <div className="table-header-row"><div className="table-header-cell">Applicant</div><div className="table-header-cell">CGPA</div><div className="table-header-cell">Status</div><div className="table-header-cell">Actions</div></div>
                    {applicants.map(app => (
                        <div className="table-row" key={app.id}>
                            <div className="table-cell" data-label="Applicant">
                                <div className="cell-title">{app.name}</div>
                                <div className="cell-subtitle">{app.course} - Batch {app.batch}</div>
                            </div>
                            <div className="table-cell" data-label="CGPA"><div className="cell-title">{app.cgpa}</div></div>
                            <div className="table-cell" data-label="Status"><span className={`status-badge-sm status-${app.status.toLowerCase()}`}>{app.status}</span></div>
                            <div className="table-cell actions" data-label="Actions">
                                <button className="action-button" title="View Profile" onClick={() => viewProfile(app)}><EyeIcon/></button>
                                <button className="action-button" title="Shortlist" onClick={() => alert(`Shortlisted ${app.name}`)}><FileCheckIcon/></button>
                                <button className="action-button delete" title="Reject" onClick={() => alert(`Rejected ${app.name}`)}><TrashIcon /></button>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
             {isProfileModalOpen && (
                <Modal isOpen={isProfileModalOpen} onClose={() => setProfileModalOpen(false)} title="Applicant Profile">
                    <div className="applicant-profile-modal">
                        <div className="profile-header">
                            <div className="profile-avatar">{selectedApplicant?.name.charAt(0)}</div>
                            <h3 className="profile-name">{selectedApplicant?.name}</h3>
                            <p className="profile-course">{selectedApplicant?.course} - Batch {selectedApplicant?.batch}</p>
                        </div>
                        <div className="profile-details-grid">
                            <div className="profile-detail"><span>CGPA</span> <span>{selectedApplicant?.cgpa}</span></div>
                             <div className="profile-detail"><span>Status</span> <span>{selectedApplicant?.status}</span></div>
                        </div>
                        <div className="profile-skills">
                            <h4>Skills</h4>
                             <div className="skills-list">
                                <span className="skill-tag">React</span>
                                <span className="skill-tag">Node.js</span>
                                <span className="skill-tag">JavaScript</span>
                                <span className="skill-tag">CSS</span>
                             </div>
                        </div>
                         <div className="form-actions-modal">
                             <button className="cta-button cta-secondary" onClick={() => alert('Downloading resume...')}>Download Resume</button>
                            <button className="cta-button cta-primary" onClick={() => setProfileModalOpen(false)}>Close</button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
};

const RecruiterManagement = () => {
    const recruiters = [
        {id: 1, company: 'TechCorp', contact: 'Anjali Sharma', logo: 'T', jobs: 12, hires: 5},
        {id: 2, company: 'DataMinds', contact: 'Vikram Singh', logo: 'D', jobs: 8, hires: 3},
        {id: 3, company: 'Innovate LLC', contact: 'Priya Patel', logo: 'I', jobs: 15, hires: 7},
    ];
    const [isInviteModalOpen, setInviteModalOpen] = useState(false);

    return (
        <>
            <div className="pm-header">
                <h2 className="content-title" style={{margin: 0, padding: 0, border: 'none'}}>Company & Recruiter Profiles</h2>
                <button className="cta-button cta-primary" onClick={() => setInviteModalOpen(true)}><UserPlusIcon/> Invite New Recruiter</button>
            </div>
            <div className="recruiter-grid">
                {recruiters.map(rec => (
                    <div key={rec.id} className="content-card glass-effect recruiter-card">
                        <div className="recruiter-card-header">
                            <div className="recruiter-logo">{rec.logo}</div>
                            <div>
                                <h3 className="recruiter-company">{rec.company}</h3>
                                <p className="recruiter-contact">Contact: {rec.contact}</p>
                            </div>
                        </div>
                        <div className="recruiter-stats">
                            <div className="recruiter-stat">
                                <div className="value">{rec.jobs}</div>
                                <div className="label">Jobs Posted</div>
                            </div>
                            <div className="recruiter-stat">
                                <div className="value">{rec.hires}</div>
                                <div className="label">Successful Hires</div>
                            </div>
                        </div>
                         <div className="recruiter-card-footer">
                             <button className="action-button" title="Edit Profile"><EditIcon/></button>
                             <button className="action-button" title="View History"><ListIcon/></button>
                        </div>
                    </div>
                ))}
            </div>
             {isInviteModalOpen && (
                 <Modal isOpen={isInviteModalOpen} onClose={() => setInviteModalOpen(false)} title="Invite New Recruiter">
                     <form onSubmit={(e) => { e.preventDefault(); alert('Invitation Sent!'); setInviteModalOpen(false); }}>
                        <div className="form-group">
                            <label>Recruiter Email</label>
                            <input type="email" className="form-input" placeholder="recruiter@company.com" required />
                        </div>
                         <div className="form-actions-modal">
                            <button type="button" className="cta-button cta-secondary" onClick={() => setInviteModalOpen(false)}>Cancel</button>
                            <button type="submit" className="cta-button cta-primary">Send Invitation</button>
                        </div>
                    </form>
                </Modal>
            )}
        </>
    )
}

const PlacementReports = () => {
    return (
         <div className="content-card glass-effect">
            <h2 className="content-title">Placement Reports</h2>
             <p className="export-description">Generate detailed placement reports. Filter by job, student, or date range and export for your records.</p>
            <div className="filter-controls" style={{flexDirection: 'row', gap: '1rem', flexWrap: 'wrap'}}>
                <select className="form-input" style={{flex: 1}}><option>Report Type: Job-wise</option><option>Report Type: Student-wise</option></select>
                <input type="date" className="form-input" style={{flex: 1}} />
                <button className="cta-button cta-primary" onClick={() => alert('Exporting placement report...')}>
                    <DownloadIcon/> Export Report
                </button>
            </div>
        </div>
    );
};

// --- Review & Feedback Components ---

const ReviewAndFeedbackContent = () => {
    const [activeTab, setActiveTab] = useState('Pending');
    const tabs = [
        { name: 'Pending', icon: <ClockIcon /> },
        { name: 'Approved', icon: <ShieldCheckIcon /> },
        { name: 'Declined', icon: <ShieldIcon /> },
        { name: 'Insights', icon: <BarChartIcon /> },
        { name: 'Settings', icon: <SettingsIcon /> },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'Pending': return <PendingReviews />;
            case 'Approved': return <ApprovedReviews />;
            case 'Declined': return <DeclinedReviews />;
            case 'Insights': return <ReviewInsights />;
            case 'Settings': return <ModerationSettings />;
            default: return <PendingReviews />;
        }
    };

    return (
        <div>
            <div className="sub-nav-container">
                {tabs.map(tab => (
                    <button
                        key={tab.name}
                        className={`sub-nav-tab ${activeTab === tab.name ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.name)}
                        title={tab.name}
                    >
                        <span className="sub-nav-icon">{tab.icon}</span>
                        <span className="sub-nav-text">{tab.name}</span>
                    </button>
                ))}
            </div>
            <div className="sub-nav-content">
                {renderContent()}
            </div>
        </div>
    );
};

const StarRating = ({ rating }) => (
    <div className="star-rating">
        {[...Array(5)].map((_, i) => (
            <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < rating ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
        ))}
    </div>
);

const PendingReviews = () => {
    const [reviews, setReviews] = useState([
        { id: 1, name: 'Neha Gupta', course: 'Advanced Frontend Development', rating: 5, text: 'This was an amazing course! The mentor was brilliant and the projects were very practical. Highly recommended for anyone wanting to get into frontend.' },
        { id: 2, name: 'Arjun Nair', course: 'Backend with Node.js', rating: 4, text: 'Good content and well-structured. Could have used a few more advanced examples in the final module, but overall a great learning experience.' },
    ]);
    const [isDeclineModalOpen, setDeclineModalOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);

    const handleApprove = (reviewId) => {
        alert('Review approved and is now live!');
        setReviews(reviews.filter(r => r.id !== reviewId));
    };

    const handleDecline = (review) => {
        setSelectedReview(review);
        setDeclineModalOpen(true);
    };
    
    const confirmDecline = (e) => {
        e.preventDefault();
        alert(`Review from ${selectedReview.name} has been declined.`);
        setReviews(reviews.filter(r => r.id !== selectedReview.id));
        setDeclineModalOpen(false);
    };

    if (reviews.length === 0) {
        return <div className="content-card glass-effect"><p className="placeholder-text">No pending reviews right now.</p></div>;
    }

    return (
        <>
            <div className="pm-grid">
                {reviews.map(review => (
                    <div key={review.id} className="review-card glass-effect">
                        <div className="review-card-header">
                            <div className="user-avatar-small">{review.name.charAt(0)}</div>
                            <div className="review-student-info">
                                <h3 className="review-student-name">{review.name}</h3>
                                <p className="review-course-name">{review.course}</p>
                            </div>
                            <StarRating rating={review.rating} />
                        </div>
                        <p className="review-text">{review.text}</p>
                        <div className="review-actions">
                            <button className="cta-button cta-danger" onClick={() => handleDecline(review)}>Decline</button>
                            <button className="cta-button cta-primary" onClick={() => handleApprove(review.id)}>Approve</button>
                        </div>
                    </div>
                ))}
            </div>
            {isDeclineModalOpen && (
                <Modal isOpen={isDeclineModalOpen} onClose={() => setDeclineModalOpen(false)} title="Decline Review">
                    <form onSubmit={confirmDecline}>
                        <div className="form-group">
                            <label>Reason for Declining (Optional)</label>
                            <textarea className="form-input" rows="3" placeholder="e.g., Spam, irrelevant content..."></textarea>
                        </div>
                        <div className="form-actions-modal">
                            <button type="button" className="cta-button cta-secondary" onClick={() => setDeclineModalOpen(false)}>Cancel</button>
                            <button type="submit" className="cta-button cta-danger">Confirm Decline</button>
                        </div>
                    </form>
                </Modal>
            )}
        </>
    );
};

const ApprovedReviews = () => {
    const [reviews, setReviews] = useState([
         { id: 1, name: 'Priya Sharma', course: 'Advanced Frontend', rating: 5, text: 'Absolutely fantastic! Changed my career path.', date: '2025-09-28', featured: true, hidden: false},
         { id: 2, name: 'Alex Johnson', course: 'Backend with Node.js', rating: 4, text: 'Very solid course, learned a lot.', date: '2025-09-25', featured: false, hidden: false},
         { id: 3, name: 'Anika Reddy', course: 'Advanced Frontend', rating: 5, text: 'The best course on this platform by far.', date: '2025-09-22', featured: false, hidden: true},
    ]);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);

    const handleEdit = (review) => {
        setSelectedReview(review);
        setEditModalOpen(true);
    };

    const handleDelete = (review) => {
        setSelectedReview(review);
        setConfirmModalOpen(true);
    };

    const confirmDelete = () => {
        alert(`Review by ${selectedReview.name} has been deleted.`);
        setReviews(reviews.filter(r => r.id !== selectedReview.id));
        setConfirmModalOpen(false);
    };

    return(
        <>
            <div className="content-card glass-effect">
                <div className="review-table-filters">
                    <div className="search-bar" style={{flexGrow: 1}}><SearchIcon /><input type="text" placeholder="Search by student name..." /></div>
                    <div className="filter-controls" style={{flexDirection: 'row', gap: '1rem'}}>
                        <select className="form-input"><option>All Courses</option></select>
                        <select className="form-input"><option>Any Rating</option></select>
                    </div>
                </div>
                <div className="table-container">
                    <div className="table-header-row"><div className="table-header-cell">Student</div><div className="table-header-cell">Rating</div><div className="table-header-cell">Review</div><div className="table-header-cell">Actions</div></div>
                    {reviews.map(review => (
                        <div className={`table-row ${review.hidden ? 'row-hidden' : ''}`} key={review.id}>
                             <div className="table-cell" data-label="Student">
                                <div className="cell-title">{review.name}</div>
                                <div className="cell-subtitle">{review.course}</div>
                            </div>
                            <div className="table-cell" data-label="Rating"><StarRating rating={review.rating}/></div>
                             <div className="table-cell" data-label="Review"><p style={{margin: 0, fontStyle: 'italic'}}>{`"${review.text.substring(0, 40)}..."`}</p></div>
                             <div className="table-cell actions" data-label="Actions">
                                 <button className={`action-button ${review.featured ? 'icon-featured' : ''}`} title="Toggle Feature" onClick={() => alert('Toggling featured status...')}><BookMarkIcon/></button>
                                 <button className="action-button" title="Toggle Visibility" onClick={() => alert('Toggling visibility...')}><EyeIcon/></button>
                                 <button className="action-button" title="Edit Review" onClick={() => handleEdit(review)}><EditIcon/></button>
                                 <button className="action-button delete" title="Delete Review" onClick={() => handleDelete(review)}><TrashIcon /></button>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
            {isEditModalOpen && (
                 <Modal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)} title={`Edit Review by ${selectedReview.name}`}>
                    <form onSubmit={(e) => { e.preventDefault(); alert('Review updated!'); setEditModalOpen(false); }}>
                        <div className="form-group">
                            <label>Review Text</label>
                            <textarea className="form-input" rows="5" defaultValue={selectedReview.text}></textarea>
                        </div>
                        <div className="form-actions-modal">
                            <button type="button" className="cta-button cta-secondary" onClick={() => setEditModalOpen(false)}>Cancel</button>
                            <button type="submit" className="cta-button cta-primary">Save Changes</button>
                        </div>
                    </form>
                 </Modal>
            )}
            {isConfirmModalOpen && (
                 <Modal isOpen={isConfirmModalOpen} onClose={() => setConfirmModalOpen(false)} title="Confirm Deletion">
                    <div>
                        <p>Are you sure you want to delete the review by <strong>"{selectedReview?.name}"</strong>?</p>
                        <div className="form-actions-modal">
                            <button className="cta-button cta-secondary" onClick={() => setConfirmModalOpen(false)}>Cancel</button>
                            <button className="cta-button cta-danger" onClick={confirmDelete}>Delete</button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
};

const DeclinedReviews = () => {
    const declined = [
        {id: 1, name: 'John Doe', course: 'Data Science', text: 'Spam review text.', reason: 'Spam Content', date: '2025-09-20'},
    ];
    return (
        <div className="content-card glass-effect">
            <div className="table-container">
                 <div className="table-header-row"><div className="table-header-cell">Student</div><div className="table-header-cell">Reason</div><div className="table-header-cell">Date</div><div className="table-header-cell">Actions</div></div>
                {declined.map(review => (
                    <div className="table-row" key={review.id}>
                         <div className="table-cell" data-label="Student">
                            <div className="cell-title">{review.name}</div>
                            <div className="cell-subtitle">{review.course}</div>
                        </div>
                        <div className="table-cell" data-label="Reason"><div className="cell-title">{review.reason}</div></div>
                        <div className="table-cell" data-label="Date"><div className="cell-subtitle">{review.date}</div></div>
                        <div className="table-cell actions" data-label="Actions">
                            <button className="action-button" title="Restore Review" onClick={() => alert('Restoring review to Pending...')}>
                                <UploadIcon style={{ transform: 'rotate(180deg)' }} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ReviewInsights = () => {
    return (
        <div className="insights-grid">
            <div className="content-card glass-effect">
                <h3 className="content-title">Avg. Course Ratings</h3>
                <div className="leaderboard-list">
                    <div className="leaderboard-item"><span className="leaderboard-name">Advanced Frontend</span><StarRating rating={5}/></div>
                    <div className="leaderboard-item"><span className="leaderboard-name">Backend with Node.js</span><StarRating rating={4}/></div>
                    <div className="leaderboard-item"><span className="leaderboard-name">Placement Prep</span><StarRating rating={4}/></div>
                </div>
            </div>
             <div className="content-card glass-effect">
                <h3 className="content-title">Rating Distribution</h3>
                 <div className="rating-distribution-list">
                    <div className="rating-dist-item"><span className="rating-dist-label">5★</span><div className="rating-dist-bar-bg"><div className="rating-dist-bar" style={{width: '75%'}}></div></div></div>
                    <div className="rating-dist-item"><span className="rating-dist-label">4★</span><div className="rating-dist-bar-bg"><div className="rating-dist-bar" style={{width: '15%'}}></div></div></div>
                    <div className="rating-dist-item"><span className="rating-dist-label">3★</span><div className="rating-dist-bar-bg"><div className="rating-dist-bar" style={{width: '5%'}}></div></div></div>
                    <div className="rating-dist-item"><span className="rating-dist-label">2★</span><div className="rating-dist-bar-bg"><div className="rating-dist-bar" style={{width: '3%'}}></div></div></div>
                    <div className="rating-dist-item"><span className="rating-dist-label">1★</span><div className="rating-dist-bar-bg"><div className="rating-dist-bar" style={{width: '2%'}}></div></div></div>
                 </div>
            </div>
             <div className="content-card glass-effect">
                <h3 className="content-title">Common Feedback</h3>
                 <div className="keyword-cloud">
                    <span className="keyword-tag keyword-positive">Helpful</span>
                    <span className="keyword-tag keyword-positive">Practical</span>
                    <span className="keyword-tag keyword-positive">Excellent Mentor</span>
                    <span className="keyword-tag keyword-negative">Too Fast</span>
                     <span className="keyword-tag keyword-positive">Clear</span>
                    <span className="keyword-tag keyword-negative">More Examples</span>
                </div>
            </div>
            <div className="content-card glass-effect">
                <h3 className="content-title">Featured Testimonial</h3>
                <div className="testimonial-card">
                    <p className="testimonial-text">"Absolutely fantastic! This course changed my career path completely."</p>
                    <p className="testimonial-author">- Priya Sharma</p>
                </div>
            </div>
        </div>
    );
};

const ModerationSettings = () => {
    return (
        <div className="content-card glass-effect">
            <h2 className="content-title">Feedback & Moderation Settings</h2>
            <div className="settings-grid">
                <div className="setting-item">
                    <div className="setting-label-pair">
                        <label htmlFor="auto-flag" className="setting-label">Auto-Flag Offensive Content</label>
                        <label className="switch"><input id="auto-flag" type="checkbox" defaultChecked /><span className="slider round"></span></label>
                    </div>
                    <p className="setting-description">Automatically move reviews containing words from your blocked list to 'Declined'.</p>
                </div>
                <div className="setting-item">
                    <div className="setting-label-pair">
                        <label htmlFor="anon-feedback" className="setting-label">Allow Anonymous Feedback</label>
                        <label className="switch"><input id="anon-feedback" type="checkbox" /><span className="slider round"></span></label>
                    </div>
                    <p className="setting-description">Allow students to submit reviews without revealing their name publicly.</p>
                </div>
            </div>
            <div className="setting-item" style={{marginTop: '1.5rem'}}>
                <label className="setting-label">Blocked Keywords</label>
                <p className="setting-description">Add words or phrases (comma-separated) to automatically flag for moderation.</p>
                <textarea className="form-input" rows="4" placeholder="e.g., spam, profanity, ..."></textarea>
            </div>
            <div className="form-actions" style={{marginTop: '2rem'}}>
                <button className="cta-button cta-primary" onClick={() => alert('Moderation settings saved!')}>Save Settings</button>
            </div>
        </div>
    );
};

// --- System Configuration Components ---

// --- System Configuration Components ---

// --- System Configuration Components ---

const SystemConfigurationContent = () => {
    const [activeSetting, setActiveSetting] = useState('General');
    const settingsNav = [
        { id: 'General', label: 'General Settings', icon: <SettingsIcon /> },
        { id: 'SEO', label: 'SEO & Meta', icon: <SearchIcon /> },
        { id: 'Domain', label: 'Domain & Deployment', icon: <ShieldIcon /> },
        { id: 'Access', label: 'User & Access Control', icon: <KeyIcon /> },
        { id: 'Email', label: 'Email & Notifications', icon: <BellIcon /> },
        { id: 'Payment', label: 'Payment & Subscriptions', icon: <DollarSignIcon /> },
        { id: 'Security', label: 'Backup & Security', icon: <ShieldCheckIcon /> },
    ];
    const [isApiModalOpen, setApiModalOpen] = useState(false);
    const [isEmailModalOpen, setEmailModalOpen] = useState(false);
    const [isGatewayModalOpen, setGatewayModalOpen] = useState(false);
    const [isPlanModalOpen, setPlanModalOpen] = useState(false);
    const [selectedGateway, setSelectedGateway] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleManageGateway = (gateway) => {
        setSelectedGateway(gateway);
        setGatewayModalOpen(true);
    };

    const handleManagePlan = (plan = null) => {
        setSelectedPlan(plan);
        setPlanModalOpen(true);
    }

    const renderSettingContent = () => {
        switch (activeSetting) {
            case 'General': return (
                <div className="setting-section">
                    <h3>General Settings</h3>
                    <div className="form-group-inline"><label>Platform Name</label><input type="text" className="form-input" defaultValue="ThePlacemate" /></div>
                    <div className="form-group-inline"><label>Tagline</label><input type="text" className="form-input" defaultValue="Your Gateway to a Dream Career" /></div>
                    <div className="form-group-inline"><label>Primary Color</label>
                        <div className="color-picker-wrapper">
                            <input type="color" defaultValue="#c084fc" />
                            <input type="text" className="form-input" defaultValue="#c084fc" />
                        </div>
                    </div>
                </div>
            );
            case 'SEO': return (
                 <div className="setting-section">
                    <h3>SEO & Meta Settings</h3>
                    <div className="form-group-inline"><label>Meta Title</label><input type="text" className="form-input" defaultValue="ThePlacemate | Get Hired" /></div>
                    <div className="form-group-inline"><label>Meta Description</label><textarea className="form-input" rows={3}>The best platform to connect talented students with top companies. Sign up and get your dream job today.</textarea></div>
                    <div className="form-group-inline"><label>Google Analytics ID</label><input type="text" className="form-input" placeholder="UA-XXXXX-Y" /></div>
                </div>
            );
            case 'Domain': return (
                <div className="setting-section">
                    <h3>Domain Management</h3>
                    <div className="form-group-inline">
                        <label>Primary Domain</label>
                        <div><input type="text" className="form-input" defaultValue="theplacemate.com" /></div>
                    </div>
                     <div className="form-group-inline" style={{marginTop: '1rem'}}>
                        <label>SSL Certificate</label>
                        <div className="status-indicator">
                            <span className="status-dot status-dot-active"></span>
                            <span>Active (Expires: Oct 1, 2026)</span>
                            <button className="cta-button cta-secondary" style={{marginLeft: 'auto'}} onClick={() => alert('Opening SSL renewal options...')}>Renew</button>
                        </div>
                    </div>
                    <h3 style={{marginTop: '2.5rem'}}>Deployment Environments</h3>
                    <div className="env-card-list">
                        <div className="env-card env-card-prod">
                            <p className="env-label">Production</p>
                            <p className="env-url">app.theplacemate.com</p>
                             <div className="env-actions">
                                <button className="cta-button cta-primary" onClick={() => alert('Triggering a new production deployment...')}>Deploy</button>
                            </div>
                        </div>
                         <div className="env-card env-card-staging">
                            <p className="env-label">Staging</p>
                            <p className="env-url">staging.theplacemate.com</p>
                             <div className="env-actions">
                                <button className="cta-button cta-secondary" onClick={() => alert('Viewing staging deployment logs...')}>View Logs</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
             case 'Access': return (
                <div className="setting-section">
                    <h3>API & Access Control</h3>
                     <div className="form-group-inline">
                        <label>API Keys</label>
                        <button className="cta-button cta-secondary" onClick={() => setApiModalOpen(true)}>Manage API Keys</button>
                    </div>
                </div>
            );
            case 'Email': return (
                <div className="setting-section">
                    <h3>Email Templates</h3>
                    <div className="email-template-list">
                        <div className="email-template-item"><span>Welcome Email</span><button className="cta-button cta-secondary" onClick={() => setEmailModalOpen(true)}>Edit Template</button></div>
                        <div className="email-template-item"><span>Job Alert</span><button className="cta-button cta-secondary" onClick={() => setEmailModalOpen(true)}>Edit Template</button></div>
                         <div className="email-template-item"><span>Interview Invite</span><button className="cta-button cta-secondary" onClick={() => setEmailModalOpen(true)}>Edit Template</button></div>
                    </div>
                </div>
            );
            case 'Payment': return (
                <>
                    <div className="setting-section">
                        <h3>Payment Gateway Configuration</h3>
                        <div className="gateway-grid">
                            <div className="gateway-card">
                                <div className="gateway-logo" style={{color: '#635bff'}}>Stripe</div>
                                <div className="status-indicator"><span className="status-dot status-dot-active"></span><span>Connected</span></div>
                                <button className="cta-button cta-secondary" onClick={() => alert('Opening Stripe dashboard...')}>Manage</button>
                            </div>
                            <div className="gateway-card">
                                <div className="gateway-logo" style={{color: '#00baf1'}}>Razorpay</div>
                                 <div className="status-indicator"><span className="status-dot status-dot-active"></span><span>Connected</span></div>
                                <button className="cta-button cta-secondary" onClick={() => alert('Opening Razorpay dashboard...')}>Manage</button>
                            </div>
                             <div className="gateway-card">
                                <div className="gateway-logo" style={{color: '#009cde'}}>PayPal</div>
                                <div className="status-indicator"><span className="status-dot" style={{backgroundColor: 'var(--text-muted)'}}></span><span>Not Connected</span></div>
                                <button className="cta-button cta-primary" onClick={() => handleManageGateway('PayPal')}>Connect</button>
                            </div>
                        </div>
                    </div>
                     <div className="setting-section">
                        <h3>Subscription Plans</h3>
                         <div className="pm-header" style={{marginBottom: '1rem'}}>
                            <p className="setting-description" style={{margin: 0}}>Manage pricing plans for students and companies.</p>
                            <button className="cta-button cta-primary" onClick={() => handleManagePlan()}><PlusIcon/> Add New Plan</button>
                        </div>
                        <div className="plan-list">
                            <div className="plan-item">
                                <div className="plan-info">
                                    <span className="plan-name">Student - Monthly</span>
                                    <span className="plan-price">$19 / month</span>
                                </div>
                                <div className="plan-actions">
                                    <button className="action-button-sm" onClick={() => handleManagePlan({name: 'Student - Monthly'})}><EditIcon/></button>
                                    <button className="action-button-sm delete" onClick={() => alert('Deactivating plan...')}><TrashIcon/></button>
                                </div>
                            </div>
                            <div className="plan-item">
                               <div className="plan-info">
                                    <span className="plan-name">Company - Annual</span>
                                    <span className="plan-price">$499 / year</span>
                                </div>
                                <div className="plan-actions">
                                    <button className="action-button-sm" onClick={() => handleManagePlan({name: 'Company - Annual'})}><EditIcon/></button>
                                    <button className="action-button-sm delete" onClick={() => alert('Deactivating plan...')}><TrashIcon/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
            case 'Security': return (
                 <div className="setting-section">
                    <h3>Backup & Security</h3>
                     <div className="form-group-inline">
                        <label>Enable Google Captcha</label>
                        <label className="switch"><input type="checkbox" defaultChecked/><span className="slider round"></span></label>
                    </div>
                    <div className="form-group-inline" style={{marginTop: '1rem'}}>
                        <label>Database Backups</label>
                        <button className="cta-button cta-primary" onClick={() => alert('Creating a new database backup...')}>Create Manual Backup</button>
                    </div>
                </div>
            );
            default: return <PlaceholderContent title={settingsNav.find(s => s.id === activeSetting).label} />;
        }
    };

    return (
        <>
            <div className="settings-layout">
                <nav className="settings-nav">
                    {settingsNav.map(navItem => (
                        <button key={navItem.id} className={`settings-nav-item ${activeSetting === navItem.id ? 'active' : ''}`} onClick={() => setActiveSetting(navItem.id)}>
                            {navItem.icon}
                            <span>{navItem.label}</span>
                        </button>
                    ))}
                </nav>
                <div className="settings-content content-card glass-effect">
                    {renderSettingContent()}
                    <div className="form-actions" style={{marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)'}}>
                        <button className="cta-button cta-primary" onClick={() => alert('Settings have been saved!')}>Save All Changes</button>
                    </div>
                </div>
            </div>
            {isApiModalOpen && (
                <Modal isOpen={isApiModalOpen} onClose={() => setApiModalOpen(false)} title="Manage API Keys">
                    <div className="api-key-list">
                         <div className="api-key-item">
                            <div className="api-key-info"><strong>Primary Key:</strong> <span>pk_live_******************abcd</span></div>
                            <div style={{display: 'flex', justifyContent: 'flex-end', gap: '1rem'}}>
                                <button className="cta-button cta-danger" onClick={() => alert('API Key revoked!')}>Revoke</button>
                            </div>
                        </div>
                    </div>
                     <div className="form-actions-modal">
                        <button className="cta-button cta-primary" onClick={() => alert('New API key generated!')}><PlusIcon/> Generate New Key</button>
                    </div>
                </Modal>
            )}
             {isEmailModalOpen && (
                <Modal isOpen={isEmailModalOpen} onClose={() => setEmailModalOpen(false)} title="Edit Email Template">
                    <form onSubmit={(e) => {e.preventDefault(); alert('Email template saved!'); setEmailModalOpen(false);}}>
                        <div className="form-group">
                            <label>Email Subject</label>
                            <input type="text" className="form-input" defaultValue="Welcome to ThePlacemate!" />
                        </div>
                        <div className="form-group">
                            <label>Email Body (HTML supported)</label>
                            <textarea className="form-input" rows="8">{"<h1>Hi {{student_name}},</h1><p>Welcome aboard! We're excited to have you.</p>"}</textarea>
                        </div>
                         <div className="form-actions-modal">
                            <button type="button" className="cta-button cta-secondary" onClick={() => setEmailModalOpen(false)}>Cancel</button>
                            <button type="submit" className="cta-button cta-primary">Save Template</button>
                        </div>
                    </form>
                </Modal>
            )}
             {isGatewayModalOpen && (
                 <Modal isOpen={isGatewayModalOpen} onClose={() => setGatewayModalOpen(false)} title={`Connect to ${selectedGateway}`}>
                    <form onSubmit={(e) => {e.preventDefault(); alert(`${selectedGateway} connected successfully!`); setGatewayModalOpen(false);}}>
                        <div className="form-group">
                            <label>API Key</label>
                            <input type="text" className="form-input" placeholder="pk_live_..." />
                        </div>
                         <div className="form-group">
                            <label>API Secret</label>
                            <input type="password" className="form-input" placeholder="sk_live_..." />
                        </div>
                        <div className="form-actions-modal">
                            <button type="button" className="cta-button cta-secondary" onClick={() => setGatewayModalOpen(false)}>Cancel</button>
                            <button type="submit" className="cta-button cta-primary">Connect</button>
                        </div>
                    </form>
                </Modal>
            )}
            {isPlanModalOpen && (
                 <Modal isOpen={isPlanModalOpen} onClose={() => setPlanModalOpen(false)} title={selectedPlan ? "Edit Subscription Plan" : "Add New Subscription Plan"}>
                    <form onSubmit={(e) => {e.preventDefault(); alert(`Plan ${selectedPlan ? 'updated' : 'created'}!`); setPlanModalOpen(false);}}>
                        <div className="form-group">
                            <label>Plan Name</label>
                            <input type="text" className="form-input" defaultValue={selectedPlan?.name} placeholder="e.g., Student - Annual" />
                        </div>
                         <div className="form-grid">
                            <div className="form-group">
                                <label>Price</label>
                                <input type="number" className="form-input" placeholder="99" />
                            </div>
                            <div className="form-group">
                                <label>Billing Cycle</label>
                                <select className="form-input"><option>Monthly</option><option>Annually</option></select>
                            </div>
                        </div>
                        <div className="form-actions-modal">
                            <button type="button" className="cta-button cta-secondary" onClick={() => setPlanModalOpen(false)}>Cancel</button>
                            <button type="submit" className="cta-button cta-primary">Save Plan</button>
                        </div>
                    </form>
                </Modal>
            )}
        </>
    );
};

// --- Security Components ---

// --- Security Components ---

const SecurityContent = () => {
    const [activeSecurityTab, setActiveSecurityTab] = useState('RBAC');
    const [isRoleModalOpen, setRoleModalOpen] = useState(false);
    const [isLogDetailModalOpen, setLogDetailModalOpen] = useState(false);
    const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedLog, setSelectedLog] = useState(null);

    const securityNav = [
        { id: 'RBAC', label: 'Access Control (RBAC)', icon: <ShieldCheckIcon /> },
        { id: 'Logs', label: 'Admin Activity Logs', icon: <FileTextIcon /> },
        { id: 'Monitoring', label: 'User Security', icon: <EyeIcon /> },
        { id: 'Auth', label: 'Authentication', icon: <KeyIcon /> },
        { id: 'Data', label: 'Data Protection', icon: <ShieldIcon /> },
        { id: 'Alerts', label: 'System Alerts', icon: <BellIcon /> },
    ];
    
    const handleEditRole = (role) => {
        setSelectedRole(role);
        setRoleModalOpen(true);
    };

    const handleViewLog = (log) => {
        setSelectedLog(log);
        setLogDetailModalOpen(true);
    };

    const renderSecurityContent = () => {
        switch (activeSecurityTab) {
            case 'RBAC': return (
                <div className="security-section">
                    <div className="pm-header">
                        <h3>Role Management</h3>
                        <button className="cta-button cta-primary" onClick={() => handleEditRole(null)}><PlusIcon/> Create Role</button>
                    </div>
                    <div className="role-grid">
                        {[{name: 'Super Admin', desc: 'Full access to all settings.', perms: ['All Permissions']}, {name: 'Admin', desc: 'Manages users, content, and placements.', perms: ['Edit Users', 'Delete Content', 'Approve Reviews']}, {name: 'Student', desc: 'Access to courses and job applications.', perms: ['View Content', 'Apply for Jobs']}].map(role => (
                             <div key={role.name} className="content-card glass-effect">
                                <div className="role-card-header" style={{padding:0, border:0}}>
                                    <div>
                                        <h3 className="role-name" style={{color: '#fff'}}>{role.name}</h3>
                                        <p className="role-description">{role.desc}</p>
                                    </div>
                                </div>
                                 <div className="permission-pills">{role.perms.map(p => <span key={p} className="permission-pill">{p}</span>)}</div>
                                <div className="form-actions" style={{marginTop: '1.5rem'}}>
                                    <button className="cta-button cta-secondary" onClick={() => handleEditRole(role)}>Edit Permissions</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
            case 'Logs': return (
                 <div className="security-section">
                     <h3>Admin Actions</h3>
                    <div className="content-card glass-effect">
                        <div className="review-table-filters" style={{paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-color)'}}>
                             <div className="search-bar" style={{flexGrow: 1}}><SearchIcon /><input type="text" placeholder="Search by admin or action..." /></div>
                             <button className="cta-button cta-primary" onClick={() => alert('Exporting admin activity logs...')}><DownloadIcon/> Export Logs</button>
                        </div>
                        <div className="table-container">
                             <div className="table-header-row"><div className="table-header-cell">Admin</div><div className="table-header-cell">Action</div><div className="table-header-cell">Timestamp</div><div className="table-header-cell">Details</div></div>
                            {[{admin: 'Admin', action: 'Approved a review for Priya Sharma.', ip: '127.0.0.1', time: '2 mins ago'}].map((log, i) => (
                                <div className="table-row" key={i}>
                                    <div className="table-cell" data-label="Admin"><div className="cell-title">{log.admin}</div></div>
                                    <div className="table-cell" data-label="Action"><div className="cell-subtitle">{log.action}</div></div>
                                    <div className="table-cell" data-label="Timestamp"><div className="cell-subtitle">{log.time}</div></div>
                                    <div className="table-cell actions" data-label="Details"><button className="action-button" onClick={() => handleViewLog(log)}><EyeIcon/></button></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
             case 'Monitoring': return (
                <div className="security-section">
                    <h3>Suspicious Activity Alerts</h3>
                    <div className="alert-list">
                        <div className="alert-item alert-item-critical">
                            <div className="alert-info">
                                <span className="alert-text">5 failed login attempts for user 'rohan.m@example.com'.</span>
                                <span className="alert-meta">5 mins ago</span>
                            </div>
                            <div className="alert-actions">
                                <button className="cta-button cta-secondary" onClick={() => alert('Dismissing alert...')}>Dismiss</button>
                                <button className="cta-button cta-danger" onClick={() => alert('Account for rohan.m has been blocked.')}>Block Account</button>
                            </div>
                        </div>
                        <div className="alert-item">
                            <div className="alert-info">
                                <span className="alert-text">Admin login from a new IP address: 103.22.84.11.</span>
                                <span className="alert-meta">1 hour ago</span>
                            </div>
                            <div className="alert-actions"><button className="cta-button cta-secondary" onClick={() => alert('Dismissing alert...')}>Dismiss</button></div>
                        </div>
                    </div>
                </div>
            );
            case 'Auth': return (
                 <div className="security-section">
                    <h3>Authentication Policy</h3>
                     <div className="setting-item">
                        <div className="setting-label-pair">
                            <label className="setting-label">Enforce Two-Factor Auth (2FA) for Admins</label>
                            <label className="switch"><input type="checkbox" defaultChecked /><span className="slider round"></span></label>
                        </div>
                        <p className="setting-description">Requires all admin-level users to set up an authenticator app for login.</p>
                    </div>
                </div>
            );
            case 'Data': return (
                 <div className="security-section">
                    <h3>Data Protection & Privacy</h3>
                    <div className="form-group-inline">
                        <label>Database Encryption</label>
                         <div className="status-indicator">
                            <span className="status-dot status-dot-active"></span>
                            <span>AES-256 Encryption: Active</span>
                        </div>
                    </div>
                     <div className="form-group-inline" style={{marginTop: '1.5rem'}}>
                        <label>Max File Upload Size (MB)</label>
                        <input type="number" className="form-input" defaultValue="10" />
                    </div>
                     <div className="form-group-inline" style={{marginTop: '1rem'}}>
                        <label>Allowed File Types</label>
                        <input type="text" className="form-input" defaultValue="pdf, docx, jpg, png" />
                    </div>
                    <div className="setting-item" style={{marginTop: '1.5rem'}}>
                        <div className="setting-label-pair">
                            <label className="setting-label">Enable GDPR Compliance Features</label>
                            <label className="switch"><input type="checkbox" defaultChecked /><span className="slider round"></span></label>
                        </div>
                        <p className="setting-description">Adds data export and account deletion tools for users in their profiles.</p>
                    </div>
                     <div className="form-group-inline" style={{marginTop: '1.5rem'}}>
                        <label>Privacy Policy</label>
                        <button className="cta-button cta-secondary" onClick={() => setPrivacyModalOpen(true)}>Manage Privacy Policy</button>
                    </div>
                </div>
            );
            case 'Alerts': return (
                <div className="security-section">
                    <h3>System Alert Configuration</h3>
                    <div className="setting-item">
                        <label className="setting-label">Notify on these events:</label>
                        <div className="permissions-grid" style={{marginTop: '0.5rem'}}>
                            {['Failed Admin Login', 'Suspicious Activity Detected', 'New API Key Generated', 'New Location Login'].map(perm => (
                                 <label key={perm} className="permission-label"><input type="checkbox" className="permission-checkbox" defaultChecked /> <span className="custom-checkbox"></span> {perm}</label>
                            ))}
                        </div>
                    </div>
                    <div style={{marginTop: '1.5rem'}}>
                        <div className="form-group-inline"><label>Admin Email for Alerts</label><input type="email" className="form-input" placeholder="security@theplacemate.com" /></div>
                        <div className="form-group-inline" style={{marginTop: '1rem'}}><label>Slack Webhook URL</label><input type="text" className="form-input" placeholder="https://hooks.slack.com/services/..." /></div>
                    </div>
                     <div className="form-actions" style={{marginTop: '1rem'}}>
                        <button className="cta-button cta-secondary" onClick={() => alert('Sending a test alert to configured channels...')}>Send Test Alert</button>
                    </div>
                </div>
            );
            default: return <PlaceholderContent title={securityNav.find(s => s.id === activeSecurityTab).label} />;
        }
    };
    
    return (
        <>
        <div className="security-layout">
            <nav className="security-nav">
                {securityNav.map(navItem => (
                    <button key={navItem.id} className={`security-nav-item ${activeSecurityTab === navItem.id ? 'active' : ''}`} onClick={() => setActiveSecurityTab(navItem.id)}>
                        {navItem.icon}
                        <span>{navItem.label}</span>
                    </button>
                ))}
            </nav>
            <div className="security-content content-card glass-effect">
                {renderSecurityContent()}
                <div className="form-actions" style={{marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)'}}>
                    <button className="cta-button cta-primary" onClick={() => alert('Security settings have been saved!')}>Save All Changes</button>
                </div>
            </div>
        </div>
        {isRoleModalOpen && (
            <Modal isOpen={isRoleModalOpen} onClose={() => setRoleModalOpen(false)} title={selectedRole ? `Edit Role: ${selectedRole.name}` : 'Create New Role'}>
                <form onSubmit={(e) => {e.preventDefault(); alert('Role saved!'); setRoleModalOpen(false)}}>
                    <div className="form-group"><label>Role Name</label><input type="text" className="form-input" defaultValue={selectedRole?.name} placeholder="e.g., Placement Officer"/></div>
                    <div className="form-group"><label>Permissions</label>
                        <div className="permissions-grid">
                            {['View Users', 'Edit Users', 'Delete Users', 'View Content', 'Edit Content', 'Approve Reviews'].map(perm => (
                                 <label key={perm} className="permission-label"><input type="checkbox" className="permission-checkbox" /> <span className="custom-checkbox"></span> {perm}</label>
                            ))}
                        </div>
                    </div>
                    <div className="form-actions-modal">
                        <button type="button" className="cta-button cta-secondary" onClick={() => setRoleModalOpen(false)}>Cancel</button>
                        <button type="submit" className="cta-button cta-primary">Save Role</button>
                    </div>
                </form>
            </Modal>
        )}
        {isLogDetailModalOpen && (
             <Modal isOpen={isLogDetailModalOpen} onClose={() => setLogDetailModalOpen(false)} title="Log Details">
                <div className="profile-details-grid">
                    <div className="profile-detail"><span>Admin</span><span>{selectedLog?.admin}</span></div>
                    <div className="profile-detail"><span>Action</span><span>{selectedLog?.action}</span></div>
                    <div className="profile-detail"><span>IP Address</span><span>{selectedLog?.ip}</span></div>
                    <div className="profile-detail"><span>Timestamp</span><span>{new Date().toLocaleString()}</span></div>
                     <div className="profile-detail" style={{gridColumn: '1 / -1'}}><span>User Agent</span><span>Mozilla/5.0 (Windows NT 10.0; Win64; x64) ...</span></div>
                </div>
             </Modal>
        )}
        {isPrivacyModalOpen && (
             <Modal isOpen={isPrivacyModalOpen} onClose={() => setPrivacyModalOpen(false)} title="Manage Privacy Policy">
                <form onSubmit={(e) => {e.preventDefault(); alert('Privacy Policy updated!'); setPrivacyModalOpen(false);}}>
                    <div className="form-group">
                        <label>Policy Content (Markdown/HTML supported)</label>
                        <textarea className="form-input" rows="12" defaultValue="<h1>Privacy Policy for ThePlacemate</h1><p>Your data is safe with us...</p>"></textarea>
                    </div>
                     <div className="form-actions-modal">
                        <button type="button" className="cta-button cta-secondary" onClick={() => setPrivacyModalOpen(false)}>Cancel</button>
                        <button type="submit" className="cta-button cta-primary">Save Policy</button>
                    </div>
                </form>
            </Modal>
        )}
        </>
    );
};


const PlaceholderContent = ({ title }) => <div className="content-card glass-effect"><h2 className="content-title">{title}</h2><p className="placeholder-text">Functionality for the <strong>{title}</strong> section is under development and will be available soon.</p></div>;

// --- Main Page Component ---
const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('Overview');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) { setIsMobileNavOpen(false); } };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMobileNavOpen);
    return () => { document.body.classList.remove('no-scroll'); };
  }, [isMobileNavOpen]);

  const sidebarNavItems = [{ name: 'Overview', icon: <LayoutGridIcon/> }, { name: 'User Management', icon: <UsersIcon/> }, { name: 'Content Management', icon: <BookOpenIcon/> }, { name: 'Placement Management', icon: <BriefcaseIcon/> }, { name: 'Analytics', icon: <BarChartIcon/> }, { name: 'Review & Feedback', icon: <MessageSquareIcon/> }, { name: 'System Configuration', icon: <SettingsIcon/> }, { name: 'Security', icon: <ShieldIcon/> }];
 
 const renderContent = () => {
      switch(activeMenu) {
          case 'Overview': return <AdminOverviewContent />;
          case 'User Management': return <UserManagementContent />;
          case 'Content Management': return <ContentManagementContent />;
          case 'Placement Management': return <PlacementManagementContent />;
          case 'Analytics': return <AnalyticsDashboardContent />;
          case 'Review & Feedback': return <ReviewAndFeedbackContent />;
          case 'System Configuration': return <SystemConfigurationContent />;
          case 'Security': return <SecurityContent />;
          default: return <PlaceholderContent title={activeMenu} />;
      }
  }

  return (
    <>
      <style>{`
        /* --- General Setup & Fonts --- */
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap');
        :root { 
            --accent-color: #c084fc; 
            --accent-color-dark: #a855f7;
            --accent-color-secondary: #22d3ee;
            --danger-color: #f43f5e;
            --danger-color-dark: #be123c;
            --success-color: #22c55e;
            --warning-color: #f97316;
            --sidebar-width: 260px;
            --sidebar-collapsed-width: 88px; 
            --background-dark: #020617; 
            --background-light: #0f172a;
            --text-light: #e2e8f0;
            --text-muted: #94a3b8; 
            --border-color: rgba(192, 132, 252, 0.2);
            --glow-shadow: 0 0 20px rgba(192, 132, 252, 0.3);
            --glow-shadow-secondary: 0 0 20px rgba(34, 211, 238, 0.3);
        }
        body { 
            -webkit-font-smoothing: antialiased; 
            -moz-osx-font-smoothing: grayscale; 
            margin: 0; 
            background-color: var(--background-dark); 
            color: var(--text-light); 
            font-family: 'Lexend', sans-serif;
            font-weight: 300;
        }
        body.no-scroll { overflow: hidden; }

        /* --- Animations & Effects --- */
        .admin-dashboard-layout::before { 
            content: ''; 
            position: fixed; 
            top: 0; left: 0; 
            width: 100%; height: 100%; 
            background: radial-gradient(circle at 15% 50%, #1e1b4b 0%, var(--background-dark) 30%), radial-gradient(circle at 85% 30%, #312e81 0%, var(--background-dark) 25%); 
            animation: moveGradient 25s ease-in-out infinite; 
            z-index: -1; 
        }
        @keyframes moveGradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .glass-effect { 
            background-color: rgba(15, 23, 42, 0.7); 
            backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); 
            border: 1px solid var(--border-color); 
            border-radius: 1rem; 
            box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        }

        /* --- Modal Styles --- */
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.6); backdrop-filter: blur(5px); display: flex; justify-content: center; align-items: center; z-index: 1000; animation: fadeIn 0.3s ease-out; }
        .modal-content { width: 90%; max-width: 550px; max-height: 90vh; display: flex; flex-direction: column; animation: scaleIn 0.3s ease-out; }
        .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; border-bottom: 1px solid var(--border-color); }
        .modal-title { margin: 0; font-size: 1.25rem; font-weight: 600; }
        .modal-close-btn { background: none; border: none; font-size: 2rem; color: var(--text-muted); cursor: pointer; line-height: 1; padding: 0; transition: color 0.2s ease, transform 0.2s ease; }
        .modal-close-btn:hover { color: var(--text-light); transform: rotate(90deg); }
        .modal-body { padding: 1.5rem; overflow-y: auto; }

        /* --- Layout --- */
        .admin-dashboard-layout { display: flex; min-height: 100vh; position: relative; }
        .main-content { flex-grow: 1; padding: 1.5rem; position: relative; min-width: 0; }
        .dashboard-container { max-width: 1400px; margin: 0 auto; }
        
        /* --- Header --- */
        .dashboard-header { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: 2rem; animation: fadeInUp 0.5s ease-out forwards; opacity: 0; }
        .header-title h1 { font-size: 2rem; font-weight: 700; margin: 0; color: #FFFFFF; text-shadow: 0 0 15px var(--accent-color); }
        .header-title p { font-size: 1rem; color: var(--text-muted); margin-top: 0.25rem; font-weight: 400; }
        .mobile-nav-toggle { display: block; background: rgba(30, 41, 59, 0.8); border: 1px solid var(--border-color); color: var(--text-light); border-radius: 0.5rem; padding: 0.5rem; cursor: pointer; backdrop-filter: blur(10px); }

        /* --- Sidebar & Navigation --- */
        .mobile-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 199; opacity: 0; visibility: hidden; transition: opacity 0.3s ease, visibility 0.3s ease; }
        .mobile-overlay.active { opacity: 1; visibility: visible; }
        .sidebar { width: var(--sidebar-width); display: flex; flex-direction: column; padding: 1.5rem; transition: width 0.3s ease, transform 0.3s ease; position: fixed; height: 100%; z-index: 200; transform: translateX(-100%); }
        .sidebar.mobile-open { transform: translateX(0); }
        .sidebar-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2.5rem; flex-shrink: 0; }
        .sidebar-logo { width: 32px; height: 32px; background: linear-gradient(to right, var(--accent-color), var(--accent-color-dark)); border-radius: 0.5rem; flex-shrink: 0; box-shadow: var(--glow-shadow); }
        .sidebar-brand { font-size: 1.5rem; font-weight: 700; white-space: nowrap; text-shadow: 0 0 10px var(--accent-color); }
        .sidebar-nav { flex-grow: 1; overflow-y: auto; overflow-x: hidden; }
        .nav-item { display: flex; align-items: center; padding: 0.8rem 1rem; margin-bottom: 0.5rem; border-radius: 0.5rem; text-decoration: none; color: var(--text-muted); transition: all 0.2s ease; white-space: nowrap; cursor: pointer; border-left: 3px solid transparent; }
        .nav-item:hover { background-color: rgba(255, 255, 255, 0.05); color: var(--text-light); border-left-color: var(--accent-color-secondary); }
        .nav-item.active { background: linear-gradient(90deg, rgba(192, 132, 252, 0.2), transparent); color: #FFFFFF; font-weight: 500; border-left-color: var(--accent-color); }
        .nav-icon { margin-right: 1rem; flex-shrink: 0; }
        .sidebar-footer { margin-top: auto; flex-shrink: 0; display: none; }
        .nav-item-mobile-logout { display: flex; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color); }
        .sidebar-toggle { background: transparent; border: none; color: var(--text-muted); padding: 0.5rem; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 100%; transition: all 0.2s ease; transform-origin: center; border-top: 1px solid var(--border-color); margin-top: 1rem; padding-top: 1.5rem; }
        .sidebar-toggle:hover { color: #FFFFFF; }
        
        /* --- Content Cards & Common Elements --- */
        .content-card { padding: 1.5rem; animation: fadeInUp 0.5s ease-out forwards; opacity: 0; display: flex; flex-direction: column; }
        .content-card > .content-title { padding-bottom: 1rem; border-bottom: 1px solid var(--border-color); margin-bottom: 1.5rem; }
        .content-title { font-size: 1.5rem; font-weight: 600; margin: 0;}
        .placeholder-text { color: var(--text-muted); font-size: 1.1rem; text-align: center; padding: 4rem 0; }
        .cta-button { display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.6rem 1.2rem; border-radius: 0.5rem; font-size: 0.9rem; font-weight: 500; text-decoration: none; transition: all 0.3s ease; border: 1px solid transparent; cursor: pointer; }
        .cta-primary { background: linear-gradient(to right, var(--accent-color), var(--accent-color-dark)); color: #FFFFFF; box-shadow: 0 4px 14px rgba(168, 85, 247, 0.3); }
        .cta-primary:hover { transform: translateY(-2px) scale(1.05); box-shadow: 0 8px 25px rgba(168, 85, 247, 0.5); }
        .cta-secondary { background: var(--background-light); border: 1px solid var(--border-color); color: var(--text-light); }
        .cta-secondary:hover { background: var(--background-dark); border-color: var(--accent-color-secondary); color: var(--accent-color-secondary); }
        .cta-danger { background: linear-gradient(to right, var(--danger-color), var(--danger-color-dark)); color: #FFFFFF; }
        .cta-danger:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(244, 63, 94, 0.4); }

        /* --- Overview Page Specific --- */
        .overview-layout { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
        .overview-main, .overview-sidebar { display: flex; flex-direction: column; gap: 1.5rem; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
        .stat-card { padding: 1.5rem; display: flex; align-items: center; gap: 1.5rem; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .stat-card:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 15px 30px rgba(0,0,0,0.3), var(--glow-shadow); }
        .stat-icon { flex-shrink: 0; width: 56px; height: 56px; background: linear-gradient(to right, var(--accent-color), var(--accent-color-dark)); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(168, 85, 247, 0.4); }
        .stat-info .value { font-size: 2rem; font-weight: 700; color: #FFFFFF; }
        .stat-info .title { font-size: 1rem; color: var(--text-muted); }
        .activity-feed { display: flex; flex-direction: column; gap: 1rem; }
        .activity-item { display: flex; align-items: center; gap: 1rem; font-size: 0.9rem; }
        .activity-icon { color: var(--accent-color); flex-shrink: 0; }
        .activity-text { flex-grow: 1; color: var(--text-light); }
        .activity-text strong { font-weight: 500; color: #fff; }
        .activity-time { font-size: 0.8rem; color: var(--text-muted); white-space: nowrap; }
        .chart-container { display: flex; justify-content: space-around; align-items: flex-end; height: 100%; min-height: 250px; padding: 1rem 0; gap: 0.5rem; flex-grow: 1; }
        .chart-bar-wrapper { display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; flex-grow: 1; }
        @keyframes growBar { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        .chart-bar { width: 70%; background: linear-gradient(to top, var(--accent-color-dark), var(--accent-color)); border-radius: 5px 5px 0 0; position: relative; cursor: pointer; transform-origin: bottom; animation: growBar 0.5s ease-out forwards; transition: filter 0.2s ease; }
        .chart-bar:hover { filter: brightness(1.2); }
        .bar-tooltip { position: absolute; top: -2rem; left: 50%; transform: translateX(-50%); background-color: #000; color: #fff; padding: 0.25rem 0.5rem; border-radius: 5px; font-size: 0.8rem; opacity: 0; transition: opacity 0.2s ease; pointer-events: none; }
        .chart-bar:hover .bar-tooltip { opacity: 1; }
        .chart-label { margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-muted); }
        .notification-form { display: flex; flex-direction: column; gap: 1rem; }
        .form-group { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;}
        .form-group label { font-size: 0.875rem; font-weight: 500; color: var(--text-muted); }
        .form-input { width: 100%; box-sizing: border-box; background-color: rgba(30, 41, 59, 0.8); border: 1px solid var(--border-color); color: var(--text-light); border-radius: 0.5rem; padding: 0.75rem; font-size: 0.9rem; font-family: 'Lexend', sans-serif; transition: border-color 0.2s ease, box-shadow 0.2s ease; }
        .form-input:focus { outline: none; border-color: var(--accent-color); box-shadow: 0 0 0 3px rgba(192, 132, 252, 0.4); }
        textarea.form-input { resize: vertical; }

        /* --- User Management Page Specific --- */
        .sub-nav-container { display: flex; overflow-x: auto; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); }
        .sub-nav-tab { background: none; border: none; color: var(--text-muted); padding: 0.75rem 0.5rem; cursor: pointer; border-bottom: 3px solid transparent; transition: color 0.2s ease, border-color 0.2s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem; flex-shrink: 0; }
        .sub-nav-tab:hover { color: var(--text-light); border-bottom-color: var(--accent-color-secondary); }
        .sub-nav-tab.active { color: var(--accent-color); border-bottom-color: var(--accent-color); font-weight: 500; }
        .sub-nav-icon { flex-shrink: 0; } .sub-nav-text { font-size: 0.9rem; font-weight: 500; }
        .user-overview-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
        .directory-header { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); }
        .search-bar { position: relative; }
        .search-bar svg { position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-muted); }
        .search-bar input { width: 100%; box-sizing: border-box; background: rgba(30, 41, 59, 0.8); border: 1px solid var(--border-color); border-radius: 0.5rem; padding: 0.75rem 0.75rem 0.75rem 3rem; color: var(--text-light); }
        .filter-controls { display: flex; flex-direction: column; gap: 1rem; }
        .table-container { width: 100%; overflow-x: auto; }
        .table-header-row { display: none; }
        .table-row { display: flex; flex-direction: column; border: 1px solid var(--border-color); border-radius: 0.5rem; padding: 1rem; margin-bottom: 1rem; background: rgba(0,0,0,0.1); transition: background-color 0.3s, transform 0.3s; }
        .table-row:hover { background-color: rgba(192, 132, 252, 0.05); transform: scale(1.01); }
        .table-cell { display: flex; flex-direction: column; padding: 0.75rem 0; }
        .table-cell:not(:last-child) { border-bottom: 1px solid var(--border-color); }
        .table-cell:before { content: attr(data-label); font-weight: 600; color: var(--text-muted); margin-bottom: 0.5rem; display: block; font-size: 0.875rem; }
        .cell-title { font-weight: 500; color: var(--text-light); } .cell-subtitle { font-size: 0.875rem; color: #64748B; }
        .role-select { background-color: rgba(30, 41, 59, 0.8); border: 1px solid var(--border-color); color: white; border-radius: 0.5rem; padding: 0.75rem; width: 100%; }
        .actions { display: flex; gap: 0.5rem; justify-content: flex-start; flex-direction: row !important; align-items: center; }
        .action-button { background: rgba(30, 41, 59, 0.8); border: 1px solid var(--border-color); color: var(--text-muted); padding: 0.5rem; border-radius: 0.5rem; cursor: pointer; transition: all 0.2s ease; display: inline-flex; justify-content: center; align-items: center; }
        .action-button:hover { background: var(--accent-color-dark); color: #FFFFFF; transform: scale(1.1); } .action-button.delete:hover { background: var(--danger-color); color: #FFFFFF; }
        .role-badge { padding: 0.35rem 0.85rem; border-radius: 1rem; font-size: 0.75rem; font-weight: 500; color: white; text-transform: uppercase; letter-spacing: 0.5px; }
        .role-badge.role-candidate { background: linear-gradient(to right, #3b82f6, #60a5fa); }
        .role-badge.role-recruiter { background: linear-gradient(to right, #f97316, #fb923c); }
        .role-badge.role-admin { background: linear-gradient(to right, #ef4444, #f87171); }
        .switch { position: relative; display: inline-block; width: 44px; height: 24px; }
        .switch input { opacity: 0; width: 0; height: 0; }
        .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #374151; transition: .4s; }
        .slider:before { position: absolute; content: ""; height: 16px; width: 16px; left: 4px; bottom: 4px; background-color: white; transition: .4s; }
        input:checked + .slider { background-color: var(--accent-color); }
        input:checked + .slider:before { transform: translateX(20px); }
        .slider.round { border-radius: 34px; } .slider.round:before { border-radius: 50%; }
        .pagination-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 1.5rem; margin-top: 1rem; border-top: 1px solid var(--border-color); font-size: 0.9rem; color: var(--text-muted); }
        .pagination-button { background-color: rgba(30, 41, 59, 0.8); border: 1px solid var(--border-color); color: var(--text-light); padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer; transition: all 0.2s ease; }
        .pagination-button:hover { background-color: var(--accent-color-dark); border-color: var(--accent-color); }
        .form-actions-modal { display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1.5rem; }
        .user-details-view { text-align: center; }
        .user-avatar-large { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(to right, var(--accent-color), var(--accent-color-dark)); color: white; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: 600; margin: 0 auto 1rem; }
        .user-avatar-small { width: 32px; height: 32px; border-radius: 50%; background: var(--background-light); color: var(--text-light); display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 0.9rem; flex-shrink: 0; }
        .user-details-view h3 { margin: 0 0 0.5rem; font-size: 1.5rem; }
        .user-details-view p { margin: 0.25rem 0; color: var(--text-muted); }
        .status-active { color: var(--success-color); font-weight: 500; } .status-suspended { color: var(--danger-color); font-weight: 500; }

        /* --- Add/Invite User Page Styles --- */
        .add-user-layout { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
        .add-user-form { display: flex; flex-direction: column; gap: 1.5rem; }
        .form-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        .form-actions { display: flex; justify-content: flex-end; align-items: center; flex-wrap: wrap; gap: 1rem; margin-top: 0.5rem; }
        .upload-instructions { font-size: 0.9rem; color: var(--text-muted); margin: 0 0 1.5rem 0; line-height: 1.5; }
        .file-upload-area { position: relative; border: 2px dashed var(--border-color); border-radius: 0.75rem; padding: 2rem; text-align: center; transition: border-color 0.2s ease, background-color 0.2s ease; }
        .file-upload-area:hover { border-color: var(--accent-color); background-color: rgba(192, 132, 252, 0.05); }
        .file-upload-area.small { padding: 1rem; }
        .file-input { position: absolute; width: 100%; height: 100%; top: 0; left: 0; opacity: 0; cursor: pointer; }
        .file-label { display: flex; flex-direction: column; align-items: center; gap: 1rem; color: var(--text-muted); cursor: pointer; }
        .file-label.small { flex-direction: row; justify-content: center; gap: 0.75rem; }
        .file-label svg { width: 32px; height: 32px; color: var(--accent-color); }
        .file-label.small svg { width: 24px; height: 24px; }
        .file-label span { font-weight: 500; color: var(--text-light); }
        .bulk-actions { justify-content: space-between; }
        .download-template-link { font-size: 0.9rem; color: var(--accent-color-secondary); text-decoration: none; font-weight: 500; }
        .download-template-link:hover { text-decoration: underline; }

        /* --- Roles & Permissions Styles --- */
        .roles-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
        .roles-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
        .role-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .role-card:hover { transform: translateY(-5px); box-shadow: var(--glow-shadow); }
        .role-card-header { display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color); margin-bottom: 1.5rem; }
        .role-name { font-size: 1.25rem; font-weight: 600; margin: 0 0 0.25rem 0; color: #fff; }
        .role-description { font-size: 0.9rem; color: var(--text-muted); margin: 0; }
        .role-actions { display: flex; gap: 0.5rem; }
        .permissions-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
        .permission-label { display: flex; align-items: center; font-size: 0.9rem; cursor: pointer; user-select: none; }
        .permission-checkbox { position: absolute; opacity: 0; cursor: pointer; height: 0; width: 0; }
        .custom-checkbox { height: 20px; width: 20px; background-color: rgba(30, 41, 59, 0.8); border: 1px solid var(--border-color); border-radius: 4px; display: inline-block; position: relative; margin-right: 0.75rem; transition: all 0.2s ease; transform: scale(1); }
        .permission-label:hover .custom-checkbox { border-color: var(--accent-color-secondary); }
        .permission-checkbox:checked ~ .custom-checkbox { background-color: var(--accent-color); border-color: var(--accent-color-dark); transform: scale(1.1); }
        .custom-checkbox::after { content: ""; position: absolute; display: none; left: 6px; top: 2px; width: 5px; height: 10px; border: solid white; border-width: 0 3px 3px 0; transform: rotate(45deg) scale(0); transition: transform 0.2s ease-out; }
        .permission-checkbox:checked ~ .custom-checkbox::after { display: block; transform: rotate(45deg) scale(1); }

        /* --- Group Management Styles --- */
        .groups-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
        .groups-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1.5rem; }
        .group-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .group-card:hover { transform: translateY(-5px); box-shadow: var(--glow-shadow-secondary); }
        .group-card-header { display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color); margin-bottom: 1.5rem; }
        .group-name { font-size: 1.25rem; font-weight: 600; margin: 0 0 0.25rem 0; color: var(--accent-color-secondary); }
        .group-description { font-size: 0.9rem; color: var(--text-muted); margin: 0; }
        .group-actions { display: flex; gap: 0.5rem; }
        .group-members h4 { margin: 0 0 1rem 0; font-weight: 500; color: var(--text-light); }
        .member-list { display: flex; align-items: center; flex-wrap: wrap; gap: 0.5rem; }
        .member-avatar { width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(to right, #22d3ee, #0ea5e9); color: white; display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 0.9rem; border: 2px solid var(--background-dark); cursor: pointer; transition: transform 0.2s ease; }
        .member-avatar:hover { transform: scale(1.1); }
        .add-member-btn { width: 36px; height: 36px; border-radius: 50%; background-color: rgba(30, 41, 59, 0.8); border: 2px dashed var(--border-color); color: var(--text-muted); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s ease; }
        .add-member-btn:hover { background-color: var(--accent-color-secondary); color: white; border-style: solid; }
        .add-member-btn svg { width: 18px; height: 18px; }
        .group-card-footer { margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color); display: flex; justify-content: flex-end; }

        /* --- Activity Log Styles --- */
        .log-list { display: flex; flex-direction: column; gap: 0.5rem; }
        .log-item { display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; border-radius: 0.5rem; transition: background-color 0.2s ease; }
        .log-item:hover { background-color: rgba(255, 255, 255, 0.05); }
        .log-icon { flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .log-icon-login { background-color: rgba(59, 130, 246, 0.2); color: #60a5fa; }
        .log-icon-job_apply { background-color: rgba(249, 115, 22, 0.2); color: #fb923c; }
        .log-icon-upload { background-color: rgba(34, 197, 94, 0.2); color: #4ade80; }
        .log-icon-test_submit { background-color: rgba(168, 85, 247, 0.2); color: #c084fc; }
        .log-icon-delete { background-color: rgba(239, 68, 68, 0.2); color: #f87171; }
        .log-details { display: flex; flex-direction: column; gap: 0.25rem; }
        .log-action { color: var(--text-light); }
        .log-user { font-weight: 500; color: #fff; }
        .log-meta { font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.5rem; }
        
        /* --- Reports & Export Styles --- */
        .reports-export-layout { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
        .export-description { font-size: 0.9rem; color: var(--text-muted); margin: 0.5rem 0 1.5rem 0; line-height: 1.6; }
        .export-buttons { display: flex; flex-wrap: wrap; gap: 1rem; }
        .reports-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 1rem; }
        .report-card { background: rgba(0,0,0,0.2); border: 1px solid var(--border-color); border-radius: 0.75rem; padding: 1.5rem; display: flex; flex-direction: column; text-align: center; align-items: center; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .report-card:hover { transform: translateY(-8px); box-shadow: var(--glow-shadow); }
        .report-icon { width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(to right, var(--accent-color-dark), var(--accent-color)); color: white; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; }
        .report-info { flex-grow: 1; }
        .report-title { font-size: 1.1rem; font-weight: 600; color: #fff; margin: 0 0 0.5rem 0; }
        .report-description { font-size: 0.875rem; color: var(--text-muted); line-height: 1.5; margin: 0 0 1.5rem 0; }
        .report-actions { width: 100%; }
        
        /* --- Curriculum Management Styles --- */
        .curriculum-header { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; margin-bottom: 2rem; padding: 0 1rem; gap: 1rem; }
        .courses-list { display: flex; flex-direction: column; gap: 1.5rem; }
        .course-item { padding: 0; overflow: hidden; transition: box-shadow 0.3s ease; }
        .course-item:hover { box-shadow: var(--glow-shadow); }
        .course-header { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; padding: 1.5rem; cursor: pointer; gap: 1rem; }
        .course-title-section { display: flex; align-items: center; gap: 1rem; flex-grow: 1; min-width: 250px; }
        .expand-btn { background: none; border: none; color: var(--text-light); cursor: pointer; padding: 0.5rem; display: flex; align-items: center; justify-content: center; border-radius: 50%; transition: transform 0.3s ease, background-color 0.2s ease; }
        .expand-btn:hover { background-color: rgba(255, 255, 255, 0.1); }
        .course-title-section h3 { margin: 0; font-size: 1.25rem; font-weight: 600; }
        .status-badge { padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.75rem; font-weight: 500; text-transform: uppercase; }
        .status-badge.published { background-color: rgba(34, 197, 94, 0.2); color: #4ade80; }
        .status-badge.draft { background-color: rgba(249, 115, 22, 0.2); color: #fb923c; }
        .course-actions { display: flex; align-items: center; gap: 1rem; flex-shrink: 0; }
        .last-updated { font-size: 0.8rem; color: var(--text-muted); font-style: italic; }
        .course-content-wrapper { max-height: 0; overflow: hidden; transition: max-height 0.5s ease-in-out; }
        .course-content-wrapper.expanded { max-height: 1000px; /* Adjust as needed */ }
        .course-content { padding: 0 1.5rem 1.5rem; display: flex; flex-direction: column; gap: 1rem; border-top: 1px solid var(--border-color); }
        .module-item { background: rgba(0,0,0,0.2); border-radius: 0.75rem; padding: 1rem; border-left: 3px solid var(--accent-color-secondary); transition: background-color 0.2s ease; }
        .module-item:hover { background: rgba(34, 211, 238, 0.1); }
        .module-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
        .module-header h4 { margin: 0; flex-grow: 1; font-weight: 500; }
        .drag-handle { cursor: grab; color: var(--text-muted); }
        .action-button-sm { background: none; border: none; color: var(--text-muted); padding: 0.25rem; cursor: pointer; transition: color 0.2s ease, transform 0.2s ease; }
        .action-button-sm:hover { color: var(--text-light); transform: scale(1.1); }
        .action-button-sm.delete:hover { color: var(--danger-color); }
        .action-button-sm svg { width: 16px; height: 16px; }
        .module-actions { display: flex; align-items: center; gap: 0.5rem; }
        .topics-list { display: flex; flex-direction: column; gap: 0.5rem; padding-left: 1rem; border-left: 2px solid rgba(192, 132, 252, 0.2); margin-left: 1.25rem; }
        .topic-item { display: flex; align-items: center; gap: 0.75rem; background: var(--background-dark); padding: 0.75rem 1rem; border-radius: 0.5rem; transition: background-color 0.2s ease, transform 0.2s ease; }
        .topic-item:hover { background: var(--background-light); transform: translateX(5px); }
        .topic-item p { margin: 0; flex-grow: 1; font-size: 0.9rem; }
        .topic-actions { display: flex; align-items: center; gap: 0.5rem; }
        .add-module-btn { margin-top: 1rem; align-self: flex-start; }
        .no-topics-text { font-size: 0.9rem; color: var(--text-muted); text-align: center; padding: 1rem; }

        /* --- Live Sessions Management Styles --- */
        .sessions-header { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; margin-bottom: 2rem; gap: 1rem; }
        .sessions-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1.5rem; }
        .session-card { padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; border-left: 4px solid transparent; }
        .status-border-upcoming { border-left-color: var(--accent-color-secondary); }
        .status-border-completed { border-left-color: var(--success-color); }
        .status-border-cancelled { border-left-color: var(--danger-color); }
        .session-card-header { display: flex; justify-content: space-between; align-items: flex-start; }
        .session-title { margin: 0 0 0.25rem 0; font-size: 1.25rem; font-weight: 600; color: #fff; }
        .session-speaker { margin: 0; font-size: 0.9rem; color: var(--text-muted); }
        .session-status-badge { padding: 0.35rem 0.85rem; border-radius: 1rem; font-size: 0.75rem; font-weight: 500; color: white; text-transform: uppercase; }
        .session-status-badge.status-upcoming { background-color: rgba(34, 211, 238, 0.2); color: var(--accent-color-secondary); }
        .session-status-badge.status-completed { background-color: rgba(34, 197, 94, 0.2); color: var(--success-color); }
        .session-status-badge.status-cancelled { background-color: rgba(244, 63, 94, 0.2); color: var(--danger-color); }
        .session-time { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; font-weight: 500; color: var(--text-light); margin-bottom: 1rem; }
        .session-description { font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; margin: 0; flex-grow: 1; }
        .session-card-footer { display: flex; justify-content: flex-end; align-items: center; gap: 0.5rem; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color); }
        .session-form .form-input { margin-bottom: 0.75rem; }
        .attendance-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem; }
        .attendee-item { display: flex; align-items: center; gap: 1rem; background-color: var(--background-dark); padding: 0.75rem; border-radius: 0.5rem; }

        /* --- ✨ Study Material Management Styles --- */
        .materials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; }
        .material-card { padding: 1rem; }
        .material-card-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
        .material-icon-wrapper { flex-shrink: 0; width: 48px; height: 48px; border-radius: 0.5rem; background: rgba(192, 132, 252, 0.1); color: var(--accent-color); display: flex; align-items: center; justify-content: center; }
        .material-title { font-size: 1.1rem; font-weight: 600; margin: 0 0 0.25rem 0; color: var(--text-light); }
        .material-course { font-size: 0.8rem; color: var(--text-muted); margin: 0; }
        .material-card-body { padding: 1rem 0; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); }
        .material-details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.875rem; }
        .material-details-grid > div { display: flex; justify-content: space-between; }
        .material-details-grid > div span:first-child { color: var(--text-muted); }
        .material-details-grid > div span:last-child { font-weight: 500; color: var(--text-light); }
        .material-card-footer { display: flex; justify-content: flex-end; align-items: center; gap: 0.5rem; padding-top: 1rem; }

        /* --- Topic Management Styles --- */
        .resource-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }
        .resource-pill { display: inline-flex; align-items: center; gap: 0.35rem; background-color: rgba(255, 255, 255, 0.05); border: 1px solid var(--border-color); color: var(--text-muted); padding: 0.25rem 0.6rem; border-radius: 1rem; font-size: 0.75rem; }
        .resource-pill svg { width: 14px; height: 14px; }
        .no-resources-pill { font-style: italic; color: var(--text-muted); font-size: 0.875rem; }
        .progress-bar-container { width: 100%; height: 8px; background-color: rgba(255, 255, 255, 0.1); border-radius: 4px; overflow: hidden; margin-bottom: 0.5rem; }
        .progress-bar { height: 100%; background: linear-gradient(to right, var(--accent-color-secondary), var(--accent-color)); border-radius: 4px; }
        .progress-text { font-size: 0.75rem; color: var(--text-muted); }
        .resource-manager { display: flex; flex-direction: column; gap: 2rem; }
        .resource-list { display: flex; flex-direction: column; gap: 0.75rem; }
        .resource-item { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: var(--background-dark); border-radius: 0.5rem; }
        .resource-icon { color: var(--accent-color-secondary); }
        .resource-name { flex-grow: 1; }
        .resource-actions { display: flex; gap: 0.5rem; }
        .resource-title { margin: 0 0 1rem; font-size: 1.1rem; color: var(--text-light); }
        .no-resources-text { color: var(--text-muted); text-align: center; padding: 1rem 0; }
        .add-resource-form { border-top: 1px solid var(--border-color); padding-top: 1.5rem; }

        /* --- Responsive Design --- */
        @media (max-width: 767px) {
            .sub-nav-text { display: none; }
            .sub-nav-tab { flex-grow: 1; padding: 0.75rem; }
            .course-header { flex-direction: column; align-items: flex-start; }
            .course-actions { width: 100%; justify-content: space-between; }
            .last-updated { display: none; }
        }
        @media (min-width: 768px) {
            .mobile-nav-toggle { display: none; }
            .sidebar { position: relative; transform: translateX(0); flex-shrink: 0; }
            .sidebar-footer { display: block; }
            .nav-item-mobile-logout { display: none; }
            .sidebar.collapsed { width: var(--sidebar-collapsed-width); }
            .sidebar.collapsed .sidebar-brand, .sidebar.collapsed .nav-text, .sidebar.collapsed .sidebar-footer .nav-text { display: none; }
            .sidebar.collapsed .nav-item { justify-content: center; border-left-width: 0; } .sidebar.collapsed .nav-icon { margin-right: 0; }
            .sidebar.collapsed .nav-item:hover, .sidebar.collapsed .nav-item.active { border-left-width: 3px; }
            .sidebar.collapsed .sidebar-toggle svg { transform: rotate(180deg); }
            .header-title h1 { font-size: 2.25rem; }
            .content-card { padding: 2rem; }
            .table-header-row { display: grid; grid-template-columns: 2.5fr 2fr 1.5fr 1.5fr 1fr; gap: 1rem; padding: 0 1rem; color: var(--text-muted); font-weight: 500; font-size: 0.875rem; border-bottom: 1px solid var(--border-color); text-transform: uppercase; margin-bottom: 1rem; }
            .table-header-row.user-table { grid-template-columns: 3fr 1fr 1fr 1fr; }
            .table-row { display: grid; grid-template-columns: 2.5fr 2fr 1.5fr 1.5fr 1fr; border: none; border-bottom: 1px solid var(--border-color); margin-bottom: 0; padding: 1rem; border-radius: 0; align-items: center; background: transparent; }
            .table-row.user-table { grid-template-columns: 3fr 1fr 1fr 1fr; }
            .table-row:hover { transform: scale(1); background-color: rgba(192, 132, 252, 0.05); }
            .table-cell { padding: 0; border: none !important; }
            .table-cell:before { display: none; }
            .actions { justify-content: flex-end; }
            .filter-controls { flex-direction: row; }
            .directory-header { flex-direction: row; justify-content: space-between; align-items: center; }
            .user-overview-grid { grid-template-columns: 3fr 2fr; }
            .sub-nav-tab { padding: 1rem; }
            .form-grid { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
            .roles-grid { grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); }
        }
        @media (min-width: 1024px) {
            .overview-layout { grid-template-columns: 2fr 1fr; }
            .add-user-layout { grid-template-columns: 1fr 1fr; }
            .reports-export-layout { grid-template-columns: 1fr 2fr; }
        }
         @media (min-width: 1280px) {
            .add-user-layout > *:first-child, .add-user-layout > *:nth-child(2) { grid-column: span 1; }
            .add-user-layout > *:last-child { grid-column: 1 / -1; }
        }

        /* --- Analytics Dashboard Styles --- */
        .analytics-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 1.5rem; }
        .kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem; }
        .kpi-card { padding: 1rem; text-align: center; }
        .kpi-value { font-size: 2.25rem; font-weight: 700; color: var(--accent-color-secondary); line-height: 1.2; }
        .kpi-label { font-size: 0.875rem; color: var(--text-muted); margin-top: 0.25rem; }
        .funnel-container { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem; }
        .funnel-stage { background: rgba(0,0,0,0.2); border-radius: 0.5rem; padding: 1rem; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid; transition: all 0.3s ease; }
        .funnel-stage:hover { transform: translateX(10px); background: rgba(34, 211, 238, 0.1); }
        .funnel-stage-applied { border-color: #3b82f6; }
        .funnel-stage-shortlisted { border-color: #a855f7; }
        .funnel-stage-interview { border-color: #f97316; }
        .funnel-stage-offer { border-color: #22c55e; }
        .funnel-label { font-weight: 500; }
        .funnel-value { font-size: 1.25rem; font-weight: 600; }
        .leaderboard-list { display: flex; flex-direction: column; gap: 1rem; }
        .leaderboard-item { display: flex; align-items: center; gap: 1rem; background-color: rgba(0,0,0,0.2); padding: 0.75rem 1rem; border-radius: 0.5rem; }
        .leaderboard-rank { font-size: 1rem; font-weight: 700; color: var(--text-muted); width: 20px; text-align: center; }
        .leaderboard-name { flex-grow: 1; font-weight: 500; }
        .leaderboard-score { font-weight: 600; font-size: 1rem; color: var(--accent-color-secondary); }
        .at-risk-list { display: flex; flex-direction: column; gap: 1rem; }
        .at-risk-item { display: flex; align-items: center; gap: 1rem; background-color: rgba(244, 63, 94, 0.1); padding: 1rem; border-radius: 0.5rem; border-left: 4px solid var(--danger-color); }
        .at-risk-reason { font-size: 0.8rem; color: var(--text-muted); }
        .alumni-card { display: flex; gap: 1rem; align-items: center; background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 0.75rem; }
        .alumni-avatar { width: 48px; height: 48px; border-radius: 50%; background: var(--accent-color); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; flex-shrink: 0; }
        .alumni-info p { margin: 0; }
        .alumni-name { font-weight: 600; color: #fff; }
        .alumni-role { font-size: 0.875rem; color: var(--accent-color-secondary); }
        
        @media (min-width: 768px) {
            .analytics-grid { grid-template-columns: repeat(2, 1fr); }
            .kpi-card { padding: 1.5rem; }
        }
        @media (min-width: 1024px) {
            .analytics-grid { grid-template-columns: repeat(4, 1fr); }
            .analytics-grid > .grid-col-span-2 { grid-column: span 2; }
            .analytics-grid > .grid-col-span-4 { grid-column: span 4; }
        }

        /* --- Placement Management Styles --- */
        .pm-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
        .pm-header { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem; }
        @media (min-width: 768px) { .pm-header { flex-direction: row; justify-content: space-between; align-items: center; } }
        .applicant-funnel { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 2rem; }
        .funnel-card { background: rgba(0,0,0,0.2); border-radius: 0.75rem; padding: 1rem; text-align: center; border-bottom: 4px solid; transition: transform 0.2s ease, background-color 0.2s ease; cursor: pointer; }
        .funnel-card:hover { transform: translateY(-5px); background: rgba(255,255,255,0.1); }
        .funnel-card-value { font-size: 2rem; font-weight: 700; }
        .funnel-card-label { font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; }
        .applicant-table-controls { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem; }
        @media (min-width: 768px) { .applicant-table-controls { flex-direction: row; justify-content: space-between; align-items: center; } }
        .applicant-profile-modal { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
        .profile-header { text-align: center; }
        .profile-avatar { width: 70px; height: 70px; border-radius: 50%; background: var(--accent-color); color: white; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 1rem; }
        .profile-name { margin: 0; font-size: 1.5rem; }
        .profile-course { margin: 0.25rem 0; color: var(--accent-color-secondary); }
        .profile-details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 0.5rem; }
        .profile-detail { font-size: 0.9rem; }
        .profile-detail span { display: block; }
        .profile-detail span:first-child { color: var(--text-muted); font-size: 0.8rem; margin-bottom: 0.25rem; }
        .profile-skills .skills-list { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem; }
        .skill-tag { background: var(--background-light); color: var(--accent-color-secondary); padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.8rem; }
        .recruiter-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
        .recruiter-card { display: flex; flex-direction: column; }
        .recruiter-card-header { display: flex; gap: 1rem; align-items: center; padding-bottom: 1rem; margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); }
        .recruiter-logo { width: 48px; height: 48px; border-radius: 0.5rem; background: var(--background-light); color: var(--text-light); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 600; flex-shrink: 0; }
        .recruiter-company { font-size: 1.1rem; font-weight: 600; margin: 0; }
        .recruiter-contact { font-size: 0.9rem; color: var(--text-muted); margin: 0.25rem 0 0 0; }
        .recruiter-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; flex-grow: 1; }
        .recruiter-stat .value { font-size: 1.25rem; font-weight: 600; }
        .recruiter-stat .label { font-size: 0.8rem; color: var(--text-muted); }
        .recruiter-card-footer { display: flex; gap: 0.5rem; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color); justify-content: flex-end; }
        .status-badge-sm { font-size: 0.75rem; padding: 0.2rem 0.6rem; border-radius: 1rem; text-transform: capitalize; color: white; }
        .status-applied { background-color: #3b82f6; }
        .status-shortlisted { background-color: #a855f7; }
        .status-interview { background-color: #f97316; }
        .status-hired { background-color: #22c55e; }
        .status-rejected { background-color: #ef4444; }
        @media (min-width: 1024px) { .applicant-funnel { grid-template-columns: repeat(4, 1fr); } }

        /* --- Review & Feedback Styles (Updates & Additions) --- */
        .review-card { display: flex; flex-direction: column; gap: 1rem; background: rgba(0,0,0,0.15); padding: 1.5rem; border-radius: 0.75rem; border-left: 4px solid var(--accent-color); }
        .review-card-header { display: flex; gap: 1rem; align-items: center; }
        .review-student-info { flex-grow: 1; }
        .review-student-name { font-weight: 600; color: #fff; margin: 0; }
        .review-course-name { font-size: 0.875rem; color: var(--text-muted); margin: 0.25rem 0 0 0; }
        .star-rating { display: flex; gap: 0.25rem; color: #facc15; }
        .review-text { color: var(--text-light); line-height: 1.6; font-size: 0.95rem; }
        .review-actions { display: flex; gap: 1rem; justify-content: flex-end; }
        .review-table-filters { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem; }
        .row-hidden { opacity: 0.5; background-color: rgba(0,0,0,0.2); }
        .icon-featured { color: #facc15 !important; }

        .insights-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
        .rating-distribution-list { display: flex; flex-direction: column; gap: 1rem; }
        .rating-dist-item { display: flex; align-items: center; gap: 1rem; }
        .rating-dist-label { width: 40px; }
        .rating-dist-bar-bg { flex-grow: 1; height: 10px; background: rgba(255,255,255,0.1); border-radius: 5px; }
        .rating-dist-bar { height: 100%; background: var(--accent-color); border-radius: 5px; }
        
        .keyword-cloud { display: flex; flex-wrap: wrap; gap: 0.75rem; }
        .keyword-tag { padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 0.9rem; }
        .keyword-positive { background: rgba(34, 197, 94, 0.2); color: var(--success-color); }
        .keyword-negative { background: rgba(244, 63, 94, 0.2); color: var(--danger-color); }

        .testimonial-card { background: rgba(192, 132, 252, 0.1); border-left: 4px solid var(--accent-color); padding: 1rem; border-radius: 0.5rem; }
        .testimonial-text { font-style: italic; margin-bottom: 1rem; }
        .testimonial-author { font-weight: 600; text-align: right; }

        .settings-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
        .setting-item { display: flex; flex-direction: column; gap: 0.75rem; background: rgba(0,0,0,0.2); padding: 1.5rem; border-radius: 0.75rem; }
        .setting-label-pair { display: flex; justify-content: space-between; align-items: center; }
        .setting-label { font-weight: 500; color: #fff; }
        .setting-description { font-size: 0.875rem; color: var(--text-muted); }

        @media(min-width: 768px) {
            .settings-grid { grid-template-columns: 1fr 1fr; }
            .review-table-filters { flex-direction: row; }
        }
/* --- System Configuration Styles --- */
        .settings-layout { display: flex; flex-direction: column; gap: 1.5rem; }
        .settings-nav { display: flex; flex-direction: row; gap: 0.5rem; overflow-x: auto; padding-bottom: 1rem; }
        .settings-nav-item { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; border-radius: 0.5rem; background: var(--background-light); border: 1px solid var(--border-color); color: var(--text-muted); cursor: pointer; transition: all 0.2s ease; white-space: nowrap; flex-shrink: 0; }
        .settings-nav-item:hover { background-color: rgba(255, 255, 255, 0.05); color: var(--text-light); }
        .settings-nav-item.active { background: var(--accent-color); color: white; border-color: var(--accent-color-dark); box-shadow: var(--glow-shadow); }
        .settings-content { flex-grow: 1; }
        .setting-section { margin-bottom: 2.5rem; }
        .setting-section:last-child { margin-bottom: 0; }
        .setting-section h3 { font-size: 1.25rem; font-weight: 600; color: var(--accent-color-secondary); padding-bottom: 1rem; border-bottom: 1px solid var(--border-color); margin: 0 0 1.5rem 0; }
        .form-group-inline { display: flex; flex-direction: column; gap: 1rem; align-items: flex-start; }
        .form-group-inline label { font-weight: 500; color: var(--text-light); width: 100%; }
        .form-group-inline > div { width: 100%; }
        .color-picker-wrapper { display: flex; align-items: center; gap: 1rem; background-color: rgba(30, 41, 59, 0.8); border: 1px solid var(--border-color); border-radius: 0.5rem; padding-right: 0.75rem; }
        .color-picker-wrapper input[type="color"] { width: 40px; height: 40px; border: none; background: transparent; padding: 0; }
        .color-picker-wrapper input[type="text"] { flex-grow: 1; background: transparent; border: none; }
        .api-key-list { display: flex; flex-direction: column; gap: 1rem; }
        .api-key-item { display: flex; flex-direction: column; gap: 0.75rem; background-color: var(--background-dark); padding: 1rem; border-radius: 0.5rem; }
        .api-key-info { display: flex; align-items: center; gap: 1rem; }
        .api-key-info span { font-family: monospace; background-color: var(--background-light); padding: 0.25rem 0.5rem; border-radius: 0.25rem; }
        .email-template-list { display: flex; flex-direction: column; gap: 1rem; }
        .email-template-item { display: flex; align-items: center; justify-content: space-between; background-color: rgba(0,0,0,0.2); padding: 1rem; border-radius: 0.5rem; }

        @media (min-width: 1024px) {
            .settings-layout { flex-direction: row; align-items: flex-start; }
            .settings-nav { flex-direction: column; padding-bottom: 0; overflow-x: visible; }
            .settings-nav-item { width: 220px; }
            .form-group-inline { flex-direction: row; gap: 2rem; align-items: center; }
            .form-group-inline label { width: 250px; flex-shrink: 0; }
        }
            .status-indicator { display: flex; align-items: center; gap: 0.5rem; }
        .status-dot { width: 10px; height: 10px; border-radius: 50%; }
        .status-dot-active { background-color: var(--success-color); box-shadow: 0 0 5px var(--success-color); }
        .env-card-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; }
        .env-card { background-color: rgba(0,0,0,0.2); padding: 1rem; border-radius: 0.5rem; border-left: 4px solid; }
        .env-card-prod { border-color: var(--success-color); }
        .env-card-staging { border-color: var(--warning-color); }
        .env-card-dev { border-color: var(--accent-color-secondary); }
        .env-card p { margin: 0; }
        .env-label { font-weight: 600; font-size: 1.1rem; }
        .env-url { font-size: 0.9rem; color: var(--text-muted); margin-top: 0.25rem; }
        .env-actions { margin-top: 1rem; display: flex; gap: 0.5rem; }

        .gateway-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
        .gateway-card { background: rgba(0,0,0,0.2); padding: 1.5rem; border-radius: 0.75rem; display: flex; flex-direction: column; align-items: center; text-align: center; }
        .gateway-logo { font-size: 1.75rem; font-weight: 700; margin-bottom: 1rem; }
        .gateway-card .status-indicator { margin-bottom: 1.5rem; }
        .plan-list { display: flex; flex-direction: column; gap: 1rem; }
        .plan-item { display: flex; flex-direction: column; gap: 0.75rem; background-color: rgba(0,0,0,0.2); padding: 1rem; border-radius: 0.5rem; }
        .plan-info { display: flex; justify-content: space-between; align-items: center; }
        .plan-name { font-weight: 600; }
        .plan-price { font-size: 1.1rem; font-weight: 500; color: var(--accent-color-secondary); }
        .plan-actions { display: flex; justify-content: flex-end; gap: 0.5rem; }

        @media(min-width: 768px) {
            .plan-item { flex-direction: row; align-items: center; }
            .plan-info { flex-grow: 1; }
            .plan-actions { justify-content: flex-start; }
        }
            /* --- Security Page Styles --- */
        .security-layout { display: flex; flex-direction: column; gap: 1.5rem; }
        .security-nav { display: flex; flex-direction: row; gap: 0.5rem; overflow-x: auto; padding-bottom: 1rem; }
        .security-nav-item { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; border-radius: 0.5rem; background: var(--background-light); border: 1px solid var(--border-color); color: var(--text-muted); cursor: pointer; transition: all 0.2s ease; white-space: nowrap; flex-shrink: 0; }
        .security-nav-item:hover { background-color: rgba(255, 255, 255, 0.05); color: var(--text-light); }
        .security-nav-item.active { background: var(--danger-color); color: white; border-color: var(--danger-color-dark); box-shadow: 0 0 20px rgba(244, 63, 94, 0.3); }
        .security-content { flex-grow: 1; }
        .security-section { margin-bottom: 2.5rem; }
        .security-section:last-child { margin-bottom: 0; }
        .security-section h3 { font-size: 1.25rem; font-weight: 600; color: var(--danger-color); padding-bottom: 1rem; border-bottom: 1px solid rgba(244, 63, 94, 0.3); margin: 0 0 1.5rem 0; }
        .role-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
        .permission-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem; }
        .permission-pill { background-color: var(--background-light); color: var(--text-muted); padding: 0.25rem 0.6rem; border-radius: 1rem; font-size: 0.75rem; }
        .alert-list { display: flex; flex-direction: column; gap: 1rem; }
        .alert-item { display: flex; flex-direction: column; gap: 0.75rem; background-color: rgba(249, 115, 22, 0.1); padding: 1rem; border-radius: 0.5rem; border-left: 4px solid var(--warning-color); }
        .alert-item-critical { background-color: rgba(244, 63, 94, 0.1); border-left-color: var(--danger-color); }
        .alert-info { display: flex; justify-content: space-between; align-items: flex-start; }
        .alert-text { font-weight: 500; }
        .alert-meta { font-size: 0.8rem; color: var(--text-muted); }
        .alert-actions { display: flex; gap: 0.5rem; justify-content: flex-end; }
        
        @media (min-width: 1024px) {
            .security-layout { flex-direction: row; align-items: flex-start; }
            .security-nav { flex-direction: column; padding-bottom: 0; overflow-x: visible; }
            .security-nav-item { width: 220px; }
        }

        .stat-card-clickable { cursor: pointer; }
        .activity-icon-wrapper { flex-shrink: 0; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .activity-icon-wrapper svg { width: 18px; height: 18px; }
        .activity-type-signup { background-color: rgba(59, 130, 246, 0.2); color: #60a5fa; }
        .activity-type-job_post { background-color: rgba(249, 115, 22, 0.2); color: #fb923c; }
        .activity-type-plan_upgrade { background-color: rgba(168, 85, 247, 0.2); color: #c084fc; }
        .activity-type-review { background-color: rgba(34, 197, 94, 0.2); color: #4ade80; }
        .chart-bar-today { background: linear-gradient(to top, var(--accent-color-secondary), #67e8f9); box-shadow: 0 0 12px var(--glow-shadow-secondary); }
        .key-metrics-list { display: flex; flex-direction: column; gap: 1.25rem; }
        .key-metric-item { display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; }
        .key-metric-label { color: var(--text-muted); }
        .key-metric-value { font-weight: 600; color: var(--text-light); }

        /* --- Enhanced User Management Styles --- */
        .directory-controls { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem; }
        .directory-filters { display: flex; flex-direction: column; gap: 1rem; }
        .bulk-actions-bar { display: flex; align-items: center; gap: 1rem; background-color: rgba(192, 132, 252, 0.1); padding: 0.75rem 1.5rem; border-radius: 0.75rem; border: 1px solid var(--border-color); }
        .bulk-actions-bar span { font-size: 0.9rem; font-weight: 500; }
        .status-pill { padding: 0.3rem 0.8rem; border-radius: 1rem; font-size: 0.75rem; font-weight: 500; color: white; display: inline-flex; align-items: center; gap: 0.4rem; }
        .status-pill::before { content: ''; width: 6px; height: 6px; border-radius: 50%; }
        .status-pill.active { background-color: rgba(34, 197, 94, 0.2); color: var(--success-color); }
        .status-pill.active::before { background-color: var(--success-color); }
        .status-pill.suspended { background-color: rgba(244, 63, 94, 0.2); color: var(--danger-color); }
        .status-pill.suspended::before { background-color: var(--danger-color); }
        
        @media (min-width: 768px) {
            .directory-controls { flex-direction: row; justify-content: space-between; align-items: center; }
            .directory-filters { flex-direction: row; }
        }
      `}</style>
      <div className="admin-dashboard-layout">
        <div className={`mobile-overlay ${isMobileNavOpen ? 'active' : ''}`} onClick={() => setIsMobileNavOpen(false)}></div>
        <aside className={`sidebar glass-effect ${isSidebarCollapsed ? 'collapsed' : ''} ${isMobileNavOpen ? 'mobile-open' : ''}`}>
            <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                <div className="sidebar-header">
                    <div className="sidebar-logo"></div>
                    <span className="sidebar-brand">Admin</span>
                </div>
                <nav className="sidebar-nav">
                    {sidebarNavItems.map(item => (
                         <div key={item.name} 
                            className={`nav-item ${activeMenu === item.name ? 'active' : ''}`}
                            onClick={() => { setActiveMenu(item.name); setIsMobileNavOpen(false); }}
                            title={item.name}>
                           <span className="nav-icon">{item.icon}</span>
                           <span className="nav-text">{item.name}</span>
                         </div>
                    ))}
                    <div className="nav-item nav-item-mobile-logout" onClick={() => alert('Logging out...')}>
                         <span className="nav-icon"><LogOutIcon/></span>
                         <span className="nav-text">Logout</span>
                    </div>
                </nav>
                <div className="sidebar-footer">
                    <div className="nav-item" onClick={() => alert('Logging out...')}>
                         <span className="nav-icon"><LogOutIcon/></span>
                         <span className="nav-text">Logout</span>
                    </div>
                    <button className="sidebar-toggle" onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}>
                        <ChevronLeftIcon />
                    </button>
                </div>
            </div>
        </aside>

        <main className="main-content">
            <div className="dashboard-container">
                <header className="dashboard-header">
                    <div className="header-title">
                        <h1>{activeMenu}</h1>
                        <p>Platform-wide management and insights.</p>
                    </div>
                     <button className="mobile-nav-toggle" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                        <MenuIcon />
                    </button>
                </header>
                {renderContent()}
            </div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
