import { toast } from 'react-toastify';

// Utility function for safe navigation with error handling
export const safeNavigate = (navigate, path, options = {}) => {
  try {
    console.log(`🚀 Navigating to: ${path}`);
    navigate(path, { replace: true, ...options });
  } catch (error) {
    console.error('Navigation error:', error);
    toast.error('Navigation failed. Please try again.');
  }
};

// Utility function for dashboard navigation
export const navigateToDashboard = (navigate, userRole = 'student') => {
  const dashboardPaths = {
    student: '/student_dashboard',
    admin: '/admin_dash',
    hr: '/hr_dashboard',
    bde: '/bde_dashboard'
  };
  
  const dashboardPath = dashboardPaths[userRole] || '/student_dashboard';
  safeNavigate(navigate, dashboardPath);
};

// Utility function for login navigation
export const navigateToLogin = (navigate) => {
  safeNavigate(navigate, '/login');
};

// Utility function for home navigation
export const navigateToHome = (navigate) => {
  safeNavigate(navigate, '/');
};
