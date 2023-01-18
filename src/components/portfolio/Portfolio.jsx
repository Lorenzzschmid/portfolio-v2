import React from 'react'; 
import './portfolio.scss'; 
import IMG1 from '../../assets/images/IMG1.png'; 
import IMG2 from '../../assets/images/IMG2.png'; 
import IMG3 from '../../assets/images/IMG3.png'; 
import IMG4 from '../../assets/images/IMG4.jpg'; 
import Carousel from 'nuka-carousel/lib/carousel';


const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Space App',
      github: 'https://github.com',
      demo: '#'
    },
    {
      id: 2,
      image: IMG2,
      title: 'JWT-Verification',
      github: 'https://github.com',
      demo: '#'
    },{
      id: 3,
      image: IMG3,
      title: 'Spotify Clone',
      github: 'https://github.com',
      demo: '#'
    },{
      id: 4,
      image: IMG4,
      title: 'Netflix Clone',
      github: 'https://github.com',
      demo: '#'
    },{
      id: 5,
    //   image: IMG5,
      title: 'Movie List',
      github: 'https://github.com',
      demo: '#'
    },{
      id: 6,
    //   image: IMG6,
      title: 'Restaurants',
      github: 'https://github.com',
      demo: '#'
    }
  ]

const Portfolio = () => {
  return (
    <div className="portfolio-container">
        
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      {
        <div className='carousel-container'>
             <Carousel>
                {data.map(({id, image, title, github, demo})=> {
                    return (
                        <>
                        <img className="slider-image" src={image} alt={title} /> 
                        
                           <h1>{title}</h1> 
                        
                        </>                   
                    )
                })}
            </Carousel>   
            </div>
      }   
    </div>
  )
}

export default Portfolio