
// import './App.css';
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Experience from"./components/Experience"
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact"
import Form from "./components/Form";
import Aos from "aos";
import "aos/dist/aos.css"

function App() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
      <Navbar />
      <div className="container projects">
      <Home />
      <Experience />
      <Skill />
      <Project />
      <Form />
      <Contact />
     
      </div>
    
    </>
  );
}

export default App;
