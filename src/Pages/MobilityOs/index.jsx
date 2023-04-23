import React from 'react'
import './index.css'
import ManagmentPlatform from './Components/Managment'
import HomepageContact from '../../Components/Contact'
import EmployePriority from './Components/Priority'
import WhatsInIt from './Components/WhatsInIt'
import EnsuringSafety from './Components/EnsuringSafety'
import TransportOperations from './Components/TransportOperations'
import GroundOps from './Components/GroundOps'

const MobilityOs = () => {
    return (
        <div>
            <ManagmentPlatform />
            <WhatsInIt />
            <EnsuringSafety />
            <EmployePriority />
            <TransportOperations />
            <GroundOps />
            <HomepageContact />
        </div>
    )
}

export default MobilityOs


