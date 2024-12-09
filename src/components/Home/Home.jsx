import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from './Banner'
import AboutSection from './AboutSection'
import UserReg from './UserReg'

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <AboutSection/>
      <UserReg/>
    </div>
  )
}

export default Home
