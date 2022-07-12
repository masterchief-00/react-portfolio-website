import React from 'react'
import './about.css'
import me from '../../assets/me.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h1>About Me</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About image" />
          </div>
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <h5>Experience</h5>
            <small>3+ years</small>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About