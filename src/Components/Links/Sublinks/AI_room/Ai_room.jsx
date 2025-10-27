import React, { useState, useEffect, useRef } from 'react';

// --- Icon Imports ---
// Using inline SVGs for portability
const Icon = ({ name, className = "w-6 h-6" }) => {
  const icons = {
    menu: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    ),
    close: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    home: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    simulator: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    quiz: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    ),
    resume: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    mentor: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    star: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.31h5.4c.566 0 .791.731.363 1.043l-4.37 3.178a.563.563 0 00-.18.531l1.65 5.330a.563.563 0 01-.84.622l-4.407-3.218a.563.563 0 00-.65 0l-4.407 3.218a.563.563 0 01-.84-.622l1.65-5.33a.563.563 0 00-.18-.532l-4.37-3.177a.563.563 0 01.363-1.043h5.4a.563.563 0 00.475-.31l2.125-5.112z" />
      </svg>
    ),
    briefcase: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.05a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25v-4.05m16.5 0a2.25 2.25 0 00-2.25-2.25h-12a2.25 2.25 0 00-2.25 2.25m16.5 0v-2.25A2.25 2.25 0 0015 9.75h-6a2.25 2.25 0 00-2.25 2.25v2.25m10.5-6.75v-1.5a2.25 2.25 0 00-2.25-2.25h-3a2.25 2.25 0 00-2.25 2.25v1.5m6 0h-6" />
      </svg>
    ),
    list: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12M8.25 17.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    code: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5 0l-4.5 16.5" />
      </svg>
    ),
    send: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.875L5.999 12zm0 0h7.5" />
      </svg>
    ),
    mic: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    spinner: (
      <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    ),
    alert: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    ),
    lightbulb: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-3.75 0m3.75 0a12.06 12.06 0 00-3.75 0m-3.75 0a6.009 6.009 0 01-3.75-5.478m0 0a6.009 6.009 0 003.75-5.478m0 0a5.991 5.991 0 013.75 0m-3.75 0a5.991 5.991 0 003.75 0m-3.75 0a5.991 5.991 0 01-3.75 0m0 0A5.991 5.991 0 013 9m3 9a6.009 6.009 0 01-3.75-5.478M15 9a5.991 5.991 0 00-3.75 0m0 0a5.991 5.991 0 01-3.75 0M3 9a5.991 5.991 0 003.75 0m0 0a5.991 5.991 0 013.75 0m0 0a5.991 5.991 0 003.75 0m0 0a5.991 5.991 0 013.75 0m0 0a6.009 6.009 0 003.75 5.478m0 0a6.009 6.009 0 01-3.75 5.478M15 9a5.991 5.991 0 013.75 0" />
      </svg>
    ),
  };
  return icons[name] || null;
};

// --- Reusable Button Component ---
const AppButton = ({ children, onClick, disabled, className = '', type = 'button' }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`
      px-6 py-3 font-semibold rounded-lg shadow-lg
      bg-gradient-to-r from-blue-600 to-indigo-600 text-white
      hover:from-blue-700 hover:to-indigo-700 hover:scale-105
      disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100
      transition-all duration-300 ease-in-out
      ${className}
    `}
  >
    {children}
  </button>
);

// --- Sidebar Component ---
const Sidebar = ({ page, setPage, isOpen, setIsOpen, isCollapsed, setIsCollapsed }) => {
  const navItems = [
    { name: 'Home', icon: 'home', page: 'home' },
    { name: 'Interview Sim', icon: 'simulator', page: 'simulator' },
    { name: 'Behavioral Prep', icon: 'star', page: 'behavioral' },
    { name: 'Tech Quiz', icon: 'quiz', page: 'quiz' },
    { name: 'Coding Simulator', icon: 'code', page: 'coding' },
    { name: 'Resume Analyzer', icon: 'resume', page: 'resume' },
    { name: 'Job Recommender', icon: 'briefcase', page: 'jobs' },
    { name: 'Q&A Library', icon: 'list', page: 'library' },
    { name: 'AI Career Mentor', icon: 'mentor', page: 'mentor' },
  ];

  return (
    <aside
      className={`
        fixed z-30 inset-y-0 left-0 bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col
        transition-all duration-300 ease-in-out md:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        ${isCollapsed ? 'md:w-20' : 'md:w-64'}
      `}
    >
      <div className="flex items-center justify-between h-20 border-b border-gray-700/50 px-4">
        <div className={`flex items-center overflow-hidden ${isCollapsed ? 'md:w-full md:justify-center' : ''}`}>
          <Icon name="mentor" className="w-8 h-8 text-blue-400 flex-shrink-0" />
          <span className={`ml-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 whitespace-nowrap ${isCollapsed ? 'md:hidden' : 'md:block'}`}>
            PrepRoom AI
          </span>
        </div>
        <button onClick={() => setIsOpen(false)} className="md:hidden p-2 text-gray-400 hover:text-white flex-shrink-0">
          <Icon name="close" />
        </button>
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map(item => (
          <button
            key={item.name}
            title={isCollapsed ? item.name : undefined}
            onClick={() => {
              setPage(item.page);
              setIsOpen(false);
            }}
            className={`
              flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
              ${page === item.page
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'text-gray-300 hover:bg-gray-700/50 hover:text-white hover:scale-105'
              }
              ${isCollapsed ? 'md:justify-center' : ''}
            `}
          >
            <Icon name={item.icon} className={`w-5 h-5 flex-shrink-0 ${isCollapsed ? 'md:mr-0' : 'md:mr-3'}`} />
            <span className={`${isCollapsed ? 'md:hidden' : 'md:block'}`}>{item.name}</span>
          </button>
        ))}
      </nav>
      
      {/* Toggle Button at bottom */}
      <div className="border-t border-gray-700/50 p-4 hidden md:block">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`
            flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
            text-gray-300 hover:bg-gray-700/50 hover:text-white
            ${isCollapsed ? 'justify-center' : ''}
          `}
        >
          <Icon name={isCollapsed ? 'menu' : 'close'} className={`w-5 h-5 flex-shrink-0 ${isCollapsed ? 'md:mr-0' : 'md:mr-3'}`} />
          <span className={`${isCollapsed ? 'md:hidden' : 'md:block'}`}>{isCollapsed ? 'Expand' : 'Collapse'}</span>
        </button>
      </div>
    </aside>
  );
};

