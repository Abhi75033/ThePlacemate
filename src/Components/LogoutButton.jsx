import React from 'react';

const LogoutButton = ({ 
  onClick, 
  variant = 'default', // 'default' or 'mobile'
  size = 'medium', // 'small', 'medium', 'large'
  showText = true,
  className = ''
}) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          padding: '0.375rem 0.75rem',
          fontSize: '0.7rem',
          iconSize: '12'
        };
      case 'large':
        return {
          padding: '0.75rem 1.5rem',
          fontSize: '0.875rem',
          iconSize: '16'
        };
      default: // medium
        return {
          padding: '0.5rem 1rem',
          fontSize: '0.75rem',
          iconSize: '14'
        };
    }
  };

  const getVariantStyles = () => {
    if (variant === 'mobile') {
      return {
        padding: '0.75rem',
        minWidth: '44px',
        minHeight: '44px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      };
    }
    
    return {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      borderRadius: '12px'
    };
  };

  const sizeStyles = getSizeStyles();
  const variantStyles = getVariantStyles();

  const baseStyles = {
    background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
    border: 'none',
    color: 'white',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 2px 8px rgba(239, 68, 68, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    ...sizeStyles,
    ...variantStyles
  };

  const LogoutIcon = () => (
    <svg 
      width={sizeStyles.iconSize} 
      height={sizeStyles.iconSize} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ transition: 'transform 0.3s ease' }}
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
  );

  const handleMouseOver = (e) => {
    e.target.style.transform = variant === 'mobile' 
      ? 'translateY(-2px) scale(1.05)' 
      : 'translateY(-2px)';
    e.target.style.boxShadow = '0 4px 16px rgba(239, 68, 68, 0.4)';
    e.target.style.background = 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)';
    
    // Animate the icon
    const icon = e.target.querySelector('svg');
    if (icon) {
      icon.style.transform = 'translateX(2px)';
    }
  };

  const handleMouseOut = (e) => {
    e.target.style.transform = 'translateY(0) scale(1)';
    e.target.style.boxShadow = '0 2px 8px rgba(239, 68, 68, 0.3)';
    e.target.style.background = 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)';
    
    // Reset the icon
    const icon = e.target.querySelector('svg');
    if (icon) {
      icon.style.transform = 'translateX(0)';
    }
  };

  const handleMouseDown = (e) => {
    e.target.style.transform = variant === 'mobile' 
      ? 'translateY(0) scale(0.95)' 
      : 'translateY(0) scale(0.98)';
  };

  const handleMouseUp = (e) => {
    e.target.style.transform = variant === 'mobile' 
      ? 'translateY(-2px) scale(1.05)' 
      : 'translateY(-2px) scale(1)';
  };

  return (
    <button
      onClick={onClick}
      style={baseStyles}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={className}
      aria-label="Logout"
    >
      <LogoutIcon />
      {showText && variant !== 'mobile' && <span>Logout</span>}
      
      {/* Subtle shine effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          transition: 'left 0.5s ease',
          pointerEvents: 'none'
        }}
        onMouseOver={(e) => {
          e.target.style.left = '100%';
        }}
      />
    </button>
  );
};

export default LogoutButton;
