import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import './footer.css'

function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>X STUDIO</a>

      <ul className='links__list'>
        <li><a href='#link'>User Agrements</a></li>
        <li><a href='#link'>Our Terms</a></li>
        <li><a href='#link'>Privacy Policies</a></li>
      </ul>

      <div className='footer__social'>
        <a href='https://github.com' target="_blank"><BsFacebook className='icon'/></a>
        <a href='https://github.com' target="_blank"><BsInstagram className='icon'/></a>
        <a href='https://github.com' target="_blank"><BsLinkedin className='icon'/></a>
      </div>

      <div className='footer__copy'>
        <small>&copy; X STUDIO. All rights Reserved.</small>
      </div>

    </footer>
  )
}

export default Footer