// --- Home Dashboard Component ---
const Home = ({ setPage, quizHistory }) => {
  const features = [
    { name: 'AI Interview Simulator', icon: 'simulator', page: 'simulator', desc: 'Practice live interviews with an AI.' },
    { name: 'Coding Simulator', icon: 'code', page: 'coding', desc: 'Get AI feedback on your code logic.' },
    { name: 'Behavioral Prep', icon: 'star', page: 'behavioral', desc: 'Master the STAR method for HR questions.' },
    { name: 'Tech Quiz', icon: 'quiz', page: 'quiz', desc: 'Test your knowledge with AI-generated quizzes.' },
    { name: 'Resume Analyzer', icon: 'resume', page: 'resume', desc: 'Get an ATS-friendly review of your resume.' },
    { name: 'Job Recommender', icon: 'briefcase', page: 'jobs', desc: 'Find job roles that match your skills.' },
  ];

  return (
    <div className="p-6 md:p-10 space-y-10 animate-fade-in-up">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Welcome to your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI PrepRoom</span></h1>
      <p className="text-xl text-gray-600">
        Your all-in-one platform to prepare, practice, and perform.
      </p>

      <PerformanceChart history={quizHistory} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(feature => (
          <button
            key={feature.name}
            onClick={() => setPage(feature.page)}
            className="p-6 bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 text-left"
          >
            <Icon name={feature.icon} className="w-12 h-12 text-indigo-600 mb-5" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.name}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

// --- Performance Chart Component ---
const PerformanceChart = ({ history }) => {
  const data = history.length > 0 ? history.slice(-7) : [
    { name: 'Quiz 1', value: 65 },
    { name: 'Quiz 2', value: 75 },
    { name: 'Quiz 3', value: 70 },
    { name: 'Quiz 4', value: 85 },
  ];
  const maxValue = 100;

  return (
    <div className="w-full h-72 bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-lg border border-white/40 p-6 rounded-2xl shadow-xl">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Quiz Performance Tracker</h3>
      <div className="flex justify-around items-end h-48">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center h-full justify-end">
            <div
              className="w-10 md:w-14 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-t-lg hover:from-blue-600 transition-all"
              style={{ height: `${(item.value / maxValue) * 100}%` }}
              title={`${item.name}: ${item.value}%`}
            ></div>
            <span className="text-xs font-medium text-gray-600 mt-2">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Gemini API Call Functions ---
// Helper function to get API key
function getApiKey() {
  // Check if __API_KEY__ is defined and not an empty string
  if (typeof __API_KEY__ !== 'undefined' && __API_KEY__ !== "") {
    return __API_KEY__;
  }
  // Fallback for local development (if you set it in your .env or similar)
  // In a real app, you'd fetch this from a secure backend
  return ""; // Return empty string if not found
}

const API_KEY = getApiKey();
const API_URL_TEXT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`;
const API_URL_TTS = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${API_KEY}`;


// Exponential backoff for retries
async function fetchWithBackoff(url, options, retries = 3, delay = 1000) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      if (response.status === 429 && retries > 0) {
        // Don't log to console, just wait and retry
        await new Promise(resolve => setTimeout(resolve, delay));
        return fetchWithBackoff(url, options, retries - 1, delay * 2);
      }
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    if (retries > 0) {
      // Don't log to console, just wait and retry for network errors
      await new Promise(resolve => setTimeout(resolve, delay));
      return fetchWithBackoff(url, options, retries - 1, delay * 2);
    }
    throw error; // Throw error after all retries
  }
}


// Function to call Gemini for text generation
async function callGeminiApi(payload) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  };
  const result = await fetchWithBackoff(API_URL_TEXT, options);
  return result.candidates?.[0]?.content?.parts?.[0]?.text || null;
}

// Function to call Gemini for Text-to-Speech
async function callGeminiTtsApi(text) {
  const payload = {
    contents: [{ parts: [{ text: `Say this in a clear, professional, and slightly upbeat tone: ${text}` }] }],
    generationConfig: {
      responseModalities: ["AUDIO"],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: "Puck" } // "Puck" has an upbeat, professional tone
        }
      }
    },
    model: "gemini-2.5-flash-preview-tts"
  };
  
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  };

  const result = await fetchWithBackoff(API_URL_TTS, options);
  const part = result?.candidates?.[0]?.content?.parts?.[0];
  const audioData = part?.inlineData?.data;
  const mimeType = part?.inlineData?.mimeType;

  if (audioData && mimeType && mimeType.startsWith("audio/")) {
    const sampleRate = parseInt(mimeType.match(/rate=(\d+)/)?.[1] || "24000", 10);
    return { audioData, sampleRate };
  } else {
    throw new Error("Invalid TTS response format");
  }
}

// --- Audio Playback Utilities ---
let audioContext = null;

// Function to initialize AudioContext on user gesture
function initAudioContext() {
  if (!audioContext || audioContext.state === 'suspended') {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    audioContext.resume();
  }
}

// Function to decode Base64
function base64ToArrayBuffer(base64) {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

// Function to play PCM audio
async function playPcmAudio(base64Audio, sampleRate) {
  if (!audioContext) {
    console.error("AudioContext not initialized.");
    return;
  }
  try {
    const pcmData = base64ToArrayBuffer(base64Audio);
    const pcm16 = new Int16Array(pcmData);
    
    const audioBuffer = audioContext.createBuffer(1, pcm16.length, sampleRate);
    const channelData = audioBuffer.getChannelData(0);

    // Convert Int16 to Float32
    for (let i = 0; i < pcm16.length; i++) {
      channelData[i] = pcm16[i] / 32768.0;
    }

    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start();
  } catch (error) {
    console.error("Error playing audio:", error);
  }
}

// --- Speech Recognition ---
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
let isSpeechSupported = false;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';
  isSpeechSupported = true;
}

