import React from 'react'
import './index.css'
import { BsRecordCircleFill } from "react-icons/bs"

const SinglePlatform = () => {
    return (
        <div className='single-platform'>
            <div className="single-platform-container">
                <div className="intracity-logistics">
                    <p>Enterprise Logistics</p>
                    <div className='intracity-heading'>
                        A single platform for full-stack intracity Logistics
                    </div>
                    <div>
                        <ul className='text-list-single'>
                            <li>
                                <BsRecordCircleFill style={{ backgroundColor: '#0096d5', color: '#a7d5eb', borderRadius: '50%' ,marginTop:'6px'}} />
                                <div>
                                    <span>Warehousing & Fulfillment</span>
                                    <span>Storage and Customized Packaging.</span>
                                </div>
                            </li>
                            <li>
                                <BsRecordCircleFill style={{ backgroundColor: '#0096d5', color: '#a7d5eb', borderRadius: '50%',marginTop:'6px' }} />
                                <div>
                                    <span>Technology Solution</span>
                                    <span>WMS & OMS Integration and Logistics Tech.</span>
                                </div>
                            </li>
                            <li>
                                <BsRecordCircleFill style={{ backgroundColor: '#0096d5', color: '#a7d5eb', borderRadius: '50%',marginTop:'6px' }} />
                                <div>
                                    <span>Transporation/Delivery</span>
                                    <span>Mid Mile, Last Mile and B2B Logistics.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="fully-managed">
                    <p>Employee Transportation</p>
                    <div className='intracity-heading '>
                        Fully-managed solutions for Employee Transportation
                    </div>
                    <ul className='text-list-single'>
                        <li>
                            <BsRecordCircleFill style={{ backgroundColor: '#0096d5', color: '#a7d5eb', borderRadius: '50%',marginTop:'6px' }} />
                            <div>
                                <span>Cab</span>
                                <span>Industry Complaint Cabs for Employee Transport.</span>
                            </div>
                        </li>
                        <li>
                            <BsRecordCircleFill style={{ backgroundColor: '#0096d5', color: '#a7d5eb', borderRadius: '50%',marginTop:'6px' }} />
                            <div>
                                <span> Bus</span>
                                <span>Buses for Point Pickups and Last-mile Connectivity.</span>
                            </div>
                        </li>
                        <li>
                            <BsRecordCircleFill style={{ backgroundColor: '#0096d5', color: '#a7d5eb', borderRadius: '50%',marginTop:'6px' }} />
                            <div>
                                <span>Executive Car Rentals</span>
                                <span>Executive Business Travel and Airport Pickup & Drop.</span>
                            </div>
                        </li>
                        <li>
                            <BsRecordCircleFill style={{ backgroundColor: '#0096d5', color: '#a7d5eb', borderRadius: '50%',marginTop:'6px' }} />
                            <div>
                                <span>Technology Platform</span>
                                <span>Full-stack technology solution to digitize our transport operations</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SinglePlatform