import React, { useState } from 'react'
import "./index.css"
import LiveTracking from "../../../../Assets/Images/LivetrackingImage.png"
import CustomisedReports from "../../../../Assets/Images/Customized Reports.png"
import Compliance from "../../../../Assets/Images/Compliance.png"


const TransportOperations = () => {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }

    return (
        <div className='main-root-class'>
            <div className="transport-operations-main">
                <div className="conditional-radio-image">
                    {
                        selectedOption === 'option1' && <img src={LiveTracking} height='100%' width='100%' alt='' />
                    }
                    {
                        selectedOption === 'option2' && <img src={CustomisedReports} height='100%' width='100%' alt='' />
                    }
                    {
                        selectedOption === 'option3' && <img src={Compliance} height='100%' width='100%' alt='' />
                    }
                </div>
                <div className="transport-operations-text-cont">
                    <h3>
                        Full Control over the Transport Operations, at all times!
                    </h3>
                    <div className="radio-transportation-container">
                        <label style={{ backgroundColor: selectedOption === 'option1' ? "#f8f9fb" : '' }}>
                            <input
                                type="radio"
                                value="option1"
                                checked={selectedOption === 'option1'}
                                onChange={handleOptionChange}

                            />
                            Live Tracking
                            {
                                selectedOption === 'option1' && <div className='transportation-radio-text'>
                                    The admin teams can have a complete overview of the transport operations and will be able to get real-time updates/alerts in case of issues during the trip.
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
                            Customized Reports
                            {
                                selectedOption === 'option2' && <div className='transportation-radio-text'>
                                    The actionable insights will help the admin teams and key stakeholders in making informed decisions. The trip history data along with the play vehicle movement can be viewed.
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
                            Compliance
                            {
                                selectedOption === 'option3' && <div className='transportation-radio-text'>
                                    The stakeholders can keep track of the documents of every driver effortlessly. In addition, we can set reminders of expiring documents that help in maintaining 100% compliance!
                                </div>
                            }
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransportOperations