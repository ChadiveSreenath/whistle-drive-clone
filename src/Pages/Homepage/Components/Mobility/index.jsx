import React from 'react'
import './index.css'
import EnterPrise from '../../../../Assets/Images/EnterPrise.png'
import employee from '../../../../Assets/Images/employee.png'
import { AiOutlineArrowRight } from 'react-icons/ai'




const TechMobility = () => {
    return (
        <div className='tech-mobility'>
            <div className="mobility-heading">
                Tech powered mobility solutions for businesses
            </div>
            <div className="mobility-transportation">
                <div className="enterprise-logistics">
                    <div>
                        <img src={EnterPrise} alt=""  className='logistics-image' />
                    </div>
                    <div className='mobility-text'>
                        <span className='logistics-text-data'>Enterprise Logistics</span>
                        <p>Enabling businesses across industries with full-stack intracity logistics solutions like transportation, micro-warehousing and last-mile deliveries.</p>
                        <div style={{ color: '#0096d5', fontWeight: '600',  cursor: 'pointer',fontSize:'1rem' }}>
                            <span >Know More </span>
                            <span style={{ top: '6px', position: 'relative', }}>
                                <AiOutlineArrowRight />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="enterprise-logistics">
                    <div className=''>
                        <img src={employee} alt="" className='logistics-image' />
                    </div>
                    <div className='mobility-text'>
                        <span className='logistics-text-data'>
                            Employee Transportation
                        </span>
                        <p>An End-to-End Employee Transportation Solution, a unique fleet + technology service model and Executive Car Rental services for Corporates.</p>
                        <div style={{ color: '#0096d5', fontWeight: '600',fontSize:'1rem',cursor:'pointer'}}>
                            <span>Know More </span>
                            <span style={{ top: '6px', position: 'relative' }}>
                                <AiOutlineArrowRight />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechMobility