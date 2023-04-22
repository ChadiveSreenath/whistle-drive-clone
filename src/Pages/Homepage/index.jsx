import React from 'react'
import "./index.css"
import TopPlatfrom from './Components/TopPlatfrom/TopPlatfrom'
import TechMobility from './Components/Mobility'
import DataDriven from './Components/DataDriven'

const HomePage = () => {
  return (
    <div className='home-page-container'>
      <TopPlatfrom />
      <TechMobility />
      <DataDriven />
    </div>
  )
}

export default HomePage