// --- Interview Simulator Component ---
const InterviewSimulator = () => {
  const [jobRole, setJobRole] = useState('React Developer');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Initialize audio on first user interaction
  useEffect(() => {
    document.body.addEventListener('click', initAudioContext, { once: true });
    return () => document.body.removeEventListener('click', initAudioContext);
  }, []);
  
  const addMessage = (role, text) => {
    setMessages(prev => [...prev, { role, text }]);
  };

  const startInterview = async () => {
    if (!jobRole) return;
    setMessages([]);
    setIsLoading(true);
    try {
      const payload = {
        contents: [{ parts: [{ text: `Start a job interview for a ${jobRole} role. Ask me the first question.` }] }],
        systemInstruction: {
          parts: [{ text: "You are a professional, encouraging, and sharp job interviewer. Ask one question at a time. Keep your questions concise." }]
        }
      };
      const responseText = await callGeminiApi(payload);
      if (responseText) {
        addMessage('assistant', responseText);
        const audio = await callGeminiTtsApi(responseText);
        await playPcmAudio(audio.audioData, audio.sampleRate);
      }
    } catch (error) {
      console.error("Error starting interview:", error);
      addMessage('assistant', `Sorry, I ran into an error: ${error.message}`);
    }
    setIsLoading(false);
  };

  const handleSendAnswer = async () => {
    if (!userAnswer.trim()) return;
    const currentAnswer = userAnswer;
    addMessage('user', currentAnswer);
    setUserAnswer('');
    setIsLoading(true);

    try {
      // 1. Get feedback on the answer
      const feedbackPayload = {
        contents: [
          ...messages.map(msg => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.text }]
          })),
          { role: 'user', parts: [{ text: currentAnswer }] },
          { role: 'model', parts: [{ text: "Please provide feedback on my previous answer, then ask the next question." }] }
        ],
        systemInstruction: {
          parts: [{ text: "You are a job interviewer. First, provide brief, constructive feedback on the user's last answer (what was good, what could be improved). Then, ask the next logical interview question. Separate feedback and the next question with a horizontal line (---)." }]
        }
      };
      const responseText = await callGeminiApi(feedbackPayload);
      
      if (responseText) {
        const parts = responseText.split('---');
        const feedback = parts[0] ? parts[0].trim() : null;
        const nextQuestion = parts[1] ? parts[1].trim() : (feedback ? null : responseText.trim()); // Handle if no '---'
        
        if (feedback) {
          addMessage('assistant', feedback);
          const audio = await callGeminiTtsApi(feedback);
          await playPcmAudio(audio.audioData, audio.sampleRate);
        }
        if (nextQuestion) {
          // Add a slight delay before asking the next question
          setTimeout(async () => {
            addMessage('assistant', nextQuestion);
            const audio = await callGeminiTtsApi(nextQuestion);
            await playPcmAudio(audio.audioData, audio.sampleRate);
            setIsLoading(false);
          }, feedback ? 2000 : 500); // Shorter delay if there was no feedback
        } else if (!feedback) {
          // This means only feedback was given (e.g., end of interview)
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        addMessage('assistant', "Hmm, I'm not sure what to say. Let's try something else.");
      }
    } catch (error) {
      console.error("Error handling answer:", error);
      addMessage('assistant', `Sorry, I ran into an error: ${error.message}`);
      setIsLoading(false);
    }
  };

  // --- Speech Recognition Handlers ---
  useEffect(() => {
    if (!recognition) return;

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setUserAnswer(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsRecording(false);
    };
  }, []);
  
  const toggleRecording = () => {
    if (isRecording) {
      recognition.stop();
    } else {
      initAudioContext(); // Ensure audio context is ready
      recognition.start();
    }
  };
  
  return (
    <div className="p-6 md:p-10 h-full flex flex-col animate-fade-in-up">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">AI Interview Simulator</h1>
      
      {/* Setup */}
      <div className="flex items-center gap-4 mb-6">
        <select
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
        >
          <option>React Developer</option>
          <option>Python Developer</option>
          <option>Data Analyst</option>
          <option>Project Manager</option>
          <option>UX/UI Designer</option>
        </select>
        <AppButton onClick={startInterview} disabled={isLoading || messages.length > 0}>
          {isLoading ? <Icon name="spinner" /> : 'Start Interview'}
        </AppButton>
        {messages.length > 0 && (
           <AppButton onClick={startInterview} disabled={isLoading} className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600">
            Restart
          </AppButton>
        )}
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-lg border border-white/40 rounded-2xl shadow-inner p-4 space-y-4 overflow-y-auto min-h-[300px]">
        {messages.length === 0 && (
          <p className="text-gray-500 text-center p-8">Click "Start Interview" to begin.</p>
        )}
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`p-4 rounded-xl max-w-lg shadow-md ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-bl-xl'
                  : 'bg-white text-gray-800 rounded-br-xl'
              }`}
            >
              <pre className="font-inter whitespace-pre-wrap">{msg.text}</pre>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="p-4 rounded-xl max-w-lg shadow-md bg-white text-gray-800 rounded-br-xl">
              <Icon name="spinner" />
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="mt-6 flex items-center gap-3">
        <textarea
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Type your answer here..."
          disabled={isLoading || messages.length === 0}
          className="flex-1 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
          rows="3"
        />
        <button
          onClick={toggleRecording}
          disabled={!isSpeechSupported || isLoading || messages.length === 0}
          title={!isSpeechSupported ? "Speech recognition not supported in this browser" : "Record your answer"}
          className={`p-4 rounded-full shadow-md transition-all h-14 w-14 flex items-center justify-center ${
            !isSpeechSupported
              ? 'bg-gray-400 cursor-not-allowed'
              : isRecording
                ? 'bg-red-500 hover:bg-red-600 scale-105'
                : 'bg-gray-700 hover:bg-gray-800 hover:scale-105'
          } text-white disabled:opacity-50`}
        >
          <Icon name="mic" />
        </button>
        <button
          onClick={handleSendAnswer}
          disabled={!userAnswer.trim() || isLoading || messages.length === 0}
          className="p-4 rounded-full shadow-lg h-14 w-14 flex items-center justify-center
            bg-gradient-to-r from-blue-600 to-indigo-600 text-white
            hover:from-blue-700 hover:to-indigo-700 hover:scale-110
            disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100
            transition-all duration-300 ease-in-out"
        >
          <Icon name="send" className="ml-0.5" /> {/* Nudge icon for centering */}
        </button>
      </div>
      {!isSpeechSupported && (
        <p className="text-red-500 text-sm mt-2">Speech recognition is not supported in this browser. Please type your answers.</p>
      )}
    </div>
  );
};

