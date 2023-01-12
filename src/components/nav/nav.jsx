import React from 'react';
import './nav.scss'; 
import {useState} from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#'); 
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' && 'active'}>Home</a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' && 'active'}>About</a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' && 'active'}>Stack</a>
      <a href="#links" onClick={() => setActiveNav('#links')} className={activeNav === '#links' && 'active'}>Portfolio</a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' && 'active'}>Contact</a>
    </nav>
  )
}

export default Nav