import React, { useState, useEffect } from 'react'
import './main.css'
import logo from '../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'


const Header = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname.split('/')[1];
        setActiveLink(currentPath);
    }, [location]);

    return (
        <>
            <header className='header'>
                <div className='innerDiv'>
                    <a href='/'><img src={logo} className='logo-img' /></a>
                </div>

                <div>
                    <navbar className='nav'>
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