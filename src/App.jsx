import './App.css'
import Navbar from  "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

function App() {

  return (
   <>
     <Navbar />
     <Home />
     <About />
    <Projects />
     <Skills />
    <Contact />
   </>
  )
}


export default App
