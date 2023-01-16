import React from 'react';
import CV from '../../assets/cv.pdf';
import './cv.scss'; 

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn'>Write me</a>
    </div>
  )
}

export default CTA