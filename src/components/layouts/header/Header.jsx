import React from 'react'
import './header.css'
import HeaderSocial from './HeaderSocial'
import ImageSlider from '../image-slider/ImageSlider'

function Header() {
  const slides = [
    { url: "/image-1.jpg", title: "beach" },
    { url: "/image-2.jpg", title: "boat" },
    { url: "/image-3.jpg", title: "forest" },
    { url: "/image-4.jpg", title: "city" },
    { url: "/image-5.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <header>
        <div className='container header__container'>
            <h5>Photorapher | Event Planner | Image Distributor</h5>
            <h1>X STUDIO</h1>

            <h5 className='text-light'>Some Name</h5>
            {/* <CTPack /> */}
            <HeaderSocial />
            <div className='header-image'>
              <ImageSlider slides={slides} />
            </div>

            <a href='#contact' className='scroll__down'>Scroll Down</a>

        </div>
    </header>
  )
}

export default Header