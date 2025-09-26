import React from 'react';

// You can re-use your UIIcon component if it's in a shared location,
// or use a simple SVG like this for the arrow.
const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
);


const NotFoundPage = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');
        
        .not-found-body {
            font-family: 'Lexend', sans-serif;
            background-color: #F9FAFB;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            color: #111827;
        }

        .not-found-container {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem;
        }

        .not-found-illustration {
            width: 100%;
            max-width: 400px;
            margin-bottom: 2rem;
        }

        .not-found-heading {
            font-size: 2.25rem;
            font-weight: 700;
            color: #1F2937;
            margin-top: 2rem;
            margin-bottom: 0.75rem;
        }

        .not-found-text {
            font-size: 1.125rem;
            color: #6B7280;
            max-width: 480px;
            margin-bottom: 2.5rem;
            line-height: 1.6;
        }

        .not-found-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            padding: 0.875rem 1.75rem;
            border-radius: 0.75rem;
            background: #4F46E5;
            color: white;
            font-weight: 600;
            font-size: 1rem;
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px -5px rgba(79, 70, 229, 0.5);
        }

        .not-found-button:hover {
            background: #4338CA;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px -5px rgba(79, 70, 229, 0.6);
        }
      `}</style>
      <div className="not-found-body">
        <div className="not-found-container">
            <svg className="not-found-illustration" viewBox="0 0 350 220">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#6D28D9', stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor: '#4F46E5', stopOpacity:1}} />
                    </linearGradient>
                     <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                        <feOffset dx="2" dy="4" result="offsetblur"/>
                        <feComponentTransfer>
                          <feFuncA type="linear" slope="0.2"/>
                        </feComponentTransfer>
                        <feMerge> 
                          <feMergeNode/>
                          <feMergeNode in="SourceGraphic"/> 
                        </feMerge>
                    </filter>
                </defs>
                <g filter="url(#shadow)">
                   <text x="50%" y="130" textAnchor="middle" fill="url(#grad1)" fontFamily="Lexend, sans-serif" fontWeight="800" fontSize="120">4</text>
                   <text x="282" y="130" textAnchor="middle" fill="url(#grad1)" fontFamily="Lexend, sans-serif" fontWeight="800" fontSize="120">4</text>
                    <g transform="translate(175, 80)">
                        <circle cx="0" cy="0" r="50" fill="none" stroke="url(#grad1)" strokeWidth="12" />
                        <line x1="38" y1="38" x2="65" y2="65" stroke="url(#grad1)" strokeWidth="12" strokeLinecap="round" />
                    </g>
                </g>
                <circle cx="40" cy="180" r="8" fill="#A78BFA" />
                <circle cx="310" cy="40" r="12" fill="#C4B5FD" />
                <rect x="290" y="170" width="20" height="20" rx="4" fill="#A78BFA" transform="rotate(45 290 170)"/>
            </svg>
            
            <h1 className="not-found-heading">Oops! Page Not Found</h1>
            <p className="not-found-text">
                The page you're looking for doesn't exist. It might have been moved, deleted, or you may have typed the address incorrectly.
            </p>
            <a href="/" className="not-found-button">
                <ArrowIcon />
                Go to Dashboard
            </a>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;