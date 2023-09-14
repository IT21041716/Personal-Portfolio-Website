import React from 'react'
import Header from './header';
import './main.css'
import myPic from '../assets/sithanga.png'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


const about = () => {
  return (
    <div>
      <Header />
      <section className='home'>
        <div className='about-img'>
          <img src={myPic} />
          <div className='contact-info'>
            <div className='contact-info-inner'>
              <a href="mailto:sithanga1231@gmail.com">
                <EmailIcon />
              </a>
              <p>sithanga1231@gmail.com</p>
            </div>
            <div className='contact-info-inner'>
              <a href="callto:+94763223349">
                <CallIcon />
              </a>
              <p>0763223349</p>
            </div>
          </div>
        </div>
        <div className='about-content'>
          <h1>About Me</h1>
          <h3>Fullstack Developer</h3>
          <p>I am Sithanga Rashmika Sandaruwan, a 23-year-old undergraduate student pursuing BSc (Hons) in Information Technology specializing in Software Engineering at SLIIT. Passionate about technology, I have contributed to several innovative projects and aspire to become a skilled Software Engineer. Throughout my journey, I have honed my programming skills and gained practical experience in web development and mobile app development. I am a team player and enjoy collaborating with like-minded individuals to solve complex challenges. Beyond academics, I enjoy exploring new technologies and staying updated with the latest trends in the tech industry. My goal is to create impactful solutions that enhance people's lives through technology.</p>

          Follow Me..
          <div className='home-icons'>
            <a href='https://www.linkedin.com/in/sithanga-rashmika-63565725a/'><LinkedInIcon /></a>
            <a href='https://github.com/IT21041716'><GitHubIcon /></a>
            <a href='https://www.instagram.com/s_rashmika_00/'><InstagramIcon /></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default about