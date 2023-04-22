import React from 'react'
import HomePage from '../Pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import MobilityOs from '../Pages/MobilityOs'
import ContactUs from '../Pages/ContactUs'

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/mobilityos' element={<MobilityOs />} />
      <Route path='/contactus' element={<ContactUs />} />
    </Routes>
  )
}

export default NavigationRoutes