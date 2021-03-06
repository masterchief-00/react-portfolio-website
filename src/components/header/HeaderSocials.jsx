import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubAlt} from 'react-icons/fa'
import {TbBrandDribbble} from 'react-icons/tb'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><FaGithubAlt /></a>
        <a href="https://dribble.com" target="_blank"><TbBrandDribbble /></a>
    </div>
  )
}

export default HeaderSocials