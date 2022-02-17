import { faGithub, faLinkedin , faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact' id='contact'>
        <h1 className='contact_title'>Contact</h1>
        <div class="github">
            <a href="https://github.com/anazbinnoushad">
                <FontAwesomeIcon icon={ faGithub } className="contact_icon" />
            </a>
        </div>
        <div class="mail">
            <a href="mailto:anazbinnoushad@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="contact_icon"/>
            </a>
        </div>
        <div class="linkedin">
            <a href="https://www.linkedin.com/in/anaz-n-4560011bb/">
                <FontAwesomeIcon icon={ faLinkedin } className="contact_icon"/>
            </a>
        </div>
        <div class="instagram">
          <a href="https://www.instagram.com/anaz_bin_noushad/">
              <FontAwesomeIcon icon={ faInstagram } className="contact_icon"/>
          </a>
        </div>
    </div>
  )
}

export default Contact