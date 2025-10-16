import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Example component showing how to conditionally render based on login state
const ConditionalRenderExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    
    if (token || user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("provider");
    setIsLoggedIn(false);
    navigate("/");
  };

  // Loading state
  if (isLoading) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  // Conditional rendering based on login state
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Conditional Rendering Example</h1>
      
      {isLoggedIn ? (
        // 👆 RENDER THIS WHEN USER IS LOGGED IN
        <LoggedInComponent onLogout={handleLogout} />
      ) : (
        // 👆 RENDER THIS WHEN USER IS NOT LOGGED IN
        <LoggedOutComponent />
      )}
    </div>
  );
};

// Component for logged-in users
const LoggedInComponent = ({ onLogout }) => {
  return (
    <div style={{ 
      background: "#f0f9ff", 
      padding: "2rem", 
      borderRadius: "8px",
      border: "1px solid #0ea5e9"
    }}>
      <h2 style={{ color: "#0369a1" }}>🎉 Welcome Back!</h2>
      <p>You are successfully logged in.</p>
      
      <div style={{ marginTop: "1rem" }}>
        <button 
          onClick={() => window.location.href = "/student_dashboard"}
          style={{
            background: "#3b82f6",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "4px",
            marginRight: "1rem",
            cursor: "pointer"
          }}
        >
          Go to Dashboard
        </button>
        
        <button 
          onClick={onLogout}
          style={{
            background: "#ef4444",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

// Component for logged-out users
const LoggedOutComponent = () => {
  return (
    <div style={{ 
      background: "#fef3c7", 
      padding: "2rem", 
      borderRadius: "8px",
      border: "1px solid #f59e0b"
    }}>
      <h2 style={{ color: "#92400e" }}>🔒 Please Login</h2>
      <p>You need to be logged in to access this content.</p>
      
      <div style={{ marginTop: "1rem" }}>
        <button 
          onClick={() => window.location.href = "/login"}
          style={{
            background: "#3b82f6",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "4px",
            marginRight: "1rem",
            cursor: "pointer"
          }}
        >
          Login
        </button>
        
        <button 
          onClick={() => window.location.href = "/signup"}
          style={{
            background: "#8b5cf6",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default ConditionalRenderExample;
