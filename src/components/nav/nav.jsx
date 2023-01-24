import React from 'react';
import './nav.scss'; 
import {useState} from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#'); 
  return (
    <nav>
      <a href="/home" onClick={() => setActiveNav('#')} className={activeNav === '#' && 'active'}>Home</a>
      <a href="/about" onClick={() => setActiveNav('/about')} className={activeNav === '#about' && 'active'}>About</a>
      <a href="/stack" onClick={() => setActiveNav('/stack')} className={activeNav === '#experience' && 'active'}>Stack</a>
      <a href="/portfolio" onClick={() => setActiveNav('/portfolio')} className={activeNav === '#links' && 'active'}>Portfolio</a>
      <a href="/contact" onClick={() => setActiveNav('/contact')} className={activeNav === '#contact' && 'active'}>Contact</a>
    </nav>
  )
}

export default Nav