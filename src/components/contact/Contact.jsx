import React from 'react'
import { AiOutlineMail, AiOutlinePhone, AiOutlineMessage } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Some of Samples</h5>
      <h2>Contact Us</h2>

      <div className='container contact__container'>
        <div className='cards'>
          <article className='card'>
            <AiOutlineMail className='icon'/>
            <h4>EMail</h4>
            <h5>hackishmax321@gmail.com</h5>
            <a href='#image' className='btn'>Send</a>
          </article>
          <article className='card'>
            <AiOutlinePhone className='icon'/>
            <h4>Contact Number</h4>
            <h5>hackishmax321@gmail.com</h5>
            <a href='#image' className='btn'>Send</a>
          </article>
          
        </div>
        {/* <div className='form'> */}
          <form action=''>
            <input type={'text'} placeholder="Your Name" name='name' required />
            <input type={'email'} placeholder="Your Email Address" name='email' required />
            <input type={'text'} placeholder="Your Contact Number" name='name' />
            <textarea name="message" placeholder='Type your Message' rows={10}></textarea>
            <button type='submit' className='btn btn-primary'>Contact Us</button>
          </form>

        {/* </div> */}
        {/* <center>
          <Link to={'/contact'} className='btn btn-primary'>More Details</Link>
        </center> */}
      </div>
    </section>
  )
}

export default Contact