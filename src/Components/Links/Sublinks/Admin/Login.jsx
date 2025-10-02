import React, { useState, useEffect, useRef } from 'react';

// --- SVG Icons for Login Form ---
const MailIcon = () => <svg className="input-icon" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path></svg>;
const LockIcon = () => <svg className="input-icon" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd"></path></svg>;
const EyeIcon = () => <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
const EyeOffIcon = () => <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>;
const SpinnerIcon = () => <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>;

// --- Main Login Page Component ---
const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [clock, setClock] = useState('');
    const [date, setDate] = useState('');
    const canvasRef = useRef(null);

    // --- Clock and Date Effect ---
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' };
            setClock(now.toLocaleTimeString('en-IN', timeOptions).replace(/:/g, ' : '));
            
            const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            setDate(now.toLocaleDateString('en-US', dateOptions));
        };
        updateClock();
        const timerId = setInterval(updateClock, 1000);
        return () => clearInterval(timerId);
    }, []);

    // --- Particle Animation Effect ---
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];
        const particleCount = window.innerWidth < 768 ? 40 : 80;
        const particleColor = 'rgba(192, 132, 252, 0.5)';
        const lineColor = 'rgba(192, 132, 252, 0.1)';
        const maxDistance = 150;

        let mouse = { x: null, y: null, radius: 120 };

        const handleMouseMove = (event) => { mouse.x = event.clientX; mouse.y = event.clientY; };
        const handleMouseOut = () => { mouse.x = null; mouse.y = null; };
        
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor(x, y, dirX, dirY, size) { this.x = x; this.y = y; this.dirX = dirX; this.dirY = dirY; this.size = size; }
            draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false); ctx.fillStyle = particleColor; ctx.fill(); }
            update() {
                if (this.x > canvas.width || this.x < 0) this.dirX = -this.dirX;
                if (this.y > canvas.height || this.y < 0) this.dirY = -this.dirY;
                let dx = mouse.x - this.x; let dy = mouse.y - this.y; let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius + this.size) {
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 3;
                    if (mouse.x > this.x && this.x > this.size * 10) this.x -= 3;
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 3;
                    if (mouse.y > this.y && this.y > this.size * 10) this.y -= 3;
                }
                this.x += this.dirX; this.y += this.dirY; this.draw();
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                let size = Math.random() * 2 + 1;
                let x = Math.random() * (window.innerWidth - size * 2) + size;
                let y = Math.random() * (window.innerHeight - size * 2) + size;
                let dirX = (Math.random() * 0.4) - 0.2;
                let dirY = (Math.random() * 0.4) - 0.2;
                particles.push(new Particle(x, y, dirX, dirY, size));
            }
        }

        function connectParticles() {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = Math.sqrt(Math.pow(particles[a].x - particles[b].x, 2) + Math.pow(particles[a].y - particles[b].y, 2));
                    if (distance < maxDistance) {
                        ctx.strokeStyle = lineColor; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(particles[a].x, particles[a].y); ctx.lineTo(particles[b].x, particles[b].y); ctx.stroke();
                    }
                }
            }
        }

        let animationFrameId;
        function animate() {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            particles.forEach(p => p.update());
            connectParticles();
        }

        const handleResize = () => { resizeCanvas(); initParticles(); };
        window.addEventListener('resize', handleResize);
        
        resizeCanvas();
        initParticles();
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // --- Form Submission Handler ---
    const handleLogin = (event) => {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            if (email === 'admin@example.com' && password === 'password') {
                setLoginSuccess(true);
            } else {
                alert('Invalid credentials. Please try again.');
                setIsLoading(false);
            }
        }, 1500);
    };

    return (
        <>
            <style>{`
                /* --- Global Styles & Variables --- */
                @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap');
                :root {
                    --accent-color: #c084fc;
                    --accent-color-dark: #a855f7;
                    --background-dark: #020617;
                    --border-color: rgba(192, 132, 252, 0.2);
                }
                body {
                    font-family: 'Lexend', sans-serif;
                    background-color: var(--background-dark);
                    color: #e2e8f0;
                    overflow: hidden;
                    margin: 0;
                }
                body::before {
                    content: '';
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle at 15% 50%, #1e1b4b 0%, var(--background-dark) 35%), radial-gradient(circle at 85% 30%, #312e81 0%, var(--background-dark) 25%);
                    z-index: -2;
                }
                
                /* --- Canvas & Page Container --- */
                #particle-canvas {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                }
                .login-container {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                }

                /* --- Login Card & Animation --- */
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px) scale(0.98); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                .login-card {
                    width: 100%;
                    max-width: 28rem;
                    background-color: rgba(15, 23, 42, 0.7);
                    backdrop-filter: blur(16px);
                    border: 1px solid var(--border-color);
                    border-radius: 1rem;
                    padding: 2rem;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 20px rgba(192, 132, 252, 0.1);
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                
                /* --- Login Header & Clock --- */
                .login-header { text-align: center; }
                .login-title {
                    font-size: 1.875rem;
                    font-weight: 700;
                    background-image: linear-gradient(to right, #a78bfa, #22d3ee);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
                .login-subtitle { color: #94a3b8; margin-top: 0.5rem; }
                .clock-display { margin-top: 1.5rem; text-align: center; }
                .date-display { color: #94a3b8; font-size: 0.875rem; }
                .time-display {
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                    font-size: 2.25rem;
                    font-weight: 700;
                    color: #f1f5f9;
                    letter-spacing: 0.05em;
                }
                
                /* --- Form Styles --- */
                .login-form { margin-top: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
                .form-group { margin-bottom: 0.5rem; }
                .form-label { display: block; font-size: 0.875rem; font-weight: 500; color: #cbd5e1; margin-bottom: 0.5rem; }
                .input-wrapper { position: relative; }
                .input-icon { position: absolute; top: 50%; left: 0.75rem; transform: translateY(-50%); height: 1.25rem; width: 1.25rem; color: #94a3b8; pointer-events: none; }
                .form-input {
                    display: block; width: 100%; box-sizing: border-box; border-radius: 0.375rem;
                    padding: 0.625rem 2.5rem; color: #f1f5f9; background-color: rgba(30, 41, 59, 0.8);
                    border: 1px solid var(--border-color); transition: border-color 0.2s ease, box-shadow 0.2s ease;
                }
                .form-input::placeholder { color: #64748b; }
                .form-input:focus { outline: none; border-color: var(--accent-color); box-shadow: 0 0 0 3px rgba(192, 132, 252, 0.4); }
                .password-toggle {
                    position: absolute; top: 50%; right: 0.75rem; transform: translateY(-50%); color: #94a3b8;
                    background: none; border: none; cursor: pointer;
                }
                .password-toggle:hover { color: #f1f5f9; }
                .password-toggle svg { height: 1.25rem; width: 1.25rem; }

                .form-actions { display: flex; align-items: center; justify-content: space-between; }
                .remember-me { display: flex; align-items: center; }
                .custom-checkbox {
                    height: 1rem; width: 1rem; border-radius: 0.25rem; border: 1px solid #475569;
                    background-color: #1e293b; appearance: none; cursor: pointer;
                }
                .custom-checkbox:checked { background-color: var(--accent-color); border-color: var(--accent-color-dark); }
                .remember-me label { margin-left: 0.5rem; font-size: 0.875rem; color: #94a3b8; }
                .forgot-password a { font-size: 0.875rem; font-weight: 600; color: #c084fc; text-decoration: none; }
                .forgot-password a:hover { color: #d8b4fe; }

                /* --- NEW BUTTON STYLE & SPINNER --- */
                .uiverse-button {
                    cursor: pointer; font-weight: 700; font-family: 'Lexend', sans-serif;
                    transition: all 0.2s; padding: 10px 20px; border-radius: 100px;
                    background: #cfef00; color: #111827; border: 1px solid transparent;
                    display: flex; align-items: center; justify-content: center; font-size: 15px;
                    width: 100%; box-sizing: border-box;
                }
                .uiverse-button:hover { background: #fdfdfd; }
                .uiverse-button > svg { width: 34px; margin-left: 10px; transition: transform 0.3s ease-in-out; }
                .uiverse-button:hover svg:not(.spinner) { transform: translateX(5px); }
                .uiverse-button:active { transform: scale(0.95); }
                .uiverse-button:disabled { background: #9ca3af; cursor: not-allowed; }
                .spinner {
                    animation: spin 1s linear infinite;
                    margin-right: 0.75rem;
                    height: 20px;
                    width: 20px;
                    color: #111827;
                }
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

                /* --- Success Message --- */
                .success-message { text-align: center; }
                .success-title { font-size: 1.875rem; font-weight: 700; color: #4ade80; }
                .success-subtitle { color: #cbd5e1; margin-top: 1rem; }
                .success-redirect { color: #94a3b8; margin-top: 0.5rem; }
                
                /* --- RESPONSIVE STYLES --- */
                @media (max-width: 420px) {
                    .login-card {
                        padding: 1.5rem;
                    }
                    .time-display {
                        font-size: 1.75rem; /* Smaller clock on small screens */
                    }
                    .login-title {
                        font-size: 1.5rem;
                    }
                }
            `}</style>

            <canvas ref={canvasRef} id="particle-canvas"></canvas>
            <div className="login-container">
                <div className="login-card">
                    {loginSuccess ? (
                        <div className="success-message">
                            <h1 className="success-title">Login Successful</h1>
                            <p className="success-subtitle">Welcome back, Admin!</p>
                            <p className="success-redirect">Redirecting you to the dashboard...</p>
                        </div>
                    ) : (
                        <>
                            <div className="login-header">
                                <h1 className="login-title">Admin Portal</h1>
                                <p className="login-subtitle">Sign in to manage your platform</p>
                            </div>

                            <div className="clock-display">
                                <div className="date-display">{date}</div>
                                <div className="time-display">{clock}</div>
                            </div>

                            <form onSubmit={handleLogin} className="login-form">
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <div className="input-wrapper">
                                        <MailIcon />
                                        <input id="email" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required className="form-input" placeholder="admin@example.com" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <div className="input-wrapper">
                                        <LockIcon />
                                        <input id="password" name="password" type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} required className="form-input" placeholder="••••••••" />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="password-toggle">
                                            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="form-actions">
                                    <div className="remember-me">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="custom-checkbox" />
                                        <label htmlFor="remember-me">Remember me</label>
                                    </div>
                                    <div className="forgot-password">
                                        <a href="#">Forgot password?</a>
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="uiverse-button" disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                                <SpinnerIcon />
                                                <span>Signing In...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Sign In</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 74" height="34" width="34">
                                                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                                                    <path fill="black" d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"></path>
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default AdminLogin;