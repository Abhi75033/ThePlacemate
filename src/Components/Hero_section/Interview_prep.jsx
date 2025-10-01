import React, { useState } from 'react';
// Assuming img1 is correctly imported from your assets folder
// import img1 from '../../assets/acb.png'; 
// For demonstration, I will use a placeholder URL. Replace it with your actual import.
import img1 from "../../assets/acb.png"
import Loader from '../Utils/Loader';

// Simple spinner component for loading state
const LoadingSpinner = () => (
  <div className="spinner-container">
    <div className="spinner"></div>
    <p>Generating Questions...</p>
  </div>
);

// Component to display the generated questions
const QuestionsDisplay = ({ content }) => {
    const sections = content.split('**').filter(s => s.trim() !== '');
    return (
        <div className="questions-output">
            {sections.map((section, index) => {
                if (index % 2 === 0) {
                    return <h4 key={index}>{section.trim().replace(/:/g, '')}</h4>;
                } else {
                    return <p key={index}>{section.trim()}</p>;
                }
            })}
        </div>
    );
};


const InterviewPrepAI = () => {
  const [selectedCompany, setSelectedCompany] = useState('Google');
   const [selectedTopic, setSelectedTopic] = useState('Blockchain');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedQuestions, setGeneratedQuestions] = useState('');
  const [error, setError] = useState('');

  const partners = [
  "Meta (Facebook)",
  "Amazon",
  "Netflix",
  "Google (Alphabet)",
  "Microsoft",
  "Apple",
  "Tesla",
  "Nvidia",
  "Adobe",
  "Intel",
  "IBM",
  "Salesforce",
  "Oracle",
  "Spotify",
  "Twitter (X)"
]

