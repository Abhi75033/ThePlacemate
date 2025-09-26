import React, { useState, useRef } from 'react';

// --- Icon Components (Moved outside the main component to prevent re-creation on re-renders) ---
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const SummaryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>;
const EducationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10v6"/><path d="M12 2a5 5 0 0 0-5 5v1.5a1.5 1.5 0 0 1-3 0V10a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.5a1.5 1.5 0 0 1 3 0V17a5 5 0 0 0 5 5h0a5 5 0 0 0 5-5v-1.5a1.5 1.5 0 0 1 3 0V16a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1.5a1.5 1.5 0 0 1-3 0V8a5 5 0 0 0-5-5Z"/></svg>;
const ExperienceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const ProjectsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const SkillsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 12-1.25-2.5L8.5 8.25 10 7l.54.54"/><path d="M14.59 13.51a5 5 0 0 1-6.1-6.1l.3-.61L10 7l.54.54 1.25 1.25.61-.3 1.25-2.5L12 4l-1-1-1 1-1 1-1 1 2 2 1 1-2 2-1 1-1 1-1 1 2 2 1 1 .5.5.5.5h.5l.5-.5.5-.5.5-.5.5-.5Z"/></svg>;
const CertificateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21l-8-4.5v-9l8 4.5 8-4.5v9L12 21z"/><path d="m12 12 8-4.5"/><path d="M12 12V2.25"/><path d="m12 12-8-4.5"/><path d="M20.5 10.5 12 15l-8.5-4.5"/></svg>;
const LayersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const ChevronDownIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>;
const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>;

// --- Accordion Section Component ---
const AccordionSection = ({ title, id, icon, children, activeSection, setActiveSection }) => (
    <div className="form-section">
        <button className="section-header" onClick={() => setActiveSection(activeSection === id ? null : id)}>
            <div className="section-header-left">
                {icon}
                <h3>{title}</h3>
            </div>
            <ChevronDownIcon />
        </button>
        <div className={`section-content ${activeSection === id ? 'open' : ''}`}>
            {children}
        </div>
    </div>
);

