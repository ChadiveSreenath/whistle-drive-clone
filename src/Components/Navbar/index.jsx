import React, { useState } from 'react'
import './index.css'
import wdLogo from "../../Assets/Images/WhistleDriveLogo.png"
import { Button } from '@mui/material'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const [state, setState] = useState(false)
  const handleToogle = () => {
    setState(prev => !prev)
  }

  const [showText, setShowText] = useState(false);
  console.log(showText)

  const history = useNavigate()

  return (
    <div className='navbar-main'>
      <div className='nav-container'>
        <div>
          <img src={wdLogo} alt="Company Logo" height='50px' width='200px' style={{ cursor: 'pointer' }} onClick={() => {
            history('./')
            window.scrollTo(0, 0);
          }} />
        </div>
        <div className='nav-content'>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className='para-nav' >Enterprise Logistics</p>
            <div className='hover-div'> OS for Logistics</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className='para-nav' onClick={() => {
              history('./mobilityos')
              window.scrollTo(0, 0);
            }}>Employee Transportation</p>
            <div className='hover-div'> OS for Mobility</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className='para-nav'>WhistleElectric</p>
            <div className='hover-div' style={{ backgroundColor: 'white' }}>  </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className='para-nav' onClick={() => setShowText(prev => !prev)} >Company</p>
            <div className='hover-div' style={{ backgroundColor: 'white' }}>
            </div>
          </div>
          {/* {
            showText && <div className='company-dropdown-menu'>
              <p>About Us</p>
              <p>Blog</p>
              <p>Newsroom</p>
            </div>
          } */}
          <Button
            variant="contained"
            disableElevation
            style={{
              width: "180px", height: '50px', backgroundColor: 'rgb(0, 150, 213)', marginTop: '5px',
            }}
            onClick={() => {
              history('./contactus')
              window.scrollTo(0, 0);
            }}
          >
            Contact Us
          </Button>
        </div>

        <div className='toogle-navbar'>
          <div onClick={handleToogle}>
            <GiHamburgerMenu style={{ width: '35px', height: '35px', marginTop: '10px', cursor: 'pointer' }} />
          </div>
        </div>
      </div>
      {
        state &&
        <div className='toogle-container'>
          <div>
            <p>Enterprise Logistics</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className='para-nav'>OS for Logistics</p>
            <div className='hover-div' style={{ backgroundColor: 'white', padding: '0' }}>  </div>
          </div>
          <p>Employee Transportation</p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className='para-nav'
              onClick={() => {
                history('./mobilityos')
                window.scrollTo(0, 0);
                setState(prev => !prev)
              }}
            >
              OS for Mobility
            </p>
            <div className='hover-div' style={{ backgroundColor: 'white', padding: '0' }}>  </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className='para-nav'>WhistleElectric</p>
            <div className='hover-div' style={{ backgroundColor: 'white', padding: '0' }}>  </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className='para-nav'>Company</p>
            <div className='hover-div' style={{ backgroundColor: 'white', padding: '0' }}>  </div>
          </div>
          <Button
            variant="contained"
            disableElevation
            onClick={() => {
              history('./contactus')
              window.scrollTo(0, 0);
              setState(prev => !prev)
            }}
            style={{
              width: "100%", height: '40px',
            }}>Contact Us</Button>
        </div>
      }
    </div >
  )
}

export default Navbar