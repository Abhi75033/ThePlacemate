import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import App from './App.jsx';
import FistSection from './Components/Hero_section/Fisrt_Section.jsx';
import AuthPage from './Components/Login/Auth.jsx';
import "./index.css";
import AboutPage from './Components/Links/About.jsx';
import CoursesPage from './Components/Links/Courses.jsx';
import PlacementsPage from './Components/Links/Placement.jsx';
import RecruitersPage from './Components/Links/Recruiters.jsx';
import TestimonialsPage from './Components/Links/Testimonials.jsx';
import ContactPage from './Components/Links/contact.jsx';
import BookingHeader from './Components/Booking/Booking_a_Mentor.jsx';
import Step1_FindMentor from './Components/Booking/FInd_a_Mentor.jsx';
import Step2_MentorProfile from './Components/Booking/MetntorProfile.jsx';
import Step3_BookSession from './Components/Booking/PaymentPage.jsx';
import BookingConfirmation from './Components/Booking/Confirmation.jsx';
import Step2_BookMockInterview from './Components/Booking/Book_Mock_interview/Book_Mock_interview.jsx';
import Step3_BookMockInterview from './Components/Booking/Book_Mock_interview/Payment_page.jsx';
import SubscriptionPage from './Components/Links/Subscribe.jsx';
import DashboardHeader from './Components/DashBoard/Student_Dashboard.jsx';
import NotFoundPage from './Components/404_NotFound/Not_found_404.jsx';
import ResumeBuilder from './Components/Resume_builder.jsx/Resume_buider.jsx';
import ResumeTemplates from './Components/Resume_builder.jsx/Templete .jsx';
// import BuildResumePage from './Components/Resume_builder/Resume_buider.jsx';

// Your router configuration is correct!
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='/' element={<FistSection/>}/> {/* Use path='' for index routes */}
            <Route path='/login' element={<AuthPage/>}/> {/* Use relative paths */}
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/courses' element={<CoursesPage/>}/>
            <Route path='/placements' element={<PlacementsPage/>}/>
            <Route path='/testimonials' element={<TestimonialsPage/>}/>
            <Route path='/recruiters' element={<RecruitersPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/book_mentor' element={<BookingHeader/>}/>
            <Route path='/find_mentor' element={<Step1_FindMentor/>}/>
            <Route path='/metor_profile' element={<Step2_MentorProfile/>}/>
            <Route path='/payment_page' element={<Step3_BookSession/>}/>
            <Route path='/confirmation' element={<BookingConfirmation/>}/>
            <Route path='/book_mock_interview' element={<Step2_BookMockInterview/>}/>
            <Route path='/payment_page_mock' element={<Step3_BookMockInterview/>}/>
            <Route path='/subscribe' element={<SubscriptionPage/>}/>
            <Route path='/student_dashboard' element={<DashboardHeader/>}/>
            <Route path='/resume_builder' element={<ResumeBuilder/>}/>
              <Route path='/reseume_temp' element={<ResumeTemplates/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Route>
    )
);

// The fix is here: Render the <RouterProvider> instead of <App />
createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
);

