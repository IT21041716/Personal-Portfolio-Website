import React from 'react'
import './main.css'
import myPic from '../assets/sithanga.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Header from './header';
import cv from '../assets/Sandaruwan W.S.R.pdf'


const home = () => {
  return (
    <>
      <Header />
      <section className='home'>
        <div className='home-img'>
          <img src={myPic} />
        </div>
        <div className='home-content'>
          <h1>Hi, I am Sithanga Rashmika</h1>
          <h3>Fullstack Developer</h3>
          <p>An undergraduate in BSc (Hons) in Information Technology Specializing in Software Engineering at SLIIT | A passionate software developer from Sri Lanka</p>

          Follow Me..
          <div className='home-icons'>
            <a href='https://www.linkedin.com/in/sithanga-rashmika-63565725a/'><LinkedInIcon /></a>
            <a href='https://github.com/IT21041716'><GitHubIcon /></a>
            <a href='https://www.instagram.com/s_rashmika_00/'><InstagramIcon /></a>
            <a href='https://web.facebook.com/sithangarashmika.sadaruwan/'><FacebookIcon /></a>
          </div>

          <a href={cv} target='blank' className='button'>Download CV</a>
        </div>
      </section>
    </>
  )
}

export default home