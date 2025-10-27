import React, { useState } from 'react';

// --- SVG Icons for Social Links ---

const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.064.195.621 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.588-7.52 2.588-.49 0-.974-.028-1.45-.086 2.685 1.723 5.874 2.73 9.342 2.73 11.21 0 17.345-9.288 17.345-17.345 0-.265-.006-.528-.018-.79A12.348 12.348 0 0024 4.557z" />
  </svg>
);

const FacebookIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z" />
  </svg>
);

const InstagramIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.227-1.667 4.77-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771 1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.667-4.77 4.919-4.919 1.266.058 1.646.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.305.196-7.22 3.118-7.416 7.416-.058 1.279-.072 1.688-.072 4.947s.014 3.668.072 4.947c.196 4.305 3.118 7.22 7.416 7.416 1.279.058 1.688.072 4.947.072s3.668-.014 4.947-.072c4.305-.196 7.22-3.118 7.416 7.416.058-1.279.072-1.688.072-4.947s-.014-3.668-.072-4.947c-.196-4.305-3.118-7.22-7.416-7.416-1.279-.058-1.688-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
  </svg>
);


/**
 * Helper function for exponential backoff retry strategy.
 * @param {number} maxRetries - Maximum number of retries.
 * @param {Function} fetchFn - The async function to retry (e.g., fetch).
 * @returns {Promise<Response>} - The fetch response.
 */
async function fetchWithBackoff(maxRetries = 5, fetchFn) {
  let delay = 1000; // 1 second
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fetchFn();
    } catch (error) {
      if (i === maxRetries - 1) throw error; // Rethrow last error
      // Do not log retries to the console as errors
      await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
    }
  }
}

/**
 * Fetches a career tip from the Gemini API.
 */
async function fetchCareerTip() {
  const systemPrompt = "You are a senior career advisor for 'ThePlacemate', a platform that helps people land tech jobs. Provide a single, concise, and actionable career tip. The tip should be encouraging and under 200 characters. Focus on topics like resumes, interviews, networking, or skill-building.";
  const userQuery = "Give me one new career tip.";
  const apiKey = ""; // API key will be injected by the environment
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ parts: [{ text: userQuery }] }],
    systemInstruction: {
      parts: [{ text: systemPrompt }]
    },
  };

  const fetchFn = () => fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const response = await fetchWithBackoff(5, fetchFn);

  if (!response.ok) {
    throw new Error(`API call failed with status: ${response.status}`);
  }

  const result = await response.json();
  const candidate = result.candidates?.[0];
  const text = candidate?.content?.parts?.[0]?.text;

  if (text) {
    return text;
  } else {
    throw new Error("Invalid response structure from API.");
  }
}

/**
 * Fetches a simple definition for a tech term from the Gemini API.
 * @param {string} term - The term to define.
 */
async function fetchJargonDefinition(term) {
  if (!term) throw new Error("No term provided.");

  const systemPrompt = "You are a tech industry expert for 'ThePlacemate'. A user will provide a technical term or acronym. Explain it in a single, simple sentence, as if to a beginner. Your response must be 150 characters or less.";
  const userQuery = `Define this term: ${term}`;
  const apiKey = ""; // API key will be injected by the environment
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ parts: [{ text: userQuery }] }],
    systemInstruction: {
      parts: [{ text: systemPrompt }]
    },
  };

  const fetchFn = () => fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const response = await fetchWithBackoff(5, fetchFn);

  if (!response.ok) {
    throw new Error(`API call failed with status: ${response.status}`);
  }

  const result = await response.json();
  const candidate = result.candidates?.[0];
  const text = candidate?.content?.parts?.[0]?.text;

  if (text) {
    return text.replace(/"/g, ''); // Clean up quotes
  } else {
    throw new Error("Invalid response structure from API.");
  }
}