// --- Main Resume Builder Component ---
const ResumeBuilder = () => {
    const [resumeData, setResumeData] = useState({
        personal: { fullName: 'Priya Sharma', jobTitle: 'Full-Stack Developer', email: 'priya.sharma@example.com', phone: '+91 12345 67890', linkedin: 'linkedin.com/in/priyasharma', github: 'github.com/priyasharma', location: 'Navi Mumbai, India', },
        summary: 'Innovative Full-Stack Developer with 3+ years of experience in building and maintaining responsive web applications using the MERN stack. Proficient in both front-end and back-end development, with a passion for creating intuitive user experiences and scalable solutions.',
        education: [ { id: 1, school: 'University of Mumbai', degree: 'Bachelor of Engineering in Computer Science', dates: '2018 - 2022', description: 'Graduated with First Class Honours. Key coursework in Data Structures, Algorithms, and Web Development.' } ],
        experience: [ { id: 1, title: 'Software Engineer', company: 'Tech Solutions Inc.', dates: '2022 - Present', responsibilities: 'Developed and maintained client-facing web applications using React and Node.js. Collaborated with a team of 5 developers to deliver features in an agile environment.' } ],
        projects: [ { id: 1, name: 'E-commerce Platform', description: 'A full-featured e-commerce website with product listings, user authentication, and a payment gateway.', tech: 'React, Node.js, MongoDB, Express', link: 'github.com/priyasharma/ecommerce' } ],
        skills: ['JavaScript (ES6+)', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML5 & CSS3', 'Git', 'Agile Methodologies'],
        certifications: [ { id: 1, name: 'Certified JavaScript Developer', org: 'Tech Certification Institute', year: '2023' } ],
        customSections: [ { id: 1, title: 'Languages', content: 'English (Fluent), Hindi (Native)', link: '' } ]
    });

    const [activeSection, setActiveSection] = useState('personal');
    const [openFaq, setOpenFaq] = useState(0);
    const resumePreviewRef = useRef(null);

    // --- Handlers for Data Changes ---
    const handlePersonalChange = (e) => { const { name, value } = e.target; setResumeData(prev => ({ ...prev, personal: { ...prev.personal, [name]: value } })); };
    const handleSummaryChange = (e) => { setResumeData(prev => ({ ...prev, summary: e.target.value })); };
    const handleSectionChange = (section, index, e) => { const { name, value } = e.target; const list = [...resumeData[section]]; list[index][name] = value; setResumeData(prev => ({ ...prev, [section]: list })); };
    
    const addSectionEntry = (section) => {
        let newEntry;
        const newId = Date.now();
        switch(section) {
            case 'education': newEntry = { id: newId, school: '', degree: '', dates: '', description: '' }; break;
            case 'experience': newEntry = { id: newId, title: '', company: '', dates: '', responsibilities: '' }; break;
            case 'projects': newEntry = { id: newId, name: '', description: '', tech: '', link: '' }; break;
            case 'certifications': newEntry = { id: newId, name: '', org: '', year: '' }; break;
            default: return;
        }
        setResumeData(prev => ({ ...prev, [section]: [...prev[section], newEntry] }));
    };

    const removeSectionEntry = (section, index) => { const list = [...resumeData[section]]; list.splice(index, 1); setResumeData(prev => ({ ...prev, [section]: list })); };
    
    const handleSkillChange = (e) => {
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
            e.preventDefault();
            setResumeData(prev => ({...prev, skills: [...prev.skills, e.target.value.trim()]}));
            e.target.value = '';
        }
    };
    const removeSkill = (indexToRemove) => { setResumeData(prev => ({...prev, skills: prev.skills.filter((_, index) => index !== indexToRemove)})); };

    const addCustomSection = () => {
        const newSection = { id: Date.now(), title: 'New Section', content: '', link: '' };
        setResumeData(prev => ({ ...prev, customSections: [...prev.customSections, newSection] }));
    };
    const handleCustomSectionChange = (index, e) => {
        const { name, value } = e.target;
        const list = [...resumeData.customSections];
        list[index][name] = value;
        setResumeData(prev => ({ ...prev, customSections: list }));
    };
    const removeCustomSection = (index) => {
        const list = [...resumeData.customSections];
        list.splice(index, 1);
        setResumeData(prev => ({ ...prev, customSections: list }));
    };
    
    const handleDownloadPdf = () => {
        const { jsPDF } = window.jspdf;
        const html2canvas = window.html2canvas;
        const input = resumePreviewRef.current;
        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: [canvas.width, canvas.height] });
            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save("resume.pdf");
        });
    };
    
    const faqData = [
        { q: "Is this resume builder free to use?", a: "Yes, our resume builder is completely free. You can create, preview, and download your resume without any hidden charges." },
        { q: "Is my data saved on your servers?", a: "No, all the data you enter is stored directly in your browser. It is not sent to our servers, ensuring your privacy. Please note that clearing your browser cache or using a different browser will clear the form." },
        { q: "Why is an ATS-friendly resume important?", a: "Most companies use Applicant Tracking Systems (ATS) to screen resumes. An ATS-friendly resume uses a clean, simple format that these systems can easily read and parse, ensuring your application gets seen by a human recruiter." }
    ];
    
    return (
        <>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
            <style>{`
                /* ... (All CSS styles remain the same) ... */
                @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');
                
                .resume-builder-page { font-family: 'Lexend', sans-serif; background-color: #F4F7FC; }
                .rb-container { display: flex; flex-direction: column; min-height: 100vh; }
                @media (min-width: 1024px) { .rb-container { flex-direction: row; } }

                /* --- Form Panel (Left) --- */
                .form-panel { width: 100%; padding: 2rem; background-color: #FFFFFF; }
                @media (min-width: 1024px) { .form-panel { width: 45%; max-height: 100vh; overflow-y: auto; } }
                .form-header { text-align: center; margin-bottom: 2rem; }
                .form-header h1 { font-size: 2rem; font-weight: 700; color: #1E293B; }
                .form-header p { color: #64748B; }
                .form-section { border: 1px solid #E2E8F0; border-radius: 0.75rem; margin-bottom: 1rem; }
                .section-header { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.25rem; background: none; border: none; cursor: pointer; text-align: left; }
                .section-header-left { display: flex; align-items: center; gap: 0.75rem; color: #334155; }
                .section-header h3 { font-size: 1.1rem; font-weight: 600; margin: 0; }
                .section-content { max-height: 0; overflow: hidden; transition: max-height 0.5s ease-in-out, padding 0.5s ease; }
                .section-content.open { max-height: 1500px; }
                .section-content-inner { padding: 0 1.25rem 1.25rem 1.25rem; border-top: 1px solid #E2E8F0; margin-top: 1rem; }
                .form-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
                @media (min-width: 640px) { .form-grid { grid-template-columns: 1fr 1fr; } }
                .form-group { display: flex; flex-direction: column; }
                .form-label { font-size: 0.875rem; font-weight: 500; color: #475569; margin-bottom: 0.25rem; }
                .form-input, .form-textarea { width: 100%; padding: 0.6rem 0.8rem; border: 1px solid #CBD5E1; border-radius: 0.5rem; font-size: 0.9rem; font-family: 'Lexend', sans-serif; transition: all 0.2s ease; box-sizing: border-box; }
                .form-input:focus, .form-textarea:focus { outline: none; border-color: #4F46E5; box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2); }
                .form-textarea { min-height: 100px; resize: vertical; }
                .multi-entry-item { border: 1px solid #E2E8F0; border-radius: 0.75rem; padding: 1rem; margin-bottom: 1rem; }
                .multi-entry-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
                .multi-entry-title { font-weight: 600; color: #334155; }
                .remove-btn { background: #FEE2E2; color: #DC2626; border: none; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
                .add-btn { width: 100%; margin-top: 0.5rem; padding: 0.6rem; background: #EEF2FF; color: #4338CA; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.5rem; }
                .skills-container { display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 0.5rem; border: 1px solid #CBD5E1; border-radius: 0.5rem; }
                .skill-chip { display: flex; align-items: center; background: #E0E7FF; color: #4338CA; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 500; }
                .skill-chip button { background: none; border: none; color: #4338CA; cursor: pointer; margin-left: 0.25rem; }
                .skills-input { flex-grow: 1; border: none; padding: 0.25rem; font-size: 0.9rem; }
                .skills-input:focus { outline: none; }

                /* --- Preview Panel (Right) --- */
                .preview-panel { width: 100%; padding: 2rem; background-color: #F4F7FC; }
                @media (min-width: 1024px) { .preview-panel { width: 55%; max-height: 100vh; overflow-y: auto; } }
                .resume-preview-sticky { position: sticky; top: 2rem; }
                .resume-preview { background: white; aspect-ratio: 8.5 / 11; width: 100%; max-width: 800px; margin: 0 auto; box-shadow: 0 10px 30px -5px rgba(0,0,0,0.1); padding: 2.5rem; box-sizing: border-box; font-family: 'Lora', serif; }
                .resume-header { text-align: center; border-bottom: 2px solid #E2E8F0; padding-bottom: 1rem; min-height: 80px; }
                .resume-header h1 { font-family: 'Lexend', sans-serif; font-size: 1.8rem; font-weight: 700; color: #1E293B; margin: 0; }
                .resume-header h2 { font-size: 1.1rem; font-weight: 500; color: #4F46E5; margin: 0.25rem 0; }
                .resume-contact { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem 1rem; font-size: 0.8rem; color: #475569; margin-top: 0.5rem; }
                .resume-section { margin-top: 1.25rem; }
                .resume-section-title { font-family: 'Lexend', sans-serif; font-size: 1.1rem; font-weight: 600; color: #334155; border-bottom: 1px solid #E2E8F0; padding-bottom: 0.25rem; margin-bottom: 0.5rem; }
                .resume-section p { margin: 0; font-size: 0.9rem; line-height: 1.6; white-space: pre-wrap; }
                .resume-item { margin-bottom: 0.75rem; }
                .resume-item-header { display: flex; justify-content: space-between; align-items: baseline; }
                .resume-item-title { font-weight: 500; font-size: 1rem; }
                .resume-item-subtitle { font-size: 0.9rem; font-style: italic; color: #475569; }
                .resume-item-dates { font-size: 0.8rem; font-style: italic; color: #64748B; }
                .resume-item-content { margin-top: 0.25rem; font-size: 0.9rem; }
                .resume-skills-list { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem; }
                .resume-skill-chip { background-color: #EEF2FF; color: #4338CA; padding: 0.25rem 0.75rem; border-radius: 0.25rem; font-size: 0.8rem; font-family: 'Lexend', sans-serif; }
                .download-btn { margin: 1.5rem auto 0 auto; width: 100%; max-width: 800px; display: block; padding: 0.8rem; background-image: linear-gradient(to right, #4F46E5, #8B5CF6); color: white; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer; text-align: center; }
                
                /* --- FAQ Section --- */
                .faq-builder-section { padding: 3rem 2rem; background-color: #FFFFFF; }
                .faq-header { text-align: center; margin-bottom: 2rem; }
                .faq-accordion { max-width: 800px; margin: 0 auto; }
                .faq-item { border-bottom: 1px solid #E2E8F0; }
                .faq-question { display: flex; justify-content: space-between; align-items: center; gap: 1rem; cursor: pointer; padding: 1rem 0; }
                .faq-question-text { font-size: 1.1rem; font-weight: 600; color: #1E293B; }
                .faq-icon { transition: transform 0.3s ease; color: #4F46E5; }
                .faq-icon.active { transform: rotate(-180deg); }
                .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding-bottom 0.4s ease; }
                .faq-answer.open { max-height: 200px; padding-bottom: 1rem; }
                .faq-answer p { font-size: 0.95rem; color: #475569; line-height: 1.7; margin: 0; }
            `}</style>

            <div className="resume-builder-page">
                <div className="rb-container">
                    {/* --- FORM PANEL --- */}
                    <div className="form-panel">
                        <div className="form-header">
                            <h1>Build Your ATS-Friendly Resume</h1>
                            <p>Create a professional resume in minutes that gets past the bots.</p>
                        </div>

                        <AccordionSection title="Personal Information" id="personal" icon={<UserIcon />} activeSection={activeSection} setActiveSection={setActiveSection}>
                           <div className="section-content-inner">
                               <div className="form-grid">
                                   <div className="form-group"><label className="form-label">Full Name</label><input type="text" name="fullName" value={resumeData.personal.fullName} onChange={handlePersonalChange} className="form-input" /></div>
                                   <div className="form-group"><label className="form-label">Job Title</label><input type="text" name="jobTitle" value={resumeData.personal.jobTitle} onChange={handlePersonalChange} className="form-input" /></div>
                                   <div className="form-group"><label className="form-label">Email</label><input type="email" name="email" value={resumeData.personal.email} onChange={handlePersonalChange} className="form-input" /></div>
                                   <div className="form-group"><label className="form-label">Phone</label><input type="tel" name="phone" value={resumeData.personal.phone} onChange={handlePersonalChange} className="form-input" /></div>
                                   <div className="form-group"><label className="form-label">LinkedIn</label><input type="text" name="linkedin" value={resumeData.personal.linkedin} onChange={handlePersonalChange} className="form-input" /></div>
                                   <div className="form-group"><label className="form-label">GitHub/Portfolio</label><input type="text" name="github" value={resumeData.personal.github} onChange={handlePersonalChange} className="form-input" /></div>
                                   <div className="form-group" style={{gridColumn: '1 / -1'}}><label className="form-label">Location</label><input type="text" name="location" value={resumeData.personal.location} onChange={handlePersonalChange} className="form-input" /></div>
                               </div>
                           </div>
                        </AccordionSection>

                        <AccordionSection title="Professional Summary" id="summary" icon={<SummaryIcon />} activeSection={activeSection} setActiveSection={setActiveSection}>
                           <div className="section-content-inner">
                               <textarea className="form-textarea" value={resumeData.summary} onChange={handleSummaryChange}></textarea>
                           </div>
                        </AccordionSection>

                        <AccordionSection title="Education" id="education" icon={<EducationIcon />} activeSection={activeSection} setActiveSection={setActiveSection}>
                            <div className="section-content-inner">
                                {resumeData.education.map((edu, index) => (
                                    <div key={edu.id} className="multi-entry-item">
                                        <div className="multi-entry-header"><span className="multi-entry-title">Entry {index + 1}</span><button onClick={() => removeSectionEntry('education', index)} className="remove-btn"><TrashIcon /></button></div>
                                        <div className="form-grid">
                                            <div className="form-group"><label className="form-label">School/College</label><input type="text" name="school" value={edu.school} onChange={(e) => handleSectionChange('education', index, e)} className="form-input" /></div>
                                            <div className="form-group"><label className="form-label">Degree/Course</label><input type="text" name="degree" value={edu.degree} onChange={(e) => handleSectionChange('education', index, e)} className="form-input" /></div>
                                            <div className="form-group" style={{gridColumn: '1 / -1'}}><label className="form-label">Start - End Date</label><input type="text" name="dates" value={edu.dates} onChange={(e) => handleSectionChange('education', index, e)} className="form-input" /></div>
                                            <div className="form-group" style={{gridColumn: '1 / -1'}}><label className="form-label">Description</label><textarea name="description" value={edu.description} onChange={(e) => handleSectionChange('education', index, e)} className="form-textarea"></textarea></div>
                                        </div>
                                    </div>
                                ))}
                                <button onClick={() => addSectionEntry('education')} className="add-btn"><PlusIcon /> Add Education</button>
                            </div>
                        </AccordionSection>

                        <AccordionSection title="Work Experience" id="experience" icon={<ExperienceIcon />} activeSection={activeSection} setActiveSection={setActiveSection}>
                             <div className="section-content-inner">
                                {resumeData.experience.map((exp, index) => (
                                    <div key={exp.id} className="multi-entry-item">
                                        <div className="multi-entry-header"><span className="multi-entry-title">Entry {index + 1}</span><button onClick={() => removeSectionEntry('experience', index)} className="remove-btn"><TrashIcon /></button></div>
                                        <div className="form-grid">
                                            <div className="form-group"><label className="form-label">Job Title</label><input type="text" name="title" value={exp.title} onChange={(e) => handleSectionChange('experience', index, e)} className="form-input" /></div>
                                            <div className="form-group"><label className="form-label">Company</label><input type="text" name="company" value={exp.company} onChange={(e) => handleSectionChange('experience', index, e)} className="form-input" /></div>
                                            <div className="form-group" style={{gridColumn: '1 / -1'}}><label className="form-label">Start - End Date</label><input type="text" name="dates" value={exp.dates} onChange={(e) => handleSectionChange('experience', index, e)} className="form-input" /></div>
                                            <div className="form-group" style={{gridColumn: '1 / -1'}}><label className="form-label">Responsibilities</label><textarea name="responsibilities" value={exp.responsibilities} onChange={(e) => handleSectionChange('experience', index, e)} className="form-textarea"></textarea></div>
                                        </div>
                                    </div>
                                ))}
                                <button onClick={() => addSectionEntry('experience')} className="add-btn"><PlusIcon /> Add Experience</button>
                            </div>
                        </AccordionSection>

                        <AccordionSection title="Projects" id="projects" icon={<ProjectsIcon />} activeSection={activeSection} setActiveSection={setActiveSection}>
                             <div className="section-content-inner">
                                {resumeData.projects.map((proj, index) => (
                                    <div key={proj.id} className="multi-entry-item">
                                        <div className="multi-entry-header"><span className="multi-entry-title">Project {index + 1}</span><button onClick={() => removeSectionEntry('projects', index)} className="remove-btn"><TrashIcon /></button></div>
                                        <div className="form-grid">
                                            <div className="form-group" style={{gridColumn: '1 / -1'}}><label className="form-label">Project Name</label><input type="text" name="name" value={proj.name} onChange={(e) => handleSectionChange('projects', index, e)} className="form-input" /></div>
                                            <div className="form-group" style={{gridColumn: '1 / -1'}}><label className="form-label">Description</label><textarea name="description" value={proj.description} onChange={(e) => handleSectionChange('projects', index, e)} className="form-textarea"></textarea></div>
                                            <div className="form-group"><label className="form-label">Tech Stack</label><input type="text" name="tech" value={proj.tech} onChange={(e) => handleSectionChange('projects', index, e)} className="form-input" /></div>
                                            <div className="form-group"><label className="form-label">Link</label><input type="text" name="link" value={proj.link} onChange={(e) => handleSectionChange('projects', index, e)} className="form-input" /></div>
                                        </div>
                                    </div>
                                ))}
                                <button onClick={() => addSectionEntry('projects')} className="add-btn"><PlusIcon /> Add Project</button>
                            </div>
                        </AccordionSection>

                        <AccordionSection title="Skills" id="skills" icon={<SkillsIcon />} activeSection={activeSection} setActiveSection={setActiveSection}>
                           <div className="section-content-inner">
                               <div className="skills-container">
                                   {resumeData.skills.map((skill, index) => ( <div key={index} className="skill-chip"> {skill} <button onClick={() => removeSkill(index)}>&times;</button> </div> ))}
                                   <input type="text" onKeyDown={handleSkillChange} placeholder="Add a skill and press Enter" className="skills-input"/>
                               </div>
                           </div>
                        </AccordionSection>
                        
                        <AccordionSection title="Certifications" id="certifications" icon={<CertificateIcon />} activeSection={activeSection} setActiveSection={setActiveSection}>
                            <div className="section-content-inner">
                                {resumeData.certifications.map((cert, index) => (
                                    <div key={cert.id} className="multi-entry-item">
                                        <div className="multi-entry-header"><span className="multi-entry-title">Certificate {index + 1}</span><button onClick={() => removeSectionEntry('certifications', index)} className="remove-btn"><TrashIcon /></button></div>
                                        <div className="form-grid">
                                            <div className="form-group"><label className="form-label">Certificate Name</label><input type="text" name="name" value={cert.name} onChange={(e) => handleSectionChange('certifications', index, e)} className="form-input" /></div>
                                            <div className="form-group"><label className="form-label">Issuing Organization</label><input type="text" name="org" value={cert.org} onChange={(e) => handleSectionChange('certifications', index, e)} className="form-input" /></div>
                                            <div className="form-group" style={{gridColumn: '1 / -1'}}><label className="form-label">Year</label><input type="text" name="year" value={cert.year} onChange={(e) => handleSectionChange('certifications', index, e)} className="form-input" /></div>
                                        </div>
                                    </div>
                                ))}
                                <button onClick={() => addSectionEntry('certifications')} className="add-btn"><PlusIcon /> Add Certificate</button>
                            </div>
                        </AccordionSection>

                        <AccordionSection title="Custom Sections" id="custom" icon={<LayersIcon />} activeSection={activeSection} setActiveSection={setActiveSection}>
                            <div className="section-content-inner">
                                {resumeData.customSections.map((section, index) => (
                                    <div key={section.id} className="multi-entry-item">
                                        <div className="multi-entry-header"><span className="multi-entry-title">Custom Section</span><button onClick={() => removeCustomSection(index)} className="remove-btn"><TrashIcon /></button></div>
                                        <div className="form-group"><label className="form-label">Section Title</label><input type="text" name="title" value={section.title} onChange={(e) => handleCustomSectionChange(index, e)} className="form-input" /></div>
                                        <div className="form-group"><label className="form-label">Content</label><textarea name="content" value={section.content} onChange={(e) => handleCustomSectionChange(index, e)} className="form-textarea"></textarea></div>
                                        <div className="form-group"><label className="form-label">Link (Optional)</label><input type="text" name="link" value={section.link} onChange={(e) => handleCustomSectionChange(index, e)} className="form-input" placeholder="e.g., your-portfolio.com" /></div>
                                    </div>
                                ))}
                                <button onClick={addCustomSection} className="add-btn"><PlusIcon /> Add Custom Section</button>
                            </div>
                        </AccordionSection>
                    </div>

                    {/* --- PREVIEW PANEL --- */}
                    <div className="preview-panel">
                        <div className="resume-preview-sticky">
                            <div ref={resumePreviewRef} className="resume-preview">
                                <div className="resume-header">
                                    <h1>{resumeData.personal.fullName || 'Your Name'}</h1>
                                    <h2>{resumeData.personal.jobTitle || 'Job Title'}</h2>
                                    <div className="resume-contact">
                                        <span>{resumeData.personal.email}</span>
                                        {resumeData.personal.phone && <> | <span>{resumeData.personal.phone}</span></>}
                                        {resumeData.personal.location && <> | <span>{resumeData.personal.location}</span></>}<br/>
                                        {resumeData.personal.linkedin && <span>{resumeData.personal.linkedin}</span>}
                                        {resumeData.personal.github && <> | <span>{resumeData.personal.github}</span></>}
                                    </div>
                                </div>
                                <div className="resume-section"><h3 className="resume-section-title">Professional Summary</h3><p>{resumeData.summary}</p></div>
                                <div className="resume-section"><h3 className="resume-section-title">Work Experience</h3>{resumeData.experience.map((exp) => (<div key={exp.id} className="resume-item"><div className="resume-item-header"><span className="resume-item-title">{exp.title} - {exp.company}</span><span className="resume-item-dates">{exp.dates}</span></div><p className="resume-item-content">{exp.responsibilities}</p></div>))}</div>
                                <div className="resume-section"><h3 className="resume-section-title">Education</h3>{resumeData.education.map((edu) => (<div key={edu.id} className="resume-item"><div className="resume-item-header"><span className="resume-item-title">{edu.school}</span><span className="resume-item-dates">{edu.dates}</span></div><p className="resume-item-subtitle">{edu.degree}</p><p className="resume-item-content">{edu.description}</p></div>))}</div>
                                <div className="resume-section"><h3 className="resume-section-title">Projects</h3>{resumeData.projects.map((proj) => (<div key={proj.id} className="resume-item"><div className="resume-item-header"><span className="resume-item-title">{proj.name}</span><span className="resume-item-dates">{proj.link}</span></div><p className="resume-item-subtitle">{proj.tech}</p><p className="resume-item-content">{proj.description}</p></div>))}</div>
                                <div className="resume-section"><h3 className="resume-section-title">Skills</h3><div className="resume-skills-list">{resumeData.skills.map((skill, i) => <span key={i} className="resume-skill-chip">{skill}</span>)}</div></div>
                                <div className="resume-section"><h3 className="resume-section-title">Certifications</h3>{resumeData.certifications.map((cert) => (<div key={cert.id} className="resume-item"><div className="resume-item-header"><span className="resume-item-title">{cert.name}</span><span className="resume-item-dates">{cert.year}</span></div><p className="resume-item-subtitle">{cert.org}</p></div>))}</div>
                                {resumeData.customSections.map((section) => (<div key={section.id} className="resume-section">
                                    <div className="resume-item-header" style={{borderBottom: '1px solid #E2E8F0', paddingBottom: '0.25rem', marginBottom: '0.5rem'}}>
                                        <h3 className="resume-section-title" style={{borderBottom: 'none', marginBottom: 0}}>{section.title}</h3>
                                        {section.link && <span className="resume-item-dates">{section.link}</span>}
                                    </div>
                                    <p className="resume-item-content">{section.content}</p>
                                </div>))}
                            </div>
                            <button onClick={handleDownloadPdf} className="download-btn">Download as PDF</button>
                        </div>
                    </div>
                </div>
                
                <section className="faq-builder-section">
                    <div className="faq-header">
                        <h2 className="section-title">Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-accordion">
                        {faqData.map((faq, index) => (
                            <div className="faq-item" key={index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                                <div className="faq-question">
                                    <p className="faq-question-text">{faq.q}</p>
                                    <div className={`faq-icon ${openFaq === index ? 'active' : ''}`}>
                                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </div>
                                </div>
                                <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default ResumeBuilder;

