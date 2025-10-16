import React, { useState, useEffect } from "react";
import {jwtDecode} from 'jwt-decode'
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL } from "../Config.base_url";
import { useAuth } from "../Contexts/AuthContext";
import UserAvatar from "./UserAvatar";
import LogoutButton from "./LogoutButton";
const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, isLoading, logout, user } = useAuth();




  // --- Icon Components for Sidebar ---
  const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
  const AboutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;
  const CoursesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;
  const PlacementsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
  const RecruitersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
  const TestimonialsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
  const ContactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
  const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;


  const DashboardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>;

  const baseNavLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon /> },
    { name: 'About Us', path: '/about', icon: <AboutIcon /> },
    { name: 'Courses', path: '/courses', icon: <CoursesIcon /> },
    { name: 'Placements', path: '/placements', icon: <PlacementsIcon /> },
    { name: 'Recruiters', path: '/recruiters', icon: <RecruitersIcon /> },
    { name: 'Testimonials', path: '/testimonials', icon: <TestimonialsIcon /> },
    { name: 'Contact', path: '/contact', icon: <ContactIcon /> },
    { name: "Subscribe", path: '/subscribe', icon: "" },
  ];

  // Add Dashboard link after Subscribe when user is logged in
  const navLinks = isLoggedIn 
    ? [...baseNavLinks, { name: 'Dashboard', path: '/student_dashboard', icon: <DashboardIcon /> }]
    : baseNavLinks;



  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeNav = navLinks.find(link => link.path === currentPath);
    if (activeNav) { setActiveLink(activeNav.name); } 
    else if (currentPath === '/' || currentPath === '/index.html') { setActiveLink('Home'); }
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const handleLinkClick = (linkName, event) => {
      event.preventDefault();
      setActiveLink(linkName);
      const link = navLinks.find(l => l.name === linkName);
      if (link) {
        navigate(link.path);
      }
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  }

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
    navigate("/");
  }

  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Lexend:wght@100..900&display=swap');
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      /* Smooth page transitions */
      * {
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
      
      body { 
        margin: 0; 
        font-family: 'Lexend', sans-serif; 
        padding-top: 90px;
        transition: all 0.3s ease;
      }
        .bree-serif-regular { font-family: "Bree Serif", serif; font-weight: 400; font-style: normal; }
        .placemate-header { position: fixed; top: 0; left: 0; width: 100%; padding: 0.75rem 1rem; box-sizing: border-box; z-index: 1000; transition: padding 0.3s ease; }
        .header-nav { background: rgba(255, 255, 255, 0.25); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.18); box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1); max-width: 1400px; margin: 0 auto; border-radius: 9999px; padding: 0.5rem; display: flex; align-items: center; justify-content: space-between; transition: padding 0.3s ease; }
        .logo-container { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; flex-shrink: 0; }
        .logo-icon { width: 2.75rem; height: 2.75rem; background-color: #111827; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); flex-shrink: 0; }
        .logo-icon span { color: white; font-size: 1.125rem; font-weight: bold; }
        .brand-name { font-size: 1.25rem; font-weight: bold; color: #1E3A8A; }
        .tagline { font-size: 0.75rem; color: #4B5563; margin: 0; transition: display 0.3s ease; }
        .nav-links { display: flex; align-items: center; gap: 0.25rem; }
        .nav-links a { padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; text-decoration: none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); color: #1E3A8A; }
        .nav-links a:hover { background-color: rgba(255, 255, 255, 0.5); transform: translateY(-1px); }
        .nav-links a.active { background-color: #60A5FA; color: white; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
        .cta-buttons { display: flex; align-items: center; gap: 0.5rem; }
        .login-btn, .signup-btn { padding: 0.6rem 1.25rem; border-radius: 9999px; font-weight: 600; text-decoration: none; transition: all 0.3s ease; white-space: nowrap; }
        .login-btn { background-color: transparent; color: #1E3A8A; border: 1px solid rgba(30, 64, 138, 0.2); }
        .login-btn:hover { background-color: rgba(255, 255, 255, 0.5); border-color: rgba(30, 64, 138, 0.4); }
        .signup-btn { background-image: linear-gradient(to right, #3B82F6, #8B5CF6); color: white; border: 1px solid transparent; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .signup-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 15px -3px rgba(59, 130, 246, 0.3); }
        .mobile-menu-toggle { display: none; }
        .hamburger-icon { width: 30px; height: 24px; position: relative; }
        .hamburger-icon span { display: block; position: absolute; height: 3px; width: 100%; background: #1E3A8A; border-radius: 3px; opacity: 1; left: 0; transform: rotate(0deg); transition: .25s ease-in-out; }
        .hamburger-icon span:nth-child(1) { top: 0px; }
        .hamburger-icon span:nth-child(2), .hamburger-icon span:nth-child(3) { top: 10px; }
        .hamburger-icon span:nth-child(4) { top: 20px; }
        .mobile-menu-toggle.open .hamburger-icon span:nth-child(1), .mobile-menu-toggle.open .hamburger-icon span:nth-child(4) { top: 10px; width: 0%; left: 50%; }
        .mobile-menu-toggle.open .hamburger-icon span:nth-child(2) { transform: rotate(45deg); }
        .mobile-menu-toggle.open .hamburger-icon span:nth-child(3) { transform: rotate(-45deg); }
        
        .mobile-nav-menu {
            position: fixed; top: 0; right: 0;
            width: 300px; height: 100vh;
            background-color: #FFFFFF;
            box-shadow: -10px 0 30px rgba(0,0,0,0.1);
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
            padding: 1.5rem; box-sizing: border-box;
            display: flex; flex-direction: column;
            z-index: 2000;
            border-left: 1px solid #E5E7EB;
        }
        .mobile-nav-menu.open { transform: translateX(0); }
        .mobile-menu-brand-header { display: flex; align-items: center; gap: 0.75rem; padding-bottom: 1.5rem; margin-top: 3.5rem; border-bottom: 1px solid #E5E7EB; }
        .mobile-nav-links { display: flex; flex-direction: column; gap: 0.5rem; width: 100%; margin-top: 1.5rem; }
        .mobile-nav-links a { font-size: 1rem; font-weight: 500; color: #374151; text-decoration: none; padding: 0.75rem 1rem; border-radius: 0.5rem; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); display: flex; align-items: center; gap: 1rem; }
        .mobile-nav-links a:hover { background-color: #F3F4F6; color: #1E3A8A; transform: translateX(4px); }
        .mobile-nav-links a.active { background-color: #F3F4F6; color: #111827; font-weight: 600; }
        .mobile-user-profile { margin-top: auto; padding-top: 1.5rem; border-top: 1px solid #E5E7EB; display: flex; justify-content: space-between; align-items: center; }
        .user-info { display: flex; align-items: center; gap: 0.75rem; }
        .user-avatar { width: 40px; height: 40px; border-radius: 50%; background-color: #D1D5DB; }
        .user-name { font-weight: 600; color: #111827; }
        .user-email { font-size: 0.875rem; color: #6B7280; }
        .logout-btn { 
          background: none; 
          border: none; 
          cursor: pointer; 
          color: #6B7280; 
          padding: 0.5rem; 
          transition: all 0.3s ease;
        }
        .logout-btn:hover { 
          color: #EF4444; 
          transform: scale(1.1);
        }

        /* --- ENHANCED RESPONSIVE BREAKPOINTS --- */
        
        /* For small laptops and large tablets */
        @media (max-width: 1280px) {
            .nav-links a { padding: 0.5rem 0.8rem; font-size: 0.85rem; }
            .login-btn, .signup-btn { padding: 0.6rem 1.1rem; }
            .tagline { display: none; } /* Hide tagline earlier */
        }

        /* Main breakpoint for switching to mobile menu */
        @media (max-width: 1024px) { 
            .nav-links, .cta-buttons { display: none; } 
            .mobile-menu-toggle { display: block; background: none; border: none; cursor: pointer; z-index: 2001; } 
        }

        /* For smaller tablets */
        @media (max-width: 768px) {
            .brand-name { font-size: 1.125rem; }
            .logo-icon { width: 2.5rem; height: 2.5rem; }
            .logo-icon span { font-size: 1rem; }
            body { padding-top: 80px; }
        }

        /* For mobile phones */
        @media (max-width: 480px) { 
            .placemate-header { padding: 0.5rem; width:100%;} 
            .mobile-nav-menu { width: 100%; border-left: none; } 
            .header-nav { padding: 0.25rem 0.5rem; } 

        }
      `}</style>

      <header className="placemate-header">
        <nav className="header-nav">
          <Link to="/" className="logo-container" onClick={() => handleLinkClick('Home')}>
            <div className="logo-icon"><span>TP</span></div>
            <div>
              <span className="brand-name bree-serif-regular">ThePlacemate</span>
              <p className="tagline">Learn. Build. Earn.</p>
            </div>
          </Link>
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={(e) => handleLinkClick(link.name, e)} 
                className={activeLink === link.name ? 'active' : ''}
              >
                {link.name}
              </Link>
            ))}
          </div>
         {isLoading ? (
  <div className="cta-buttons">
    <div style={{padding: '0.6rem 1.25rem', color: '#1E3A8A'}}>Loading...</div>
  </div>
) : isLoggedIn ? (
  <div className="user-profile" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
    <UserAvatar
      src={user?.profilePicture || "/docs/images/people/profile-picture-5.jpg"}
      name={user?.name || "User"}
      size={40}
      onClick={() => navigate('/student_dashboard')}
      style={{
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        border: '2px solid rgba(255,255,255,0.2)'
      }}
    />
    <LogoutButton 
      onClick={handleLogout}
      variant="default"
      size="medium"
      showText={true}
    />
  </div>
) : (
  <div className="cta-buttons">
    <Link to="/login" className="login-btn">Login</Link>
    <Link to="/signup" className="signup-btn">Signup</Link>
  </div>
)}
          <button className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <div className="hamburger-icon"><span></span><span></span><span></span><span></span></div>
          </button>
        </nav>
      </header>

      <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-brand-header">
            <div className="logo-icon"><span>TP</span></div>
            <div><span className="brand-name bree-serif-regular">ThePlacemate</span></div>
        </div>
        <div className="mobile-nav-links">
            {navLinks.map((link) => (
            <Link 
              key={link.name}  
              to={link.path}
              onClick={(e) => handleLinkClick(link.name, e)} 
              className={activeLink === link.name ? 'active' : ''}
            >
                {link.icon}
                <span>{link.name}</span>
            </Link>
            ))}
        </div>
        {isLoggedIn ? (
          <div className="mobile-user-profile">
              <div className="user-info">
                  <UserAvatar
                    src={user?.profilePicture || "/docs/images/people/profile-picture-5.jpg"}
                    name={user?.name || "User"}
                    size={60}
                    onClick={() => navigate('/')}
                    style={{
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                      border: '2px solid rgba(255,255,255,0.2)'
                      
                    }}
                  />
                  <div>
                      <div className="user-name">Welcome Back, {user?.name || "User"}!</div>
                      <div className="user-email">Click avatar to go to dashboard</div>
                  </div>
              </div>
              <LogoutButton 
                onClick={handleLogout}
                variant="mobile"
                size="medium"
                showText={false}
              />
          </div>
        ) : (
          <div className="mobile-user-profile">
              <div className="user-info">
                  <UserAvatar
                    name="Guest"
                    size={40}
                    style={{
                      backgroundColor: '#e5e7eb',
                      color: '#6b7280'
                    }}
                  />
                  <div>
                      <div className="user-name">Not logged in</div>
                      <div className="user-email">Please login to continue</div>
                  </div>
              </div>
              <Link 
                to="/login"
                style={{
                  color: '#3B82F6',
                  textDecoration: 'none',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#f3f4f6';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'none';
                }}
              >
                  Login
              </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;

