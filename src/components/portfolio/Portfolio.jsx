import React from 'react'; 
import './portfolio.scss'; 
import IMG1 from '../../assets/images/IMG1.png'; 


const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Space App',
      github: 'https://github.com',
      demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    },
    {
      id: 2,
    //   image: IMG2,
      title: 'JWT-Verification',
      github: 'https://github.com',
      demo: 'https://dribble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    },{
      id: 3,
    //   image: IMG3,
      title: 'Spotify Clone',
      github: 'https://github.com',
      demo: 'https://dribble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },{
      id: 4,
    //   image: IMG4,
      title: 'Netflix Clone',
      github: 'https://github.com',
      demo: 'https://dribble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
    },{
      id: 5,
    //   image: IMG5,
      title: 'Movie List',
      github: 'https://github.com',
      demo: 'https://dribble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    },{
      id: 6,
    //   image: IMG6,
      title: 'Restaurants',
      github: 'https://github.com',
      demo: 'https://dribble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    }
  ]

const Portfolio = () => {
  return (
    <div className="portfolio-container">
        <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>        
          )
        })
      }
      </div>      
    </section>
    </div>
  )
}

export default Portfolio