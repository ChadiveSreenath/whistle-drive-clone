import React from 'react'
import "./index.css"
import mapImage from "../../../../Assets/Images/whistlemap.png"

const ServiceDelivery = () => {
    return (
        <div className='data-driven-container'>
            <div className="service-content-center">
                <div className="service-delivery-main">
                    <p className='service-heading-text'>
                        Intelligent Product + Service Delivery!
                    </p>
                    <span className='rethinking-text'>
                        Rethinking Urban Transportation
                    </span>
                    <div>
                        <p>
                            Advanced Technology Platform
                        </p>
                        <span>
                            We use technology as an enabler to drive efficiency. With a core focus on automation, visibility, and predictability, we empower all the stakeholders with required mobile applications and web dashboards.
                        </span>
                    </div>
                    <div>
                        <p>
                            Multi-City Scalable Operations
                        </p>
                        <span>
                            With a vision of creating long-time benefits for our driver-partners and clients, we developed robust operational models that help us in scaling our operations to multiple cities across India.
                        </span>
                    </div>

                </div>
                <div className="map-container">
                    <img src={mapImage} alt="" height='100%' width='100%' />
                </div>
            </div>
        </div>
    )
}

export default ServiceDelivery