import React from 'react';

// --- SVG Icons (Lucide-React style) ---
const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
);

const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <path d="M17 11l4 4-4 4"></path>
        <path d="M17 15h7"></path>
    </svg>
);

const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.44a2 2 0 0 0-1.89 1.1A8 8 0 0 0 6 9.5l-.23.23A8 8 0 0 0 4.11 12.33v.34a2 2 0 0 0 1.89 1.89A8 8 0 0 0 9.5 18l.23.23a8 8 0 0 0 2.89 1.66h.44a2 2 0 0 0 2-2v-.44a2 2 0 0 0 1.89-1.1A8 8 0 0 0 18 14.5l.23-.23a8 8 0 0 0 1.66-2.89v-.44a2 2 0 0 0-2-2h-.44a2 2 0 0 0-1.89-1.1A8 8 0 0 0 14.5 6l-.23-.23a8 8 0 0 0-2.89-1.66z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);

const LogOutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
);

const ChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

// --- Mock Data ---
const mockStats = [
    { title: "Active Jobs", value: 12, change: "+3 since last week", color: "#14B8A6" }, // Teal
    { title: "New Applications", value: 345, change: "+15% from last month", color: "#8B5CF6" }, // Violet
    { title: "Hired Candidates", value: 18, change: "Target: 25", color: "#FBBF24" }, // Amber
    { title: "Avg Time to Hire", value: "32 Days", change: "-5 days reduction", color: "#EF4444" }, // Red
];

const mockJobs = [
    { id: 1, title: "Senior Frontend Engineer", location: "Remote (Global)", applications: 85, stage: "Reviewing", date: "2 days ago" },
    { id: 2, title: "Lead DevOps Architect", location: "San Francisco, CA", applications: 42, stage: "Interviewing", date: "5 days ago" },
    { id: 3, title: "Product Marketing Manager", location: "New York, NY", applications: 121, stage: "Screening", date: "1 week ago" },
    { id: 4, title: "Junior Data Analyst", location: "Austin, TX", applications: 210, stage: "Open", date: "2 weeks ago" },
    { id: 5, title: "Cybersecurity Specialist", location: "Remote (UK)", applications: 15, stage: "Closed", date: "3 weeks ago" },
];

const mockCandidates = [
    { id: 1, name: "Alex Chen", role: "Frontend Engineer", status: "Interview 1", score: 92 },
    { id: 2, name: "Sarah Lee", role: "DevOps Architect", status: "Offer Sent", score: 98 },
    { id: 3, name: "Ben Carter", role: "Marketing Manager", status: "Screening", score: 75 },
    { id: 4, name: "Mia Rodriguez", role: "Data Analyst", status: "Rejected", score: 60 },
];

// --- Sub Components ---

const Sidebar = ({ activeTab, setActiveTab, isSidebarOpen, setIsSidebarOpen }) => {
    const navItems = [
        { name: "Dashboard", key: "Dashboard", icon: HomeIcon },
        { name: "Job Postings", key: "JobPostings", icon: BriefcaseIcon },
        { name: "Candidates", key: "Candidates", icon: UsersIcon },
        { name: "Settings", key: "Settings", icon: SettingsIcon },
    ];

    return (
        <nav className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
            {/* Overlay for mobile view, only visible when sidebar is active */}
            {isSidebarOpen && <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>}

            <div className="sidebar-content">
                <div className="sidebar-header">
                    <h1 className="text-xl font-extrabold text-white">ThePlacemate</h1>
                    <p className="text-xs text-gray-500">Recruiter Portal</p>
                </div>
                
                <div className="flex flex-col space-y-2 mt-10">
                    {navItems.map(item => (
                        <a 
                            key={item.key} 
                            href="#" 
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveTab(item.key);
                                setIsSidebarOpen(false); // Close sidebar on selection
                            }}
                            className={`nav-link ${item.key === activeTab ? 'active' : ''}`}
                        >
                            <item.icon />
                            <span>{item.name}</span>
                        </a>
                    ))}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-700/50">
                    <a href="#" className="nav-link logout-link">
                        <LogOutIcon />
                        <span>Log Out</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

