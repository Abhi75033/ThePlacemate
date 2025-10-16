import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location !== displayLocation) {
      setIsTransitioning(true);
      
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsTransitioning(false);
      }, 150); // Half of the transition duration

      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div
      style={{
        opacity: isTransitioning ? 0.7 : 1,
        transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
