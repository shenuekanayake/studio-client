import React from 'react'
import './header.css'
import { BsLinkedin, BsFacebook, BsInstagram } from 'react-icons/bs'

function HeaderSocial() {
  return (
    <div className='header__socials'>
        <a href='https://github.com' target="_blank"><BsFacebook /></a>
        <a href='https://github.com' target="_blank"><BsInstagram /></a>
        <a href='https://github.com' target="_blank"><BsLinkedin /></a>
    </div>
  )
}

export default HeaderSocial