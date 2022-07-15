import React, { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import Notice from './components/notice/Notice'

export const App = () => {
  const [notice,setNotice]=useState(true);


  return (
    <>
      {notice && <Notice notice={notice} onChangeDisplay={setNotice} />}
      <Header />
      <Nav /> 
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />      
    </>
  )
}
