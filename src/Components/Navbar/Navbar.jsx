import React, { useState, useContext } from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import {  BiUser } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import { GoChecklist} from 'react-icons/go';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { BsSun, BsMoon } from 'react-icons/bs';
import { ThemeContext } from '../../Context/ThemeContext';
import './Navbar.css';

export default function Navbar() {
  const [active, setActive] = useState('#');
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <a href="#"
       onClick={()=> setActive("#")}
       className={active === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a href="#about"
       onClick={()=> setActive("#about")}
       className={active === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a href="#projects"
       onClick={()=> setActive("#projects")}
       className={active === "#projects" ? "active" : ""}
      >
        <FaLaptopCode />
      </a>

      <a href="#skills"
       onClick={()=> setActive("#skills")}
       className={active === "#skills" ? "active" : ""}
      >
        <GoChecklist />
      </a>
      <a href="#contact"
       onClick={()=> setActive("#contact")}
       className={active === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>

      <button className="theme-toggle" onClick={toggleTheme} title={isDark ? "Light mode" : "Dark mode"}>
        {isDark ? <BsSun /> : <BsMoon />}
      </button>
      
    </nav>
  )
}
