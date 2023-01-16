import React from 'react'
import './home.scss'; 
import CTA from '../cv/Cv';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className='home-outer-container'>    
    <div className="animation-container">
      <TypeAnimation
      sequence={[
        'Lorenz Schmid', 
        1000, 
        'Web Developer', 
        2000, 
        'Living in Berlin', 
        2000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2rem' }}
      speed={20}
    />
    </div>
    
    </div>
  )
}

export default Home