import React from 'react'
import Header from './header'
import './main.css'


import C from '../assets/c.png'
import Cplus from '../assets/c++.png'
import css from '../assets/css.png'
import docker from '../assets/docker.png'
import html from '../assets/html.png'
import java from '../assets/java.png'
import mongo from '../assets/mongo.png'
import mysql from '../assets/mysql.png'
import node from '../assets/node.png'
import php from '../assets/php.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import spring from '../assets/springboot.png'

const skills = () => {
    return (
        <div>
            <Header />
            <section className='home'>
                <div className='content'>
                    <h1>Skills</h1>
                    <h3>Technical Related</h3>
                    <p>In my student life, I've cultivated skills in coding, problem-solving, collaboration, and adaptability, essential for a successful software engineering career.</p>
                </div>
                <div className= 'skill-container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-6' id= 'skill-logo'>
                            <div className="skill">

                                <div className="inner">
                                    <div id="number">
                                        <img src={C} />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-6' id= 'skill-logo'>
                            <div className="skill">

                                <div className="inner">
                                    <div id="number">
                                        <img src={Cplus} />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-6' id= 'skill-logo'>
                            <div className="skill">

                                <div className="inner">
                                    <div id="number">
                                        <img src={css} />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-6' id= 'skill-logo'>
                            <div className="skill">

                                <div className="inner">
                                    <div id="number">
                                        <img src={docker} />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-6' id= 'skill-logo'>
                            <div className="skill">

                                <div className="inner">
                                    <div id="number">
                                        <img src={html} />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-6' id= 'skill-logo'>
                            <div className="skill">

                                <div className="inner">
                                    <div id="number">
                                        <img src={java} />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-6' id= 'skill-logo'>
                            <div className="skill">

                                <div className="inner">
                                    <div id="number">
                                        <img src={mongo} />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-6' id= 'skill-logo'>
                            <div className="skill">

                                <div className="inner">
                                    <div id="number">
                                        <img src={mysql} />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-6' id= 'skill-logo'>
                            <div className="skill">

                                <div className="inner">
                                    <div id="number">
                                        <img src={node} />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-6' id= 'skill-logo'>
                            <div className="skill">

                                <div className="inner">
                                    <div id="number">
                                        <img src={php} />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-6' id= 'skill-logo'>
                            <div className="skill">

                                <div className="inner">
                                    <div id="number">
                                        <img src={python} />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-6' id= 'skill-logo'>
                            <div className="skill">

                                <div className="inner">
                                    <div id="number">
                                        <img src={react} />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-6' id= 'skill-logo'>
                            <div className="skill">

                                <div className="inner">
                                    <div id="number">
                                        <img src={spring} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default skills