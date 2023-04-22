import React from 'react'
import './index.css'
import IndiaLocations from "../../../../Assets/Images/indialocations.png"

const LocatedIn = () => {

    const cities = ["Hyderabad", 'Bengaluru', 'Chennai', 'Pune', '  Delhi NCR', 'Mumbai', 'Vijayawada', 'Guntur', 'Kurnool', 'Vizag', 'Ahmedabad', 'Gurugram']
    return (
        <div className='enquiry-container'>
            <div className="office-location-container">
                <div className="locatedin-india">
                    <div className='located-heading'>
                        We are located in
                    </div>
                    <div className="cities-container">
                        {
                            cities.map((el) => (
                                <div  key={el} className='india-city-location'>
                                    {el}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="office-india-map">
                    <img src={IndiaLocations} alt="" width='90%' height='90%' />
                </div>
            </div>
        </div>
    )
}

export default LocatedIn