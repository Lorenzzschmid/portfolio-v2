import React from 'react'
import './home.scss'; 
import CTA from './Cv';

const Home = () => {
  return (
    <div className='home-outer-container'>    
    <div className="cv-container">
      <CTA />
    </div>
    <h1 className='name'>Lorenz Schmid</h1>
    </div>
  )
}

export default Home