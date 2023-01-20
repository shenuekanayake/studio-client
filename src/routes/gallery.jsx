import React, { useEffect, useState } from 'react'
import '../components/portfolio/portfolio.css'
import WorksService from '../services/Works.service';
import Image from '../assets/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import ReactSearchBox from 'react-search-box';

function Gallery() {
    var [works, setWorks] = useState([]);
    var [term, setTerm] = useState('');
    var [results, setResults] = useState([]);

    const loadResources = async() => {
      // console.log(window.location.);
        setResults(await WorksService.getWorks());
        setWorks(await WorksService.getWorks());
    }

    var search = () => {
      setResults([]);
      setResults(works.filter(item => item.type.toLowerCase() === term.toLowerCase()));
      // term.search
    }

    useEffect(() => {
        loadResources();
        
        return () => {
        }
    }, []);
  return (
    <section>
        <div class="search-box">
          <button class="btn-search" onClick={() => search()}><AiOutlineSearch/></button>
          <input type="text" class="input-search" placeholder="Search using Tags eg: Wedding" onChange={(e) => setTerm(e.target.value)}/>
        </div> 
        <h5>Discover Works</h5>
        <h2>Gallery</h2>
        
        <div className='container portfolio__container'>
          

          {
            results&&results.length>0&&results.map((work) => 
            <article className='item'>
                <div className='item-img'>
                    <img src={require(`../assets/gallery/${work.image.name}`)} alt="Port-image" />
                    {/* <img src={require(`${window.location.origin}/gallery/${work.image}`)} alt="Port-image" /> */}
                </div>
                <h3>{work.title}</h3>
                <p>{work.info}</p>
                <small className='tag'>{work.type}</small>
                <br></br>
                <a href='#image' className='btn'>View</a>
            </article>)
          }
          
        </div>
    </section>
  )
}

export default Gallery