const topics = [
  "Data Structures and Algorithms",
  "Operating Systems",
  "Computer Networks",
  "Databases (SQL & NoSQL)",
  "Object-Oriented Programming",
  "System Design",
  "Cloud Computing",
  "Machine Learning",
  "Artificial Intelligence",
  "Cybersecurity",
  "Web Development",
  "Mobile App Development",
  "DevOps & CI/CD",
  "Big Data",
  "Blockchain",
  "Software Testing",
  "Data Science"
];

  const handleClear = () => {
    setGeneratedQuestions('');
    setError('');
  };

  const generateInterviewQuestions = async () => {
    if (!selectedCompany) {
        setError('Please select a company first.');
        return;
    }
    
    setIsLoading(true);
    setGeneratedQuestions('');
    setError('');

    // It is highly recommended to hide your API key using environment variables
    // before deploying your application.
    const apiKey = "AIzaSyAIcHl35i-YxX0w7ghpt3Hyf1LVn94u8KE"; 
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
    
    const systemPrompt = "You are an expert career coach specializing in tech recruitment. Your role is to generate interview questions for specific companies.";
    const userQuery = `Generate 5 common technical and behavioral interview questions for a software engineering role at ${selectedCompany}, focusing on ${selectedTopic}. For each question, provide a brief, actionable tip on how to best answer it. Format the response clearly with each question as a bolded title.`;


    const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: {
            parts: [{ text: systemPrompt }]
        },
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }

        const result = await response.json();
        const candidate = result.candidates?.[0];

        if (candidate && candidate.content?.parts?.[0]?.text) {
            setGeneratedQuestions(candidate.content.parts[0].text);
        } else {
            throw new Error("Received an empty or invalid response from the API.");
        }

    } catch (err) {
        console.error("Error calling Gemini API:", err);
        setError("Sorry, we couldn't generate questions at this time. Please try again later.");
    } finally {
        setIsLoading(false);
    }
  };


  return (
    <>
      <style>{`
        .interview-prep-section {
          background-color: #F9FAFB;
          padding: clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        .prep-container {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .prep-title {
          font-size: clamp(2rem, 5vw, 2.75rem);
          font-weight: 800;
          color: #111827;
          margin: 0 0 0.5rem 0;
        }
        .prep-title span {
          background: linear-gradient(90deg, #8B5CF6, #EC4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .prep-subtitle {
          font-size: 1.125rem;
          color: #4B5563;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto 2.5rem auto;
        }
        .prep-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .company-select {
          padding: 0.8rem 1.2rem;
          border: 1px solid #D1D5DB;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 500;
          min-width: 200px;
        }
        .generate-btn {
          background-image: linear-gradient(to right, #8B5CF6, #EC4899);
          color: white;
          font-weight: 600;
          font-size: 1rem;
          padding: 0.8rem 1.8rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }
        .generate-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(139, 92, 246, 0.2);
        }
        .prep-results {
          background-color: #FFFFFF;
          border-radius: 1rem;
          padding: 2rem;
          min-height: 170px;
          text-align: left;
          border: 1px solid #F3F4F6;
          box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .error-message {
            color: #EF4444;
            font-weight: 500;
            text-align: center;
        }
        .spinner-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            color: #6B7280;
        }
        .spinner {
            border: 4px solid #E5E7EB;
            border-top: 4px solid #8B5CF6;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .questions-output {
            animation: fadeIn 0.5s ease-in-out;
        }
        .questions-output h4 {
            font-size: 1.1rem;
            color: #111827;
            margin: 1.5rem 0 0.5rem 0;
        }
        .questions-output p {
            font-size: 1rem;
            color: #4B5563;
            line-height: 1.6;
            margin: 0;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        /* --- NEW: Clear Button and Initial State Styles --- */
        .initial-state {
          text-align: center;
          animation: fadeIn 0.5s ease-in-out;
        }
        .initial-state img {
          max-width: 100%;
          width: 400px;
          margin-bottom: 1rem;
          border-radius: 0.5rem;
        }
        .initial-state h4 {
          font-size: 1.25rem;
          color: #374151;
          margin: 0;
        }
        .results-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        .results-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #111827;
            margin: 0;
        }
        .clear-btn {
            background-color: #F3F4F6;
            color: #4B5563;
            font-weight: 500;
            font-size: 0.875rem;
            padding: 0.4rem 1rem;
            border-radius: 0.5rem;
            border: 1px solid #E5E7EB;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .clear-btn:hover {
            background-color: #E5E7EB;
            color: #1F2937;
        }
      `}</style>
      <section className="interview-prep-section">
        <div className="prep-container">
          <h2 className="prep-title"><span>AI-Powered</span> Interview Prep</h2>
          <p className="prep-subtitle">
            Select a company and let our Gemini-powered AI generate common interview questions and tips to help you ace your next interview.
          </p>
          <div className="prep-controls">
            <select
              className="company-select"
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
            >
              {partners.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
             <select
              className="company-select"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
            >
              {topics.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            <button className="generate-btn" onClick={generateInterviewQuestions} disabled={isLoading}>
              {isLoading ? 'Generating...' : 'Generate Questions ✨'}
            </button>
          </div>
          <div className="prep-results">
            {isLoading && <Loader/>}
            
            {!isLoading && error && (
                <div className="initial-state">
                     <p className="error-message">{error}</p>
                     <button className="clear-btn" style={{marginTop: '1rem'}} onClick={handleClear}>Try Again</button>
                </div>
            )}

            {!isLoading && !error && generatedQuestions && (
              <div>
                <div className="results-header">
                    <h3 className="results-title">Generated for {selectedCompany}</h3>
                    <button className="clear-btn" onClick={handleClear}>Clear</button>
                </div>
                <QuestionsDisplay content={generatedQuestions} />
              </div>
            )}

            {!isLoading && !error && !generatedQuestions && (
              <div className="initial-state">
               <center><img  src={img1} width={500}/></center>

            <h4>Prepare With 🧠+AI</h4>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default InterviewPrepAI;

