import React, { useState } from 'react';

const FAQItem = ({ faq, index, toggleFAQ, activeIndex }) => {
    const isActive = index === activeIndex;

    return (
        <div className="faq-item" onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
                <p>{faq.question}</p>
                <div className={`faq-icon ${isActive ? 'active' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </div>
            </div>
            <div className={`faq-answer ${isActive ? 'open' : ''}`}>
                <p>{faq.answer}</p>
            </div>
        </div>
    );
};


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    // If the clicked item is already open, close it. Otherwise, open the new one.
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What are the eligibility criteria for joining ThePlacemate?',
      answer: 'Our program is open to final year students and recent graduates from any technical stream (B.Tech, M.Tech, MCA, etc.). A basic understanding of programming concepts is recommended to get the most out of our courses.'
    },
    {
      question: 'Is there a fee for the placement program?',
      answer: 'We operate on an Income Share Agreement (ISA) model for some of our premium programs, which means you only pay us after you get a job. We also have standard fee-based programs. Please contact our admissions team for details on the best fit for you.'
    },
    {
      question: 'Is a placement guaranteed after completing the program?',
      answer: 'While we cannot guarantee a job, we provide a 100% placement assistance guarantee. Our extensive network of hiring partners, combined with our rigorous training and interview preparation, results in a very high placement rate for our dedicated students.'
    },
    {
      question: 'How long does the entire process take from training to placement?',
      answer: 'The duration varies depending on the specific track and the individual\'s learning pace. On average, our intensive programs take 3-4 months to complete, with the placement process beginning immediately after.'
    },
    {
        question: 'What kind of support can I expect after getting placed?',
        answer: 'Our support doesn\'t end when you get a job. We provide post-placement guidance, including onboarding help and career progression advice for the first six months to ensure a smooth transition into your new role.'
    }
  ];

  return (
    <>
      <style>{`
        .faq-section {
          background-color: #FFFFFF;
          padding: clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem);
          font-family: 'Lexend', sans-serif;
        }
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .faq-title {
          font-size: clamp(2rem, 5vw, 2.75rem);
          font-weight: 800;
          color: #111827;
          margin: 0 0 0.5rem 0;
        }
        .faq-subtitle {
          font-size: 1.125rem;
          color: #4B5563;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* Accordion Styles */
        .faq-accordion {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .faq-item {
            border: 1px solid #E5E7EB;
            border-radius: 1rem;
            padding: 1.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .faq-item:hover {
            border-color: #C7D2FE;
            box-shadow: 0 4px 15px -5px rgba(79, 70, 229, 0.1);
        }
        .faq-question {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
        }
        .faq-question p {
            font-size: 1.125rem;
            font-weight: 600;
            color: #1F2937;
            margin: 0;
        }
        .faq-icon {
            flex-shrink: 0;
            transition: transform 0.3s ease-in-out;
            color: #4F46E5;
        }
        .faq-icon.active {
            transform: rotate(45deg);
        }

        /* Answer Styles with Animation */
        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease-in-out, margin-top 0.4s ease-in-out;
        }
        .faq-answer.open {
            max-height: 200px; /* Adjust as needed */
            margin-top: 1.5rem;
        }
        .faq-answer p {
            font-size: 1rem;
            color: #4B5563;
            line-height: 1.7;
            margin: 0;
        }

        /* "Still have questions?" section */
        .faq-contact-box {
            margin-top: 4rem;
            text-align: center;
            background-color: #F9FAFB;
            padding: 2.5rem;
            border-radius: 1rem;
        }
        .contact-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #111827;
            margin: 0 0 0.5rem 0;
        }
        .contact-link {
            color: #4F46E5;
            font-weight: 600;
            text-decoration: none;
            transition: opacity 0.3s ease;
        }
        .contact-link:hover {
            opacity: 0.8;
        }
        
        /* --- RESPONSIVE STYLES --- */
        @media (max-width: 768px) {
            .faq-section {
                padding: 3rem 1.5rem;
            }
            .faq-header {
                margin-bottom: 3rem;
            }
            .faq-question p {
                font-size: 1rem;
            }
            .faq-answer p {
                font-size: 0.95rem;
            }
            .faq-item {
                padding: 1.25rem;
            }
        }

        @media (max-width: 480px) {
            .faq-section {
                padding: 3rem 1rem;
            }
            .faq-title {
                font-size: 1.75rem;
            }
            .faq-subtitle {
                font-size: 1rem;
            }
            .contact-title {
                font-size: 1.25rem;
            }
            .faq-contact-box {
                padding: 2rem 1.5rem;
            }
        }
      `}</style>
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">
              Have questions? We've got answers. If you can't find what you're looking for, feel free to reach out to our team.
            </p>
          </div>
          <div className="faq-accordion">
            {faqData.map((faq, index) => (
              <FAQItem 
                key={index}
                faq={faq}
                index={index}
                toggleFAQ={toggleFAQ}
                activeIndex={activeIndex}
              />
            ))}
          </div>
          <div className="faq-contact-box">
             <h3 className="contact-title">Still have questions?</h3>
             <p className="faq-subtitle" style={{margin: '0 auto 1.5rem auto'}}>
                Our admissions team is here to help.
             </p>
             <a href="#" className="contact-link">Contact Us →</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