const StatCard = ({ title, value, change, color }) => (
    <div className="stat-card">
        <p className="stat-title">{title}</p>
        <h3 className="stat-value" style={{ color: color }}>{value}</h3>
        <p className="stat-change">{change}</p>
        <div className="stat-glow" style={{ '--glow-color': color }}></div>
    </div>
);

const JobRow = ({ title, location, applications, stage, date }) => {
    const stageColor = {
        "Reviewing": "text-yellow-400 bg-yellow-400/10",
        "Interviewing": "text-violet-400 bg-violet-400/10",
        "Screening": "text-sky-400 bg-sky-400/10",
        "Open": "text-teal-400 bg-teal-400/10",
        "Closed": "text-gray-400 bg-gray-400/10"
    }[stage] || "text-gray-400 bg-gray-400/10";

    return (
        <div className="job-row">
            <div className="job-info">
                <h4 className="job-title">{title}</h4>
                <p className="job-location">{location}</p>
            </div>
            <div className="job-detail">
                <p className="job-apps"><strong>{applications}</strong> Apps</p>
                <span className={`job-stage ${stageColor}`}>{stage}</span>
                <p className="job-date">{date}</p>
            </div>
            <button className="view-btn">
                View <ChevronRight />
            </button>
        </div>
    );
};

// --- View Components for Tabs ---

const JobPostingsView = ({ jobs }) => (
    <div className="job-list-card">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">All {jobs.length} Job Postings</h3>
            <button className="cta-button cta-primary">
                <PlusIcon /> Post New Job
            </button>
        </div>
        <div className="job-table">
            {jobs.map((job) => (
                <JobRow key={job.id} {...job} />
            ))}
        </div>
    </div>
);

const CandidatesView = ({ candidates }) => {
    const CandidateRow = ({ name, role, status, score }) => {
        const scoreColor = score > 90 ? "text-teal-400" : score > 70 ? "text-yellow-400" : "text-red-400";
        const statusColor = {
            "Interview 1": "text-violet-400 bg-violet-400/10",
            "Offer Sent": "text-teal-400 bg-teal-400/10",
            "Screening": "text-sky-400 bg-sky-400/10",
            "Rejected": "text-gray-400 bg-gray-400/10",
        }[status] || "text-gray-400 bg-gray-400/10";

        return (
            <div className="candidate-row">
                <div className="candidate-name-info">
                    <span className="candidate-avatar">{name.split(' ').map(n => n[0]).join('')}</span>
                    <div>
                        <h4 className="candidate-name">{name}</h4>
                        <p className="candidate-role">{role}</p>
                    </div>
                </div>
                <div className="candidate-details">
                    <p className={`candidate-score ${scoreColor}`}>Score: {score}</p>
                    <span className={`candidate-status ${statusColor}`}>{status}</span>
                </div>
                <button className="view-btn">
                    Profile <ChevronRight />
                </button>
            </div>
        );
    };

    return (
        <div className="job-list-card">
            <h3 className="text-2xl font-bold mb-6">Pipeline Candidates ({candidates.length})</h3>
            <div className="candidate-table">
                {candidates.map((candidate) => (
                    <CandidateRow key={candidate.id} {...candidate} />
                ))}
            </div>
        </div>
    );
};

const SettingsView = () => (
    <div className="settings-card">
        <h3 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-3">Account & Company Settings</h3>
        
        <div className="settings-section">
            <h4 className="section-title">Company Profile</h4>
            <form className="settings-form">
                <label>Company Name:</label>
                <input type="text" defaultValue="Acme Corp" />
                <label>Billing Email:</label>
                <input type="email" defaultValue="billing@acmecorp.com" />
                <button type="submit" className="save-btn">Save Company Details</button>
            </form>
        </div>
        
        <div className="settings-section mt-8">
            <h4 className="section-title">Security</h4>
            <form className="settings-form">
                <label>Current Password:</label>
                <input type="password" placeholder="Enter current password" />
                <label>New Password:</label>
                <input type="password" placeholder="Enter new password" />
                <button type="submit" className="save-btn">Update Password</button>
            </form>
        </div>
    </div>
);


