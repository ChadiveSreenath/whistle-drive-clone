import React from 'react'
import './index.css'
import Enquiry from './Components/Enquiry'
import LocatedIn from './Components/LocatedIn'
import ContactForm from './Components/InputForm'

const ContactUs = () => {
  return (
    <div className='contact-page-container'>
      <div className='get-in-touch'>
        <span>Let's Get In Touch!</span>
        <p>
          A member of our team will reach you out.
        </p>
      </div>
      <ContactForm />
      <div className='reach-out-text' >
        For enquiries related to sales, please reach us on sales@whistledrive.com
      </div>
      <Enquiry />
      <LocatedIn />
    </div>
  )
}

export default ContactUs