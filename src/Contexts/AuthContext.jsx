import React, { createContext, useContext, useState, useEffect } from 'react';
import { BASE_URL } from '../Config.base_url';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Fetch user data from backend
  const fetchUserData = async (token) => {
    try {
      const axios = (await import('axios')).default;
      const url = `${BASE_URL}auth/me`;
      
      const response = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.status === 200 && response.data.user) {
        setUser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        return response.data.user;
      }
    } catch (error) {
      // Silently handle error - user data will be fetched later if needed
    }
    return null;
  };

  // Check authentication status
  const checkAuthStatus = async () => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    
    if (token) {
      setIsLoggedIn(true);
      
      // If we have user data in localStorage, use it
      if (userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (error) {
          // If parsing fails, fetch fresh data
          await fetchUserData(token);
        }
      } else {
        // Try to fetch user data from backend
        await fetchUserData(token);
      }
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
    
    setIsLoading(false);
  };

  // Login function
  const login = (token, userData) => {
    if (token) {
      localStorage.setItem("token", token);
    }
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    }
    
    setIsLoggedIn(true);
    setUser(userData);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("provider");
    
    setIsLoggedIn(false);
    setUser(null);
  };

  // Force refresh auth status
  const refreshAuth = () => {
    checkAuthStatus();
  };

  // Refresh user data from backend
  const refreshUserData = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      await fetchUserData(token);
    }
  };

  // Listen for storage changes (when user logs in from another tab)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'token' || e.key === 'user') {
        // Only check auth status if the value actually changed
        if (e.newValue !== e.oldValue) {
          checkAuthStatus();
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Check auth status on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const value = {
    isLoggedIn,
    isLoading,
    user,
    login,
    logout,
    refreshAuth,
    refreshUserData,
    checkAuthStatus
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
