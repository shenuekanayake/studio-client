import React from 'react'
import About from '../components/about/About'
import Activities from '../components/activities/Activities'
import Contact from '../components/contact/Contact'
import Header from '../components/layouts/header/Header'
import Portfolio from '../components/portfolio/Portfolio'

function Home() {
  return (
    <>
      <Header />
      <About />
      <Activities />
      <Portfolio />
      <Contact />
    </>
  )
}

export default Home