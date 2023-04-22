import React from 'react'
import "./index.css"
import wdLogo from "../../Assets/Images/WhistleDriveLogo.png"
import TUV from "../../Assets/Images/TUV.png"
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { GrLinkedinOption } from "react-icons/gr"
import { useNavigate } from 'react-router-dom'



const Footer = () => {
  const history = useNavigate()
  return (
    <div className='footer-container'>
      <footer className='footer-main'>
        <div className='brand-container'>
          <div>
            <img src={wdLogo} alt="Company Logo" height='43px' width='180px' style={{ cursor: 'pointer' }} onClick={() => {
              history('./')
              window.scrollTo(0, 0);
            }} />
          </div>
          <h1 className='footer-content'>
            Full Stack Urban Logistics Platform
          </h1>
          <div className='footer-award'>
            <p className='content-main'>Awards and Recognition</p>
            <img src={TUV} alt="Awards" width='200px' />
          </div>
        </div>
        <div className='service-container'>
          <div className='footer-services'>
            <span className='content-main'>Services</span>
            <p>Enterprise Logistics</p>
            <p>Employee Transportation</p>
            <p
              style={{ cursor: 'pointer' }}
              onClick={() => {
                history('./mobilityos')
                window.scrollTo(0, 0);
              }}
            >
              WhistleOS for Mobility
            </p>
            <p>WhistleOS for Logistics</p>
            <p>Whistle Electric</p>
          </div>
          <div className='footer-services'>
            <span className='content-main'>Company</span>
            <p>About Us</p>
            <p>Blog</p>
            <p>Contact Us</p>
            <p>News Room</p>
          </div>
        </div>
        <div className='office-container'>
          <span className='content-main'>Office</span>
          <div>
            <span >Address</span>
            <p>4A, 4TH Floor, Trendz Jr, Plot no 23 & 24, Gafoor Nagar Madhapur, Hyderabad, Madhapur, Telangana 500081</p>
          </div>
          <div>
            <span >Mobile</span>
            <p>+91 8499040404</p>
          </div>
          <div>
            <span>Email</span>
            <p>hello@whistledrive.com</p>
          </div>
        </div>
        <div className='news-container'>
          <p className='newsletter-ad'>Subscribe to our newsletter</p>
          <div style={{ display: 'flex' }}>
            <input type="text" style={{ padding: '.5rem', outline: 'none' }} placeholder='Your e-mail' />
          </div>
          <div className="social-media">
            <span className='newsletter-ad'>Social Media</span>
            <GrLinkedinOption />
            <FaFacebookF />
            <AiOutlineTwitter />
          </div>
        </div>
      </footer>
      <section className='copyright' style={{ backgroundColor: '#f8f9fa' }}>
        <div style={{ width: '10%', margin: 'auto', marginTop: '1rem' }}>
          <hr />
        </div>
        <div className='policy-section'>
          <p>copyright © WhistleDrive 2023</p>
          <p>Privacy Policy</p>
          <p>Quality Policy</p>
          <p>Terms and Conditions</p>
        </div>
      </section>
    </div>
  )
}

export default Footer