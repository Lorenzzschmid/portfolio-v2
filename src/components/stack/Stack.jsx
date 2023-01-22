import './stack.scss';
import {BsPatchCheckFill} from 'react-icons/bs';
import React from 'react'

const Stack = () => {
  return (
    <div className="stack-container">
        <section className="experience">
            <h2>My Languages, Frameworks, Libraries</h2>
            <h5>1 Year Experience at DCI - Berlin, Codingprojects, Teamwork, Agile Development</h5>
            
            <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
        {/* first Frontend container */}
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>HTML</h4>
              <small className='text-lighter'>Experienced</small>
            </div>
          </article>
        {/* second Frontend container */}
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>CSS</h4>
              <small className='text-lighter'>Intermediate</small>
            </div>
          </article>
        {/* third Frontend container */}
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Bootstrap</h4>
              <small className='text-lighter'>Experienced</small>
            </div>
          </article>
        {/* fourth Frontend container */}
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>JavaScript</h4>
              <small className='text-lighter'>Experienced</small>
            </div>
          </article>
        {/* fifth Frontend container */}
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>REACT</h4>
              <small className='text-lighter'>Experienced</small>
            </div>
          </article>
        </div>
        </div>
        </section>  
    </div>
    
  )
}

export default Stack