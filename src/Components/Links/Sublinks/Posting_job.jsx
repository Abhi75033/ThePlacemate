import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- SVG Icons ---
const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
);

const BuildingIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
     </svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );

// --- Social Icons for Footer ---
const TwitterIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
);
const LinkedinIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);


// --- Main Page Component ---
const PostJobPage = () => {
    const navigate = useNavigate()
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        jobTitle: '',
        location: '',
        roleType: '',
        description: '',
        skills: '',
        companyName: '',
        companyWebsite: '',
        aboutCompany: '',
    });

    const handleNext = () => setCurrentStep(prev => prev + 1);
    const handleBack = () => setCurrentStep(prev => prev - 1);
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Job posting submitted successfully!');
        navigate('/confirm_posting')

        // Here you would typically send the formData to a server
        console.log(formData);
    }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');
        
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @keyframes animated-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .post-job-page {
          font-family: 'Lexend', sans-serif;
          background-color: #111827;
          color: #F9FAFB;
          overflow-x: hidden;
          position: relative;
          background: linear-gradient(-45deg, #111827, #131833, #1F2937, #111827);
          background-size: 400% 400%;
          animation: animated-gradient 15s ease infinite;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        .main-content {
            flex-grow: 1;
            padding: 6rem 1.5rem;
        }

        .grid-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
            background-size: 50px 50px;
            z-index: 0;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .post-job-container {
            max-width: 800px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }

        .page-header {
            text-align: center;
            margin-bottom: 3rem;
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
        }

        .page-header h1 {
            font-size: 3rem;
            font-weight: 700;
            color: #FFFFFF;
            margin-bottom: 1rem;
        }

        .page-header p {
            font-size: 1.125rem;
            color: #9CA3AF;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.7;
        }

        /* --- Stepper --- */
        .stepper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 4rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            animation: fadeInUp 0.8s ease-out 0.2s forwards;
            opacity: 0;
        }

        .step {
            display: flex;
            align-items: center;
            flex-grow: 1;
        }
        
        .step:last-child {
            flex-grow: 0;
        }

        .step-circle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #374151;
            background-color: transparent;
            color: #6B7280;
            transition: all 0.4s ease;
        }

        .step-label {
            color: #6B7280;
            font-weight: 500;
            margin-left: 0.75rem;
            display: none; /* Hidden on mobile */
        }
        
        .step-line {
            height: 2px;
            background-color: #374151;
            flex-grow: 1;
            margin: 0 1rem;
            transition: background-color 0.4s ease;
        }

        .step.active .step-circle {
            border-color: #4F46E5;
            background-color: #4F46E5;
            color: #FFFFFF;
        }
        
        .step.active .step-label {
            color: #FFFFFF;
        }

        .step.completed .step-circle {
            border-color: #4F46E5;
            background-color: #4F46E5;
            color: #FFFFFF;
        }

        .step.completed .step-line {
            background-color: #4F46E5;
        }
        
        .step.completed .step-label {
            color: #9CA3AF;
        }
        
        /* --- Form Card --- */
        .form-card {
            background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1.25rem;
            padding: 2.5rem;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            opacity: 0;
            animation: fadeInUp 0.8s ease-out 0.4s forwards;
        }
        
        .form-section-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #FFFFFF;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .form-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.75rem;
        }
        
        @media (min-width: 768px) {
            .form-grid.two-cols {
                grid-template-columns: 1fr 1fr;
            }
            .step-label {
                display: inline;
            }
        }
        
        .form-group {
            display: flex;
            flex-direction: column;
        }

        .form-label {
            font-size: 0.875rem;
            font-weight: 500;
            color: #9CA3AF;
            margin-bottom: 0.5rem;
        }

        .form-input, .form-textarea {
            background-color: rgba(0, 0, 0, 0.2);
            border: 1px solid #374151;
            border-radius: 0.5rem;
            padding: 0.75rem 1rem;
            color: #FFFFFF;
            font-size: 1rem;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .form-input:focus, .form-textarea:focus {
            outline: none;
            border-color: #4F46E5;
            box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.5);
        }

        .form-textarea {
            min-height: 150px;
            resize: vertical;
        }
        
        .form-actions {
            margin-top: 2.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.8rem 1.5rem;
          border-radius: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          cursor: pointer;
        }
        
        .cta-primary {
          background: #4F46E5;
          color: #FFFFFF;
          box-shadow: 0 8px 25px -5px rgba(79, 70, 229, 0.4), 0 5px 15px -5px rgba(79, 70, 229, 0.2);
        }
        .cta-primary:hover {
           background: #6366F1;
           transform: translateY(-2px);
           box-shadow: 0 12px 30px -5px rgba(79, 70, 229, 0.5), 0 8px 20px -5px rgba(79, 70, 229, 0.3);
        }

        .cta-secondary {
            background-color: transparent;
            color: #9CA3AF;
            border: 1px solid #374151;
        }
        .cta-secondary:hover {
            background-color: rgba(255, 255, 255, 0.05);
            color: #FFFFFF;
            border-color: #4B5563;
        }
        
        /* Preview Styles */
        .preview-section {
            margin-bottom: 2rem;
        }
        .preview-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: #FFFFFF;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .preview-content {
            font-size: 1rem;
            color: #D1D5DB;
            line-height: 1.7;
            white-space: pre-wrap; /* To respect newlines in textarea */
        }
        .preview-content strong {
            color: #9CA3AF;
        }
        
        /* --- Footer --- */
        .page-footer {
            background-color: rgba(0,0,0,0.1);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding: 3rem 1.5rem;
            position: relative;
            z-index: 1;
        }
        
        .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 2rem;
        }

        @media (min-width: 768px) {
            .footer-container {
                flex-direction: row;
                justify-content: space-between;
                text-align: left;
            }
        }
        
        .footer-brand h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        .footer-brand p {
            color: #9CA3AF;
            font-size: 0.9rem;
        }

        .footer-links {
            display: flex;
            gap: 1.5rem;
        }

        .footer-links a {
            color: #9CA3AF;
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.3s ease;
        }

        .footer-links a:hover {
            color: #FFFFFF;
        }
        
        .footer-socials {
            display: flex;
            gap: 1rem;
        }

        .footer-socials a {
            color: #9CA3AF;
            transition: color 0.3s ease;
        }
        .footer-socials a:hover {
            color: #FFFFFF;
        }


      `}</style>
      <div className="post-job-page">
        <div className="grid-overlay"></div>
        <main className="main-content">
            <div className="post-job-container">
                <div className="page-header">
                    <h1>Create Your Job Posting</h1>
                    <p>Provide the details for your open role and our platform will start matching you with elite talent immediately.</p>
                </div>

                <div className="stepper">
                    <div className={`step ${currentStep >= 1 ? 'completed' : ''} ${currentStep === 1 ? 'active' : ''}`}>
                        <div className="step-circle"><BriefcaseIcon /></div>
                        <span className="step-label">Job Details</span>
                        <div className="step-line"></div>
                    </div>
                    <div className={`step ${currentStep >= 2 ? 'completed' : ''} ${currentStep === 2 ? 'active' : ''}`}>
                        <div className="step-circle"><BuildingIcon /></div>
                        <span className="step-label">Company Info</span>
                        <div className="step-line"></div>
                    </div>
                    <div className={`step ${currentStep === 3 ? 'active' : ''}`}>
                        <div className="step-circle"><CheckCircleIcon /></div>
                        <span className="step-label">Preview & Submit</span>
                    </div>
                </div>
                
                {currentStep === 1 && (
                    <div className="form-card">
                        <h2 className="form-section-title">Step 1: Job Details</h2>
                        <div className="form-grid">
                            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                                <label className="form-label" htmlFor="jobTitle">Job Title</label>
                                <input className="form-input" type="text" id="jobTitle" placeholder="e.g., Senior Frontend Developer" value={formData.jobTitle} onChange={handleChange} />
                            </div>
                            
                            <div className="form-group two-cols" style={{ gridColumn: '1 / -1', display: 'grid', gap: '1.75rem' }}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="location">Location</label>
                                    <input className="form-input" type="text" id="location" placeholder="e.g., San Francisco, CA or Remote" value={formData.location} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="roleType">Role Type</label>
                                    <input className="form-input" type="text" id="roleType" placeholder="e.g., Full-time, Contract" value={formData.roleType} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                                <label className="form-label" htmlFor="description">Job Description</label>
                                <textarea className="form-textarea" id="description" placeholder="Describe the responsibilities, requirements, and what makes this role exciting..." value={formData.description} onChange={handleChange}></textarea>
                            </div>
                            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                                <label className="form-label" htmlFor="skills">Required Skills</label>
                                <input className="form-input" type="text" id="skills" placeholder="e.g., React, TypeScript, GraphQL, Node.js" value={formData.skills} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-actions" style={{justifyContent: 'flex-end'}}>
                            <button onClick={handleNext} className="cta-button cta-primary">
                                Next: Company Info <ArrowRightIcon />
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="form-card">
                        <h2 className="form-section-title">Step 2: Company Information</h2>
                        <div className="form-grid">
                            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                                <label className="form-label" htmlFor="companyName">Company Name</label>
                                <input className="form-input" type="text" id="companyName" placeholder="Your Company Inc." value={formData.companyName} onChange={handleChange} />
                            </div>
                            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                                <label className="form-label" htmlFor="companyWebsite">Company Website</label>
                                <input className="form-input" type="url" id="companyWebsite" placeholder="https://example.com" value={formData.companyWebsite} onChange={handleChange} />
                            </div>
                            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                                <label className="form-label" htmlFor="aboutCompany">About The Company</label>
                                <textarea className="form-textarea" id="aboutCompany" placeholder="What does your company do? What is the culture like?" value={formData.aboutCompany} onChange={handleChange}></textarea>
                            </div>
                        </div>
                        <div className="form-actions">
                            <button onClick={handleBack} className="cta-button cta-secondary">
                                <ArrowLeftIcon /> Back
                            </button>
                            <button onClick={handleNext} className="cta-button cta-primary">
                                Next: Preview <ArrowRightIcon />
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="form-card">
                        <h2 className="form-section-title">Step 3: Preview & Submit</h2>
                        <div className="preview-section">
                            <h3 className="preview-title">Job Details</h3>
                            <p className="preview-content"><strong>Title:</strong> {formData.jobTitle || 'Not provided'}</p>
                            <p className="preview-content"><strong>Location:</strong> {formData.location || 'Not provided'}</p>
                            <p className="preview-content"><strong>Role Type:</strong> {formData.roleType || 'Not provided'}</p>
                            <p className="preview-content"><strong>Skills:</strong> {formData.skills || 'Not provided'}</p>
                            <p className="preview-content"><strong>Description:</strong><br/>{formData.description || 'Not provided'}</p>
                        </div>
                        <div className="preview-section">
                            <h3 className="preview-title">Company Information</h3>
                            <p className="preview-content"><strong>Company:</strong> {formData.companyName || 'Not provided'}</p>
                            <p className="preview-content"><strong>Website:</strong> {formData.companyWebsite || 'Not provided'}</p>
                            <p className="preview-content"><strong>About:</strong><br/>{formData.aboutCompany || 'Not provided'}</p>
                        </div>
                        <div className="form-actions">
                            <button onClick={handleBack} className="cta-button cta-secondary">
                                <ArrowLeftIcon /> Back
                            </button>
                            <button onClick={handleSubmit} className="cta-button cta-primary">
                            Submit Job Posting <CheckCircleIcon/>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
        <footer className="page-footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h3>TalentLink</h3>
                    <p>&copy; 2025 TalentLink. All rights reserved.</p>
                </div>
                <div className="footer-links">
                    <a href="#">Partner with Us</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
                <div className="footer-socials">
                    <a href="#"><TwitterIcon /></a>
                    <a href="#"><LinkedinIcon /></a>
                </div>
            </div>
        </footer>
      </div>
    </>
  );
};

export default PostJobPage;

