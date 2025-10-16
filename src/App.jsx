
import { Outlet } from "react-router-dom";
import FistSection from "./Components/Hero_section/Fisrt_Section";
import Header from '../src/Components/Header'
import Footer from "./Components/Footer";
import { AuthProvider } from "./Contexts/AuthContext";
import PageTransition from "./Components/PageTransition";




function App() {
  return (
    <AuthProvider>
     <Header/>
     <PageTransition>
       <Outlet/>
     </PageTransition>
     <Footer/>
    </AuthProvider>
  )
}

export default App
