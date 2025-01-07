import React, { useRef, useState,} from 'react'
import emailjs from '@emailjs/browser';
import '../../assets/css/Contact/Contact.css'
import ContactTwo from './ContactTwo';
import Alert from '../Alert'

function Contact() {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uqy1gci', 'template_u21eqoc', form.current, {
        publicKey: 'mTATtp1DgEr3R15UG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowAlert(true); // Show the alert on success
          setTimeout(() => setShowAlert(false), 3000);
         
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();

  };
  return (
    <div className='mt-5 d-flex contact-div' style={{ width: '50%' }}>
      <div className="form-div me-2 p-4 w-100">
        <h5>Need a customized plan?</h5>
        <p>Share your details to get a call back from us</p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="row contact-row my-3">
            <div className="col d-flex flex-column contact-col">
              <label className='contact-label' htmlFor="name">Name</label>
              <input type="text" className='contact-input' id='name' name='name' required />
              <label className='contact-label' htmlFor="email">Email</label>
              <input type="email" className='contact-input' id='email' name='email' required />
            </div>
          </div>
          <div className="row contact-row my-3">
            <div className="col d-flex flex-column contact-col">
              <label className='contact-label' htmlFor="phone">Phone Number</label>
              <input type="tel" className='contact-input' id='phone' name='phone' required />
            </div>
            <div className="col d-flex flex-column contact-col">
              <label className='contact-label' htmlFor="company">Company Name</label>
              <input type="text" className='contact-input' id='company' name='company' required />
            </div>
          </div>
          <div className="row contact-row my-3">
            <div className="col contact-col">
              <label className='contact-label' htmlFor="message">Message</label> <br />
              <textarea name="message" className='contact-input' id="message" rows="1" cols="70"></textarea>
            </div>
          </div>
          <button type='submit' value="Send" className='fill-btn-effect btn rounded-0 fill-btn px-5 ms-2 text-light'>Send Message</button>
          {showAlert && <Alert />}
        </form>
      </div>
      <ContactTwo />
    </div>
  )
}

export default Contact
