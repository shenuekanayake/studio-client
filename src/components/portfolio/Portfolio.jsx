import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Image from '../../assets/logo.png'
import WorksService from '../../services/Works.service';
import './portfolio.css'

function Portfolio() {
  var [works, setWorks] = useState([]);

  const loadResources = async() => {
      setWorks(await WorksService.getWorks());
  }

  useEffect(() => {
      loadResources();
      
      return () => {
      }
  }, []);

  return (
    <section id='portfolio'>
        <h5>Some of Samples</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio__container'>
          {
            works&&works.length>0&&works.map((work, index) => 
            {
              if(index>5) return;
              return (<article className='item'>
                <div className='item-img'>
                    <img src={require(`../../assets/gallery/${work.image.name}`)} alt="Port-image" />
                </div>
                <h3>{work.title}</h3>
                <p>{work.info}</p>
                <small className='tag'>{work.type}</small>
                <br></br>
                <a href='#image' className='btn'>View</a>
            </article>);})
          }
          
        </div>
        <br></br>
        <br></br>
        <center>
          <Link to={'/gallery'} className='btn btn-primary'>View More</Link>
        </center>
    </section>
  )
}

export default Portfolio