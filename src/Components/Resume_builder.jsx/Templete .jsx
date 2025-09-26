import React from 'react';

// --- Template HTML Content ---
// In a real application, these might be separate files or fetched from an API.
// For this self-contained component, they are stored as strings.

const modernTemplateHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
        body { font-family: 'Inter', sans-serif; background: #fff; margin: 0; padding: 20px; font-size: 10px; color: #333; }
        .resume-header { text-align: center; border-bottom: 1.5px solid #eee; padding-bottom: 10px; margin-bottom: 10px; }
        .resume-header h1 { font-size: 24px; font-weight: 700; margin: 0; color: #111; }
        .resume-header p { font-size: 11px; margin: 2px 0; color: #555; }
        .contact-info { font-size: 9px; color: #444; }
        .section { margin-bottom: 15px; }
        .section-title { font-size: 14px; font-weight: 700; color: #222; border-bottom: 1px solid #eee; padding-bottom: 3px; margin-bottom: 8px; }
        .item-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; }
        .item-title { font-weight: 700; font-size: 11px; }
        .item-dates { font-size: 9px; font-style: italic; color: #666; }
        .item-subtitle { font-weight: 500; font-size: 10px; color: #444; }
        .item-content { font-size: 10px; line-height: 1.5; padding-left: 15px; }
        .skills-list { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px; }
        .skill-item { background-color: #f0f0f0; padding: 2px 8px; border-radius: 4px; font-size: 9px; }
    </style>
</head>
<body>
    <div class="resume-header">
        <h1>PRIYA SHARMA</h1>
        <p>Full-Stack Developer</p>
        <p class="contact-info">priya.sharma@example.com | +91 12345 67890 | Navi Mumbai, India | linkedin.com/in/priya</p>
    </div>
    <div class="section">
        <h2 class="section-title">Professional Summary</h2>
        <p style="font-size:10px; line-height: 1.5;">Innovative Full-Stack Developer with 3+ years of experience in building and maintaining responsive web applications using the MERN stack. Proficient in creating intuitive user experiences and scalable solutions.</p>
    </div>
    <div class="section">
        <h2 class="section-title">Work Experience</h2>
        <div class="item-header"><span class="item-title">Software Engineer, Tech Solutions Inc.</span><span class="item-dates">2022 - Present</span></div>
        <ul class="item-content">
            <li>Developed and maintained client-facing web applications using React and Node.js.</li>
            <li>Collaborated with a team of 5 developers to deliver features in an agile environment.</li>
        </ul>
    </div>
    <div class="section">
        <h2 class="section-title">Education</h2>
        <div class="item-header"><span class="item-title">University of Mumbai</span><span class="item-dates">2018 - 2022</span></div>
        <p class="item-subtitle" style="margin-left:0;">Bachelor of Engineering in Computer Science</p>
    </div>
    <div class="section">
        <h2 class="section-title">Skills</h2>
        <div class="skills-list">
            <span class="skill-item">JavaScript</span><span class="skill-item">React.js</span><span class="skill-item">Node.js</span>
            <span class="skill-item">MongoDB</span><span class="skill-item">HTML5 & CSS3</span><span class="skill-item">Git</span>
        </div>
    </div>
</body>
</html>
`;

const classicTemplateHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600&family=Open+Sans:wght@400;600&display=swap');
        body { font-family: 'Open Sans', sans-serif; background: #fff; margin: 0; padding: 25px; font-size: 10px; color: #333; display: flex; }
        .left-column { width: 35%; padding-right: 15px; border-right: 1px solid #ddd; }
        .right-column { width: 65%; padding-left: 15px; }
        h1 { font-family: 'Lora', serif; font-size: 26px; margin: 0 0 5px 0; color: #2C3E50; }
        h2 { font-size: 12px; font-weight: 600; margin: 0 0 10px 0; color: #2C3E50; border-bottom: 1px solid #ddd; padding-bottom: 4px; text-transform: uppercase; letter-spacing: 1px;}
        .contact-item { font-size: 9px; margin-bottom: 5px; }
        .item { margin-bottom: 12px; }
        .item-title { font-weight: 600; font-size: 11px; }
        .item-subtitle { font-size: 10px; color: #555; }
        .item-dates { font-size: 9px; color: #777; }
        .item-content { margin-top: 3px; font-size: 10px; line-height: 1.5; }
    </style>
</head>
<body>
    <div class="left-column">
        <h1>PRIYA SHARMA</h1>
        <p style="font-size:11px; margin: 0 0 15px 0; color: #6D28D9; font-weight: 600;">Full-Stack Developer</p>
        <h2>Contact</h2>
        <p class="contact-item">priya.sharma@example.com</p>
        <p class="contact-item">+91 12345 67890</p>
        <p class="contact-item">Navi Mumbai, India</p>
        <p class="contact-item">linkedin.com/in/priya</p>
        <h2>Skills</h2>
        <p style="font-size:10px; line-height:1.6;">JavaScript, React.js, Node.js, Express, MongoDB, HTML, CSS, Git, Agile</p>
    </div>
    <div class="right-column">
        <h2>Summary</h2>
        <p style="font-size:10px; line-height:1.6;">Innovative Full-Stack Developer with 3+ years of experience in building scalable web applications. Passionate about creating intuitive user experiences.</p>
        <h2>Experience</h2>
        <div class="item">
            <p class="item-title">Software Engineer, Tech Solutions Inc.</p>
            <p class="item-dates">2022 - Present</p>
            <p class="item-content">Developed and maintained client-facing web applications, improving performance by 15%.</p>
        </div>
        <h2>Education</h2>
        <div class="item">
            <p class="item-title">University of Mumbai</p>
            <p class="item-subtitle">Bachelor of Engineering in Computer Science</p>
            <p class="item-dates">2018 - 2022</p>
        </div>
    </div>
</body>
</html>
`;

const creativeTemplateHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        body { font-family: 'Poppins', sans-serif; background: #fff; margin: 0; font-size: 10px; color: #333; }
        .container { display: flex; min-height: 100%; }
        .sidebar { background-color: #4F46E5; color: white; width: 35%; padding: 25px; box-sizing: border-box; }
        .main-content { width: 65%; padding: 25px; box-sizing: border-box; }
        .sidebar h1 { font-size: 24px; margin: 0 0 5px 0; line-height: 1.2; }
        .sidebar h2 { font-size: 12px; margin: 0 0 20px 0; font-weight: 400; opacity: 0.8; }
        .sidebar-section h3 { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px; }
        .sidebar p { font-size: 9px; line-height: 1.6; margin: 5px 0; }
        .main-content h3 { font-size: 14px; color: #4F46E5; font-weight: 700; margin: 0 0 10px 0; }
        .item { margin-bottom: 15px; }
        .item-title { font-size: 11px; font-weight: 600; }
        .item-subtitle { font-size: 10px; color: #555; }
        .item-dates { font-size: 9px; color: #777; float: right; }
    </style>
</head>
<body>
    <div class="container">
        <div class="sidebar">
            <h1>PRIYA SHARMA</h1>
            <h2>Full-Stack Developer</h2>
            <div class="sidebar-section">
                <h3>Contact</h3>
                <p>priya.sharma@example.com</p>
                <p>+91 12345 67890</p>
                <p>Navi Mumbai, India</p>
            </div>
            <div class="sidebar-section">
                <h3>Skills</h3>
                <p>JavaScript, React, Node.js, MongoDB, GraphQL, Docker, AWS</p>
            </div>
        </div>
        <div class="main-content">
            <h3>Summary</h3>
            <p style="font-size:10px; line-height:1.6;">Innovative developer with 3+ years of experience building and maintaining web applications. Passionate about creating intuitive user experiences.</p>
            <h3>Experience</h3>
            <div class="item">
                <p class="item-dates">2022 - Present</p>
                <p class="item-title">Software Engineer, Tech Solutions Inc.</p>
                <p class="item-subtitle">Developed client-facing features using React, improving performance by 15%.</p>
            </div>
            <h3>Education</h3>
             <div class="item">
                <p class="item-dates">2018 - 2022</p>
                <p class="item-title">University of Mumbai</p>
                <p class="item-subtitle">Bachelor of Engineering, Computer Science</p>
            </div>
        </div>
    </div>
</body>
</html>
`;

const minimalistTemplateHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; background: #fff; margin: 0; padding: 30px; font-size: 10px; color: #111; }
        h1 { font-size: 28px; font-weight: 700; margin: 0 0 5px 0; text-align: center; }
        .job-title { font-size: 12px; text-align: center; margin-bottom: 15px; color: #555; }
        .contact-info { text-align: center; font-size: 9px; margin-bottom: 20px; }
        h2 { font-size: 12px; font-weight: 600; margin: 15px 0 8px 0; border-bottom: 1px solid #333; padding-bottom: 3px; text-transform: uppercase; letter-spacing: 1px; }
        .item { margin-bottom: 10px; }
        .item-header { display: flex; justify-content: space-between; align-items: baseline; }
        .item-title { font-size: 11px; font-weight: 600; }
        .item-dates { font-size: 10px; font-weight: 400; color: #444; }
        ul { padding-left: 15px; margin-top: 5px; }
        li { margin-bottom: 4px; }
    </style>
</head>
<body>
    <h1>PRIYA SHARMA</h1>
    <p class="job-title">Full-Stack Developer</p>
    <p class="contact-info">priya.sharma@example.com | +91 12345 67890 | linkedin.com/in/priya</p>
    
    <h2>Summary</h2>
    <p style="font-size:10px; line-height: 1.6;">Innovative Full-Stack Developer with 3+ years of experience building and maintaining web applications using the MERN stack. Passionate about creating intuitive user experiences.</p>
    
    <h2>Experience</h2>
    <div class="item">
        <div class="item-header">
            <span class="item-title">Software Engineer, Tech Solutions Inc.</span>
            <span class="item-dates">2022 - Present</span>
        </div>
        <ul><li>Developed and maintained client-facing web applications using React and Node.js, improving performance by 15%.</li></ul>
    </div>

    <h2>Education</h2>
    <div class="item">
        <div class="item-header">
            <span class="item-title">University of Mumbai - Bachelor of Engineering</span>
            <span class="item-dates">2018 - 2022</span>
        </div>
    </div>
</body>
</html>
`;

const corporateTemplateHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:wght@400;500;700&display=swap');
        body { font-family: 'Roboto', sans-serif; background: #fff; margin: 0; padding: 25px; font-size: 10px; color: #222; }
        .header { text-align: center; margin-bottom: 20px; }
        .header h1 { font-family: 'Merriweather', serif; font-size: 28px; margin: 0; }
        .header p { margin: 5px 0; }
        .section { margin-bottom: 15px; }
        .section-title { font-family: 'Roboto', sans-serif; font-size: 12px; font-weight: 700; color: #000; border-bottom: 2px solid #000; padding-bottom: 2px; margin-bottom: 8px; text-transform: uppercase; }
        .item { margin-bottom: 10px; }
        .item-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; }
        .item-title { font-weight: 700; font-size: 11px; }
        .item-subtitle { font-weight: 500; }
        .item-dates { font-size: 9px; font-weight: 500; }
        .item-content { padding-left: 15px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>PRIYA SHARMA</h1>
        <p>Full-Stack Developer</p>
        <p>priya.sharma@example.com | +91 12345 67890 | linkedin.com/in/priya</p>
    </div>
    <div class="section">
        <h2 class="section-title">Summary</h2>
        <p style="line-height:1.5;">Innovative Full-Stack Developer with 3+ years of experience building and maintaining responsive web applications. Proficient in creating intuitive user experiences and scalable solutions.</p>
    </div>
    <div class="section">
        <h2 class="section-title">Professional Experience</h2>
        <div class="item">
            <div class="item-header">
                <span class="item-title">Software Engineer, Tech Solutions Inc.</span>
                <span class="item-dates">2022 - Present</span>
            </div>
            <ul class="item-content">
                <li>Developed and maintained client-facing web applications using React and Node.js.</li>
                <li>Collaborated with a team of 5 developers to deliver features in an agile environment.</li>
            </ul>
        </div>
    </div>
    <div class="section">
        <h2 class="section-title">Education</h2>
         <div class="item">
            <div class="item-header">
                <span class="item-title">University of Mumbai</span>
                <span class="item-dates">2018 - 2022</span>
            </div>
            <p class="item-subtitle" style="margin:2px 0;">Bachelor of Engineering in Computer Science</p>
        </div>
    </div>
</body>
</html>
`;

const techTemplateHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;700&display=swap');
        body { font-family: 'Inter', sans-serif; background: #1A202C; color: #E2E8F0; margin: 0; padding: 25px; font-size: 10px; }
        .header { text-align: center; margin-bottom: 20px; }
        h1 { font-family: 'Fira Code', monospace; font-size: 24px; color: #A78BFA; margin: 0; }
        .title { color: #A78BFA; }
        .contact { font-family: 'Fira Code', monospace; font-size: 9px; margin-top: 5px; }
        h2 { font-family: 'Fira Code', monospace; font-size: 14px; color: #6EE7B7; margin: 15px 0 8px 0; }
        p, li { color: #CBD5E0; line-height: 1.6; }
        .item-title { font-weight: 700; }
        .item-dates { float: right; font-family: 'Fira Code', monospace; }
        ul { padding-left: 20px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Priya Sharma</h1>
        <p class="contact">priya.sharma@example.com | github.com/priyasharma</p>
    </div>
    <h2><span class="title">></span> Professional Summary</h2>
    <p>Innovative Full-Stack Developer with 3+ years of experience in the MERN stack...</p>
    <h2><span class="title">></span> Experience</h2>
    <p><span class="item-title">Software Engineer</span> @ Tech Solutions <span class="item-dates">2022-Now</span></p>
    <ul><li>Developed and maintained client-facing web applications.</li></ul>
</body>
</html>
`;

const infographicTemplateHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Open+Sans:wght@400;600&display=swap');
        body { font-family: 'Open Sans', sans-serif; background: #fff; margin: 0; padding: 20px; font-size: 10px; }
        .grid { display: grid; grid-template-columns: 1fr 2fr; gap: 20px; }
        .icon { width: 16px; height: 16px; margin-right: 5px; vertical-align: middle; }
        h1 { font-family: 'Roboto Condensed', sans-serif; font-size: 28px; margin: 0; color: #3B82F6; }
        h2 { font-family: 'Roboto Condensed', sans-serif; font-size: 14px; margin-bottom: 8px; }
        .skill-bar { width: 100%; background: #E5E7EB; border-radius: 5px; margin-bottom: 5px; }
        .skill-level { height: 6px; background: #3B82F6; border-radius: 5px; }
    </style>
</head>
<body>
    <div class="grid">
        <div>
            <h1>PRIYA SHARMA</h1>
            <p>Full-Stack Developer</p>
            <h2>CONTACT</h2>
            <p>priya.sharma@example.com</p>
            <h2>SKILLS</h2>
            <p>JavaScript</p>
            <div class="skill-bar"><div class="skill-level" style="width: 90%;"></div></div>
            <p>React</p>
            <div class="skill-bar"><div class="skill-level" style="width: 85%;"></div></div>
        </div>
        <div>
            <h2>SUMMARY</h2>
            <p>Innovative developer with 3+ years of experience...</p>
            <h2>EXPERIENCE</h2>
            <p><strong>Software Engineer</strong>, Tech Solutions Inc. (2022-Now)</p>
        </div>
    </div>
</body>
</html>
`;

const academicTemplateHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap');
        body { font-family: 'Crimson Text', serif; background: #fff; margin: 0; padding: 30px; font-size: 11px; }
        h1 { font-size: 26px; text-align: center; margin: 0; }
        .contact { text-align: center; font-size: 10px; margin: 5px 0 20px 0; }
        h2 { font-size: 14px; font-weight: 700; border-bottom: 1px solid #000; padding-bottom: 2px; margin: 15px 0 8px 0; }
        .item-title { font-weight: 700; font-size: 12px; }
        .item-dates { float: right; }
    </style>
</head>
<body>
    <h1>Priya Sharma</h1>
    <p class="contact">priya.sharma@example.com | Navi Mumbai, India</p>
    <h2>Education</h2>
    <p><span class="item-title">University of Mumbai</span> <span class="item-dates">2018-2022</span><br/>B.Eng. in Computer Science</p>
    <h2>Research Experience</h2>
    <p><span class="item-title">Research Assistant</span> <span class="item-dates">2021-2022</span><br/>AI & Machine Learning Lab</p>
</body>
</html>
`;

const elegantTemplateHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@400&display=swap');
        body { font-family: 'Lato', sans-serif; background: #fff; margin: 0; padding: 25px; font-size: 10px; }
        h1 { font-family: 'Playfair Display', serif; font-size: 32px; text-align: center; margin: 0; letter-spacing: 2px; }
        .subtitle { text-align: center; font-size: 11px; margin: 4px 0 20px 0; color: #888; }
        h2 { font-family: 'Playfair Display', serif; font-size: 16px; text-align: center; margin: 15px 0 8px 0; color: #333; }
        .line { border-top: 1px solid #eee; margin: 0 auto 15px auto; width: 50px; }
    </style>
</head>
<body>
    <h1>Priya Sharma</h1>
    <p class="subtitle">Full-Stack Developer</p>
    <div class="line"></div>
    <p style="text-align:center; font-size:10px; line-height:1.6;">Innovative developer with 3+ years of experience...</p>
    <h2>Experience</h2><div class="line"></div>
    <p><strong>Software Engineer</strong> @ Tech Solutions Inc.</p>
</body>
</html>
`;

const boldTemplateHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap');
        body { font-family: 'Montserrat', sans-serif; background: #fff; margin: 0; padding: 20px; font-size: 10px; }
        .header { display: flex; align-items: center; gap: 15px; border-bottom: 3px solid #111; padding-bottom: 10px; }
        .initials { font-size: 40px; font-weight: 800; }
        h1 { font-size: 24px; margin: 0; line-height: 1; }
        h2 { font-size: 12px; margin: 0; color: #555; }
        h3 { font-size: 14px; font-weight: 800; margin: 15px 0 8px 0; }
    </style>
</head>
<body>
    <div class="header">
        <div class="initials">PS</div>
        <div><h1>PRIYA SHARMA</h1><h2>FULL-STACK DEVELOPER</h2></div>
    </div>
    <h3>EXPERIENCE</h3>
    <p><strong>Software Engineer</strong>, Tech Solutions Inc. | 2022 - Present</p>
</body>
</html>
`;

const ResumeTemplates = () => {

    const templates = [
        { name: "Modern", description: "A clean, single-column layout perfect for tech roles.", srcDoc: modernTemplateHtml },
        { name: "Classic", description: "A professional two-column design, ideal for corporate applications.", srcDoc: classicTemplateHtml },
        { name: "Creative", description: "A stylish design with a sidebar to make your profile stand out.", srcDoc: creativeTemplateHtml },
        { name: "Minimalist", description: "A text-focused design that prioritizes clarity and content.", srcDoc: minimalistTemplateHtml },
        { name: "Corporate", description: "A formal, traditional layout perfect for business and executive roles.", srcDoc: corporateTemplateHtml },
        { name: "Tech", description: "A sleek, dark-mode design that resonates with developers.", srcDoc: techTemplateHtml },
        { name: "Infographic", description: "A visual resume to showcase skills with flair.", srcDoc: infographicTemplateHtml },
        { name: "Academic", description: "A formal layout for research and academic professionals.", srcDoc: academicTemplateHtml },
        { name: "Elegant", description: "A refined design with beautiful typography for creative roles.", srcDoc: elegantTemplateHtml },
        { name: "Bold", description: "A high-impact design for business and marketing roles.", srcDoc: boldTemplateHtml },
    ];

  return (
    <>
      <style>{`
        .template-selector-page {
          font-family: 'Lexend', sans-serif;
          background-color: #F9FAFB;
        }
        .template-hero {
          text-align: center;
          padding: 4rem 2rem;
          background-color: #FFFFFF;
          border-bottom: 1px solid #E5E7EB;
        }
        .template-hero h1 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          color: #111827;
          margin: 0 0 1rem 0;
        }
        .template-hero p {
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          color: #4B5563;
          max-width: 600px;
          margin: 0 auto;
        }
        .template-gallery {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
        }
        .template-card {
          background-color: #FFFFFF;
          border-radius: 1.5rem;
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .template-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 30px -10px rgba(0,0,0,0.1);
        }
        .template-preview {
          width: 100%;
          aspect-ratio: 8.5 / 11;
          border: none;
          background-color: #E5E7EB;
        }
        .template-info {
          padding: 1.5rem;
          text-align: center;
        }
        .template-info h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
        }
        .template-info p {
          color: #4B5563;
          margin: 0 0 1.5rem 0;
        }
        .use-template-btn {
          display: inline-block;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          background-image: linear-gradient(to right, #4F46E5, #6D28D9);
          color: white;
          border: none;
          cursor: pointer;
        }
        .use-template-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 15px rgba(79, 70, 229, 0.2);
        }
      `}</style>
      <div className="template-selector-page">
        <header className="template-hero">
          <h1>Choose Your Template</h1>
          <p>Select a professionally designed, ATS-friendly template to make your resume stand out.</p>
        </header>
        <main className="template-gallery">
          {templates.map((template, index) => (
            <div className="template-card" key={index}>
              <iframe
                className="template-preview"
                srcDoc={template.srcDoc}
                title={`${template.name} Resume Template Preview`}
              ></iframe>
              <div className="template-info">
                <h3>{template.name}</h3>
                <p>{template.description}</p>
                <button className="use-template-btn">Use Template</button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default ResumeTemplates;