// --- Tech Quiz Component ---
const TechQuiz = ({ onQuizComplete }) => {
  const [topic, setTopic] = useState('React Hooks');
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Schema for Gemini to generate structured JSON for the quiz
  const quizSchema = {
    type: "ARRAY",
    items: {
      type: "OBJECT",
      properties: {
        "question": { "type": "STRING" },
        "options": {
          "type": "ARRAY",
          "items": { "type": "STRING" },
          "minItems": 4,
          "maxItems": 4
        },
        "correctAnswerIndex": { "type": "INTEGER" },
        "explanation": { "type": "STRING" }
      },
      required: ["question", "options", "correctAnswerIndex", "explanation"]
    }
  };

  const startQuiz = async () => {
    setIsLoading(true);
    setQuestions([]);
    setCurrentQ(0);
    setScore(0);
    setFeedback('');
    setSelectedAnswer(null);
    setIsFinished(false);
    
    try {
      const payload = {
        contents: [{ parts: [{ text: `Generate a 5-question multiple-choice quiz on the topic of "${topic}".` }] }],
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: quizSchema,
        }
      };
      const responseJson = await callGeminiApi(payload);
      const parsedQuiz = JSON.parse(responseJson);
      setQuestions(parsedQuiz);
    } catch (error) {
      console.error("Error generating quiz:", error);
      setFeedback(`Error generating quiz: ${error.message}. Please try again.`);
    }
    setIsLoading(false);
  };
  
  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const correctIndex = questions[currentQ].correctAnswerIndex;
    if (selectedAnswer === correctIndex) {
      setFeedback('Correct! ' + questions[currentQ].explanation);
      setScore(s => s + 1);
    } else {
      setFeedback('Incorrect. ' + questions[currentQ].explanation);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1);
      setSelectedAnswer(null);
      setFeedback('');
    } else {
      // Quiz finished
      setIsFinished(true);
      const finalScore = ((score / questions.length) * 100).toFixed(0);
      onQuizComplete({ name: topic, value: Number(finalScore) });
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 md:p-10 animate-fade-in-up flex flex-col items-center justify-center h-full">
        <Icon name="spinner" className="w-16 h-16 text-indigo-600" />
        <p className="text-gray-600 text-xl mt-4">Generating your quiz on "{topic}"...</p>
      </div>
    );
  }
  
  if (isFinished) {
    return (
      <div className="p-6 md:p-10 animate-fade-in-up flex flex-col items-center justify-center text-center">
         <div className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-lg border border-white/40 p-12 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
          <p className="text-xl text-gray-700 mb-8">
            Your score on "{topic}": 
            <span className="font-bold text-5xl block mt-4 text-indigo-600">
              {((score / questions.length) * 100).toFixed(0)}%
            </span>
          </p>
          <AppButton onClick={startQuiz}>Try Another Topic</AppButton>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 animate-fade-in-up">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Tech Quiz</h1>
      
      {questions.length === 0 ? (
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter a topic (e.g., React Hooks, Python)"
          />
          <AppButton onClick={startQuiz}>Start Quiz</AppButton>
        </div>
      ) : (
        <>
          <p className="text-gray-600 mb-8 text-lg">Question {currentQ + 1} of {questions.length}</p>
          
          <div className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-lg border border-white/40 p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              {questions[currentQ].question}
            </h2>
            <div className="space-y-4">
              {questions[currentQ].options.map((option, index) => (
                <label
                  key={index}
                  className={`
                    flex items-center p-5 border rounded-lg cursor-pointer transition-all
                    bg-white/60 hover:bg-white/100 border-white/50
                    ${selectedAnswer === index
                      ? 'bg-blue-100 border-indigo-500 ring-2 ring-indigo-500 ring-offset-1'
                      : 'border-gray-300 hover:bg-gray-100/50'
                    }
                    ${feedback && (index === questions[currentQ].correctAnswerIndex ? 'bg-green-100 border-green-500' : '')}
                    ${feedback && (selectedAnswer === index && index !== questions[currentQ].correctAnswerIndex ? 'bg-red-100 border-red-500' : '')}
                  `}
                >
                  <input
                    type="radio"
                    name="quizOption"
                    checked={selectedAnswer === index}
                    onChange={() => setSelectedAnswer(index)}
                    disabled={!!feedback}
                    className="w-5 h-5 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="ml-4 text-gray-700 text-base">{option}</span>
                </label>
              ))}
            </div>
            
            {feedback && (
              <div className={`mt-6 p-4 rounded-lg ${feedback.startsWith('Correct') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {feedback}
              </div>
            )}
            
            <div className="mt-8 text-right">
              {feedback ? (
                <AppButton onClick={handleNextQuestion}>
                  {currentQ === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </AppButton>
              ) : (
                <AppButton onClick={handleSubmitAnswer} disabled={selectedAnswer === null}>
                  Submit Answer
                </AppButton>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// --- Resume Analyzer Component ---
const ResumeAnalyzer = () => {
  const [resumeText, setResumeText] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!resumeText || !jobDesc) return;
    setIsLoading(true);
    setAnalysis('');
    
    const systemPrompt = `Act as an expert ATS (Applicant Tracking System) and career coach.
    Analyze the provided RESUME against the JOB DESCRIPTION.
    
    Provide your analysis in HTML format. Use Tailwind classes for styling (e.g., <h3 class="text-xl font-semibold mb-2 text-indigo-700">...</h3>, <ul class="list-disc list-inside mb-4">...</ul>, <li class="text-gray-700">...</li>).
    Include:
    1.  An <h3>ATS Match Score</h3> with a percentage (e.g., <span class="font-bold text-2xl text-indigo-600">75%</span>).
    2.  An <h3>Keyword Analysis</h3> with a <ul> of "Missing Keywords" from the job description.
    3.  An <h3>Improvement Suggestions</h3> <ul> with actionable advice for the summary, skills, and experience sections to better match the job.`;
    
    const userPrompt = `RESUME:
    ${resumeText}
    
    ---
    
    JOB DESCRIPTION:
    ${jobDesc}`;
    
    try {
      const payload = {
        contents: [{ parts: [{ text: userPrompt }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] }
      };
      const responseHtml = await callGeminiApi(payload);
      setAnalysis(responseHtml);
    } catch (error) {
      console.error("Error analyzing resume:", error);
      setAnalysis(`<p class="text-red-500">Error analyzing resume: ${error.message}</p>`);
    }
    setIsLoading(false);
  };
  
  return (
    <div className="p-6 md:p-10 animate-fade-in-up">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Resume Analyzer</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Input Column */}
        <div className="space-y-6">
          <textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            placeholder="Paste your resume text here..."
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
            rows="15"
          />
          <textarea
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            placeholder="Paste the job description here..."
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
            rows="15"
          />
          <AppButton onClick={handleAnalyze} disabled={isLoading || !resumeText || !jobDesc}>
            {isLoading ? <Icon name="spinner" /> : 'Analyze Resume'}
          </AppButton>
        </div>
        
        {/* Analysis Column */}
        <div className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-lg border border-white/40 p-8 rounded-2xl shadow-xl overflow-y-auto min-h-[400px]">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Analysis Report</h2>
          {isLoading && (
            <div className="flex justify-center items-center">
              <Icon name="spinner" className="w-12 h-12 text-indigo-600" />
            </div>
          )}
          <div
            className="prose prose-lg max-w-none prose-h3:font-semibold prose-h3:text-gray-700 prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: analysis || "<p class='text-gray-500'>Your report will appear here.</p>" }}
          />
        </div>
      </div>
    </div>
  );
};

// --- Career Mentor Component ---
const CareerMentor = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hello! I'm your AI Career Mentor. How can I help you today? You can ask me about career paths, learning resources, or resume tips." }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;
    const newMessages = [...messages, { role: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);

    try {
      const payload = {
        contents: newMessages.map(msg => ({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: msg.text }]
        })),
        systemInstruction: {
          parts: [{ text: "You are a friendly, wise, and supportive AI Career Mentor. Your goal is to help users navigate their career. Provide actionable advice, suggest learning paths, and help them with their resume or interview prep." }]
        }
      };
      const responseText = await callGeminiApi(payload);
      setMessages([...newMessages, { role: 'assistant', text: responseText }]);
    } catch (error) {
      console.error("Error with mentor chat:", error);
      setMessages([...newMessages, { role: 'assistant', text: `Sorry, I ran into an error: ${error.message}` }]);
    }
    setIsLoading(false);
  };

  return (
    <div className="p-6 md:p-10 h-full flex flex-col animate-fade-in-up">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">AI Career Mentor</h1>
      
      {/* Chat Area */}
      <div className="flex-1 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-lg border border-white/40 rounded-2xl shadow-inner p-4 space-y-4 overflow-y-auto min-h-[300px]">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`p-4 rounded-xl max-w-xl shadow-md ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-bl-xl'
                  : 'bg-white text-gray-800 rounded-br-xl'
              }`}
            >
              <pre className="font-inter whitespace-pre-wrap">{msg.text}</pre>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="p-4 rounded-xl max-w-lg shadow-md bg-white text-gray-800 rounded-br-xl">
              <Icon name="spinner" />
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="mt-6 flex items-center gap-3">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
          placeholder="Ask your mentor anything..."
          disabled={isLoading}
          className="flex-1 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleSendMessage}
          disabled={!userInput.trim() || isLoading}
          className="p-4 rounded-full shadow-lg h-14 w-14 flex items-center justify-center
            bg-gradient-to-r from-blue-600 to-indigo-600 text-white
            hover:from-blue-700 hover:to-indigo-700 hover:scale-110
            disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100
            transition-all duration-300 ease-in-out"
        >
          <Icon name="send" className="ml-0.5" />
        </button>
      </div>
    </div>
  );
};

// --- Behavioral Prep Component ---
const BehavioralPrep = () => {
  const [topic, setTopic] = useState('Teamwork');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getQuestion = async () => {
    setIsLoading(true);
    setResult('');
    
    const systemPrompt = `You are an expert HR manager.
    Generate one common behavioral interview question based on the topic: ${topic}.
    Then, provide an ideal answer structure using the STAR method (Situation, Task, Action, Result) for that specific question.
    
    Format your response in HTML. Use Tailwind classes.
    - The question should be in an <h3> tag (e.g., <h3 class="text-2xl font-semibold text-gray-800 mb-6">...).</h3>
    - The breakdown should follow with <h4> tags for each STAR component (e.g., <h4 class="text-lg font-semibold text-indigo-700 mt-4 mb-2">Situation:</h4>)
    - Each component should have a <p> tag explaining what the interviewer is looking for.
    - Add a final <div> with a "Pro Tip" (e.g., <div class="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-700">...).</div>`;

    try {
      const payload = {
        contents: [{ parts: [{ text: `Generate a STAR question for: ${topic}` }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] }
      };
      const responseHtml = await callGeminiApi(payload);
      setResult(responseHtml);
    } catch (error) {
      console.error("Error generating question:", error);
      setResult(`<p class="text-red-500">Error generating question: ${error.message}</p>`);
    }
    setIsLoading(false);
  };

  return (
    <div className="p-6 md:p-10 animate-fade-in-up">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Behavioral Prep (STAR Method)</h1>
      <div className="flex items-center gap-4 mb-8">
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
        >
          <option>Teamwork</option>
          <option>Conflict Resolution</option>
          <option>Leadership</option>
          <option>Problem Solving</option>
          <option>Failure / Mistake</option>
        </select>
        <AppButton onClick={getQuestion} disabled={isLoading}>
          {isLoading ? <Icon name="spinner" /> : 'Get STAR Question'}
        </AppButton>
      </div>
      
      <div className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-lg border border-white/40 p-8 rounded-2xl shadow-xl overflow-y-auto min-h-[400px]">
        {isLoading && (
          <div className="flex justify-center items-center">
            <Icon name="spinner" className="w-12 h-12 text-indigo-600" />
          </div>
        )}
        <div
          className="prose prose-lg max-w-none prose-h3:font-semibold prose-h3:text-gray-800 prose-h4:text-indigo-700 prose-p:text-gray-700"
          dangerouslySetInnerHTML={{ __html: result || `<p class='text-gray-500'>Your AI-generated question and STAR breakdown will appear here.</p>` }}
        />
      </div>
    </div>
  );
};

// --- Job Recommender Component ---
const JobRecommender = () => {
  const [skills, setSkills] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getJobs = async () => {
    if (!skills) return;
    setIsLoading(true);
    setRecommendations('');
    
    const systemPrompt = `You are an expert AI Career Counselor and tech recruiter.
    Based on the user's provided skills and experience, recommend 3-5 specific job roles that would be a good fit.
    
    Format your response in HTML. Use Tailwind classes.
    - For each role, provide an <h3> tag with the job title (e.g., <h3 class="text-xl font-semibold text-indigo-700 mb-2">...).</h3>
    - Below each title, provide a <p> tag explaining *why* this is a good match based on their skills.
    - Provide a <ul> of "Key Skills That Match".
    - Provide a <ul> of "Areas to Improve" for this role.
    - Separate each role recommendation with an <hr class="my-6">.`;
    
    try {
      const payload = {
        contents: [{ parts: [{ text: `Here are my skills/resume: ${skills}` }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] }
      };
      const responseHtml = await callGeminiApi(payload);
      setRecommendations(responseHtml);
    } catch (error) {
      console.error("Error recommending jobs:", error);
      setRecommendations(`<p class="text-red-500">Error recommending jobs: ${error.message}</p>`);
    }
    setIsLoading(false);
  };
  
  return (
    <div className="p-6 md:p-10 animate-fade-in-up">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">AI Job Recommender</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Input Column */}
        <div className="space-y-6">
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Paste your skills list or full resume text here..."
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
            rows="20"
          />
          <AppButton onClick={getJobs} disabled={isLoading || !skills}>
            {isLoading ? <Icon name="spinner" /> : 'Find My Job Roles'}
          </AppButton>
        </div>
        
        {/* Recommendations Column */}
        <div className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-lg border border-white/40 p-8 rounded-2xl shadow-xl overflow-y-auto min-h-[400px]">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Recommended Roles</h2>
          {isLoading && (
            <div className="flex justify-center items-center">
              <Icon name="spinner" className="w-12 h-12 text-indigo-600" />
            </div>
          )}
          <div
            className="prose prose-lg max-w-none prose-h3:font-semibold prose-h3:text-indigo-700 prose-p:text-gray-700 prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: recommendations || "<p class='text-gray-500'>Your personalized job recommendations will appear here.</p>" }}
          />
        </div>
      </div>
    </div>
  );
};

// --- Question Library Component ---
const QuestionLibrary = () => {
  const [topic, setTopic] = useState('Data Structures');
  const [questions, setQuestions] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getQuestions = async () => {
    if (!topic) return;
    setIsLoading(true);
    setQuestions('');
    
    const systemPrompt = `You are an expert interviewer for a top tech company.
    Generate a curated list of 10-15 interview questions for the topic: ${topic}.
    
    Format your response in HTML. Use Tailwind classes.
    - Create three sections: <h3 class="text-xl font-semibold text-indigo-700 mt-4 mb-2">Easy</h3>, <h3 class="text-xl font-semibold text-indigo-700 mt-4 mb-2">Medium</h3>, and <h3 class="text-xl font-semibold text-indigo-700 mt-4 mb-2">Hard</h3>.
    - Under each section, provide an <ol class="list-decimal list-inside space-y-2"> with the questions as <li> items.
    - Add a final "Pro Tip" in a <div> (e.g., <div class="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-700">...).</div>`;
    
    try {
      const payload = {
        contents: [{ parts: [{ text: `Generate interview questions for: ${topic}` }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] }
      };
      const responseHtml = await callGeminiApi(payload);
      setQuestions(responseHtml);
    } catch (error) {
      console.error("Error generating questions:", error);
      setQuestions(`<p class="text-red-500">Error generating questions: ${error.message}</p>`);
    }
    setIsLoading(false);
  };
  
  return (
    <div className="p-6 md:p-10 animate-fade-in-up">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Interview Q&A Library</h1>
      <div className="flex items-center gap-4 mb-8">
        <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter a topic (e.g., Data Structures, React)"
          />
        <AppButton onClick={getQuestions} disabled={isLoading}>
          {isLoading ? <Icon name="spinner" /> : 'Get Questions'}
        </AppButton>
      </div>
      
      <div className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-lg border border-white/40 p-8 rounded-2xl shadow-xl overflow-y-auto min-h-[400px]">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Questions for "{topic}"</h2>
        {isLoading && (
          <div className="flex justify-center items-center">
            <Icon name="spinner" className="w-12 h-12 text-indigo-600" />
          </div>
        )}
        <div
          className="prose prose-lg max-w-none prose-h3:font-semibold prose-h3:text-indigo-700 prose-ol:text-gray-700"
          dangerouslySetInnerHTML={{ __html: questions || `<p class='text-gray-500'>Your curated question list will appear here.</p>` }}
        />
      </div>
    </div>
  );
};

// --- Coding Simulator Component (UPDATED with Filters) ---
const CodingSimulator = () => {
  const [language, setLanguage] = useState('Python');
  const [topic, setTopic] = useState('Array');
  const [difficulty, setDifficulty] = useState('Medium'); // New state
  const [company, setCompany] = useState('General'); // New state
  const [problem, setProblem] = useState('');
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState('');
  const [hint, setHint] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isHintLoading, setIsHintLoading] = useState(false);

  const getProblem = async () => {
    setIsLoading(true);
    setProblem('');
    setFeedback('');
    setHint('');
    setCode('');
    
    const systemPrompt = `You are a FAANG interviewer.
    Generate one LeetCode-style coding problem.
    The problem should be for a "${company}" interview (use "General" if not a specific company).
    The difficulty must be "${difficulty}".
    The problem should focus on the topic of "${topic}" and be solvable in ${language}.
    
    Format your response in HTML. Use Tailwind classes.
    - Provide an <h3> tag with the problem title.
    - Provide a <p> tag with the problem description.
    - Provide one or two <pre class="bg-gray-100 p-3 rounded-md text-sm"><code> tags with examples.`;
    
    const userPrompt = `Generate a coding problem with these specs:
    - Language: ${language}
    - Topic: ${topic}
    - Difficulty: ${difficulty}
    - Company: ${company}`;

    try {
      const payload = {
        contents: [{ parts: [{ text: userPrompt }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] }
      };
      const responseHtml = await callGeminiApi(payload);
      setProblem(responseHtml);
    } catch (error) {
      console.error("Error generating problem:", error);
      setProblem(`<p class="text-red-500">Error generating problem: ${error.message}</p>`);
    }
    setIsLoading(false);
  };
  
  const analyzeCode = async () => {
    if (!code || !problem) return;
    setIsLoading(true);
    setFeedback('');
    
    const systemPrompt = `You are a Senior Software Engineer acting as a code reviewer.
    The user has provided a coding problem and their solution in ${language}.
    Analyze their code logic *without running it*.
    
    Format your feedback in HTML. Use Tailwind classes.
    1.  An <h3>Overall Logic</h3> section: Is their approach correct?
    2.  An <h3>Efficiency (Big O)</h3> section: Analyze the time and space complexity.
    3.  An <h3>Edge Cases</h3> section: Did they miss any edge cases (e.g., empty arrays, nulls)?
    4.  An <h3>Optimization</h3> section: How could this code be improved or made more idiomatic to ${language}?`;
      
    const userPrompt = `THE PROBLEM:
    ${problem.replace(/<[^>]*>?/gm, '')} // Strip HTML tags for context
    
    ---
    
    MY SOLUTION (${language}):
    ${code}`;
    
    try {
      const payload = {
        contents: [{ parts: [{ text: userPrompt }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] }
      };
      const responseHtml = await callGeminiApi(payload);
      setFeedback(responseHtml);
    } catch (error) {
      console.error("Error analyzing code:", error);
      setFeedback(`<p class="text-red-500">Error analyzing code: ${error.message}</p>`);
    }
    setIsLoading(false);
  };

  const getHint = async () => {
    if (!problem) return;
    setIsHintLoading(true);
    setHint('');

    const systemPrompt = `You are a helpful teaching assistant. The user is stuck on a coding problem. Provide a single, concise hint (1-2 sentences) to point them in the right direction without giving away the full solution.`;
    
    const userPrompt = `THE PROBLEM:
    ${problem.replace(/<[^>]*>?/gm, '')} // Strip HTML tags for context
    
    Please give me a small hint.`;

    try {
      const payload = {
        contents: [{ parts: [{ text: userPrompt }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] }
      };
      const responseText = await callGeminiApi(payload);
      setHint(responseText);
    } catch (error) {
      console.error("Error getting hint:", error);
      setHint(`Sorry, I ran into an error getting your hint: ${error.message}`);
    }
    setIsHintLoading(false);
  };

  return (
    <div className="p-6 md:p-10 animate-fade-in-up">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Coding Logic Simulator</h1>
      
      {/* --- UPDATED FILTERS --- */}
      <div className="flex flex-wrap items-center gap-4 mb-8 bg-white/50 p-4 rounded-lg shadow">
        <label className="flex flex-col">
          <span className="text-xs font-medium text-gray-600 mb-1">Company</span>
          <select
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
          >
            <option>General</option>
            <option>Google</option>
            <option>Amazon</option>
            <option>Meta</option>
            <option>Microsoft</option>
            <option>Netflix</option>
            <option>Apple</option>
          </select>
        </label>
        
        <label className="flex flex-col">
          <span className="text-xs font-medium text-gray-600 mb-1">Difficulty</span>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </label>
        
        <label className="flex flex-col">
          <span className="text-xs font-medium text-gray-600 mb-1">Topic</span>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
          >
            <option>Array</option>
            <option>String</option>
            <option>Hash Map</option>
            <option>Linked List</option>
            <option>Tree</option>
            <option>Graph</option>
            <option>Dynamic Programming</option>
            <option>Sorting</option>
            <option>Stack / Queue</option>
          </select>
        </label>
        
        <label className="flex flex-col">
          <span className="text-xs font-medium text-gray-600 mb-1">Language</span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
          >
            <option>Python</option>
            <option>JavaScript</option>
            <option>Java</option>
            <option>C++</option>
            <option>C#</option>
            <option>Go</option>
            <option>Ruby</option>
            <option>Swift</option>
            <option>Kotlin</option>
            <option>TypeScript</option>
            <option>SQL</option>
          </select>
        </label>
        
        <AppButton onClick={getProblem} disabled={isLoading} className="self-end">
          {isLoading && !problem ? <Icon name="spinner" /> : 'Get New Problem'}
        </AppButton>
      </div>
      {/* --- END OF UPDATED FILTERS --- */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Problem & Code Editor */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-lg border border-white/40 p-6 rounded-2xl shadow-xl min-h-[250px] overflow-y-auto max-h-[40vh]">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 sticky top-0 bg-white/50 backdrop-blur-sm -mt-6 -mx-6 pt-6 px-6 pb-4">Problem</h2>
            {isLoading && !problem && (
              <div className="flex justify-center items-center">
                <Icon name="spinner" className="w-10 h-10 text-indigo-600" />
              </div>
            )}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: problem || `<p class='text-gray-500'>Your coding problem will appear here.</p>` }}
            />
          </div>
          
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={`Write your ${language} solution here...`}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 font-mono text-sm h-[40vh]" // Adjusted height
            disabled={!problem}
          />
          <div className="flex items-center gap-4">
            <AppButton onClick={analyzeCode} disabled={isLoading || !code}>
              {isLoading && !isHintLoading ? <Icon name="spinner" /> : 'Analyze My Solution'}
            </AppButton>
            <AppButton
              onClick={getHint}
              disabled={isHintLoading || !problem || isLoading}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 flex items-center"
            >
              {isHintLoading ? <Icon name="spinner" /> : <Icon name="lightbulb" className="w-5 h-5 mr-2" />}
              Get a Hint
            </AppButton>
          </div>
          {hint && (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
              <span className="font-semibold">Hint:</span> {hint}
            </div>
          )}
        </div>
        
        {/* Feedback Column */}
        <div className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-lg border border-white/40 p-8 rounded-2xl shadow-xl overflow-y-auto h-[calc(40vh+40vh+3.5rem+1rem)]"> {/* Match height of left column */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 sticky top-0 bg-white/50 backdrop-blur-sm -mt-8 -mx-8 pt-8 px-8 pb-4">AI Code Analysis</h2>
          {isLoading && !isHintLoading && (
            <div className="flex justify-center items-center">
              <Icon name="spinner" className="w-12 h-12 text-indigo-600" />
            </div>
          )}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: feedback || "<p class='text-gray-500'>Your code analysis will appear here.</p>" }}
          />
        </div>
      </div>
    </div>
  );
};


// --- Main App Component ---
export default function App() {
  const [page, setPage] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Desktop sidebar collapse
  const [apiKeyWarning, setApiKeyWarning] = useState(false);
  const [quizHistory, setQuizHistory] = useState([]);
  
  // Check for API key on load
  useEffect(() => {
    if (API_KEY === "") {
      setApiKeyWarning(true);
    }
  }, []);

  // Function to update quiz history
  const handleQuizComplete = (newScore) => {
    // newScore = { name: "Topic", value: 80 }
    setQuizHistory(prevHistory => {
      const updatedHistory = [...prevHistory, newScore];
      // Keep only the last 7 scores for the chart
      if (updatedHistory.length > 7) {
        return updatedHistory.slice(updatedHistory.length - 7);
      }
      return updatedHistory;
    });
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home setPage={setPage} quizHistory={quizHistory} />;
      case 'simulator':
        return <InterviewSimulator />;
      case 'quiz':
        return <TechQuiz onQuizComplete={handleQuizComplete} />;
      case 'resume':
        return <ResumeAnalyzer />;
      case 'mentor':
        return <CareerMentor />;
      case 'behavioral':
        return <BehavioralPrep />;
      case 'jobs':
        return <JobRecommender />; // Fixed the extra character here
      case 'library':
        return <QuestionLibrary />;
      case 'coding':
        return <CodingSimulator />;
      default:
        return <Home setPage={setPage} quizHistory={quizHistory} />;
    }
  };

  return (
    <>
      <style>{`
        /* Use Inter font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background: #c5c5c5;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
        /* Page fade-in animation */
        @keyframes fadeInUpscale {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUpscale 0.5s ease-out forwards;
        }
        /* Prose styles for rendered HTML */
        .prose h3 {
          color: #4338ca; /* indigo-700 */
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .prose h4 {
          color: #4f46e5; /* indigo-600 */
          font-weight: 600;
          margin-top: 1rem;
          margin-bottom: 0.25rem;
        }
        .prose ul, .prose ol {
          margin-left: 1.5rem;
          color: #374151; /* gray-700 */
        }
        .prose li {
          margin-bottom: 0.25rem;
        }
        .prose p {
          color: #4b5563; /* gray-600 */
          word-break: break-word; /* Fix for overflow */
        }
        .prose pre {
          background-color: #f3f4f6; /* gray-100 */
          padding: 0.75rem;
          border-radius: 0.375rem; /* rounded-md */
          font-size: 0.875rem; /* text-sm */
          color: #1f2937; /* gray-800 */
          white-space: pre-wrap;    /* Fix for overflow */
          word-break: break-all;    /* Fix for overflow */
        }
        .prose code {
          font-family: 'Courier New', Courier, monospace;
          word-break: break-all;    /* Fix for overflow */
        }
        /* Fix for pre in chat */
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      
      <div className="flex flex-col min-h-screen w-full bg-gradient-to-tr from-blue-100 via-purple-100 to-indigo-200 font-inter">
        <Sidebar 
          page={page} 
          setPage={setPage} 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
          isCollapsed={isSidebarCollapsed} 
          setIsCollapsed={setIsSidebarCollapsed}
        />
        
        {/* Mobile Header */}
        <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white flex items-center px-4 z-20 shadow-lg">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2">
            <Icon name="menu" />
          </button>
          <div className="flex-1 text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">PrepRoom AI</div>
        </header>
        
        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-20 md:hidden"
          ></div>
        )}

        {/* Main Content */}
        <main className={`flex-1 pt-16 md:pt-0 transition-all duration-300 ${isSidebarCollapsed ? 'md:pl-20' : 'md:pl-64'}`}>
          {/* API Key Warning Banner */}
          {apiKeyWarning && (
            <div className="sticky top-16 md:top-0 z-10 bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
              <div className="flex">
                <Icon name="alert" className="text-red-600 mr-3" />
                <div>
                  <p className="font-bold">Warning: Missing API Key</p>
                  <p className="text-sm">The application may not function correctly. The runtime environment did not provide an API key for the AI services.</p>
                </div>
                <button onClick={() => setApiKeyWarning(false)} className="ml-auto p-2">
                  <Icon name="close" className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
          
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {renderPage()}
          </div>
        </main>
      </div>
    </>
  );
}

