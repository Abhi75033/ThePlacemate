
import { Outlet } from "react-router-dom";
import FistSection from "./Components/Hero_section/Fisrt_Section";
import Header from '../src/Components/Header'
import Footer from "./Components/Footer";




function App() {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
     
    </>
  )
}

export default App
