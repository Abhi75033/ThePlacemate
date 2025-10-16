import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../../Config.base_url";
import { useAuth } from "../../Contexts/AuthContext";
import { navigateToDashboard } from "../../utils/navigation";

const AuthPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [validateError, setValidateError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const validateForm = () => {
    const error = {};
    if (!register.name && !isLoginMode) error.name = "Full Name cannot be EMPTY ❗️";
    if (!register.email) error.email = "E-Mail cannot be EMPTY ❗️";
    if (!register.password) error.password = "Password cannot be EMPTY ❗️";
    return error;
  };

  const handleGoogleAuth = () => {
    // This just starts the process. The AuthSuccess component will handle the result.
    window.location.href = `${BASE_URL}oauth/google`;
  };

  const handleGithubAuth = () => {
    window.location.href = `${BASE_URL}oauth/github`;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (Object.keys(error).length === 0) {
      setValidateError({});
      setIsLoading(true);
      
      try {
        const res = await axios.post(
          `${BASE_URL}auth/login`,
          {
            email: register.email,
            password: register.password,
          },
          { withCredentials: true }
        );

        if (res.status === 200) {
          // Show success message
          toast.success("Login successful! Redirecting to dashboard...");
          
          // Update global auth state immediately
          login(null, res.data.user);
          
          // Small delay to show success message, then navigate
          setTimeout(() => {
            navigateToDashboard(navigate);
          }, 1000);
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Login failed ❗️");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setValidateError(error);
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (Object.keys(error).length === 0) {
      setIsLoading(true);
      
      try {
        const resp = await axios.post(`${BASE_URL}auth/signup`, register);
        if (resp.status === 201) {
          toast.success("Account created successfully! Redirecting to dashboard...");
          
          // Update global auth state immediately
          login(null, resp.data.user);
          
          // Navigate to dashboard after successful signup
          setTimeout(() => {
            navigateToDashboard(navigate);
          }, 1000);
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Signup failed ❗️");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setValidateError(error);
    }
  };

  const toggleAuthMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
    setValidateError({}); // Clear errors when switching modes
  };

  // --- Icon Components (Your existing icon code is fine) ---
  const UserIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path> <circle cx="12" cy="7" r="4"></circle> </svg> );
  const EmailIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path> <polyline points="22,6 12,13 2,6"></polyline> </svg> );
  const PasswordIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect> <path d="M7 11V7a5 5 0 0 1 10 0v4"></path> </svg> );
  
  return (
    <>
      <style>{/* Your existing styles are fine */ `
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap');
        
        .auth-page-wrapper { position: relative; display: flex; align-items: center; justify-content: center; min-height: 100vh; width: 100%; font-family: 'Lexend', sans-serif; background-color: #f0f4ff; background-image: radial-gradient(circle at 15% 50%, #d4dffc, transparent 40%), radial-gradient(circle at 85% 30%, #e1d4fc, transparent 40%), radial-gradient(circle at 50% 90%, #d4fce7, transparent 40%); overflow: hidden; padding: 1rem; box-sizing: border-box; }
        .auth-card { width: 100%; max-width: 420px; padding: 2.5rem; background: rgba(255, 255, 255, 0.4); -webkit-backdrop-filter: blur(30px); backdrop-filter: blur(30px); border-radius: 1.5rem; box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15); text-align: center; border: 1.5px solid transparent; background-clip: padding-box; border-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1)) 1; transform: translateY(20px); opacity: 0; animation: fadeIn 0.6s ease-out forwards; }
        @keyframes fadeIn { to { transform: translateY(0); opacity: 1; } }
        .auth-title { font-size: 2.25rem; font-weight: 700; color: #1E3A8A; margin: 0 0 0.5rem 0; letter-spacing: -1px; }
        .auth-subtitle { font-size: 1rem; color: #4B5563; margin: 0 0 2rem 0; }
        .auth-form { display: flex; flex-direction: column; gap: 1.25rem; text-align: left; }
        .name-field-wrapper { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.5s ease-in-out; }
        .name-field-wrapper.show { grid-template-rows: 1fr; }
        .name-field-wrapper > div { overflow: hidden; }
        .form-group { position: relative; }
        .form-group label { font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem; display: block; }
        .form-icon { position: absolute; top: 50%; left: 1rem; transform: translateY(20%); color: #9CA3AF; pointer-events: none; }
        .form-input { width: 100%; padding: 0.8rem 1rem 0.8rem 3rem; border: 1px solid #D1D5DB; background-color: rgba(255, 255, 255, 0.7); border-radius: 0.75rem; font-size: 1rem; font-family: 'Lexend', sans-serif; color: #1E3A8A; transition: all 0.3s ease; box-sizing: border-box; }
        .form-input.is-invalid { border-color: #EF4444; }
        .form-input::placeholder { color: #A5B4FC; }
        .form-input:focus { outline: none; border-color: #60A5FA; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2); background-color: #fff; }
        .form-input:focus ~ .form-icon { color: #3B82F6; }
        .auth-button { background-image: linear-gradient(to right, #4F46E5, #8B5CF6); color: white; font-weight: 600; font-size: 1rem; padding: 0.9rem; border-radius: 0.75rem; border: none; cursor: pointer; margin-top: 0.5rem; box-shadow: 0 4px 15px -2px rgba(99, 86, 229, 0.3); transition: all 0.3s ease; }
        .auth-button:hover { transform: translateY(-3px); box-shadow: 0 8px 20px -4px rgba(99, 86, 229, 0.4); }
        .separator { display: flex; align-items: center; text-align: center; color: #6B7280; margin: 1.5rem 0; }
        .separator::before, .separator::after { content: ''; flex: 1; border-bottom: 1px solid #D1D5DB; }
        .separator:not(:empty)::before { margin-right: .5em; }
        .separator:not(:empty)::after { margin-left: .5em; }
        .social-logins { display: flex; justify-content: center; gap: 1.25rem; }
        .social-button { display: flex; align-items: center; justify-content: center; width: 52px; height: 52px; border: 1px solid #E2E8F0; border-radius: 50%; cursor: pointer; transition: all 0.3s ease; background-color: #fff; font-size: 1.5rem; }
        .social-button:hover { transform: translateY(-4px); box-shadow: 0 8px 16px -4px rgba(31, 38, 135, 0.2); border-color: #A5B4FC; }
        .toggle-auth { margin-top: 1.5rem; font-size: 0.9rem; color: #4B5563; }
        .toggle-auth span { color: #4F46E5; font-weight: 600; cursor: pointer; text-decoration: none; border-bottom: 2px solid transparent; transition: border-color 0.3s; }
        .toggle-auth span:hover { border-color: #4F46E5; }
      `}</style>
      <div className="auth-page-wrapper">
        <div className="auth-card">
          <h2 className="auth-title">
            {isLoginMode ? "Welcome Back!" : "Create an Account"}
          </h2>
          <p className="auth-subtitle">
            {isLoginMode
              ? "Login to continue your journey."
              : "Get started with ThePlacemate!"}
          </p>

          <form className="auth-form" onSubmit={isLoginMode ? handleLogin : handleCreateAccount}>
            <div className={`name-field-wrapper ${!isLoginMode ? "show" : ""}`}>
              <div>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <span className="form-icon"><UserIcon /></span>
                  <input
                    className={`form-input ${validateError.name ? 'is-invalid' : ''}`}
                    onChange={(e) => setRegister({ ...register, name: e.target.value })}
                    type="text"
                    id="name"
                    placeholder="Priya Sharma"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <span className="form-icon"><EmailIcon /></span>
              <input
                className={`form-input ${validateError.email ? 'is-invalid' : ''}`}
                onChange={(e) => setRegister({ ...register, email: e.target.value })}
                type="email"
                id="email"
                placeholder="priya.sharma@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <span className="form-icon"><PasswordIcon /></span>
              <input
                className={`form-input ${validateError.password ? 'is-invalid' : ''}`}
                onChange={(e) => setRegister({ ...register, password: e.target.value })}
                type="password"
                id="password"
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="auth-button">
              {isLoginMode ? "Login" : "Create Account"}
            </button>
          </form>

          <div className="separator">OR</div>

          <div className="social-logins">
            <button
              onClick={handleGoogleAuth}
              className="social-button"
              aria-label="Continue with Google"
            >
              <FaGoogle />
            </button>
            <button
              className="social-button"
              aria-label="Continue with LinkedIn"
            >
              <FaLinkedin />
            </button>
            <button
              onClick={handleGithubAuth}
              className="social-button"
              aria-label="Continue with Github"
            >
              <FaGithub />
            </button>
          </div>

          <p className="toggle-auth">
            {isLoginMode
              ? "Don't have an account? "
              : "Already have an account? "}
            <span onClick={toggleAuthMode}>
              {isLoginMode ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
};

export default AuthPage;