import React from 'react'
import "./index.css"
import ADP from "../../../../Assets/Images/ADP.png"
import LNT from "../../../../Assets/Images/LandT.png"
import oneplus from "../../../../Assets/Images/1280px-OnePlus_logo.svg.png"
import berkLogo from "../../../../Assets/Images/BERK-LOGO-BLUE-RGB.png"
import examity from "../../../../Assets/Images/images (2).png"
import invesko from "../../../../Assets/Images/invesco.png"
import whistleOsMS from "../../../../Assets/Images/whistleOsMS.png"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'



const ManagmentPlatform = () => {

    const history = useNavigate()

    return (
        <div className='main-root-class'>
            <div className="managment-platform-cont">
                <div className="employee-transporation">
                    <div className='managment-platform-text'>
                        <span className='employee-os-transportation'>
                            <p style={{ color: '#0096d5' }}>WhistleOS</p> for Employee Transporation
                        </span>
                        <div className='complete-platform'>
                            A Complete Employee Transportation Management Platform
                        </div>
                        <p className='automating-text'>
                            WhistleOS helps in automating most of the processes involved in the Employee Transporation
                        </p>
                        <Button
                            variant="contained"
                            disableElevation
                            style={{
                                width: "12rem", fontSize: '1.2rem', height: '4rem', backgroundColor: '#0096d5', color: 'white', marginTop: '2rem'
                            }}
                            onClick={() => {
                                history('/contactus')
                                window.scrollTo(0, 0);
                            }}
                        >
                            Contact Us
                        </Button>
                    </div>
                    <div className='whistle-os-image'>
                        <img src={whistleOsMS} alt="" width='100%' height='100%' />
                    </div>
                </div>
                <div className="clients">
                    <img src={invesko} alt="" height='35px' width='120px' />
                    <img src={berkLogo} alt="" height='35px' width='120px' />
                    <img src={oneplus} alt="" height='35px' width='120px' />
                    <img src={examity} alt="" height='35px' width='120px' />
                    <img src={LNT} alt="" height='35px' width='120px' />
                    <img src={ADP} alt="" height='35px' width='120px' />
                </div>
                <div style={{ width: '100%', marginTop: '2rem', borderTop: '1px solid rgba(0,0,0,.1)' }}>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default ManagmentPlatform