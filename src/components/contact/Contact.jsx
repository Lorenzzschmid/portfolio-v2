import React from 'react';
import './contact.scss';
import {useRef} from 'react';
import emailjs from 'emailjs-com'; 

const Contact = () => {
  const form = useRef(); 

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

    </div>
  )
}

export default Contact