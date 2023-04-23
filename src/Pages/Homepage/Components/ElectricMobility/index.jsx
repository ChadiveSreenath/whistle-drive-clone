import React from 'react'
import "./index.css"
import VehicleCharge from "../../../../Assets/Images/parkingImage.png"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'




const ElectricMobility = () => {

    const history = useNavigate()


    return (
        <div className='electric-driven-container'>
            <div className="service-content-center">
                <div className="vehicle-electric-container">
                    <img src={VehicleCharge} alt="" height='100%' width='100%' />
                </div>
                <div className="electric-mobility-main">
                    <p className='electric-text-para'>
                        Electric Mobility is THE Future & we are the Catalyst of Change!
                    </p>
                    <div className='electric-text-heading'>
                        Leading the industry towards Sustainable Transportation
                    </div>
                    <span>
                        Corporate Transport and Intracity Logistics constitutes more than 30% of the urban transportation.
                    </span>
                    <span>
                        As a part of our commitment towards a sustainable future, we are adopting an electric fleet for shorter trips and last-mile logistics.
                    </span>
                    <Button
                        variant="contained"
                        disableElevation
                        style={{
                            width: "12rem", height: '3rem', backgroundColor: '#0096d5', color: 'white', marginTop: '2rem'
                        }}
                        onClick={() => {
                            history('./mobilityos')
                            window.scrollTo(0, 0);
                          }}
                    >
                        Whistle Electric
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ElectricMobility