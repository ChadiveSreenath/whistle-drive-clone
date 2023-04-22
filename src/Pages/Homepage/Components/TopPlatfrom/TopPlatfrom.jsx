import React from 'react'
import './styles.css'
import amazon from "../../../../Assets/Images/1280px-Amazon_logo.svg.png"
import dupont from "../../../../Assets/Images/dupont.png"
import myntra from "../../../../Assets/Images/Myntra-Logo.png"
import delivery from "../../../../Assets/Images/novartis-logo-transparent copy.png"
import ADP from "../../../../Assets/Images/ADP.png"
import { Button } from '@mui/material'
import TrafficVideo from "../../../../Assets/Videos/HomePageMovinggif.mp4"
import { useNavigate } from 'react-router-dom'





const TopPlatfrom = () => {

    const history = useNavigate()

    return (
        <div className='top-platform'>
            <div className="main-platform">
                <div className="text-platform">
                    <span className='animated-text'>Intelligent</span>
                    <span className='urban-platform'>Full Stack Urban Logistics Platform</span>
                    <span className='logistics-text'>Providing Efficient Intra-City Logistics and best-in-class End to End Employee Transportation Services powered by technology.</span>
                    <Button
                        variant="contained"
                        disableElevation
                        style={{
                            width: "180px", height: '50px', backgroundColor: '#0096d5', fontSize: '1rem'
                        }}
                        onClick={() => {
                            history('./contactus')
                            window.scrollTo(0, 0);
                        }}
                    >Contact Us</Button>
                </div>
                <div className="video-platform">
                    <video autoPlay loop muted src={TrafficVideo} width='100%' height='100%' />
                </div>
            </div>

            <div className="trusted-companies">
                <span className='trusted-companies-text'>
                    Trusted by over 200+ Top Brands in the country
                </span>
                <div className="companies-images">
                    <img src={amazon} alt="" height='35px' width='120px' />
                    <img src={dupont} alt="" height='35px' width='120px' />
                    <img src={myntra} alt="" height='35px' width='120px' />
                    <img src={delivery} alt="" height='35px' width='120px' />
                    <img src={ADP} alt="" height='35px' width='120px' />
                </div>
            </div>
            <div style={{ width: '80%', marginTop: '4.5rem', borderTop: '1px solid rgba(0,0,0,.1)' }}>
                <hr />
            </div>

        </div>
    )
}

export default TopPlatfrom