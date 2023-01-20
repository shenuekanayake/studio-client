import React, { useState } from 'react'
import './activity.css'
import { AiOutlineFileImage, AiOutlineAim, AiOutlineVideoCamera } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import reactSessionApi from 'react-session-api'


function Activities() {
    const [user, username]  = useState(reactSessionApi.get('username'))||null;
  return (
    <section id='#activities'>
        <h5>What I Offer</h5>
        <h2>Our Services</h2>

        <div className='container service__container'>
            <article className='service'>
                <div className='head'>
                    <h3>Wedding Photography</h3>
                </div>
                <ul className='list'>
                    <li>
                        <AiOutlineFileImage className='list__icon'/>
                        <p>100+ Photos</p>
                    </li>
                    <li>
                        <AiOutlineVideoCamera className='list__icon'/>
                        <p>10+ Reels</p>
                    </li>
                    <li>
                        <AiOutlineFileImage className='list__icon'/>
                        <p>Album</p>
                    </li>
                </ul>
                <div className='price'>
                    <span className='price__unit'>Rs.</span><span className='price__value'>10,000</span>.00
                    <br></br>
                    {
                        user?<Link to={'/jobs'} className='btn btn-primary'>Make Appointment</Link>:
                        <Link to={'/register'} className='btn btn-primary'>Join First</Link>
                    }
                    
                </div>
            </article>

            <article className='service'>
                <div className='head'>
                    <h3>Pre Shoot Photography</h3>
                </div>
                <ul className='list'>
                    <li>
                        <AiOutlineFileImage className='list__icon'/>
                        <p>100+ Photos</p>
                    </li>
                    <li>
                        <AiOutlineVideoCamera className='list__icon'/>
                        <p>10+ Reels</p>
                    </li>
                    <li>
                        <AiOutlineFileImage className='list__icon'/>
                        <p>Album</p>
                    </li>
                </ul>
                <div className='price'>
                    <span className='price__unit'>Rs.</span><span className='price__value'>10,000</span>.00
                    <br></br>
                    {
                        user?<Link to={'/jobs'} className='btn btn-primary'>Make Appointment</Link>:
                        <Link to={'/register'} className='btn btn-primary'>Join First</Link>
                    }
                </div>
            </article>
            <article className='service'>
                <div className='head'>
                    <h3>Family Photography</h3>
                </div>
                <ul className='list'>
                    <li>
                        <AiOutlineFileImage className='list__icon'/>
                        <p>100+ Photos</p>
                    </li>
                    <li>
                        <AiOutlineVideoCamera className='list__icon'/>
                        <p>10+ Reels</p>
                    </li>
                    <li>
                        <AiOutlineFileImage className='list__icon'/>
                        <p>Album</p>
                    </li>
                </ul>
                <div className='price'>
                    <span className='price__unit'>Rs.</span><span className='price__value'>10,000</span>.00
                    <br></br>
                    {
                        user?<Link to={'/jobs'} className='btn btn-primary'>Make Appointment</Link>:
                        <Link to={'/register'} className='btn btn-primary'>Join First</Link>
                    }
                </div>
            </article>
        </div>
    </section>
  )
}

export default Activities