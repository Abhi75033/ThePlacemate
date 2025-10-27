import React from 'react';
import { useNavigate } from 'react-router-dom';

// Icon for the button
const ArrowRightIcon = () => (
    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
);

// Sparkle Icon for decoration
const AISparkleIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.813 15.904L9 18l-1.813-2.096m-1.38-2.388L3 12l2.809-1.516m1.38-2.388L9 6l1.813 2.096m1.38 2.388L15 12l-2.809 1.516m-1.38 2.388zM16 3l-1.813 2.096m1.38 2.388L21 12l-2.809 1.516m-1.38 2.388L16 18l-1.813-2.096m1.38-2.388L15 12l2.809 1.516m-1.38 2.388z" />
    </svg>
);

const AIInterviewPromo = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Added a subtle grid pattern to the main card background */}
        <div className="relative isolate overflow-hidden bg-indigo-50 shadow-lg rounded-3xl p-6 sm:p-16 md:p-24 lg:flex lg:gap-x-20 lg:items-center lg:p-0 group bg-grid-pattern">
          
          {/* Subtle Shine Effect */}
          <div className="absolute inset-0 z-10 overflow-hidden rounded-3xl">
            <div className="absolute -inset-full animate-shine bg-gradient-to-r from-transparent via-white/50 to-transparent transform -rotate-45 translate-x-full group-hover:translate-x-0"></div>
          </div>

          {/* Decorative Background Elements */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0 opacity-10"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#promo-gradient)" />
            <defs>
              <radialGradient id="promo-gradient">
                <stop stopColor="#7C3AED" />
                <stop offset={1} stopColor="#4F46E5" />
              </radialGradient>
            </defs>
          </svg>

          {/* Added more subtle sparkles for depth */}
          <AISparkleIcon className="absolute top-1/4 left-1/4 w-12 h-12 text-indigo-300 opacity-20 animate-pulse z-0" />
          <AISparkleIcon className="absolute bottom-1/4 right-1/4 w-16 h-16 text-purple-300 opacity-10 animate-pulse delay-500 z-0 transform rotate-45" />
          <AISparkleIcon className="absolute top-1/2 left-1/3 w-8 h-8 text-indigo-300 opacity-20 animate-pulse delay-1000 z-0" />


            {/* Custom Tailwind Animations */}
            {/* FIX: Removed 'jsx' prop from <style> tag. It's not standard React and was causing the warning. */}
            <style>{`
                .animate-shine {
                    animation: shine 3s linear infinite; /* Made shine continuous and slower */
                    animation-delay: 1s;
                }
                @keyframes shine {
                    0% { transform: translateX(-100%) rotate(45deg); }
                    100% { transform: translateX(100%) rotate(45deg); }
                }
                
                /* Subtle floating animation */
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(-12deg); }
                    50% { transform: translateY(-10px) rotate(-10deg); }
                }
                .animate-float-1 {
                    animation: float 6s ease-in-out infinite;
                }
                
                @keyframes float-2 {
                    0%, 100% { transform: translateY(0px) rotate(6deg); }
                    50% { transform: translateY(-10px) rotate(8deg); }
                }
                .animate-float-2 {
                    animation: float-2 7s ease-in-out infinite;
                    animation-delay: 1s; /* Stagger the animation */
                }

                /* Subtle grid pattern */
                .bg-grid-pattern {
                    position: relative;
                }
                .bg-grid-pattern::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: radial-gradient(#6366f1 0.5px, transparent 0.5px);
                    background-size: 20px 20px;
                    background-position: 0 0, 10px 10px;
                    opacity: 0.3;
                    z-index: 0;
                }
                .isolate {
                    isolation: isolate; /* Ensure this element creates a new stacking context */
                }
            `}</style>


          {/* Content */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:pl-24 lg:text-left relative z-20"> {/* Ensure content is on top */}
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Nervous about interviews?
              <br />
              <span className="text-indigo-600">Practice with our AI.</span>
            </h2>
            
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Our AI Enabled Room provides a realistic mock interview experience. Get instant, constructive feedback on your answers and build the confidence to impress any recruiter.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                onClick={()=>navigate('/ai_room')} // This should eventually link to your AI Interview Room page
                className="group inline-flex items-center justify-center bg-indigo-600 text-white font-semibold text-sm sm:text-base py-2.5 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-500"
              >
                Try the AI Interview Room
                <ArrowRightIcon />
              </a>
            </div>
          </div>
          
          {/* Visual placeholder with new animations */}
          <div className="relative mt-16 h-80 sm:h-96 lg:mt-0 w-full max-w-lg lg:max-w-none mx-auto flex items-center justify-center lg:py-24 lg:pr-12 z-10"> {/* Set z-10 here */}
            <div className="relative w-full h-full max-w-md">
              {/* Abstract card 1: Added continuous float animation */}
              <div className="absolute top-0 left-4 sm:left-10 w-48 h-64 lg:w-60 lg:h-80 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-2xl shadow-lg transform -rotate-12 transition-all duration-500 group-hover:rotate-6 group-hover:scale-105 opacity-80 group-hover:opacity-100 animate-float-1"></div>
              
              {/* Abstract card 2: Added continuous float animation */}
              <div className="absolute top-4 sm:top-10 left-0 w-48 h-64 lg:w-60 lg:h-80 bg-gradient-to-br from-white to-indigo-100 rounded-2xl shadow-xl transform rotate-6 transition-all duration-500 group-hover:-rotate-3 group-hover:scale-105 animate-float-2">
                
                {/* Mic icon: Added subtle pulse */}
                <div className="absolute top-6 left-6 w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center shadow-inner animate-pulse">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                  </svg>
                </div>
                
                {/* Abstract lines: Added subtle pulse */}
                <div className="absolute bottom-6 right-6 space-y-2 animate-pulse">
                  <div className="w-24 sm:w-32 h-2 bg-indigo-200 rounded-full"></div>
                  <div className="w-32 sm:w-40 h-2 bg-indigo-200 rounded-full"></div>
                  <div className="w-20 sm:w-24 h-2 bg-indigo-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIInterviewPromo;

