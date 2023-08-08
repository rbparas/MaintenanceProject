import React from "react";
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Home/Hero';
import MainNav from './components/Navbar/MainNav';
import TopNavbar from "./components/Navbar/TopNavbar";
import Project from './components/Project/Project';
import Service from './components/Service/Service';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <>
      
        <TopNavbar />
        <MainNav />          
        <Hero />          
        <About title="About Our Company" />          
        <Service title="What we are offering"/>          
        <Project title="Honorable Mentions"/>          
        <Testimonial title="What our clients say"/>          
        <Contact title="Have some works for us?"/>
        
        <Footer />
      
    </>
  );
}

export default App;
