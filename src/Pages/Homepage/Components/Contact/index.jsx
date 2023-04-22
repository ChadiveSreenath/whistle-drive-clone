import React from 'react'
import './index.css'
import { Button } from '@mui/material'

const ContactUs = () => {
    return (
        <div className="contact-us-cont">
            <div className='contact-us-png'>
                <img src="https://www.whistledrive.com/assets/images/i/home.png" alt="" width='100%' height='100%' />
            </div>
            <div className='logistics-commute'>
                <span className='commute-heading'>  
                    Need help with Logistics or your Employees' Commute?
                </span>
                <Button
                    variant="contained"
                    disableElevation
                    style={{
                        width: "12rem", fontSize: '1rem', height: '4rem', backgroundColor: '#0096d5', color: 'white', marginTop: '2rem'
                    }}
                >
                    Contact Us
                </Button>
            </div>
        </div>
    )
}

export default ContactUs