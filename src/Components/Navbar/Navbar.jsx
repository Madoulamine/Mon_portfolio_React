import React, { useState, useContext, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { BsSun, BsMoon } from 'react-icons/bs';
import { ThemeContext } from '../../Context/ThemeContext';
import './Navbar.css';

export default function Navbar() {
  const [activeNav, setActiveNav] = useState('#');
  const { isDark, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveNav('#');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="app-navbar">
      <a
        title="Accueil"
        href="#"
        onClick={() => { setActiveNav('#'); window.dispatchEvent(new Event('reset-typewriter')); }}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        title="À Propos"
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <BiUser />
      </a>
      <a
        title="Projets"
        href="#projects"
        onClick={() => setActiveNav('#projects')}
        className={activeNav === '#projects' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        title="Skills"
        href="#skills"
        onClick={() => setActiveNav('#skills')}
        className={activeNav === '#skills' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        title="Contact"
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>

      <button
        title={isDark ? "Mode clair" : "Mode sombre"}
        className="theme-toggle"
        onClick={toggleTheme}
      >
        {isDark ? <BsSun /> : <BsMoon />}
      </button>
    </nav>
  );
}
