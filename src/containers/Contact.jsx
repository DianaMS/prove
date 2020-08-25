import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/components/Contact.scss';

const Contact = () => (

  <section className='container-contact'>
    <div className='image-contact' />
    <div className='description-contact'>
      <div className='text-contact'>
        <FontAwesomeIcon icon={faPhone} />
        <p className='phone-contact'>+51 988901616</p>
      </div>
      <div className='text-contact'>
        <FontAwesomeIcon icon={faEnvelope} />
        <p className='email-contact'>dmartinez@uni.pe</p>
      </div>
      <div className='social-contact'>
        <FontAwesomeIcon className='react-font' icon={faGithub} />
        <FontAwesomeIcon className='react-font' icon={faLinkedinIn} />
      </div>
      <img src='https://user-images.githubusercontent.com/60928490/91123290-1a42f280-e662-11ea-8aa6-308d94400fde.png' alt='' />
    </div>
  </section>

);

export default Contact;
