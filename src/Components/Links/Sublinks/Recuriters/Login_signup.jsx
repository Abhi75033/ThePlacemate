import React, { useState, useEffect, useRef } from "react";

// --- SVG Icons (Lucide-React style) ---
const MailIcon = () => (
    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"></rect>
        <path d="M22 7l-10 7L2 7"></path>
    </svg>
);

const LockIcon = () => (
    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
);

const UsersIcon = () => (
    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

// --- Main Page Component ---
const RecruiterAuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [company, setCompany] = useState("");
    const canvasRef = useRef(null);
    const [clock, setClock] = useState('');
    const [date, setDate] = useState('');

    // --- Clock and Date Effect ---
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' };
            setClock(now.toLocaleTimeString('en-IN', timeOptions).replace(/:/g, ' : '));
            
            const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
            setDate(now.toLocaleDateString('en-US', dateOptions));
        };
        updateClock();
        const timerId = setInterval(updateClock, 1000);
        return () => clearInterval(timerId);
    }, []);

    // --- Particle Animation Effect ---
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let particles = [];
        const particleCount = window.innerWidth < 768 ? 40 : 80;
        const particleColor = "rgba(192, 132, 252, 0.5)";
        const lineColor = "rgba(192, 132, 252, 0.1)";
        const maxDistance = 150;

        let mouse = { x: null, y: null, radius: 120 };

        const handleMouseMove = (event) => { mouse.x = event.clientX; mouse.y = event.clientY; };
        const handleMouseOut = () => { mouse.x = null; mouse.y = null; };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseOut);

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
                let dirX = Math.random() * 0.4 - 0.2;
                let dirY = Math.random() * 0.4 - 0.2;
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
            particles.forEach((p) => p.update());
            connectParticles();
        }

        const handleResize = () => { resizeCanvas(); initParticles(); };
        window.addEventListener("resize", handleResize);

        resizeCanvas();
        initParticles();
        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseOut);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            alert(`Logging in with: ${email}`);
        } else {
            alert(`Signing up for ${company} with email: ${email}`);
        }
    };

    return (
        <>
            <style>{`
                /* --- Global Styles & Variables --- */
                @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');
                
                :root {
                    --accent-color: #c084fc;
                    --accent-color-strong: #8B5CF6;
                    --background-dark: #020617;
                    --border-color: rgba(192, 132, 252, 0.2);
                }

                body {
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    margin: 0;
                    padding: 0;
                    background-color: var(--background-dark);
                    color: #F9FAFB;
                    overflow: hidden;
                }
                
                #particle-canvas {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
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

                .auth-page {
                    font-family: 'Lexend', sans-serif;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem 1rem;
                    position: relative;
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
                    background: rgba(15, 23, 42, 0.7);
                    border: 1px solid var(--border-color);
                    border-radius: 1.5rem; 
                    padding: 2rem;
                    backdrop-filter: blur(15px);
                    -webkit-backdrop-filter: blur(15px);
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 5px 15px 0px rgba(139, 92, 246, 0.15);
                }

                .auth-card h2 {
                    font-size: 1.8rem;
                    font-weight: 800;
                    color: #FFFFFF;
                    margin: 0 0 0.5rem 0;
                }
                
                .auth-card p {
                    color: #A1A1AA;
                    margin: 0 0 1.5rem 0;
                    font-size: 0.95rem;
                }

                /* --- CLOCK STYLES (NEW) --- */
                .clock-display { 
                    margin: 0 0 1.5rem 0; 
                    text-align: center;
                    border-top: 1px solid var(--border-color);
                    border-bottom: 1px solid var(--border-color);
                    padding: 1rem 0;
                }
                .date-display { color: #94a3b8; font-size: 0.875rem; }
                .time-display {
                    font-family: 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", monospace;
                    font-size: 2.25rem;
                    font-weight: 700;
                    color: #f1f5f9;
                    letter-spacing: 0.05em;
                    transition: font-size 0.3s ease;
                }

                .input-group {
                    margin-bottom: 1.5rem;
                    position: relative;
                }
                
                .input-icon {
                    position: absolute;
                    left: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #6B7280;
                    transition: color 0.2s;
                    pointer-events: none;
                }

                .auth-card input {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 0.9rem 1rem 0.9rem 3rem;
                    border-radius: 0.75rem;
                    border: 1px solid #374151;
                    background-color: rgba(30, 41, 59, 0.8);
                    color: #F9FAFB;
                    font-size: 1rem;
                    outline: none;
                    transition: all 0.2s ease;
                }
                
                .auth-card input:focus {
                    border-color: var(--accent-color-strong);
                    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.5);
                    background-color: rgba(30, 41, 59, 1);
                }

                .input-group:focus-within .input-icon {
                    color: var(--accent-color-strong);
                }
                
                .auth-toggle {
                    text-align: center;
                    margin-top: 1.5rem;
                    font-size: 0.95rem;
                    color: #A1A1AA;
                }
                
                .auth-toggle button {
                    background: none;
                    border: none;
                    color: var(--accent-color-strong);
                    font-weight: 600;
                    cursor: pointer;
                    margin-left: 0.5rem;
                    padding: 0;
                    font-family: 'Lexend', sans-serif;
                }
                
                .auth-toggle button:hover {
                    color: var(--accent-color);
                }

                /* --- NEW BUTTON STYLE FROM UIVERSE --- */
                .uiverse-button {
                    cursor: pointer;
                    font-weight: 700;
                    font-family: 'Lexend', sans-serif;
                    transition: all 0.2s;
                    padding: 10px 20px;
                    border-radius: 100px;
                    background: #cfef00;
                    color: #111827;
                    border: 1px solid transparent;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 15px;
                    width: 100%;
                    box-sizing: border-box; /* Ensures padding is included in width */
                }

                .uiverse-button:hover {
                    background: #fdfdfd;
                }

                .uiverse-button > svg {
                    width: 34px;
                    margin-left: 10px;
                    transition: transform 0.3s ease-in-out;
                }

                .uiverse-button:hover svg {
                    transform: translateX(5px);
                }

                .uiverse-button:active {
                    transform: scale(0.95);
                }

                /* --- RESPONSIVE STYLES --- */
                @media (max-width: 420px) {
                    .auth-card {
                        padding: 1.5rem;
                    }
                    .time-display {
                        font-size: 1.75rem; /* Smaller clock on small screens */
                    }
                    .auth-card h2 {
                        font-size: 1.5rem;
                    }
                }

            `}</style>

      <canvas ref={canvasRef} id="particle-canvas"></canvas>
      <div className="auth-page">
        <div className="grid-overlay"></div>

        <div className="auth-container">
          <div className="auth-card">
            <h2>
              {isLogin ? "Welcome Back, Recruiter!" : "Join ThePlacemate"}
            </h2>
            <p>
              {isLogin
                ? "Log in to manage your job postings and talent pipeline."
                : "Create your recruiter account to start posting jobs today."}
            </p>

            <div className="clock-display">
                <div className="date-display">{date}</div>
                <div className="time-display">{clock}</div>
            </div>

            <form onSubmit={handleSubmit}>
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

              <button className="uiverse-button">
                <span>{isLogin ? "Login" : "Join ThePlacemate"}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 74" height="34" width="34">
                  <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                  <path fill="black" d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"></path>
                </svg>
              </button>
            </form>

            <div className="auth-toggle">
              {isLogin ? (
                <>
                  <span>New to ThePlacemate?</span>
                  <button type="button" onClick={() => setIsLogin(false)}>
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  <span>Already have an account?</span>
                  <button type="button" onClick={() => setIsLogin(true)}>
                    Log In
                  </button>
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