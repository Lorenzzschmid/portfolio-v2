import './about.scss'; 

import React from 'react'

const About = () => {
  return (
    <div className="about-container">
        <h1>About</h1>

        <p className='about-text'>
          Hey! I am Lorenz, Fullstack Developer with a background in Philosophy and History. At the moment I am extending my knowledge in JavaScript and working on side projects created with React, SASS, Node.js, Express, MongoDB. 
        </p>

        <div className="me-portrait">
          <div className="head"></div>
          <div className="mouth"></div>
          <div className="eyebrow"></div>
          <div className="eyebrow"></div>
          <div className="eye"></div>
          <div className="eye"></div>
          <div className="nose"></div>
        </div>


    </div>
  )
}

export default About