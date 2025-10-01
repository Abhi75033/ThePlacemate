import React from 'react';

// --- SVG Icons (Lucide-React style) ---
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"></rect>
        <path d="M22 7l-10 7L2 7"></path>
    </svg>
);

const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <path d="M18 8a5 5 0 0 0-2 4h4a2 2 0 0 1 2 2v2"></path>
    </svg>
);

const LogInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
        <polyline points="10 17 15 12 10 7"></polyline>
        <line x1="15" y1="12" x2="3" y2="12"></line>
    </svg>
);

const UserPlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <line x1="20" y1="8" x2="20" y2="14"></line>
        <line x1="23" y1="11" x2="17" y2="11"></line>
    </svg>
);

// --- Main Page Component ---
const RecruiterAuthPage = () => {
    const [isLogin, setIsLogin] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [company, setCompany] = React.useState('');

    // Shared aesthetic styling from JobConfirmationPage
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');
                
                body {
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    margin: 0;
                    padding: 0;
                }

                @keyframes animated-gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .auth-page {
                    font-family: 'Lexend', sans-serif;
                    background-color: #030712; 
                    color: #F9FAFB;
                    overflow: hidden;
                    position: relative;
                    background: linear-gradient(-45deg, #030712, #111827, #1F2937, #030712);
                    background-size: 400% 400%;
                    animation: animated-gradient 20s ease infinite;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem 1rem;
                }
                
                .grid-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: 
                        linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
                    background-size: 50px 50px;
                    z-index: 0;
                }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .auth-container {
                    max-width: 440px;
                    width: 100%;
                    position: relative;
                    z-index: 10; 
                    animation: fadeInUp 0.8s ease-out forwards;
                }

                .auth-card {
                    background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 1.5rem; 
                    padding: 2.5rem;
                    backdrop-filter: blur(15px);
                    -webkit-backdrop-filter: blur(15px);
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 5px 15px 0px rgba(139, 92, 246, 0.15);
                }

                .auth-card h2 {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #FFFFFF;
                    margin-bottom: 0.5rem;
                }
                
                .auth-card p {
                    color: #A1A1AA;
                    margin-bottom: 2rem;
                    font-size: 1rem;
                }

                .input-group {
                    margin-bottom: 1.5rem;
                    position: relative;
                }
                
                .input-group svg {
                    position: absolute;
                    left: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #6B7280;
                    transition: color 0.2s;
                }

                .auth-card input {
                    width: 100%;
                    padding: 0.9rem 1rem 0.9rem 3rem;
                    border-radius: 0.75rem;
                    border: 1px solid #374151;
                    background-color: rgba(255, 255, 255, 0.05);
                    color: #F9FAFB;
                    font-size: 1rem;
                    outline: none;
                    transition: all 0.2s ease;
                }
                
                .auth-card input:focus {
                    border-color: #8B5CF6; /* Violet-500 focus */
                    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.5);
                    background-color: rgba(255, 255, 255, 0.08);
                }

                .input-group:focus-within svg {
                    color: #8B5CF6;
                }
                
                .auth-toggle {
                    display: flex;
                    justify-content: center;
                    margin-top: 1.5rem;
                    font-size: 0.95rem;
                }
                
                .auth-toggle button {
                    background: none;
                    border: none;
                    color: #8B5CF6;
                    font-weight: 600;
                    cursor: pointer;
                    margin-left: 0.5rem;
                    padding: 0;
                    text-decoration: underline;
                    transition: color 0.2s;
                }
                
                .auth-toggle button:hover {
                    color: #a755f7;
                }

                /* --- Reusing Button Styles from Confirmation Page --- */
                .cta-button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    width: 100%;
                    padding: 0.9rem 1.75rem;
                    border-radius: 0.75rem;
                    font-size: 1rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border: 1px solid transparent;
                    cursor: pointer;
                    position: relative; 
                    overflow: hidden;
                    z-index: 10;
                }
                
                /* Primary Button: Vibrant Gradient and Deep Shadow (Violet) */
                .cta-primary {
                    background: linear-gradient(90deg, #9333ea, #8b5cf6); /* Purple/Violet blend */
                    color: #FFFFFF;
                    border: none;
                    box-shadow: 0 10px 30px -5px rgba(139, 92, 246, 0.6), 0 5px 10px -5px rgba(139, 92, 246, 0.2);
                }
                .cta-primary:hover {
                    background: linear-gradient(90deg, #a755f7, #9a6fe6);
                    transform: translateY(-2px);
                    box-shadow: 0 15px 35px -5px rgba(139, 92, 246, 0.7), 0 10px 25px -5px rgba(139, 92, 246, 0.5);
                }
            `}</style>
            
            <div className="auth-page">
                <div className="grid-overlay"></div>
                
                <div className="auth-container">
                    <div className="auth-card">
                        
                        {/* Title and Subtitle */}
                        <h2 className="text-white">{isLogin ? 'Welcome Back!' : 'Join ThePlacemate'}</h2>
                        <p className="text-gray-400">
                            {isLogin 
                                ? 'Log in to manage your job postings and talent pipeline.'
                                : 'Create your recruiter account to start posting jobs today.'
                            }
                        </p>

                        <form onSubmit={(e) => { e.preventDefault(); console.log(isLogin ? 'Logging In...' : 'Signing Up...'); }}>
                            
                            {/* Company Name (Signup only) */}
                            {!isLogin && (
                                <div className="input-group">
                                    <UsersIcon />
                                    <input 
                                        type="text" 
                                        placeholder="Company Name" 
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                        required={!isLogin}
                                    />
                                </div>
                            )}

                            {/* Email Input */}
                            <div className="input-group">
                                <MailIcon />
                                <input 
                                    type="email" 
                                    placeholder="Work Email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Password Input */}
                            <div className="input-group">
                                <LockIcon />
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="cta-button cta-primary">
                                {isLogin ? (
                                    <>
                                        <LogInIcon /> Log In Securely
                                    </>
                                ) : (
                                    <>
                                        <UserPlusIcon /> Create Recruiter Account
                                    </>
                                )}
                            </button>
                        </form>
                        
                        {/* Toggle Link */}
                        <div className="auth-toggle text-center">
                            {isLogin ? (
                                <>
                                    <span>New to ThePlacemate?</span>
                                    <button onClick={() => setIsLogin(false)}>Sign Up</button>
                                </>
                            ) : (
                                <>
                                    <span>Already have an account?</span>
                                    <button onClick={() => setIsLogin(true)}>Log In</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecruiterAuthPage;
