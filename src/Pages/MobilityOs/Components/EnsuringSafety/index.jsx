import React, { useState } from 'react'
import "./index.css"
import NumberMasking from "../../../../Assets/Images/NumberMasking.png"



const EnsuringSafety = () => {


    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }



    return (
        <div className='main-root-class'>
            <div className="ensuring-saftey-main">
                <div className="safety-security">
                    <h3>
                        Ensuring Safety, Security and Support in every trip
                    </h3>
                    <div className="radio-saftey-container">
                        <label style={{ backgroundColor: selectedOption === 'option1' ? "#f8f9fb" : '' }}>
                            <input
                                type="radio"
                                value="option1"
                                checked={selectedOption === 'option1'}
                                onChange={handleOptionChange}

                            />
                            Safety Features
                            {
                                selectedOption === 'option1' && <div className='saftey-inside-radio-text'>
                                    With advanced safety features like Number Masking, Emergency Alerts, Location Sharing and Safe Drop confirmation, and dedicated customer support 24/7, Employees can now travel with Confidence!
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
                            Trip Tracking
                            {
                                selectedOption === 'option2' && <div className='saftey-inside-radio-text'>
                                    With advanced safety features like Number Masking, Emergency Alerts, Location Sharing and Safe Drop confirmation, and dedicated customer support 24/7, Employees can now travel with Confidence!
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
                            Trip Communications
                            {
                                selectedOption === 'option3' && <div className='saftey-inside-radio-text'>
                                    With advanced safety features like Number Masking, Emergency Alerts, Location Sharing and Safe Drop confirmation, and dedicated customer support 24/7, Employees can now travel with Confidence!
                                </div>
                            }
                        </label>
                    </div>
                </div>
                <div className="number-masking-image">
                    <img src={NumberMasking} alt="" width='100%' height='100%' />
                </div>
            </div>
        </div>
    )
}

export default EnsuringSafety