import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const AuthPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const toggleAuthMode = () => {
    setIsLoginMode(prevMode => !prevMode);
  };

  // --- Icon Components ---
  const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
  );
  const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
  );
  const PasswordIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
  );
  const GoogleIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M12.01 5.5c-3.28 0-5.94 2.66-5.94 5.94s2.66 5.94 5.94 5.94c1.72 0 3.09-.67 4.13-1.64l-1.6-1.55c-.5.48-1.34.92-2.53.92-2.16 0-3.92-1.78-3.92-3.95s1.76-3.95 3.92-3.95c1.47 0 2.3.8 2.62 1.83h-2.62v2.2h4.7c.05-.26.08-.54.08-1.06 0-2.89-1.83-4.9-4.78-4.9z"/>
      </svg>
  );
  const FacebookIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.23v2.355H7.332v3.209h2.753v8.196h3.312z"></path></svg>
  );
  const GithubIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61C6.42 15.105 5.58 14.63 5.58 14.63c-1.08-.738.082-.722.082-.722 1.2.085 1.83 1.23 1.83 1.23 1.07 1.83 2.805 1.305 3.49.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.8 24 17.3 24 12 24 5.37 18.627 0 12 0z"/></svg>
  );


  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap');
        
        .auth-page-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          width: 100%;
          font-family: 'Lexend', sans-serif;
          background-color: #f0f4ff;
          background-image: 
            radial-gradient(circle at 15% 50%, #d4dffc, transparent 40%),
            radial-gradient(circle at 85% 30%, #e1d4fc, transparent 40%),
            radial-gradient(circle at 50% 90%, #d4fce7, transparent 40%);
          overflow: hidden;
          padding: 1rem;
          box-sizing: border-box;
        }

        .auth-card {
          width: 100%;
          max-width: 420px;
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.4);
          -webkit-backdrop-filter: blur(30px);
          backdrop-filter: blur(30px);
          border-radius: 1.5rem;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
          text-align: center;
          border: 1.5px solid transparent;
          background-clip: padding-box;
          border-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1)) 1;
          transform: translateY(20px);
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        @keyframes fadeIn {
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .auth-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #1E3A8A;
          margin: 0 0 0.5rem 0;
          letter-spacing: -1px;
        }

        .auth-subtitle {
          font-size: 1rem;
          color: #4B5563;
          margin: 0 0 2rem 0;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          text-align: left;
        }
        
        .name-field-wrapper {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 0.5s ease-in-out;
        }

        .name-field-wrapper.show {
            grid-template-rows: 1fr;
        }

        .name-field-wrapper > div {
            overflow: hidden;
        }
        
        .form-group {
          position: relative;
        }

        .form-group label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.5rem;
          display: block;
        }
        
        .form-icon {
          position: absolute;
          top: 50%;
          left: 1rem;
          transform: translateY(20%);
          color: #9CA3AF;
          pointer-events: none;
        }

        .form-input {
          width: 100%;
          padding: 0.8rem 1rem 0.8rem 3rem;
          border: 1px solid rgba(255, 255, 255, 0.4);
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 0.75rem;
          font-size: 1rem;
          font-family: 'Lexend', sans-serif;
          color: #1E3A8A;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }
        .form-input::placeholder {
            color: #A5B4FC;
        }
        .form-input:focus {
          outline: none;
          border-color: #60A5FA;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
          background-color: #fff;
        }
        .form-input:focus ~ .form-icon {
            color: #3B82F6;
        }

        .auth-button {
          background-image: linear-gradient(to right, #4F46E5, #8B5CF6);
          color: white;
          font-weight: 600;
          font-size: 1rem;
          padding: 0.9rem;
          border-radius: 0.75rem;
          border: none;
          cursor: pointer;
          margin-top: 0.5rem;
          box-shadow: 0 4px 15px -2px rgba(99, 86, 229, 0.3);
          transition: all 0.3s ease;
        }
        .auth-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px -4px rgba(99, 86, 229, 0.4);
        }
        
        /* --- Social Logins --- */
        .separator {
            display: flex;
            align-items: center;
            text-align: center;
            color: #6B7280;
            margin: 1.5rem 0;
        }
        .separator::before,
        .separator::after {
            content: '';
            flex: 1;
            border-bottom: 1px solid #D1D5DB;
        }
        .separator:not(:empty)::before {
            margin-right: .5em;
        }
        .separator:not(:empty)::after {
            margin-left: .5em;
        }

        .social-logins {
            display: flex;
            justify-content: center;
            gap: 1.25rem; /* Increased gap */
        }

        .social-button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 52px; /* Slightly larger */
            height: 52px;
            border: 1px solid #E2E8F0;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            background-color: #fff; /* Default white background */
        }
        
        .social-button:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 16px -4px rgba(31, 38, 135, 0.2);
            border-color: #A5B4FC;
        }
        
        .social-button.google {
            background-color: #ffffff; /* Google Red */
            border-color: #ffffff;
            font-size: 1.5rem ;
        }

        .social-button.facebook {
            background-color: #ffffff;
            border-color: #ffffff;
            font-size: 1.5rem ;
        }
        
        .social-button.github {
            background-color: #ffffff;
            border-color: #ffffff;
            font-size: 1.5rem ;
        }
        
        .toggle-auth {
          margin-top: 1.5rem;
          font-size: 0.9rem;
          color: #4B5563;
        }
        .toggle-auth span {
          color: #4F46E5;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          transition: border-color 0.3s;
        }
        .toggle-auth span:hover {
            border-color: #4F46E5;
        }
      `}</style>
      <div className="auth-page-wrapper">
        <div className="auth-card">
          <h2 className="auth-title">
            {isLoginMode ? 'Welcome Back!' : 'Create an Account'}
          </h2>
          <p className="auth-subtitle">
            {isLoginMode ? 'Login to continue your journey.' : 'Get started with ThePlacemate!'}
          </p>

          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            
            <div className={`name-field-wrapper ${!isLoginMode ? 'show' : ''}`}>
              <div>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <span className="form-icon"><UserIcon /></span>
                  <input className="form-input" type="text" id="name" placeholder="Priya Sharma" required={!isLoginMode} />
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <span className="form-icon"><EmailIcon /></span>
              <input className="form-input" type="email" id="email" placeholder="priya.sharma@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <span className="form-icon"><PasswordIcon /></span>
              <input className="form-input" type="password" id="password" placeholder="••••••••" required />
            </div>

            <button type="submit" className="auth-button">
              {isLoginMode ? 'Login' : 'Create Account'}
            </button>
          </form>

          <div className="separator">OR</div>

          <div className="social-logins">
            <button className="social-button google" aria-label="Continue with Google">
              <FaGoogle />
            </button>
            <button className="social-button facebook" aria-label="Continue with Facebook">
              <FaFacebookF />
            </button>
            <button className="social-button github" aria-label="Continue with Github">
              <FaGithub />
            </button>
          </div>

          <p className="toggle-auth">
            {isLoginMode ? "Don't have an account? " : "Already have an account? "}
            <span onClick={toggleAuthMode}>
              {isLoginMode ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default AuthPage;





