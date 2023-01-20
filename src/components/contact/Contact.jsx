import React from 'react';
import './contact.scss';
import {useRef} from 'react';
import emailjs from 'emailjs-com' 
import { BsSignal } from "react-icons/bs";

const Contact = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs
      .sendForm(
        'service_29g1tdc',
        'template_zxga5no', 
        form.current,
        'WHQ8C8y1oGEgjvacS'
      )
    e.target.reset()
  };

  return (
    <div className="contact-container">
      <section className="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="contact-form-container">
          <div className="contact-options">

            <article className="contact-option">
              <h4>Email</h4>
              <h5>lo.schmid@proton.me</h5>
            </article>

            <article className="contact-option">
            <BsSignal className='contact-option-icon' />
              <h4>Signal</h4>
              <h5>01573123456</h5>
              <a 
                href="https://api.signal.com/send?phone+01573123456"
                target='_blank'
                rel='noreferrer'
                >
                Send a message
              </a>
            </article>

            <form ref={form} onSubmit={sendEmail}>
              <input 
              type="text"
              name='name'
              placeholder='Your Full Name'
              required
               />
               <input type='email' name='email' placeholder='Your Email' required />
               <textarea
                name='message'
                rows='7'
                placeholder='Your Message'
                required
                ></textarea>
                <button type='submit' className='btn btn-main'>
                  Send Message
                </button>
            </form>

          </div>
        </div>
        
      </section>
    </div>
  )
}

export default Contact