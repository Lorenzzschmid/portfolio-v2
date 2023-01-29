import React from 'react';
import './nav.scss'; 
import {useState} from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#'); 
  return (
    <nav>
      <a href="/home" onClick={() => setActiveNav('/home')} className={activeNav === '/home' && 'active'}>Home</a>
      <a href="/about" onClick={() => setActiveNav('/about')} className={activeNav === '/about' && 'active'}>About</a>
      <a href="/stack" onClick={() => setActiveNav('/stack')} className={activeNav === '/stack' && 'active'}>Stack</a>
      <a href="/portfolio" onClick={() => setActiveNav('/portfolio')} className={activeNav === '/portfolio' && 'active'}>Portfolio</a>
      <a href="/contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' && 'active'}>Contact</a>
    </nav>
  )
}

export default Nav