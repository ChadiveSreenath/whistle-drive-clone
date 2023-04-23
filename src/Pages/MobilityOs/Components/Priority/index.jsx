import React from 'react'
import "./index.css"
import priorityImg from "../../../../Assets/Images/employeePrivacy.png"


const EmployePriority = () => {
    return (
        <div className='main-root-class'>
            <div className="priority-container">
                <div className="priority-image">
                    <img src={priorityImg} alt="" />
                </div>
                <div className="priority-cont-text">
                    <div className='privacy-a-text'>
                        Making your employees' privacy a priority!
                    </div>
                    <span>
                        Number Masking
                    </span>
                    <p>
                        feature to avoid direct contact between driver & an employee
                    </p>
                    <span>
                        Data Masking
                    </span>
                    <p>
                        to limit ground ops and other teams accessing the employee details
                    </p>
                    <p>
                        Our platform assigns a Unique Identification Number for every employee using which the stakeholders can identify and communicate without the need for any further details.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EmployePriority