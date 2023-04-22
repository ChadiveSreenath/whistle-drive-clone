import React from 'react'
import "./index.css"
import officeMap from "../../../../Assets/Images/Officemap.png"

const Enquiry = () => {
    return (
        <div className='enquiry-container'>
            <div className="office-main-container">
                <div className="office-adress-container">
                    <p>
                        Corporate Head Office
                    </p>
                    <span>
                        Address - Hyderabad CDC Towers, Plot No. 10/8, Road – 5, Block B, IDA, Nacharam, Hyderabad, Telangana 500076
                    </span>
                    <span>
                        Mobile +91 8499040404
                    </span>
                    <span>
                        Email hello@whistledrive.com
                    </span>

                </div>
                <div className="office-map">
                    <img src={officeMap} alt="" width='100%' height='100%' />
                </div>
            </div>
        </div>
    )
}

export default Enquiry