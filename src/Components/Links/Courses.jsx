import React, { useState, useEffect, useRef } from 'react';

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  
  const coursesGridRef = useRef(null);
  const benefitsGridRef = useRef(null);
  const guaranteeSectionRef = useRef(null); // Ref for the new section

  // --- MOCK DATA for courses ---
  const coursesData = [
    // Programming & Development
    { id: 1, title: 'C / C++ Programming', category: 'Programming & Development', description: 'Master the fundamentals of C and C++ from basic syntax to advanced topics like memory management and object-oriented programming.', level: 'Beginner', duration: '8 Weeks', image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=C/C++' },
    { id: 2, title: 'Java Programming', category: 'Programming & Development', description: 'Learn the powerful and versatile Java language, perfect for building enterprise-scale applications, Android apps, and more.', level: 'Beginner to Advanced', duration: '10 Weeks', image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Java' },
    { id: 3, title: 'Python Programming', category: 'Programming & Development', description: 'From web development to data science, learn the most popular programming language in the world.', level: 'Beginner', duration: '6 Weeks', image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Python' },
    { id: 4, title: 'JavaScript (ES6+)', category: 'Programming & Development', description: 'Unlock the full potential of the web with modern JavaScript, including asynchronous programming, modules, and more.', level: 'Intermediate', duration: '5 Weeks', image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=JavaScript' },
    { id: 5, title: 'Go (Golang)', category: 'Programming & Development', description: 'Learn Google\'s fast, efficient language for building high-performance, concurrent applications.', level: 'Intermediate', duration: '7 Weeks', image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Go' },

    // Web Development
    { id: 6, title: 'React.js', category: 'Web Development', description: 'Build modern, fast, and scalable user interfaces with the most popular front-end library in the world.', level: 'Intermediate', duration: '6 Weeks', image: 'https://placehold.co/600x400/6D28D9/FFFFFF?text=React.js' },
    { id: 7, title: 'Node.js & Express.js', category: 'Web Development', description: 'Master back-end development by building robust and scalable APIs with Node.js and the Express framework.', level: 'Intermediate', duration: '8 Weeks', image: 'https://placehold.co/600x400/6D28D9/FFFFFF?text=Node.js' },
    { id: 8, title: 'Django (Python)', category: 'Web Development', description: 'Learn the "batteries-included" Python framework for building secure and maintainable web applications quickly.', level: 'Intermediate', duration: '8 Weeks', image: 'https://placehold.co/600x400/6D28D9/FFFFFF?text=Django' },
    { id: 9, title: 'Angular', category: 'Web Development', description: 'Build powerful, enterprise-grade web applications with Google\'s comprehensive front-end framework.', level: 'Advanced', duration: '10 Weeks', image: 'https://placehold.co/600x400/6D28D9/FFFFFF?text=Angular' },
    
    // Mobile App Development
    { id: 10, title: 'Android Development (Kotlin)', category: 'Mobile App Development', description: 'Learn to build beautiful, modern Android applications using Kotlin, the official language for Android development.', level: 'Beginner to Advanced', duration: '12 Weeks', image: 'https://placehold.co/600x400/3B82F6/FFFFFF?text=Android' },
    { id: 11, title: 'iOS Development (Swift)', category: 'Mobile App Development', description: 'Master Swift and Xcode to build elegant and high-performance applications for iPhone, iPad, and other Apple devices.', level: 'Beginner to Advanced', duration: '12 Weeks', image: 'https://placehold.co/600x400/3B82F6/FFFFFF?text=iOS' },
    { id: 12, title: 'React Native', category: 'Mobile App Development', description: 'Build cross-platform mobile apps for both iOS and Android using a single JavaScript codebase with React Native.', level: 'Intermediate', duration: '9 Weeks', image: 'https://placehold.co/600x400/3B82F6/FFFFFF?text=React+Native' },
    { id: 13, title: 'Flutter', category: 'Mobile App Development', description: 'Create beautiful, natively compiled applications for mobile, web, and desktop from a single codebase with Google\'s UI toolkit.', level: 'Intermediate', duration: '9 Weeks', image: 'https://placehold.co/600x400/3B82F6/FFFFFF?text=Flutter' },

    // Databases
    { id: 14, title: 'SQL Basics (MySQL, PostgreSQL)', category: 'Databases', description: 'Master the fundamentals of SQL to manage and query relational databases like MySQL and PostgreSQL effectively.', level: 'Beginner', duration: '4 Weeks', image: 'https://placehold.co/600x400/10B981/FFFFFF?text=SQL' },
    { id: 15, title: 'MongoDB', category: 'Databases', description: 'Learn the leading NoSQL database and build scalable, flexible applications with a JSON-like document model.', level: 'Intermediate', duration: '5 Weeks', image: 'https://placehold.co/600x400/10B981/FFFFFF?text=MongoDB' },

    // Cloud & DevOps
    { id: 16, title: 'AWS Certified Solutions Architect', category: 'Cloud & DevOps', description: 'Prepare for the AWS Solutions Architect exam and learn to design and deploy scalable, highly available systems on AWS.', level: 'Intermediate', duration: '10 Weeks', image: 'https://placehold.co/600x400/F59E0B/FFFFFF?text=AWS' },
    { id: 17, title: 'Docker & Kubernetes', category: 'Cloud & DevOps', description: 'Master containerization with Docker and orchestrate your applications at scale with Kubernetes.', level: 'Advanced', duration: '8 Weeks', image: 'https://placehold.co/600x400/F59E0B/FFFFFF?text=DevOps' },

    // Cybersecurity
    { id: 18, title: 'Ethical Hacking', category: 'Cybersecurity', description: 'Learn the tools and techniques used by ethical hackers to identify and fix vulnerabilities in systems.', level: 'Intermediate', duration: '9 Weeks', image: 'https://placehold.co/600x400/EF4444/FFFFFF?text=Hacking' },

    // Data Science & AI
    { id: 19, title: 'Machine Learning (Scikit-learn, TensorFlow)', category: 'Data Science & AI', description: 'Dive into machine learning concepts and build predictive models using Python\'s most popular libraries.', level: 'Intermediate', duration: '12 Weeks', image: 'https://placehold.co/600x400/EC4899/FFFFFF?text=ML' },
    { id: 20, title: 'Generative AI & LLMs', category: 'Data Science & AI', description: 'Explore the cutting-edge world of Generative AI and learn how to work with Large Language Models (LLMs).', level: 'Advanced', duration: '8 Weeks', image: 'https://placehold.co/600x400/EC4899/FFFFFF?text=GenAI' },

    // Blockchain & Web3
    { id: 21, title: 'Ethereum & Solidity Smart Contracts', category: 'Blockchain & Web3', description: 'Learn to write and deploy smart contracts on the Ethereum blockchain using the Solidity programming language.', level: 'Advanced', duration: '10 Weeks', image: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=Web3' },
    
    // Other Skills
    { id: 22, title: 'UI/UX Design (Figma)', category: 'Other Skills', description: 'Master the principles of user-centered design and create beautiful, intuitive interfaces with Figma.', level: 'Beginner', duration: '6 Weeks', image: 'https://placehold.co/600x400/6B7280/FFFFFF?text=UI/UX' },
    { id: 23, title: 'Game Development (Unity)', category: 'Other Skills', description: 'Learn to build 2D and 3D games from scratch using the powerful Unity game engine.', level: 'Beginner to Intermediate', duration: '12 Weeks', image: 'https://placehold.co/600x400/6B7280/FFFFFF?text=Unity' },
  ];

  const courseCategories = [ 'All', 'Programming & Development', 'Web Development', 'Mobile App Development', 'Databases', 'Cloud & DevOps', 'Cybersecurity', 'Data Science & AI', 'Blockchain & Web3', 'Other Skills' ];

  const filteredCourses = coursesData.filter(course => {
    const matchesFilter = activeFilter === 'All' || course.category === activeFilter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Effect for staggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-enter');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardsToObserve = document.querySelectorAll('.course-card, .benefit-card, .guarantee-section');
    cardsToObserve.forEach((card) => observer.observe(card));

    return () => {
        cardsToObserve.forEach((card) => observer.unobserve(card));
    };
  }, [filteredCourses]);


  // --- Icon SVGs ---
  const SearchIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);
  const NoCoursesIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{color: '#A0AEC0', marginBottom: '1rem'}}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>);
  const LevelIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>);
  const DurationIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>);
  const ArrowRightIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>);
  const ExpertIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
  const ProjectIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
  const SupportIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
  const GuaranteeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>;

  return (
    <>
      <style>{`
        .courses-page { font-family: 'Lexend', sans-serif; color: #1a202c; line-height: 1.6; background-color: #F9FAFB; }
        .section-container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
        .hero-section { min-height: 60vh; display: flex; align-items: center; justify-content: center; text-align: center; position: relative; color: white; overflow: hidden; background-color: #111827; }
        .hero-bg-shapes { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; }
        .hero-bg-shapes div { position: absolute; border-radius: 50%; background: linear-gradient(45deg, rgba(109, 40, 217, 0.4), rgba(139, 92, 246, 0.2)); animation: float 20s infinite ease-in-out; }
        .shape1 { width: 200px; height: 200px; top: 10%; left: 15%; animation-duration: 22s; }
        .shape2 { width: 150px; height: 150px; top: 70%; left: 30%; animation-duration: 18s; animation-delay: 2s; }
        .shape3 { width: 100px; height: 100px; top: 25%; left: 80%; animation-duration: 25s; animation-delay: 4s; }
        @keyframes float { 0% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-20px) scale(1.05); } 100% { transform: translateY(0px) scale(1); } }
        .hero-content { max-width: 800px; padding: 2rem; z-index: 1; position: relative; }
        .hero-title { font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 700; margin: 0 0 1rem 0; letter-spacing: -1px; }
        .hero-subtitle { font-size: clamp(1.1rem, 2vw, 1.25rem); font-weight: 300; max-width: 600px; margin: 0 auto 2.5rem auto; opacity: 0.9; }
        .search-bar-container { position: relative; max-width: 600px; margin: 0 auto; }
        .search-input { width: 100%; box-sizing: border-box; padding: 1.1rem 4.5rem 1.1rem 1.75rem; border-radius: 9999px; border: 1px solid rgba(255, 255, 255, 0.2); font-size: 1.1rem; font-family: 'Lexend', sans-serif; background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); color: white; transition: all 0.3s ease; }
        .search-input::placeholder { color: rgba(255, 255, 255, 0.6); }
        .search-input:focus { outline: none; box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.4); border-color: #8B5CF6; background-color: rgba(255,255,255,0.2); }
        .search-button { position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); background-color: #8B5CF6; color: white; border: none; border-radius: 50%; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease; }
        .search-button:hover { background-color: #7C3AED; transform: translateY(-50%) scale(1.05); }
        .courses-list-section { background-color: #F9FAFB; }
        .section-title { font-size: 2.5rem; font-weight: 700; color: #111827; text-align: center; margin-bottom: 2.5rem; }
        .category-filters { display: flex; justify-content: center; gap: 2rem; margin-bottom: 3.5rem; flex-wrap: wrap; border-bottom: 1px solid #E5E7EB; }
        .filter-btn { background: none; border: none; padding: 0.5rem 0.25rem 1rem 0.25rem; font-weight: 600; font-size: 1rem; color: #6B7280; cursor: pointer; transition: all 0.3s ease; position: relative; }
        .filter-btn::after { content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 3px; background-color: #6D28D9; transform: scaleX(0); transition: transform 0.3s ease; }
        .filter-btn:hover { color: #111827; }
        .filter-btn.active { color: #111827; }
        .filter-btn.active::after { transform: scaleX(1); }
        .courses-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; }
        .course-card { background-color: white; border-radius: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05); display: flex; flex-direction: column; transition: all 0.3s ease; opacity: 0; transform: translateY(20px); position: relative; border: 1px solid #F3F4F6; }
        .course-card::before { content: ""; position: absolute; inset: 0; border-radius: 1.5rem; padding: 1px; background: linear-gradient(135deg, #8B5CF6, #EC4899); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; opacity: 0; transition: opacity 0.3s ease; }
        .course-card:hover { transform: translateY(-8px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); }
        .course-card:hover::before { opacity: 1; }
        .card-enter { opacity: 1; transform: translateY(0); }
        .course-image { width: 100%; height: 200px; object-fit: cover; border-top-left-radius: 1.5rem; border-top-right-radius: 1.5rem; }
        .course-info { padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; }
        .course-category { color: #6D28D9; font-weight: 600; font-size: 0.875rem; margin-bottom: 0.75rem; }
        .course-title { font-size: 1.3rem; font-weight: 700; margin: 0 0 0.75rem 0; color: #111827; line-height: 1.4; }
        .course-description { font-size: 0.95rem; color: #4B5563; flex-grow: 1; margin-bottom: 1.5rem; }
        .course-meta { display: flex; align-items: center; gap: 1.5rem; font-size: 0.875rem; color: #6B7280; margin-bottom: 1.5rem; }
        .course-meta-item { display: flex; align-items: center; gap: 0.5rem; }
        .view-course-btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem; width: 100%; padding: 0.75rem; background-color: #F3F4F6; color: #111827; border: none; border-radius: 0.75rem; font-weight: 600; text-decoration: none; transition: all 0.3s ease; }
        .view-course-btn:hover { background-color: #6D28D9; color: white; }
        .no-courses-found { text-align: center; padding: 4rem 0; font-size: 1.2rem; color: #718096; display: flex; flex-direction: column; align-items: center; justify-content: center; grid-column: 1 / -1; }
        .benefits-section { background-color: #FFFFFF; }
        .benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem; }
        .benefit-card { background-color: #F9FAFB; border: 1px solid #F3F4F6; border-radius: 1.5rem; padding: 2rem; text-align: center; opacity: 0; transform: translateY(20px); }
        .benefit-card.card-enter { opacity: 1; transform: translateY(0); transition: opacity 0.5s ease, transform 0.5s ease; }
        .benefit-icon { display: inline-flex; align-items: center; justify-content: center; width: 60px; height: 60px; border-radius: 50%; background-color: #E0E7FF; color: #4F46E5; margin-bottom: 1.5rem; }
        .benefit-title { font-size: 1.25rem; font-weight: 600; color: #111827; margin: 0 0 0.5rem 0; }
        .benefit-description { font-size: 1rem; color: #4B5563; }
        
        /* --- Guarantee Section --- */
        .guarantee-section { background-color: #F9FAFB; opacity: 0; transform: translateY(20px); }
        .guarantee-section.card-enter { opacity: 1; transform: translateY(0); transition: opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s; }
        .guarantee-content { display: flex; align-items: center; gap: 2rem; background-color: #FFFFFF; padding: 3rem; border-radius: 1.5rem; border: 1px solid #F3F4F6; }
        .guarantee-icon-container { flex-shrink: 0; color: #10B981; }
        .guarantee-title { font-size: 1.75rem; font-weight: 700; color: #111827; margin: 0 0 0.5rem 0; }
        .guarantee-description { font-size: 1rem; color: #4B5563; margin: 0 0 1rem 0; }
        .guarantee-link { font-weight: 600; color: #6D28D9; text-decoration: none; }
        
        /* --- CTA Section --- */
        .cta-section { padding: 5rem 2rem; background-color: #1F2937; position: relative; overflow: hidden; }
        .cta-bg-pattern { position: absolute; top: 50%; left: 50%; width: 200%; height: 200%; background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px); background-size: 20px 20px; transform: translate(-50%, -50%); animation: bg-pan 30s linear infinite; }
        @keyframes bg-pan { 0% { background-position: 0% 0%; } 100% { background-position: 100% 100%; } }
        .cta-content { position: relative; z-index: 1; max-width: 700px; margin: 0 auto; text-align: center; color: white; }
        .cta-title { font-size: clamp(2rem, 5vw, 2.5rem); font-weight: 700; margin-bottom: 1rem; }
        .cta-text { font-size: clamp(1rem, 2vw, 1.125rem); margin-bottom: 2rem; opacity: 0.8; }
        .cta-btn { display: inline-block; padding: 0.8rem 2.5rem; border-radius: 9999px; font-weight: 600; text-decoration: none; transition: all 0.3s ease; background-image: linear-gradient(to right, #6D28D9, #8B5CF6); color: white; border: none; }
        .cta-btn:hover { transform: translateY(-3px) scale(1.05); box-shadow: 0 10px 20px rgba(139, 92, 246, 0.2); }

        @media (max-width: 768px) { .hero-title { font-size: 2.5rem; } .hero-subtitle { font-size: 1.1rem; } .section-title { font-size: 2rem; } .guarantee-content { flex-direction: column; text-align: center; } }
      `}</style>

      <div className="courses-page">
        <section className="hero-section">
          <div className="hero-bg-shapes">
            <div className="shape1"></div><div className="shape2"></div><div className="shape3"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">Find Your Future</h1>
            <p className="hero-subtitle">Explore our extensive catalog of courses designed to equip you with the skills you need for success.</p>
            <form className="search-bar-container" onSubmit={(e) => e.preventDefault()}>
              <input type="text" className="search-input" placeholder="Search for courses (e.g., React, Python...)" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              <button type="submit" className="search-button" aria-label="Search"><SearchIcon /></button>
            </form>
          </div>
        </section>

        <section className="courses-list-section section-container">
            <h2 className="section-title">Explore Our Courses</h2>
            <div className="category-filters">
                {courseCategories.map(category => (
                    <button key={category} className={`filter-btn ${activeFilter === category ? 'active' : ''}`} onClick={() => setActiveFilter(category)}>{category}</button>
                ))}
            </div>

            <div className="courses-grid" ref={coursesGridRef}>
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course, index) => (
                        <div key={course.id} className="course-card" style={{ transitionDelay: `${index * 50}ms` }}>
                            <img src={course.image} alt={course.title} className="course-image" />
                            <div className="course-info">
                                <p className="course-category">{course.category}</p>
                                <h3 className="course-title">{course.title}</h3>
                                <p className="course-description">{course.description}</p>
                                <div className="course-meta">
                                    <span className="course-meta-item"><LevelIcon /> {course.level}</span>
                                    <span className="course-meta-item"><DurationIcon /> {course.duration}</span>
                                </div>
                                <a href="#" className="view-course-btn">
                                    <span>View Course</span>
                                    <ArrowRightIcon />
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-courses-found">
                        <NoCoursesIcon />
                        <p>No courses found. Try a different search or filter.</p>
                    </div>
                )}
            </div>
        </section>

        <section className="benefits-section section-container">
            <h2 className="section-title">Why Our Courses Stand Out</h2>
            <div className="benefits-grid" ref={benefitsGridRef}>
                <div className="benefit-card" style={{ transitionDelay: '0ms' }}>
                    <div className="benefit-icon"><ExpertIcon /></div>
                    <h3 className="benefit-title">Expert Instructors</h3>
                    <p className="benefit-description">Learn from industry veterans who bring real-world experience and insights to every lesson.</p>
                </div>
                <div className="benefit-card" style={{ transitionDelay: '100ms' }}>
                    <div className="benefit-icon"><ProjectIcon /></div>
                    <h3 className="benefit-title">Practical Projects</h3>
                    <p className="benefit-description">Build a portfolio of hands-on projects that showcase your skills to potential employers.</p>
                </div>
                <div className="benefit-card" style={{ transitionDelay: '200ms' }}>
                    <div className="benefit-icon"><SupportIcon /></div>
                    <h3 className="benefit-title">Career Support</h3>
                    <p className="benefit-description">From resume building to interview prep, we're here to support you every step of your career journey.</p>
                </div>
            </div>
        </section>

        <section className="guarantee-section section-container card-enter">
            <div className="guarantee-content">
                <div className="guarantee-icon-container">
                    <GuaranteeIcon />
                </div>
                <div className="guarantee-text">
                    <h2 className="guarantee-title">30-Day Money-Back Guarantee</h2>
                    <p className="guarantee-description">
                        We are so confident in the value of our courses that we offer a hassle-free, 30-day money-back guarantee. If you're not satisfied for any reason, just let us know, and we'll provide a full refund.
                    </p>
                    <a href="#" className="guarantee-link">Learn More →</a>
                </div>
            </div>
        </section>

        <section className="cta-section">
            <div className="cta-bg-pattern"></div>
            <div className="cta-content">
                <h2 className="cta-title">Ready to Launch Your Career?</h2>
                <p className="cta-text">Join ThePlacemate today and take the first step towards a successful and fulfilling career in tech. Your dream job is waiting.</p>
                <a href="#" className="cta-btn">Get Started Now</a>
            </div>
        </section>
      </div>
    </>
  );
};

export default CoursesPage;

