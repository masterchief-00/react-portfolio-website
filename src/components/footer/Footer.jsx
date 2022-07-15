import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {GrTwitter} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>KWIZERA</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookSquare className='socials__icon'/></a>
        <a href="https://instagram.com"><GrInstagram className='socials__icon'/></a>
        <a href="https://twitter.com"><GrTwitter className='socials__icon'/></a>        
      </div>

      <div className="footer__copyright">
        <small>&copy; PACIFIQUE KWIZERA</small>
      </div>
    </footer>
  )
}

export default Footer