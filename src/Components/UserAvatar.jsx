import React, { useState } from 'react';

const UserAvatar = ({ 
  src, 
  alt = "User Avatar", 
  size = 40, 
  name = "User",
  className = "",
  onClick,
  style = {}
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  // Update imageSrc when src prop changes
  React.useEffect(() => {
    if (src && src !== imageSrc) {
      setImageSrc(src);
      setImageError(false);
      setImageLoaded(false);
    } else if (!src) {
      setImageSrc(null);
      setImageError(false);
      setImageLoaded(false);
    }
  }, [src]);

  // Generate initials from name
  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Generate a color based on name for consistent avatar colors
  const getAvatarColor = (name) => {
    if (!name) return '#3b82f6';
    
    const colors = [
      '#3b82f6', // Blue
      '#10b981', // Green
      '#f59e0b', // Yellow
      '#ef4444', // Red
      '#8b5cf6', // Purple
      '#06b6d4', // Cyan
      '#f97316', // Orange
      '#84cc16', // Lime
      '#ec4899', // Pink
      '#6b7280'  // Gray
    ];
    
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    return colors[Math.abs(hash) % colors.length];
  };

  const avatarStyle = {
    width: size,
    height: size,
    minWidth: size,
    minHeight: size,
    maxWidth: size,
    maxHeight: size,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'all 0.3s ease',
    flexShrink: 0,
    position: 'relative',
    overflow: 'hidden',
    ...style
  };

  const initialsStyle = {
    color: 'white',
    fontSize: size * 0.4,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 1
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // If image failed to load or no src provided, show initials
  if (imageError || !src) {
    return (
      <div
        className={className}
        style={{
          ...avatarStyle,
          backgroundColor: getAvatarColor(name),
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
        onClick={onClick}
        title={name}
      >
        <span style={initialsStyle}>
          {getInitials(name)}
        </span>
      </div>
    );
  }

  // Show image with fallback
  return (
    <div
      className={className}
      style={avatarStyle}
      onClick={onClick}
      title={name}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: imageLoaded ? 'block' : 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2
          }}
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      )}
      
      {/* Loading state */}
      {!imageLoaded && !imageError && (
        <div
          style={{
            ...avatarStyle,
            backgroundColor: '#e5e7eb',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        >
          <div
            style={{
              width: size * 0.3,
              height: size * 0.3,
              border: '2px solid #9ca3af',
              borderTop: '2px solid #3b82f6',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}
          />
        </div>
      )}
      
      {/* Fallback initials (shown when image fails or is loading) */}
      {(!imageLoaded || imageError) && (
        <div
          style={{
            ...avatarStyle,
            backgroundColor: getAvatarColor(name),
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        >
          <span style={initialsStyle}>
            {getInitials(name)}
          </span>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
