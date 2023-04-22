import React from 'react'
import './index.css'
import { BsCheck } from 'react-icons/bs'
import DataImage from "../../../../Assets/Images/DataDriven.png"

const DataDriven = () => {
    return (
        <div className='data-driven-container'>
            <div className="data-content-center">
                <div className="data-image">
                    <img src={DataImage} alt="" width='100%' height='100%' />
                </div>
                <div className="data-driven-text">
                    <span className="data-heading">
                        Data-driven operations powered by WhistleOS
                    </span>
                    <div className="os-text">
                        WhistleOS is our AI-powered platform developed with the core aim of facilitating predictability & visibility in operations.
                    </div>
                    <div className="whistle-helps">
                        <span >
                            WhistleOS helps with,
                        </span>
                        <ul>
                            <li>
                                <span>
                                    <BsCheck style={{
                                        color: '#0096d5',
                                        backgroundColor: '#CCEFFF', position: 'relative', top: '4px', borderRadius: '50%'
                                    }} size='20px' />
                                </span>
                                Smart Routing Algorithm
                            </li>
                            <li>
                                <span>
                                    <BsCheck style={{
                                        color: '#0096d5',
                                        backgroundColor: '#CCEFFF', position: 'relative', top: '4px', borderRadius: '50%'
                                    }} size='20px' />
                                </span>
                                Live Tracking of Vehicles (Cabs, Bus and Trucks)
                            </li>
                            <li>
                                <span>
                                    <BsCheck style={{
                                        color: '#0096d5',
                                        backgroundColor: '#CCEFFF', position: 'relative', top: '4px', borderRadius: '50%'
                                    }} size='20px' />
                                </span>
                                Seamless Vehicle Request Process
                            </li>
                            <li>
                                <span>
                                    <BsCheck style={{
                                        color: '#0096d5',
                                        backgroundColor: '#CCEFFF', position: 'relative', top: '4px', borderRadius: '50%'
                                    }} size='20px' />
                                </span>
                                In-app Trip Communication
                            </li>
                            <li>
                                <span>
                                    <BsCheck style={{
                                        color: '#0096d5',
                                        backgroundColor: '#CCEFFF', position: 'relative', top: '4px', borderRadius: '50%'
                                    }} size='20px' />
                                </span>
                                Advanced Safety & Security Features
                            </li>
                            <li>
                                <span>
                                    <BsCheck style={{
                                        color: '#0096d5',
                                        backgroundColor: '#CCEFFF', position: 'relative', top: '4px', borderRadius: '50%'
                                    }} size='20px' />
                                </span>
                                Intelligent Reports & Analytics
                            </li>
                            <li>
                                <span>
                                    <BsCheck style={{
                                        color: '#0096d5',
                                        backgroundColor: '#CCEFFF', position: 'relative', top: '4px', borderRadius: '50%'
                                    }} size='20px' />
                                </span>
                                Digitized Billing & Invoicing
                            </li>
                        </ul>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataDriven