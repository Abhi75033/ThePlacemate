import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { navigateToDashboard, navigateToLogin } from "../../utils/navigation";
import axios from "axios";
import { BASE_URL } from "../../Config.base_url";
import "./Auth.css";

const AuthCallback = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [status, setStatus] = useState("authenticating");

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Get token & provider from URL
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");
        const provider = params.get("provider");

        if (token) {
          setStatus("success");
          
          // Save token and provider to localStorage
          localStorage.setItem("token", token);
          localStorage.setItem("provider", provider);

          // Fetch user data from backend using the token
          try {
            const response = await axios.get(`${BASE_URL}auth/me`, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
            
            if (response.status === 200 && response.data.user) {
              // Update global auth state with user data
              login(token, response.data.user);
            } else {
              login(token, null);
            }
          } catch (error) {
            // Still login with token, user data will be fetched later
            login(token, null);
          }

          // Show success message briefly
          setTimeout(() => {
            setStatus("redirecting");
            // Redirect to dashboard after successful login
            navigateToDashboard(navigate);
          }, 1500);
        } else {
          setStatus("error");
          // If no token found, redirect back to login after showing error
          setTimeout(() => {
            navigateToLogin(navigate);
          }, 2000);
        }
      } catch (error) {
        console.error("Auth callback error:", error);
        setStatus("error");
        setTimeout(() => {
          navigateToLogin(navigate);
        }, 2000);
      }
    };

    handleAuthCallback();
  }, [navigate, login]);

  const getStatusMessage = () => {
    switch (status) {
      case "authenticating":
        return {
          title: "Authenticating...",
          message: "Please wait while we complete your login.",
          icon: "🤚"
        };
      case "success":
        return {
          title: "Login Successful! 🎉",
          message: "Welcome back! Redirecting to your dashboard...",
          icon: "✅"
        };
      case "redirecting":
        return {
          title: "Redirecting...",
          message: "Taking you to your dashboard now!",
          icon: "🚀"
        };
      case "error":
        return {
          title: "Login Failed ❌",
          message: "Something went wrong. Redirecting to login page...",
          icon: "⚠️"
        };
      default:
        return {
          title: "Processing...",
          message: "Please wait...",
          icon: "⏳"
        };
    }
  };

  const statusInfo = getStatusMessage();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      {/* <!-- From Uiverse.io by Pradeepsaranbishnoi -->  */}
      <center>
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>
          {statusInfo.icon}
        </div>
      </center>
      <br />
      <h2 style={{ 
        color: status === "success" ? "#10b981" : status === "error" ? "#ef4444" : "#3b82f6",
        marginBottom: "1rem"
      }}>
        {statusInfo.title}
      </h2>
      <p style={{ 
        color: "#6b7280",
        fontSize: "1.1rem",
        maxWidth: "400px",
        margin: "0 auto"
      }}>
        {statusInfo.message}
      </p>
      
      {status === "success" && (
        <div style={{ 
          marginTop: "2rem",
          padding: "1rem",
          background: "#f0f9ff",
          borderRadius: "8px",
          border: "1px solid #0ea5e9",
          maxWidth: "300px",
          margin: "2rem auto 0"
        }}>
          <p style={{ margin: 0, color: "#0369a1", fontSize: "0.9rem" }}>
            🎯 You'll be redirected to your dashboard in a moment...
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthCallback;
