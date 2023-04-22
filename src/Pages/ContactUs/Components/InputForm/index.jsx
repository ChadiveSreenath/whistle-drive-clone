import React from 'react'
import "./index.css"
import { Button } from '@mui/material'

const ContactForm = () => {
  return (
    <div className='contact-input-container'>
      <div className='input-main-cont'>
        <div className="top-inputs">
          <div>
            <label>Full Name*</label>
            <input type="text" />
          </div>
          <div>
            <label>Email*</label>
            <input type="text" />
          </div>
          <div>
            <label>Phone Number*</label>
            <input type="text" />
          </div>
        </div>
        <div className="input-message">
          <div>
            <label>Message</label>
            <input type="text" />
          </div>
        </div>
        <div className='submit-button-contactus'>
          <Button
            variant="contained"
            disableElevation
            style={{
              width: "200px", height: '60px', backgroundColor: '#0096d5',fontSize:'1rem'
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ContactForm