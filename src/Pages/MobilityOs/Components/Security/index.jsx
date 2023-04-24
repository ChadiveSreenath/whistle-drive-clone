import React, { useState } from 'react'
import "./index.css"
import TripModifications from "../../../../Assets/Images/Trip Modifications.png"
import DriverDocument from "../../../../Assets/Images/Uploading Cab & Driver Documents.png"




const GroundOps = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div className='main-root-class'>
      <div className="ground-operations-main">
        <div className="safety-security">
          <h3>
            Making it easy for the Ground Ops!
          </h3>
          <div className="radio-saftey-container">
            <label style={{ backgroundColor: selectedOption === 'option1' ? "#f8f9fb" : '' }}>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={handleOptionChange}

              />
              Trip Modifications
              {
                selectedOption === 'option1' && <div className='saftey-inside-radio-text'>
                  For any last-minute changes! Now the supervisors can create a new trip or modify the planned trips at ease.
                </div>
              }
            </label>
            <label style={{ backgroundColor: selectedOption === 'option2' ? "#f8f9fb" : '' }}>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={handleOptionChange}
              />
              Trip Alerts & Monitoring
              {
                selectedOption === 'option2' && <div className='saftey-inside-radio-text'>
                  Trip alerts give live updates to supervisors on late boardings, cab overspeed, trip delays, escort trips, employee safe drop-offs, and emergency alerts helping them stay informed.
                </div>
              }
            </label>
            <label style={{ backgroundColor: selectedOption === 'option3' ? "#f8f9fb" : '' }}>
              <input
                type="radio"
                value="option3"
                checked={selectedOption === 'option3'}
                onChange={handleOptionChange}
              />
              Uploading Cab & Driver Documents
              {
                selectedOption === 'option3' && <div className='saftey-inside-radio-text'>
                  The supervisors can verify the cab & driver documents and upload them to the platform using their mobile application. And a supervisor also receives alerts in case of nearing dates of document renewals to co-ordinate with the driver partners.
                </div>
              }
            </label>
          </div>
        </div>
        <div className="conditional-ground-radio-image">
          {
            selectedOption === 'option1' && <img src={TripModifications} alt='' />
          }
          {
            selectedOption === 'option2' && <img src={TripModifications}  alt=''/>
          }
          {
            selectedOption === 'option3' && <img src={DriverDocument} alt='' />
          }
        </div>

      </div>
    </div>
  )
}

export default GroundOps