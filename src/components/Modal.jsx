import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import '../assets/test.css'
import Alert from './Alert';

function Modal() {
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uqy1gci', 'template_u21eqoc', form.current, {
        publicKey: 'mTATtp1DgEr3R15UG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };
    return (
        <div className="modal fade text-dark" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Contact Us</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form ref={form} onSubmit={sendEmail}>
                 <div className="row contact-row my-3">
                  <div className="col d-flex flex-column contact-col">
                    <label className='contact-label' htmlFor="name">Name</label>
                    <input type="text" className='contact-input' id='name' name='name'  required />
                    <label className='contact-label' htmlFor="email">Email</label>
                    <input type="email" className='contact-input' id='email' name='email'  required />
                  </div>
                </div>
                <div className="row contact-row my-3">
                  <div className="col d-flex flex-column contact-col">
                    <label className='contact-label' htmlFor="phone">Phone Number</label>
                    <input type="tel" className='contact-input' id='phone' name='phone'  required />
                  </div>
                  <div className="col d-flex flex-column contact-col">
                    <label className='contact-label' htmlFor="company">Company Name</label>
                    <input type="text" className='contact-input' id='company' name='company'  required />
                  </div>
                </div>
                <div className="row contact-row my-3">
                  <div className="col contact-col">
                    <label className='contact-label' htmlFor="message">Message</label> <br />
                    <textarea name="message" className='contact-input' id="message"  rows="2" cols="30"></textarea>
                  </div>
                </div>
              </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type='submit' value="Send" className='fill-btn-effect btn rounded-0 fill-btn px-5 ms-2 text-light'>Send Message</button>
                    </div>
                </div>
            </div>
            <Alert/>
        </div>
  )
}

export default Modal
