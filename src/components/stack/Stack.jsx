import './stack.scss';
import {BsPatchCheckFill} from 'react-icons/bs';
import React from 'react'

const Stack = () => {
  return (
    <div className="stack-container">

      <h2>My Languages, Frameworks, Libraries</h2>
      <h5>1 Year Experience at DCI - Berlin, Codingprojects, Teamwork, Agile Development</h5>

      <section className="experience">
          
          
      <div className="experience-frontend">
      <h3>Frontend Development</h3>
      <div className="experience-content">
      
        <article className="experience-details">
          <BsPatchCheckFill className='experience-details-icon' />
          <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
          </div>
        </article>
      
        <article className="experience-details">
          <BsPatchCheckFill className='experience-details-icon' />
          <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
          </div>
        </article>
      
        <article className="experience-details">
          <BsPatchCheckFill className='experience-details-icon' />
          <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
          </div>
        </article>
      
        <article className="experience-details">
          <BsPatchCheckFill className='experience-details-icon' />
          <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
          </div>
        </article>
      
        <article className="experience-details">
          <BsPatchCheckFill className='experience-details-icon' />
          <div>
            <h4>REACT</h4>
            <small className='text-light'>Experienced</small>
          </div>
        </article>

      </div>
      </div>

      <div className="experience-backend">
        <h3>Backend Development</h3>

        <div className="experience-content">
        
        <article className="experience-details">
          <BsPatchCheckFill className='experience-details-icon' />
          <div>
            <h4>Node JS</h4>
            <small className='text-light'>Experienced</small>
          </div>
        </article>
        
        <article className="experience-details">
          <BsPatchCheckFill className='experience-details-icon' />
          <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Intermediate</small>
          </div>
        </article>
        
        <article className="experience-details">
          <BsPatchCheckFill className='experience-details-icon' />
          <div>
            <h4>PHP</h4>
            <small className='text-light'>Experienced</small>
          </div>
        </article>
        
        <article className="experience-details">
          <BsPatchCheckFill className='experience-details-icon' />
          <div>
            <h4>MySQL</h4>
            <small className='text-light'>Experienced</small>
          </div>
        </article>
        
        <article className="experience-details">
          <BsPatchCheckFill className='experience-details-icon' />
          <div>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
          </div>
        </article>
        </div>

    </div>

      </section>  
    </div>
    
  )
}

export default Stack