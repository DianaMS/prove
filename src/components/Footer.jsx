import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
  <footer>
    <div className='container-footer'>
      <div className='text-footer'>
        <p> ©2020 Diana Martinez Sifuentes </p>
      </div>

      <div className='social-networks-container'>
        <div className='social-networks'>
          <a href='https://www.linkedin.com/in/diana-mart%C3%ADnez-sifuentes-506307178/'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <div className='social-networks'>
          <a href='https://github.com/DianaMS'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className='social-networks'>
          <a href='https://www.instagram.com/dianams_19/?hl=es-la'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>

  </footer>
);

export default Footer;
