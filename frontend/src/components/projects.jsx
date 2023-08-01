import React from 'react'
import Header from './header';
import './main.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.png'
import p7 from '../assets/dash.png'
import p8 from '../assets/portfolio.png'


import GitHubIcon from '@mui/icons-material/GitHub';

const projects = () => {
    return (
        <div>
            <Header />
            <section className='home'>
                <div className='content'>
                    <h1>Completed</h1>
                    <h3>Projects</h3>
                    <p>The list of projects that I completed through my days of studying. Includes projects of different scopes.</p>
                </div>
                <div className='project-content'>
                    <div className='row' style={{ marginBottom: '1rem' }}>
                        <div className='col-lg-6 col-md-12'>
                            <MDBCard style={{ padding: '20px' }}>
                                <MDBCardImage src={p1} position='top' alt='...' className='cardImg' />
                                <MDBCardBody>
                                    <MDBCardTitle className='card-title'>Online Fashion Store Web Application</MDBCardTitle>
                                    <MDBCardText>
                                        Both frontend and backend was developed using html, css, JavaScript, PHP and MySQL.
                                    </MDBCardText>
                                    <a href='https://github.com/IT21041716/IWT--Online-fashion-store' target='blank' className='button' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><GitHubIcon /></a>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <MDBCard style={{ padding: '20px' }}>
                                <MDBCardImage src={p4} position='top' alt='...' className='cardImg' />
                                <MDBCardBody>
                                    <MDBCardTitle>Student Management System Web Application</MDBCardTitle>
                                    <MDBCardText>
                                        A web application developed using Java, html, css, javascript, MySQL, and Java servlets by MVC architecture.
                                    </MDBCardText>
                                    <a href='https://github.com/IT21041716/OOP-Online-Student-Management-System' target='blank' className='button' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><GitHubIcon /></a>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </div>
                    <div className='row' style={{ marginBottom: '1rem' }}>
                        <div className='col-lg-6 col-md-12'>
                            <MDBCard style={{ padding: '20px' }}>
                                <MDBCardImage src={p6} position='top' alt='...' className='cardImg' />
                                <MDBCardBody>
                                    <MDBCardTitle>Graphycal User Authentication Web Application</MDBCardTitle>
                                    <MDBCardText>
                                        This project featured a three-step authentication process using MongoDB, Express.js, React.js, and Node.js.
                                    </MDBCardText>
                                    <a href='https://github.com/IT21041716/Graphical-User-Authentication' target='blank' className='button' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><GitHubIcon /></a>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <MDBCard style={{ padding: '20px' }}>
                                <MDBCardImage src={p7} position='top' alt='...' className='cardImg' />
                                <MDBCardBody>
                                    <MDBCardTitle>Tourism Management System Web Application</MDBCardTitle>
                                    <MDBCardText>
                                        web-based application that provides a variety of solutions for coordinating tourism-related activities.F(MERN STACK)
                                    </MDBCardText>
                                    <a href='https://github.com/IT21041716/AF-Tourism-managemenet-system' target='blank' className='button' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><GitHubIcon /></a>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </div>
                    <div className='row' style={{ marginBottom: '1rem' }}>
                        <div className='col-lg-6 col-md-12'>
                            <MDBCard style={{ padding: '20px' }}>
                                <MDBCardImage src={p3} position='top' alt='...' className='cardImg' />
                                <MDBCardBody>
                                    <MDBCardTitle>Factory Management System Web Application</MDBCardTitle>
                                    <MDBCardText>
                                        This project helps to manage the factory process using MongoDB, Express.js, React.js, and Node.js.
                                    </MDBCardText>
                                    <a href='https://github.com/IT21041716/factory_management' target='blank' className='button' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><GitHubIcon /></a>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <MDBCard style={{ padding: '20px' }}>
                                <MDBCardImage src={p5} position='top' alt='...' className='cardImg' />
                                <MDBCardBody>
                                    <MDBCardTitle>IHerb Ecommerce Pharmacy Web Application</MDBCardTitle>
                                    <MDBCardText>
                                        IHerb is an e-commerce application that we develop using microservice architecture used Docker and kubernetes.
                                    </MDBCardText>
                                    <a href='https://github.com/IT21041716/DS-Iherb-microservice-project' target='blank' className='button' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><GitHubIcon /></a>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </div>
                    <div className='row' style={{ marginBottom: '1rem' }}>
                        <div className='col-lg-6 col-md-12'>
                            <MDBCard style={{ padding: '20px' }}>
                                <MDBCardImage src={p2} position='top' alt='...' className='cardImg' />
                                <MDBCardBody>
                                    <MDBCardTitle>Flamex Pizzaria Online Food Ordering Mobile Application</MDBCardTitle>
                                    <MDBCardText>
                                        Flamez Pizzaria is an e-commerce mobile application where customers can easily purchase foods Used Java and firebase.
                                    </MDBCardText>
                                    <a href='https://github.com/IT21041716/MAD-online-food-ordering-application' target='blank' className='button' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><GitHubIcon /></a>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <MDBCard style={{ padding: '20px' }}>
                                <MDBCardImage src={p8} position='top' alt='...' className='cardImg' />
                                <MDBCardBody>
                                    <MDBCardTitle>My Personal Portfolio Web Application</MDBCardTitle>
                                    <MDBCardText>
                                        This is the web application that i develop for display my individual works. Used React, Html,Css, Bootstrap
                                    </MDBCardText>
                                    <a href='https://github.com/IT21041716/Personal-Portfolio-' target='blank' className='button' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><GitHubIcon /></a>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default projects