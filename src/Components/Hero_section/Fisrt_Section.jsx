import { useState } from "react";
import "./Fisrt_Section.css"
import Why_we_Choose from "./Why_we_choose";
import InterviewPrepAI from "./Interview_prep";
import HowItWorks from "./How_it_works";
import SuccessStories from "./Success_stories";
import FAQ from "./FAQ";
import MeetOurInstructors from "./Meet_our_instructor";
import Footer from "../Footer";
import AIInterviewPromo from "./Ai_room";


function FistSection() {
    const [interest, setInterest] = useState('');

    return (
        <>
    <div className="header-wrapper">
      <div className="header-container">
        <div className="header-content">
          <h1 className="logo-title bree-serif-regular">ThePlacemate</h1>
          <h2 className="main-headline">A Mate 🤝 to Innovate 💡, Motivate ✨ & Get You Placed 🎯</h2>
          <p className="sub-headline">
            Crafting meaningful connections between people and places. Discover communities, events, and spaces that feel like home.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Get started</button>
            <a href="#" className="btn btn-secondary">Learn more</a>
          </div>
        </div>

        <div className="header-form-section">
          <div className="form-card">
            <div className="form-group">
              <label htmlFor="yourName" className="form-label">Your name</label>
              <input type="text" id="yourName" className="form-input" placeholder="Jane Doe" />
            </div>

            <div className="form-group">
              <label htmlFor="interestedIn" className="form-label">Interested in</label>
              <select 
                id="interestedIn" 
                className="form-input" 
                value={interest} 
                onChange={(e) => setInterest(e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="events">Events</option>
                <option value="communities">Communities</option>
                <option value="listing_space">Listing My Space</option>
                <option value="partnerships">Partnerships</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* --- Conditional Input Field --- */}
            {/* This div only appears if 'interest' state is 'other' */}
           { interest == 'other' && <div className={`form-group specify-group}`}>
              <label htmlFor="otherInterest" className="form-label">Please specify</label>
              <input
                type="text"
                id="otherInterest"
                className="form-input"
                placeholder="e.g., Media inquiry"
              />
            </div>}

            <div className="form-group">
              <label htmlFor="email" className="form-label">Phone</label>
              <input type="number" id="email" className="form-input" placeholder="+91 1800-1800-00" />
            </div>

            <div className="form-actions">
              <button className="btn form-btn-primary">Start Your Placement Journey</button>
              <button className="btn form-btn-secondary">Clear</button>
            </div>
          </div>
        </div>
      </div>
    </div>

<Why_we_Choose/>
<InterviewPrepAI/>
<AIInterviewPromo/>
<HowItWorks/>
<SuccessStories/>
<MeetOurInstructors/>
<FAQ/>

        </>
      );
}

export default FistSection;