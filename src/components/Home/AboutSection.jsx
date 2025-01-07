import React from 'react'
import '../../assets/css/About-section.css'
import Modal from '../Modal'
function AboutSection() {
  return (
    <>
      <div className="about-section-div p-4 text-light">
        <div className='aboutus-first-main d-flex justify-content-center'>
          <h2 className='pt-4'>ABOUT US</h2>
        </div>
        <hr></hr>
        <div className='aboutus-second-main d-flex flex-column justify-content-center'>
          <h2 className='d-flex justify-content-center '>WHO ARE WE?</h2>
          <p className='d-flex justify-content-center' style={{ width: '80%', paddingLeft: '18%' }}>We're passionate about revolutionizing businesses with
            innovative digital solutions that inspire growth and
            engagement. With our creative flair and fresh perspectives,
            we redefine how companies connect and thrive online
            whether it's developing dynamic websites, designing
            captivating branding, or optimizing digital marketing
            strategies, we bring enthusiasm and expertise to every project.
          </p></div>
        <div className='aboutus-third-main mt-5 d-flex flex-column'>
          <div className='aboutus-button-one d-flex align-items-center justify-content-center'>
            <a href="/" className=''>Learn more</a>
          </div>
          <button  type="button" className="btn fill-btn-effect" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Request a call from us</button>
        </div>
      </div>
      <Modal/>
    </>
  )
}

export default AboutSection