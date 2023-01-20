import React from 'react'
import { AiOutlineAim, AiOutlineFileImage } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import '../components/about/about.css'

function About() {
  return (
    <>
    <section id='about'>
      <h5>Get to Know</h5>
      <h1>About Us</h1>

      <div className='container about__container'>
        <div className='about__img'>
          
        </div>
        <div className='about__content'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <div className='cards'>
            <article className='card'>
              <AiOutlineAim className='card-icon'/>
              <h5>Mission</h5>
              <small>To make</small>
            </article>
            <article className='card'>
              <AiOutlineAim className='card-icon'/>
              <h5>Mission</h5>
              <small>To make</small>
            </article>
            <article className='card'>
              <AiOutlineFileImage className='card-icon'/>
              <h5>Progress</h5>
              <small>+100 Photo shoots</small>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section id='about2'>
      <h5>It's about our Establishment</h5>
      <h1>Our Business</h1>

      <div className='container about__container'>
        <div className='about__img com__img'>
          
        </div>
        <div className='about__content'>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
          <div className='cards-im'>
            <article className='card'>
              
              <small>Our Location</small>
            </article>
            
          </div>
          <center>
          <Link to={'/#contact'} className='btn btn-primary'>Contact Now</Link>
        </center>
        </div>
      </div>
    </section>
    </>
  )
}

export default About