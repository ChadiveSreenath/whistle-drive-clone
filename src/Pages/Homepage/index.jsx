import React from 'react'
import "./index.css"
import TopPlatfrom from './Components/TopPlatfrom/TopPlatfrom'
import TechMobility from './Components/Mobility'
import DataDriven from './Components/DataDriven'
import SinglePlatform from './Components/SinglePlatform'
import ThriveSection from './Components/ThriveSection'
import ServiceDelivery from './Components/ServiceDelivery'
import ElectricMobility from './Components/ElectricMobility'
import HomepageContact from '../../Components/Contact'

const HomePage = () => {
  return (
    <div className='home-page-container'>
      <TopPlatfrom />
      <TechMobility />
      <DataDriven />
      <SinglePlatform />
      <ThriveSection />
      <ServiceDelivery />
      <ElectricMobility />
      <HomepageContact />
    </div>
  )
}

export default HomePage