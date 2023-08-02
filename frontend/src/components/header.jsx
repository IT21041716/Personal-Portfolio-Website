import React, { useState, useEffect } from 'react'
import './main.css'
import logo from '../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const currentPath = location.pathname.split('/')[1];
        setActiveLink(currentPath);


        // Add a scroll event listener to the window
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [location]);

    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav((prevShowNav) => !prevShowNav);
    };

    const handleScroll = () => {
        // Check if the user has scrolled more than 10 pixels from the top
        setIsScrolled(window.scrollY > 10);
    };
    return (
        <>
            <header className={`header ${isScrolled ? 'scrolled' : ''}`} >
                <div className='innerDiv'>
                    <a href='/'>
                        <img src={logo} className='logo-img' alt='Logo' />
                    </a>
                </div>

                <div>
                    <div className='menu-icon' onClick={toggleNav}>
                        <MenuIcon />
                    </div>
                    <navbar className={showNav ? 'nav-show' : 'nav'}>
                        <Link to='/' className={activeLink === '' ? 'active' : ''} onClick={() => setActiveLink('')}>Home</Link>
                        <Link to='/projects' className={activeLink === 'projects' ? 'active' : ''} onClick={() => setActiveLink('projects')}>Projects</Link>
                        <Link to='/certificates' className={activeLink === 'certificates' ? 'active' : ''} onClick={() => setActiveLink('certificates')}>Certificates</Link>
                        <Link to='/about' className={activeLink === 'about' ? 'active' : ''} onClick={() => setActiveLink('about')}>About</Link>
                    </navbar>
                </div>
            </header>
        </>
    )
}

export default Header