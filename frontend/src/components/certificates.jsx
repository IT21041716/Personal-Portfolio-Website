import React from 'react'
import Header from './header'
import './main.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'


const certificates = () => {
    return (
        <>
            <Header />
            <section className='home'>
                <div className='content'>
                    <h1>COURSES</h1>
                    <h3>Certificates in IT Industry</h3>
                    <p>I have followed numerous IT industry certificate courses while my free times, enhancing<br /> my skills and staying updated<br /> with the latest trends.</p>
                </div>
                <div className='project-content'>
                    <div className='row' style={{ marginBottom: '1rem' }}>
                        <div className='col-lg-6 col-md-12'>
                            <MDBCard style={{ padding: '20px' }}>
                                <MDBCardImage src={s1} position='top' alt='...' className='cardImg' />
                            </MDBCard>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <MDBCard style={{ padding: '20px' }}>
                                <MDBCardImage src={s2} position='top' alt='...' className='cardImg' />
                            </MDBCard>
                        </div>
                    </div>
                    <div className='row' style={{ marginBottom: '1rem' }}>
                        <div className='col-lg-6 col-md-12'>
                            <MDBCard style={{ padding: '20px' }}>
                                <MDBCardImage src={s3} position='top' alt='...' className='cardImg' />
                            </MDBCard>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <MDBCard style={{ padding: '20px' }}>
                                <MDBCardImage src={s4} position='top' alt='...' className='cardImg' />
                            </MDBCard>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default certificates