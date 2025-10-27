import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App.jsx";
import FistSection from "./Components/Hero_section/Fisrt_Section.jsx";
import AuthPage from "./Components/Login/Auth.jsx";
import "./index.css";
import AboutPage from "./Components/Links/About.jsx";
import CoursesPage from "./Components/Links/Courses.jsx";
import PlacementsPage from "./Components/Links/Placement.jsx";
import RecruitersPage from "./Components/Links/Recruiters.jsx";
import TestimonialsPage from "./Components/Links/Testimonials.jsx";
import ContactPage from "./Components/Links/contact.jsx";
import BookingHeader from "./Components/Booking/Booking_a_Mentor.jsx";
import Step1_FindMentor from "./Components/Booking/FInd_a_Mentor.jsx";
import Step2_MentorProfile from "./Components/Booking/MetntorProfile.jsx";
import Step3_BookSession from "./Components/Booking/PaymentPage.jsx";
import BookingConfirmation from "./Components/Booking/Confirmation.jsx";
import Step2_BookMockInterview from "./Components/Booking/Book_Mock_interview/Book_Mock_interview.jsx";
import Step3_BookMockInterview from "./Components/Booking/Book_Mock_interview/Payment_page.jsx";
import SubscriptionPage from "./Components/Links/Subscribe.jsx";
import DashboardHeader from "./Components/DashBoard/Student_Dashboard.jsx";
import NotFoundPage from "./Components/404_NotFound/Not_found_404.jsx";
import ResumeBuilder from "./Components/Resume_builder.jsx/Resume_buider.jsx";
import ResumeTemplates from "./Components/Resume_builder.jsx/Templete .jsx";
import BookSessionHero from "./Components/Book a Session/Book_new_session.jsx";
import ViewCourseHero from "./Components/Links/Sublinks/View_course.jsx";
import CheckoutPage from "./Components/Links/Sublinks/Enroll_now.jsx";
import PaymentSuccessPage from "./Components/Links/Sublinks/Enrollment_successfull.jsx";
import CoursePlayerPage from "./Components/Links/Sublinks/course_player.jsx";
import InteractivePlayerPage from "./Components/Links/Sublinks/Content_player.jsx";
import RecruiterPartnerPage from "./Components/Links/Sublinks/Partner_with_us.jsx";
import PostJobPage from "./Components/Links/Sublinks/Posting_job.jsx";
import CandidatePage from "./Components/Links/Sublinks/FInd_job.jsx";
import JobConfirmationPage from "./Components/Links/Sublinks/confirm_posting.jsx";
import RecruiterAuthPage from "./Components/Links/Sublinks/Recuriters/Login_signup.jsx";
import RecruiterDashboard from "./Components/Links/Sublinks/Recuriters/Dashboard.jsx";
import AdminDashboard from "./Components/Links/Sublinks/Admin/Dashboard.jsx";
import AdminLogin from "./Components/Links/Sublinks/Admin/Login.jsx";
import AuthCallback from "./Components/Auth/AuthCallback.jsx";
import AI_Room from "./Components/Links/Sublinks/AI_room/Ai_room.jsx";
// import BuildResumePage from './Components/Resume_builder/Resume_buider.jsx';

// Your router configuration is correct!
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<FistSection />} />{" "}
      {/* Use path='' for index routes */}
      <Route path="/login" element={<AuthPage />}/> 
       {/* <Route path="/signup" element={<AuthPage />}/>  */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/placements" element={<PlacementsPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/recruiters" element={<RecruitersPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/book_mentor" element={<BookingHeader />} />
      <Route path="/find_mentor" element={<Step1_FindMentor />} />
      <Route path="/metor_profile" element={<Step2_MentorProfile />} />
      <Route path="/payment_page" element={<Step3_BookSession />} />
      <Route path="/confirmation" element={<BookingConfirmation />} />
      <Route
        path="/book_mock_interview"
        element={<Step2_BookMockInterview />}
      />
      <Route path="/payment_page_mock" element={<Step3_BookMockInterview />} />
      <Route path="/subscribe" element={<SubscriptionPage />} />
      <Route path="/student_dashboard" element={<DashboardHeader />} />
      <Route path="/resume_builder" element={<ResumeBuilder />} />
      <Route path="/reseume_temp" element={<ResumeTemplates />} />
      <Route path="/book_new_seeion" element={<BookSessionHero />} />
      <Route path="/view_course" element={<ViewCourseHero />} />
      <Route path="/enroll_now" element={<CheckoutPage />} />
      <Route path="/successfull_payment" element={<PaymentSuccessPage />} />
      <Route path="/course_player" element={<CoursePlayerPage />} />
      <Route path="/conent_player" element={<InteractivePlayerPage />} />
      <Route path="/partner_with_us" element={<RecruiterPartnerPage />} />
      <Route path="/post_a_job" element={<PostJobPage />} />
      <Route path="/Find_job" element={<CandidatePage />} />
      <Route path="/confirm_posting" element={<JobConfirmationPage />} />
      <Route path="/recuriter_login" element={<RecruiterAuthPage />} />
      <Route path="/recuriter_dashboard" element={<RecruiterDashboard />} />
      <Route path="/admin_dash" element={<AdminDashboard />} />
      <Route path="/admin_login" element={<AdminLogin />} />
      <Route path="/auth/callback" element={<AuthCallback />} />
      <Route path="/ai_room" element={<AI_Room/>}/>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

// The fix is here: Render the <RouterProvider> instead of <App />
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