const Footer = () => {
  const [email, setEmail] = useState("");
  const [tip, setTip] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // New state for Jargon Buster
  const [jargonTerm, setJargonTerm] = useState("");
  const [jargonDef, setJargonDef] = useState("");
  const [isJargonLoading, setIsJargonLoading] = useState(false);
  const [jargonError, setJargonError] = useState("");

  const handleGetCareerTip = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTip("");
    setError("");

    try {
      const generatedText = await fetchCareerTip();
      setTip(generatedText);
    } catch (err) {
      console.error(err); // Log the actual error for debugging
      setError("Sorry, couldn't fetch a tip right now. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // New handler for Jargon Buster
  const handleJargonBuster = async (e) => {
    e.preventDefault();
    if (!jargonTerm.trim()) {
      setJargonError("Please enter a term to define.");
      return;
    }
    setIsJargonLoading(true);
    setJargonDef("");
    setJargonError("");

    try {
      const definition = await fetchJargonDefinition(jargonTerm);
      setJargonDef(definition);
    } catch (err) {
      console.error(err);
      setJargonError("Sorry, I couldn't define that term.");
    } finally {
      setIsJargonLoading(false);
    }
  };

  return (
    <>
      {/* Pre-Footer CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-3xl mx-auto text-center py-16 px-6 sm:py-24 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Ready to Launch Your Career?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-indigo-100">
            Join ThePlacemate today and take the first step towards a successful and fulfilling career in tech. Your dream job is waiting.
          </p>
          <a
            href="#"
            className="mt-10 inline-block bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white animate-bounce-on-load"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-gray-900 text-gray-400 font-sans relative overflow-hidden">
        {/* Subtle background gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-75 z-0"></div>
        {/* Animated pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="animate-pulse-light bg-repeat" style={{backgroundImage: 'radial-gradient(#4a5568 0.5px, transparent 0.5px)', backgroundSize: '20px 20px'}}></div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-6 sm:py-24 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
            
            {/* Column 1: Brand Info */}
            <div className="md:col-span-4">
              <h3 className="text-2xl font-bold text-white mb-3 animate-fade-in-up">
                ThePlacemate
              </h3>
              <p className="text-sm leading-relaxed max-w-sm animate-fade-in-up delay-100">
                Crafting meaningful connections between people and places. We turn talent into successful placements.
              </p>
            </div>
            
            {/* Column 2: Platform Links */}
            <div className="md:col-span-2">
              <h3 className="text-base font-semibold text-white mb-5 tracking-wide animate-fade-in-up delay-200">
                Platform
              </h3>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm hover:text-white transition-all duration-300 relative group animate-fade-in-up delay-250">
                  Courses
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
                <a href="#" className="text-sm hover:text-white transition-all duration-300 relative group animate-fade-in-up delay-300">
                  Mentors
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
                <a href="#" className="text-sm hover:text-white transition-all duration-300 relative group animate-fade-in-up delay-350">
                  Recruiters
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
                <a href="#" className="text-sm hover:text-white transition-all duration-300 relative group animate-fade-in-up delay-400">
                  Success Stories
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </div>
            </div>

            {/* Column 3: Company Links & Jargon Buster */}
            <div className="md:col-span-2">
              <h3 className="text-base font-semibold text-white mb-5 tracking-wide animate-fade-in-up delay-450">
                Company
              </h3>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm hover:text-white transition-all duration-300 relative group animate-fade-in-up delay-500">
                  About Us
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
                <a href="#" className="text-sm hover:text-white transition-all duration-300 relative group animate-fade-in-up delay-550">
                  Careers
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
                <a href="#" className="text-sm hover:text-white transition-all duration-300 relative group animate-fade-in-up delay-600">
                  Contact
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
                <a href="#" className="text-sm hover:text-white transition-all duration-3Amethyst 300 relative group animate-fade-in-up delay-650">
                  FAQ
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </div>

              {/* --- NEW: Jargon Buster --- */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-white mb-3 tracking-wide animate-fade-in-up delay-700">
                  ✨ Jargon Buster
                </h4>
                <form className="flex flex-col gap-2 animate-fade-in-up delay-750" onSubmit={handleJargonBuster}>
                  <label htmlFor="jargon-term" className="sr-only">Tech Term</label>
                  <input
                    type="text"
                    name="jargon-term"
                    id="jargon-term"
                    value={jargonTerm}
                    onChange={(e) => setJargonTerm(e.target.value)}
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                    placeholder="e.g. 'API'"
                  />
                  <button
                    type="submit"
                    disabled={isJargonLoading}
                    className="inline-flex items-center justify-center px-3 py-2 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition-all duration-300 disabled:opacity-50"
                  >
                    {isJargonLoading ? (
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      'Define'
                    )}
                  </button>
                </form>
                {/* Display Area for Jargon Definition */}
                <div className="mt-3 min-h-[40px]">
                  {isJargonLoading && (
                    <p className="text-xs text-indigo-300 animate-pulse">
                      Defining...
                    </p>
                  )}
                  {jargonDef && !isJargonLoading && (
                    <div className="p-2 bg-indigo-500/20 border border-indigo-400 rounded-md animate-fade-in-up">
                      <p className="text-xs text-indigo-100 font-medium">{jargonDef}</p>
                    </div>
                  )}
                  {jargonError && !isJargonLoading && (
                    <div className="p-2 bg-red-500/20 border border-red-400 rounded-md animate-fade-in-up">
                      <p className="text-xs text-red-200 font-medium">{jargonError}</p>
                    </div>
                  )}
                </div>
              </div>
              {/* --- End Jargon Buster --- */}

            </div>

            {/* Column 4: AI Career Advisor (Was: Newsletter) */}
            <div className="md:col-span-4">
              <h3 className="text-base font-semibold text-white mb-5 tracking-wide animate-fade-in-up delay-700">
                ✨ AI Career Advisor
              </h3>
              <p className="text-sm mb-4 animate-fade-in-up delay-750">
                Get an instant, AI-powered career tip to boost your job hunt!
              </p>
              <form className="flex w-full max-w-sm animate-fade-in-up delay-800" onSubmit={handleGetCareerTip}>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow w-full bg-gray-800 text-white border border-gray-700 rounded-l-md py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  placeholder="Your email (optional)"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    '✨ Get Tip'
                  )}
                </button>
              </form>

              {/* Display Area for AI Tip, Loading, or Error */}
              <div className="mt-4 min-h-[60px]">
                {isLoading && (
                  <p className="text-sm text-indigo-300 animate-pulse">
                    Generating your personal career tip...
                  </p>
                )}
                {tip && !isLoading && (
                  <div className="p-3 bg-indigo-500/20 border border-indigo-400 rounded-md animate-fade-in-up">
                    <p className="text-sm text-indigo-100 font-medium">{tip}</p>
                  </div>
                )}
                {error && !isLoading && (
                  <div className="p-3 bg-red-500/20 border border-red-400 rounded-md animate-fade-in-up">
                    <p className="text-sm text-red-200 font-medium">{error}</p>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row gap-x-6 gap-y-3 items-center text-sm">
              <p className="animate-fade-in-up delay-850">&copy; {new Date().getFullYear()} ThePlacemate. All rights reserved.</p>
              <div className="flex gap-x-6">
                <a href="#" className="hover:text-white transition-all duration-300 relative group animate-fade-in-up delay-900">
                  Privacy Policy
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
                <a href="#" className="hover:text-white transition-all duration-300 relative group animate-fade-in-up delay-950">
                  Terms of Service
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </div>
            </div>
            <div className="flex gap-5 mt-6 md:mt-0">
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:animate-bounce animate-fade-in-up delay-1000">
                <LinkedInIcon />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:animate-bounce animate-fade-in-up delay-1050">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:animate-bounce animate-fade-in-up delay-1100">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:animate-bounce animate-fade-in-up delay-1150">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