// --- Main Page Component ---
const RecruiterDashboard = () => {
    const [stats] = React.useState(mockStats);
    const [jobs] = React.useState(mockJobs);
    const [candidates] = React.useState(mockCandidates);
    const [activeTab, setActiveTab] = React.useState('Dashboard'); // Tracks active tab
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false); // State for mobile sidebar

    const renderContent = () => {
        switch (activeTab) {
            case 'Dashboard':
                return (
                    <>
                        <section className="stats-grid">
                            {stats.map((stat, index) => (
                                <StatCard key={index} {...stat} />
                            ))}
                        </section>
                        <section className="job-list-card mt-8">
                            <h3>Recent Activity</h3>
                            <div className="job-table">
                                {/* Show a limited view for the dashboard */}
                                {jobs.slice(0, 3).map((job, index) => (
                                    <JobRow key={index} {...job} />
                                ))}
                            </div>
                            <div className="text-center mt-4">
                                <a 
                                    href="#" 
                                    onClick={(e) => { e.preventDefault(); setActiveTab('JobPostings'); }} 
                                    className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
                                >
                                    View all job postings &rarr;
                                </a>
                            </div>
                        </section>
                    </>
                );
            case 'JobPostings':
                return <JobPostingsView jobs={jobs} />;
            case 'Candidates':
                return <CandidatesView candidates={candidates} />;
            case 'Settings':
                return <SettingsView />;
            default:
                return <p className="text-center text-red-400 mt-20">404: Page not found.</p>;
        }
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');
                
                body {
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    margin: 0;
                    padding: 0;
                    overflow-x: hidden;
                }

                @keyframes animated-gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .dashboard-page {
                    font-family: 'Lexend', sans-serif;
                    background-color: #030712; 
                    color: #F9FAFB;
                    position: relative;
                    background: linear-gradient(-45deg, #030712, #0A111F, #1F2937, #030712);
                    background-size: 400% 400%;
                    animation: animated-gradient 25s ease infinite;
                    min-height: 100vh;
                    display: flex;
                    margin-top:87px;
                    
                }
                
                .grid-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: 
                        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
                    background-size: 50px 50px;
                    z-index: 0;
                }

                /* --- Sidebar Styles --- */
                .sidebar {
                    min-height: 100vh;
                    background-color: #111827;
                    border-right: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 2rem 1.5rem;
                    display: flex;
                    flex-direction: column;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    width: 280px; /* Desktop width */
                }
                
                .sidebar-header {
                    padding-bottom: 1.5rem;
                }

                .nav-link {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 0.75rem 1rem;
                    border-radius: 0.75rem;
                    color: #9CA3AF;
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.2s ease;
                }

                .nav-link:hover {
                    background-color: rgba(255, 255, 255, 0.05);
                    color: #E5E7EB;
                }
                
                .nav-link.active {
                    background: linear-gradient(90deg, #8B5CF6, #9333ea);
                    color: #FFFFFF;
                    box-shadow: 0 5px 15px -5px rgba(139, 92, 246, 0.4);
                }
                
                .nav-link.active svg {
                    color: #FFFFFF !important;
                }
                
                .logout-link {
                    color: #F87171; /* Red-400 */
                }
                .logout-link:hover {
                    background-color: rgba(248, 113, 113, 0.1);
                    color: #FECACA; /* Red-200 */
                }

                /* Mobile Sidebar Handling */
                @media (max-width: 1024px) {
                    .sidebar {
                        position: fixed;
                        height: 100%;
                        left: 0;
                        top: 0;
                        z-index: 1000;
                        transform: translateX(-100%);
                        transition: transform 0.3s ease-in-out;
                        width: 70%; /* Adjust width for mobile */
                        max-width: 280px;
                    }
                    .sidebar-content {
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                    }
                    .sidebar.active {
                        transform: translateX(0);
                    }
                    .sidebar-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.7);
                        z-index: 999;
                    }
                }
                /* Hide on desktop for fixed positioning */
                @media (min-width: 1025px) {
                    .sidebar-overlay { display: none; }
                }

                /* --- Main Content --- */
                .main-area {
                    flex-grow: 1;
                    padding: 2rem;
                    z-index: 10;
                    min-height: 100vh;
                }

                .header-bar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .header-bar h2 {
                    font-size: 1.75rem;
                    font-weight: 700;
                }
                
                .user-info {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                
                .avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 9999px;
                    background-color: #8B5CF6;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 600;
                }
                
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                }

                /* --- Shared Card Styles --- */
                .job-list-card, .settings-card {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1rem;
                    padding: 1.5rem;
                }
                
                /* --- Stat Card Styles --- (unchanged) */
                .stat-card {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1rem;
                    padding: 1.5rem;
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .stat-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                }
                .stat-title { font-size: 0.9rem; font-weight: 500; color: #A1A1AA; margin-bottom: 0.5rem; }
                .stat-value { font-size: 2.25rem; font-weight: 800; margin-bottom: 0.5rem; line-height: 1; }
                .stat-change { font-size: 0.8rem; color: #9CA3AF; }
                .stat-glow {
                    position: absolute; top: -50%; right: -50%; width: 150%; height: 150%; opacity: 0.05;
                    pointer-events: none; background: radial-gradient(circle at center, var(--glow-color) 0%, transparent 70%);
                }
                
                /* --- Job List Styles --- */
                .job-row {
                    display: grid;
                    grid-template-columns: 3fr 2fr 100px;
                    align-items: center;
                    padding: 1rem 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
                .job-row:last-child { border-bottom: none; }
                .job-info { display: flex; flex-direction: column; }
                .job-title { font-size: 1.1rem; font-weight: 600; color: #D1D5DB; }
                .job-location { font-size: 0.85rem; color: #9CA3AF; }
                .job-detail { display: flex; align-items: center; gap: 1rem; }
                .job-apps { font-size: 0.9rem; color: #E5E7EB; }
                .job-stage { padding: 0.25rem 0.6rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; }
                .job-date { font-size: 0.85rem; color: #9CA3AF; min-width: 80px; }

                /* --- Candidate List Styles --- */
                .candidate-row {
                    display: grid;
                    grid-template-columns: 3fr 2fr 100px;
                    align-items: center;
                    padding: 1rem 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
                .candidate-row:last-child { border-bottom: none; }
                .candidate-name-info { display: flex; align-items: center; gap: 1rem; }
                .candidate-avatar {
                    width: 40px; height: 40px; border-radius: 9999px; background-color: #14B8A6;
                    display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;
                }
                .candidate-name { font-size: 1.1rem; font-weight: 600; color: #D1D5DB; }
                .candidate-role { font-size: 0.85rem; color: #9CA3AF; }
                .candidate-details { display: flex; align-items: center; gap: 1rem; }
                .candidate-score { font-weight: 700; font-size: 0.9rem; }
                .candidate-status { padding: 0.25rem 0.6rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; }
                
                /* --- Settings Styles --- */
                .settings-card { padding: 2.5rem; }
                .settings-section {
                    background-color: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 1.5rem;
                    border-radius: 0.75rem;
                }
                .section-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #8B5CF6;
                    margin-bottom: 1.5rem;
                }
                .settings-form label {
                    display: block;
                    font-size: 0.9rem;
                    color: #D1D5DB;
                    margin-top: 1rem;
                    margin-bottom: 0.5rem;
                }
                .settings-form input {
                    width: 100%;
                    padding: 0.75rem 1rem;
                    border-radius: 0.5rem;
                    border: 1px solid #374151;
                    background-color: rgba(255, 255, 255, 0.05);
                    color: #F9FAFB;
                    font-size: 1rem;
                    outline: none;
                }
                .save-btn {
                    background: linear-gradient(90deg, #9333ea, #8b5cf6);
                    color: #FFFFFF;
                    font-weight: 600;
                    padding: 0.75rem 1.5rem;
                    border-radius: 0.5rem;
                    margin-top: 2rem;
                    cursor: pointer;
                    border: none;
                    transition: background 0.3s ease;
                }
                .save-btn:hover {
                    background: linear-gradient(90deg, #a755f7, #9a6fe6);
                }

                /* --- Reusable Button Styles --- */
                .cta-button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    padding: 0.75rem 1.25rem;
                    border-radius: 0.5rem;
                    font-size: 1rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border: 1px solid transparent;
                    cursor: pointer;
                    position: relative; 
                    overflow: hidden;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                .cta-primary {
                    background: linear-gradient(90deg, #9333ea, #8b5cf6); 
                    color: #FFFFFF;
                    box-shadow: 0 10px 20px -5px rgba(139, 92, 246, 0.5);
                }
                .cta-primary:hover {
                    background: linear-gradient(90deg, #a755f7, #9a6fe6);
                    transform: translateY(-1px);
                }
                .view-btn {
                    background: none;
                    border: 1px solid #4B5563;
                    color: #9CA3AF;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    font-weight: 500;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    transition: all 0.2s ease;
                }
                .view-btn:hover {
                    background-color: #8B5CF6;
                    border-color: #8B5CF6;
                    color: #FFFFFF;
                    transform: translateY(-1px);
                }
                
                /* ==================================== */
                /* RESPONSIVENESS UPDATES         */
                /* ==================================== */

                /* 1. Mobile (<= 768px) Layout for Tables and Cards */
                @media (max-width: 768px) {
                    .main-area {
                        padding: 1rem; /* Reduced padding on mobile */
                    }
                    .header-bar h2 {
                        font-size: 1.5rem;
                    }

                    /* Stack Job and Candidate rows */
                    .job-row, .candidate-row {
                        display: flex; 
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 1rem;
                        gap: 0.5rem;
                    }
                    
                    /* Separate details (apps/score/status) onto a new line/section */
                    .job-detail, .candidate-details {
                        display: flex;
                        flex-wrap: wrap;
                        width: 100%;
                        justify-content: space-between;
                        margin-top: 0.5rem;
                        padding-top: 0.5rem;
                        border-top: 1px solid rgba(255, 255, 255, 0.08); /* Separator line */
                    }

                    .job-apps, .candidate-score {
                        flex-grow: 1;
                    }

                    .view-btn {
                        width: 100%; /* Full width button for easy tapping */
                        margin-top: 1rem;
                    }

                    /* Adjust JobPostingsView header */
                    .job-list-card > div:first-child {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .job-list-card > div:first-child h3 {
                        margin-bottom: 1rem;
                    }
                    .cta-button {
                        width: 100%;
                    }
                    .settings-card {
                        padding: 1.5rem;
                    }
                }
                
                /* 2. Extra Small Mobile (<= 500px) Layout for Stats Grid */
                @media (max-width: 500px) {
                    .stats-grid {
                        grid-template-columns: 1fr; /* Force single column on smaller phones */
                    }
                }
                
                .menu-button {
                    background: none;
                    border: none;
                    color: #FFFFFF;
                    cursor: pointer;
                    margin-right: 1rem;
                    display: block;
                    z-index: 10; /* Keep it above content */
                }
                
                /* Hide sidebar button on desktop */
                @media (min-width: 1025px) {
                    .menu-button { display: none; }
                }

                

            `}</style>
            
            <div className="dashboard-page">
                <div className="grid-overlay"></div>
                
                {/* Sidebar */}
                <Sidebar 
                    activeTab={activeTab} 
                    setActiveTab={setActiveTab} 
                    isSidebarOpen={isSidebarOpen} 
                    setIsSidebarOpen={setIsSidebarOpen} 
                />
                
                {/* Main Content Area */}
                <main className="main-area">
                    {/* Header */}
                    <div className="header-bar">
                         <button className="menu-button" onClick={() => setIsSidebarOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                        <h2>{activeTab}</h2>
                        <div className="user-info">
                            <span className="text-sm font-medium text-gray-400 hidden sm:block">Jane Doe, Acme Corp</span>
                            <div className="avatar">JD</div>
                        </div>
                    </div>

                    {/* Render Content Based on Active Tab */}
                    {renderContent()}
                    
                </main>
            </div>
        </>
    );
};

export default RecruiterDashboard;
